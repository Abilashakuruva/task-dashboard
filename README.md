# Task Management Dashboard 🧩

A simple, responsive Kanban-style Task Management Dashboard built using **React (Vite)**, **@hello-pangea/dnd**, and **mock REST APIs** like `jsonplaceholder.typicode.com`.

---

## 🚀 Features

- View tasks in three columns: **To Do**, **In Progress**, and **Done**
- Create new tasks with title, description, and status
- Drag-and-drop tasks between columns
- Responsive UI for desktop and mobile
- API call simulation using mock data

---

## 📦 Tech Stack

- React (Vite)
- @hello-pangea/dnd (for drag-and-drop)
- Axios
- CSS3 + Media Queries
- jsonplaceholder.typicode.com (mock API)

---

## 📥 Installation & Running Locally

```bash
# Step 1: Clone the repo
git clone https://github.com/your-username/task-dashboard.git
cd task-dashboard

# Step 2: Install dependencies
npm install

# Step 3: Run the development server
npm run dev


🧠 Architecture & Approach
The app uses a component-based structure with React and Vite.

Board.jsx manages state and orchestrates the drag-and-drop functionality.

Column.jsx renders tasks based on status and acts as a drop zone.

TaskCard.jsx is a draggable UI card.

TaskForm.jsx handles new task creation.

CSS uses flexbox layout and media queries to ensure responsiveness.

We use @hello-pangea/dnd instead of react-beautiful-dnd to ensure compatibility with React 19.



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
