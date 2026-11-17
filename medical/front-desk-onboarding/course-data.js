window.COURSE = {
  id: 'medical-front-desk-30',
  industry: 'Medical practices',
  title: 'Front Desk Onboarding: The First 30 Days',
  role: 'Front Desk & Patient Services',
  subtitle: 'Get a new front desk hire confident with scheduling, check-in and the phones in their first month, without pulling your office manager off the floor.',
  audience: 'New front desk and patient services staff',
  accent: '#0F766E',
  accentSoft: '#E3F2F0',

  problemHtml: `
    <p>The front desk is the hardest seat in a practice to keep filled. The Medical Group Management Association reported front office turnover of 40% in 2022, and its 2026 polling still shows churn concentrated in front desk and medical assistant roles.</p>
    <p>When MGMA asked practice leaders where front desk training is hardest, the answers were scheduling (26%), customer service (26%) and payments (23%). Most new hires learn all three by shadowing whoever has time.</p>
    <p class="mb-0">This module gives a new hire <strong>the same clear start every time</strong>, so the first month does not depend on who happens to be working that week.</p>`,

  outcomes: [
    'Explain the four things the front desk controls for the practice',
    'Book the right visit type and know when to hand a call to clinical staff',
    'Run a complete check-in: identity, insurance, balance and updates',
    'Answer the phone and take a message another person can act on',
    'Stay steady with an upset patient and know when to escalate'
  ],

  lessons: [
    {
      title: 'What the front desk controls',
      summary: 'Four jobs that decide how the whole day runs',
      minutes: 4,
      html: `
        <p>The front desk is where the practice starts and where most avoidable problems start too. A new hire who understands these four jobs makes better decisions on day three than one who has only memorized screens.</p>
        <ol class="steps">
          <li><strong>The first impression.</strong> Patients decide how they feel about the practice in the first minute, on the phone or at the window.</li>
          <li><strong>The schedule.</strong> Every provider's day is built by the front desk. A visit booked in the wrong slot runs the whole afternoon late.</li>
          <li><strong>The accuracy of the record.</strong> A wrong birth date or an old insurance card at check-in becomes a rejected claim weeks later.</li>
          <li><strong>Collections at the time of service.</strong> Copays and balances are easiest to collect while the patient is standing in front of you.</li>
        </ol>
        <div class="callout">
          <span class="callout-title">One idea to keep</span>
          <p>Front desk work is not clerical work that happens before the care. It is the first step of the care and the first step of getting paid for it.</p>
        </div>
        <h3>What you are not expected to do</h3>
        <p>You do not judge symptoms, give medical advice or decide how urgent something is on your own. Your practice has rules for that, and clinical staff to back you up. Knowing where your job ends is part of doing it well.</p>`
    },
    {
      title: 'Scheduling by the rules',
      summary: 'Visit types, slot lengths and when to hand off',
      minutes: 5,
      html: `
        <p>Scheduling goes wrong when it is done from memory. Your practice should give you a written guide for each provider. If it does not exist yet, ask for one. It answers three questions.</p>
        <h3>1. What kind of visit is this?</h3>
        <div class="table-responsive">
          <table class="table table-bordered table-example">
            <thead><tr><th>Patient says</th><th>Ask</th><th>Book as</th></tr></thead>
            <tbody>
              <tr><td>"I need to be seen"</td><td>Have you been seen here before? What is the visit for?</td><td>New or established, per the guide</td></tr>
              <tr><td>"It is just a follow-up"</td><td>Which visit are you following up from?</td><td>Follow-up length set for that provider</td></tr>
              <tr><td>"I need a form filled out"</td><td>Which form, and when is it due?</td><td>Per your practice's forms policy</td></tr>
            </tbody>
          </table>
        </div>
        <p class="small text-secondary">Example only. Your practice's guide sets the real visit types and lengths.</p>
        <h3>2. How long does it need?</h3>
        <p>Use the length in the guide, not the length that fits the open slot. Squeezing a long visit into a short slot is the most common cause of a provider running behind.</p>
        <h3>3. Does a clinician need to hear this first?</h3>
        <p>If a caller describes symptoms and you are unsure how soon they should be seen, do not decide alone. Follow your practice's escalation list and bring in clinical staff.</p>
        <div class="callout callout-plain">
          <span class="callout-title">Before you end the call</span>
          <p>Read back the date, time, provider and location. Confirm the best phone number. Tell the patient what to bring and how early to arrive.</p>
        </div>
        <h3>Late arrivals and missed visits</h3>
        <p>Handle these the way your written policy says, the same way for every patient. If you are not sure what the policy is, ask before the situation comes up, not during it.</p>`
    },
    {
      title: 'Check-in done right',
      summary: 'Identity, insurance, balance and updates, every visit',
      minutes: 5,
      html: `
        <p>A complete check-in takes a couple of minutes and prevents the most common billing problems. Do every step for every patient, including the ones you have seen a dozen times.</p>
        <ol class="steps">
          <li><strong>Confirm who the patient is.</strong> Use two identifiers, such as full name and date of birth. Ask the patient to say them. Do not read them out and ask for a yes.</li>
          <li><strong>Confirm insurance at every visit.</strong> Ask whether anything has changed and look at the card. Coverage changes more often than patients remember to mention.</li>
          <li><strong>Check that eligibility was verified.</strong> If your practice checks coverage before the visit, confirm it was done. If it was not, do it now or flag it.</li>
          <li><strong>Update contact details.</strong> Phone, address and email. Reminders and statements only work if these are right.</li>
          <li><strong>Collect what is due today.</strong> State the amount plainly and offer the ways to pay.</li>
        </ol>
        <div class="compare">
          <div class="bad"><div class="label">Avoid</div><p class="mb-0">"Still at the same address? Same insurance? Great, have a seat."</p></div>
          <div class="good"><div class="label">Use</div><p class="mb-0">"Can you tell me your full name and date of birth? Thank you. May I see your insurance card today? And what is the best phone number to reach you?"</p></div>
        </div>
        <div class="script-box">"Your copay for today's visit is forty dollars. Would you like to pay by card or cash?"</div>
        <h3>Protecting patient information at the desk</h3>
        <ul>
          <li>Keep your voice low when discussing anything personal, and never call out the reason for a visit across the waiting room.</li>
          <li>Turn screens away from the window and lock your computer when you step away.</li>
          <li>Keep papers with patient details face down or out of sight.</li>
          <li>Only share information with people the patient has authorized. When unsure, check with your manager first.</li>
        </ul>
        <p class="small text-secondary">Your practice's privacy policies and training set the exact rules. This lesson covers everyday habits, not the full policy.</p>`
    },
    {
      title: 'Phones and difficult moments',
      summary: 'A consistent greeting, complete messages and calm escalation',
      minutes: 5,
      html: `
        <h3>Answer the same way every time</h3>
        <div class="script-box">"Thank you for calling [practice name], this is [your first name]. How can I help you?"</div>
        <p>If you must place someone on hold, ask first, wait for the answer, and come back within a minute, even if only to say you are still working on it.</p>
        <h3>Take a message someone else can act on</h3>
        <p>A message is complete when the person reading it does not need to call you with questions. Capture:</p>
        <ul>
          <li>Patient's full name and date of birth</li>
          <li>Best call-back number and a good time to call</li>
          <li>What they need, in their own words</li>
          <li>Who the message is for, and the date and time you took it</li>
        </ul>
        <p>Tell the caller when to expect a response, using the time frame your practice has set. Do not promise a specific call-back time you cannot control.</p>
        <h3>When a patient is upset</h3>
        <ol class="steps">
          <li><strong>Listen without interrupting.</strong> Let them finish. Most people calm down once they have been heard.</li>
          <li><strong>Acknowledge it.</strong> "I can see why that is frustrating."</li>
          <li><strong>Say what you can do.</strong> Offer the next step that is in your power, and be specific.</li>
          <li><strong>Escalate early, not late.</strong> If you cannot fix it, or the person becomes abusive, bring in your manager. That is the right call, not a failure.</li>
        </ol>
        <div class="callout">
          <span class="callout-title">Your first 30 days at a glance</span>
          <p><strong>Week 1:</strong> Shadow, learn the phone greeting and check-in steps. <strong>Week 2:</strong> Run check-in with a buddy beside you. <strong>Week 3:</strong> Book routine visits using the scheduling guide. <strong>Week 4:</strong> Work a full day independently and review it with your manager.</p>
        </div>`
    }
  ],

  quiz: [
    {
      q: 'A long-time patient walks up and says, "You know me, same as always." What do you do?',
      options: [
        'Check them in quickly since nothing has changed',
        'Ask them to state their full name and date of birth, look at their insurance card and confirm their phone number',
        'Ask only whether their insurance is the same',
        'Skip check-in because they were seen last month'
      ],
      answer: 1,
      why: 'Every step, every visit. Familiar patients are exactly where outdated insurance and contact details slip through.'
    },
    {
      q: 'A caller describes symptoms and asks whether they should come in today or wait for their appointment next week. What is the right response?',
      options: [
        'Tell them it sounds minor and to keep the appointment',
        'Tell them to come in right away',
        'Follow the practice\'s escalation list and bring in clinical staff',
        'Offer the first open slot without telling anyone'
      ],
      answer: 2,
      why: 'Front desk staff do not judge urgency on their own. The escalation list and clinical staff exist for this call.'
    },
    {
      q: 'The only open slot today is 15 minutes, but the scheduling guide says this visit type needs 30. What should you do?',
      options: [
        'Book the 15-minute slot so the patient is seen today',
        'Book it and warn the provider they will run late',
        'Use the length in the guide and offer the next slot that fits, or ask your manager about an exception',
        'Double-book two short slots without checking'
      ],
      answer: 2,
      why: 'Fitting a long visit into a short slot is the most common reason a provider runs behind for the rest of the day.'
    },
    {
      q: 'Which phone message is complete?',
      options: [
        '"Mrs. Lee called. Please call back."',
        '"Patient called about results."',
        '"Dana Lee, DOB on file confirmed, 555-0142, best after 2 pm. Asking whether her lab results are in. For Dr. Shah\'s nurse. Taken Tuesday 10:15 am."',
        '"Someone called for Dr. Shah around 10."'
      ],
      answer: 2,
      why: 'It has who, how to reach them, what they need, who it is for and when it was taken. Nobody has to call you with questions.'
    },
    {
      q: 'A patient at the window is raising their voice about a bill. You have listened and acknowledged the frustration, but they are still upset and you cannot change the balance. What next?',
      options: [
        'Tell them there is nothing you can do',
        'Explain the charges again, more firmly',
        'Offer the next step you can take and bring in your manager',
        'Ask them to step outside until they calm down'
      ],
      answer: 2,
      why: 'Say what you can do, then escalate early. Bringing in a manager is the right call when the fix is outside your role.'
    }
  ],

  jobAid: {
    kind: 'checklist',
    title: 'New hire 30-day checklist',
    intro: 'For the new hire and their manager to work through together. Tick each item when it has been shown, practiced and done independently.',
    groups: [
      { heading: 'Week 1: Learn', items: [
        'Phone greeting and hold steps practiced',
        'Check-in steps observed for at least ten patients',
        'Privacy habits at the desk reviewed with manager',
        'Escalation list read and questions answered'
      ]},
      { heading: 'Week 2: Do it with a buddy', items: [
        'Check-in run start to finish with a buddy beside them',
        'Copay collected using the practice script',
        'Three complete phone messages reviewed by manager'
      ]},
      { heading: 'Week 3: Scheduling', items: [
        'Scheduling guide reviewed for each provider',
        'Routine visits booked with read-back of date, time, provider and location',
        'One call handed off to clinical staff correctly'
      ]},
      { heading: 'Week 4: On your own', items: [
        'Full day worked independently',
        'Day reviewed with manager: what went well, what to tighten',
        'Open questions listed and assigned'
      ]}
    ]
  },

  cta: {
    heading: 'Want this built around your own schedule rules and scripts?',
    body: 'PNG Solutions turns the way your practice actually runs into short training a new hire can finish in their first week.'
  }
};
