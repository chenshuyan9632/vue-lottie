<template>
  <div :style="style" ref="lavContainer"></div>
</template>

<script>
import lottie from 'lottie-web';

export default {
  props: {
    options: {
      type: Object,
      required: true
    },
    height: Number,
    width: Number
  },
  data() {
    return {
      style: {
        width: this.width ? `${this.width}px` : '100%',
        height: this.height ? `${this.height}px` : '100%',
        overflow: 'hidden',
        margin: '0 auto'
      }
    };
  },
  mounted() {
    const anim = lottie.loadAnimation({
      name: 'Anim',
      animationData: this.options.animationData, // animationData: an Object with the exported animation data
      container: this.$refs.lavContainer, // container: the dom element on which to render the animation
      renderer: 'svg', // renderer: 'svg' / 'canvas' / 'html'
      loop: this.options.loop !== false, // loop: true / false / number
      autoplay: this.options.autoplay !== false,  // autoplay: true / false
      // path: '/api/dark.json',
      rendererSettings: this.options.rendererSettings
    });
    console.log(lottie);

    this.$emit('animCreated', anim);
  }
};
</script>
