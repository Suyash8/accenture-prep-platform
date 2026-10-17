export type Competency =
  | 'Collaboration'
  | 'Client Centricity'
  | 'Agility & Growth'
  | 'Integrity & Ownership';

export interface SjtOption {
  id: string;
  label: string;
  score: 0 | 1 | 2 | 3 | 4;
}

export interface SjtItem {
  id: string;
  scenario: string;
  competency: Competency;
  pair?: { id: string; inverted: boolean };
  options: SjtOption[];
  rationale: string;
}

export type SjtQuestion = SjtItem;

export const ACCENTURE_SJT_ITEMS: SjtItem[] = [
  // ==========================================
  // CLIENT CENTRICITY (13 Items: 3 Pairs + 7 Single)
  // ==========================================
  {
    id: 'sjt-1',
    scenario: 'A key client stakeholder requests an urgent feature addition two days before release that is outside the agreed sprint scope. How do you respond?',
    competency: 'Client Centricity',
    pair: { id: 'sjt-1-pair', inverted: true },
    options: [
      { id: 'opt-1a', label: 'Assess technical feasibility with the lead, discuss trade-offs, and propose a scoped MVP or priority swap to protect release stability.', score: 4 },
      { id: 'opt-1b', label: 'Agree to build it immediately by working overtime without notifying project leads or altering test plans.', score: 2 },
      { id: 'opt-1c', label: 'Reject the request outright without discussion, citing frozen scope specifications.', score: 1 },
      { id: 'opt-1d', label: 'Acknowledge the request but delay acting until the client follows up multiple times.', score: 0 },
    ],
    rationale: 'Accenture values balancing urgent client objectives with transparent communication and rigorous quality risk management.',
  },
  {
    id: 'sjt-1-pair',
    scenario: 'When a major stakeholder demands sudden modifications near a delivery milestone, the best approach is to reject their request outright to strictly protect the original schedule.',
    competency: 'Client Centricity',
    pair: { id: 'sjt-1', inverted: true },
    options: [
      { id: 'opt-1p-a', label: 'Strongly Disagree — Collaborative evaluation of trade-offs and finding a viable middle ground must always come first.', score: 4 },
      { id: 'opt-1p-b', label: 'Disagree — You should hear their intent, even if the timeline ultimately prevents inclusion.', score: 3 },
      { id: 'opt-1p-c', label: 'Agree — Adhering to the original plan takes precedence over emerging business needs.', score: 1 },
      { id: 'opt-1p-d', label: 'Strongly Agree — Clients must never be allowed to change expectations once work has commenced.', score: 0 },
    ],
    rationale: 'Inverted consistency check: Tests whether candidate favors proactive collaborative problem-solving over rigid obstinacy.',
  },
  {
    id: 'sjt-2',
    scenario: 'During user acceptance testing, a client expresses frustration that a delivered dashboard layout does not match their mental model, despite conforming to signed requirements.',
    competency: 'Client Centricity',
    pair: { id: 'sjt-2-pair', inverted: true },
    options: [
      { id: 'opt-2a', label: 'Listen attentively to understand their specific workflow, document the user friction points, and explore minor UX adjustments that can be quickly accommodated.', score: 4 },
      { id: 'opt-2b', label: 'Point out the signed contract and insist they must file a paid change request before any discussion.', score: 1 },
      { id: 'opt-2c', label: 'Silently alter the code to match what they want without tracking changes or verifying impacts on other users.', score: 1 },
      { id: 'opt-2d', label: 'Ignore the feedback because the specification was formally approved.', score: 0 },
    ],
    rationale: 'True client centricity requires empathetic listening to understand business outcomes rather than retreating behind contractual defenses.',
  },
  {
    id: 'sjt-2-pair',
    scenario: 'If a client expresses dissatisfaction with a feature that technically fulfills the signed requirements document, the team has no obligation to empathize or investigate improvements.',
    competency: 'Client Centricity',
    pair: { id: 'sjt-2', inverted: true },
    options: [
      { id: 'opt-2p-a', label: 'Strongly Disagree — Long-term client trust depends on understanding real user workflows, not just checking spec boxes.', score: 4 },
      { id: 'opt-2p-b', label: 'Disagree — Constructive discussion usually reveals cost-effective compromises.', score: 3 },
      { id: 'opt-2p-c', label: 'Agree — Strict compliance with written contracts protects delivery budgets.', score: 1 },
      { id: 'opt-2p-d', label: 'Strongly Agree — Clients must live with what they signed.', score: 0 },
    ],
    rationale: 'Inverted check evaluating willingness to build genuine client partnerships rather than transactional compliance.',
  },
  {
    id: 'sjt-3',
    scenario: 'A client demands that your team cut testing phases in half to hit an arbitrary marketing event announcement.',
    competency: 'Client Centricity',
    pair: { id: 'sjt-3-pair', inverted: true },
    options: [
      { id: 'opt-3a', label: 'Transparently present the risk matrix, outline what critical regression tests cannot be skipped, and recommend a staged pilot release.', score: 4 },
      { id: 'opt-3b', label: 'Immediately agree and skip all automated regression suites.', score: 0 },
      { id: 'opt-3c', label: 'Argue aggressively with the client marketing team in a public forum.', score: 0 },
      { id: 'opt-3d', label: 'Quietly ignore their deadline without acknowledging it.', score: 1 },
    ],
    rationale: 'Protecting the client from preventable production outages through risk-based compromise.',
  },
  {
    id: 'sjt-3-pair',
    scenario: 'When a client executive requests skipping quality assurance tests to meet a public announcement, technical teams should immediately comply without presenting risk assessments.',
    competency: 'Client Centricity',
    pair: { id: 'sjt-3', inverted: true },
    options: [
      { id: 'opt-3p-a', label: 'Strongly Disagree — Consulting partners have a professional duty to present failure risks and maintain release integrity.', score: 4 },
      { id: 'opt-3p-b', label: 'Disagree — Critical paths must still be verified even in expedited scenarios.', score: 3 },
      { id: 'opt-3p-c', label: 'Agree — Executive requests override testing governance.', score: 1 },
      { id: 'opt-3p-d', label: 'Strongly Agree — Quality assurance is secondary to marketing dates.', score: 0 },
    ],
    rationale: 'Inverted check on client-focused technical governance and risk stewardship.',
  },
  {
    id: 'sjt-4',
    scenario: 'You identify a recurring manual step in the client’s billing reconciliation process that could be automated with a simple scheduled cloud script.',
    competency: 'Client Centricity',
    options: [
      { id: 'opt-4a', label: 'Build a quick proof-of-concept on your own initiative, estimate time savings, and present it to your lead as value-add suggestion for the client.', score: 4 },
      { id: 'opt-4b', label: 'Keep it to yourself because it is outside your assigned job tickets.', score: 1 },
      { id: 'opt-4c', label: 'Directly deploy the script into the client production environment without reviewing it with your delivery manager.', score: 0 },
      { id: 'opt-4d', label: 'Complain to colleagues about the client’s inefficient manual processes.', score: 0 },
    ],
    rationale: 'Proactively identifying value-add automation demonstrates Accenture’s consultative mindset and client focus.',
  },
  {
    id: 'sjt-5',
    scenario: 'In a client presentation, a senior stakeholder asks a complex technical question regarding data retention compliance that you do not know the answer to.',
    competency: 'Client Centricity',
    options: [
      { id: 'opt-5a', label: 'Honestly state that you do not have the exact compliance specifics at hand, take note of the inquiry, and commit to confirming with the security specialist by end of day.', score: 4 },
      { id: 'opt-5b', label: 'Guess an answer confidently to maintain the appearance of complete expertise.', score: 0 },
      { id: 'opt-5c', label: 'Change the topic quickly to avoid highlighting the gap in knowledge.', score: 1 },
      { id: 'opt-5d', label: 'Blame your team’s compliance architect for not preparing you.', score: 0 },
    ],
    rationale: 'Integrity and credible communication protect client trust; speculative answers on regulatory compliance pose severe enterprise risks.',
  },
  {
    id: 'sjt-6',
    scenario: 'A client contact regularly sends direct informal requests through personal messaging apps outside official sprint channels.',
    competency: 'Client Centricity',
    options: [
      { id: 'opt-6a', label: 'Politely acknowledge their message, explain that logging items in the sprint backlog ensures proper prioritization and tracking, and assist them in logging it.', score: 4 },
      { id: 'opt-6b', label: 'Fulfill all their off-the-record requests immediately to keep them personally happy.', score: 2 },
      { id: 'opt-6c', label: 'Completely ignore all messages from the client on external apps without responding.', score: 1 },
      { id: 'opt-6d', label: 'Block the client contact across all messaging platforms without explanation.', score: 0 },
    ],
    rationale: 'Channel boundaries should be politely reinforced while maintaining helpful client rapport and governance.',
  },
  {
    id: 'sjt-7',
    scenario: 'A client requests a vendor tool recommendation. Your firm has a preferred partnership with Tool X, but Tool Y is clearly cheaper and a better technical fit for the client’s small scale.',
    competency: 'Client Centricity',
    options: [
      { id: 'opt-7a', label: 'Provide an objective comparison of both options, highlighting Tool Y’s cost fit for their scale while disclosing the capabilities of Tool X.', score: 4 },
      { id: 'opt-7b', label: 'Push Tool X aggressively regardless of fit to benefit internal partnerships.', score: 1 },
      { id: 'opt-7c', label: 'Refuse to provide any tooling advice.', score: 1 },
      { id: 'opt-7d', label: 'Disparage Tool X publicly to make Tool Y look better.', score: 0 },
    ],
    rationale: 'Fiduciary duty to the client’s success drives Accenture’s advisory reputation.',
  },
  {
    id: 'sjt-8',
    scenario: 'During a live production deployment, an unexpected latency spike affects the client’s internal users. The client executive has not noticed yet.',
    competency: 'Client Centricity',
    options: [
      { id: 'opt-8a', label: 'Alert the delivery lead immediately, formulate an incident mitigation plan, and proactively notify the client with facts and immediate remediation steps.', score: 4 },
      { id: 'opt-8b', label: 'Wait to see if the client notices before alerting anyone.', score: 0 },
      { id: 'opt-8c', label: 'Downplay the issue and tell the client everything is operating nominally if they ask.', score: 0 },
      { id: 'opt-8d', label: 'Roll back all changes silently without logging an incident post-mortem.', score: 2 },
    ],
    rationale: 'Proactive incident transparency builds far deeper trust than hiding operational hiccups.',
  },
  {
    id: 'sjt-9',
    scenario: 'The client wants to adopt a new AI feature that poses potential data privacy concerns under local regulations.',
    competency: 'Client Centricity',
    options: [
      { id: 'opt-9a', label: 'Educate the client on the regulatory constraints, consult your legal/data privacy team, and propose privacy-preserving architectural patterns like anonymization.', score: 4 },
      { id: 'opt-9b', label: 'Implement the feature anyway because the client is paying for it.', score: 0 },
      { id: 'opt-9c', label: 'Refuse to work on the feature without providing any alternative guidance.', score: 1 },
      { id: 'opt-9d', label: 'Tell the client regulations do not matter in modern software.', score: 0 },
    ],
    rationale: 'Advising clients on compliance and ethical technology adoption is a core Accenture consulting pillar.',
  },
  {
    id: 'sjt-10',
    scenario: 'At the end of a project, the client team expresses nervousness about maintaining the system after your team rolls off.',
    competency: 'Client Centricity',
    options: [
      { id: 'opt-10a', label: 'Organize structured knowledge transfer sessions, record video walkthroughs, and prepare comprehensive runbooks with hands-on pairing.', score: 4 },
      { id: 'opt-10b', label: 'Send them a folder of raw source code and tell them to read the comments.', score: 1 },
      { id: 'opt-10c', label: 'Offer to manage it forever off-contract.', score: 1 },
      { id: 'opt-10d', label: 'Disregard their anxiety as it is their management’s problem.', score: 0 },
    ],
    rationale: 'Ensuring sustainable client capability transfer ensures long-term client enablement.',
  },

  // ==========================================
  // COLLABORATION (13 Items: 3 Pairs + 7 Single)
  // ==========================================
  {
    id: 'sjt-11',
    scenario: 'You notice a critical security vulnerability in a junior teammate’s pull request 30 minutes before code freeze.',
    competency: 'Collaboration',
    pair: { id: 'sjt-11-pair', inverted: true },
    options: [
      { id: 'opt-11a', label: 'Privately reach out to the teammate immediately, walk through the vulnerability calmly, and pair with them to commit a clean fix before notifying the lead.', score: 4 },
      { id: 'opt-11b', label: 'Post a screenshot of the vulnerable code in the public team channel to make an example of it.', score: 0 },
      { id: 'opt-11c', label: 'Silently approve the PR to avoid delaying code freeze and hope no one notices.', score: 0 },
      { id: 'opt-11d', label: 'Reject the PR with a single blunt word and leave them to struggle alone.', score: 1 },
    ],
    rationale: 'Accenture fosters psychological safety and collective ownership: coach peers privately while upholding code quality.',
  },
  {
    id: 'sjt-11-pair',
    scenario: 'When a teammate makes a serious mistake in their code, the best course of action is to call them out publicly so the whole team knows who caused the error.',
    competency: 'Collaboration',
    pair: { id: 'sjt-11', inverted: true },
    options: [
      { id: 'opt-11p-a', label: 'Strongly Disagree — Constructive, empathetic peer-to-peer coaching builds strong teams and higher code quality without humiliation.', score: 4 },
      { id: 'opt-11p-b', label: 'Disagree — Public callouts destroy team trust and psychological safety.', score: 3 },
      { id: 'opt-11p-c', label: 'Agree — Public transparency enforces accountability.', score: 1 },
      { id: 'opt-11p-d', label: 'Strongly Agree — Public mistakes should be visibly documented against the perpetrator.', score: 0 },
    ],
    rationale: 'Inverted check evaluating psychological safety vs toxic blame culture.',
  },
  {
    id: 'sjt-12',
    scenario: 'Two senior developers on your feature team have a heated disagreement over database architecture, stalling the sprint progress.',
    competency: 'Collaboration',
    pair: { id: 'sjt-12-pair', inverted: true },
    options: [
      { id: 'opt-12a', label: 'Suggest a focused timeboxed spike comparing both approaches against objective criteria (latency, scalability, maintenance) and consult the system architect.', score: 4 },
      { id: 'opt-12b', label: 'Pick a side based on personal friendship and vote with them.', score: 1 },
      { id: 'opt-12c', label: 'Avoid both developers and work on unrelated tickets indefinitely.', score: 1 },
      { id: 'opt-12d', label: 'Escalate to human resources complaining about technical arguments.', score: 0 },
    ],
    rationale: 'Constructive conflict resolution relies on data-driven evaluation criteria rather than politics or avoidance.',
  },
  {
    id: 'sjt-12-pair',
    scenario: 'When team members strongly disagree on an architectural approach, decisions should be made based on senior developer seniority rather than benchmarking or data spikes.',
    competency: 'Collaboration',
    pair: { id: 'sjt-12', inverted: true },
    options: [
      { id: 'opt-12p-a', label: 'Strongly Disagree — Architectural decisions should be justified by empirical benchmarking, business criteria, and open evaluation.', score: 4 },
      { id: 'opt-12p-b', label: 'Disagree — Technical merit should outweigh hierarchy.', score: 3 },
      { id: 'opt-12p-c', label: 'Agree — Hierarchy avoids prolonged discussions.', score: 1 },
      { id: 'opt-12p-d', label: 'Strongly Agree — Juniors should never question senior opinions.', score: 0 },
    ],
    rationale: 'Inverted check testing commitment to evidence-based engineering collaboration over hierarchical dogma.',
  },
  {
    id: 'sjt-13',
    scenario: 'Your project manager praises you in an all-hands meeting for a major bug fix that was actually co-authored equally by your peer.',
    competency: 'Collaboration',
    pair: { id: 'sjt-13-pair', inverted: true },
    options: [
      { id: 'opt-13a', label: 'Speak up immediately and publicly credit your peer, explaining how their insight and co-authoring were instrumental in solving the bug.', score: 4 },
      { id: 'opt-13b', label: 'Accept the praise silently and thank your peer in private later.', score: 2 },
      { id: 'opt-13c', label: 'Take full credit and boast about the achievement.', score: 0 },
      { id: 'opt-13d', label: 'Downplay the bug fix as insignificant.', score: 1 },
    ],
    rationale: 'Generosity with recognition and truthful crediting cement mutual respect and high team cohesion.',
  },
  {
    id: 'sjt-13-pair',
    scenario: 'If a manager publicly credits you for a successful delivery that was largely completed by a colleague, it is acceptable to remain silent and take the recognition.',
    competency: 'Collaboration',
    pair: { id: 'sjt-13', inverted: true },
    options: [
      { id: 'opt-13p-a', label: 'Strongly Disagree — Integrity and team solidarity demand giving immediate, public credit to the true contributors.', score: 4 },
      { id: 'opt-13p-b', label: 'Disagree — Taking credit for peer effort erodes trust permanently.', score: 3 },
      { id: 'opt-13p-c', label: 'Agree — It does not matter who gets credit as long as the team looks good.', score: 1 },
      { id: 'opt-13p-d', label: 'Strongly Agree — Career progression requires claiming any win possible.', score: 0 },
    ],
    rationale: 'Inverted check on peer credit and mutual solidarity in collaborative teams.',
  },
  {
    id: 'sjt-14',
    scenario: 'A cross-functional team member from the UX design team hands over mockups that are technically very difficult to implement in the chosen mobile framework.',
    competency: 'Collaboration',
    options: [
      { id: 'opt-14a', label: 'Schedule an interactive pairing session with the designer to demonstrate technical constraints and co-create an elegant alternative that preserves the user experience.', score: 4 },
      { id: 'opt-14b', label: 'Silently alter the design during implementation without consulting the designer.', score: 1 },
      { id: 'opt-14c', label: 'Complain in standup that design never understands engineering.', score: 0 },
      { id: 'opt-14d', label: 'Refuse to build the feature until design redrafts everything from scratch.', score: 1 },
    ],
    rationale: 'Cross-functional collaboration requires empathetic communication and co-creation.',
  },
  {
    id: 'sjt-15',
    scenario: 'You complete your sprint tasks two days ahead of schedule, while several peers in your pod are struggling with heavy back-end integration workloads.',
    competency: 'Collaboration',
    options: [
      { id: 'opt-15a', label: 'Check in with your scrum master and team members to offer help, take on unassigned subtasks, or pair-program on the bottlenecks.', score: 4 },
      { id: 'opt-15b', label: 'Log off early and relax since your assigned tickets are complete.', score: 1 },
      { id: 'opt-15c', label: 'Pick up arbitrary personal refactoring without telling anyone.', score: 2 },
      { id: 'opt-15d', label: 'Boast about your speed in the team channel.', score: 0 },
    ],
    rationale: 'High-performing teams share collective responsibility for sprint commitments.',
  },
  {
    id: 'sjt-16',
    scenario: 'A new graduate joined your project group this week and appears lost during standup updates.',
    competency: 'Collaboration',
    options: [
      { id: 'opt-16a', label: 'Proactively offer to be their onboarding buddy, set up a daily 15-minute sync, and share curated repo setup and architectural notes.', score: 4 },
      { id: 'opt-16b', label: 'Wait for them to reach out and ask for help first.', score: 2 },
      { id: 'opt-16c', label: 'Assume the manager will handle everything.', score: 1 },
      { id: 'opt-16d', label: 'Criticize their lack of speed to colleagues.', score: 0 },
    ],
    rationale: 'Mentorship and proactive inclusivity accelerate team ramp-up and foster retention.',
  },
  {
    id: 'sjt-17',
    scenario: 'During a sprint retrospective, someone suggests an improvement to the code review process that would require everyone to write more detailed PR descriptions.',
    competency: 'Collaboration',
    options: [
      { id: 'opt-17a', label: 'Support experimenting with the process change for one sprint, help draft a lightweight PR template, and evaluate results in the next retrospective.', score: 4 },
      { id: 'opt-17b', label: 'Resist the proposal because it adds five minutes of administrative work to your day.', score: 1 },
      { id: 'opt-17c', label: 'Agree vocally in the meeting but ignore the template in practice.', score: 0 },
      { id: 'opt-17d', label: 'Argue that documentation is a waste of time for real coders.', score: 0 },
    ],
    rationale: 'Continuous team improvement relies on willingness to experiment with collaborative hygiene.',
  },
  {
    id: 'sjt-18',
    scenario: 'You are working with a globally distributed team across a 9.5-hour time zone difference, and handovers often lack sufficient context.',
    competency: 'Collaboration',
    options: [
      { id: 'opt-18a', label: 'Collaborate with the distributed leads to establish a structured asynchronous handover protocol with video recordings and bulleted ticket notes.', score: 4 },
      { id: 'opt-18b', label: 'Demand that the overseas team work late at night to accommodate your daytime schedule.', score: 0 },
      { id: 'opt-18c', label: 'Stop depending on the distributed team and duplicate their work locally.', score: 1 },
      { id: 'opt-18d', label: 'Blame time zones for all missed delivery commitments.', score: 0 },
    ],
    rationale: 'Accenture’s global delivery network thrives when engineers build thoughtful asynchronous collaboration standards.',
  },
  {
    id: 'sjt-19',
    scenario: 'A teammate consistently submits pull requests with minimal test coverage, increasing the QA cycle time.',
    competency: 'Collaboration',
    options: [
      { id: 'opt-19a', label: 'Schedule a friendly pairing session to demonstrate test-driven patterns, share unit test snippets, and propose team test coverage gates together.', score: 4 },
      { id: 'opt-19b', label: 'Silently write tests for their code every weekend.', score: 2 },
      { id: 'opt-19c', label: 'Complain to management behind their back without speaking to them.', score: 0 },
      { id: 'opt-19d', label: 'Stop reviewing their pull requests entirely.', score: 0 },
    ],
    rationale: 'Peer empowerment and raising team technical standards cooperatively.',
  },
  {
    id: 'sjt-20',
    scenario: 'A remote team member rarely speaks during video conferences and appears isolated.',
    competency: 'Collaboration',
    options: [
      { id: 'opt-20a', label: 'Reach out casually 1-on-1, create smaller discussion spaces, and invite their perspective on specific technical topics they excel in.', score: 4 },
      { id: 'opt-20b', label: 'Put them on the spot publicly in large meetings demanding they speak.', score: 1 },
      { id: 'opt-20c', label: 'Assume they have nothing to contribute and ignore them.', score: 0 },
      { id: 'opt-20d', label: 'Complain that remote work prevents collaboration.', score: 0 },
    ],
    rationale: 'Inclusive leadership engages all voices across diverse communication styles.',
  },

  // ==========================================
  // AGILITY & GROWTH (12 Items: 2 Pairs + 8 Single)
  // ==========================================
  {
    id: 'sjt-21',
    scenario: 'You are assigned to a cloud infrastructure project utilizing a technology stack (e.g. Terraform & Kubernetes) you have zero prior experience with.',
    competency: 'Agility & Growth',
    pair: { id: 'sjt-21-pair', inverted: true },
    options: [
      { id: 'opt-21a', label: 'Embrace the assignment enthusiastically, leverage internal learning resources, build sandbox proof-of-concepts, and ask targeted questions to team experts.', score: 4 },
      { id: 'opt-21b', label: 'Request an immediate transfer to a legacy technology project where you already know everything.', score: 1 },
      { id: 'opt-21c', label: 'Copy-paste arbitrary configuration files from internet forums without understanding their mechanisms.', score: 0 },
      { id: 'opt-21d', label: 'Wait idly until someone schedules formal classroom training before doing any work.', score: 1 },
    ],
    rationale: 'Continuous learning agility, self-directed exploration, and adaptability are core to Accenture’s high-growth culture.',
  },
  {
    id: 'sjt-21-pair',
    scenario: 'Engineers should strictly avoid accepting project assignments involving unfamiliar tech stacks, and should only work in technologies they have already mastered.',
    competency: 'Agility & Growth',
    pair: { id: 'sjt-21', inverted: true },
    options: [
      { id: 'opt-21p-a', label: 'Strongly Disagree — Rapid upskilling on emerging technologies is essential for professional growth and client value.', score: 4 },
      { id: 'opt-21p-b', label: 'Disagree — Taking calculated learning risks broadens career opportunities.', score: 3 },
      { id: 'opt-21p-c', label: 'Agree — Specializing in one tool minimizes delivery risk.', score: 1 },
      { id: 'opt-21p-d', label: 'Strongly Agree — Learning on the job is reckless and unprofessional.', score: 0 },
    ],
    rationale: 'Inverted check evaluating growth mindset and willingness to tackle new challenges.',
  },
  {
    id: 'sjt-22',
    scenario: 'A major architectural refactoring you championed and worked on for three weeks is rendered obsolete by a sudden change in client enterprise direction.',
    competency: 'Agility & Growth',
    pair: { id: 'sjt-22-pair', inverted: true },
    options: [
      { id: 'opt-22a', label: 'Accept the pivot gracefully, document reusable learnings and modular components, and realign your energy toward the new strategic goal.', score: 4 },
      { id: 'opt-22b', label: 'Argue obstinately against the new direction to force the client to use your code.', score: 1 },
      { id: 'opt-22c', label: 'Become disengaged, express bitterness, and reduce work output.', score: 0 },
      { id: 'opt-22d', label: 'Delete the entire branch in anger without preserving any documentation.', score: 0 },
    ],
    rationale: 'Resilience and emotional agility when project pivots occur are critical consulting attributes.',
  },
  {
    id: 'sjt-22-pair',
    scenario: 'When business priorities pivot and cancel a developer’s recent technical work, that developer is justified in holding back effort and resisting the new direction.',
    competency: 'Agility & Growth',
    pair: { id: 'sjt-22', inverted: true },
    options: [
      { id: 'opt-22p-a', label: 'Strongly Disagree — Professional adaptability means recognizing business shifts and redirecting engineering talent toward new value.', score: 4 },
      { id: 'opt-22p-b', label: 'Disagree — Changes in business context happen frequently in consulting.', score: 3 },
      { id: 'opt-22p-c', label: 'Agree — Sunk cost in engineering effort warrants resisting changes.', score: 1 },
      { id: 'opt-22p-d', label: 'Strongly Agree — Technical teams should dictate business strategy.', score: 0 },
    ],
    rationale: 'Inverted consistency check on adaptability vs stubborn attachment to sunk work.',
  },
  {
    id: 'sjt-23',
    scenario: 'Your team lead provides critical feedback during your performance review that your technical documentation is too brief and causes delays for QA.',
    competency: 'Agility & Growth',
    options: [
      { id: 'opt-23a', label: 'Thank the lead for the actionable feedback, review high-quality documentation examples from peers, and ask QA what specific details would help them most.', score: 4 },
      { id: 'opt-23b', label: 'Defensively argue that writing code is your only responsibility and QA should read the code.', score: 0 },
      { id: 'opt-23c', label: 'Nod passively in the meeting and make no changes to your documentation habits.', score: 1 },
      { id: 'opt-23d', label: 'Resent the QA team and avoid collaborating with them.', score: 0 },
    ],
    rationale: 'A growth mindset treats constructive critique as a stepping stone to professional excellence.',
  },
  {
    id: 'sjt-24',
    scenario: 'The firm introduces a new corporate generative AI assistant tool and encourages all engineers to explore integrating it into daily workflows.',
    competency: 'Agility & Growth',
    options: [
      { id: 'opt-24a', label: 'Proactively test the tool for unit test drafting and boilerplate generation while verifying all outputs carefully against data privacy guidelines.', score: 4 },
      { id: 'opt-24b', label: 'Blindly trust everything the AI generates and paste it into production without review.', score: 0 },
      { id: 'opt-24c', label: 'Refuse to touch new tools because older workflows have worked fine for years.', score: 1 },
      { id: 'opt-24d', label: 'Mock colleagues who are learning how to prompt effectively.', score: 0 },
    ],
    rationale: 'Embracing innovation responsibly with critical human validation is central to Accenture’s tech vision.',
  },
  {
    id: 'sjt-25',
    scenario: 'You encounter a complex memory leak in a production service that no one on your team has solved before.',
    competency: 'Agility & Growth',
    options: [
      { id: 'opt-25a', label: 'Formulate hypotheses, use profiling tools systematically to inspect heap snapshots, research recent literature, and share your diagnostic findings openly.', score: 4 },
      { id: 'opt-25b', label: 'Restart the server periodically and ignore the underlying leak.', score: 1 },
      { id: 'opt-25c', label: 'Declare the problem impossible and give up after an hour.', score: 0 },
      { id: 'opt-25d', label: 'Blame the cloud provider without gathering telemetry data.', score: 0 },
    ],
    rationale: 'Curiosity and systematic troubleshooting dismantle complex unknown issues.',
  },
  {
    id: 'sjt-26',
    scenario: 'An internal company certification program is announced with subsidized cloud exam vouchers, but preparation requires studying outside work hours.',
    competency: 'Agility & Growth',
    options: [
      { id: 'opt-26a', label: 'Sign up for the certification track, build a steady weekly study schedule, and share practice resources with interested teammates.', score: 4 },
      { id: 'opt-26b', label: 'Ignore the opportunity because it requires personal effort.', score: 1 },
      { id: 'opt-26c', label: 'Sign up for the voucher, never study, and let it expire.', score: 0 },
      { id: 'opt-26d', label: 'Demand a salary promotion before beginning the course.', score: 0 },
    ],
    rationale: 'Taking proactive ownership of personal upskilling differentiates high-trajectory consultants.',
  },
  {
    id: 'sjt-27',
    scenario: 'A newly introduced automated code linter flags 30 minor formatting issues in code you recently submitted.',
    competency: 'Agility & Growth',
    options: [
      { id: 'opt-27a', label: 'Configure your IDE to auto-format on save according to the team standard and fix the issues promptly.', score: 4 },
      { id: 'opt-27b', label: 'Disable the linter in your local environment and force merge.', score: 0 },
      { id: 'opt-27c', label: 'Argue that formatting rules suppress your personal coding creativity.', score: 1 },
      { id: 'opt-27d', label: 'Blame the devops team for installing annoying tools.', score: 0 },
    ],
    rationale: 'Adopting team standards without friction reflects engineering maturity.',
  },
  {
    id: 'sjt-28',
    scenario: 'You failed an internal technical assessment on your first attempt.',
    competency: 'Agility & Growth',
    options: [
      { id: 'opt-28a', label: 'Analyze the diagnostic breakdown, identify your specific skill gaps, seek advice from peers who passed, and schedule a re-test with a structured study plan.', score: 4 },
      { id: 'opt-28b', label: 'Claim the test was biased and unfair without reviewing your mistakes.', score: 0 },
      { id: 'opt-28c', label: 'Give up on that technology domain permanently.', score: 1 },
      { id: 'opt-28d', label: 'Try to find leaked test answers online rather than learning.', score: 0 },
    ],
    rationale: 'Resilience and using diagnostic feedback to master challenging competencies.',
  },
  {
    id: 'sjt-29',
    scenario: 'A junior colleague suggests a modern open-source tool that could replace a script you personally wrote two years ago.',
    competency: 'Agility & Growth',
    options: [
      { id: 'opt-29a', label: 'Welcome the suggestion warmly, evaluate its capabilities objectively alongside the junior colleague, and adopt it if it provides clear benefits.', score: 4 },
      { id: 'opt-29b', label: 'Reject it dismissively because you built the current script yourself.', score: 1 },
      { id: 'opt-29c', label: 'Pretend you already knew about the tool and take credit for the idea.', score: 0 },
      { id: 'opt-29d', label: 'Discourage the colleague from investigating new tools.', score: 0 },
    ],
    rationale: 'Humility and embracing superior solutions regardless of who discovered them.',
  },
  {
    id: 'sjt-30',
    scenario: 'You are offered an opportunity to rotate to a project in a completely different business sector (e.g., healthcare from banking).',
    competency: 'Agility & Growth',
    options: [
      { id: 'opt-30a', label: 'Embrace the rotation, study the domain terminology and compliance landscape, and leverage your transferrable technical expertise.', score: 4 },
      { id: 'opt-30b', label: 'Refuse because banking is the only sector you know.', score: 1 },
      { id: 'opt-30c', label: 'Accept but try to apply banking models without understanding healthcare nuances.', score: 1 },
      { id: 'opt-30d', label: 'Complain that switching domains resets your career.', score: 0 },
    ],
    rationale: 'Breadth of industry domain agility empowers multi-faceted consultants.',
  },

  // ==========================================
  // INTEGRITY & OWNERSHIP (12 Items: 2 Pairs + 8 Single)
  // ==========================================
  {
    id: 'sjt-31',
    scenario: 'You accidentally drop a production database table during an emergency hotfix. There is an automated backup from two hours ago, but uncommitted transactions will be lost.',
    competency: 'Integrity & Ownership',
    pair: { id: 'sjt-31-pair', inverted: true },
    options: [
      { id: 'opt-31a', label: 'Immediately notify your engineering lead and incident manager, initiate the backup restoration, and document exactly what occurred to reconstruct the lost transactions.', score: 4 },
      { id: 'opt-31b', label: 'Quietly restore the backup and hope no one notices the two hours of missing client transactions.', score: 0 },
      { id: 'opt-31c', label: 'Blame an automated cloud provider glitch or another team member.', score: 0 },
      { id: 'opt-31d', label: 'Log off and wait for someone else to discover the outage.', score: 0 },
    ],
    rationale: 'Integrity under crisis is the bedrock of engineering ethics. Prompt escalation and total transparency protect enterprise trust.',
  },
  {
    id: 'sjt-31-pair',
    scenario: 'If an engineer inadvertently causes a database or system error, it is acceptable to conceal the incident as long as an automated backup can restore partial service.',
    competency: 'Integrity & Ownership',
    pair: { id: 'sjt-31', inverted: true },
    options: [
      { id: 'opt-31p-a', label: 'Strongly Disagree — Full transparency and immediate escalation are non-negotiable for system recovery and trust.', score: 4 },
      { id: 'opt-31p-b', label: 'Disagree — Concealing issues causes compounding downstream data corruption.', score: 3 },
      { id: 'opt-31p-c', label: 'Agree — If the system works again, revealing mistakes only damages personal reputation.', score: 1 },
      { id: 'opt-31p-d', label: 'Strongly Agree — What leadership does not know will not hurt them.', score: 0 },
    ],
    rationale: 'Inverted check evaluating transparency and ownership vs risk-hiding behavior.',
  },
  {
    id: 'sjt-32',
    scenario: 'A colleague asks you to share your individual VPN or production database credentials so they can test their code over the weekend.',
    competency: 'Integrity & Ownership',
    pair: { id: 'sjt-32-pair', inverted: true },
    options: [
      { id: 'opt-32a', label: 'Firmly decline, explain that sharing credentials violates enterprise security policy, and guide them through the official access request portal.', score: 4 },
      { id: 'opt-32b', label: 'Share your password over an unencrypted chat message since they are a trusted coworker.', score: 0 },
      { id: 'opt-32c', label: 'Lend them your corporate laptop with your session unlocked.', score: 0 },
      { id: 'opt-32d', label: 'Report them to HR immediately without explaining the policy to them first.', score: 2 },
    ],
    rationale: 'Enterprise security standards must be strictly defended; credential sharing is a severe security violation.',
  },
  {
    id: 'sjt-32-pair',
    scenario: 'Sharing personal security access tokens or production credentials with trusted teammates is acceptable if it helps unblock critical project deliverables.',
    competency: 'Integrity & Ownership',
    pair: { id: 'sjt-32', inverted: true },
    options: [
      { id: 'opt-32p-a', label: 'Strongly Disagree — Enterprise security boundaries and zero-trust audit trails must never be compromised for speed.', score: 4 },
      { id: 'opt-32p-b', label: 'Disagree — Credential sharing bypasses audit accountability.', score: 3 },
      { id: 'opt-32p-c', label: 'Agree — Deadlines sometimes require pragmatic compromises.', score: 1 },
      { id: 'opt-32p-d', label: 'Strongly Agree — Teammates should share all credentials freely.', score: 0 },
    ],
    rationale: 'Inverted check on data security governance and personal accountability.',
  },
  {
    id: 'sjt-33',
    scenario: 'You notice that a widely used third-party open source library in your codebase has an unmaintained license that restricts commercial redistribution.',
    competency: 'Integrity & Ownership',
    options: [
      { id: 'opt-33a', label: 'Flag the licensing risk to your technical architect, document compliant alternative libraries, and plan a replacement spike in the next sprint.', score: 4 },
      { id: 'opt-33b', label: 'Ignore the license and assume corporate lawyers will never notice.', score: 0 },
      { id: 'opt-33c', label: 'Delete the LICENSE file from the node_modules folder to hide it.', score: 0 },
      { id: 'opt-33d', label: 'Leave the company before the product is released.', score: 0 },
    ],
    rationale: 'Ownership includes proactive intellectual property compliance and legal governance.',
  },
  {
    id: 'sjt-34',
    scenario: 'You discover that an automated test suite has 10 flaky tests that intermittently fail. A teammate proposes commenting them out so the CI/CD pipeline always passes green.',
    competency: 'Integrity & Ownership',
    options: [
      { id: 'opt-34a', label: 'Advocate against commenting them out, investigate the root causes of the flakiness (e.g. race conditions, unmocked network calls), and quarantine them transparently with tracking tickets.', score: 4 },
      { id: 'opt-34b', label: 'Agree to comment them out so builds finish quickly.', score: 0 },
      { id: 'opt-34c', label: 'Delete the entire test suite completely.', score: 0 },
      { id: 'opt-34d', label: 'Rerun the build twenty times until it randomly passes green.', score: 1 },
    ],
    rationale: 'Rigorous test integrity prevents silent defect propagation into production.',
  },
  {
    id: 'sjt-35',
    scenario: 'You realize that an estimate you gave for an upcoming epic was grossly optimistic, and the work will likely take twice as long as you promised.',
    competency: 'Integrity & Ownership',
    options: [
      { id: 'opt-35a', label: 'Notify your project manager early with a revised breakdown, explain the technical discoveries that expanded scope, and explore trade-offs.', score: 4 },
      { id: 'opt-35b', label: 'Stay silent until the deadline day and make up an excuse.', score: 0 },
      { id: 'opt-35c', label: 'Cut corners on architecture and skip all unit tests to barely finish on paper.', score: 1 },
      { id: 'opt-35d', label: 'Blame external dependencies for the delay before work even begins.', score: 0 },
    ],
    rationale: 'Early variance notification allows management to manage client expectations and resource allocation.',
  },
  {
    id: 'sjt-36',
    scenario: 'While reviewing client logs, you notice that sensitive personally identifiable information (PII) like phone numbers and credit card digits are being logged in plain text.',
    competency: 'Integrity & Ownership',
    options: [
      { id: 'opt-36a', label: 'Treat this as an urgent security priority: alert security leads, create an immediate masking hotfix, and initiate a log purge protocol.', score: 4 },
      { id: 'opt-36b', label: 'Ignore it because you are not on the security team.', score: 0 },
      { id: 'opt-36c', label: 'Download the logs to your personal USB drive out of curiosity.', score: 0 },
      { id: 'opt-36d', label: 'Mention it casually in passing next month.', score: 1 },
    ],
    rationale: 'Protecting client data confidentiality and privacy compliance is an urgent professional duty.',
  },
  {
    id: 'sjt-37',
    scenario: 'A project milestone was hit successfully, but you know that a shortcut was taken in error-handling that could cause memory corruption under peak load.',
    competency: 'Integrity & Ownership',
    options: [
      { id: 'opt-37a', label: 'Take ownership by creating a technical debt item immediately, quantifying the risk under load, and scheduling the refactor before marketing launch.', score: 4 },
      { id: 'opt-37b', label: 'Keep quiet because the milestone bonus was already approved.', score: 0 },
      { id: 'opt-37c', label: 'Hope that peak load never occurs in real life.', score: 0 },
      { id: 'opt-37d', label: 'Delete the monitoring alerts so high memory usage is not detected.', score: 0 },
    ],
    rationale: 'Engineering ownership means transparently remediating technical shortcuts.',
  },
  {
    id: 'sjt-38',
    scenario: 'You are submitting your weekly timecard and realize you spent 4 hours on personal matters during billable client hours.',
    competency: 'Integrity & Ownership',
    options: [
      { id: 'opt-38a', label: 'Accurately record your client hours, make up the personal time or log it under appropriate non-billable personal time codes.', score: 4 },
      { id: 'opt-38b', label: 'Bill the client for the full time anyway because everyone does it.', score: 0 },
      { id: 'opt-38c', label: 'Overcharge another client to balance the numbers.', score: 0 },
      { id: 'opt-38d', label: 'Ask a colleague to sign off on false hours.', score: 0 },
    ],
    rationale: 'Accurate time recording is a core ethical compliance standard at Accenture.',
  },
  {
    id: 'sjt-39',
    scenario: 'You accidentally pushed your personal git commit with an embedded API secret key to an internal repository.',
    competency: 'Integrity & Ownership',
    options: [
      { id: 'opt-39a', label: 'Immediately revoke and rotate the secret key in the provider console, scrub git history using standard tools, and inform security leads of the rotation.', score: 4 },
      { id: 'opt-39b', label: 'Push a second commit deleting the file and assume the key is safe.', score: 1 },
      { id: 'opt-39c', label: 'Do nothing because the repository is internal only.', score: 0 },
      { id: 'opt-39d', label: 'Deny that you were the author of the commit.', score: 0 },
    ],
    rationale: 'Secret keys committed to git must always be revoked immediately; git commit history retains exposed keys.',
  },
  {
    id: 'sjt-40',
    scenario: 'At the conclusion of your internship or project, you have access to proprietary client datasets on your laptop.',
    competency: 'Integrity & Ownership',
    options: [
      { id: 'opt-40a', label: 'Verify all project artifacts are stored in approved corporate repositories, delete all local copies, and follow the formal enterprise off-boarding checklist.', score: 4 },
      { id: 'opt-40b', label: 'Email the dataset to your personal email address for future reference.', score: 0 },
      { id: 'opt-40c', label: 'Upload the dataset to a public cloud storage drive.', score: 0 },
      { id: 'opt-40d', label: 'Ignore the files and assume IT will wipe everything automatically.', score: 1 },
    ],
    rationale: 'Confidentiality and IP governance obligations continue throughout and beyond project off-boarding.',
  },
];

export const ACCENTURE_SJT_QUESTIONS = ACCENTURE_SJT_ITEMS;
