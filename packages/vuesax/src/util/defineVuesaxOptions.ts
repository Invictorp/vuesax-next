import { setColor } from './index'

export interface VuesaxOptions {
  colors?: VuesaxColors
}

export interface VuesaxColors {
  [item: string]: any
  primary: string
  success: string
  danger: string
  warn: string
  dark: string
}

const defineColors = (colors: VuesaxColors) => {
  Object.keys(colors).forEach((item) => {
    setColor(item, colors[item], document.body)
  })
}

export const defineVuesaxOptions = (options: VuesaxOptions) => {
  console.log(options)
  if (!!options.colors) {
    defineColors(options.colors)
  }
}
