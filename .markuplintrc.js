module.exports = {
  excludeFiles: [
    "./**/*.{test,spec,stories}.tsx"
  ],
  extends: [
    "markuplint:recommended"
  ],
  parser: {
    ".tsx$": "@markuplint/jsx-parser"
  },
  specs: {
    ".tsx$": "@markuplint/react-spec"
  }
};
