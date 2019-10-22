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
