<template>
  <div class="footer">
    <div class="icon">
      <a class="icon__twitter" href="#"
        ><i class="fab fa-twitter-square fa-3x"></i
      ></a>
      <a class="icon__instagram" href="#"
        ><i class="fab fa-instagram fa-3x"></i
      ></a>
      <a class="icon__mail" href="mailto:kentuuuwork@gmail.com"><i class="far fa-envelope fa-3x"></i></a>
    </div>
    <p class="footer__right">©　Kento Tsuchida. 2021.</p>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  width: 95%;
  display: flex;
  justify-content: space-between;
  padding: 60px 0 20px 0;
  align-items: flex-end;
  position: absolute;

  .icon {
    &__twitter {
      padding-right: 2.5em;
      color: black;
    }
    &__instagram {
      padding-right: 3em;
      color: black;
    }
    &__mail {
      color: black;
    }
  }
  &__right {
    text-align: right;
    font-size: 0.5rem;
  }
}
</style>
