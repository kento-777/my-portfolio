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
          <h1 class="fade">Kento Tsuchida</h1>
          <p>
            <vue-typer :text= "text1" :repeat = '0'></vue-typer> <br />
            <vue-typer
              :text= "text2"
              :repeat= '0'
              :preTypeDelay= '2000'
            ></vue-typer>
          </p>
        </div>
        <div class="main__menu-wrap">
          <ul v-for="item in items" :key="item.id">
            <li>
              <router-link :id="item.id" :to="item.to">
                <h2
                  :class="item.class"
                  v-on:mouseover="item.mouseover()"
                  v-on:mouseleave="mouseLeaveAction"
                  ontouchstart=""
                >
                  {{ item.id }}
                </h2>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </main>
    <footerItem></footerItem>
  </div>
</template>

<script lang="ts">
import { TopDataType } from "../types/data";
export default {
  data(): TopDataType {
    return {
      text1: "This guy is a frontend engineer.",
      text2: "This guy makes you happy through engineering.",
      neverHover: true,
      hoverAbout: false,
      hoverWorks: false,
      hoverSkills: false,
      items: [
        {
          id: "about",
          to: "/about",
          class: "link__about",
          //@ts-ignore 
          mouseover: this.overAbout,
        },
        {
          id: "works",
          to: "/works",
          class: "link__works",
          //@ts-ignore
          mouseover: this.overWorks,
        },
        {
          id: "skills",
          to: "/skills",
          class: "link__skills",
          //@ts-ignore
          mouseover: this.overSkills,
        },
      ],
    };
  },
  methods: {
    reset(): void {
      //@ts-ignore
      this.neverHover = false;
      //@ts-ignore
      this.hoverAbout = false;
      //@ts-ignore
      this.hoverWorks = false;
      //@ts-ignore
      this.hoverSkills = false;
    },
    overAbout(): void {
      //@ts-ignore
      this.reset();
      //@ts-ignore
      this.hoverAbout = true;
    },
    overWorks(): void {
      //@ts-ignore
      this.reset();
      //@ts-ignore
      this.hoverWorks = true;
    },
    overSkills(): void {
      //@ts-ignore
      this.reset();
      //@ts-ignore
      this.hoverSkills = true;
    },
    mouseLeaveAction(): void {
      //@ts-ignore
      this.reset();
      //@ts-ignore
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

.fade {
  animation: fadeIn 2s ease 1 normal;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
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
      padding: 50px 0 20px 30px;
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
        transition: transform 0.4s;
        &:hover {
          transform: translateX(50px);
        }
      }
    }
  }
}
.footer {
  bottom: 0;
}

.nomal {
  h2 {
    color: #fff;
    transition: 0.3s;
  }
}
.about {
  .link {
    &__about {
      color: rgb(0, 255, 21);
      transition: 0.3s;
    }
  }
}
.works {
  .link {
    &__works {
      color: rgb(255, 255, 0);
      transition: 0.3s;
    }
  }
}
.skills {
  .link {
    &__skills {
      color: rgb(0, 204, 255);
      transition: 0.3s;
    }
  }
}

@media screen and (max-width: 680px) {
  .main {
    &__top {
      &-wrap {
        h1 {
          font-size: 60px;
        }
        p {
          font-size: 16px;
        }
      }
    }
    &__menu {
      &-wrap {
        padding: 0 0 40px 0;
      }
    }
  }
}
</style>
