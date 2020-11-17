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
            <div class="movie-group">
              <img
               
                class="movieposter"
                :src="require('@/assets/movieJson/img/' + movieLists.poster)"
              />
              <div class="movieinfo">
                  <div class="info-menu-group">
                      <div class="posi-icon">
                          <div class="icon-left">
                      <button class="btn icon-menu">
                      <i class="fas iconscale fa-play-circle info-menu-group-icon"></i>
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
                          <div class="icon-right">
                      <button class="btn icon-menu">
                          <i class="fas iconscale fa-chevron-circle-down"></i>
                      </button>
                          </div>
                      </div>
                          <div class="menu-more-detail">
                              <div class="content-more-match">{{movieLists.contentRating}}% Match</div>
                              <div class="content-more-duration">{{durationTime(movieLists.duration)}}</div>
                              <div class="content-more-contentRating">{{movieLists.contentRating}}+</div>
                              <div class="content-more-year">{{movieLists.year}}</div>
                          </div>
                          <div class="detail-genres">
                          <div class="menu-more-detail-inline" v-for="genres in movieLists.genres" :key="genres">
                              <div class="content-more-genres">{{genres}}<span> &bull;</span> </div>
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
      moreInfo: false,
      count: 0,
    };
  },

  computed: {
      },

  methods: {
      durationTime(duaration){
          var hr = (~~(duaration.replace("PT", "").replace("M", "") / 60)).toString(10)
          var min = (duaration.replace("PT", "").replace("M", "") % 60).toString(10)
          var time = hr+"h "+min+"m"
          return time
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
        if(fastChange === 1){
            if(pastHover !== isHover){
                pastHover.classList.remove("showinfo")
            }
            event.target.nextSibling.classList.add("showinfo");
            pastHover = isHover;
        }
        else{
            pastHover = isHover;
            document.querySelector(".top-main-motion").pause();
            event.target.nextSibling.classList.add("showinfo");
        fastChange = 1
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
      isHover.classList.remove("showinfo")
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
  background-color: #222;
  width: 15.5vw;
  border-radius: 5px;
  transition: 0.3s;
  transform: scale(1);
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
}

.movieinfo:hover {
  display: block;
}

.showinfo {
  display: block;
}

.icon-menu{
    color: white;
    width: 2.3vw;
    font-size: 1.5vw;
}


.icon-left{
    display: flex;
    width: 12vw;
}

.btn{
    margin: 0;
    padding: 0 0 0 0;
}

.posi-icon{
    display: flex;
    justify-content: space-between;
}

.menu-more-detail{
    display: flex;
    margin-left: .5vw;
    text-align: left;
    font-size: .55vw;
    padding: .1vw 0 0 0;
}

.menu-more-detail > div{
    margin-right: .3vw;
}

.content-more-match{
    color: #46d369;
}

.content-more-contentRating{
    border: 1px solid gray;
    padding: 0 .4vw;
}

.menu-more-detail-inline{
    display: inline-block;
    font-size: .55vw;
}

.detail-genres{
    text-align: left;
    padding: 0 .4vw;
}

.content-more-genres span{
    font-size: 1vw;
}
</style>