const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'new-bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['css-loader'],
          },
        ],
      },
    devServer: {
        port: 4444,
        open: true,
        stats: 'errors-only',
    }
};
    