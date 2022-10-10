export default ({ $config }, inject) => {
  inject('log', (...rest) => {
    if ($config.log) {
      // eslint-disable-next-line no-console
      console.log(...rest)
    }
  })
}
