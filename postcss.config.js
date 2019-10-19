// const purgecss = require("@fullhuman/postcss-purgecss")({
//   content: ["./index.html"],
//   defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
//   whitelistPatterns: [/body/, /html/, /notification/]
// });

module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer"),
    require("postcss-nested"),
    require("postcss-custom-properties")
    //Activa PurgeCSS en modo produccion
    // isProduction && purgecss
  ]
};
