module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("public");

  return {
    dir: {
      input: "content",
      includes: "../includes",
      layouts: "../layouts",
      data: "../data"
    }
  }
};
