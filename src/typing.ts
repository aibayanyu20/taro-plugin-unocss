import type { WebpackPluginOptions } from '@unocss/webpack'
import type { UserConfigDefaults } from 'unocss'

export interface UnocssPluginOptions {
  options?: WebpackPluginOptions
  defaults?: UserConfigDefaults
}
