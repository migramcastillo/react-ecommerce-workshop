const isProduction = process.NODE_ENV === "production";

const purgecss = require("@fullhuman/postcss-purgecss")({
  content: [
    "./index.html",
    "./app.js",
    "./components/**/*.jsx",
    "./components/**/*.scss"
  ],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  whitelistPatterns: [/body/, /html/]
});

module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer"),
    require("postcss-nested"),
    require("postcss-custom-properties"),
    purgecss
    //Activa PurgeCSS en modo produccion
    // isProduction && purgecss
  ]
};
