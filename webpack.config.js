const config = {
  entry: `${__dirname}/src/app.js`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/src/js`
  },
  mode: 'development'
};

module.exports = config;
