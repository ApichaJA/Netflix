<template>
  <div class="main-browse">
    <div class="videoWrapper">
      <div class="feach-video" v-on:change="volumeSelect('unmuted')" @mouseover="mouseOverVideo()">
        <img
          class="poster"
          :class="{ outposter: showPoster === false }"
          src="@/assets/videos/whileyouweresleeping/wywlepposter.jpg"
        />
        <video
          ref="videoRef"
          :muted="videoEvent"
          autoplay
          class="top-main-motion"
          @ended="videoEnd('ended')"
        >
          <source :src="topvideo" type="video/mp4" />
        </video>
        <div class="site-left-info">


          <div class="logo-ep">
            <img :src="topvideoImg" />
          </div>
          <div class="episode-title">
            <span>{{ topvideoTitle }}</span>
          </div>
          <div class="play-info">
            <button class="btn btn-site-left">
              <i class="fas fa-play"></i>
              <span class="site-left-play">Play</span>
            </button>
          </div>
          <div class="more-info ml-3">
            <button class="btn btn-site-left-info">
              <i class="fas fa-info-circle"></i>
              <span class="site-text-info">More Info</span>
            </button>
          </div>
        </div>

        <div class="site-right-info">
          <button class="volume-up btn" v-if="firstLoadPoster">
            <i
              class="fas fa-volume-up vector-volume"
              v-if="videoEvent === false"
              v-on:click="volumeSelect(true)"
            ></i>
            <i
              class="fas fa-volume-mute vector-volume"
              v-if="videoEvent === true"
              v-on:click="volumeSelect(false)"
            ></i>
            <i
              class="fas fa-redo vector-volume"
              v-if="videoEvent === 'ended'"
              v-on:click="replayVideo(false)"
            ></i>
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
      tabFocus: true,

      
    };
  },
  created() {
    this.detectFocusOut();
  },

  methods: {
    volumeSelect: function (event) {
      this.videoEvent = event;
      this.muteStatus = event;
      this.$refs.videoRef.muted = "true";
    },
    videoEnd: function (event) {
      this.videoEvent = event;
      this.showPoster = true;
      this.$refs.videoRef.muted = "false";
    },
    replayVideo: function () {
      this.videoEvent = this.muteStatus;
      this.showPoster = false;
      this.$refs.videoRef.play();
    },
    detectFocusOut() {
      let inView = false;
      const onWindowFocusChange = (e) => {
        if (
          {
            focus: 1,
            pageshow: 1,
          }[e.type]
        ) {
          if (inView) return;
          this.tabFocus = true;
          inView = true;
          if (this.firstLoadPoster === true && this.videoEvent !== "ended")
            setTimeout(() => {
              this.showPoster = false;
              this.$refs.videoRef.play();
            }, 500);
        } else if (inView) {
          this.tabFocus = !this.tabFocus;
          inView = false;
          this.$refs.videoRef.pause();
          this.showPoster = true;
        }
      };
      window.addEventListener("focus", onWindowFocusChange);
      window.addEventListener("blur", onWindowFocusChange);
      window.addEventListener("pageshow", onWindowFocusChange);
      window.addEventListener("pagehide", onWindowFocusChange);
    },
    mouseOverVideo(){
      this.$refs.videoRef.play();
    }
  },
  computed: {
    topvideoImg() {
      var topimg = "logowywslp";
      return require("@/assets/videos/whileyouweresleeping/" + topimg + ".png");
    },
    topvideoTitle() {
      var tileEp =
        "A young woman has visions through her dreams of terrible things that will happen to people in the future.";
      return tileEp;
    },
    topvideo() {
      var movieName = "wywslp";
      return require("@/assets/videos/whileyouweresleeping/" + movieName + ".mp4");
    },
  },
  mounted() {
    setTimeout(() => {
      this.firstLoadPoster = true;
      this.showPoster = false;
      this.$refs.videoRef.play();
    }, 2000);
  },
};
</script>

<style scoped>
.main-browse {
  z-index: 1;
}

.poster {
  opacity: 1;
  width: 100%;
  transition: opacity 0.3s;
  position: absolute;
}

.outposter {
  opacity: 0 !important;
  transition: opacity 0.3s;
}

.feach-video {
  position: relative;
}

.site-left-info {
  display: flex;
  position: absolute;
  padding: 0 3.1vw;
  left: 0;
  bottom: 17.5vw;
}

.btn-site-left {
  background-color: #fff;
  color: #000 !important;
  padding: 0.7vw 1.85vw 0.5vw 1.85vw;
}

.btn-site-left i {
  font-size: 1.2vw;
}

.site-left-play {
  margin-left: 0.9vw;
  font-size: 1.2vw;
}

.btn-site-left-info {
  background-color: rgba(109, 109, 110, 0.7);
  padding: 0.7vw 1.85vw 0.5vw 1.85vw;
  color: #fff;
}

.btn-site-left-info i {
  font-size: 1.4vw;
}

.site-text-info {
  margin-left: 0.9vw;
  font-size: 1.2vw;
}

.episode-title {
  font-family: HelveticaNeueBd, sans-serif !important;

  position: absolute;
  bottom: 5vw;
  width: 40vw;
  font-size: 1.4vw;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  text-align: left;
  color: #fff;
}



.logo-ep {
  position: absolute;
  bottom: 10vw;
}

.logo-ep img {
  width: 40vw;
}

.site-right-info {
  display: flex;
  position: absolute;
  right: 0;
  bottom: 16.3vw;
}

.vector-volume {
  font-size: 1.1vw;
  color: #fff;
}

.volume-up {
  display: flex;
  align-content: center;
  border: 1px solid #fff;
  border-radius: 50%;
  padding: 0.8vw;
  margin-right: 1vw;
}

.rating-main-box {
  border-left: solid 3px #dcdcdc;
  padding: 0.5vw 3.5vw 0.5vw 0.8vw;
  height: 2.4vw;
  background-color: rgba(0, 0, 0, 0.4);
  font-size: 1.1vw;
  color: #fff;
}

.top-main-motion {
  width: 100%;
  height: calc(100vw / 1.77);
}
</style>
