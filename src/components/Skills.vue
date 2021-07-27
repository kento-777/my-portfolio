<template>
  <div>
    <div class="wrap">
      <header><headerItem></headerItem></header>
      <main>
        <div class="title"><h1>Skills</h1></div>
        <div class="contents">
          <div class="content">
            <div class="content__heading">
              <div class="content__logo"><img src="" alt="" /></div>
              <div class="content__title"><h2>HTML & CSS</h2></div>
            </div>
            <div class="content__main">
              <div class="content__bar--outside">
                <div class="content__bar--inside"></div>
              </div>
              <div class="content__percent"><p>90％</p></div>
              <div class="content__explain">
                <p>
                  レスポンシブも含めた、HTMLとCSSの基本的なコーディングは問題ありません。<br />
                  BEMも使用経験あり。
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
export default {};
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
      width: 90%;
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
