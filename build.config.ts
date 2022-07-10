import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  externals: [
    '@tarojs/service',
    '@unocss/webpack',
    'unocss',
    '@unocss/core',
    '@unocss/preset-uno',
    '@unocss/preset-attributify',
    '@unocss/preset-mini',
  ],
  rollup: {
    emitCJS: true,
  },
  declaration: true,
})
