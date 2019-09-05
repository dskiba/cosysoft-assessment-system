module.exports = {
  linters: {
    '**/*.+(js|md|ts|css|sass|less|graphql|yml|yaml|scss|vue)': [
      //TODO json?
      'eslint --fix',
      'prettier --write',
      'jest --findRelatedTests',
      'git add',
    ],
  },
};
