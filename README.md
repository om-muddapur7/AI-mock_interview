# 🤖 AI Mock Interview

> **Practice Smarter. Interview Better. Get AI-Powered Feedback.**

AI Mock Interview is a modern AI-powered interview preparation platform that simulates real technical interviews. Users can practice interview sessions, answer AI-generated questions, and receive intelligent feedback to improve confidence and performance before real interviews.

---

## ✨ Features

### 🎤 AI Mock Interviews

* Generate interview questions using Google Gemini AI
* Personalized interview sessions
* Multiple interview categories
* Dynamic AI-generated questions

### 💬 Interactive Experience

* Real-time question flow
* Speech-based interview support
* Clean and distraction-free interface
* Responsive design for desktop and mobile

### 📊 AI Feedback

* Instant interview evaluation
* AI-generated strengths & weaknesses
* Performance insights
* Improvement suggestions

### 🔐 Authentication

* Secure authentication with Clerk
* User profiles
* Protected routes
* Personalized interview history

### ⚡ Modern UI

* Beautiful responsive interface
* Fast Next.js App Router
* Smooth animations
* Dark theme

---

# 🛠 Tech Stack

## Frontend

* Next.js 15
* React
* TypeScript
* Tailwind CSS
* Shadcn UI

## Backend

* Next.js Server Actions
* Clerk Authentication

## Database

* PostgreSQL
* Prisma ORM

## AI

* Google Gemini AI

## Tools

* Git
* GitHub
* Vercel

---

# 📂 Project Structure

```text
AI-mock_interview/
│
├── app/
├── components/
├── lib/
├── prisma/
├── public/
├── styles/
├── utils/
├── middleware.ts
├── package.json
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/om-muddapur7/AI-mock_interview.git

cd AI-mock_interview
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Configure Environment Variables

Create a `.env.local` file.

```env
DATABASE_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

GEMINI_API_KEY=
```

---

## 4️⃣ Setup Prisma

```bash
npx prisma generate

npx prisma db push
```

---

## 5️⃣ Start Development Server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

# 🌐 Usage

* Sign in using Clerk
* Create a new mock interview
* Select interview preferences
* Answer AI-generated questions
* Receive AI-powered feedback
* Review previous interview sessions

---

# 📸 Screenshots

## Dashboard

> Add screenshot here

![Dashboard](./public/dashboard.png)

---

## Interview Session

> Add screenshot here

![Interview](./public/interview.png)

---

## AI Feedback

> Add screenshot here

![Feedback](./public/feedback.png)

---

# 🚀 Future Improvements

* 🎥 Webcam interview simulation
* 🎙 Voice-to-text answers
* 📈 Detailed performance analytics
* 🧠 Company-specific interview rounds
* 💼 Resume-based interview generation
* 📱 Progressive Web App (PWA)
* 🌍 Multi-language support

---

# 🤝 Contributing

Contributions are welcome!

1. Fork this repository
2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit changes

```bash
git commit -m "Add new feature"
```

4. Push changes

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

# 📄 License

Licensed under the **MIT License**.

---

# 👨‍💻 Author

**Om Muddapur**

GitHub: https://github.com/om-muddapur7

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

Your support motivates future improvements and new projects!

---

### Built with ❤️ using Next.js, Prisma, PostgreSQL, Clerk & Google Gemini AI.
