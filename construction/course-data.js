window.COURSE = {
  id: 'construction-change-orders',
  industry: 'Construction',
  title: 'Change Orders That Get Paid',
  subtitle: 'Write it up, price it and get it signed before the work starts, so changed work turns into paid work instead of a dispute at closeout.',
  audience: 'Project managers, superintendents and foremen',
  accent: '#B45309',
  accentSoft: '#FBF1E4',

  problemHtml: `
    <p>Extra work is part of every job. Getting paid for it is where contractors lose margin. In 2026 research by Dodge Construction Network for Clearstory, only about one in three contractors said their change order process works, and 91% of general contractors said they sometimes pay less than the full amount requested.</p>
    <p>The reasons they gave were disputed pricing, incomplete documentation and disagreement over scope. All three are fixable in the field, on the day the change happens.</p>
    <p class="mb-0">This module teaches one habit: <strong>no changed work without a written, priced and signed record.</strong></p>`,

  outcomes: [
    'Spot changed work the moment it appears, before your crew starts it',
    'Write a change order request with the five parts a reviewer needs',
    'Price it with a breakdown that is hard to dispute',
    'Protect yourself when you are told to proceed before sign-off',
    'Keep a log so nothing is missed at billing'
  ],

  lessons: [
    {
      title: 'Why change orders go unpaid',
      summary: 'The four ways good work turns into a write-off',
      minutes: 4,
      html: `
        <p>Most unpaid change orders were legitimate. The work was real, the owner wanted it, and the crew did it well. The request failed later, at a desk, for one of four reasons.</p>
        <ol class="steps">
          <li><strong>The work started on a verbal OK.</strong> Someone on site said to go ahead. Weeks later that person does not remember it the same way, or was never allowed to approve cost in the first place.</li>
          <li><strong>The backup is missing.</strong> The request has a single number and a one-line description. The reviewer cannot tell what was done, why, or how the price was built, so it sits.</li>
          <li><strong>It was sent late.</strong> Most contracts set a deadline for giving notice of a change. Miss it and you may have given up the right to be paid, no matter how good the work was.</li>
          <li><strong>Nobody tracked it.</strong> The change lived in a text thread and a notebook. It never made it onto a pay application.</li>
        </ol>
        <div class="callout">
          <span class="callout-title">The pattern</span>
          <p>Every one of these happens before or during the work, not at closeout. That is why the fix belongs to the people on site, not only to the office.</p>
        </div>
        <h3>What counts as changed work</h3>
        <p>If any of these is true, stop and treat it as a change:</p>
        <ul>
          <li>It is not shown on the drawings or described in your scope.</li>
          <li>Site conditions are different from what the documents showed.</li>
          <li>You are asked to do the work in a different order, faster, or at a different time.</li>
          <li>An RFI answer or a revised drawing adds labor, material or time.</li>
        </ul>`
    },
    {
      title: 'Write it up before the work starts',
      summary: 'The five parts of a request a reviewer can approve',
      minutes: 5,
      html: `
        <p>A reviewer approves what they can understand quickly. Give them five things, in this order, and most of the back-and-forth disappears.</p>
        <ol class="steps">
          <li><strong>What changed and why.</strong> Two or three plain sentences. Name the location and point to the drawing, spec section or RFI number.</li>
          <li><strong>Who directed it.</strong> Name, company, date and how the direction came (email, meeting, site walk).</li>
          <li><strong>Cost, broken down.</strong> Labor, material, equipment, subcontractors and markup as separate lines.</li>
          <li><strong>Time.</strong> How many days it adds, or a clear statement that it adds none.</li>
          <li><strong>Backup.</strong> Dated photos, the marked-up drawing, quotes and signed time tickets.</li>
        </ol>
        <div class="compare">
          <div class="bad"><div class="label">Hard to approve</div><p class="mb-0">"Extra framing at 2nd floor per super. $4,800."</p></div>
          <div class="good"><div class="label">Easy to approve</div><p class="mb-0">"Add blocking and two headers at 2nd floor corridor, gridlines C to E, for owner-added wall cabinets. Not shown on A-201. Directed by J. Ortiz (owner's rep) at the May 6 site walk and confirmed by email the same day. Cost breakdown and photos attached. Adds 1 working day."</p></div>
        </div>
        <div class="callout callout-plain">
          <span class="callout-title">Field rule</span>
          <p>Take the photos before you touch anything. A photo of the existing condition is the one piece of backup you cannot create later.</p>
        </div>`
    },
    {
      title: 'Price it so it is not disputed',
      summary: 'Show the math and use the rates in your contract',
      minutes: 5,
      html: `
        <p>Pricing is the most common reason a change order gets cut. A lump sum invites an argument. A breakdown invites a signature.</p>
        <h3>Show every line</h3>
        <div class="table-responsive">
          <table class="table table-bordered table-example">
            <thead><tr><th>Line</th><th>What to show</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td>Labor</td><td>Hours by trade and the rate</td><td>2 carpenters &times; 8 hrs &times; agreed rate</td></tr>
              <tr><td>Material</td><td>Quantity, unit cost and the supplier quote</td><td>Lumber and hardware per attached quote</td></tr>
              <tr><td>Equipment</td><td>Item, duration and rate</td><td>Lift, 1 day</td></tr>
              <tr><td>Subcontractor</td><td>Their own breakdown, attached</td><td>Electrical relocation per sub quote</td></tr>
              <tr><td>Markup</td><td>The percentage your contract allows</td><td>Overhead and profit per the contract</td></tr>
            </tbody>
          </table>
        </div>
        <h3>Three habits that prevent cuts</h3>
        <ul>
          <li><strong>Use the rates and markup in the contract.</strong> If labor rates were agreed at the start, use those and nothing else.</li>
          <li><strong>For time-and-material work, get tickets signed every day.</strong> A ticket signed the same day is accepted. A stack of tickets presented a month later is questioned.</li>
          <li><strong>Price the time as well as the cost.</strong> If the change pushes your schedule, say so now. It is very hard to add days afterward.</li>
        </ul>
        <div class="callout">
          <span class="callout-title">Check yourself</span>
          <p>Could someone who has never visited the site rebuild your number from what you attached? If not, add what is missing before you send it.</p>
        </div>`
    },
    {
      title: 'Get it signed and track it',
      summary: 'Sign-off, directives, notice deadlines and the log',
      minutes: 5,
      html: `
        <p>The goal is a signature before the work begins. When the job cannot wait, you still need a written record made the same day.</p>
        <h3>If you are told to proceed without sign-off</h3>
        <ol class="steps">
          <li><strong>Ask for the direction in writing.</strong> A short email from the person directing the work is enough to start.</li>
          <li><strong>If they will not write it, you write it.</strong> Send a same-day email that confirms what you were told, by whom, and that cost and time will follow.</li>
          <li><strong>Give formal notice inside the deadline in your contract.</strong> Know that number of days for every job you run.</li>
          <li><strong>Track actual labor and material daily</strong> and get the tickets signed.</li>
        </ol>
        <div class="script-box">"Confirming our conversation on site today: you directed us to relocate the two floor drains in Room 114. We are proceeding at your direction. This is changed work. Pricing and schedule impact will follow within the time our contract allows."</div>
        <h3>Keep one log</h3>
        <p>Every change gets a line the day it appears, even before it is priced. One shared log is better than three private ones.</p>
        <div class="table-responsive">
          <table class="table table-bordered table-example">
            <thead><tr><th>No.</th><th>Description</th><th>Directed by</th><th>Notice sent</th><th>Amount</th><th>Status</th><th>Billed</th></tr></thead>
            <tbody>
              <tr><td>007</td><td>Corridor blocking, 2nd floor</td><td>J. Ortiz</td><td>May 6</td><td>Priced</td><td>Approved</td><td>Pay app 5</td></tr>
              <tr><td>008</td><td>Relocate floor drains, Rm 114</td><td>Owner's rep</td><td>May 9</td><td>Pending</td><td>Proceeding on directive</td><td>Not yet</td></tr>
            </tbody>
          </table>
        </div>
        <div class="callout callout-plain">
          <span class="callout-title">Billing rule</span>
          <p>Bill approved change orders on the next pay application. Keep unapproved ones on the log and follow up every week, so they do not hold up payment for the work that is approved.</p>
        </div>
        <p class="small text-secondary">Your contract controls notice periods, markup and who may approve changes. Read those clauses at the start of every job.</p>`
    }
  ],

  quiz: [
    {
      q: 'The owner\'s rep tells your foreman on site to add a row of outlets not shown on the drawings and says, "We will sort out the paperwork later." What is the best first move?',
      options: [
        'Start right away to keep the owner happy and write it up at the end of the job',
        'Refuse to do any work until a fully signed change order arrives',
        'Confirm the direction in writing the same day, photograph the existing condition, then proceed and track the cost',
        'Add the cost to the next pay application without a separate request'
      ],
      answer: 2,
      why: 'A same-day written confirmation and photos create the record while the job keeps moving. Waiting until the end, or billing without approval, is how changes go unpaid.'
    },
    {
      q: 'Which change order request is most likely to be approved without questions?',
      options: [
        'One total price with the note "extra work per owner"',
        'A description of what changed and why, who directed it, a cost breakdown, the schedule impact and photos',
        'A long narrative explaining how difficult the work was',
        'The subcontractor\'s invoice forwarded with no cover page'
      ],
      answer: 1,
      why: 'Reviewers approve what they can verify. The five parts let someone who was not on site understand the change and rebuild the number.'
    },
    {
      q: 'Your crew is doing changed work on a time-and-material basis. When should the time tickets be signed?',
      options: [
        'At the end of the project, all together',
        'Whenever the office asks for them',
        'Every day, by the person directing the work',
        'They do not need signatures if your foreman keeps good notes'
      ],
      answer: 2,
      why: 'A ticket signed the day of the work is hard to dispute. Tickets presented weeks later are routinely questioned or cut.'
    },
    {
      q: 'Why does the notice deadline in your contract matter?',
      options: [
        'It only matters on public projects',
        'Missing it can cost you the right to be paid for the change',
        'It sets the date the owner must pay you',
        'It is a suggestion that owners rarely enforce'
      ],
      answer: 1,
      why: 'Many contracts require written notice of a change within a set number of days. Late notice is a common reason for denying payment for real work.'
    },
    {
      q: 'A change order is still unapproved when the monthly pay application is due. What should you do?',
      options: [
        'Bill it anyway so it gets attention',
        'Leave it off the log until it is approved',
        'Bill the approved work, keep the open change on the log and follow up weekly',
        'Hold the whole pay application until the change is approved'
      ],
      answer: 2,
      why: 'Billing unapproved changes can delay the entire payment. Keep them visible on the log and keep pushing for a decision.'
    }
  ],

  jobAid: {
    kind: 'checklist',
    title: 'Change order field checklist',
    intro: 'Run this list every time the work changes. Tick the boxes on screen or print a copy for the truck.',
    groups: [
      { heading: 'Before the work starts', items: [
        'Confirmed this is outside our scope (drawing, spec or RFI reference noted)',
        'Photographed the existing condition, with date',
        'Recorded who directed the change, when and how',
        'Direction received or confirmed in writing the same day',
        'Formal notice sent within the contract deadline'
      ]},
      { heading: 'Pricing', items: [
        'Labor, material, equipment, subcontractor and markup shown as separate lines',
        'Contract rates and allowed markup used',
        'Schedule impact stated in days, or stated as none',
        'Quotes, photos and marked-up drawing attached'
      ]},
      { heading: 'During and after', items: [
        'Time-and-material tickets signed daily',
        'Change entered on the shared log',
        'Signed approval on file before billing',
        'Billed on the next pay application once approved'
      ]}
    ]
  },

  cta: {
    heading: 'Want this built around your own contracts and forms?',
    body: 'PNG Solutions turns your change order process into short training your project managers and foremen can finish on a phone.'
  }
};
