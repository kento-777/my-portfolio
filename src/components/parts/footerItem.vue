<template>
  <div class="footer">
    <div class="icon">
      <a
        class="icon__twitter"
        href="https://twitter.com/home?utm_source=homescreen&utm_medium=shortcut"
        ><i class="fab fa-twitter-square fa-3x"></i
      ></a>
      <a class="icon__instagram" href="#"
        ><i class="fab fa-instagram fa-3x"></i
      ></a>
      <a class="icon__mail" href="mailto:kentuuuwork@gmail.com"
        ><i class="far fa-envelope fa-3x"></i
      ></a>
    </div>
    <p class="footer__right">©　Kento Tsuchida. 2021.</p>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  width: 95%;
  display: flex;
  justify-content: space-between;
  padding: 60px 0 10px 0;
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
@media screen and (max-width: 680px) {
  .footer {
    display: block;
    padding-bottom: 0;
    .icon {
      &__twitter {
        padding-right: 1.5em;
      }
      &__instagram {
        padding-right: 1.5em;
      }
    }
    &__right {
      padding-top: 10px;
      text-align-last: left;
      font-size: 2px;
    }
  }
}
</style>
