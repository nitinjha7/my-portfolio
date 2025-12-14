# ⚡ Nitin Jha | Portfolio


> **Live Demo:** [nitinjha.dev]('#)  
> **Status:** 🚀 Production Ready

---

## 👨‍💻 About The Project

I got tired of standard, static resume websites. As a developer who loves both **Systems** (C++/Backend) and **User Experience**, I wanted a portfolio that felt "alive."

This isn't just a template. It's a playground where I experimented with **design**, **animations**, and a **UI/UX** all while keeping the Lighthouse score green.

### ✨ What's inside?
* **The Hero Terminal:** A custom coded typing animation that sets the engineering tone immediately.
* **3D Tilt Cards:** The Skills section uses `framer-motion` springs and transform math to track mouse movement. No heavy 3D libraries, just pure logic.
* **Glassmorphism Navbar:** A dynamic nav that blurs and frosts up only when you scroll.
* **Performance:** Built on Next.js 14 with Server Components where possible to keep the bundle size low.

---

## 🛠️ The Stack

I kept the stack modern but strict. TypeScript is non-negotiable.

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animation:** [Framer Motion](https://www.framer.com/motion/)
* **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
* **Language:** TypeScript

---

## 🏃‍♂️ Running it Locally

If you want to poke around the code or try the design (go ahead, it's cool), here is how you run it:

1.  **Clone the repo:**
    ```bash
    git clone [https://github.com/nitinjha7/my-portfolio](https://github.com/nitinjha7/my-portfolio)
    cd portfolio-v1
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or yarn install
    ```

3.  **Fire it up:**
    ```bash
    npm run dev
    ```

Open `http://localhost:3000` and you are good to go.

---

## 🧠 Key Code Highlights

If you are looking at the source code, check out these files:

* `components/Skills3D.tsx`: This is where the **3D Tilt Logic** lives. I used `useMotionValue` and `useTransform` to calculate rotation based on the mouse cursor's X/Y coordinates relative to the card center.
* `components/Navbar.tsx`: Handles the scroll event listeners to trigger the glass effect only after scrolling 20px.

---

## 🔮 Future Plans

* [ ] Add a blog section for my LeetCode editorials.
* [ ] Integreate a dark/light mode toggle (currently dark mode only because it looks cooler).
* [ ] Add some 3D icons & animations

---

## 🤝 Contact

If you have a job opportunity (SDE or similar Roles) or just want to chat about Systems:

* **Email:** [nitin.jha.connect@gmail.com](mailto:nitinkumarjha245@gmail.com)
* **LinkedIn:** [linkedin.com/in/nitinjhaconnect](https://www.linkedin.com/in/nitinjhaconnect)

---

*Built with ❤️ and a lot of caffeine by Nitin Jha.*
