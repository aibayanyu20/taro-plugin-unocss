# taro-plugin-unocss

> 在`taro`中使用`unocss`

## 安装

```shell

yarn add taro-plugin-unocss -D

```

## 使用

> 目前测试的环境是`vue3`和`taro@3.4.x`版本

### 插件引用

修改项目`config/index.js`中的`plugins`配置为如下:

```js
const config = {
  ...
  plugins: [
    ...其余插件
    [
    'taro-plugin-unocss',
        {
            options:{
                // 配置 WebpackPluginOptions
            },
            defaults:{
                // 配置 UserConfigDefaults
            }
        }
    ]
  ]
  ...
}

```

这样我们的配置就已经完成了

## 内置

目前我们内置的功能如下：

```
presetUno()
presetAttributify()
presetTypography()
presetRemToPx()

```


如果需要扩展，请参考[unocss文档](https://github.com/unocss/unocss/tree/main/packages/webpack)，去配置`options`和`defaults`

参数对应关系`Unocss(options,defaults)`


## 注意

由于小程序的限制，并不能全部兼容`unocss`的所有功能，请参考[WXSS文档](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxss.html)
