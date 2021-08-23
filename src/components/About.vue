<template>
  <div>
    <div class="wrap">
      <headerItem></headerItem>
      <main>
        <div class="title fade"><h1>About</h1></div>
        <div class="profile">
          <div class="profile__img">
            <img class="fade" src="IMG_2875.JPG" alt="my-image" />
          </div>
          <div class="profile__explain">
            <p>
              <vue-typer :text="explainText1" :repeat="0"></vue-typer>
              <br /><br />
              <vue-typer :text="explainText2" :repeat="0"></vue-typer>
              <br /><br />
              <vue-typer :text="explainText3" :repeat="0"></vue-typer> <br />
              <vue-typer :text="explainText4" :repeat="0"></vue-typer> <br />
              <vue-typer :text="explainText5" :repeat="0"></vue-typer> <br />
            </p>
          </div>
        </div>
        <div class="story-wrap">
          <div class="sub-title"><h2>My Story</h2></div>
          <dl v-for="item in items" :key="item.id" class="content">
            <dt>{{ item.year }}</dt>
            <dd>
              <h3 :class="{ bold: item.isActive }">
                <vue-typer
                  :text="item.title"
                  :repeat="0"
                  :preTypeDelay="item.delay"
                ></vue-typer>
              </h3>
              <p>
                <vue-typer
                  :text="item.explain"
                  :repeat="0"
                  :preTypeDelay="item.delay"
                ></vue-typer>
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
import { AboutDataType } from "../../types/data";
export default {
  data(): AboutDataType {
    return {
      explainText1: "土田健斗　Kento Tsuchida(21)",
      explainText2: "フロントエンドエンジニア",
      explainText3: "新潟生まれ新潟育ち。",
      explainText4: "実家は長岡市で、現在は新潟市在住。",
      explainText5: "趣味はスノーボード、曲のMix、ゲーム、ニャンちゅう",
      items: [
        {
          id: 1,
          year: "1999",
          title: "新潟県長岡市に生まれる。",
          explain: "長岡花火が良く見える最高の地に生まれる。将来の夢は消防士。",
          isActive: false,
          delay: 2000,
        },
        {
          id: 2,
          year: "2015",
          title: "新潟県立長岡高等学校に入学。",
          explain:
            "部活は硬式テニス部。練習のキツさに挫折しそうになりながらも高校3年間やり遂げる。",
          isActive: false,
          delay: 2500,
        },
        {
          id: 3,
          year: "2020",
          title: "新潟大学理学部に入学。",
          explain:
            "世間がコロナ禍の中、入学。コロナ禍の中自宅作業が増え、何か新しいことを模索し始める。",
          isActive: false,
          delay: 3000,
        },
        {
          id: 4,
          year: "2020.7",
          title: "プログラミングと初対面、そして…",
          explain:
            "プログラミングと出会う。最初はYouTubeなどを見て学習を続けるも、分からないことがとても多く、挫折…",
          isActive: true,
          delay: 3500,
        },
        {
          id: 5,
          year: "2021.4",
          title: "本格的にプログラミングと向き合う。",
          explain:
            "高校時代の友達と再会し、それをきっかけとして再度、本格的にプログラミングと向き合う。",
          isActive: true,
          delay: 4000,
        },
        {
          id: 6,
          year: "2021.6",
          title: "初案件を受注。",
          explain: "初案件は友達のポートフォリオサイト。",
          isActive: true,
          delay: 4500,
        },
        {
          id: 7,
          year: "",
          title: "Study more...",
          explain: "",
          isActive: false,
          delay: 5000,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
h3 {
  font-weight: normal;
  margin-bottom: 0;
}

.profile {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__img {
    width: 50%;
    text-align: center;
    img {
      width: 50%;
      border-radius: 50%;
    }
  }

  &__explain {
    width: 50%;
  }
}

.story__wrap {
  align-items: center;
}
dl {
  display: flex;
  flex-wrap: wrap;
  max-width: 1500px;
  margin: 0;

  dt {
    text-align: left;
    width: 5%;
    padding-top: 0.5em;
    position: relative;
    &::after {
      content: "●";
      position: absolute;
      right: -1.63em;
      top: 2px;
      font-size: 30px;
      color: rgb(0, 255, 21);
    }
  }
  dd {
    width: 60%;
    padding: 0.5em 0 3em 2em;
    border-left: 2px solid #ccc;
    h3 {
      font-size: 22px;
      margin: 0 0 5px;
    }
  }
}
.bold {
  font-weight: bold;
}
.fade {
  animation: fadeIn 2s ease 2.5s normal;
}
@media screen and (max-width: 680px) {
  .profile {
    &__img {
      img {
        width: 80%;
      }
    }
    &__explain {
      font-size: 10px;
    }
  }
  dt {
    padding-right: 15px;
  }
}
</style>
