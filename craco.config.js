const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@body-background': '#A5A2991A',
              '@font-family': "'Poppins', sans-serif",
              '@primary-color': '#93C850',
              '@badge-dot-size': '8px',
              '@border-radius-base': '8px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
