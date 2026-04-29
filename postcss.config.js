const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    process.env.NODE_ENV === 'production' && require('@fullhuman/postcss-purgecss')({
      content: [
        './index.html',
        './js/scripts.js'
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ].filter(Boolean)
};