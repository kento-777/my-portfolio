<template>
  <div
    class="wrap"
    :class="{
      nomal: neverHover,
      about: hoverAbout,
      works: hoverWorks,
      skills: hoverSkills,
    }"
  >
    <header><headerItem></headerItem></header>
    <main>
      <div class="main-wrap">
        <div class="main__top-wrap">
          <h1>Kento Tsuchida</h1>
          <p>
            <vue-typer  :text="text1" repeat=0></vue-typer> <br>
            <vue-typer :text="text2" repeat=0 preTypeDelay=2000></vue-typer>
          </p>
        </div>
        <div class="main__menu-wrap">
          <ul>
            <li>
              <router-link id="about" to="/about">
                <h2
                  v-on:mouseover="overAbout"
                  v-on:mouseleave="mouseLeaveAction"
                >
                  About
                </h2>
              </router-link>
            </li>
            <li>
              <router-link id="works" to="/works">
                <h2
                  v-on:mouseover="overWorks"
                  v-on:mouseleave="mouseLeaveAction"
                >
                  Works
                </h2>
              </router-link>
            </li>
            <li>
              <router-link id="skills" to="/skills">
                <h2
                  v-on:mouseover="overSkills"
                  v-on:mouseleave="mouseLeaveAction"
                >
                  Skills
                </h2>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </main>
    <footer><footerItem></footerItem></footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text1: "This guy is a frontend enginner.",
      text2: "This guy makes you happy through enginnering.",
      neverHover: true,
      hoverAbout: false,
      hoverWorks: false,
      hoverSkills: false,

    };
  },
  methods: {
    reset() {
      this.neverHover = false;
      this.hoverAbout = false;
      this.hoverWorks = false;
      this.hoverSkills = false;
    },
    overAbout() {
      this.reset();
      this.hoverAbout = true;
    },
    overWorks() {
      this.reset();
      this.hoverWorks = true;
    },
    overSkills() {
      this.reset();
      this.hoverSkills = true;
    },
    mouseLeaveAction() {
      this.reset();
      this.neverHover = true;
    },
  },
};
</script>

<style lang="scss">
html {
  height: 100%;
  position: relative;
}
body {
  background-color: rgb(255, 255, 255);
  height: 100%;
  margin: 0;
}
.wrap {
  padding: 0 30px;
  font-family: "Consolas";
  height: 100%;
}

ul {
  padding-left: 0;
}
li {
  list-style-type: none;
}
a {
  text-decoration: none;
}
h1 {
  font-size: 50px;
}
</style>

<style lang="scss" scoped>
.main {
  &__top {
    &-wrap {
      padding-top: 3rem;
      text-align: center;
      h1 {
        font-size: 5rem;
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
      h2 {
        margin: 0;
        padding: 0.5em 0;
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

.footer {
  bottom: 0;
}
.nomal {
  background-color: #fff;
  transition: 0.3s;
}
.about {
  background-color: rgb(195, 255, 200);
  transition: 0.3s;
}
.works {
  background-color: rgb(180, 180, 255);
  transition: 0.3s;
}
.skills {
  background-color: rgb(255, 255, 190);
  transition: 0.3s;
}
</style>
