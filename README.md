# Web Programming Exam - React Kit 

This repository contains a collection of practical and functional examples developed with **React + Vite** and **Material UI**. It was created as a base and demonstration of skills for the mid-term exam.

## Covered Topics

The project includes clear and isolated implementations of the following topics:

1.  **Basic Hooks**: Usage of `useState` and `useEffect` for state management and component lifecycle.
2.  **Custom Hooks**: Reusable logic (`useCounter`) separated from the UI.
3.  **React Hook Form**: Handling controlled forms with validations and error management.
4.  **TanStack Query (React Query)**: Consuming external APIs (JSONPlaceholder) with loading and error state management.
5.  **React Router**: SPA (Single Page Application) navigation between the different exercises.
6.  **Material UI**: Responsive design and styled components.

## Technologies

* [React](https://react.dev/)
* [Vite](https://vitejs.dev/)
* [Material UI](https://mui.com/)
* [React Hook Form](https://react-hook-form.com/)
* [TanStack Query](https://tanstack.com/query/latest)
* [Axios](https://axios-http.com/)

## Installation and Execution Instructions

To run this project locally, please follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/kachiliquingal/my_practice_1412.git
    ```

2.  **Install dependencies:**
    It is necessary to rebuild the `node_modules` folder based on `package.json`.
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in browser:**
    The project will generally be available at `http://localhost:5173/`.

## Project Structure

* `src/components/`: Contains the visual components for each exercise (`Hooks.jsx`, `Formulario.jsx`, `CustomHooks.jsx`, `Query.jsx`).
* `src/hooks/`: Contains the logic for Custom Hooks (`useCounter.js`).
* `src/App.jsx`: Route configuration and main menu navigation.
* `src/main.jsx`: Provider configuration (Context, QueryClient) and global styles.

---

## Author

**Alejandro Chiliquinga**

* **GitHub:** [@kachiliquingal](https://github.com/kachiliquingal)

---
*Developed for the Web Programming Course - December 2025*
