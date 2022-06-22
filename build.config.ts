import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  externals: [
    '@tarojs/service',
    '@unocss/preset-rem-to-px',
    '@unocss/webpack',
    'unocss',
  ],
  rollup: {
    emitCJS: true,
  },
  declaration: true,
})
