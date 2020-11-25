<template>
  <div class="main-browse">

   

    <div class="videoWrapper">
      <div class="feach-video" v-on:change="volumeSelect('unmuted')">
        <img
          class="poster"
          :class="{ outposter: showPoster === false }"
          :src="topvideoLogo"
        />
        <video
          ref="videoRef"
          :muted="videoEvent"
          autoplay
          class="top-main-motion"
          @ended="videoEnd('ended')"
          v-on:click="replayVideo()"
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
            <button class="btn btn-site-left-info" v-on:click="moreInfo = true, startVideo()">
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
          <div class="rating-main-box"><span>{{topvideoContentRate}}+</span></div>
        </div>
      </div>
    </div>

 <div :class="{'show-more-detail': moreInfo,
    'show-detail':!moreInfo}">
            <button
                class="btn close-popup"
                v-on:click="moreInfo = false,closeVideodetail()"
              >
                <i class="far fa-times-circle"></i>
              </button>
                    <img
                class="movieposter-more"
                :class="{outposter: dropposterDetail}"
                :src="topvideoLogo"
              />
                                    <video
          ref="videoRefmore"
          :muted="videoEvent"
          class="top-main-motion-more"
        >
          <source :src="topvideo" type="video/mp4" />
        </video>
        
              <div class="more-detail-content">
<div class="shadow-movie"></div>

<div class="menu-more-detail-full">
                  <div class="content-more-rating">
                    {{ rating(imdbRating) }}% Match
                  </div>
                  <div class="content-more-duration">
                    {{ durationTime(duration) }}
                  </div>
                  <div class="content-more-contentRating">
                    {{ contentRating }}+
                  </div>
                  <div class="content-more-year">{{ year }}</div>
                </div>
                              <div class="row p-2">
                  <div class="col-8 mt-4">
                    {{ storyline }}
                  </div>
                  <div class="col-4">
                    <div class="menu-more-detail-inline">
                      <span style="color: #777">Cast: </span
                      >{{ actors(actorsMovie) }}
                    </div>
                    <div style="display: block" class="mt-3"></div>

                    <div class="menu-more-detail-inline">
                      <span style="color: #777">Genres: </span
                      >{{ genres(genresMovie) }}
                    </div>
                  </div>
                </div>


                <div class="more-like">
                  <span class="more-like-text">More Like This</span>
                  <div class="more-like-video">
                    <div class="row">
                      <div class="more-like-this-video">
                        <div>
                          <div
                            class="col-4 more-like-col"
                            v-for="moreLikevideos in moreLikevideoSort()"
                            :key="moreLikevideos.title"
                          >
                            <div class="more-like-this-box">
                              <img
                                class="more-like-this-img"
                                :src="
                                  require('@/assets/movieJson/img/' +
                                    moreLikevideos.poster)
                                "
                              />
                              <div class="more-like-this-content">
                                <div class="content-more-rating">
                                  {{ rating(moreLikevideos.imdbRating) }} %
                                  Match
                                </div>
                                <div class="content-more-contentRating-year">
                                  <span class="content-more-contentRating"
                                    >{{ moreLikevideos.contentRating }}+</span
                                  >
                                  <span class="content-more-year">{{
                                    moreLikevideos.year
                                  }}</span>
                                </div>
                                <div class="content-more-story mt-3">
                                  {{ shortStory(moreLikevideos.storyline) }}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="about-movie">
                        <span class="about-movie-main-text"
                          >About {{ title }}</span
                        >
                        <span class="about-movie-sec-text-head mt-3"
                          >Cast:
                          <span class="about-movie-sec-text">
                            {{ actors(actorsMovie) }}</span
                          ></span
                        >
                        <span class="about-movie-sec-text-head"
                          >Genres:
                          <span class="about-movie-sec-text"
                            >{{ genres(genresMovie) }}
                          </span></span
                        >
                        <span class="about-movie-sec-text-head"
                          >Maturity rating:
                          <span
                            class="about-movie-sec-text content-more-contentRating"
                          >
                            {{ contentRating }}+ </span
                          ><span class="about-movie-sec-text ml-3"
                            >Recomended for ages
                            {{ contentRating }} and up</span
                          ></span
                        >
                      </div>
                    </div>
                  </div>
                </div>


              </div>
    </div>

  </div>
</template>

<script>

import mainPoster from '@/assets/videos/mainVideo.json'
import top_movie from "@/assets/movieJson/json/top-rated-movies-01.json";

export default {
  data() {
    return {
      firstLoadPoster: false,
      showPoster: true,
      videoEvent: true,
      muteStatus: true,
      tabFocus: true,

      dropposterDetail: false,

      moreInfo: false,

      posterStock: [],
      moreLikevideoInlist: [],

      markRoute: '',
      randomMovie: 0,
    };
  },
  created() {
    if(this.$route.name !== this.markRoute){
      this.markRoute = this.$route.name
      this.randomMovie = Math.floor(Math.random() * 4); 
      console.log(this.randomMovie)
    }
    this.detectFocusOut();
    mainPoster.forEach(element => {
      if(element.title !== ''){
       this.posterStock.push(element)
      }
    });
  },

  methods: {
    startVideo(){
      this.$refs.videoRef.pause();
      setTimeout(() => {
          this.$refs.videoRefmore.play();
          this.dropposterDetail = true
        }, 2000);
    },
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

    closeVideodetail(){
      this.$refs.videoRef.play();
      this.$refs.videoRefmore.pause();
      this.dropposterDetail = false
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
    durationTime(duaration) {
      var hr = (~~(duaration.replace("PT", "").replace("M", "") / 60)).toString(
        10
      );
      var min = (duaration.replace("PT", "").replace("M", "") % 60).toString(
        10
      );
      var time = hr + "h " + min + "m";
      return time;
    },

    shortStory(story) {
      var shortsty = "";
      for (let count = 0; shortsty.length < 100; count++) {
        shortsty += story[count];
      }
      return shortsty + ".";
    },
    rating(rate) {
      var rating = rate * 10;
      return rating;
    },
    actors(actor) {
      var act = "";
      actor.forEach((element) => {
        act += element + ", ";
      });
      return act;
    },

    genres(genre) {
      var gen = "";
      genre.forEach((element) => {
        gen += element + " • ";
      });
      return gen;
    },
        moreLikevideoSort() {
      var genMovie = [];
      top_movie.forEach((element) => { {
        if(genMovie.length < 9){
          genMovie.push(element);
        }
        }
      });
      return genMovie;
    },
  },
  computed: {
    title(){
      return this.posterStock[this.randomMovie].title
    },
    topvideoImg() {
      if(this.posterStock[this.randomMovie].movieLogo != ''){
        return require(`@/assets/videos/${this.posterStock[this.randomMovie].title}/${this.posterStock[this.randomMovie].movieLogo}`)
      }
      else{
        return null
      }
    },
    topvideoTitle() {
      return this.posterStock[this.randomMovie].storyline
    },
    topvideo() {
      return require(`@/assets/videos/${this.posterStock[this.randomMovie].title}/${this.posterStock[this.randomMovie].posterUrl}`)
    },
    topvideoLogo(){
      return require(`@/assets/videos/${this.posterStock[this.randomMovie].title}/${this.posterStock[this.randomMovie].poster}`)
    },
    imdbRating(){
      return this.posterStock[this.randomMovie].imdbRating
    },
    duration(){
      return this.posterStock[this.randomMovie].duration
    },
    contentRating(){
      return this.posterStock[this.randomMovie].contentRating
    },
    year(){
      return this.posterStock[this.randomMovie].year
    },

    storyline(){
      return this.posterStock[this.randomMovie].storyline
    },

    actorsMovie(){
      return this.posterStock[this.randomMovie].actors
    },

    genresMovie(){
      return this.posterStock[this.randomMovie].genres
    },
topvideoContentRate(){
  return this.posterStock[this.randomMovie].contentRating
}
  },

  mounted() {
    setTimeout(() => {
      this.firstLoadPoster = true;
      this.showPoster = false;
    }, 2000);
  },
};
</script>

<style scoped>
.main-browse {
  z-index: 1;
  height: 47vw;
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

.top-main-motion-more{
  width: 100%;
}

.top-main-motion {
  width: 100%;
}
.show-detail{
  transform: scale(0) translate(10%, 10%);
  transition: 1s;
}
.show-more-detail {
  border-radius: 5px;
  transition: 0.5s;
  width: 950.6px;
  top: 50%;
  left: 50%;
  z-index: 5;
  transform: scale(1) translate(-50%, -47%);
  box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
  background-color: #181818;
  position: fixed;
  display: block;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}

.movieposter-more {
  position: absolute;
  width: inherit;
  height: 535px;
  object-fit: fill;
}

.more-detail-content {
  padding: 1vw 3vw;
  color: #fff;
  text-align: left;
}

.shadow-movie {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 1) 1%,
    rgba(24, 24, 24, 0)
  );
}

.menu-more-detail-full {
  display: flex;
  z-index: 5;
}

.menu-more-detail-full > div {
  font-size: 16px;
  margin-left: 0.6vw;
  z-index: 1;
}
.content-more-rating {
  color: #46d369;
}

.content-more-contentRating {
  width: fit-content;
  border: 1px solid gray;
  padding: 0 0.5vw 0 0.8vw;
}

.more-like-text {
  font-size: 24px;
}

.more-like {
  padding: 2vw 1vw;
}

.more-like-col {
  padding: 0.5vw;
  display: inline-block;
}

.more-like-this-box {
  border-radius: 5px;
  background-color: #2f2f2f;
  margin: 1vw 0;
}

.more-like-this-content {
  padding: 1.5vw 1vw;
}

.more-like-this-img {
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: 150px;
  object-fit: none;
  object-position: 50% 10%;
}

.content-more-contentRating-year {
  display: flex;
  align-items: center;
}

.content-more-contentRating-year span {
  margin-right: 1vw;
}


.about-movie {
  padding: 1.5vw 0.5vw;
}

.about-movie-main-text {
  font-size: 24px;
}

.about-movie-sec-text-head {
  font-weight: 100;
  line-height: 20px;
  display: block;
  color: #777;
  font-size: 14px;
  margin-top: 0.7vw;
}
.about-movie-sec-text {
  color: #fff;
  font-size: 14px;
}

.close-popup {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fff;
  font-size: 2vw;
  z-index: 1;
}



</style>
