module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  safelist: ["project-card", "project-card-cover", "card-body", "card-title", "card-img-top"],
  skippedContentGlobs: ["_site/assets/**/*.html"],
};
