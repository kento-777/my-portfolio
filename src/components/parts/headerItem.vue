<template>
  <div id="app">
    <slide right noOverlay>
      <router-link id="top" to="/">
        <span>Top</span>
      </router-link>
      <router-link id="about" to="/about">
        <span>About</span>
      </router-link>
      <router-link id="works" to="/works">
        <span>Works</span>
      </router-link>
      <router-link id="skills" to="/skills">
        <span>Skills</span>
      </router-link>
    </slide>
    <div id="page-wrap"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#app{
  .bm-burger-button {
    position: fixed;
  }
}
</style>

