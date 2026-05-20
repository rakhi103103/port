import {
  pricewise,
  threads,
  snapgram,
  estate,
  summiz,
  car,
  contact,
  github,
  react,
  python,
  pandas,
  numpy,
  matplotlib,
  mysql,
  powerbi,

  git,
  html,
  css,
  javascript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: python,
    name: "Python",
    type: "Data Analysis",
  },
  {
    imageUrl: pandas,
    name: "Pandas",
    type: "Data Analysis",
  },
  {
    imageUrl: numpy,
    name: "NumPy",
    type: "Data Analysis",
  },
  {
    imageUrl: matplotlib,
    name: "Matplotlib",
    type: "Data Visualization",
  },
  {
    imageUrl: mysql,
    name: "SQL",
    type: "Database",
  },
  {
    imageUrl: powerbi,
    name: "Power BI",
    type: "Data Visualization",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,

    link: "https://github.com/rakhi103103",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Titanic Survival Analysis",
    description:
      "Analyzed survival patterns in the Titanic dataset using Python, Pandas, and Matplotlib. Explored how gender, class, and age affected survival rates through data cleaning, EDA, and visualizations.",
    link: "https://github.com/rakhi103103/ml_journey/tree/main/Analaysis_Projects/Titanic_Survival_Analysis",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Netflix Content Analysis",
    description:
      "Performed exploratory data analysis on Netflix's content library using Python and Matplotlib. Uncovered trends in content type, release years, top genres, and country-wise distribution.",
    link: "https://github.com/rakhi103103/ml_journey/tree/main/Analaysis_Projects/Netflix_Analysis",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "IPL Cricket Data Analysis",
    description:
      "Analyzed IPL match data using Python and Pandas to identify top-performing teams, players, and venue trends. Built step-by-step from raw data to insight-driven visualizations.",
    link: "https://github.com/rakhi103103/ml_journey/tree/main/Analaysis_Projects/IPL_Cricket_Data_Analysis",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "COVID-19 Analysis",
    description:
      "Analyzed COVID-19 data to track case trends, recovery rates, and country-wise spread using Python and data visualization libraries.",
    link: "https://github.com/rakhi103103/ml_journey/tree/main/Analaysis_Projects/COVID19_Analysis",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Customer Behavior & Sales Intelligence",
    description:
      "Analyzed customer purchasing patterns and sales trends to extract actionable business insights using Python and Pandas.",
    link: "https://github.com/rakhi103103/ml_journey/tree/main/Analaysis_Projects/Customer_Behavior_and_Sales_Intelligence_Anal...",
  },
];

export const sqlProjects = [
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "E-Commerce Churn Analysis",
    description:
      "SQL project on the real Olist dataset (99,441 rows). Identified an 80.57% customer churn rate using CTEs, multi-table JOINs, and window functions in MySQL.",
    link: "https://github.com/rakhi103103/ml_journey/tree/main/sql_projects/ecommerce_churn",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Corporate Salary Equity Audit",
    description:
      "SQL-based audit to detect pay gaps across departments and roles. Used window functions, LAG, DATEDIFF, and CTEs to surface compensation equity insights.",
    link: "https://github.com/rakhi103103/ml_journey/tree/main/sql_projects/salary_audit",
  },
  {
    iconUrl: react,
    theme: "btn-back-green",
    name: "Hospital Dataset Analysis",
    description:
      "Analyzed hospital data using SQL to uncover patterns in patient records, treatment outcomes, and operational metrics.",
    link: "https://github.com/rakhi103103/ml_journey/tree/main/sql_projects/Hospital_Dataset",
  },
];

export const webProjects = [
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Mini Blog",
    description:
      "Multi-user blog built with PHP, JavaScript, HTML, and CSS. Users can upload photos, write posts, and view others' content on the homepage.",
    link: "https://github.com/rakhi103103/php-project",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Online Music Website",
    description:
      "Music platform built with PHP, JavaScript, HTML, and CSS. Users can listen, add, and delete songs. Includes separate admin and user roles.",
    link: "https://github.com/rakhi103103/music_website",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "E-Commerce App (MERN)",
    description:
      "Full-stack MERN e-commerce app with separate admin and user roles. Admins manage products and track activity; users can browse, like, and purchase items.",
    link: "https://github.com/rakhi103103/ecom",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Profile Manager",
    description:
      "Profile management website where users can create, update, and delete profiles with details like name, date of birth, and gender. Built with HTML, CSS, and JavaScript.",
    link: "https://github.com/rakhi103103/profile",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "To-Do List",
    description:
      "To-Do List app built with HTML, CSS, and JavaScript. Users can add, save, and delete tasks easily.",
    link: "https://github.com/rakhi103103/todolist",
  },
];
