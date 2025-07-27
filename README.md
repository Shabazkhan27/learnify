Learnify LMS
A full stack Learning Management System (LMS) built with React, Node.js, Express, and MongoDB. This app allows instructors to create courses and students to enroll and track progress with a clean, responsive UI styled with Tailwind CSS.

Features
User registration and login with role-based access (Students, Instructors)

Course creation and management by instructors

Students can browse and enroll in courses

Course detail pages with descriptions and enrollment functionality

Responsive, modern frontend UI with React and Tailwind CSS

REST API backend using Express and MongoDB with Mongoose

JWT-based authentication and secure password hashing

Technologies Used
Frontend: React, React Router, Tailwind CSS

Backend: Node.js, Express, MongoDB, Mongoose

Authentication: JWT, bcryptjs

Development Tools: npm, create-react-app



Getting Started
Prerequisites
Node.js and npm installed

MongoDB running locally or a cloud instance

Installation
Clone the repository:


bash
git clone https://github.com/Shabazkhan27/learnify.git
cd learnify
Backend setup:


bash
cd backend
npm install
Create a .env file in the backend folder with:


text
MONGO_URI=mongodb://127.0.0.1:27017/learnify
JWT_SECRET=your_jwt_secret
Start the backend server:


bash
npm start
Frontend setup:


bash
cd ../frontend
npm install
npm start
Open your browser and visit:


text
http://localhost:3000


learnify/
├── backend/            # Backend source code and APIs
│   ├── models/         # MongoDB models (User, Course)
│   ├── routes/         # API routes (auth, courses)
│   ├── server.js       # Backend server entry point
│   └── .env            # Environment variables
└── frontend/           # React frontend source code
    ├── src/
    │   ├── pages/      # React page components (Login, Signup, etc.)
    │   ├── App.js      # Main app component with routing
    │   └── index.js    # React entry point
    └── tailwind.config.js  # Tailwind CSS config
