# 🎨 Moto Service Frontend

This is the frontend of the **Moto Service** web application – a motorcycle service booking platform. Built using **React.js**, it enables users to register, log in, book services, and view booking stats through a modern and responsive user interface.

## 📁 Project Structure

moto-service-frontend/
│
├── public/             # Static files and index.html
├── src/
│   ├── components/     # React components (Home, Login, Register, Booking, etc.)
│   ├── App.js          # App routes and layout
│   ├── index.js        # React entry point
│   └── styles/         # Custom styles (optional)
├── .env                # Environment variables
├── package.json        # Dependencies and scripts

## ⚙️ Technologies Used

- React.js (with Hooks)
- React Router DOM
- Bootstrap & Custom CSS
- Toastify for alerts
- dotenv for API environment configuration

---

## 🚀 Features

- 🔐 User Registration and Login
- 🗓️ Motorcycle Service Booking Form
- 📊 Dashboard with Monthly Booking Stats (Chart.js)
- 🔐 Protected Routes using localStorage token
- 🌐 Responsive UI using Bootstrap
- 📸 Home page with Hero Banner and Image Gallery

---

## 🌍 Pages Overview

- `/` – Home Page with images, service highlights, and booking CTA
- `/about` – Info about the service and platform
- `/login` – User login
- `/register` – User registration
- `/booking` – Book a service
- `/dashboard` – View monthly booking statistics

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/moto-service-frontend.git
cd moto-service-frontend

2️⃣ Install Dependencies
bash
Copy
Edit
npm install

3️⃣ Create .env File
Create a .env file in the root folder with:
env
Copy
Edit
REACT_APP_API_URL=https://your-backend-api-url.com

4️⃣ Run the Application
bash
Copy
Edit
npm start
App runs at http://localhost:3000

🌐 Deployment on Netlify
Login to Netlify

Click “Add New Site” → “Import an Existing Project”

Connect your GitHub frontend repo

Set Build Settings:

Build Command: npm run build

Publish Directory: build

Set Environment Variable:

REACT_APP_API_URL = your backend Render URL

Deploy the site

📬 Contact
If you face issues or want to contribute:

📧 Email: harishkumarsg.03@gmail.com
💻 GitHub: https://github.com/harishkumarsg

📝 License
This project is licensed under the MIT License.
