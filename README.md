# PlateShare: Community Food Sharing Platform 🍽️

https://i.ibb.co.com/7JX759KF/logo.jpg

---

## Table of Contents

- [About the Project 📃](#about-the-project)
- [Project Overview](#project-overview)
  - [Objective](#objective)
  - [Target Audience](#target-audience)
  - [Key Metrics](#key-metrics)
  - [Deployment](#deployment)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Clone the Repository](#clone-the-repository)
  - [Start the Project](#start-the-project)
- [React + Vite Setup](#react--vite-setup)
- [License](#license)

---

## About the Project 📃

**PlateShare** is a full-stack MERN (MongoDB, Express, React, Node.js) application designed to connect communities by allowing individuals to donate their surplus food to those in need. The platform helps reduce food waste while promoting community engagement.

### Users can:
- Post food donations
- Browse available food items
- Request food donations

By facilitating local food sharing, PlateShare aims to foster a culture of kindness and sustainability.

---

## Project Overview

### Objective
The main objective of **PlateShare** is to reduce food wastage by allowing users to share surplus food with those in need. The platform empowers people to take action on hunger and community welfare, making it easier for users to donate, request, and manage food donations.

### Target Audience
- **General public**: Individuals who want to donate or receive food.
- **Non-profit organizations**: Charities or community-driven organizations looking for surplus food to distribute.
- **Volunteers**: People who want to be part of community food sharing.

### Key Metrics
- **Users**: The number of active users who are donating and requesting food.
- **Donated Food**: The total amount of food donated by users (in terms of servings).
- **Requests Fulfilled**: Number of food requests successfully matched with donations.
- **Active Donations**: The number of food items actively available for donation.

### Deployment
The PlateShare platform is deployed and live on **firebase** for the client-side. The website is hosted and can be accessed at [Live Site URL](https://plate-share-9e57e.web.app/).

---

## Key Features
- **User Authentication**: Secure sign-up and login with Firebase Authentication, including Google sign-in.
- **Food Management**: Ability for users to add, update, and delete food donations.
- **Food Browsing**: Browse available food items based on the quantity and location.
- **Request Food**: Logged-in users can request available food donations and contact the donor.
- **Dynamic Featured Foods**: Display foods with the highest quantity first on the homepage.
- **Admin Features**: Manage your own food donations and update them through a personal dashboard.
- **Responsive Design**: Mobile-first design with full responsiveness for tablets, phones, and desktops.
- **Error Handling**: Friendly error messages and success notifications (using toasts).

---

## Tech Stack

### Frontend:
- **React.js**
- **TailwindCSS** (for styling)
- **React Router** (for navigation)
- **Firebase** (for authentication)

### Backend:
- **Node.js**
- **Express.js**
- **MongoDB** (for storing food donation data)

### Authentication:
- **Firebase Authentication** (for user login and registration)

### Deployment:
- **Firebase** (for frontend hosting)
- **Vercel** (for backend hosting)
- **MongoDB Atlas** (for cloud database hosting)

---

## Installation

Follow these steps to get the project running on your local machine:

### Prerequisites
Ensure you have the following installed on your local machine:
- **Node.js** (v14 or later)
- **npm** (Node Package Manager)
- **MongoDB** (for local development) or access to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud database

### Clone the Repository
Clone the client-side and server-side repositories:

```bash
git clone https://github.com/your-username/plate-share-client.git
git clone https://github.com/your-username/plate-share-server.git
