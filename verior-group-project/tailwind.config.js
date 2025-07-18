// tailwind.config.js
export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customgray: '#808080',
        customgray50: 'rgb(128 128 128 / 0.5)',
        labelbg: '#181818',
        labelborder: '#272525',
      },
    },
  },
  plugins: [],
};
