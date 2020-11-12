<template>
<div>
    <div class="main">
        <h1 style="color: #fff" :class="{'red' : showcolor % 2 === 0}" v-on:click="clickeds()">{{clicked}}</h1>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            showcolor: 1,
            needShow: true,
            clicked: 1
        }
    },

    methods: {
        clickeds: function () {
            return this.clicked += 1
        }
    },

    watch: {
        clicked() {
            this.showcolor += 1
            console.log(this.showcolor)
        }
    }
}
</script>

<style scoped>
.main {
    padding-top: 20vw;
}

.red {
    color: red !important;
}
</style>
