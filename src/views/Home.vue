<template>
  <div>
    <mainBrowse />
    <div class="main-home">
      <div class="movie-content">
        <div class="list-name">
          <span class="content-list">My List</span>
          <div class="explore-all">
            <span class="more-link">Explore All</span>
            <span class="more-link-run"
              ><i class="fas fa-chevron-right"></i
            ></span>
          </div>
        </div>
        <div class="my-list-cal">
          <div
            v-for="movieList in randommovie()"
            :key="movieList.title"
            class="video-content-box"
          >
            <div
              :class="{
                'show-more-detail': moreInfo === movieList.title,
                'movie-group': moreInfo === '',
              }"
            >
              <button
                class="btn close-popup"
                v-on:click="showmoredetailVideo('')"
                v-if="moreInfo === movieList.title"
              >
                <i class="far fa-times-circle"></i>
              </button>
              <img
                :class="{
                  'movieposter-more': moreInfo === movieList.title,
                  movieposter: moreInfo !== movieList.title,
                }"
                :src="require('@/assets/movieJson/img/' + movieList.poster)"
              />
              <div class="movieinfo">
                <div class="info-menu-group">
                  <div class="posi-icon">
                    <div class="icon-left">
                      <button class="btn icon-menu">
                        <i
                          class="fas iconscale fa-play-circle info-menu-group-icon"
                        ></i>
                      </button>
                      <button class="btn icon-menu">
                        <i class="far fa-check-circle info-menu-group-icon"></i>
                      </button>
                      <button class="btn icon-menu">
                        <i class="fas iconscale fa-thumbs-up"></i>
                      </button>
                      <button class="btn icon-menu">
                        <i class="fas iconscale fa-thumbs-down"></i>
                      </button>
                    </div>
                    <div
                      class="icon-right"
                      v-on:click="showmoredetailVideo(movieList.title)"
                    >
                      <button class="btn icon-menu">
                        <i class="fas iconscale fa-chevron-circle-down"></i>
                      </button>
                    </div>
                  </div>
                  <div class="menu-more-detail">
                    <div class="content-more-rating">
                      {{ rating(movieList.imdbRating) }}% Match
                    </div>
                    <div class="content-more-duration">
                      {{ durationTime(movieList.duration) }}
                    </div>
                    <div class="content-more-contentRating">
                      {{ movieList.contentRating }}+
                    </div>
                    <div class="content-more-year">{{ movieList.year }}</div>
                  </div>
                  <div class="content-more-genres">
                    {{ genres(movieList.genres) }}
                  </div>
                </div>
              </div>
              <div
                class="more-detail-content"
                v-if="moreInfo === movieList.title"
              >
                <div
                  class="shadow-movie"
                  v-if="moreInfo === movieList.title"
                ></div>
                <div class="menu-more-detail-full">
                  <div class="content-more-rating">
                    {{ rating(movieList.imdbRating) }}% Match
                  </div>
                  <div class="content-more-duration">
                    {{ durationTime(movieList.duration) }}
                  </div>
                  <div class="content-more-contentRating">
                    {{ movieList.contentRating }}+
                  </div>
                  <div class="content-more-year">{{ movieList.year }}</div>
                </div>
                <div class="row p-2">
                  <div class="col-8 mt-4">
                    {{ movieList.storyline }}
                  </div>
                  <div class="col-4">
                    <div class="menu-more-detail-inline">
                      <span style="color: #777">Cast: </span
                      >{{ actors(movieList.actors) }}
                    </div>
                    <div style="display: block" class="mt-3"></div>

                    <div class="menu-more-detail-inline">
                      <span style="color: #777">Genres: </span
                      >{{ genres(movieList.genres) }}
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
                            v-for="moreLikevideos in moreLikevideo"
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
                          >About {{ movieList.title }}</span
                        >
                        <span class="about-movie-sec-text-head mt-3"
                          >Cast:
                          <span class="about-movie-sec-text">
                            {{ actors(movieList.actors) }}</span
                          ></span
                        >
                        <span class="about-movie-sec-text-head"
                          >Genres:
                          <span class="about-movie-sec-text">{{
                            genres(movieList.genres)
                          }}</span></span
                        >
                        <span class="about-movie-sec-text-head"
                          >Maturity rating:
                          <span
                            class="about-movie-sec-text content-more-contentRating"
                          >
                            {{ movieList.contentRating }}+ </span
                          ><span class="about-movie-sec-text ml-3"
                            >Recomended for ages
                            {{ movieList.contentRating }} and up</span
                          ></span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mainBrowse from "@/components/mainBrowse";
import top_movie from "@/assets/movieJson/json/top-rated-movies-01.json";

export default {
  components: {
    mainBrowse,
  },
  data() {
    return {
      movieStock: [{
        "actionMovieList" : [],
        "crimeMovieList" : [{}],
        "dramaMovieList" : [{}],
        "biographyMovieList" : [{}],
        "historyMovieList" : [{}],
        "adventureMovieList" : [{}],
        "fantasyMovieList" : [{}],
        "comedyMovieList" : [{}],
        "romanceMovieList" : [{}],
        "sciFiMovieList" : [{}],
      }],
      //actionMovieList: [],
      //crimeMovieList: [],
      //dramaMovieList: [],
      //biographyMovieList: [],
      //historyMovieList: [],
      //adventureMovieList: [],
      //fantasyMovieList: [],
      //comedyMovieList: [],
      //romanceMovieList: [],
      //sciFiMovieList: [],
      
      moreLikevideo: [],
      moreInfo: "",
      count: 0,
    };
  },

  computed: {},

  methods: {
      randommovie(){
          return this.moreLikevideo
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

    showmoredetailVideo(more) {
      this.moreInfo = more;
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
  },

  created() {
    top_movie.forEach((element) => {
        if (this.movieStock[0]["actionMovieList"].length <= 5) {
            if (element.genres.indexOf("Action") > -1) {
                this.movieStock[0]["actionMovieList"].push(element);
        console.log(this.movieStock[0]["actionMovieList"])
        }
      }
    //    else if (this.crimeMovieList.length <= 5) {
    //        if(element.genres.indexOf('Crime') > -1){
    //            this.crimeMovieList.push(element);
    //        }
    //    }
    //    else if (this.dramaMovieList.length <= 5) {
    //        if(element.genres.indexOf('Drama') > -1){
    //            this.dramaMovieList.push(element);
    //        }
    //    }
    //    else if (this.biographyMovieList.length <= 5) {
    //        if(element.genres.indexOf('Biography') > -1){
    //            this.biographyMovieList.push(element);
    //        }
    //    }
    //    else if (this.historyMovieList.length <= 5) {
    //        if(element.genres.indexOf('History') > -1){
    //            this.historyMovieList.push(element);
    //        }
    //    }
    //    else if (this.adventureMovieList.length <= 5) {
    //        if(element.genres.indexOf('Adventure') > -1){
    //            this.adventureMovieList.push(element);
    //        }
    //    }
    //    else if (this.fantasyMovieList.length <= 5) {
    //        if(element.genres.indexOf('Fantasy') > -1){
    //            this.fantasyMovieList.push(element);
    //        }
    //    }
    //    else if (this.comedyMovieList.length <= 5) {
    //        if(element.genres.indexOf('Comedy') > -1){
    //            this.comedyMovieList.push(element);
    //        }
    //    }
    //    else if (this.romanceMovieList.length <= 5) {
    //        if(element.genres.indexOf('Romance') > -1){
    //            this.romanceMovieList.push(element);
    //        }
    //    }
    //    else if (this.sciFiMovieList.length <= 5) {
    //        if(element.genres.indexOf('Sci-Fi') > -1){
    //            this.sciFiMovieList.push(element);
    //        }
    //     }

      if (this.moreLikevideo.length < 9) {
        this.moreLikevideo.push(element);
      }
    });
  },

  mounted() {
    var onOver = document.querySelector(".my-list-cal");
    var isHover = "";
    var pastHover = "";
    var fastChange = 0;
    //var showmoreStatus = false;

    onOver.addEventListener("click", function () {
      fastChange = 0;
    });
    onOver.addEventListener("mouseover", function (event) {
      //WanaFix??
      isHover = event.target.nextSibling;
      if (
        fastChange === 1 &&
        !event.target.classList.contains("movieposter-more")
      ) {
        if (pastHover !== isHover) {
          pastHover.classList.remove("showinfo");
        }
        pastHover = isHover;
        event.target.nextSibling.classList.add("showinfo");
      } else if (!event.target.classList.contains("movieposter-more")) {
        pastHover = isHover;
        document.querySelector(".top-main-motion").pause();
        event.target.nextSibling.classList.add("showinfo");
        fastChange = 1;
      } else {
        document.querySelector(".top-main-motion").pause();
      }
    });
    onOver.addEventListener("mouseleave", function () {
      setTimeout(() => {
        document.querySelector(".poster").classList.add("outposter");
        if (document.querySelector(".top-main-motion") != "ended") {
          document.querySelector(".top-main-motion").play();
        }
      }, 2000);
      document.querySelector(".poster").classList.remove("outposter");
      isHover.classList.remove("showinfo");
      pastHover = isHover;
      fastChange = 0;
    });
  },
};
</script>

<style scoped>
.main-home {
  z-index: 2;
  background-image: linear-gradient(
    to top,
    rgba(20, 20, 20, 1) 30%,
    rgba(0, 0, 0, 0)
  );
  position: absolute;
  padding: 0 3.1vw;
  top: 43.7vw;
  left: 0;
  margin-bottom: 10vw;
}

.movie-content {
  margin-bottom: 2vw;
}

.list-name {
  display: flex;
  justify-content: left;
  margin-bottom: 0.8vw;
}

.content-list {
  font-size: 1.4vw;
  color: #e5e5e5;
  line-height: 1.25vw;
  cursor: pointer;
  transition: color 0.5s;
}

.content-list:hover {
  color: #fff !important;
  transition: color 0.5s;
}

.explore-all {
  cursor: pointer;
}

.more-link {
  font-size: 0.9vw !important;
  color: #fff !important;
  position: absolute;
  margin-left: 0vw;
  opacity: 0;
  transition: 0.7s;
}

.list-name:hover .more-link {
  font-size: 0.9vw;
  margin-left: 1vw;
  opacity: 1;
  transition: 0.7s;
}

.more-link-run {
  font-size: 0.9vw !important;
  color: #fff !important;
  margin-left: 0vw;
  opacity: 0;
  transition: 0.4s;
}

.list-name:hover .more-link-run {
  font-size: 0.9vw;
  margin-left: 6vw;
  opacity: 1;
  transition: 0.4s;
}

.my-list-cal {
  display: flex;
}

.video-content-box {
  margin: 0.1vw;
  width: 15.5vw;
  height: 8.5vw;
  background-color: #222;
  border-radius: 5px;
}

.video-content-box:hover {
  z-index: 3;
}

.movieposter {
  width: 15.5vw;
  height: 8.5vw;
  object-fit: cover;
  border-radius: 5px;
}

.movie-group {
  transform: translateX(0) translateY(0);
  background-color: #222;
  width: 15.5vw;
  border-radius: 5px;
  transition: 0.3s;
}

.movieposter-more {
  width: inherit;
  height: 535px;
  object-fit: fill;
}

.movie-group:hover {
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  );
  transition: 0.3s;
  transform: scale(1.5);
}

.movie-group:hover .movieposter {
  border-radius: 5px 5px 0 0;
}

.movieinfo {
  display: none;
  color: #fff;
  padding: 1vw;
  background-color: #222;
}

.movieinfo:hover {
  display: block;
}

.showinfo {
  display: block;
}

.icon-menu {
  color: white;
  width: 2.3vw;
  font-size: 1.5vw;
}

.icon-left {
  display: flex;
  width: 12vw;
}

.btn {
  margin: 0;
  padding: 0 0 0 0;
}

.posi-icon {
  display: flex;
  justify-content: space-between;
}

.menu-more-detail {
  display: flex;
  margin-left: 0.5vw;
  text-align: left;
  font-size: 0.55vw;
  padding: 0.1vw 0 0 0;
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

.menu-more-detail > div {
  margin-right: 0.3vw;
}

.content-more-rating {
  color: #46d369;
}

.content-more-contentRating {
  width: fit-content;
  border: 1px solid gray;
  padding: 0 0.5vw 0 0.8vw;
}

.menu-more-detail-inline {
  display: inline-block;
  font-size: 14px;
}

.detail-genres {
  text-align: left;
  padding: 0 0.4vw;
}

.content-more-genres {
  padding: 0.2vw 0.5vw;
  text-align: left;
  font-size: 0.55vw;
}

.show-more-detail {
  border-radius: 5px;
  transition: 0.5s;
  width: 950.6px;
  left: 50%;
  transform: translateX(-50%) translateY(calc(-40vw - 4.5em));
  box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
  background-color: #181818;
  position: fixed;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}

.close-popup {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fff;
  font-size: 2vw;
  z-index: 1;
}

.more-detail-content {
  padding: 1vw 3vw;
  color: #fff;
  text-align: left;
}
.shadow-movie {
  position: absolute;
  top: -10vw;
  left: 0;
  width: 100%;
  height: 100%;
  /*background: linear-gradient(to top, #181818, transparent 50%);*/
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

.content-more-story {
  color: #d2d2d2;
  font-size: 14px;
  line-height: 20px;
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
</style>