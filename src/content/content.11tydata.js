module.exports = {
  layout: "base.njk",
  eleventyComputed: {
    permalink: ({ page, permalink }) => {
      if (permalink.length > 0) {
        return permalink;
      }
      const re = new RegExp("^.+(?=" + page.fileSlug + "$)");
      const path = re.exec(page.filePathStem);
      return `${path ?? ""}${page.fileSlug ?? "index"}.html`;
    },
    title: ({ page, title }) => title || page.fileSlug.toUpperCase(),
    timestamp: () => {
      const now = new Date();
      return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    }
  }
}
