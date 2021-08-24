<template>
  <div>
    <div class="wrap">
      <headerItem></headerItem>
      <main>
        <div class="title fade"><h1>Skills</h1></div>
        <div class="contents">
          <dl v-for="item in items" :key="item.title" class="content">
            <dt>
              <div class="content__heading">
                <div class="content__logo">
                  <img :src="item.img" :alt="item.title" />
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
                    :class="item.animation"
                    :style="{ width: item.percent }"
                  ></div>
                </div>
                <div class="content__percent">
                  <p>
                    {{ item.percent }}
                  </p>
                </div>
              </div>
            </dt>
            <dd class="content__explain fade">
              <p>
                {{ item.explain }}
              </p>
            </dd>
          </dl>
        </div>
      </main>
      <footerItem></footerItem>
    </div>
  </div>
</template>

<script lang="ts">
import { SkillDataType } from "../types/data";
export default {
  data(): SkillDataType {
    return {
      items: [
        {
          img: "html-css.png",
          title: "HTML & CSS",
          percent: "90%",
          explain:
            "レスポンシブも含めたHTMLとCSSの基本的なコーディングは問題ありません。BEMも使用経験あり。",
          animation: "sizeScale1",
        },
        {
          img: "sass.svg",
          title: "Sass",
          percent: "85%",
          explain:
            "少し前からCSSはSassを用いてコーディングを行っています。SassのMixinや、コンポ―ネントも理解し、問題なく使用しています。",
          animation: "sizeScale2",
        },
        {
          img: "git.png",
          title: "Git",
          percent: "85%",
          explain:
            "現在、Githubを用いてバージョン管理を行っています。そのため基本的なGitの操作、及びGitを用いたコード管理は問題ありません。",
          animation: "sizeScale3",
        },
        {
          img: "Jquery.png",
          title: "jQuery",
          percent: "80%",
          explain:
            "jQueryを用いた、ハンバーガーメニューやアコーディオンメニューの実装、及びslickを用いたスライドショーの表示も経験済みです。",
          animation: "sizeScale4",
        },
        {
          img: "WordPress.png",
          title: "WordPress",
          percent: "50%",
          explain:
            "WordPressを用いてチームのブログを開設し、オリジナルテーマの作成を行いました。それに伴い、基礎的なPHPの知識もあります。",
          animation: "sizeScale5",
        },
        {
          img: "XD.png",
          title: "Adobe XD",
          percent: "50%",
          explain:
            "デザインカンプ作成時は毎回Adobe XDを用いて制作を行っています。プロトタイプの作成も可能です。",
          animation: "sizeScale6",
        },
        {
          img: "Vue.png",
          title: "Vue",
          percent: "30%",
          explain:
            "このポートフォリオはVueを用いて完成させました。そのためVueの基本的操作やファイル構成についてはある程度理解しています。",
          animation: "sizeScale7",
        },
        {
          img: "Typescript.png",
          title: "TypeScript",
          percent: "20%",
          explain:
            "このポートフォリオはVueに加え、TypeScriptも用いて完成させています。そのためTypeSciptの型についても問題なく扱えます。",
          animation: "sizeScale8",
        },
        {
          img: "cat.svg",
          title: "ニャンちゅうの声真似",
          percent: "100%",
          explain:
            "お゛お゛ぉ゛ん！みーがに゛ゃんち゛ゅうだに゛ゃあ゛あ゛ん！！",
          animation: "sizeScale9",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  padding-bottom: 40px;
  &__heading {
    display: flex;
  }
  &__title {
    h2 {
      margin: 0;
      padding-left: 20px;
    }
  }
  &__logo {
    max-width: 40px;
    img {
      width: 100%;
    }
  }
  &__main {
    display: flex;
    align-items: center;
  }
  &__bar {
    &--outside {
      display: inline-block;
      height: 40px;
      border: 1px solid #000;
      width: 80%;
    }
    &--inside {
      display: block;
      height: 40px;
      background-color: rgb(6, 182, 252);
    }
  }
  &__percent {
    width: 10%;
    align-items: center;
    padding: 0 30px 0 15px;
    font-size: 30px;
    p {
      margin: 0;
    }
  }
  &__explain {
    display: flex;
    align-items: flex-end;
    p {
      width: 100%;
      margin: 0;
    }
  }
}

dl {
  display: flex;
  flex-wrap: wrap;
  max-width: 1500px;
  margin: 0;
  dt {
    width: 55%;
  }
  dd {
    width: 40%;
    margin: 0;
  }
}

.fade {
  animation: fadeIn 2s ease 2.5s normal;
}
@media screen and (max-width: 680px){
  dl {
    display: block;
    dt {
      width: 100%;
    }
    dd {
      width: 100%;
      p {
        padding-top: 10px;
      }
    }
  }
}
.sizeScale1 {
  animation: sizeScale1 2s ease 1 normal;
}
@keyframes sizeScale1 {
  0% {
    width: 0%;
  }
  100% {
    width: 90%;
  }
}

.sizeScale2 {
  animation: sizeScale2 2s ease 1 normal;
}
@keyframes sizeScale2 {
  0% {
    width: 0%;
  }
  100% {
    width: 85%;
  }
}
.sizeScale3 {
  animation: sizeScale3 2s ease 1 normal;
}
@keyframes sizeScale3 {
  0% {
    width: 0%;
  }
  100% {
    width: 85%;
  }
}
.sizeScale4 {
  animation: sizeScale4 2s ease 1 normal;
}
@keyframes sizeScale4 {
  0% {
    width: 0%;
  }
  100% {
    width: 80%;
  }
}
.sizeScale5 {
  animation: sizeScale5 2s ease 1 normal;
}
@keyframes sizeScale5 {
  0% {
    width: 0%;
  }
  100% {
    width: 50%;
  }
}
.sizeScale6 {
  animation: sizeScale6 2s ease 1 normal;
}
@keyframes sizeScale6 {
  0% {
    width: 0%;
  }
  100% {
    width: 50%;
  }
}
.sizeScale7 {
  animation: sizeScale7 2s ease 1 normal;
}
@keyframes sizeScale7 {
  0% {
    width: 0%;
  }
  100% {
    width: 30%;
  }
}
.sizeScale8 {
  animation: sizeScale8 2s ease 1 normal;
}
@keyframes sizeScale8 {
  0% {
    width: 0%;
  }
  100% {
    width: 20%;
  }
}
.sizeScale9 {
  animation: sizeScale9 2s ease 1 normal;
}
@keyframes sizeScale9 {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
</style>
