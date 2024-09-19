# demo-reactjs-with-webpack
This project is created for self-studying only. Working with webpack and yarn to create Reactjs from scratch.

# how to add tailwind css inside Reactjs with webpack
Step 1: install Tailwind CSS:
yarn add -D tailwindcss postcss autoprefixer
yarn add -D postcss-loader postcss autoprefixer --save-dev

Note: yarn add webpack-dev-server 
This cmd support reload whenever update after save file

Step 2: create a tailwind.config.js file and a postcss.config.js
npx tailwindcss init -p

Step 3: in your tailwind.config.js, set up your content paths to ensure Tailwind can purge unused styles in production
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

Step 4: Create a CSS file (e.g., src/index.css) and add the following lines:
@tailwind base;
@tailwind components;
@tailwind utilities;

Step 5: In your main entry file (e.g., src/index.jsx), import the CSS file:
import './index.css';

Step 6: Webpack Configuration:
Ensure you have the appropriate loaders in your Webpack configuration to handle CSS files. Here's a basic example:
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

Step 7: run your project: yarn start