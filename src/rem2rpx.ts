import type { Preset } from '@unocss/core'
const remRE = /^-?[\.\d]+rem$/

export interface RemToPxOptions {
  /**
     * 1rem = n rpx
     * @default 16
     */
  baseFontSize?: number
  /**
   * is h5
   */
  isH5?: boolean
}

export const presetRemToRpx = (options: RemToPxOptions = {}): Preset => {
  const {
    baseFontSize = 16,
    isH5 = false,
  } = options
  return {
    name: '@unocss/preset-rem-to-rpx',
    postprocess: (util) => {
      // check is not h5
      if (isH5) {
        util.entries.forEach((i) => {
          const value = i[1]
          if (value && typeof value === 'string' && remRE.test(value))
            i[1] = `${(+value.slice(0, -3) * baseFontSize) / 40}rem`
        })
        return
      }
      util.entries.forEach((i) => {
        const value = i[1]
        if (value && typeof value === 'string' && remRE.test(value))
          i[1] = `${+value.slice(0, -3) * baseFontSize}rpx`
      })
    },
  }
}
