module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget('./src/sass/');
    eleventyConfig.addPassthroughCopy("./src/css");

    return {
        passThroughFileCopy: true,
        dir: {
            input: "src",
            output: "public"
        }
    }
}