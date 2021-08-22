<template>
  <div>
    <div class="wrap">
      <headerItem></headerItem>
      <main>
        <div class="title fade"><h1>Works</h1></div>
        <div class="work">
          <div v-for="item in items" :key="item.id" class="work__item">
            <h2 class="work__title">{{ item.title }}</h2>
            <div class="work__img">
              <img class="fade" :src="item.src" :alt="item.alt" />
            </div>
            <p class="work__explain">
              {{ item.explain1 }}<br />
              {{ item.explain2 }}
            </p>
            <a :href="item.href" class="work__url">{{ item.urlTitle }}</a>
          </div>
        </div>
      </main>
      <footerItem></footerItem>
    </div>
  </div>
</template>
<script lang="ts">
import { WorkDataType } from "../assets/data";
export default {
  data(): WorkDataType {
    return {
      items: [
        {
          title: "CLENZY MAPのブログ作成",
          id: 1,
          src: "Clenzymap-logo.png",
          alt: "Clenzymap",
          explain1:
            "　WordPressを用いて、SANGOを基礎とした独自テーマを制作し、自分のチームのオリジナルブログサイトを完成させました。",
          explain2:
            "　知識０からでもストレスなく学べるロードマップを随時更新しています。ただロードマップを提示するだけでなく、「ともにロードマップを走ってあげる」ことをモットーとして運営しています。",
          href: "https://clenzymap.clenzy.net/",
          urlTitle: "CLENZY MAP | あなたと旅するITメディア",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.work {
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
  &__img {
    height: 450px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  &__title {
    margin: 0;
    padding: 20px;
  }
  &__explain {
    font-size: 1.3em;
    line-height: 2em;
    padding: 1.5em;
  }
  &__url {
    font-size: 1.3em;
    padding: 0 1.5em;
  }
}

@media screen and (max-width: 680px) {
  .work {
    &__title {
      font-size: 20px;
    }
    &__img {
      height: auto;
    }
    &__explain {
      font-size: 1em;
      margin-bottom: 0;
    }
    &__url {
      font-size: 0.8em;
      margin-bottom: 10px;
    }
  }
}
</style>
