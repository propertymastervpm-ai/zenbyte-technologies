export type ServiceIcon =
  | "code"
  | "app"
  | "layers"
  | "building"
  | "plug"
  | "workflow"
  | "spark"
  | "refresh"
  | "wrench";

export type Service = {
  title: string;
  summary: string;
  problem: string;
  deliver: string[];
  capabilities: string[];
  outcome: string;
  icon: ServiceIcon;
};

export const homeServices: Array<Pick<Service, "title" | "summary" | "icon">> = [
  {
    title: "Custom Software Development",
    summary: "Applications designed around the way your business actually works.",
    icon: "code",
  },
  {
    title: "Web Application Development",
    summary: "Secure, responsive web applications for customers and internal teams.",
    icon: "app",
  },
  {
    title: "SaaS Product Engineering",
    summary: "Product design and engineering for software you can offer as a service.",
    icon: "layers",
  },
  {
    title: "Enterprise Application Development",
    summary: "Multi-user systems with clear workflows, permissions, and operational visibility.",
    icon: "building",
  },
  {
    title: "API & System Integration",
    summary: "Connect your software with the tools, data, and services you already rely on.",
    icon: "plug",
  },
  {
    title: "Automation & Intelligent Solutions",
    summary: "Reduce repetitive work with automated workflows and practical, data-informed features.",
    icon: "workflow",
  },
];

export const services: Service[] = [
  {
    title: "Custom Software Development",
    summary: "Purpose-built applications for a specific business workflow.",
    problem:
      "Generic tools force teams into workarounds. Important steps end up in spreadsheets, chat threads, and personal follow-ups.",
    deliver: [
      "A scoped application shaped around your users and workflow",
      "Clear screens for the tasks people repeat",
      "A first release you can put into daily use",
    ],
    capabilities: [
      "Workflow mapping",
      "Web application delivery",
      "Role-based access",
      "Integration with existing systems",
    ],
    outcome: "Teams spend less time coordinating around the work and more time completing it.",
    icon: "code",
  },
  {
    title: "Web Application Development",
    summary: "Browser-based software for customers, staff, and operators.",
    problem:
      "Business processes that live in desktop files or disconnected forms are hard to share, update, and trust.",
    deliver: [
      "Responsive web applications",
      "Authenticated user journeys",
      "Interfaces that stay usable on desktop and mobile",
    ],
    capabilities: [
      "Customer and internal portals",
      "Forms and operational dashboards",
      "Secure access",
      "Cloud-ready hosting",
    ],
    outcome: "People can use the same system from the office or the field, without a separate install.",
    icon: "app",
  },
  {
    title: "SaaS Product Development",
    summary: "Software products designed to be offered to many customers.",
    problem:
      "A useful internal tool does not automatically become a product. Accounts, onboarding, and ongoing improvement need to be designed in.",
    deliver: [
      "Product structure for multiple customers",
      "Onboarding and core user workflows",
      "A release path you can extend after launch",
    ],
    capabilities: [
      "Multi-customer product design",
      "Account and access models",
      "Usage-focused interfaces",
      "Iterative product engineering",
    ],
    outcome: "You get a product that can be introduced, operated, and improved as a service.",
    icon: "layers",
  },
  {
    title: "Enterprise Software Solutions",
    summary: "Operational systems for teams that need shared control and visibility.",
    problem:
      "When several people handle the same process, status gets lost. Approvals, records, and exceptions become difficult to trace.",
    deliver: [
      "Multi-user business applications",
      "Permissions aligned to roles",
      "Operational records and status views",
    ],
    capabilities: [
      "Internal business systems",
      "Workflow states",
      "Reporting views",
      "Controlled access",
    ],
    outcome: "Managers can see where work stands, and teams work from one operational record.",
    icon: "building",
  },
  {
    title: "API & Third-Party Integrations",
    summary: "Connections between your software and the services around it.",
    problem:
      "Data re-entered between systems creates delay and mismatches. A product is only useful if it can sit inside the rest of the operation.",
    deliver: [
      "API design and implementation",
      "Connections to relevant third-party services",
      "Clear handling of success, failure, and retries",
    ],
    capabilities: [
      "REST APIs",
      "Payment and communication integrations",
      "Data exchange",
      "System-to-system workflows",
    ],
    outcome: "Information moves between systems with less manual copying and fewer broken handoffs.",
    icon: "plug",
  },
  {
    title: "Workflow Automation",
    summary: "Software that carries routine steps instead of relying on memory.",
    problem:
      "Reminders, status changes, and repetitive checks depend on someone remembering to do them. They slip when volume grows.",
    deliver: [
      "Automated steps inside an existing or new workflow",
      "Reminders and status updates",
      "A record of what the system did",
    ],
    capabilities: [
      "Rule-based follow-ups",
      "Notification workflows",
      "Status tracking",
      "Exception handling",
    ],
    outcome: "Routine work happens on time, and people step in when a decision is actually needed.",
    icon: "workflow",
  },
  {
    title: "Data & AI-Enabled Applications",
    summary: "Software that uses operational data to support a decision.",
    problem:
      "Teams collect data but still make routine judgments from memory or scattered reports.",
    deliver: [
      "Views that turn operational records into usable signals",
      "Assisted insights where the data supports them",
      "Interfaces that keep a person in control of the decision",
    ],
    capabilities: [
      "Operational reporting",
      "Data-backed recommendations",
      "Applied product intelligence",
      "Human review of automated output",
    ],
    outcome:
      "People see the relevant pattern sooner. Virtual Property Master’s rent intelligence is one example of this approach.",
    icon: "spark",
  },
  {
    title: "Application Modernization",
    summary: "Replace fragile tools with software that can be maintained.",
    problem:
      "Critical work often depends on aging spreadsheets, disconnected forms, or software that nobody wants to change.",
    deliver: [
      "A practical replacement for the current tool",
      "Migration of the records that still matter",
      "A cleaner structure for future changes",
    ],
    capabilities: [
      "Workflow replacement",
      "Data import",
      "Interface redesign",
      "Staged cutover",
    ],
    outcome: "The business keeps operating while the underlying system becomes easier to change.",
    icon: "refresh",
  },
  {
    title: "Software Maintenance & Enhancement",
    summary: "Careful changes after the first release.",
    problem:
      "A launched application still needs fixes, small improvements, and room for the next workflow.",
    deliver: [
      "Bug fixes and stability work",
      "Enhancements to existing flows",
      "A clear path for the next release",
    ],
    capabilities: [
      "Issue resolution",
      "Incremental features",
      "Release support",
      "Product upkeep",
    ],
    outcome: "The software stays aligned with the business instead of freezing on launch day.",
    icon: "wrench",
  },
];

export const engineeringApproach = [
  {
    title: "Discovery",
    text: "We clarify the users, the workflow, and the constraints before proposing a build.",
  },
  {
    title: "Architecture",
    text: "We define the application structure, data, and integrations needed for a reliable first release.",
  },
  {
    title: "Development",
    text: "We build in reviewable increments so the product can be seen while it is still easy to adjust.",
  },
  {
    title: "Testing",
    text: "We check the main paths, the edge cases, and the points where systems connect.",
  },
  {
    title: "Deployment",
    text: "We release a cloud-ready version with a practical handover for the people who will use it.",
  },
  {
    title: "Continuous Improvement",
    text: "We use real operation to decide what to fix, simplify, or add next.",
  },
];

export const whyZenbyte = [
  {
    title: "Product-First Thinking",
    text: "We treat software as a product: a defined user, a clear workflow, and a reason to improve it after launch.",
  },
  {
    title: "Scalable Engineering",
    text: "We design the first release so it can grow in users, properties, or workflows without starting over.",
  },
  {
    title: "Business-Focused Solutions",
    text: "The work starts from an operational problem. Features exist because they change how that work gets done.",
  },
  {
    title: "Modern Technology",
    text: "We build cloud-ready web software, connect it to other systems, and apply data or AI where it helps the task.",
  },
];

export const processSteps = [
  { step: "01", title: "Discover", text: "Understand the workflow, users, and constraints." },
  { step: "02", title: "Design", text: "Shape the product structure, screens, and data." },
  { step: "03", title: "Build", text: "Develop the application in reviewable increments." },
  { step: "04", title: "Test", text: "Check behaviour, edge cases, and readiness." },
  { step: "05", title: "Deploy", text: "Release a cloud-ready version your team can use." },
  { step: "06", title: "Improve", text: "Refine the product from real use." },
];

export const trustPoints = [
  "Software Engineering",
  "Product Development",
  "Cloud-Ready Applications",
  "Automation",
  "SaaS Platforms",
];
