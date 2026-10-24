// All site copy lives here, so updating the portfolio never means touching components.
import portrait from '../assets/arijeet-mukherjee.jpg'
import nellzcart from '../assets/work/nellzcart.jpg'
import onlineDisruptor from '../assets/work/online-disruptor.jpg'
import likeminds from '../assets/work/likeminds.jpg'
import reactApps from '../assets/work/react-apps.jpg'
import tacoclout from '../assets/work/tacoclout.jpg'

export const profile = {
  name: 'Arijeet Mukherjee',
  firstName: 'Arijeet',
  role: 'Software Development Engineer · AI Engineer',
  company: 'ServiceNow',
  location: 'Kolkata, India · Remote',
  email: 'ari123acess@gmail.com',
  portrait,
  rotatingRoles: ['AI agents', 'RAG pipelines', 'LLM-powered products', 'full-stack platforms'],
  intro:
    'Software Development Engineer at ServiceNow, building Agentic AI, Generative AI and LLM-powered experiences for Strategic Portfolio Management — on top of a strong full-stack foundation in React, Node.js and Java.',
  stats: [
    { value: '7+', label: 'years shipping software' },
    { value: '2023', label: 'building AI at ServiceNow since' },
    { value: '20+', label: 'client products delivered' },
    { value: '1.6K+', label: 'LinkedIn followers' },
  ],
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/arijeet-mukherjee-sde/', icon: 'linkedin' },
    { label: 'GitHub', href: 'https://github.com/arijeet-mukherjee', icon: 'github' },
    { label: 'Instagram', href: 'https://www.instagram.com/arijeet.the.coder/', icon: 'instagram' },
  ],
}

export const companies = ['ServiceNow', 'Dassault Systèmes', 'DXC Technology', 'Fiverr', 'Online Disruptor', 'Warewe Consultancy', 'Kyrion Technologies']

export const principles = [
  { title: 'AI for speed', text: 'I use AI to collapse the distance between an idea and a working first version — prototypes in an afternoon, not a sprint.' },
  { title: 'Engineering for direction', text: 'Architecture, security, testing and performance are what turn a demo into a product. That part is still engineering.' },
  { title: 'Judgment for impact', text: 'The hard question is rarely “how do I write this?” It is “is this the right thing to build?” — and that stays human.' },
]

export const expertise = [
  {
    id: 'agents',
    title: 'Agentic AI & AI Skills',
    text: 'Designing agents that plan, call tools, keep memory and recover from failure — plus the skills, workflow orchestration and guardrails that make them dependable in an enterprise platform.',
    tags: ['Agent design', 'Tool calling', 'Workflow orchestration', 'Guardrails'],
  },
  {
    id: 'rag',
    title: 'Generative AI & RAG',
    text: 'LLM applications grounded in the right context: retrieval, reranking, chunking strategy, prompt design and continuous evaluation so answers stay accurate as data changes.',
    tags: ['LLM apps', 'Retrieval & reranking', 'Evaluation', 'Prompting'],
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Engineering',
    text: 'Production systems end to end — React and Next.js front ends, Node.js and Java services, REST APIs and microservices built with Spring Boot and RxJava.',
    tags: ['React', 'Next.js', 'Node.js', 'Java'],
  },
  {
    id: 'platform',
    title: 'Platform & UI Frameworks',
    text: 'Reusable UI frameworks and platform capabilities that raise developer productivity and keep large products consistent, backed by automated testing and performance work.',
    tags: ['Design systems', 'System design', 'Testing', 'Performance'],
  },
]

// The pipeline the Agent Lab section animates — distilled from how I design production agents.
export const agentSteps = [
  { id: 'intent', label: 'Understand intent', detail: 'Clear purpose first: classify the request and decide whether an agent is even the right tool.', log: 'intent → "summarize at-risk projects and draft an update"' },
  { id: 'plan', label: 'Plan', detail: 'Break the goal into steps the system can verify, instead of one giant prompt.', log: 'plan → [fetch_portfolio, score_risk, draft_update]' },
  { id: 'retrieve', label: 'Retrieve & rerank', detail: 'Retrieve more, rerank, and send only the best context. Most RAG problems are retrieval problems.', log: 'retrieve → 48 chunks · rerank → top 6 (0.91 avg)' },
  { id: 'tools', label: 'Call tools', detail: 'Typed tool calls with permissions and reliable APIs — agents do work, not just generate text.', log: 'tool.fetch_portfolio() ✓ 212ms · tool.score_risk() ✓ 95ms' },
  { id: 'validate', label: 'Validate', detail: 'Check outputs against schemas and business rules; recover gracefully when a tool fails.', log: 'validate → schema ✓ · policy ✓ · 0 retries' },
  { id: 'respond', label: 'Respond & learn', detail: 'Ship the answer, then close the loop with monitoring, evaluation and feedback.', log: 'respond ✓ 1.4s · eval.score 0.94 · trace logged' },
]

export const featured = [
  {
    id: 'spm-ai',
    org: 'ServiceNow',
    period: '2023 — Present',
    title: 'Agentic & Generative AI for Strategic Portfolio Management',
    summary:
      'Inside ServiceNow’s SPM organization I build AI-native capabilities: intelligent agents, AI skills, workflow orchestration and LLM-powered assistance that help enterprises plan portfolios and get work done with less friction.',
    points: [
      'Develop and integrate Generative AI and Agentic AI workflows into the SPM product experience',
      'Build agent skills, contextual reasoning flows and enterprise AI integrations on the Now Platform',
      'Engineer full-stack features across React, Node.js and Java with a focus on scale and reliability',
    ],
    tags: ['Agentic AI', 'LLMs', 'AI Skills', 'React', 'Java'],
    visual: 'agent',
  },
  {
    id: 'spm-platform',
    org: 'ServiceNow',
    period: '2023 — Present',
    title: 'Reusable UI frameworks & platform capabilities',
    summary:
      'Reusable components and platform building blocks that keep a large enterprise product consistent and let teams ship faster — backed by automated tests and performance optimization.',
    points: [
      'Shared UI framework pieces used across SPM experiences',
      'Code quality, automated testing and performance as first-class engineering goals',
    ],
    tags: ['UI Frameworks', 'System Design', 'Testing'],
    visual: 'dashboard',
  },
  {
    id: 'dassault',
    org: 'Dassault Systèmes',
    period: '2021 — 2022',
    title: 'Classification web app & widgets for 3DEXPERIENCE',
    summary:
      'As an R&D Engineer in the classification domain I owned widgets and a single-page web app — from high-end UI to server-side code and microservices.',
    points: [
      'Built UI with JavaScript, UWA and React; server-side with Node.js and Java',
      'Developed and maintained microservices with RxJava and Spring Boot',
      'Wrote unit tests and automated white-box testing processes',
    ],
    tags: ['React', 'UWA', 'Spring Boot', 'RxJava'],
    visual: 'tree',
  },
]

export const projects = [
  { title: 'Online Disruptor', kind: 'Agency platform', text: 'Web & mobile development studio I ran while freelancing — helping businesses grow with modern tech.', image: onlineDisruptor, live: 'https://onlinedisruptor.com', source: 'https://github.com/emmyari/onlinedisrupto-admin' },
  { title: 'LikeMinds', kind: 'Community chat app', text: 'Community chat experience shipped to the App Store for interest-based groups.', image: likeminds, live: 'https://apps.apple.com/in/app/likeminds-community-chat/id1526635028', source: 'https://github.com/emmyari/likemind' },
  { title: 'NellZCart', kind: 'E-commerce', text: 'Full e-commerce storefront with catalog, cart and checkout flows.', image: nellzcart, live: 'http://www.nellzcart.online', source: 'https://github.com/emmyari/nellzcart' },
  { title: 'TacoClout', kind: 'Brand website', text: 'Marketing site for a food brand with a focus on speed and personality.', image: tacoclout, live: 'https://www.tacoclout.com/', source: 'https://github.com/emmyari/tacoclout' },
  { title: 'React Apps', kind: 'Open source', text: 'A collection of React apps and experiments built while learning in public.', image: reactApps, live: 'https://github.com/emmyari/', source: 'https://github.com/emmyari/' },
]

export const experience = [
  { role: 'Software Engineer (IC2)', company: 'ServiceNow', period: 'Jan 2023 — Present', place: 'Hyderabad · Remote', text: 'Strategic Portfolio Management. Agentic AI, Generative AI, AI skills and workflow automation, plus full-stack engineering in JavaScript, React, Node.js and Java.', current: true },
  { role: 'R&D Development Engineer', company: 'Dassault Systèmes', period: 'Nov 2021 — Dec 2022', place: 'Pune', text: 'Classification domain: widgets and SPA, efficient algorithms, UI and server code in JavaScript, UWA, React, Node.js and Java; microservices with RxJava and Spring Boot.' },
  { role: 'Associate Software Engineer', company: 'DXC Technology', period: 'Jul 2021 — Oct 2021', place: 'Bengaluru', text: 'UI components in JavaScript and React, core Java, and front-end documentation.' },
  { role: 'Professional Freelancer', company: 'Fiverr · Online Disruptor', period: 'Jun 2019 — Nov 2021', place: 'Kolkata', text: '20+ web and mobile projects for clients, run under my studio Online Disruptor.' },
  { role: 'Application Developer (Intern)', company: 'Warewe Consultancy', period: 'Jan 2020 — Feb 2021', place: 'Gurugram', text: 'Application development across web stacks, MySQL and CSS.' },
  { role: 'Earlier internships', company: 'Where is to buy · Kaasid · Kyrion Technologies', period: '2019 — 2020', place: 'India', text: 'Web and application development, and a machine-learning internship that started my path into AI.' },
]

export const stack = [
  { group: 'AI', items: ['Agentic AI', 'Generative AI', 'LLM applications', 'RAG', 'AI skills', 'Prompt design', 'Evaluation'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'JavaScript', 'HTML & CSS', 'UI frameworks'] },
  { group: 'Backend', items: ['Node.js', 'Java', 'Spring Boot', 'RxJava', 'REST APIs', 'MySQL'] },
  { group: 'Engineering', items: ['System design', 'Automated testing', 'Performance', 'Git & GitHub'] },
]

export const writingUrl = 'https://www.linkedin.com/in/arijeet-mukherjee-sde/recent-activity/all/'

export const writing = [
  { tag: 'AI Agents', title: 'Everyone is building AI agents. Most will fail.', text: 'Production AI is more than a prompt — memory, tool calling, validation, error recovery, permissions and monitoring are what separate demos from products.', reach: '6-page carousel' },
  { tag: 'Framework', title: 'How I build AI agents that actually work', text: 'Clear purpose, strong architecture, memory, tools, reliability, continuous evaluation and feedback loops. The best AI products aren’t magic — they’re engineered.', reach: '7-page guide' },
  { tag: 'RAG', title: 'Most RAG problems aren’t LLM problems', text: 'They’re retrieval problems. Retrieve more, rerank, and send only the best context to the model.', reach: 'Architecture note' },
  { tag: 'Engineering', title: 'AI makes engineering judgment more important', text: 'AI reduces the cost of writing code. It doesn’t reduce the cost of making the right decision.', reach: '3K+ impressions' },
]
