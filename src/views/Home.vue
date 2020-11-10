<template>
<div class="main-browse">

  <div class="videoWrapper">
    <div class="feach-video">
    <video ref="videoRef" class="top-main-motion" autoplay v-bind:muted="videoEvent === 'muted'" @ended="videoEnd('ended')">
      <source :src="topvideo" type="video/mp4">
    </video>
    <div class="site-right-info">
      <button class="volume-up btn">
        <i class="fas fa-volume-up vector-volume" v-if="videoEvent === 'unmuted'" v-on:click="volumeSelect('muted')"></i>
        <i class="fas fa-volume-mute vector-volume" v-if="videoEvent === 'muted'" v-on:click="volumeSelect('unmuted')"></i>
        <i class="fas fa-redo vector-volume" v-if="videoEvent === 'ended'" v-on:click="replayVideo('unmuted')"></i>
        </button>
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
      videoEvent: "unmuted",
    };
  },
  methods: {
      volumeSelect: function(event){
      this.videoEvent = event;
    },
    videoEnd: function (event) {
      this.videoEvent = event;
    },
    replayVideo: function(event){
      this.videoEvent = event;
      this.$refs.videoRef.play();
    }
  },
  computed: {
  topvideo () {
    var movieName = "wywslp"
    return require('@/assets/videos/' + movieName + '.mp4')
  },

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
  display: flex;
  position: absolute;
  right: 0;
  bottom: 17vw;
}

.vector-volume{
  font-size:1.1vw;
  color:#fff
}

.volume-up{
  display: flex;
  align-content: center;
  border: 1px solid #fff;
  border-radius: 50%;
  padding: .8vw;
  margin-right: 1vw;
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