<template>
  <div>
    <div
      class="wrap"
      :class="{
        nomal: neverHover,
        top: hoverTop,
        about: hoverAbout,
        works: hoverWorks,
        skills: hoverSkills,
        contact: hoverContact,
      }"
    >
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
              <li v-on:mouseover="overTop" v-on:mouseleave="mouseLeaveAction">
                <router-link id="top" to="/">
                  Top
                </router-link>
              </li>
              <li v-on:mouseover="overAbout" v-on:mouseleave="mouseLeaveAction">
                <router-link id="about" to="/about">
                  About
                </router-link>
              </li>
              <li v-on:mouseover="overWorks" v-on:mouseleave="mouseLeaveAction">
                <router-link id="works" to="/works">
                  Works
                </router-link>
              </li>
              <li
                v-on:mouseover="overSkills"
                v-on:mouseleave="mouseLeaveAction"
              >
                <router-link id="skills" to="/skills">
                  Skills
                </router-link>
              </li>
              <li
                v-on:mouseover="overContact"
                v-on:mouseleave="mouseLeaveAction"
              >
                <router-link id="contact" to="/contact">
                  Contact
                </router-link>
              </li>
            </ul>
          </div>
          <div class="icon">
            <a class="icon__twitter" href="#"
              ><i class="fab fa-twitter-square fa-3x"></i
            ></a>
            <a class="icon__instagram" href="#"
              ><i class="fab fa-instagram fa-3x"></i
            ></a>
          </div>
        </div>
      </main>
      <footer><footerItem></footerItem></footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      neverHover: true,
      hoverTop: false,
      hoverAbout: false,
      hoverWorks: false,
      hoverSkills: false,
      hoverContact: false,
    };
  },
  methods: {
    reset() {
        this.neverHover = false
        this.hoverTop = false
        this.hoverAbout = false
        this.hoverWorks = false
        this.hoverSkills = false
       this.hoverContact = false
    },
    overTop() {
      this.reset();
      this.hoverTop = true;
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
    overContact() {
      this.reset();
      this.hoverContact = true;
    },
    mouseLeaveAction() {
      this.reset();
      this.neverHover = true;
    },
  },
};
</script>

<style lang="scss">
body {
  background-color: rgb(255, 255, 255);
}
.wrap {
  padding: 0 30px;
  font-family: "Consolas";
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
        padding: 15px 0;
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

.icon {
  display: flex;
  &__twitter {
    padding-right: 2em;
    color: black;
  }
  &__instagram {
    color: black;
  }
}

.nomal {
  background-color: #fff;
  transition: .5s;
}
.top {
  background-color: red;
  transition: .5s;
}
.about {
  background-color: green;
  transition: .5s;
}
.works {
  background-color: blue;
  transition: .5s;
}
.skills {
  background-color: yellow;
  transition: .5s;
}
.contact {
  background-color: purple;
  transition: .5s;
}
</style>
