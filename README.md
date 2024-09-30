# demo-reactjs-with-webpack
This project is created for self-studying only. Working with webpack and yarn to create Reactjs from scratch.

## how to add tailwind css inside Reactjs with webpack
### Step 1: install Tailwind CSS:
```bash
yarn add -D tailwindcss postcss autoprefixer
yarn add -D postcss-loader postcss autoprefixer --save-dev
```

Note: yarn add webpack-dev-server 
This cmd support reload whenever update after save file

### Step 2: create a tailwind.config.js file and a postcss.config.js
npx tailwindcss init -p

### Step 3: Config tailwind css
In your ```tailwind.config.js``` set up your content paths to ensure Tailwind can purge unused styles in production
```bash
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Step 4: CSS
Create a CSS file (e.g., src/index.css) and add the following lines:
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 5: 
In your main entry file (e.g., src/index.jsx), import the CSS file:
```bash
import './index.css';
```
### Step 6: Webpack Configuration:
Ensure you have the appropriate loaders in your Webpack configuration to handle CSS files. Here's a basic example:
```bash
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      // Other rules...
    ],
  },
  // Other configurations...
};
```

### Step 7: run your project
```
yarn start
```