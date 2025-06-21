# ☁️ Teja's Cloud Portfolio

A fully static, mobile-friendly portfolio website hosted on **AWS S3**, fronted by **CloudFront**, and deployed automatically via **GitHub Actions** using OIDC (no AWS secrets required!).

---

## 🚀 Features

- 🌐 Fully responsive and accessible static website built with HTML, CSS, and JavaScript
- ☁️ Features animated, randomized cloud elements and dynamic, time-based background gradients
- 📍 Displays geo-aware greetings using IP geolocation APIs
- 🔢 Tracks real-time visitor count using AWS Lambda, API Gateway, and CloudWatch
- 💾 Hosted on Amazon S3 with HTTPS enabled via CloudFront and ACM
- 🔄 Auto-deploys on every push to the main branch using GitHub Actions
- ❄️ Automatically triggers CloudFront cache invalidation only when website files change
- 🔐 Uses GitHub OIDC for secure, credentials-free authentication during deployment
- 🍔 Mobile-friendly layout with a responsive sidebar menu

---

## 🛠 Stack

- **Frontend:** HTML, CSS, JavaScript
- **CI/CD:** GitHub Actions
- **Cloud Services:** AWS S3, CloudFront, IAM, CloudFormation

---

### 🧱 Architecture Diagram

![Architecture](README_images/architecture.png)

---

## 📁 Project Structure

```
.
├── index.html             # Main webpage
├── style.css              # Stylesheet
├── script.js              # JavaScript for interactivity
├── images/                # Folder for all visual assets
├── README_images/         # Auto-generated preview assets 
├── README.md              # Project documentation
└── .github/
    └── workflows/
        └── deploy.yml     # GitHub Actions workflow for S3 CloudFront deployment
```

---

## 💡 How It Works

1. Push code to `main`
2. GitHub Actions:
   - Assumes an IAM role via OIDC
   - Syncs the site to your S3 bucket
   - Invalidates CloudFront cache
3. Changes go live automatically!

---

## 🌐 Live Site

> 🔗 [tejain.space](#)  

---

## 🧠 Want to Build Something Similar?

Check out the [CloudFormation Template for GitHub Actions OIDC Deploy](.github/cloudformation/github-oidc-deploy.yaml) and [GitHub Actions workflow](.github/workflows/deploy.yml) to learn how this serverless CI/CD pipeline works.

---

## 📸 Screenshots

### 🌤️ Homepage

<img src="README_images/web_screenshot.png" width="600" />

### 💡 Mobile View

<img src="README_images/mobile_screenshot.png" width="200" />

---

## ✨ Author

Made with ☁️ and ☕ by [@tejmoo](https://github.com/tejmoo)