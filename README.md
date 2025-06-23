# ☕ Brew Heaven

**Brew Heaven** is a modern, responsive single-page website built with **Next.js** for our cozy coffee shop. It highlights essential business details such as location, hours, and contact info, and includes a **reservation form powered by Formspree**—no backend or database setup required.

Live Demo 👉 [brewheaven.vercel.app](https://brewheaven.vercel.app) *(update with your live URL)*

---

## 🚀 Features

- ⚡ Built with **Next.js**
- 📱 Fully **responsive** and **mobile-friendly**
- 🗺️ Sections for:
  - About
  - Menu Highlights
  - Location & Contact
  - Business Hours
  - Reservation Form
- 📨 Integrated with **Formspree** for reservation submissions
- 🌐 Deployable via **Vercel**, **Netlify**, or any static hosting

---

## 🖼️ Preview

*(Insert a screenshot or GIF preview here if available)*

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/) *(if used)*
- [Formspree](https://formspree.io/) for form handling

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/brew-heaven.git
cd brew-heaven
npm install
```

Run the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## ✉️ Formspree Setup

1. Go to [Formspree.io](https://formspree.io/) and sign up.
2. Create a new form and copy your **Form Endpoint URL**.
3. Replace the existing `action` attribute in the `<form>` tag:

```html
<form action="https://formspree.io/f/your-form-id" method="POST">
```

4. Test the form to make sure submissions work correctly.

---

## 🧾 Project Structure

```
/brew-heaven
├── components/
│   └── Header, Footer, ReservationForm, etc.
├── pages/
│   └── index.tsx (Main landing page)
├── public/
│   └── images, favicon, etc.
├── styles/
│   └── globals.css (or Tailwind config)
├── .env.local (if needed)
└── next.config.js
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions, suggestions, and feedback are welcome!  
Feel free to open issues or submit pull requests.

---

## 📬 Contact

Questions or ideas? Reach out via [brewheaven@example.com](mailto:brewheaven@example.com)

---

Made with ❤️ for coffee lovers.
