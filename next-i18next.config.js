const path = require("path")

module.exports = {
  i18n: {
    defaultLocale: "hy",
    locales: ["en","hy","ru"],
    localeDetection: false
  },
    localePath: path.resolve('./public/locales'),
  };