import type { IPluginContext } from '@tarojs/service'
import Unocss from '@unocss/webpack'
import {
  presetAttributify,
  presetTypography,
  presetUno,
} from 'unocss'
import { presetRemToRpx } from './rem2rpx'
import type { UnocssPluginOptions } from './typing'

export default (ctx: IPluginContext, unocssPluginOptions?: UnocssPluginOptions) => {
  const { options, defaults, preset } = unocssPluginOptions || {}
  const { uno = {}, remToRpx = {}, attributify = {}, typography = {} } = preset || {}
  ctx.modifyWebpackChain(({ chain }) => {
    chain.plugin('unocss').use(Unocss({
      ...(options || {}),
      presets: [
        presetUno(uno),
        presetAttributify(attributify),
        presetTypography(typography),
        presetRemToRpx(remToRpx),
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
