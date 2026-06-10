const SUPABASE_URL = "https://sduajufbgitydrkrluob.supabase.co";
const SUPABASE_KEY = "sb_publishable__cwUC91dFG3pluUwsXw7iw_bVjbl4Id";
const TARGET_HOURS = 500;
const STORAGE_KEY = "sevapremi-dashboard-v1";
const DELETED_MEMBERS_KEY = "sevapremi-manual-deleted-members-v1";
const DELETED_RESOURCES_KEY = "sevapremi-manual-deleted-resources-v1";
const REMOVED_MEMBER_NAMES = ["Ajay Sanghani"];
const ALWAYS_RESTORE_MEMBERS = ["Aditi Talekar"];

const initialData = {
  members: [
    {
      id: crypto.randomUUID(),
      name: "Aditi Talekar",
      role: "Team Leader and Coordinator",
      team: "Aditi Team Leader and Coordinator",
      hours: 13.8644,
      impact: "Progress tracking, team coordination, reporting to Ajay, MOM creation, website creation, Supabase setup and research ecosystem mapping",
      next_steps: "Keep cumulative #aditilog updated, collect hourly updates, review planners, and standardize team work records",
      resource_link: "https://www.sevapremi.com/",
      notes: "Main user. Current cumulative #aditilog baseline is 13 hr 51 min 52 sec out of 500 hours. Coordinates Varsha, Abhay, Juhi, Krish, Sai, Shreyas, Vinayak, Vaishnavi and reports to Ajay Sanghani, Founder of SevaPremi.",
    },
    {
      id: crypto.randomUUID(),
      name: "Sai",
      role: "SevaPremi Intern",
      team: "Aditi's Team",
      hours: 9.5167,
      impact: "Pothole problem module, civic-tech benchmarking, workflow design, NGO/solver research, UI/UX issue documentation",
      next_steps: "Continue Pothole Tag module documentation and solution workflow refinement",
      resource_link: "https://docs.google.com/spreadsheets/d/1w9VtpV1OoLXNrjojosaKtrKZKoLPjGIf/edit?rtpof=true&sd=true&gid=227539946#gid=227539946",
      notes: "Current #sailog cumulative: 9h 31m out of 500h. Worked on potholes, civic problem reporting, Dombivli workflow, severity matrix, KPI tracking, NGO/solver research and map-related UX issue documentation.",
    },
    {
      id: crypto.randomUUID(),
      name: "Varsha",
      role: "SevaPremi Intern",
      team: "Aditi's Team",
      hours: 8.5844,
      impact: "Kalyan West locality research, problem database, solution flow, evidence repository planning and UX review",
      next_steps: "Complete remaining 10-hour plan items and continue solution template refinement",
      resource_link: "https://1drv.ms/x/c/41b9319a7b49b0a6/IQBovtfyGsewR6N5enfO5tMEAWxRbwXfeFu8puhDtBEqU7w?e=MyYUIV",
      notes: "Current #varshalog cumulative: 8h 35m 04s out of 500h. Focused on Kalyan West, Godrej Hill and Barave Gaon; problem research database, workbook standardization, evidence workflow, Drive organization and JeevanShala/SevaYatra readability review.",
    },
    {
      id: crypto.randomUUID(),
      name: "Shreyas",
      role: "SevaPremi Intern",
      team: "Aditi's Team",
      hours: 13.3833,
      impact: "Passive smoking research, UX issue documentation, SevaPremi website exploration, NGO contact research and Claude/NotebookLM deliverables",
      next_steps: "Continue UX documentation, passive-smoking solver research and problem documentation",
      resource_link: "https://docs.google.com/spreadsheets/d/1EVHpM8TNndWNWpDf0jFgHgc6KhCx0FsY/edit?gid=1806074533#gid=1806074533",
      notes: "Current #shreyaslog cumulative: 13h 23m out of 500h. Researched passive smoking and 30+ locality problems, explored SevaPremi website/login flow, documented UX problems, used Gemini for design suggestions and found NGO contacts for passive-smoking work.",
    },
    {
      id: crypto.randomUUID(),
      name: "Abhay",
      role: "SevaPremi Intern",
      team: "Aditi's Team",
      hours: 4.2667,
      impact: "Global Warming and Environment module research for Ghatkopar with advanced workbook expansion",
      next_steps: "Continue climate solution repository and convert research into implementation templates",
      resource_link: "https://docs.google.com/spreadsheets/d/18NoEL4uKh0vuhTq-J_CSpqtxTg4hbjp-/edit?gid=1698235417#gid=1698235417",
      notes: "Current #abhaylog cumulative: 4h 16m out of 500h. Built Ghatkopar tracker, solution templates, module ownership, Global Warming research sheets and advanced climate workbook sections.",
    },
    {
      id: crypto.randomUUID(),
      name: "Vaishnavi",
      role: "SevaPremi Intern",
      team: "Juhi's Team",
      hours: 0,
      impact: "Research coverage pending",
      next_steps: "Expand research coverage",
      resource_link: "https://1drv.ms/w/c/bf16ac9ef8f89807/IQCVJ3SKbW8gTJWtdt8li7yFAXkWOxrcPI9HTB35ebSu8pk?e=hqLdIE",
      notes: "Resource also includes spreadsheet: https://1drv.ms/x/c/bf16ac9ef8f89807/IQDZtsmO8xiQR6hV56YDlbe6AWOP5dk9d7u2HXgL6C9hGt4?e=DjYXZa",
    },
    {
      id: crypto.randomUUID(),
      name: "Vinayak",
      role: "SevaPremi Intern",
      team: "Juhi's Team",
      hours: 0,
      impact: "Research coverage pending",
      next_steps: "Expand research coverage",
      resource_link: "https://docs.google.com/spreadsheets/d/1Z11IE48xPHqRXpsId1g_jXxA1TTjuPBR/edit?usp=drive_link&ouid=105262218422036681004&rtpof=true&sd=true",
      notes: "",
    },
    {
      id: crypto.randomUUID(),
      name: "Krish",
      role: "SevaPremi Intern",
      team: "Juhi's Team",
      hours: 0,
      impact: "UX and bug suggestion process owner",
      next_steps: "Manage all UX suggestions and bugs into one document or sheet",
      resource_link: "https://docs.google.com/spreadsheets/d/1G2e8F2oSuIfc01s-tUYhz2RsvkBLqgvg/edit?usp=sharing&ouid=117684043437018292381&rtpof=true&sd=true",
      notes: "Set a clear shared process for UX and bug tracking.",
    },
    {
      id: crypto.randomUUID(),
      name: "Juhi",
      role: "Team Lead and Coordinator",
      team: "Juhi Team Leader and Coordinator",
      hours: 5.7539,
      impact: "Team coordination, GPT link setup, schedule follow-ups, hotspot research, data collection and solution research",
      next_steps: "Continue coordinating assigned members and update cumulative #juhilog after each work session",
      resource_link: "",
      notes: "Current #juhilog cumulative: 5h 45m 14s out of 500h. Logged group meeting, Ajay/Aditi/Abhay meeting, team coordination, GPT link setup, problem hotspot research, data collection, Excel sheet work and solution improvement research.",
    },
  ],
  tasks: [
    {
      id: crypto.randomUUID(),
      member_name: "Aditi Talekar",
      date: "2026-06-06",
      hours: 1.3333,
      title: "Group meeting for SevaPremi platform planning",
      notes: "Attended 12:00 PM to 1:16 PM meeting focused on problem identification, solution templates, platform modules, UX/UI, data responsibilities, locality adoption, tools, community engagement and August launch planning.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Aditi Talekar",
      date: "2026-06-06",
      hours: 1,
      title: "Team coordination and minutes of meeting",
      notes: "Prepared and organized MOM/action items, including target localities, structured problem sheet, solution templates, module ownership, Google Sheets setup, scraping tools, roles and shared Drive requirements.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Aditi Talekar",
      date: "2026-06-07",
      hours: 0.2919,
      title: "Call with Ajay for SevaPremi discussion",
      notes: "17 min 31 sec call as coordinator and team lead to discuss SevaPremi direction and coordination responsibilities.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Aditi Talekar",
      date: "2026-06-07",
      hours: 0.7372,
      title: "Conference call with Ajay, Juhi and Abhay",
      notes: "44 min 14 sec coordination call covering team division, expectations, progress tracking and next execution steps.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Aditi Talekar",
      date: "2026-06-07",
      hours: 0.5,
      title: "Team division, WhatsApp group and ChatGPT links",
      notes: "Discussed with Juhi, divided team members, created separate progress tracking WhatsApp group for SevaPremi, created ChatGPT group links and coordinated with team members.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Aditi Talekar",
      date: "2026-06-08",
      hours: 1,
      title: "Progress tracking spreadsheet",
      notes: "Created and organized the internship progress tracking spreadsheet and structured reporting/tracking formats for team members.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Aditi Talekar",
      date: "2026-06-08",
      hours: 2,
      title: "Team coordination with Sai and Abhay",
      notes: "Coordinated with Sai and Abhay, followed up with team members for weekly planner submissions, resolved doubts and clarified tasks, reporting rules and expectations.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Aditi Talekar",
      date: "2026-06-08",
      hours: 2,
      title: "Research and ecosystem mapping",
      notes: "Researched locality problems and solutions; identified experts, thought leaders, NGOs, startups, government departments, conferences, communities and discussion groups; studied citizen, NGO, corporate, startup, government, researcher and expert roles; explored root causes and awareness strategies.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Aditi Talekar",
      date: "2026-06-08",
      hours: 0.1356,
      title: "Call with Abhay",
      notes: "8 min 8 sec coordination call with Abhay.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Aditi Talekar",
      date: "2026-06-08",
      hours: 0.1006,
      title: "Call with Sai",
      notes: "6 min 2 sec coordination call with Sai.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Aditi Talekar",
      date: "2026-06-08",
      hours: 0.1217,
      title: "Call with Varsha",
      notes: "7 min 18 sec coordination call with Varsha.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Aditi Talekar",
      date: "2026-06-08",
      hours: 0.1719,
      title: "Call with Shreyas",
      notes: "10 min 19 sec coordination call with Shreyas.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Aditi Talekar",
      date: "2026-06-08",
      hours: 0.7114,
      title: "Extended coordination call with Juhi",
      notes: "42 min 41 sec coordination discussion with Juhi.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Aditi Talekar",
      date: "2026-06-08",
      hours: 0.0211,
      title: "Follow-up call with Shreyas",
      notes: "1 min 16 sec follow-up call with Shreyas.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Aditi Talekar",
      date: "2026-06-08",
      hours: 0.6397,
      title: "Call with Ajay and Juhi",
      notes: "38 min 23 sec project review and planning discussion with Ajay and Juhi.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Aditi Talekar",
      date: "2026-06-08",
      hours: 3,
      title: "Project management website and Supabase backend",
      notes: "Created a project management and tracking website for Aditi, Juhi and Ajay context, including Supabase backend setup for centralized project tracking, task management and progress monitoring.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Aditi Talekar",
      date: "2026-06-08",
      hours: 0.1,
      title: "Team coordination and shared Drive instruction",
      notes: "Spent 6 min coordinating, clearing doubts, and instructing team members to create one common Drive folder for all files and share it.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Sai",
      date: "2026-06-06",
      hours: 1.2667,
      title: "Morning team meeting and discussion",
      notes: "Time spent in the morning team meeting and SevaPremi discussion.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Sai",
      date: "2026-06-06",
      hours: 1,
      title: "Pothole-related issue research",
      notes: "Conducted research on pothole-related issues, identified key problems and explored possible solutions.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Sai",
      date: "2026-06-06",
      hours: 0.75,
      title: "Excel documentation for pothole problems and solutions",
      notes: "Updated the Excel sheet with documented problems and proposed solutions.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Sai",
      date: "2026-06-07",
      hours: 1,
      title: "Problems module research on potholes and road management",
      notes: "Selected the Problems module, continued pothole and road-management research, identified causes such as poor drainage, heavy traffic and delayed maintenance, and noted a map-loading issue.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Sai",
      date: "2026-06-07",
      hours: 1,
      title: "Dombivli pothole documentation and civic-tech benchmarking",
      notes: "Completed research documentation for pothole complaint volume in Dombivli, Google Maps reviews for bad roads, existing civic-tech solutions, research tracker updates and Drive support documents.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Sai",
      date: "2026-06-07",
      hours: 1,
      title: "Civic problem reporting workflow research",
      notes: "Reviewed reporting workflows used by civic platforms, complaint tracking methods, documentation practices and map usability impact on citizen reports.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Sai",
      date: "2026-06-08",
      hours: 1,
      title: "Pothole Tag module discussion and 1-pager",
      notes: "Discussed the Pothole Tag module with Sir, worked on points discussed, structured 1-pager requirements and updated Drive progress for review.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Sai",
      date: "2026-06-08",
      hours: 1.3333,
      title: "Citizen Reporting and Pothole Resolution Workflow for Dombivli",
      notes: "Created a new sheet, structured workflow process, stakeholder responsibilities, severity escalation matrix, KPI tracking framework and Drive update for review.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Sai",
      date: "2026-06-08",
      hours: 1.1667,
      title: "NGO research, platform testing and map issue documentation",
      notes: "Discussed NGOs and solvers with Aditi, researched civic/road-safety/infrastructure NGOs, explored platform modules for UI/UX issues, and documented a map-related issue in the Problems module.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Varsha",
      date: "2026-06-07",
      hours: 0.75,
      title: "Target locality adoption for Kalyan West",
      notes: "Identified and adopted target locality for research: Kalyan West, Godrej Hill and Barave Gaon.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Varsha",
      date: "2026-06-07",
      hours: 0.5,
      title: "Locality Research Sheet creation",
      notes: "Created the Locality Research Sheet for Kalyan West research tracking.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Varsha",
      date: "2026-06-07",
      hours: 0.75,
      title: "Structured Problem Research Database",
      notes: "Created the structured problem research database and initial problem categorization.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Varsha",
      date: "2026-06-07",
      hours: 0.9725,
      title: "Kalyan West locality research and civic issue mapping",
      notes: "Continued locality research for Kalyan West, Godrej Hill and Barave Gaon; identified civic issue mapping approach and structured problem categorization.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Varsha",
      date: "2026-06-07",
      hours: 0.4625,
      title: "Problem understanding and solution-flow structure",
      notes: "Created and organized problem research understanding and solution flow for the internship workbook, focused on waste management, drainage, traffic and infrastructure issues.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Varsha",
      date: "2026-06-07",
      hours: 0.2742,
      title: "Evidence documentation and Drive workflow planning",
      notes: "Planned evidence documentation structure and Drive folder system for internship submission, including Google Maps screenshots and proof-based civic data workflow.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Varsha",
      date: "2026-06-07",
      hours: 2.7017,
      title: "Workbook review, standardization and future research workflow",
      notes: "Reviewed MOM/action items, analyzed project scope, standardized workbook structure, refined Locality Research, Problem Research Database, Solution Templates and Module Accountability sheets, and evaluated alignment with SevaPremi objectives.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Varsha",
      date: "2026-06-08",
      hours: 0.1167,
      title: "Discussion call with Aditi",
      notes: "Discussion call with Aditi regarding project progress and next steps.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Varsha",
      date: "2026-06-08",
      hours: 0.605,
      title: "Workbook schedule update and progress report",
      notes: "Updated internship workbook schedule and prepared progress report to share with Aditi.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Varsha",
      date: "2026-06-08",
      hours: 0.2794,
      title: "UX/UI review of JeevanShala and SevaYatra",
      notes: "Checked readability and contrast issues, identified weak visual hierarchy affecting navigation/text clarity, and structured UX feedback as Observation, Root Cause, Suggestions and Expected Outcome.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Varsha",
      date: "2026-06-08",
      hours: 1.0058,
      title: "SevaPremi Drive structure creation and organization",
      notes: "Created and organized Google Drive folder structure for the SevaPremi internship system; separated Framework Completed, KW-017 Active Research and Backup Archive; uploaded existing workbook into Backup for version control; prepared workspace for KW-017 Irregular Water Supply in Gaothan Areas.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Varsha",
      date: "2026-06-08",
      hours: 0.1667,
      title: "UX/UI documentation update",
      notes: "Logged JeevanShala and SevaYatra readability and contrast issue documentation into internship tracking.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Shreyas",
      date: "2026-06-06",
      hours: 1.3333,
      title: "Group meeting",
      notes: "Attended SevaPremi group meeting.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Shreyas",
      date: "2026-06-06",
      hours: 0.1167,
      title: "Coordination with Abhay",
      notes: "Coordinated with Abhay after the meeting.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Shreyas",
      date: "2026-06-06",
      hours: 1.1167,
      title: "Passive smoking and locality problem research",
      notes: "Researched passive smoking and many other problems in his locality.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Shreyas",
      date: "2026-06-06",
      hours: 1.6167,
      title: "Deliverables using Claude, NotebookLM and sheets",
      notes: "Made deliverables including sheets with help from Claude and NotebookLM.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Shreyas",
      date: "2026-06-07",
      hours: 1.3,
      title: "30+ problem research using ChatGPT",
      notes: "Researched 30+ problems including passive smoking in detail using ChatGPT.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Shreyas",
      date: "2026-06-07",
      hours: 1.5667,
      title: "Excel documentation using Claude",
      notes: "Took ChatGPT information and created documentation/Excel sheet using Claude.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Shreyas",
      date: "2026-06-08",
      hours: 0.2,
      title: "Two calls with Aditi",
      notes: "Two coordination calls with Aditi, total 12 min.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Shreyas",
      date: "2026-06-08",
      hours: 0.1667,
      title: "Conversation summary",
      notes: "Summarized the conversation after coordination.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Shreyas",
      date: "2026-06-08",
      hours: 0.3833,
      title: "Formal messages review and replies",
      notes: "Read all formal messages and replied to some of them.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Shreyas",
      date: "2026-06-08",
      hours: 0.7167,
      title: "SevaPremi website exploration and login flow",
      notes: "Explored the SevaPremi website while logging in and reviewing the experience.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Shreyas",
      date: "2026-06-08",
      hours: 0.6,
      title: "Manual design problem discovery",
      notes: "Manually found design problems on the SevaPremi website.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Shreyas",
      date: "2026-06-08",
      hours: 1.7167,
      title: "Gemini UX insights and design suggestions",
      notes: "Used Gemini to get more insights and user-friendly design suggestions.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Shreyas",
      date: "2026-06-08",
      hours: 0.9333,
      title: "UX problem documentation",
      notes: "Made documentation of the UX problems found during website review.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Shreyas",
      date: "2026-06-08",
      hours: 1.6167,
      title: "Passive smoking NGO contact documentation",
      notes: "Found and documented contact details of NGOs that work on passive smoking.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Abhay",
      date: "2026-06-06",
      hours: 1.2667,
      title: "First meeting with Ajay on SevaPremi project",
      notes: "Discussed SevaPremi website project overview, platform modules and topic assignment for Global Warming and Environment.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Abhay",
      date: "2026-06-06",
      hours: 0.5,
      title: "Ghatkopar locality Excel sheets and trackers",
      notes: "Completed Excel sheet for Ghatkopar locality: Problem Tracker with 12 problems, 6 solution templates, 15 module ownership items and action checklist.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Abhay",
      date: "2026-06-06",
      hours: 0.3333,
      title: "Conference call with Ajay, Aditi and Juhi",
      notes: "Task progress discussion and team coordination call.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Abhay",
      date: "2026-06-07",
      hours: 0.8333,
      title: "Global Warming research workbook for Ghatkopar",
      notes: "Completed research sheets for thought leaders, government departments, local/state organizations, startups/NGOs, conferences/events, groups/media, solution drivers and problem creators/education strategy.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Abhay",
      date: "2026-06-07",
      hours: 1.3333,
      title: "Advanced Global Warming workbook expansion",
      notes: "Added 10 advanced research sheets: Climate Finance, Legal Gaps, Vulnerability Map, Unclaimed Schemes, Suburb Comparison, KPIs/Metrics, Seasonal Calendar, Case Studies, MCAP Gap Analysis and Historical Trends.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Juhi",
      date: "2026-06-06",
      hours: 1.2667,
      title: "Group meeting",
      notes: "Spent 1h 16m in the SevaPremi group meeting.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Juhi",
      date: "2026-06-07",
      hours: 0.7372,
      title: "Meeting with Ajay, Aditi and Abhay",
      notes: "Spent 44m 14s in the meeting with Ajay sir, Aditi and Abhay for SevaPremi coordination and team discussion.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Juhi",
      date: "2026-06-07",
      hours: 0.75,
      title: "Team coordination, GPT links and schedule collection",
      notes: "Coordinated with team members, created GPT links and asked team members for their schedules.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Juhi",
      date: "2026-06-08",
      hours: 1,
      title: "Problem finding and hotspot research",
      notes: "Spent 1h finding problems and researching hotspots for SevaPremi internship work.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Juhi",
      date: "2026-06-08",
      hours: 0.75,
      title: "Data collection and Excel sheet work",
      notes: "Spent 45m on data collection and Excel sheet preparation.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Juhi",
      date: "2026-06-08",
      hours: 1.25,
      title: "Further research for improving solution",
      notes: "Spent 1h 15m doing further research to improve the solution approach.",
      status: "Completed",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Krish",
      date: "2026-06-08",
      hours: 0,
      title: "UX suggestions and bug tracking process",
      notes: "Set up a process to manage all UX suggestions and bugs into a single shared document or sheet, including website issue tracking and recommendations.",
      status: "Planned",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Vaishnavi",
      date: "2026-06-08",
      hours: 0,
      title: "Research coverage expansion",
      notes: "Continue expanding research coverage and organize findings in the provided research document and sheet.",
      status: "Planned",
    },
    {
      id: crypto.randomUUID(),
      member_name: "Vinayak",
      date: "2026-06-08",
      hours: 0,
      title: "Research coverage expansion",
      notes: "Continue expanding research coverage and organize findings in the provided Google Sheet.",
      status: "Planned",
    },
  ],
  research_items: [
    {
      id: crypto.randomUUID(),
      category: "Locality Problems",
      research_area: "Civic & Environmental Issues",
      details: "Potholes, waste, drainage, traffic, water supply",
      findings: "Recurring issues identified",
      stakeholders: "Citizens, NGOs, Govt",
      next_action: "Problem database creation",
      status: "Researching",
    },
    {
      id: crypto.randomUUID(),
      category: "Solution Research",
      research_area: "Solution Ecosystem",
      details: "Citizen, NGO, startup and government models",
      findings: "Multi-stakeholder solutions are strongest",
      stakeholders: "Experts, Startups",
      next_action: "Solution repository",
      status: "In Progress",
    },
    {
      id: crypto.randomUUID(),
      category: "Expert Mapping",
      research_area: "Thought Leaders",
      details: "Researchers, innovators, practitioners",
      findings: "Expert validation is essential",
      stakeholders: "SevaExperts",
      next_action: "Verification workflow",
      status: "In Review",
    },
    {
      id: crypto.randomUUID(),
      category: "Research Pipeline",
      research_area: "Tree Plantation",
      details: "Expert-guided plantation lifecycle model and tree pit revival process",
      findings: "Expert connected and process can be replicated",
      stakeholders: "Environment experts, citizens, NGOs",
      next_action: "Verify solution template with expert",
      status: "Advanced",
    },
  ],
  solutions: [
    {
      id: crypto.randomUUID(),
      problem: "Potholes",
      root_cause: "Drainage and maintenance",
      template: "Citizen reporting + tracking + municipal escalation",
      verification: "Pending",
    },
    {
      id: crypto.randomUUID(),
      problem: "Waste Management",
      root_cause: "Improper disposal",
      template: "Segregation + awareness + collection",
      verification: "Pending",
    },
    {
      id: crypto.randomUUID(),
      problem: "Tree Plantation",
      root_cause: "Low survival rate",
      template: "Expert-guided plantation lifecycle model",
      verification: "Expert Contact Identified",
    },
    {
      id: crypto.randomUUID(),
      problem: "Passive Smoking",
      root_cause: "Low awareness and weak enforcement",
      template: "Evidence collection + awareness + local authority escalation",
      verification: "Pending",
    },
  ],
  meetings: [
    {
      id: crypto.randomUUID(),
      date: "2026-06-06",
      title: "Internship planning meeting",
      attendees: "Aditi, team, seniors",
      duration: "1h 16m",
      summary: "Discussed the SevaPremi platform for identifying local societal and environmental problems, proposing solutions, engaging citizens, managing data and technology, assigning ownership and preparing for the August launch.",
      actions: "Identify/adopt localities, create structured problem Excel sheet, develop solution templates, define module ownership, set up Google Sheets and Drive, research scraping tools, define team roles and create the project tracking system.",
    },
    {
      id: crypto.randomUUID(),
      date: "2026-06-08",
      title: "Team progress call",
      attendees: "Aditi, Juhi, team members",
      duration: "Planned",
      summary: "Each member gives a 5-10 minute update. Aditi coordinates and reports updates to Ajay.",
      actions: "Bring uniformity in structure and plan next steps.",
    },
  ],
  resources: [
    {
      id: crypto.randomUUID(),
      title: "SevaPremi official website",
      type: "Website",
      owner: "Aditi Talekar",
      url: "https://www.sevapremi.com/",
      notes: "Reference for colors, ecosystem language and internship context.",
    },
    {
      id: crypto.randomUUID(),
      title: "University of Melbourne tree cooling report",
      type: "Research",
      owner: "Team",
      url: "https://share.google/OEsMRtIlOZlIP2sPE",
      notes: "Trees and greenery can cool cities by as much as 18°C when planned correctly.",
    },
    {
      id: crypto.randomUUID(),
      title: "UX issues document",
      type: "Document",
      owner: "Sai",
      url: "https://docs.google.com/document/d/1ILHG38JPbzoRH8jIkDLpJPIUgSMRymKsK0JdJsyToWs/edit?usp=drivesdk",
      notes: "Sai's documented SevaPremi website issue found while exploring the platform.",
    },
    {
      id: crypto.randomUUID(),
      title: "Sai pothole and civic research sheet",
      type: "Google Sheet",
      owner: "Sai",
      url: "https://docs.google.com/spreadsheets/d/1w9VtpV1OoLXNrjojosaKtrKZKoLPjGIf/edit?rtpof=true&sd=true&gid=227539946#gid=227539946",
      notes: "Sai's potholes, civic-tech benchmarking, reporting workflow and Dombivli complaint research.",
    },
    {
      id: crypto.randomUUID(),
      title: "Sai Dombivli pothole workflow sheet",
      type: "Google Sheet",
      owner: "Sai",
      url: "https://docs.google.com/spreadsheets/d/1CBK1uMbPF8zzAtDX_dpxd1DNkbWzhIfc/edit?usp=drivesdk&ouid=115621324470887833236&rtpof=true&sd=true",
      notes: "Citizen Reporting and Pothole Resolution Workflow for Dombivli.",
    },
    {
      id: crypto.randomUUID(),
      title: "Sai Pothole Tag project document",
      type: "Google Doc",
      owner: "Sai",
      url: "https://docs.google.com/document/d/1So2iYAjNIYy9PVEV5kDfROwLRXN-Mwx5v1dfNmzc14Y/edit?usp=drivesdk",
      notes: "Pothole Tag project research, local problems, expert-backed solutions, NGOs, stakeholders and solvers.",
    },
    {
      id: crypto.randomUUID(),
      title: "Varsha locality research workbook",
      type: "OneDrive Sheet",
      owner: "Varsha",
      url: "https://1drv.ms/x/c/41b9319a7b49b0a6/IQBovtfyGsewR6N5enfO5tMEAWxRbwXfeFu8puhDtBEqU7w?e=MyYUIV",
      notes: "Varsha's Kalyan West, Godrej Hill and Barave Gaon locality research and problem database.",
    },
    {
      id: crypto.randomUUID(),
      title: "Varsha standardized workbook update",
      type: "OneDrive Sheet",
      owner: "Varsha",
      url: "https://1drv.ms/x/c/41b9319a7b49b0a6/IQBLgoiB2wEBRLwQSaeVoD8uAaeU0u9PrW-ZkpmihaPFoNk?e=ZUNlym",
      notes: "Updated and organized workbook structure for evidence collection, solver/expert research, verification and references.",
    },
    {
      id: crypto.randomUUID(),
      title: "Shreyas problem research sheet",
      type: "Google Sheet",
      owner: "Shreyas",
      url: "https://docs.google.com/spreadsheets/d/1EVHpM8TNndWNWpDf0jFgHgc6KhCx0FsY/edit?gid=1806074533#gid=1806074533",
      notes: "Shreyas's passive smoking and 30+ locality problem research deliverables.",
    },
    {
      id: crypto.randomUUID(),
      title: "Shreyas additional locality problems sheet",
      type: "Google Sheet",
      owner: "Shreyas",
      url: "https://docs.google.com/spreadsheets/d/1LeNAw9fThLPN2FYu1bax-9HIGBsOezVp/edit?usp=sharing&ouid=108253747997611606380&rtpof=true&sd=true",
      notes: "Additional locality problems gathered with more details.",
    },
    {
      id: crypto.randomUUID(),
      title: "Abhay Ghatkopar environment workbook",
      type: "Google Sheet",
      owner: "Abhay",
      url: "https://docs.google.com/spreadsheets/d/18NoEL4uKh0vuhTq-J_CSpqtxTg4hbjp-/edit?gid=1698235417#gid=1698235417",
      notes: "Abhay's Global Warming and Environment module workbook for Ghatkopar.",
    },
    {
      id: crypto.randomUUID(),
      title: "Vaishnavi research document",
      type: "OneDrive Document",
      owner: "Vaishnavi",
      url: "https://1drv.ms/w/c/bf16ac9ef8f89807/IQCVJ3SKbW8gTJWtdt8li7yFAXkWOxrcPI9HTB35ebSu8pk?e=hqLdIE",
      notes: "Vaishnavi research document resource.",
    },
    {
      id: crypto.randomUUID(),
      title: "Vaishnavi research sheet",
      type: "OneDrive Sheet",
      owner: "Vaishnavi",
      url: "https://1drv.ms/x/c/bf16ac9ef8f89807/IQDZtsmO8xiQR6hV56YDlbe6AWOP5dk9d7u2HXgL6C9hGt4?e=DjYXZa",
      notes: "Vaishnavi spreadsheet resource.",
    },
    {
      id: crypto.randomUUID(),
      title: "Vinayak research sheet",
      type: "Google Sheet",
      owner: "Vinayak",
      url: "https://docs.google.com/spreadsheets/d/1Z11IE48xPHqRXpsId1g_jXxA1TTjuPBR/edit?usp=drive_link&ouid=105262218422036681004&rtpof=true&sd=true",
      notes: "Vinayak research spreadsheet resource.",
    },
    {
      id: crypto.randomUUID(),
      title: "Krish UX and bug tracking sheet",
      type: "Google Sheet",
      owner: "Krish",
      url: "https://docs.google.com/spreadsheets/d/1G2e8F2oSuIfc01s-tUYhz2RsvkBLqgvg/edit?usp=sharing&ouid=117684043437018292381&rtpof=true&sd=true",
      notes: "Krish resource for UX suggestions and bug tracking process.",
    },
    {
      id: crypto.randomUUID(),
      title: "SevaPremi Master Workbook - Aditi progress tracking",
      type: "Google Sheet",
      owner: "Aditi Talekar",
      url: "https://docs.google.com/spreadsheets/d/1rFUs0TO_tuJWOaYHuGFZcufAqVxEafrL/edit?usp=drive_link&ouid=106827107099005996133&rtpof=true&sd=true",
      notes: "Created to track internship progress, team work, reporting formats and SevaPremi workbook data.",
    },
    {
      id: crypto.randomUUID(),
      title: "Aditi research sheet",
      type: "Google Sheet",
      owner: "Aditi Talekar",
      url: "https://docs.google.com/spreadsheets/d/1MIISL1sr7uDCIa_g5sofXRvbZB49Q_b6/edit?usp=drive_link&ouid=106827107099005996133&rtpof=true&sd=true",
      notes: "Part of Aditi's research and ecosystem mapping work for locality problems, solution partners and structured research tracking.",
    },
  ],
  weekly_planners: [],
};

let db = structuredClone(initialData);
let supabaseClient = null;
let mode = "local";
let editing = null;
let manualDeletedMembers = new Set(JSON.parse(localStorage.getItem(DELETED_MEMBERS_KEY) || "[]"));
let manualDeletedResources = new Set(JSON.parse(localStorage.getItem(DELETED_RESOURCES_KEY) || "[]"));
for (const name of ALWAYS_RESTORE_MEMBERS) manualDeletedMembers.delete(name);
localStorage.setItem(DELETED_MEMBERS_KEY, JSON.stringify([...manualDeletedMembers]));

const tables = ["members", "tasks", "research_items", "solutions", "meetings", "resources", "weekly_planners"];
const $ = (selector) => document.querySelector(selector);

function effectiveHoursFor(name) {
  const memberHours = Number(memberByName(name)?.hours || 0);
  const taskHours = db.tasks
    .filter((task) => task.member_name === name)
    .reduce((sum, task) => sum + Number(task.hours || 0), 0);
  return Math.max(memberHours, taskHours);
}

function initializeSupabase() {
  if (!window.supabase) return;
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
}

async function loadData() {
  initializeSupabase();
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) db = JSON.parse(saved);
  ensureTables();
  scrubNullTimestamps();

  if (!supabaseClient) {
    applyLatestAditiBaseline();
    scrubNullTimestamps();
    persistLocal();
    setSync("offline", "Local mode");
    render();
    return;
  }

  try {
    const loaded = {};
    for (const table of tables) {
      const { data, error } = await supabaseClient.from(table).select("*").order("created_at", { ascending: true });
      if (error) throw error;
      loaded[table] = data ?? [];
    }

    const isEmpty = tables.every((table) => loaded[table].length === 0);
    mode = "supabase";
    if (isEmpty) {
      await seedSupabase();
      setSync("online", "Seeded Supabase");
    } else {
      db = { ...db, ...loaded };
      applyLatestAditiBaseline();
      scrubNullTimestamps();
      persistLocal();
      setSync("online", "Connected to Supabase");
      const syncResult = await syncAllData();
      if (syncResult.failed.length) {
        showSetup(
          "Supabase read works, but write sync needs attention.",
          `Connected to Supabase, but these tables did not update: ${syncResult.failed.join(", ")}. ${syncResult.errors.join(" ")}`,
        );
        setSync("offline", "Read connected, write issue");
      } else {
        $("#setupAlert").classList.add("hidden");
        setSync("online", "Synced with Supabase");
      }
    }
  } catch (error) {
    console.warn("Supabase unavailable, using local storage:", error.message);
    mode = "local";
    setSync("offline", "Local save active");
    showSetup(
      "Supabase connection failed.",
      `The website could not read from Supabase. Error: ${error.message || "Unknown error"}. Re-run supabase-schema.sql, then hard refresh the website.`,
    );
  }

  render();
}

function showSetup(title, message) {
  $("#setupTitle").textContent = title;
  $("#setupMessage").innerHTML = message === "Create the tables using supabase-schema.sql. Your edits are being saved locally until Supabase accepts writes."
    ? 'Create the tables using <code>supabase-schema.sql</code>. Your edits are being saved locally until Supabase accepts writes.'
    : escapeHtml(message);
  $("#setupAlert").classList.remove("hidden");
}

async function seedSupabase() {
  for (const table of tables) {
    const { error } = await supabaseClient.from(table).insert(db[table].map(prepareForSupabase));
    if (error) throw error;
  }
  persistLocal();
}

function persistLocal() {
  ensureTables();
  scrubNullTimestamps();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
}

function ensureTables() {
  for (const table of tables) {
    if (!Array.isArray(db[table])) db[table] = [];
  }
}

function scrubNullTimestamps() {
  for (const table of tables) {
    if (!Array.isArray(db[table])) continue;
    db[table] = db[table].map((record) => {
      const cleaned = { ...record };
      delete cleaned.created_at;
      return cleaned;
    });
  }
  removeExcludedRecords();
}

function removeExcludedRecords() {
  const removed = new Set([...REMOVED_MEMBER_NAMES, ...manualDeletedMembers]);
  db.members = db.members.filter((member) => !removed.has(member.name));
  db.tasks = db.tasks.filter((task) => !removed.has(task.member_name));
  db.resources = db.resources.filter((resource) => !removed.has(resource.owner) && !manualDeletedResources.has(resourceKey(resource)));
  db.weekly_planners = db.weekly_planners.filter((planner) => !removed.has(planner.member_name));
}

function resourceKey(resource) {
  return `${resource.owner || ""}::${resource.url || ""}`;
}

function applyLatestAditiBaseline() {
  const trackedMemberNames = ["Aditi Talekar", "Sai", "Varsha", "Shreyas", "Abhay", "Juhi"];
  const activeMemberNames = initialData.members
    .map((member) => member.name)
    .filter((name) => !manualDeletedMembers.has(name));
  const staleSeedTasks = new Set([
    "Scheduled 12:30 PM review call and team updates",
    "Citizen reporting and pothole resolution workflow",
    "Readability and UI/UX issue review",
  ]);

  db.tasks = db.tasks.filter((task) => !staleSeedTasks.has(task.title));

  const latestMembers = initialData.members.filter((member) =>
    trackedMemberNames.includes(member.name) && !manualDeletedMembers.has(member.name),
  );

  for (const latest of latestMembers) {
    const existing = db.members.find((member) => member.name === latest.name);
    if (existing) Object.assign(existing, { ...latest, id: existing.id });
    else db.members.push(latest);
  }

  for (const latest of initialData.tasks.filter((task) => activeMemberNames.includes(task.member_name))) {
    const existing = db.tasks.find(
      (task) => task.member_name === latest.member_name && task.date === latest.date && task.title === latest.title,
    );
    if (existing) Object.assign(existing, { ...latest, id: existing.id });
    else db.tasks.push(latest);
  }

  for (const latest of initialData.resources.filter((resource) =>
    activeMemberNames.includes(resource.owner) && !manualDeletedResources.has(resourceKey(resource))
  )) {
    const existing = db.resources.find((resource) => resource.owner === latest.owner && resource.url === latest.url);
    if (existing) Object.assign(existing, { ...latest, id: existing.id });
    else db.resources.push(latest);
  }

  for (const latest of initialData.meetings.filter((meeting) => meeting.title === "Internship planning meeting")) {
    const existing = db.meetings.find((meeting) => meeting.title === latest.title && meeting.date === latest.date);
    if (existing) Object.assign(existing, { ...latest, id: existing.id });
    else db.meetings.push(latest);
  }
}

async function syncAllData() {
  const result = { failed: [], errors: [] };
  await deleteExcludedRecordsFromSupabase(result);
  for (const table of tables) {
    if (!db[table].length) continue;
    const { error } = await supabaseClient.from(table).upsert(db[table].map(prepareForSupabase));
    if (error) {
      result.failed.push(table);
      result.errors.push(`${table}: ${error.message}`);
    }
  }
  return result;
}

async function deleteExcludedRecordsFromSupabase(result) {
  for (const name of REMOVED_MEMBER_NAMES) {
    const deletes = [
      ["members", "name"],
      ["tasks", "member_name"],
      ["resources", "owner"],
      ["weekly_planners", "member_name"],
    ];
    for (const [table, column] of deletes) {
      const { error } = await supabaseClient.from(table).delete().eq(column, name);
      if (error) {
        result.failed.push(table);
        result.errors.push(`${table}: could not remove ${name} (${error.message})`);
      }
    }
  }
}

function prepareForSupabase(record) {
  const cleaned = { ...record };
  delete cleaned.created_at;
  return cleaned;
}

async function saveRecord(table, record) {
  if (table === "resources") {
    manualDeletedResources.delete(resourceKey(record));
    localStorage.setItem(DELETED_RESOURCES_KEY, JSON.stringify([...manualDeletedResources]));
  }

  const existingIndex = db[table].findIndex((item) => item.id === record.id);
  if (existingIndex >= 0) db[table][existingIndex] = record;
  else db[table].push(record);
  persistLocal();
  render();

  if (mode === "supabase") {
    const { error } = await supabaseClient.from(table).upsert(prepareForSupabase(record));
    if (error) setSync("offline", "Saved locally");
  }
}

async function deleteRecord(table, id) {
  db[table] = db[table].filter((item) => item.id !== id);
  persistLocal();
  render();

  if (mode === "supabase") {
    const { error } = await supabaseClient.from(table).delete().eq("id", id);
    if (error) setSync("offline", "Deleted locally");
  }
}

async function savePlanner(memberName) {
  const textarea = document.querySelector(`[data-planner-text="${CSS.escape(memberName)}"]`);
  const plannerText = textarea?.value.trim() || "";
  const existing = db.weekly_planners.find((item) => item.member_name === memberName);
  const record = {
    ...(existing || {}),
    id: existing?.id || crypto.randomUUID(),
    member_name: memberName,
    planner_text: plannerText,
  };
  await saveRecord("weekly_planners", record);
}

async function deletePlanner(memberName) {
  const existing = db.weekly_planners.find((item) => item.member_name === memberName);
  if (!existing) return;
  await deleteRecord("weekly_planners", existing.id);
}

async function deleteResource(resourceId) {
  const confirmed = window.confirm("Delete this resource link?");
  if (!confirmed) return;
  const resource = db.resources.find((item) => item.id === resourceId);
  if (resource) {
    manualDeletedResources.add(resourceKey(resource));
    localStorage.setItem(DELETED_RESOURCES_KEY, JSON.stringify([...manualDeletedResources]));
  }
  await deleteRecord("resources", resourceId);
}

async function deleteTeamMember(memberName) {
  const confirmed = window.confirm(
    `Delete ${memberName} from the team? This will remove their member card, tasks, resources, and weekly planner.`,
  );
  if (!confirmed) return;

  manualDeletedMembers.add(memberName);
  localStorage.setItem(DELETED_MEMBERS_KEY, JSON.stringify([...manualDeletedMembers]));

  db.members = db.members.filter((member) => member.name !== memberName);
  db.tasks = db.tasks.filter((task) => task.member_name !== memberName);
  db.resources = db.resources.filter((resource) => resource.owner !== memberName);
  db.weekly_planners = db.weekly_planners.filter((planner) => planner.member_name !== memberName);
  persistLocal();
  render();

  if (mode === "supabase") {
    const deletes = [
      ["members", "name"],
      ["tasks", "member_name"],
      ["resources", "owner"],
      ["weekly_planners", "member_name"],
    ];
    for (const [table, column] of deletes) {
      await supabaseClient.from(table).delete().eq(column, memberName);
    }
    setSync("online", "Synced with Supabase");
  }
}

function setSync(state, label) {
  const pill = $("#syncStatus");
  pill.className = `sync-pill ${state}`;
  pill.textContent = label;
}

function formatHours(value) {
  const totalSeconds = Math.round(Number(value || 0) * 3600);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const parts = [];
  if (hours) parts.push(`${hours}h`);
  if (minutes) parts.push(`${minutes}m`);
  if (seconds) parts.push(`${seconds}s`);
  return parts.length ? parts.join(" ") : "0h";
}

function percent(value) {
  return Math.min(100, Math.round((Number(value || 0) / TARGET_HOURS) * 100));
}

function memberByName(name) {
  return db.members.find((member) => member.name === name);
}

function render() {
  renderNav();
  renderKpis();
  renderProgress();
  renderMembers();
  renderAditi();
  renderTaskForm();
  renderTaskTable();
  renderResearch();
  renderSolutions();
  renderMeetings();
  renderResources();
  renderPlanner();
}

function renderNav() {
  document.querySelectorAll(".nav-tab").forEach((button) => {
    button.onclick = () => {
      document.querySelectorAll(".nav-tab").forEach((tab) => tab.classList.remove("active"));
      document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
      button.classList.add("active");
      $(`#${button.dataset.view}`).classList.add("active");
    };
  });
}

function renderKpis() {
  const total = db.members.reduce((sum, member) => sum + effectiveHoursFor(member.name), 0);
  const aditiTotal = effectiveHoursFor("Aditi Talekar");
  const averagePercent = db.members.length
    ? Math.round(db.members.reduce((sum, member) => sum + percent(member.hours), 0) / db.members.length)
    : 0;
  const open = db.tasks.filter((task) => task.status !== "Completed").length;

  $("#totalHours").textContent = formatHours(total);
  $("#aditiHours").textContent = formatHours(aditiTotal);
  $("#teamPercent").textContent = `${averagePercent}%`;
  $("#openTasks").textContent = open;

  $("#nextActions").innerHTML = db.members
    .filter((member) => member.next_steps)
    .map(
      (member) => `
        <article class="item">
          <strong>${escapeHtml(member.name)}</strong>
          <p>${escapeHtml(member.next_steps)}</p>
          <span class="tag">${escapeHtml(member.team)}</span>
        </article>
      `,
    )
    .join("");
}

function renderProgress() {
  $("#progressList").innerHTML = db.members
    .map(
      (member) => `
        <div class="progress-row">
          <strong>${escapeHtml(member.name)}</strong>
          <div class="bar" aria-label="${escapeHtml(member.name)} progress">
            <div class="bar-fill" style="width: ${percent(member.hours)}%"></div>
          </div>
          <span>${formatHours(member.hours)} · ${percent(member.hours)}%</span>
        </div>
      `,
    )
    .join("");
}

function renderMembers() {
  $("#memberGrid").innerHTML = db.members
    .map(
      (member) => {
        const links = memberLinks(member);
        return `
          <article class="member-card">
            <div class="member-top">
              <div>
                <h3>${escapeHtml(member.name)}</h3>
                <div class="role">${escapeHtml(member.role)}</div>
              </div>
              <div class="member-actions">
                <button class="secondary-btn" data-edit="members" data-id="${member.id}">Edit</button>
                <button class="danger-btn" data-delete-member="${escapeAttr(member.name)}">Delete member</button>
              </div>
            </div>
            <div class="bar"><div class="bar-fill" style="width:${percent(member.hours)}%"></div></div>
            <div class="metric-row">
              <span class="metric">${formatHours(member.hours)} logged</span>
              <span class="metric">${formatHours(Math.max(0, TARGET_HOURS - Number(member.hours || 0)))} left</span>
              <span class="metric">${percent(member.hours)}%</span>
            </div>
            <p class="muted member-notes">${escapeHtml(member.notes || member.impact || "")}</p>
            <strong class="member-next">Next: ${escapeHtml(member.next_steps || "Add next action")}</strong>
            <div class="resource-links">
              <div class="resource-links-head">
                <strong>Resource links</strong>
                <button class="secondary-btn" data-add-resource-owner="${escapeAttr(member.name)}">+ Link</button>
              </div>
              ${links.length ? links.map(resourceLinkTemplate).join("") : `<p class="muted">No resource links added yet.</p>`}
            </div>
          </article>
        `;
      },
    )
    .join("");
}

function memberLinks(member) {
  return db.resources
    .filter((resource) => resource.owner === member.name && resource.url)
    .map((resource) => ({ ...resource, source: "resources" }));
}

function resourceLinkTemplate(resource) {
  return `
    <div class="resource-link-row">
      <div>
        <span class="tag">${escapeHtml(resource.type || "Link")}</span>
        <a href="${escapeAttr(resource.url)}" target="_blank" rel="noreferrer">${escapeHtml(resource.url)}</a>
      </div>
      <div class="resource-row-actions">
        <button class="secondary-btn" data-edit="resources" data-id="${resource.id}">Edit</button>
        <button class="danger-btn" data-delete-resource="${resource.id}">Delete</button>
      </div>
    </div>
  `;
}

function renderAditi() {
  const aditi = memberByName("Aditi Talekar") || db.members[0];
  const aditiTasks = db.tasks.filter((task) => task.member_name === aditi.name);
  const totalHours = effectiveHoursFor(aditi.name);
  $("#aditiProfile").innerHTML = `
    <div class="profile-hero">
      <h3>${escapeHtml(aditi.name)}</h3>
      <p>${escapeHtml(aditi.role)}. Responsible for tracking team progress, scheduling calls, reporting to Ajay and improving template uniformity.</p>
      <div class="bar"><div class="bar-fill" style="width:${percent(totalHours)}%"></div></div>
    </div>
    <div class="metric-row">
      <span class="metric">${formatHours(totalHours)} total</span>
      <span class="metric">${aditiTasks.length} reports</span>
      <span class="metric">${percent(totalHours)}% complete</span>
    </div>
    <p class="muted">${escapeHtml(aditi.notes || "")}</p>
    <button class="secondary-btn" data-edit="members" data-id="${aditi.id}">Edit Aditi profile</button>
  `;
}

function renderTaskForm() {
  $("#taskMember").innerHTML = db.members
    .map((member) => `<option>${escapeHtml(member.name)}</option>`)
    .join("");
  $("#taskDate").value ||= new Date().toISOString().slice(0, 10);
}

function renderTaskTable() {
  const rows = db.tasks
    .slice()
    .sort((a, b) => String(b.date).localeCompare(String(a.date)))
    .map(
      (task) => `
        <tr>
          <td>${escapeHtml(task.date || "")}</td>
          <td><strong>${escapeHtml(task.member_name)}</strong></td>
          <td>${formatHours(task.hours)}</td>
          <td>${escapeHtml(task.title)}</td>
          <td><span class="tag">${escapeHtml(task.status)}</span></td>
          <td><button class="secondary-btn" data-edit="tasks" data-id="${task.id}">Edit</button></td>
        </tr>
      `,
    )
    .join("");

  $("#taskTable").innerHTML = `
    <table>
      <thead><tr><th>Date</th><th>Member</th><th>Hours</th><th>Work report</th><th>Status</th><th></th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function renderResearch() {
  $("#researchList").innerHTML = db.research_items
    .map(
      (item) => `
        <article class="item">
          <h3>${escapeHtml(item.category)}</h3>
          <p><strong>${escapeHtml(item.research_area)}</strong> · ${escapeHtml(item.details)}</p>
          <p>${escapeHtml(item.findings)}</p>
          <div class="item-actions">
            <span class="tag">${escapeHtml(item.status)}</span>
            <button class="secondary-btn" data-edit="research_items" data-id="${item.id}">Edit</button>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderSolutions() {
  $("#solutionList").innerHTML = db.solutions
    .map(
      (item) => `
        <article class="item">
          <h3>${escapeHtml(item.problem)}</h3>
          <p><strong>Root cause:</strong> ${escapeHtml(item.root_cause || "")}</p>
          <p>${escapeHtml(item.template || "")}</p>
          <div class="item-actions">
            <span class="tag">${escapeHtml(item.verification || "Pending")}</span>
            <button class="secondary-btn" data-edit="solutions" data-id="${item.id}">Edit</button>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderMeetings() {
  $("#meetingList").innerHTML = db.meetings
    .map(
      (meeting) => `
        <article class="item">
          <h3>${escapeHtml(meeting.title)}</h3>
          <p>${escapeHtml(meeting.summary)}</p>
          <div class="metric-row">
            <span class="metric">${escapeHtml(meeting.date)}</span>
            <span class="metric">${escapeHtml(meeting.duration)}</span>
          </div>
          <div class="item-actions">
            <span class="muted">${escapeHtml(meeting.attendees)}</span>
            <button class="secondary-btn" data-edit="meetings" data-id="${meeting.id}">Edit</button>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderResources() {
  $("#resourceList").innerHTML = db.resources
    .map(
      (resource) => `
        <article class="item">
          <h3>${escapeHtml(resource.title)}</h3>
          <p>${escapeHtml(resource.notes || "")}</p>
          <div class="item-actions">
            <span class="tag">${escapeHtml(resource.type)}</span>
            <span>
              <a href="${escapeAttr(resource.url)}" target="_blank" rel="noreferrer">Open</a>
              <button class="secondary-btn" data-edit="resources" data-id="${resource.id}">Edit</button>
            </span>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderPlanner() {
  $("#plannerGrid").innerHTML = db.members
    .map((member) => {
      const planner = db.weekly_planners.find((item) => item.member_name === member.name);
      return `
        <article class="planner-card">
          <div class="section-head">
            <div>
              <p class="eyebrow">${escapeHtml(member.role || "Member")}</p>
              <h3>${escapeHtml(member.name)}</h3>
            </div>
            <button class="danger-btn" data-delete-planner="${escapeAttr(member.name)}">Delete</button>
          </div>
          <label>
            Weekly planner
            <textarea data-planner-text="${escapeAttr(member.name)}" placeholder="Paste ${escapeAttr(member.name)}'s weekly schedule here">${escapeHtml(planner?.planner_text || "")}</textarea>
          </label>
          <button class="primary-btn" data-save-planner="${escapeAttr(member.name)}">Save planner</button>
        </article>
      `;
    })
    .join("");
}

const fieldMap = {
  members: [
    ["name", "Name", "text"],
    ["role", "Role", "text"],
    ["team", "Team", "text"],
    ["hours", "Hours logged", "number"],
    ["impact", "Impact", "text"],
    ["next_steps", "Next steps", "text"],
    ["resource_link", "Resource link", "url"],
    ["notes", "Notes", "textarea"],
  ],
  tasks: [
    ["member_name", "Member", "member"],
    ["date", "Date", "date"],
    ["hours", "Hours", "number"],
    ["title", "Work report", "text"],
    ["status", "Status", "status"],
    ["notes", "Detailed notes", "textarea"],
  ],
  research_items: [
    ["category", "Category", "text"],
    ["research_area", "Research area", "text"],
    ["details", "Details covered", "textarea"],
    ["findings", "Key findings", "textarea"],
    ["stakeholders", "Potential stakeholders", "text"],
    ["next_action", "Outcome / next action", "text"],
    ["status", "Status", "status"],
  ],
  solutions: [
    ["problem", "Problem", "text"],
    ["root_cause", "Root cause", "text"],
    ["template", "Solution template", "textarea"],
    ["verification", "Expert verification", "text"],
  ],
  meetings: [
    ["date", "Date", "date"],
    ["title", "Meeting title", "text"],
    ["attendees", "Attendees", "text"],
    ["duration", "Duration", "text"],
    ["summary", "Summary", "textarea"],
    ["actions", "Actions", "textarea"],
  ],
  resources: [
    ["title", "Title", "text"],
    ["type", "Type", "text"],
    ["owner", "Owner", "text"],
    ["url", "URL", "url"],
    ["notes", "Notes", "textarea"],
  ],
};

function openEditor(table, id = null, defaults = {}) {
  const record = id ? db[table].find((item) => item.id === id) : { id: crypto.randomUUID(), ...defaults };
  editing = { table, id: record.id };
  $("#dialogEyebrow").textContent = id ? "Edit" : "Add";
  $("#dialogTitle").textContent = table.replace("_", " ");
  $("#deleteBtn").style.visibility = id && table !== "members" ? "visible" : "hidden";
  $("#dialogFields").innerHTML = fieldMap[table]
    .map(([key, label, type]) => fieldTemplate(key, label, type, record[key]))
    .join("");
  $("#editorDialog").showModal();
}

function fieldTemplate(key, label, type, value = "") {
  if (type === "textarea") {
    return `<label class="span-2">${label}<textarea name="${key}">${escapeHtml(value || "")}</textarea></label>`;
  }
  if (type === "member") {
    return `<label>${label}<select name="${key}">${db.members
      .map((member) => `<option ${member.name === value ? "selected" : ""}>${escapeHtml(member.name)}</option>`)
      .join("")}</select></label>`;
  }
  if (type === "status") {
    return `<label>${label}<select name="${key}">${["Planned", "In Progress", "Completed", "Blocked", "Researching", "In Review", "Advanced"]
      .map((status) => `<option ${status === value ? "selected" : ""}>${status}</option>`)
      .join("")}</select></label>`;
  }
  return `<label>${label}<input name="${key}" type="${type}" step="0.25" value="${escapeAttr(value || "")}" /></label>`;
}

function wireEvents() {
  $("#addMemberBtn").onclick = () => openEditor("members");
  $("#addResearchBtn").onclick = () => openEditor("research_items");
  $("#addSolutionBtn").onclick = () => openEditor("solutions");
  $("#addMeetingBtn").onclick = () => openEditor("meetings");
  $("#addResourceBtn").onclick = () => openEditor("resources");

  document.body.addEventListener("click", (event) => {
    const savePlannerButton = event.target.closest("[data-save-planner]");
    if (savePlannerButton) {
      savePlanner(savePlannerButton.dataset.savePlanner);
      return;
    }

    const deletePlannerButton = event.target.closest("[data-delete-planner]");
    if (deletePlannerButton) {
      deletePlanner(deletePlannerButton.dataset.deletePlanner);
      return;
    }

    const deleteResourceButton = event.target.closest("[data-delete-resource]");
    if (deleteResourceButton) {
      deleteResource(deleteResourceButton.dataset.deleteResource);
      return;
    }

    const deleteMemberButton = event.target.closest("[data-delete-member]");
    if (deleteMemberButton) {
      deleteTeamMember(deleteMemberButton.dataset.deleteMember);
      return;
    }

    const addResourceButton = event.target.closest("[data-add-resource-owner]");
    if (addResourceButton) {
      openEditor("resources", null, {
        owner: addResourceButton.dataset.addResourceOwner,
        type: "Link",
        title: `${addResourceButton.dataset.addResourceOwner} resource`,
      });
      return;
    }

    const button = event.target.closest("[data-edit]");
    if (!button) return;
    openEditor(button.dataset.edit, button.dataset.id);
  });

  $("#taskForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    await saveRecord("tasks", {
      id: crypto.randomUUID(),
      member_name: $("#taskMember").value,
      date: $("#taskDate").value,
      hours: Number($("#taskHours").value),
      title: $("#taskTitle").value,
      notes: $("#taskNotes").value,
      status: $("#taskStatus").value,
    });
    event.target.reset();
    $("#taskDate").value = new Date().toISOString().slice(0, 10);
  });

  $("#editorForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const existing = db[editing.table].find((item) => item.id === editing.id) || {};
    const record = { ...existing, id: editing.id };
    for (const [key, value] of form.entries()) {
      record[key] = key === "hours" ? Number(value) : value;
    }
    await saveRecord(editing.table, record);
    $("#editorDialog").close();
  });

  $("#deleteBtn").onclick = async () => {
    await deleteRecord(editing.table, editing.id);
    $("#editorDialog").close();
  };
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

wireEvents();
loadData();
