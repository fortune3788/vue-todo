module.exports = {
  devServer: {
    proxy: {
      '/api/': {
        target: 'https://meigen.doodlenote.net/',
      },
    },
  },
};