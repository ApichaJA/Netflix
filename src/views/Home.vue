<template>
<div class="main-browse">

  <div class="videoWrapper">
    <div class="feach-video">
    <video class="top-main-motion" autoplay loop>
      <source :src="topvideo" type="video/mp4">
    </video>
    <div class="site-right-info">
      <div class="rating-main-box"><span>16+</span></div>
    </div>
    </div>
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
    var movieName = "wywslp"
    return require('@/assets/videos/' + movieName + '.mp4')
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

.feach-video{
  position: relative;
}
.site-right-info{
  position: absolute;
  right: 0;
  bottom: 33vh;
}

.rating-main-box{
  border-left: solid 3px #dcdcdc;
  padding: .5vw 3.5vw .5vw .8vw;
  height: 2.4vw;
  background-color: rgba(0, 0, 0, .4);
  font-size: 1.1vw;
  color: #fff;
}

.top-main-motion {
 width: 100vw;
 height: calc(100vw/1.77);
}
</style>