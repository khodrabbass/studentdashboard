# LearnHub — Student Learning Dashboard

A responsive student learning dashboard built with **ReactJS** and **Bootstrap** as part of **CSCI390 Web Programming — Project Phase 2**.

---

## Project Overview

LearnHub is a frontend web application that helps students manage their academic activities from one centralized dashboard.

The application provides:

* A dashboard overview with academic statistics
* A courses page with real-time search functionality
* A weekly class schedule
* A contact page with form validation
* A student login system

The interface is fully responsive and optimized for desktop, tablet, and mobile devices.

---

## Features

### Dashboard

* Welcome banner
* Academic statistics cards

  * Total Courses
  * Assignments Due
  * Grade Average
  * Messages
* Preview of enrolled courses

### Courses Page

* Display of all available courses
* Real-time search functionality using React `useState`
* Dynamic filtering with JavaScript `filter()`

### Schedule Page

* Weekly timetable layout
* Color-coded course sessions
* Search functionality
* Non-matching schedule items are visually dimmed

### Contact Page

* Contact form with validation
* Name validation
* Email validation
* Subject validation
* Message validation
* "Get in Touch" information panel

### Login Page

* Username and password authentication
* Form validation
* Show/Hide password toggle
* Redirect upon successful login

---

## Technologies Used

* **ReactJS** – Component-based frontend development
* **React Router DOM** – Client-side routing and navigation
* **Bootstrap 5** – Responsive layouts and UI components
* **CSS3** – Custom styling, Flexbox, hover effects, and responsive design
* **JavaScript (ES6+)** – Application logic and interactivity

---

## Project Structure

```text
src/
│
├── App.js
├── index.js
│
├── components/
│   ├── Navbar.js
│   ├── StatCard.js
│   ├── CourseCard.js
│   └── coursesData.js
│
├── pages/
│   ├── Home.js
│   ├── Courses.js
│   ├── Schedule.js
│   ├── Contact.js
│   └── Login.js
│
└── styles/
    └── style.css
```

### Components

| File           | Description                     |
| -------------- | ------------------------------- |
| Navbar.js      | Navigation bar component        |
| StatCard.js    | Reusable statistics card        |
| CourseCard.js  | Reusable course card with modal |
| coursesData.js | Course data source              |

### Pages

| File        | Description              |
| ----------- | ------------------------ |
| Home.js     | Dashboard page           |
| Courses.js  | Courses page with search |
| Schedule.js | Weekly schedule page     |
| Contact.js  | Contact form page        |
| Login.js    | Login page               |

---

## Installation & Setup

### Prerequisites

Make sure you have installed:

* Node.js
* npm

### Clone the Repository

```bash
git clone https://github.com/khodrabbass/studentdashboard.git
```

### Navigate to the Project Folder

```bash
cd studentdashboard
```

### Install Dependencies

```bash
npm install
```

### Run the Application

```bash
npm start
```

Open:

```text
http://localhost:3000
```

The application will automatically reload whenever changes are made.

---

## Demo Login Credentials

```text
Username: khodr
Password: 1234
```

---

## Screenshots

### Homepage

![Homepage](images/Homepage.png)

### Login Page

![Login Page](images/Loginpage.png)

### Courses Page

![Courses Page](images/Coursespage.png)

### Schedule Page

![Schedule Page](images/Shedulepage.png)

### Contact Page

![Contact Page](images/Contactpage.png)

---

## Author

**Khodr Abbass**

CSCI390 Web Programming — Project Phase 2
