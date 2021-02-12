const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPlugin(syntaxHighlight);

  return {
    passThroughFileCopy: true,
    dir: {
      input: "src",
      output: "public",
    },
  };
};
