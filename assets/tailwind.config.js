/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    '../lib/evolving_content_web/templates/**/*.html.heex',
  ],
  content: [],
  theme: {
    extend: {
      colors: {
        "primary": {
          "100": "#B2E9ED",
          "200": "#7FDBE1",
          "300": "#32C5CF",
          "400": "#00B7C3",
        },
        "secondary": {
          "100": "#FFDAD7",
          "200": "#FFB6AE",
          "300": "#FE8174",
          "400": "#FE6F61",
        },
        "casal": {
          "100": "#ABBEC1",
          "200": "#6D8D93",
          "300": "#436D75",
          "400": "#2F5D66",
        },
        "neutral": {
          "100": "#F2F2F2",
          "200": "#E6E6E6",
          "300": "#CCCCCC",
          "400": "#B3B3B3",
        }
      },
    },
    plugins: [],
  }
}
