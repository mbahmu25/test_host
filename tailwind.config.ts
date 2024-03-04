import type { Config } from "tailwindcss";
const path = require('path');
const config: Config = {
  important:true,
  content: [
    path.join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    path.join(__dirname, 'components/**/*.{js,ts,jsx,tsx}'),
  ]
};
export default config;
