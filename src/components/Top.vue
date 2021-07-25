<template>
  <div>
    <div class="wrap">
      <header><headerItem></headerItem></header>
      <main>
        <div class="main-wrap">
          <div class="main__top-wrap">
            <h1>Kento Tsuchida</h1>
            <p>
              This guy is a frontend enginner.<br />
              This guy makes you happy through enginnering.
            </p>
          </div>
          <div class="main__menu-wrap">
            <ul>
              <li>
                <router-link id="top" to="/">
                  Top
                </router-link>
              </li>
              <li>
                <router-link id="about" to="/about">
                  About
                </router-link>
              </li>
              <li>
                <router-link id="works" to="/works">
                  Works
                </router-link>
              </li>
              <li>
                <router-link id="skills" to="/skills">
                  Skills
                </router-link>
              </li>
              <li>
                <router-link id="contact" to="/contact">
                  Contact
                </router-link>
              </li>
            </ul>
          </div>
          <div class="icon">
            <div class="twitter"><i class="fab fa-twitter-square"></i></div>
            <div class="instagram"><i class="fab fa-instagram"></i></div>
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
  padding: 40px 30px;
}

.main {
  &__top {
    &-wrap {
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
  }
  &__menu {
    &-wrap {
      padding: 50px 0 20px 0;
      a {
        font-size: 5rem;
        display: inline-block;
        color: #ffffff;
        font-size: 36pt;
        letter-spacing: 4px;
        text-shadow: 2px 2px 1px #000000, -2px 2px 1px #000000,
          2px -2px 1px #000000, -2px -2px 1px #000000, 2px 0px 1px #000000,
          0px 2px 1px #000000, -2px 0px 1px #000000, 0px -2px 1px #000000;
      }
    }
  }
}
</style>
