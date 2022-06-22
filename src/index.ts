import type { IPluginContext } from '@tarojs/service'
import Unocss from '@unocss/webpack'
import {
  presetAttributify,
  presetTypography,
  presetUno,
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
import type { UnocssPluginOptions } from './typing'

export default (ctx: IPluginContext, unocssPluginOptions?: UnocssPluginOptions) => {
  const { options, defaults } = unocssPluginOptions || {}
  ctx.modifyWebpackChain(({ chain }) => {
    chain.plugin('unocss').use(Unocss({
      ...(options || {}),
      presets: [
        presetUno(),
        presetAttributify(),
        presetTypography(),
        presetRemToPx(),
        ...(options?.presets || []),
      ],
      theme: {
        ...(options?.theme || {}),
        preflightBase: false,
      },
    }, defaults))
    chain.merge({
      module: {
        rule: {
          mjsScript: {
            test: /\.mjs$/,
            include: [/@unocss/, /unocss/],
            use: {
              babelLoader: {
                loader: require.resolve('babel-loader'),
              },
            },
          },
        },
      },
    })
  })
}
