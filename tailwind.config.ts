module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}", // if using App Router
    ],
    safelist: [
      'bg-[#BEF3C0]',
      'bg-[#AC94F1]',
      'bg-[#FFF0CA]',
      'bg-[#F9CF64]',
      'bg-[#F38FBF]'
    ],
    theme: {
      extend: {
        screens: {
          "xs": "420px"
        }
      },
    },
    plugins: [],
  }