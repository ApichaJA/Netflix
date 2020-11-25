<template>
<div class="container">
    <div class="group-social">
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-twitter-square"></i>
        <i class="fab fa-youtube"></i>
        </div>
    <div class="group-text">
        <div class="box-text">
            <span class="text">Audio and Subtitle</span>
            <span class="text">Media Center</span>
            <span class="text">Privacy</span>
            <span class="text">Contact Us</span>
        </div>
        <div class="box-text">
            <span class="text">Audiio DDescription</span>
            <span class="text">Investor Relatioins</span>
            <span class="text">Legal Notices</span>
        </div>
        <div class="box-text">
            <span class="text">Help Center</span>
            <span class="text">Jobs</span>
            <span class="text">Privacy</span>
            <span class="text">Cookie Preferences</span>
        </div>
         <div class="box-text">
            <span class="text">Gift Cards</span>
            <span class="text">Terms of Use</span>
            <span class="text">Corporate Infomation</span>
        </div>
    </div>

<div class="service-group">
    <button class="btn text">Service Code</button>
    <span class="text-cd">@2020 IT.KMITL.AC.TH</span>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .container{
        color: grey;
        text-align: left;
        margin-top: -4vw;
    }

    .group-text{
        display: flex;
        justify-content: center;
    }
    .fab{
        margin-left: 1vw;
    }
    .group-social{
        padding: 0 1vw;
        font-size: 2vw;
        display: flex;
        cursor: pointer;
        color: gray;
    }
.box-text{
    margin: 0 1vw;
    width: 100%;
}
    .text{
        display: block;
        font-size: .65vw;
        cursor: pointer;
        margin: .8vw 1vw;
    }
    .text:hover{
        text-decoration: underline;
    }

    .service-group{
        padding: 0 1vw;
    }

    button{
        border-radius: 0;
        color: gray;
        border: 1px solid gray;
        font-size: .65vw;
        width: fit-content;
        padding: .35vw .5vw;
    }
        button:hover{
        text-decoration: none!important;
        color: #fff;
    }
        .text-cd{
        display: block;
        font-size: .5vw;
        cursor: pointer;
        margin: 1vw;
    }
</style>
