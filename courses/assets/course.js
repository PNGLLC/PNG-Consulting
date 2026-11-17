/* PNG Solutions — course shell engine.
   Each course folder defines window.COURSE in its own course-data.js, then loads this file.
   Views are hash-routed: #home, #lesson-1..n, #check, #done. */
(function () {
  'use strict';

  var C = window.COURSE;
  if (!C) { return; }

  var BOOK_URL = 'https://calendly.com/llc-pngsolutions/free-15-min-process-audit';
  var KEY = 'png-course-' + C.id;
  var app = document.getElementById('app');
  var state = load();

  // ---------- storage (per browser; may be unavailable) ----------
  function load() {
    var blank = { done: {}, answers: {}, score: null };
    try {
      var raw = window.localStorage.getItem(KEY);
      if (!raw) { return blank; }
      var s = JSON.parse(raw);
      return { done: s.done || {}, answers: s.answers || {}, score: (typeof s.score === 'number') ? s.score : null };
    } catch (e) { return blank; }
  }
  function save() {
    try { window.localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* keep in memory only */ }
  }

  // ---------- helpers ----------
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
  }
  function lessonsDone() {
    var n = 0;
    for (var i = 0; i < C.lessons.length; i++) { if (state.done[i]) { n++; } }
    return n;
  }
  function pct() {
    var total = C.lessons.length + 1; // lessons + knowledge check
    var got = lessonsDone() + (state.score !== null ? 1 : 0);
    return Math.round((got / total) * 100);
  }
  function totalMinutes() {
    var m = 0;
    C.lessons.forEach(function (l) { m += l.minutes; });
    return m + 3;
  }
  function route() {
    var h = (window.location.hash || '#home').slice(1);
    var m = /^lesson-(\d+)$/.exec(h);
    if (m) {
      var i = parseInt(m[1], 10) - 1;
      if (i >= 0 && i < C.lessons.length) { return { view: 'lesson', index: i }; }
    }
    if (h === 'check') { return { view: 'check' }; }
    if (h === 'done' && state.score !== null) { return { view: 'done' }; }
    return { view: 'home' };
  }

  // ---------- shared pieces ----------
  function sidebar(r) {
    var items = C.lessons.map(function (l, i) {
      var cls = [];
      if (state.done[i]) { cls.push('done'); }
      if (r.view === 'lesson' && r.index === i) { cls.push('active'); }
      return '<li><a class="' + cls.join(' ') + '" href="#lesson-' + (i + 1) + '"' +
        (cls.indexOf('active') > -1 ? ' aria-current="page"' : '') + '>' +
        '<span class="dot" aria-hidden="true">' + (state.done[i] ? '&#10003;' : (i + 1)) + '</span>' +
        '<span>' + esc(l.title) + '<small>' + l.minutes + ' min' + (state.done[i] ? ' &middot; completed' : '') + '</small></span></a></li>';
    }).join('');
    var checkCls = [];
    if (state.score !== null) { checkCls.push('done'); }
    if (r.view === 'check' || r.view === 'done') { checkCls.push('active'); }
    items += '<li><a class="' + checkCls.join(' ') + '" href="#check">' +
      '<span class="dot" aria-hidden="true">' + (state.score !== null ? '&#10003;' : '?') + '</span>' +
      '<span>Knowledge check<small>' + C.quiz.length + ' questions</small></span></a></li>';

    return '<aside id="sidebar" class="col-lg-4 col-xl-3 mb-4 order-2 order-lg-1">' +
      '<div class="panel">' +
      '<a href="#home" class="text-decoration-none"><div class="lesson-kicker mb-1">For ' + esc(C.role) + '</div>' +
      '<h2 class="h6 mb-3">' + esc(C.title) + '</h2></a>' +
      '<div class="d-flex justify-content-between small mb-1"><span>Your progress</span><span>' + pct() + '%</span></div>' +
      '<div class="progress mb-3" role="progressbar" aria-label="Course progress" aria-valuenow="' + pct() + '" aria-valuemin="0" aria-valuemax="100">' +
      '<div class="progress-bar" style="width:' + pct() + '%"></div></div>' +
      '<nav aria-label="Lessons"><ul class="lesson-list">' + items + '</ul></nav>' +
      '</div></aside>';
  }

  // ---------- views ----------
  function viewHome() {
    var started = lessonsDone() > 0 || state.score !== null;
    var next = 0;
    while (next < C.lessons.length && state.done[next]) { next++; }
    var resumeHref = next < C.lessons.length ? '#lesson-' + (next + 1) : (state.score !== null ? '#done' : '#check');

    var outcomes = C.outcomes.map(function (o) { return '<li>' + esc(o) + '</li>'; }).join('');
    var lessons = C.lessons.map(function (l, i) {
      return '<li><a class="' + (state.done[i] ? 'done' : '') + '" href="#lesson-' + (i + 1) + '">' +
        '<span class="dot" aria-hidden="true">' + (state.done[i] ? '&#10003;' : (i + 1)) + '</span>' +
        '<span>' + esc(l.title) + '<small>' + esc(l.summary) + ' &middot; ' + l.minutes + ' min</small></span></a></li>';
    }).join('');

    return '<section class="course-hero"><div class="container">' +
      '<span class="eyebrow">For ' + esc(C.role) + '</span>' +
      '<h1 class="mb-3">' + esc(C.title) + '</h1>' +
      '<p class="lead mb-4">' + esc(C.subtitle) + '</p>' +
      '<div class="meta-row mb-4">' +
      '<span><strong>' + C.lessons.length + '</strong> lessons</span>' +
      '<span><strong>' + totalMinutes() + '</strong> minutes</span>' +
      '<span><strong>' + C.quiz.length + '</strong>-question check</span>' +
      '<span>Industry: <strong>' + esc(C.industry) + '</strong></span></div>' +
      '<a class="btn btn-accent btn-lg me-2 mb-2" href="' + resumeHref + '">' + (started ? 'Continue' : 'Start the module') + '</a>' +
      (started ? '<button type="button" class="btn btn-light-outline btn-lg mb-2" id="restart">Start over</button>' : '') +
      '</div></section>' +
      '<div class="container py-5"><div class="row g-4">' +
      '<div class="col-lg-7"><div class="panel panel-accent h-100"><h2 class="h4 mb-3">The problem this solves</h2>' + C.problemHtml + '</div></div>' +
      '<div class="col-lg-5"><div class="panel h-100"><h2 class="h4 mb-1">By the end, you can</h2><p class="small text-secondary mb-3">Written for: ' + esc(C.audience) + '</p><ul class="outcome-list">' + outcomes + '</ul></div></div>' +
      '<div class="col-12"><div class="panel"><h2 class="h4 mb-3">What is inside</h2><ul class="lesson-list">' + lessons +
      '<li><a class="' + (state.score !== null ? 'done' : '') + '" href="#check"><span class="dot" aria-hidden="true">' + (state.score !== null ? '&#10003;' : '?') + '</span>' +
      '<span>Knowledge check<small>' + C.quiz.length + ' scenario questions with feedback, then your take-away ' + esc(C.jobAid.kind) + '</small></span></a></li>' +
      '</ul></div></div>' +
      '</div></div>';
  }

  function viewLesson(r) {
    var l = C.lessons[r.index];
    var isLast = r.index === C.lessons.length - 1;
    var prev = r.index > 0 ? '<a class="btn btn-outline-navy" href="#lesson-' + r.index + '">&larr; Back</a>' : '<a class="btn btn-outline-navy" href="#home">&larr; Overview</a>';
    var nextLabel = isLast ? 'Complete and take the check &rarr;' : 'Complete and continue &rarr;';
    return '<div class="container py-4 py-lg-5"><div class="row">' + sidebar(r) +
      '<div class="col-lg-8 col-xl-9 order-1 order-lg-2 mb-4"><article class="panel lesson-body">' +
      '<div class="lesson-kicker">Lesson ' + (r.index + 1) + ' of ' + C.lessons.length + ' &middot; ' + l.minutes + ' min</div>' +
      '<h2 id="view-title" tabindex="-1">' + esc(l.title) + '</h2>' +
      '<p class="text-secondary mb-4">' + esc(l.summary) + '</p>' +
      l.html +
      '<hr class="my-4"><div class="d-flex flex-wrap gap-2 justify-content-between no-print">' + prev +
      '<button type="button" class="btn btn-accent" id="complete" data-index="' + r.index + '">' + nextLabel + '</button></div>' +
      '</article></div></div></div>';
  }

  function viewCheck(r) {
    var submitted = state.score !== null;
    var qs = C.quiz.map(function (q, qi) {
      var picked = state.answers[qi];
      var opts = q.options.map(function (o, oi) {
        var cls = 'form-check';
        if (submitted) {
          if (oi === q.answer) { cls += ' is-right'; }
          else if (picked === oi) { cls += ' is-wrong'; }
        }
        var id = 'q' + qi + 'o' + oi;
        return '<div class="' + cls + '"><input class="form-check-input" type="radio" name="q' + qi + '" id="' + id + '" value="' + oi + '"' +
          (picked === oi ? ' checked' : '') + (submitted ? ' disabled' : '') + '>' +
          '<label class="form-check-label" for="' + id + '">' + esc(o) + '</label></div>';
      }).join('');
      var fb = '';
      if (submitted) {
        var ok = picked === q.answer;
        fb = '<div class="q-feedback"><strong class="' + (ok ? 'right' : 'wrong') + '">' + (ok ? 'Correct.' : 'Not quite.') + '</strong> ' + esc(q.why) + '</div>';
      }
      return '<fieldset class="q-card"><legend>' + (qi + 1) + '. ' + esc(q.q) + '</legend>' + opts + fb + '</fieldset>';
    }).join('');

    var actions = submitted
      ? '<a class="btn btn-accent" href="#done">See your result &rarr;</a> <button type="button" class="btn btn-outline-navy" id="retake">Retake</button>'
      : '<button type="submit" class="btn btn-accent">Check my answers</button>';

    return '<div class="container py-4 py-lg-5"><div class="row">' + sidebar(r) +
      '<div class="col-lg-8 col-xl-9 order-1 order-lg-2 mb-4">' +
      '<div class="lesson-kicker">Knowledge check</div>' +
      '<h2 id="view-title" tabindex="-1" class="mb-1">Would you handle it the right way?</h2>' +
      '<p class="text-secondary mb-4">' + C.quiz.length + ' short scenarios. Pick the best answer for each, then check your work.</p>' +
      '<form id="quiz" novalidate>' + qs +
      '<div id="quiz-msg" class="text-danger mb-3" role="alert"></div>' +
      '<div class="d-flex flex-wrap gap-2 no-print">' + actions + '</div></form>' +
      '</div></div></div>';
  }

  function viewDone(r) {
    var total = C.quiz.length;
    var p = Math.round((state.score / total) * 100);
    var passed = p >= 80;
    var groups = C.jobAid.groups.map(function (g, gi) {
      var items = g.items.map(function (it, ii) {
        var id = 'ja' + gi + '-' + ii;
        return '<div class="form-check"><input class="form-check-input" type="checkbox" id="' + id + '"><label class="form-check-label" for="' + id + '">' + esc(it) + '</label></div>';
      }).join('');
      return (g.heading ? '<h4>' + esc(g.heading) + '</h4>' : '') + items;
    }).join('');

    return '<div class="container py-4 py-lg-5"><div class="row">' + sidebar(r) +
      '<div class="col-lg-8 col-xl-9 order-1 order-lg-2 mb-4">' +
      '<div class="panel text-center mb-4">' +
      '<div class="score-ring" style="--pct:' + p + '"><div><span class="num">' + state.score + '/' + total + '</span><span class="lbl">Score</span></div></div>' +
      '<h2 id="view-title" tabindex="-1">' + (passed ? 'Module complete' : 'Almost there') + '</h2>' +
      '<p class="mb-3 mx-auto" style="max-width:36rem">' + (passed
        ? 'You scored ' + p + '%. Keep the ' + esc(C.jobAid.kind) + ' below where the work happens and use it on the next real one.'
        : 'You scored ' + p + '%. Review the feedback, revisit the lessons you missed, and retake the check. The passing mark is 80%.') + '</p>' +
      '<div class="no-print"><a class="btn btn-outline-navy me-2" href="#check">Review answers</a>' +
      (passed ? '' : '<button type="button" class="btn btn-accent" id="retake">Retake the check</button>') + '</div></div>' +
      '<div class="job-aid mb-4"><div class="lesson-kicker">Take-away ' + esc(C.jobAid.kind) + '</div>' +
      '<h3>' + esc(C.jobAid.title) + '</h3><p class="text-secondary">' + esc(C.jobAid.intro) + '</p>' + groups +
      '<div class="mt-3 no-print"><button type="button" class="btn btn-outline-navy btn-sm" id="print">Print this ' + esc(C.jobAid.kind) + '</button></div></div>' +
      '<div class="cta-band no-print"><div class="row align-items-center g-3"><div class="col-md-8">' +
      '<h3 class="h4">' + esc(C.cta.heading) + '</h3><p class="mb-0">' + esc(C.cta.body) + '</p></div>' +
      '<div class="col-md-4 text-md-end"><a class="btn btn-accent btn-lg" href="' + BOOK_URL + '" target="_blank" rel="noopener">Book a free 15-minute call</a></div></div></div>' +
      '</div></div></div>';
  }

  // ---------- render + events ----------
  function render(focusTitle) {
    var r = route();
    var html;
    if (r.view === 'lesson') { html = viewLesson(r); }
    else if (r.view === 'check') { html = viewCheck(r); }
    else if (r.view === 'done') { html = viewDone(r); }
    else { html = viewHome(); }
    app.innerHTML = html;
    document.title = (r.view === 'lesson' ? C.lessons[r.index].title + ' | ' : '') + C.title + ' | PNG Solutions LLC';
    window.scrollTo(0, 0);
    if (focusTitle) {
      var t = document.getElementById('view-title');
      if (t) { t.focus({ preventScroll: true }); }
    }
  }

  app.addEventListener('click', function (e) {
    var el = e.target.closest('button');
    if (!el) { return; }
    if (el.id === 'complete') {
      var i = parseInt(el.getAttribute('data-index'), 10);
      state.done[i] = true; save();
      window.location.hash = (i + 1 < C.lessons.length) ? '#lesson-' + (i + 2) : '#check';
    } else if (el.id === 'retake') {
      state.answers = {}; state.score = null; save();
      if (window.location.hash === '#check') { render(true); } else { window.location.hash = '#check'; }
    } else if (el.id === 'restart') {
      state = { done: {}, answers: {}, score: null }; save(); render(false);
    } else if (el.id === 'print') {
      window.print();
    }
  });

  app.addEventListener('submit', function (e) {
    if (e.target.id !== 'quiz') { return; }
    e.preventDefault();
    var answers = {}, missing = [];
    C.quiz.forEach(function (q, qi) {
      var sel = e.target.querySelector('input[name="q' + qi + '"]:checked');
      if (sel) { answers[qi] = parseInt(sel.value, 10); } else { missing.push(qi + 1); }
    });
    if (missing.length) {
      document.getElementById('quiz-msg').textContent = 'Answer every question first. Still open: ' + missing.join(', ') + '.';
      return;
    }
    var score = 0;
    C.quiz.forEach(function (q, qi) { if (answers[qi] === q.answer) { score++; } });
    state.answers = answers; state.score = score; save();
    window.location.hash = '#done';
  });

  window.addEventListener('hashchange', function () { render(true); });

  // per-course accent
  if (C.accent) { document.documentElement.style.setProperty('--accent', C.accent); }
  if (C.accentSoft) { document.documentElement.style.setProperty('--accent-soft', C.accentSoft); }
  render(false);
})();
