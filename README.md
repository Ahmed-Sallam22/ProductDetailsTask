<<<<<<< HEAD
# ProductDetailsTask

This project is a React + TypeScript + Tailwind CSS e-commerce product page built using Vite. It includes:

Breadcrumb Navigation

Product Image Slider with thumbnails

Brand Information Section

Checkout & Quantity Selection

Contact Options


Installation & Setup

1️⃣ Clone the Repository
git clone https://github.com/your-repo/mytasks.git
cd mytasks
 
2️⃣ Install Dependencies
npm install

3️⃣ Run Development Server
npm run dev


🛠️ Technologies Used

React 19 (Frontend framework)

TypeScript (Static typing)

Vite (Fast build tool)

Tailwind CSS (Utility-first styling)

React Slick (Image carousel)

React Icons (Icons)

ESLint (Code linting)


📂 Project Structure
mytasks/
│── src/
│   ├── Components/
│   │   ├── Products/
│   │   │   ├── ImageSlider.tsx
│   │   │   ├── Product_info.tsx
│   │   │   ├── breadcrumbs.tsx
│   │   │   ├── Brand_info.tsx
│   │   │   ├── CheckoutSection.tsx
│   │   │   ├── ContactOptions.tsx
│   ├── Pages/
│   │   ├── Products/
│   │   │   ├── Products.tsx
│   ├── App.tsx
│   ├── main.tsx
│── public/
│── package.json
│── tsconfig.json
│── tailwind.config.js
│── vite.config.ts



✨ Features

✅ Product Display

Responsive image slider with thumbnails

Interactive quantity selection

Checkout button with hover effects

✅ Brand & Pricing Info

Displays brand details (logo, designer, collection, rating, price)

Interactive wishlist & share icons

✅ Contact Options

Request a quotation

Order through WhatsApp

Call support number

✅ Fully Responsive Design

Mobile, Tablet, and Desktop friendly

Dynamic text & layout scaling

Hover & transition effects

=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
>>>>>>> adcd221 (Initial commit - Uploading Product Details Task)
