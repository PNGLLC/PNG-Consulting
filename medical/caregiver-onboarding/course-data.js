window.COURSE = {
  id: 'medical-caregiver-onboarding',
  industry: 'Home care and home health',
  title: "The Administrator's Caregiver Onboarding Playbook",
  role: 'Home Care & Home Health Administrators',
  subtitle: 'Get a new caregiver from hire to a confident first shift, and keep annual training on track without a scramble before every survey.',
  audience: 'Administrators, office managers and schedulers who onboard caregivers',
  accent: '#0F766E',
  accentSoft: '#E3F2F0',

  problemHtml: `
    <p>Caregiver turnover in home-based care was 75.5% in 2025, according to the 2026 Activated Insights Benchmarking Report, and industry reports consistently place a large share of those exits in the first 90 days.</p>
    <p>The same report found that only 41.3% of agencies can link their training program to a measurable result. Among the agencies that can, 55.3% report better 90-day caregiver retention.</p>
    <p>In most agencies, hiring, orientation and annual training all run through one or two people in the office, from memory. This module gives that person <strong>one repeatable path from hire to day 90, and one tracker for everything that comes due after it.</strong></p>`,

  outcomes: [
    'Name the four places new caregivers are lost between offer and day 90',
    'Run every hire through the same file and orientation checklist',
    'Set up a first shift that does not leave the caregiver alone with a stranger',
    'Use three scheduled check-ins to catch problems before a resignation',
    'Track annual training on one page and pull any record in minutes'
  ],

  lessons: [
    {
      title: 'Where new caregivers are lost',
      summary: 'Four leaks between the offer and day 90',
      minutes: 4,
      html: `
        <p>Agencies rarely lose a new caregiver over one big event. They lose them through four small gaps, and each one is in the office's control.</p>
        <ol class="steps">
          <li><strong>The wait.</strong> Days pass between the offer and the first shift while paperwork goes back and forth. A caregiver who needs income takes the job that starts sooner.</li>
          <li><strong>The orientation that changes every time.</strong> What a new hire is told depends on who is in the office that day. Two caregivers hired a week apart get two different jobs explained to them.</li>
          <li><strong>The cold first shift.</strong> The caregiver arrives at a home they have never seen, to care for someone they have never met, with a care plan they read in the car.</li>
          <li><strong>The silence afterward.</strong> Nobody calls. The first time the office hears how it is going is when the caregiver stops picking up shifts.</li>
        </ol>
        <div class="callout">
          <span class="callout-title">The idea behind this module</span>
          <p>Onboarding is not the orientation meeting. It is everything from the offer to day 90, and it needs an owner, a checklist and a calendar.</p>
        </div>
        <h3>What this module does not cover</h3>
        <p>Your state licensing rules and your payers decide exactly what must be in a caregiver's file, which trainings are required and how often. This module shows how to run and track the process. Your agency's policies supply the required list.</p>`
    },
    {
      title: 'One path from hire to first shift',
      summary: 'The same file and the same orientation for every hire',
      minutes: 5,
      html: `
        <p>Speed and consistency come from the same thing: a single checklist that every hire goes through in the same order, owned by one named person.</p>
        <h3>Build the file once</h3>
        <p>List every item your agency requires before a caregiver can work, then group them so nothing waits on something else.</p>
        <div class="table-responsive">
          <table class="table table-bordered table-example">
            <thead><tr><th>Group</th><th>Typical items</th><th>Who does it</th></tr></thead>
            <tbody>
              <tr><td>Day of offer</td><td>Application, identification, required screenings started</td><td>Office</td></tr>
              <tr><td>Before orientation</td><td>Forms the caregiver can finish at home</td><td>Caregiver</td></tr>
              <tr><td>At orientation</td><td>Policies reviewed and acknowledged, skills check</td><td>Office and caregiver together</td></tr>
              <tr><td>Before first shift</td><td>File checked complete, first client assigned</td><td>Office</td></tr>
            </tbody>
          </table>
        </div>
        <p class="small text-secondary">Example layout only. Your licensing rules and agency policy set the actual items.</p>
        <h3>Make orientation the same every time</h3>
        <p>Write the agenda down and use it for every hire. A typical agenda covers what the job is and is not, client rights and confidentiality, infection control, what to do in an emergency, how and when to document a visit, how to report a concern, and who to call.</p>
        <div class="compare">
          <div class="bad"><div class="label">Inconsistent</div><p class="mb-0">"Sit with Maria for a couple of hours, she'll go over everything."</p></div>
          <div class="good"><div class="label">Repeatable</div><p class="mb-0">A one-page agenda, the same handouts, a skills check, and a signature line for each topic covered, with the date.</p></div>
        </div>
        <div class="callout callout-plain">
          <span class="callout-title">Shorten the wait</span>
          <p>Start everything that takes days on the day of the offer, and book the orientation date in the same conversation. A caregiver with a date on the calendar is far less likely to keep looking.</p>
        </div>`
    },
    {
      title: 'The first shift and the first 30 days',
      summary: 'A warm hand-off and three check-ins',
      minutes: 5,
      html: `
        <h3>Before the first shift</h3>
        <p>A caregiver should never learn about a client at the client's front door. The day before, the office covers four things:</p>
        <ul>
          <li>The client: who they are, what matters to them, and what a good visit looks like</li>
          <li>The care plan: the tasks for this visit and anything that needs special care</li>
          <li>The home: how to get in, pets, parking, who else may be there</li>
          <li>The backup: the one number to call if anything is unclear, and that someone will answer it</li>
        </ul>
        <p>Where you can, have a supervisor or an experienced caregiver introduce the new hire to the client in person on the first visit.</p>
        <h3>Three check-ins, on the calendar</h3>
        <ol class="steps">
          <li><strong>End of the first shift.</strong> A five-minute call the same day. "How did it go? Was anything different from what we told you?"</li>
          <li><strong>End of the first week.</strong> Schedule, travel, the client relationship, and whether documentation is going in correctly.</li>
          <li><strong>Day 30.</strong> A sit-down. What is working, what is not, and what hours they actually want.</li>
        </ol>
        <div class="script-box">"I'm calling because it was your first day with Mrs. Alvarez. I want to hear how it went, and whether anything surprised you."</div>
        <div class="callout">
          <span class="callout-title">Write down what you hear</span>
          <p>Note each check-in in the caregiver's record with the date. If the same complaint shows up from three new hires, such as a schedule changed with no notice, that is a process to fix, not three separate problems.</p>
        </div>
        <p>Add a fourth check-in at day 90 for every caregiver who is still with you. Ask what almost made them leave.</p>`
    },
    {
      title: 'Annual training without the scramble',
      summary: 'One tracker, early reminders and proof on file',
      minutes: 5,
      html: `
        <p>Annual training becomes a crisis when the due dates live in someone's head. The fix is one tracker that shows everyone at once.</p>
        <h3>One row per caregiver, one column per requirement</h3>
        <div class="table-responsive">
          <table class="table table-bordered table-example">
            <thead><tr><th>Caregiver</th><th>Hire date</th><th>Requirement</th><th>Last completed</th><th>Next due</th><th>Proof on file</th></tr></thead>
            <tbody>
              <tr><td>R. Chavez</td><td>Mar 4</td><td>Annual in-service</td><td>Mar 2</td><td>Next Mar 4</td><td>Yes</td></tr>
              <tr><td>T. Nguyen</td><td>Jun 18</td><td>Annual in-service</td><td>Not yet</td><td>Jun 18</td><td>No</td></tr>
            </tbody>
          </table>
        </div>
        <p class="small text-secondary">Example only. Use the requirements and intervals your licensing rules and policy set.</p>
        <h3>Three habits that end the scramble</h3>
        <ul>
          <li><strong>Pick one due-date rule and keep it.</strong> Either every caregiver is due on their hire anniversary, or everyone is due in the same month. Mixing the two is how people get missed.</li>
          <li><strong>Remind early, three times.</strong> At 60 days, 30 days and 7 days before the due date. The first reminder goes to the caregiver, the last one goes to the scheduler as well.</li>
          <li><strong>File the proof the same day.</strong> For each completed training keep the topic, the date, the length, who delivered it and the caregiver's signature or completion record.</li>
        </ul>
        <div class="callout callout-plain">
          <span class="callout-title">The two-minute test</span>
          <p>Pick any caregiver at random. Can you show their complete file and training record in two minutes? If yes, you are ready for a survey on any day. If not, the tracker shows exactly what is missing.</p>
        </div>
        <p>Review the tracker on the same day every month. Ten minutes on a schedule replaces a week of catching up.</p>`
    }
  ],

  quiz: [
    {
      q: 'You make an offer on Monday. Screenings will take several days. What is the best next step?',
      options: [
        'Wait for the screenings to clear, then call to schedule orientation',
        'Start the items that take days right away and book the orientation date in the same conversation',
        'Send the full paperwork packet by mail and wait for it to come back',
        'Put the caregiver on a shift now and finish the file later'
      ],
      answer: 1,
      why: 'Starting the slow items on day one and putting a date on the calendar shortens the wait, which is where many new hires are lost. Working before the file is complete is not an option.'
    },
    {
      q: 'Two caregivers hired a week apart describe very different orientations. What is the most likely cause?',
      options: [
        'One of them was not paying attention',
        'Orientation is delivered from memory by whoever is in the office',
        'The second caregiver had more experience',
        'Orientation was too long'
      ],
      answer: 1,
      why: 'Without a written agenda, the content depends on who delivers it. A one-page agenda with a signature line per topic makes it the same every time.'
    },
    {
      q: 'A new caregiver has their first shift tomorrow with a client they have never met. What should the office do today?',
      options: [
        'Text the address and start time',
        'Email the full care plan and assume they will read it',
        'Go over the client, the care plan, the home and the number to call, and arrange an in-person introduction if possible',
        'Nothing, since they completed orientation'
      ],
      answer: 2,
      why: 'A cold first shift is one of the four leaks. A short briefing and a warm introduction give the caregiver and the client a much better start.'
    },
    {
      q: 'Three new caregivers in a row mention during check-ins that their schedule changed without notice. What does that tell you?',
      options: [
        'Those three caregivers are not flexible enough',
        'Check-in calls are creating complaints',
        'There is a scheduling process to fix',
        'Nothing, since schedule changes are part of the job'
      ],
      answer: 2,
      why: 'The same issue from several new hires points to the process, not the people. That pattern is only visible if check-ins are written down.'
    },
    {
      q: 'A surveyor asks for one caregiver\'s training record and it takes 40 minutes to assemble. What is the best fix?',
      options: [
        'Ask for more notice before the next survey',
        'Hire a temporary employee before each survey',
        'Keep one tracker for all caregivers and file proof of each training the day it is completed',
        'Keep training records with each caregiver\'s scheduler'
      ],
      answer: 2,
      why: 'One tracker plus proof filed the same day is what makes any record a two-minute pull, on any day.'
    }
  ],

  jobAid: {
    kind: 'checklist',
    title: 'Hire to day 90 checklist',
    intro: 'One copy per new caregiver. Tick each item when it is done and note the date in the caregiver\'s record.',
    groups: [
      { heading: 'Day of offer', items: [
        'Items that take days are started',
        'Orientation date booked with the caregiver',
        'Take-home forms sent, with a due date'
      ]},
      { heading: 'Orientation', items: [
        'Written agenda followed, each topic signed and dated',
        'Skills check completed',
        'File checked complete against the agency\'s required list',
        'Caregiver added to the training tracker with next due dates'
      ]},
      { heading: 'First shift', items: [
        'Briefed the day before: client, care plan, home, number to call',
        'In-person introduction arranged where possible',
        'Same-day check-in call made and noted'
      ]},
      { heading: 'First 90 days', items: [
        'End of week one check-in made and noted',
        'Day 30 sit-down held and noted',
        'Day 90 check-in held: asked what almost made them leave',
        'Any repeated issue passed on as a process fix'
      ]}
    ]
  },

  cta: {
    heading: 'Want this built around your own agency?',
    body: 'PNG Solutions turns your required list, your orientation and your tracker into short training your office staff and caregivers can finish on a phone.'
  }
};
