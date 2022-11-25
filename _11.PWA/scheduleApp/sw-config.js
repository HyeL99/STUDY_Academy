module.exports = {
  staticFileGlobs: [
    '**.html',
    'css/**.css',
    'assets/img/**.*',
    'images/**.*',
    'js/**.js',
    'plugin/jQuery/**.js',
    'plugin/jQuery/**.css'
  ],
  stripPrefix: 'app/',
  runtimeCaching: [{
    urlPattern: /this\\.is\\.a\\.regex/,
    handler: 'networkFirst'
  }]
};