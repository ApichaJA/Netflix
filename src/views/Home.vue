<template>
<div>
    <mainBrowse />
    <div class="main-home">
        <div class="movie-content">
            <div class="list-name">
                <span class="content-list">My List</span>
                <div class="explore-all">
                    <span class="more-link">Explore All</span>
                    <span class="more-link-run"><i class="fas fa-chevron-right"></i></span>
                </div>
            </div>
            <div class="my-list-cal">
                <div class="video-content-box"></div>
                <div class="video-content-box"></div>
                <div class="video-content-box"></div>
                <div class="video-content-box"></div>
                <div class="video-content-box"></div>
                <div class="video-content-box"></div>
            </div>
        </div>
        <div class="movie-content">
            <div class="list-name">
                <span class="content-list">Romantic Korean TV Shows</span>
                <div class="explore-all">
                    <span class="more-link">Explore All</span>
                    <span class="more-link-run"><i class="fas fa-chevron-right"></i></span>
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
export default {
    components: {
        mainBrowse
    },
    data() {
        return {}
    },

    methods: {

    },

    mounted() {
        var test = document.querySelector('.my-list-cal')
        test.addEventListener('mouseover', function () {
            document.querySelector(".top-main-motion").pause();
        });
        test.addEventListener('mouseleave', function () {
            setTimeout(() => {
                document.querySelector(".poster").classList.add("outposter");
                document.querySelector(".top-main-motion").play();
            }, 2000)
            document.querySelector(".poster").classList.remove("outposter");
        });
    },
}
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
    margin-bottom: .8vw;
}

.content-list {
    font-size: 1.4vw;
    color: #e5e5e5;
    line-height: 1.25vw;
    cursor: pointer;
    transition: color .5s;
}

.content-list:hover {
    color: #fff !important;
    transition: color .5s;
}

.explore-all {
    cursor: pointer;
}

.more-link {
    font-size: .9vw !important;
    color: #fff !important;
    position: absolute;
    margin-left: 0vw;
    opacity: 0;
    transition: .7s;
}

.list-name:hover .more-link {
    font-size: .9vw;
    margin-left: 1vw;
    opacity: 1;
    transition: .7s;
}

.more-link-run {
    font-size: .9vw !important;
    color: #fff !important;
    margin-left: 0vw;
    opacity: 0;
    transition: .4s;
}

.list-name:hover .more-link-run {
    font-size: .9vw;
    margin-left: 6vw;
    opacity: 1;
    transition: .4s;
}

.my-list-cal {
    display: flex;
}

.video-content-box {
    width: 15.5vw;
    height: 8.5vw;
    margin: .1vw;
    background-color: #fff;
    border-radius: 5px;
}
</style>
