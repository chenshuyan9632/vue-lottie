# vue-lottie

## 简介

![Lottie](src/assets/lottie1.gif)

Lottie 是 Airbub 开源的动画库，应用于 [Web](https://github.com/airbnb/lottie-web), [Android](https://github.com/airbnb/lottie-android), [iOS](https://github.com/airbnb/lottie-ios), [React Native](https://github.com/airbnb/lottie-react-native), and [Windows](https://aka.ms/lottie)，可以通过 Bodymovin 插件解析 AE 动画，生成 json 文件实时渲染动画。官方网站也提供了大量的素材，[LottieFiles.com](https://lottiefiles.com/)

​简单点来说，Lottie 提供一个 json 格式的动画数据，我们引入文件并将其渲染到页面上。

Lottie 还提供了相应的参数方法来控制动画效果，下面讲一下常用的配置以及使用。

## 方法解析

- loadAnimation 参数

  | params           | Desc                                                                                            |
  | ---------------- | ----------------------------------------------------------------------------------------------- |
  | name             | 传递该参数，可在之后通过 lottie 引用该动画实例                                                  |
  | container        | 用于渲染动画的 HTML 元素（需确保在调用 loadAnimation 时该元素已存在）                           |
  | animationData    | JSON 数据，与 path 互斥                                                                         |
  | path             | JSON 文件路径                                                                                   |
  | renderer         | 渲染格式配置，'svg'/'canvas'/'html'                                                             |
  | loop             | 循环配置，true / false / number                                                                 |
  | autoplay         | 自动播放，true / false                                                                          |
  | rendererSettings | 可传递给 renderer 实例的特定[设置](https://github.com/airbnb/lottie-web/wiki/Renderer-Settings) |

- 监听事件

  | params       | Desc                        |
  | ------------ | --------------------------- |
  | DOMLoaded    | 元素已添加到 DOM 节点时触发 |
  | enterFrame   | 播放一帧动画时触发          |
  | loopComplete | 当前循环播放结束时触发      |
  | complete     | 动画结束时触发              |

  ```js
  this.anim.addEventListener('complete', () => {
    console.log('complete');
  });
  ```

- 控制动画播放以及进度

  | params                      | Desc                                 |
  | --------------------------- | ------------------------------------ |
  | play()                      | 开始播放                             |
  | pause()                     | 暂停播放                             |
  | stop()                      | 暂停播放，且动画回到第一帧           |
  | setSpeed(speed)             | 调节动画速度                         |
  | goToAndStop(value, isFrame) | 当前动画跳转到设置的帧数，并停止播放 |
  | goToAndPlay(value, isFrame) | 当前动画跳转到设置的帧数，并开始播放 |

## 在 vue 中使用（详见源码）

- 安装 vue-lottie

```js
  npm install --save vue-lottie
```

- 引入文件

```js
  import lottie from 'lottie-web';
```

- 引入 Json 文件

```js
  import animationData from '@/assets/cycle.json';
```

- template 中引入

```vue
  <lottie :options="defaultOptions" :height="400" :width="400" @animCreated="handleAnimation" />
```

- JS 中添加方法

```js
  methods:{
    play() {
      this.anim.play();
    },
  }
```
