// github / liveDemo are placeholders. Replace "#" with real URLs.
export const projects = [
  {
    id: 1,
    title: "Automated Examination Scheduler",
    categories: ["fullstack", "python"],
    label: "Full Stack / Python",
    featured: true,
    description:
      "An examination management system designed to automate exam scheduling, hall allocation, faculty invigilation assignment and student seating arrangements.",
    technologies: [
      "Python",
      "Flask",
      "Pandas",
      "OpenPyXL",
      "Excel",
      "ReportLab",
      "HTML5",
      "CSS3",
      "Bootstrap 5",
    ],
    features: [
      "Exam scheduling",
      "Hall allocation",
      "Faculty invigilation",
      "Student seating arrangement",
      "Excel data processing",
      "Automated examination outputs",
      "PDF report generation",
      "Responsive interface",
    ],
    flow: [
      "Excel Data",
      "Python / Pandas",
      "Flask",
      "Scheduling Logic",
      "Report Generation",
      "Web Interface",
    ],
    problem:
      "Exam scheduling, hall allocation, invigilation and seating are tedious to prepare manually.",
    solution:
      "A Flask app that reads student, subject, staff and room data from Excel and generates structured exam outputs.",
    approach:
      "Data processing with Pandas and OpenPyXL, scheduling logic in Flask, PDF output with ReportLab, Bootstrap 5 interface.",
    challenges:
      "Combining several Excel datasets into consistent schedules, allocations and seating.",
    result:
      "Downloadable PDF reports and a responsive interface for exam management workflows.",
    github: "https://github.com/Thirunavukkarasu-m/college-exam-management-system",
    /* Replace with actual GitHub URL */ liveDemo:
      "https://exam-scheduler-weld.vercel.app/" /* Replace with actual live demo URL */,
  },
{
    id: 2,
    title: "CineBook — Movie Ticket Booking Platform",
    categories: ["fullstack"],
    label: "Full Stack",
    featured: true,
    description:
      "Full-stack movie ticket booking platform with movie browsing, show selection, authentication, dynamic seat selection and booking management.",
    technologies: [
      "Python",
      "Django",
      "PostgreSQL",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Django Templates",
    ],
    features: [
      "Movie browsing",
      "Show selection",
      "Authentication",
      "Dynamic seat selection",
      "Booking",
      "Cancellation",
      "Server-side seat validation",
      "Double-booking protection",
      "Simulated payments (SIMULATED)",
      "E-ticket confirmation",
      "Django admin",
      "Seed data",
      "Automated tests",
      "Responsive interface",
      "Deployed on Render",
    ],
    problem:
      "Seat booking needs to stay correct when several users select the same seats.",
    solution:
      "A Django MVT platform with PostgreSQL-backed booking, server-side seat validation and double-booking protection.",
    approach:
      "Django MVT with templates, authentication, Django admin, seed data and automated tests.",
    challenges:
      "Preventing double booking through server-side seat validation.",
    result:
      "Booking, cancellation and e-ticket confirmation (payments are simulated), deployed on Render.",
    github: "https://github.com/Thirunavukkarasu-m/Cine_book",
    /* Replace with actual GitHub URL */ liveDemo:
      "https://cine-book-4c52.onrender.com/" /* Replace with actual live demo URL */,
  },
  {
    id: 3,
    title: "Employee Management System",
    categories: ["frontend"],
    label: "Frontend",
    description:
      "Responsive React CRUD application for managing employee records with search, filtering, sorting, pagination and dashboard statistics. Designed to handle 100+ records.",
    technologies: [
      "React.js",
      "JavaScript",
      "Bootstrap",
      "HTML5",
      "CSS3",
      "LocalStorage",
    ],
    features: [
      "Add",
      "View",
      "Edit",
      "Delete",
      "Search",
      "Filtering",
      "Sorting",
      "Pagination",
      "Dashboard statistics",
      "LocalStorage persistence",
      "Responsive UI",
    ],
    problem: "Employee records need simple management and quick lookup.",
    solution:
      "A React CRUD app with search, filters, sorting, pagination and a statistics dashboard.",
    approach:
      "Reusable React components, Bootstrap UI, LocalStorage persistence with no backend.",
    challenges:
      "Keeping search, filtering, sorting and pagination working together on 100+ records.",
    result:
      "Data persists across sessions and the UI was tested on mobile and desktop breakpoints.",
    github: "https://github.com/Thirunavukkarasu-m/employee-management-system",
    /* Replace with actual GitHub URL */ liveDemo:
      "https://employee-management-system-curd.netlify.app/" /* Replace with actual live demo URL */,
  },
  {
    id: 4,
    title: "Parking Slot Booking Finder",
    categories: ["frontend"],
    label: "Frontend",
    description:
      "Responsive parking discovery and booking application covering search, filtering, sorting, slot selection and booking workflows.",
    technologies: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "JavaScript",
      "LocalStorage",
      "jsPDF",
    ],
    features: [
      "Parking search",
      "Filtering",
      "Sorting",
      "Slot selection",
      "Dynamic availability",
      "Fare calculation",
      "Favourites",
      "Booking history",
      "Reviews",
      "Ratings",
      "LocalStorage",
      "Downloadable parking pass (jsPDF)",
    ],
    problem:
      "Finding and booking a parking slot usually needs manual confirmation.",
    solution:
      "A multi-page booking app with dynamic availability, fare calculation and a generated parking pass.",
    approach:
      "HTML, CSS, Bootstrap and JavaScript with LocalStorage; jsPDF for passes.",
    challenges: "Tracking slot availability and booking history client-side.",
    result:
      "Parking passes download automatically, removing the need for confirmation screenshots.",
    github: "[https://thirunavukkarasu-m.github.io/car-slot-finder/]",
    /* Replace with actual GitHub URL */ liveDemo:
      "https://github.com/Thirunavukkarasu-m/car-slot-finder" /* Replace with actual live demo URL */,
  },
  {
    id: 5,
    title: "Shopping Cart & Invoice Application",
    categories: ["frontend"],
    label: "Frontend",
    description:
      "React + Vite shopping cart application with product listing, cart management, quantity controls and downloadable invoice generation.",
    technologies: [
      "React.js",
      "Vite",
      "JavaScript",
      "React Icons",
      "jsPDF",
      "html2canvas",
    ],
    features: [
      "Product listing",
      "Add to cart",
      "Quantity controls",
      "Cart drawer",
      "Real-time cart count",
      "Checkout workflow",
      "Dynamic total calculation",
      "Invoice generation",
      "Downloadable invoice",
    ],
    tree: ["App", "├── Navbar", "├── Product", "├── Cart", "└── Checkout"],
    problem:
      "Shoppers need a clear cart and checkout flow ending in an invoice.",
    solution:
      "A React + Vite app with a cart drawer, checkout and one-click invoice download.",
    approach:
      "Reusable App, Product, Cart and Navbar components keep state and rendering isolated.",
    challenges: "Keeping cart state and totals in sync across components.",
    result: "Invoices are generated with html2canvas and jsPDF.",
    github: "https://github.com/Thirunavukkarasu-m/Add-To-Cart",
    /* Replace with actual GitHub URL */ liveDemo: "https://github.com/Thirunavukkarasu-m/Add-To-Cart",
  },
  {
    id: 6,
    title: "Currency Converter",
    categories: ["frontend"],
    label: "Frontend / API",
    description:
      "Responsive React currency converter integrating a real-time exchange rate API and supporting conversion across 100+ currencies.",
    technologies: [
      "React.js",
      "JavaScript",
      "Exchange Rate API",
      "HTML5",
      "CSS3",
    ],
    features: [
      "API integration",
      "Live exchange rates",
      "100+ currencies",
      "Currency swap",
      "Reusable components",
      "Responsive design",
      "Loading state",
      "Error handling",
    ],
    problem: "Conversions need live rates rather than fixed values.",
    solution:
      "A React app calling an Exchange Rate API with one-click currency swap.",
    approach: "Component-based architecture with loading and error states.",
    challenges: "Handling API loading and failure states cleanly.",
    result: "Live conversion across 100+ currencies in a mobile-friendly UI.",
    github: "https://github.com/Thirunavukkarasu-m/Currency-converter",
    /* Replace with actual GitHub URL */ liveDemo: "https://comfy-pika-b95fb6.netlify.app/",
  },
];
