<template>
<div class="main-browse">

  <div class="videoWrapper">
    <video class="top-main-motion" autoplay loop>
      <source :src="topvideo" type="video/mp4">
    </video>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
  topvideo () {
    return require('@/assets/videos/wywslp.mp4')
  }
}
}
</script>

<style scoped>

.main-browse{
  z-index: 1;
  position: absolute;
  top: -7%;
}

.top-main-motion {
 width: 100vw;
 height: calc(100vw/1.77);
}
</style>