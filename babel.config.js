module.exports = (api) => {
  api.cache(true)

  const plugins = [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
  ]

  return {
    presets: [
      '@babel/preset-react',
    ],
    plugins,
  }
}
