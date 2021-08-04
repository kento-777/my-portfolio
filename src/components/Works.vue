<template>
  <div>
    <div class="wrap">
      <header><headerItem></headerItem></header>
      <main>
        <div class="title"><h1>Works</h1></div>
        <div class="work">
          <div v-for="item in items" :key="item.id" class="work__item">
            <img :src="item.src" :alt="item.alt" />
            <p class="work__explain">
              {{ item.explain1 }}<br />
              {{ item.explain2 }}
            </p>
            <a :href="item.href" class="work__url">{{ item.urlTitle }}</a>
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
      items: [
        {
          id: 1,
          src: "Clenzymap-logo.png",
          alt: "a",
          explain1:
            "WordPlessを用いて、SANGOを基礎とした独自テーマを制作し、自分のチームのオリジナルブログサイトを完成させました。",
          explain2:
            "知識０からでもストレスなく学べるロードマップを随時更新しています。ただロードマップを提示するだけでなく、「ともにロードマップを走ってあげる」ことをモットーとして運営しています。",
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
  box-shadow:  0 5px 10px 0 rgba(0, 0, 0, .5);
  &__item {
    img {
      width: 100%;
    }
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
</style>