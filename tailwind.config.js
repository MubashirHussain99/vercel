import Image from "next/image"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
      backgroundImage: {
        'parallax': 'url("/bg.jpg")',
        'about_bg': 'url("/bg_i_f_a_p.png")',
      },
    },
  },
  plugins: [],
}
