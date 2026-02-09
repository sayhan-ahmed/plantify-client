# Plantify Client 
### (Under development – More features will be added soon)

![Live Demo Badge](https://img.shields.io/badge/Live_Demo-Plantify-00C853?style=for-the-badge&logo=vercel&logoColor=white)

**Modern E-Commerce Interface for Plant Enthusiasts**

A premium, responsive frontend application built with **Next.js** and **Tailwind CSS**.

[View Live Demo](https://plantify-client-rosy.vercel.app/)

---

## 📋 Table of Contents

- [About The Project](#-about-the-project)
- [Tech Stack](#-tech-stack)
- [Key Features](#-key-features)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Authentication](#-authentication)
- [Backend Connection](#-backend-connection)
- [Deployment](#-deployment)

---

## 🌿 About The Project

**Plantify** is designed to deliver a serene and seamless shopping experience. The interface combines aesthetic minimalism with robust e-commerce functionality, ensuring users can effortlessly browse, filter, and purchase plants.

This repository hosts the **Client-Side** application, which connects to a robust Express/MongoDB backend.

## 🛠 Tech Stack

### Core Framework

- **Next.js**: Utilizing the App Router for server-side rendering and static site generation.
- **React**: For building interactive user interfaces.

### Styling & Design

- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Lucide React** & **React Icons**: Modern, lightweight vector icons.
- **Custom Fonts**: Optimized typography for a premium feel.

### State & Utilities

- **js-cookie**: Secure cookie-based authentication state management.
- **Fetch API**: Native data fetching with caching and revalidation.

---

## ✨ Key Features

### 🖥️ User Interface

- **Responsive Design**: Pixel-perfect layouts optimized for Mobile, Tablet, and Desktop.
- **Interactive Elements**: Smooth hover effects, transitions, and custom mobile drawer navigation.
- **Bento Grid Layout**: "Shop by Room" categories displayed in a modern grid system.

### 🛍️ Product Experience

- **Dynamic Plants Page**: Real-time fetching of product data from the backend.
- **Advanced Filtering**: Filter by **Category**, **Price Range**, **Rating**, and **Availability**.
- **Sorting & Pagination**: Full server-side implementation for handling large datasets.
- **Product Details**: Cards featuring "Sale" badges, stock status, ratings, and price calculations.

### 🔐 Authentication System

- **Mock Login Flow**: Functional login simulation (`/login`).
- **Persistent Session**: Authentication state survives page reloads.
- **Conditional Rendering**: Dynamic Navbar changes (User Avatar vs. Login Button) based on auth state.

---

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18.17.0 or higher)
- **npm** or **yarn**

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/sayhan-ahmed/plantify-client.git
    cd plantify-client
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Run the development server**

    ```bash
    npm run dev
    ```

4.  **Access the application**
    Open `http://localhost:3000` to view it in your browser.

---

## 📂 Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── login/            # Login Route
│   ├── plants/           # Plants Listing & Filtering Route
│   ├── layout.js         # Root Layout (Fonts, Metadata)
│   └── page.js           # Homepage Composition
├── components/           # Reusable UI Components
│   ├── plants/           # Domain-specific components (Grid, Sidebar, Card)
│   ├── ui/               # Core atomic components (Button, Inputs)
│   ├── Navbar.jsx        # Global Navigation
│   └── Footer.jsx        # Global Footer
└── utils/                # Helper functions and constants
```

---

## 🔐 Authentication

For testing purposes, a mock authentication system is implemented.

**Admin Credentials:**

- **Email**: `admin@plantify.com`
- **Password**: `123456`

> **Note**: A successful login sets a secure cookie to manage the session state.

---

## 🔗 Backend Connection

This client is configured to communicate with the Plantify API.

- **Development URL**: `http://localhost:5001` (if running locally)
- **Production URL**: `https://plantify-server-one.vercel.app`

_To switch environments, update the fetch URL in `src/app/plants/page.js`._

---

## 🌐 Deployment

The application is deployed on **Vercel** for optimal performance and scalability.

**Live URL**: https://plantify-client-rosy.vercel.app/

---

Made with 💚 by Sayhan Ahmed
