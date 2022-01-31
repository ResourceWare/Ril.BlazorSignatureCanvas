const path = require('path');

module.exports = (env, args) => ({
    resolve: { extensions: ['.ts', '.js'] },
    devtool: args.mode === 'development' ? 'source-map' : 'none',
    module: {
        rules: [{ test: /\.ts?$/, loader: 'ts-loader' }]
    },
    entry: './index.ts',
    output: {
        path: path.join(__dirname, '..', 'wwwroot'),
        filename: 'BlazorSignatureCanvas.js',
        libraryTarget: 'var',
        library: 'BlazorSignatureCanvas',
        libraryExport: 'default'
    }
});