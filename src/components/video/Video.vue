<template>
  <youtube
    player-width="1080px"
    player-height="720px"
    :video-id="videoId"
    @ready="ready"
    @playing="playing"
  ></youtube>
</template>

<script>
import Vue from "vue";
import VueYouTubeEmbed from "vue-youtube-embed";
Vue.use(VueYouTubeEmbed);
export default {
  props: ["videoId"],
  data: {},
  methods: {
    ready(event) {
      this.player = event.target;
    },
    playing(event) {},
    change() {},
    stop() {
      this.player.stopVideo();
    },
    pause() {
      this.player.pauseVideo();
    }
  }
};
</script>

<style >
</style>