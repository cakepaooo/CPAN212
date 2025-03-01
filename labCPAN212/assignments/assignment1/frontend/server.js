
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8000;


const overview = {
  name: "Duc Nguyen Nguyen",
  email: "nguyennguyen2219@gmail.com",
  linkedin: "https://www.linkedin.com/in/nguyen-nguyen-a4a6201b8",
  phone: "437-445-1201",
  bio: "Dedicated second-year Computer Programming and Analysis student at Humber Polytechnic with a strong foundation in programming, data analysis, and problem-solving."
};

const education = [{
  institution: "Humber Polytechnic",
  location: "Etobicoke, ON",
  program: "Advanced Diploma, Computer Programming and Analysis with CO-OP",
  gpa: "Current GPA: 3.3"
}];

const skills = [
  "JavaScript, HTML, CSS, React, Node.js, Express.js",
  "NoSQL, MySQL",
  "Java, Python, REST API",
  "Scipy, Numpy",
  "Microsoft Office"
];

const experience = [{
  company: "Chatime",
  location: "King & Jarvis, TO, ON",
  role: "Boba Store Associate",
  duration: "April 2024 - Present",
  responsibilities: [
    "Assisted customers, ensuring a positive experience and resolving issues efficiently.",
    "Managed inventory and supplies, ensuring accurate tracking and timely reordering.",
    "Utilized POS systems to process transactions and manage customer data.",
    "Collaborated with team members to streamline operations and improve service delivery."
  ]
}];

const projects = [{
  name: "Music Lesson Website",
  semester: "Semester 1",
  role: "Project Leader",
  details: [
    "Led a team of 5 members in developing a user-friendly music lesson website.",
    "Managed project timelines, assigned tasks, and ensured team collaboration.",
    "Designed and implemented website features using HTML, CSS, JavaScript.",
    "Conducted user testing and gathered feedback to enhance website functionality."
  ]
}, {
  name: "Cake Order Management System",
  semester: "Semester 2",
  role: "Solo Project",
  details: [
    "Developed a Java application for simulating a bakery's cake order system.",
    "Applied object-oriented programming concepts like inheritance, polymorphism, and abstraction.",
    "Utilized Java Swing for user input and order confirmation dialogs.",
    "Implemented data validation and error handling to ensure a user-friendly experience."
  ]
}];

app.get("/getOverview", (req, res) => res.json(overview));
app.get("/getEdu", (req, res) => res.json(education));
app.get("/getSkills", (req, res) => res.json(skills));
app.get("/getExp", (req, res) => res.json(experience));
app.get("/getProjects", (req, res) => res.json(projects));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
