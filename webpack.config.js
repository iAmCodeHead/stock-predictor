const path = require('path');

module.exports = {
    entry: {
        main: './index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true // this cleans up the dist folder b4 bundling again
    },
    mode: 'production'
}