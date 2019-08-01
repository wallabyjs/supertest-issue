module.exports = () => ({
  autoDetect: true,
  tests: [
    'src/**/*spec.js',
    '!src/**/*end-to-end.spec.js'
  ]
});