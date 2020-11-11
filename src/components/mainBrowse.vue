<template>
<div class="main-browse">

  <div class="videoWrapper">
    <div class="feach-video" v-on:change="volumeSelect('unmuted')">
       <img class="poster" :class="{'outposter': showPoster === false}" src="@/assets/videos/wywlepposter.jpg">
    <video ref="videoRef" :muted='videoEvent' autoplay class="top-main-motion" @ended="videoEnd('ended')">
      <source :src="topvideo" type="video/mp4">
    </video>
    <div class="site-left-info">

    </div>

    <div class="site-right-info">
      <button class="volume-up btn" v-if="firstLoadPoster">
        <i class="fas fa-volume-up vector-volume" v-if="videoEvent === false" v-on:click="volumeSelect(true)"></i>
        <i class="fas fa-volume-mute vector-volume" v-if="videoEvent === true" v-on:click="volumeSelect(false)"></i>
        <i class="fas fa-redo vector-volume" v-if="videoEvent === 'ended'" v-on:click="replayVideo(false)"></i>
        </button>
      <div class="rating-main-box"><span>13+</span></div>
    </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  data() {
    return {
        firstLoadPoster: false,
        showPoster: true,
        videoEvent: true,
        muteStatus: true,
        tabFocus:true,
    };
  },
  created() {
  this.detectFocusOut();
},

watch:{
    tabFocus(value) {
      console.log("New value:", value);
    },
},

  methods: {
    volumeSelect: function(event){
      this.videoEvent = event;
      this.muteStatus = event;
      this.$refs.videoRef.muted = 'true';
    },
    videoEnd: function (event) {
      this.videoEvent = event;
      this.showPoster = true;
      this.$refs.videoRef.muted = 'false';
    },
    replayVideo: function(){
        this.videoEvent = this.muteStatus;
        this.showPoster = false;
        this.$refs.videoRef.play();
    },
     detectFocusOut() {
        let inView = false;
        const onWindowFocusChange = (e) => {
            if ({ focus: 1, pageshow: 1 }[e.type]) {
                if (inView) return;
                this.tabFocus = true;
                inView = true;
                if(this.firstLoadPoster === true && this.videoEvent !== 'ended')
                setTimeout(() => {
                    this.showPoster = false;
                    this.$refs.videoRef.play();
                },500)

            } else if (inView) {
                this.tabFocus = !this.tabFocus;
                inView = false;
                this.$refs.videoRef.pause();
                this.showPoster = true;
            }
        };
        window.addEventListener('focus', onWindowFocusChange);
        window.addEventListener('blur', onWindowFocusChange);
        window.addEventListener('pageshow', onWindowFocusChange);
        window.addEventListener('pagehide', onWindowFocusChange);
    }
    
  },
  computed: {
    topvideo () {
      var movieName = "wywslp"
    return require('@/assets/videos/' + movieName + '.mp4')
  },
    },
  mounted(){
    setTimeout(() => {
        this.firstLoadPoster = true
      this.showPoster = false
      this.$refs.videoRef.play();
      },2000)
    },
    
}
</script>

<style scoped>
.main-browse{
  z-index: 1;
  position: absolute;
  top: -7%;
}

.poster{
    opacity: 1;
    width:100%;
    transition: opacity .3s;
    position: absolute; 
}

.outposter{
    opacity: 0!important;
    transition: opacity .3s;
}

.feach-video{
  position: relative;
}

.site-right-info{
  display: flex;
  position: absolute;
  right: 0;
  bottom: 16.3vw;
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
    background-image: linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));
    width: 100vw;
    height: calc(100vw/1.77);
}
</style>