const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  return {
    passThroughFileCopy: true,
    dir: {
      input: "src",
      output: "public",
    },
  };
};
