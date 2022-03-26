module.exports = {
  layout: "base.njk",
  eleventyComputed: {
    permalink: ({ page }) => {
      const re = new RegExp("^.+(?=" + page.fileSlug + "$)");
      const path = re.exec(page.filePathStem);
      return `${path ?? ""}${page.fileSlug ?? "index"}.html`;
    }
  }
}
