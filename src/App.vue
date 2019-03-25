<template>
  <div id="app">
    <lottie :options="defaultOptions" :height="400" :width="400" @animCreated="handleAnimation" />
    <div>
      <p>Speed: x{{animationSpeed}}</p>
      <input type="range" value="1" min="0" max="5" step="0.5" @change="onSpeedChange" v-model="animationSpeed">
    </div>
    <div>
      <button @click="reset">reset</button>
      <button @click="pause">pause</button>
      <button @click="play">play</button>
    </div>
    <div>
      <button @click="goToAndStop">goToAndStop</button>
      <button @click="goToAndPlay">goToAndPlay</button>
    </div>
  </div>
</template>

<script>
import Lottie from '@/lottie.vue';
import animationData from '@/assets/cycle.json';

export default {
  name: 'app',
  components: {
    Lottie
  },
  data() {
    return {
      defaultOptions: { animationData },
      animationSpeed: 1,
    }
  },
  watch: {
    animationSpeed() {
      console.log(this.anim);
    }
  },
  methods: {
    handleAnimation(anim) {
      this.anim = anim;
      console.log(anim);
      // this.enterFrame();
      // this.loopComplete();
      // this.complete();
      this.DOMLoaded();
    },

    reset() {
      this.anim.stop();
    },

    play() {
      this.anim.play();
    },

    pause() {
      this.anim.pause();
    },

    onSpeedChange() {
      this.anim.setSpeed(this.animationSpeed);
    },

    goToAndStop() {
      this.anim.goToAndStop(this.anim.totalFrames - 120, 1);
    },

    goToAndPlay() {
      this.anim.goToAndPlay(this.anim.totalFrames - 52, 1);
    },

    // 监听事件
    DOMLoaded() {
      this.anim.addEventListener('DOMLoaded', () => {
        console.log('DOMLoaded');
      })
    },

    enterFrame() {
      this.anim.addEventListener('enterFrame', () => {
        console.log('enterFrame');
      })
    },

    loopComplete() {
      this.anim.addEventListener('loopComplete', () => {
        console.log('loopComplete');
      })
    },

    complete() {
      this.anim.addEventListener('complete', () => {
        console.log('complete');
      })
    },
  }
}
</script>
<style scoped>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#app > div {
  display: inline-block;
}
</style>
