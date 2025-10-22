# Frontend Mentor - Browser extensions manager UI solution

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Links](#links)
- [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [https://github.com/manuelfesantos/browser-extensions-manager](https://github.com/manuelfesantos/browser-extensions-manager)
- Live Site URL: [https://browser-extensions-manager.manuelfesantos.workers.dev/](https://browser-extensions-manager.manuelfesantos.workers.dev/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties for theming
- Flexbox & CSS Grid
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Frontend Tooling
- [TypeScript](https://www.typescriptlang.org/) - Language

### What I learned

This project was a great opportunity to practice fundamental React concepts, particularly state management and component composition.

One of the core aspects of the implementation was the use of React's Context API to manage global state. I created two separate contexts: one for the extensions list (`extensionsContext.tsx`) and another for the theme (`themeContext.tsx`). This approach allowed me to avoid "prop drilling" and provide state and state-updating functions to any component that needed them.

For the theme switching functionality, I combined the `ThemeContext` with CSS variables. The context tracks whether the current theme is 'light' or 'dark', and a `data-theme` attribute is set on the main App component. The CSS then uses these variables to adjust the colors throughout the application.

```css
:root {
    --primary-color: #09163E;
    /* ... more light theme variables */
}

[data-theme="dark"] {
    --primary-color: #F4F9FC;
    /* ... more dark theme variables */
}