/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'btn-grad': 'linear-gradient(to right, #ff0f7b, #f89b29)',
        'bg-image': `url('https://i.ibb.co/26P93xn/bg.jpg')`,
        'bg-image-dark': `url('https://i.ibb.co/G7g8K5L/dark-bg.jpg')`,
      },
      colors:{
        'my-gray': '#F3F6F6',
        'my-grad1': '#FCF4FF',
        'my-grad2': '#FEFAF0',
        'my-grad3': '#FFF4F4',
        'my-grad4': '#F3FAFF',
        'my-grad5': '#F8FBFB',
        'my-dark': '#111111',
        'my-dark-btn': '#1D1D1D',
        'my-dark-txt': 'rgb(166 166 166/var(--tw-text-opacity));',
      },
    },
  },
  plugins: [require("daisyui")],
};
