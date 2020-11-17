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
            v-for="movieLists in movieList"
            :key="movieLists.title"
            class="video-content-box"
          >
            <div
              :class="{
                'show-more-detail': moreInfo === movieLists.title,
                'movie-group': moreInfo === '',
              }"
            >
            <button class="btn close-popup" v-on:click="showmoredetailVideo('')" v-if="moreInfo === movieLists.title">
                <i class="far fa-times-circle"></i>
            </button>
              <img
                :class="{'movieposter-more': moreInfo === movieLists.title, 'movieposter' : moreInfo !== movieLists.title}"
                :src="require('@/assets/movieJson/img/' + movieLists.poster)"
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
                      v-on:click="showmoredetailVideo(movieLists.title)"
                    >
                      <button class="btn icon-menu">
                        <i class="fas iconscale fa-chevron-circle-down"></i>
                      </button>
                    </div>
                  </div>
                  <div class="menu-more-detail">
                    <div class="content-more-match">
                      {{ movieLists.contentRating }}% Match
                    </div>
                    <div class="content-more-duration">
                      {{ durationTime(movieLists.duration) }}
                    </div>
                    <div class="content-more-contentRating">
                      {{ movieLists.contentRating }}+
                    </div>
                    <div class="content-more-year">{{ movieLists.year }}</div>
                  </div>
                  <div class="detail-genres">
                    <div
                      class="menu-more-detail-inline"
                      v-for="genres in movieLists.genres"
                      :key="genres"
                    >
                      <div class="content-more-genres">
                        {{ genres }}<span> &bull;</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <div class="more-detail-content" v-if="moreInfo === movieLists.title">
              <div class="shadow-movie" v-if="moreInfo === movieLists.title"></div>
                <div class="menu-more-detail-full">
                    <div class="content-more-match">
                      {{ movieLists.contentRating }}% Match
                    </div>
                    <div class="content-more-duration">
                      {{ durationTime(movieLists.duration) }}
                    </div>
                    <div class="content-more-contentRating">
                      {{ movieLists.contentRating }}+
                    </div>
                    <div class="content-more-year">{{ movieLists.year }}</div>
                  </div>
                  <div class="row p-2">
                      <div class="col-8 mt-4">
                          {{movieLists.storyline}}
                      </div>
                      <div class="col-4">
                          <span style="color:#777;">Cast: </span> 
                        <div
                      class="menu-more-detail-inline" style="font-size: 14px;"
                      v-for="actors in movieLists.actors"
                      :key="actors"
                    >
                        {{ actors }}<span>,</span>
                    </div>
                    <div style="display: block" class="mt-3"></div>
                    <span style="color:#777;">Genres: </span> 
                      <div
                      class="menu-more-detail-inline" style="font-size: 14px;"
                      v-for="genres in movieLists.genres"
                      :key="genres"
                    >
                         {{ genres }} <span>,</span>
                    </div>
                      </div>
                  </div>
            </div>

            </div>
          </div>
        </div>
      </div>
      <div class="movie-content">
        <div class="list-name">
          <span class="content-list">Romantic Korean TV Shows</span>
          <div class="explore-all">
            <span class="more-link">Explore All</span>
            <span class="more-link-run"
              ><i class="fas fa-chevron-right"></i
            ></span>
          </div>
        </div>
        <div class="my-list-cal">
          <div class="video-content-box"></div>
          <div class="video-content-box"></div>
          <div class="video-content-box"></div>
          <div class="video-content-box"></div>
          <div class="video-content-box"></div>
          <div ref="modal" class="video-content-box"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mainBrowse from "@/components/mainBrowse";
import data from "@/assets/movieJson/json/top-rated-movies-01.json";

export default {
  components: {
    mainBrowse,
  },
  data() {
    return {
      movieList: [],
      moreInfo: "",
      count: 0,
    };
  },

  computed: {},

  methods: {
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
  },

  created() {
    data.forEach((element) => {
      if (this.movieList.length <= 5) {
        this.movieList.push(element);
      }
    });
  },

  mounted() {
    var onOver = document.querySelector(".my-list-cal");
    var isHover = "";
    var pastHover = "";
    var fastChange = 0;
    onOver.addEventListener("mouseover", function (event) {
      //WanaFix??
      isHover = event.target.nextSibling;
      if (fastChange === 1 && !event.target.classList.contains('movieposter-more')) {
        if (pastHover !== isHover) {
          pastHover.classList.remove("showinfo");
        }
        event.target.nextSibling.classList.add("showinfo");
        pastHover = isHover;
      } else if(!event.target.classList.contains('movieposter-more')) {
        pastHover = isHover;
        document.querySelector(".top-main-motion").pause();
        event.target.nextSibling.classList.add("showinfo");
        fastChange = 1;
      }
      else{
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
  position: absolute;
  padding: 0 3.1vw;
  top: 43.7vw;
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
  object-fit: cover;
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

.menu-more-detail-full{
    display: flex;
    z-index: 5;
}

.menu-more-detail-full > div{
    font-size: .95vw;
    margin-left: 0.6vw;
    z-index: 1;
}

.menu-more-detail > div {
  margin-right: 0.3vw;
}

.content-more-match {
  color: #46d369;
}

.content-more-contentRating {
  border: 1px solid gray;
  padding: 0 0.4vw;
}

.menu-more-detail-inline {
  display: inline-block;
  font-size: 0.55vw;
}

.detail-genres {
  text-align: left;
  padding: 0 0.4vw;
}

.content-more-genres span {
  font-size: 1vw;
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
}

.close-popup{
    position: absolute;
    top: 10px;
    right: 10px;
    color: #fff;
    font-size: 2vw;
    z-index: 1;
}

.more-detail-content{
    padding: 1vw 2vw;
    color: #fff;
    text-align: left;
}
.shadow-movie{
    position: absolute;
    top: -10vw;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top,#181818,transparent 50%);
}
</style>