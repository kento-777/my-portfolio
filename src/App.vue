<template>
  <div id="app">
    <h1>じゃんけんゲーム</h1>
    <div class="innner">
      <game scores="scores"></game>
      <score scores="scores"></score>
    </div>
  </div>
</template>

<script>
import Game from './compornents/Game.vue';
import Score from "./compornents/Score.vue";
import Storage from './util/Storage.js';
let storage = new Storage();
export default {
  name: 'app',
  data() {
    return {
      scores: storage.getData('scores')
    }
  }
};
</script>

<style>
</style>
