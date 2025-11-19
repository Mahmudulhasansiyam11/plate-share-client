# PlateShare: Community Food Sharing Platform

# About the Project📃
PlateShare is a full-stack MERN (MongoDB, Express, React, Node.js) application designed to connect communities by allowing individuals to donate their surplus food to those in need. The platform helps reduce food waste while promoting community engagement.

Users can:

Post food donations

Browse available food items

Request food donations

By facilitating local food sharing, PlateShare aims to foster a culture of kindness and sustainability.


Project Overview
Objective

The main objective of PlateShare is to reduce food wastage by allowing users to share surplus food with those in need. The platform empowers people to take action on hunger and community welfare, making it easier for users to donate, request, and manage food donations.

Target Audience

General public: Individuals who want to donate or receive food.

Non-profit organizations: Charities or community-driven organizations looking for surplus food to distribute.

Volunteers: People who want to be part of community food sharing.

Key Metrics

Users: The number of active users who are donating and requesting food.

Donated Food: The total amount of food donated by users (in terms of servings).

Requests Fulfilled: Number of food requests successfully matched with donations.

Active Donations: The number of food items actively available for donation.

Deployment

The PlateShare platform is deployed and live on Vercel
 for the client-side and Vercel
 for the server-side. The website is hosted and can be accessed at Live Site URL
.

Key Features

User Authentication: Secure sign-up and login with Firebase Authentication, including Google sign-in.

Food Management: Ability for users to add, update, and delete food donations.

Food Browsing: Browse available food items based on the quantity and location.

Request Food: Logged-in users can request available food donations and contact the donor.

Dynamic Featured Foods: Display foods with the highest quantity first on the homepage.

Admin Features: Manage your own food donations and update them through a personal dashboard.

Responsive Design: Mobile-first design with full responsiveness for tablets, phones, and desktops.

Error Handling: Friendly error messages and success notifications (using toasts).

Tech Stack

Frontend:

React.js

TailwindCSS (for styling)

React Router (for navigation)

Firebase (for authentication)

Redux (for state management)

Backend:

Node.js

Express.js

MongoDB (for storing food donation data)

Authentication:

Firebase Authentication (for user login and registration)

Deployment:

Vercel (for both frontend and backend hosting)

MongoDB Atlas (for cloud database hosting)


Installation

Follow these steps to get the project running on your local machine:

Prerequisites

Ensure you have the following installed on your local machine:

Node.js (v14 or later)

npm (Node Package Manager)

MongoDB (for local development) or access to MongoDB Atlas
 for a cloud database

Clone the Repository

Clone the client-side and server-side repositories:

git clone https://github.com/your-username/plate-share-client.git
git clone https://github.com/your-username/plate-share-server.git


Navigate to the client-side directory:

cd plate-share-client


Install dependencies:

npm install


Start the client-side server:

npm start


Navigate to the server-side directory:

cd ../plate-share-server


Install dependencies:

npm install


Set up environment variables for the server (e.g., Firebase credentials, MongoDB URI, etc.).

Start the server:

npm start
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


