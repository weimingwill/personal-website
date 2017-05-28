// lazy loading Components
// Webpack code splitting: https://webpack.js.org/guides/code-splitting-async/#require-ensure-
export default (name, index = false) => () => require.ensure([], (require) => require(`../../../views/${name}${index ? '/index' : ''}.vue`))
