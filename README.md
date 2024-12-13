# Portfolio Website

This project is a **Portfolio Website** developed using **Next.js** and **Tailwind CSS**. The website is designed to showcase personal projects, skills, and professional experience in a visually appealing, high-performance, and SEO-friendly way. Perfect for developers, designers, or creatives looking to present their work in a professional manner.

## Features

- **Server-Side Rendering (SSR)**: Utilizes Next.js's SSR capabilities for improved performance and SEO.
- **Responsive Design**: Works seamlessly on desktops, tablets, and mobile devices.
- **Project Showcase**: A section to display your projects, each with descriptions, GitHub links, and live demo links.
- **About Me Section**: Provides a personal introduction, highlighting skills and experience.
- **Contact Form**: Visitors can send messages directly to you using the built-in contact form.
- **SEO Optimization**: Built with SEO best practices to help improve visibility on search engines.

## Technologies Used

### Frontend
- **Next.js**: React framework that enables server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for building custom designs without leaving HTML.
- **JavaScript (ES6+)**: For dynamic interactions and logic.
- **HTML5 & CSS3**: For page structure and styling where necessary.

### Backend (Optional)
- **Node.js** & **Express.js**: For handling API requests (optional if you want a custom backend).
- **Nodemailer**: For sending emails via the contact form (optional if backend is implemented).

## How to Run Locally

1. Clone the repository:

       git clone https://github.com/adityadhawan44/portfolio-website.git

Navigate to the project directory:

      cd nextjs-portfolio-website

Install dependencies:

      npm install

Run the development server:

      npm run dev

Open your browser and visit:

    http://localhost:3000

Folder Structure
      
      .
      ├── public
      │   ├── fonts
      ├── src
      │   ├── app
      │   │   └── api
      │   │       └── send
      │   │           └── route.js
      │   ├── en
      │   │   └── components
      │   │       ├── AboutSection.jsx
      │   │       ├── Achivements.jsx
      │   │       ├── EmailSection.jsx
      │   │       ├── Footer.jsx
      │   │       ├── HeroSection.jsx
      │   │       ├── MenuOverlay.jsx
      │   │       ├── Navbar.jsx
      │   │       ├── NavLink.jsx
      │   │       ├── ProjectCard.jsx
      │   │       ├── ProjectsSection.jsx
      │   │       ├── ProjectTag.jsx
      │   │       └── TabButton.jsx
      │   ├── tr
      ├── styles
      │   └── globals.css
      ├── .env.local
      ├── .eslintrc.json
      ├── .gitignore
      ├── jsconfig.json
      ├── next.config.mjs
      ├── package.json
      ├── postcss.config.mjs
      └── tailwind.config.js


Folders Contents

    public/images: Stores static assets like your profile image and project thumbnails.
    src/components: Contains reusable components like the navigation bar, footer, and individual sections (projects, contact form, etc.).
    src/pages: Defines the main pages (Home, About, Projects).
    styles/globals.css: Global CSS file where custom styles are added.

Customization

    Update content: Modify the text in the About, Projects, and Contact components to reflect your personal information and projects.
    Add projects: In the Projects.js component, you can add new projects by updating the array with relevant details (title, description, GitHub link, live demo).
    Contact form: Implement a backend to handle form submissions using Nodemailer or any other email service.

Deployment

To deploy your project on platforms like Vercel (recommended for Next.js):

    Create a GitHub repository for your project.
    Push the project to GitHub.
    Go to Vercel and import your GitHub repository.
    Click "Deploy" and your portfolio will be live!

Future Enhancements

    Blog Section: Add a blog to share articles or updates.
    Dark/Light Mode: Implement a toggle for dark and light themes.
    Testimonials: Include a section for client testimonials or reviews.

This project is licensed under the MIT License.
