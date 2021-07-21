<template>
  <div>
    <div class="wrap">
      <header><headerItem></headerItem></header>
      <main>
        <div class="main-wrap">
          <div class="top-wrap">
            <h1>Kento Tsuchida</h1>
            <p>
              This guy is a frontend enginner.<br />
              This guy makes you happy through enginnering.
            </p>
          </div>
          <div class="menu-wrap">
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Works</a></li>
              <li><a href="#">Skills</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </main>
      <footer><footerItem></footerItem></footer>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
ul {
  padding-left: 0;
}
li {
  list-style-type: none;
}
a {
  text-decoration: none;
}
</style>

<style lang="scss" scoped>
.wrap {
  padding: 0 30px;
}

.top-wrap {
  padding-top: 3rem;
  text-align: center;
  h1 {
    font-size: 4rem;
  }
  p {
    font-size: 1.3rem;
    margin: 0 auto;
  }
}
</style>
