window.COURSE = {
  id: 'smallbiz-out-of-your-head',
  industry: 'Small business',
  title: 'Get It Out of Your Head',
  subtitle: 'Document your three most important processes so someone else can run them, and the business stops depending on you being in the room.',
  audience: 'Owners and managers of small teams',
  accent: '#0056A0',
  accentSoft: '#E6EFF7',

  problemHtml: `
    <p>In most small businesses the real operating manual is the owner's memory. It works while the owner touches everything. It breaks when volume grows, when someone new starts, or the first time the owner takes a week off.</p>
    <p>Owners say it themselves in forum after forum: the hardest part of growing is having their hands in too many things. At the same time, finding qualified people has been the top problem in the National Federation of Independent Business monthly survey for much of 2026, so every hire has to become useful quickly.</p>
    <p class="mb-0">This module gets you to <strong>three written processes that another person has run without you</strong>. No software needed.</p>`,

  outcomes: [
    'Explain what it costs when a process lives only in your head',
    'Choose the three processes worth documenting first',
    'Write a one-page process in about 30 minutes',
    'Test it by having someone else run it without your help',
    'Assign an owner and keep it current'
  ],

  lessons: [
    {
      title: 'The cost of being the only one who knows',
      summary: 'Why the business stalls at the size of your attention',
      minutes: 4,
      html: `
        <p>When a process exists only in your head, three things happen, and each one costs money.</p>
        <ol class="steps">
          <li><strong>Everything waits for you.</strong> Quotes, invoices and customer answers queue up behind whatever you are doing right now.</li>
          <li><strong>Work is done differently each time.</strong> Without a written standard, every person invents their own version, and customers notice.</li>
          <li><strong>New people take months to become useful.</strong> They learn by interrupting you, which slows both of you down.</li>
        </ol>
        <div class="callout">
          <span class="callout-title">A quick test</span>
          <p>If you were unreachable for one week starting tomorrow, which three things would stop? Write them down. You will use that list in the next lesson.</p>
        </div>
        <h3>What a written process is, and is not</h3>
        <div class="compare">
          <div class="bad"><div class="label">Not this</div><p class="mb-0">A thick manual nobody opens, written once and out of date within a month.</p></div>
          <div class="good"><div class="label">This</div><p class="mb-0">One page per process: when it starts, the steps in order, and what "done right" looks like.</p></div>
        </div>
        <p>The goal is not paperwork. The goal is that a capable person can do the job correctly without calling you.</p>`
    },
    {
      title: 'Pick your three',
      summary: 'Score your processes and start where it pays back fastest',
      minutes: 4,
      html: `
        <p>You cannot document everything, and you should not try. Start with three. Use your list from the last lesson and score each item from 1 to 3 on these questions.</p>
        <div class="table-responsive">
          <table class="table table-bordered table-example">
            <thead><tr><th>Question</th><th>1</th><th>2</th><th>3</th></tr></thead>
            <tbody>
              <tr><td><strong>How often does it happen?</strong></td><td>Monthly or less</td><td>Weekly</td><td>Daily</td></tr>
              <tr><td><strong>What does a mistake cost?</strong></td><td>A small annoyance</td><td>Rework or a delay</td><td>Lost money or a lost customer</td></tr>
              <tr><td><strong>Could someone else do it?</strong></td><td>Needs your judgment</td><td>With some coaching</td><td>Yes, with clear steps</td></tr>
            </tbody>
          </table>
        </div>
        <p>Add the three scores. Your top three totals are your starting list.</p>
        <h3>A worked example</h3>
        <div class="table-responsive">
          <table class="table table-bordered table-example">
            <thead><tr><th>Process</th><th>How often</th><th>Cost of a mistake</th><th>Hand-off</th><th>Total</th></tr></thead>
            <tbody>
              <tr><td>Sending invoices and following up</td><td>2</td><td>3</td><td>3</td><td><strong>8</strong></td></tr>
              <tr><td>Answering new customer inquiries</td><td>3</td><td>3</td><td>2</td><td><strong>8</strong></td></tr>
              <tr><td>Setting up a new customer or job</td><td>2</td><td>2</td><td>3</td><td><strong>7</strong></td></tr>
              <tr><td>Pricing an unusual job</td><td>1</td><td>3</td><td>1</td><td>5</td></tr>
            </tbody>
          </table>
        </div>
        <div class="callout callout-plain">
          <span class="callout-title">Leave the judgment calls for later</span>
          <p>Pricing an unusual job scored high on cost but low on hand-off. Processes that depend on your experience are poor first choices. Start with the repeatable ones and win your time back there.</p>
        </div>`
    },
    {
      title: 'Write it in 30 minutes',
      summary: 'A one-page format, and the fastest way to fill it in',
      minutes: 5,
      html: `
        <p>The fastest way to write a process is to do it once while paying attention. Next time the task comes up, record your screen or have someone take notes while you talk through it. Then fill in this one-page format.</p>
        <ol class="steps">
          <li><strong>Name and purpose.</strong> One line: what this process is for.</li>
          <li><strong>Trigger.</strong> What starts it? "A customer accepts a quote." "It is the 1st of the month."</li>
          <li><strong>Steps, in order.</strong> Start each one with a verb. Aim for five to twelve steps. If you have more, it is probably two processes.</li>
          <li><strong>What "done right" looks like.</strong> How would someone know they did it correctly?</li>
          <li><strong>Where things are.</strong> The template, the folder, the system it lives in, and who has access.</li>
          <li><strong>Exceptions.</strong> The two or three situations where the person should stop and ask.</li>
        </ol>
        <div class="compare">
          <div class="bad"><div class="label">Too vague</div><p class="mb-0">"Follow up on unpaid invoices."</p></div>
          <div class="good"><div class="label">Usable</div><p class="mb-0">"Every Monday, open the unpaid invoice report. For each invoice more than 7 days past due, send the reminder template and note the date in the tracker."</p></div>
        </div>
        <div class="callout">
          <span class="callout-title">Write for a smart new hire</span>
          <p>Assume the reader is capable but has never seen your business. Leave out the history and the reasons. Put in every step you do without thinking.</p>
        </div>
        <p>Do not polish it. A rough page that exists is worth more than a perfect one you plan to write someday. You will fix it in the next lesson.</p>`
    },
    {
      title: 'Test it and hand it off',
      summary: 'The silent run, an owner, and a review date',
      minutes: 4,
      html: `
        <p>A process is not finished when you have written it. It is finished when someone else has run it without you.</p>
        <h3>The silent run</h3>
        <ol class="steps">
          <li><strong>Hand the page to someone who has not done the task.</strong></li>
          <li><strong>Watch, and say nothing.</strong> Every time you want to step in, write down why. That is a missing step.</li>
          <li><strong>Note every question they ask.</strong> Each question is a gap in the page.</li>
          <li><strong>Fix the page, not the person.</strong> Update it that day while it is fresh.</li>
          <li><strong>Run it once more.</strong> When they finish without asking you anything, it is ready.</li>
        </ol>
        <h3>Make it stick</h3>
        <ul>
          <li><strong>One named owner.</strong> A person, not a department. They run it and they keep the page current.</li>
          <li><strong>One place.</strong> Keep every process in the same shared folder so nobody has to ask where it is.</li>
          <li><strong>A review date.</strong> Put a reminder on the calendar every three months. Processes drift as the business changes.</li>
        </ul>
        <div class="callout callout-plain">
          <span class="callout-title">The hardest part</span>
          <p>Once it is handed off, let them do it. If you keep taking it back, the page is not the problem. Agree on what you want reported to you, such as a weekly number, and step out of the task itself.</p>
        </div>
        <p>When all three have passed a silent run, pick the next three.</p>`
    }
  ],

  quiz: [
    {
      q: 'You have time to document three processes this month. Which is the best first choice?',
      options: [
        'A once-a-year task that only you understand',
        'A weekly task where mistakes cost money and someone else could do it with clear steps',
        'A judgment call that depends on your years of experience',
        'Whichever process you find most interesting'
      ],
      answer: 1,
      why: 'Frequent, costly when wrong and easy to hand off is the combination that pays back fastest.'
    },
    {
      q: 'Which step is written well enough for someone else to follow?',
      options: [
        '"Handle customer inquiries promptly."',
        '"Make sure invoices go out."',
        '"Within one business day, reply to each new inquiry using the first-response template and add the customer to the tracker."',
        '"Use good judgment when following up."'
      ],
      answer: 2,
      why: 'It starts with a verb and says when, what and where. The others leave the reader guessing.'
    },
    {
      q: 'During a test run, your employee stops and asks where the invoice template is saved. What does that tell you?',
      options: [
        'The employee is not ready for the task',
        'The page is missing a step, and you should add where the template lives',
        'You should take the task back',
        'Nothing, since questions are normal'
      ],
      answer: 1,
      why: 'Every question in a silent run is a gap in the page. Fix the page, not the person.'
    },
    {
      q: 'Your written process has 26 steps. What is the most likely issue?',
      options: [
        'It is thorough, which is good',
        'It is probably two or more processes and should be split',
        'It needs more detail',
        'It should be turned into a longer manual'
      ],
      answer: 1,
      why: 'Five to twelve steps is the workable range. Beyond that, people skip steps, and there are usually separate processes hiding inside.'
    },
    {
      q: 'Two months after handing off invoicing, you notice you are sending the invoices yourself again. What is the best fix?',
      options: [
        'Rewrite the page with more detail',
        'Accept that it is faster to do it yourself',
        'Agree on one number you want reported each week and step back out of the task',
        'Assign it to the whole team so someone picks it up'
      ],
      answer: 2,
      why: 'Taking the work back is a habit problem, not a documentation problem. A named owner plus a simple report lets you stay informed without doing the task.'
    }
  ],

  jobAid: {
    kind: 'template',
    title: 'One-page process template',
    intro: 'Copy this for each process. Tick each part as you fill it in, then run the test at the bottom.',
    groups: [
      { heading: 'The page', items: [
        'Name and purpose: one line on what this process is for',
        'Trigger: what starts it',
        'Steps: five to twelve, in order, each starting with a verb',
        'Done right: how someone knows they did it correctly',
        'Where things are: template, folder, system and who has access',
        'Exceptions: the two or three situations to stop and ask'
      ]},
      { heading: 'The test', items: [
        'Someone who has not done the task ran it while I stayed silent',
        'Every question they asked is now answered on the page',
        'They ran it a second time without asking me anything'
      ]},
      { heading: 'The hand-off', items: [
        'One named owner',
        'Saved in the shared process folder',
        'Review reminder set for three months from now',
        'Agreed what gets reported to me, and how often'
      ]}
    ]
  },

  cta: {
    heading: 'Want your own processes turned into training like this?',
    body: 'PNG Solutions maps how your business actually runs and builds short modules your team can finish between jobs.'
  }
};
