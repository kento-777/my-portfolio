<template>
  <div>
    <div class="wrap">
      <header><headerItem></headerItem></header>
      <main>
        <div class="title"><h1>Skills</h1></div>
        <div id="app" class="contents">
          <div v-for="item in items" :key="item.title" class="content">
            <div class="content__heading">
              <div class="content__logo">
                <img :src="item.img" :alt="item.alt" />
              </div>
              <div class="content__title">
                <h2>
                  {{ item.title }}
                </h2>
              </div>
            </div>
            <div class="content__main">
              <div class="content__bar--outside">
                <div
                  class="content__bar--inside"
                  :style="{ width: item.percent }"
                ></div>
              </div>
              <div class="content__percent">
                <p>
                  {{ item.percent }}
                </p>
              </div>
              <div class="content__explain">
                <p>
                  {{ item.explain }}
                </p>
              </div>
            </div>
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
          img: "a",
          alt: "a",
          title: "HTML & CSS",
          percent: "90%",
          explain:
            "レスポンシブも含めたHTMLとCSSの基本的なコーディングは問題ありません。BEMも使用経験あり。",
        },
        {
          img: "a",
          alt: "a",
          title: "Sass",
          percent: "85%",
          explain:
            "少し前からCSSはSassを用いてコーディングを行っています。SassのMixinや、コンポ―ネントも理解し、問題なく使用しています。",
        },
        {
          img: "a",
          alt: "a",
          title: "Git",
          percent: "85%",
          explain:
            "現在、Githubを用いてバージョン管理を行っています。そのため基本的なGitの操作、及びGitを用いたコード管理は問題ありません。",
        },
        {
          img: "a",
          alt: "a",
          title: "jQuery",
          percent: "80%",
          explain:
            "jQueryを用いた、ハンバーガーメニューやアコーディオンメニューの実装、及びslickを用いたスライドショーの表示も経験済みです。",
        },
        {
          img: "a",
          alt: "a",
          title: "WordPress",
          percent: "50%",
          explain:
            "WordPressを用いてチームのブログを開設し、オリジナルテーマの作成を行いました。それに伴い、基礎的なPHPの知識もあります。",
        },
        {
          img: "a",
          alt: "a",
          title: "Adobe XD",
          percent: "50%",
          explain:
            "デザインカンプ作成時は毎回Adobe XDを用いて制作を行っています。プロトタイプの作成も可能です。",
        },
        {
          img: "a",
          alt: "a",
          title: "Vue",
          percent: "30%",
          explain:
            "このポートフォリオはVueを用いて完成させました。そのためVueの基本的操作やファイル構成についてはある程度理解しています。",
        },
        {
          number: 8,
          img: "a",
          alt: "a",
          title: "TypeScript",
          percent: "20%",
          explain:
            "このポートフォリオはVueに加え、TypeScriptも用いて完成させています。そのためTypeSciptの型についても問題なく扱えます。",
        },
        {
          img: "a",
          alt: "a",
          title: "ニャンちゅうの声真似",
          percent: "100%",
          explain: "お゛お゛ぉ゛ん！に゛ゃんち゛ゅうだに゛ゃあ゛あ゛ん！！",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  &__title {
    h2 {
      margin: 0;
    }
  }
  &__main {
    display: flex;
    align-items: center;
  }
  &__bar {
    &--outside {
      display: block;
      height: 40px;
      border: 1px solid #000;
      width: 60%;
    }
    &--inside {
      display: block;
      height: 40px;
      background-color: #000;
    }
  }
  &__percent {
    width: 10%;
    align-items: center;
    padding: 0 30px 0 15px;
    font-size: 30px;
  }
  &__explain {
    width: 40%;
  }
}
</style>
