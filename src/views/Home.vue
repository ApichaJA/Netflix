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
        <div class="my-list-cal" v-if="moreInfo">
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
                      <button class="btn icon-menu">
                      <i class="fas fa-play-circle info-menu-group-icon"></i>
                      </button>
                      <button class="btn icon-menu">
                      <i class="far fa-check-circle info-menu-group-icon"></i>
                      </button>
                      <button class="btn icon-menu">
                          <i class="fas fa-thumbs-up"></i>
                      </button>
                      <button class="btn icon-menu">
                          <i class="fas fa-thumbs-down"></i>
                      </button>
                      <button class="btn icon-menu">
                          <i class="fas fa-chevron-circle-down"></i>
                      </button>
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
      moreInfo: true,
      count: 0,
    };
  },

  computed: {},

  methods: {
    showmore: () => {
      if (this.moreInfo === true) {
        this.moreInfo = false;
        console.log(this.moreInfo);
      } else this.moreInfo = false;
      console.log(this.moreInfo);
    },
  },

  beforeMount() {
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
        event.target.nextSibling.addEventListener("click", function () {
        })
        isHover = event.target.nextSibling;
        if(fastChange === 1){
            pastHover.classList.remove("showinfo")
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
  display: block;
  color: #fff;
  padding: 1vw;
}
.showinfo {
  display: block !important;
}

.icon-menu{
    width: fit-content;
    color: white;
    transform: scale(2);
    margin-right: .5vw;
}

.info-menu-group-icon{
}

.info-menu-group{
    display: flex;
}
</style>