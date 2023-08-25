const { override, addManifest, addWorkboxWebpackPlugin } = require('customize-cra');

module.exports = override(
  addManifest({
    // Manifest options
    name: 'SW ENTREGAS',
    short_name: 'SWE',
    start_url: '.',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: 'path/to/icon.png',
        sizes: [192, 512],
      },
    ],
  }),
  addWorkboxWebpackPlugin({
    // Workbox options
    exclude: [/\.(?:png|jpg|jpeg|svg)$/],
  })
);
