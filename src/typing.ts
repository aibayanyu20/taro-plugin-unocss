import type { WebpackPluginOptions } from '@unocss/webpack'
import type { UserConfigDefaults } from 'unocss'
import type { PresetUnoOptions } from '@unocss/preset-uno'
import type { AttributifyOptions } from '@unocss/preset-attributify'
import type { TypographyOptions } from '@unocss/preset-typography'
import type { RemToPxOptions } from './rem2rpx'

export interface UnocssPluginOptions {
  preset: {
    uno?: PresetUnoOptions
    remToRpx?: RemToPxOptions
    attributify?: AttributifyOptions
    typography?: TypographyOptions
  }
  options?: WebpackPluginOptions
  defaults?: UserConfigDefaults
}
