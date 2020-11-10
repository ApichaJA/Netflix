<template>
  <div class="videoWrapper">
    <iframe
      class="top-main-motion"
      :src="topvideo"
      frameborder="0"
      allow="autoplay"
      >"></iframe
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      topvideo:
        "https://www.youtube.com/embed/8_rEZV3n3mk?controls=0&autoplay=1",
    };
  },
};
</script>

<style scoped>

.top-main-motion {
 width: 100vw;
 height: calc(100vw/1.77);
}
</style>