import type { Preset } from '@unocss/core'
const remRE = /^-?[\.\d]+rem$/

export interface RemToPxOptions {
  /**
     * 1rem = n rpx
     * @default 16
     */
  baseFontSize?: number
}

export const presetRemToRpx = (options: RemToPxOptions = {}): Preset => {
  const {
    baseFontSize = 16,
  } = options
  return {
    name: '@unocss/preset-rem-to-rpx',
    postprocess: (util) => {
      util.entries.forEach((i) => {
        const value = i[1]
        if (value && typeof value === 'string' && remRE.test(value))
          i[1] = `${+value.slice(0, -3) * baseFontSize}rpx`
      })
    },
  }
}
