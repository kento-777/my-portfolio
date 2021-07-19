<template>
  <div>
    <header>
      <div class="header__wrapper">
        <div id="humberger--js" class="header__humberger">
          <span id="bar-top--js" class="header__bar header__bar-top"></span>
          <span
            id="bar-middle--js"
            class="header__bar header__bar-middle"
          ></span>
          <span
            id="bar-bottom--js"
            class="header__bar header__bar-bottom"
          ></span>
        </div>
        <div id="mask--js" class="header__mask">
          <div id="mask-wrapper--js" class="header__wrapper-mask off">
            <nav>
              <ul class="header__humberger-menu">
                <li class="header__menu-item">
                  <a class="header__menu-link" href="#pickup">PICK UP</a>
                </li>
                <li class="header__menu-item">
                  <a class="header__menu-link" href="#feature">FEATURE</a>
                </li>
                <li class="header__menu-item">
                  <a class="header__menu-link" href="#contact">CONTACT</a>
                </li>
              </ul>
              <ul class="header__contact">
                <li class="header__menu-item">
                  <a
                    class="header__menu-link"
                    href="https://twitter.com/vXP8OfzbSOiWhlj"
                    >Twitter</a
                  >
                </li>
                <li class="header__menu-item">
                  <a
                    class="header__menu-link"
                    href="https://www.facebook.com/campaign/landing.php?campaign_id=1665596389&extra_1=s%7Cc%7C321610682049%7Ce%7Cfacebook%7C&placement=&creative=321610682049&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D1665596389%26adgroupid%3D65075436220%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-541132862%26loc_physical_ms%3D1009355%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjwh_eFBhDZARIsALHjIKeqG5j3GQ3eNxv6EIr3sG0Ck7t9n1WLog27jZSpMxfAzKs-30mBwcUaAi4XEALw_wcB"
                    >facebook</a
                  >
                </li>
                <li class="header__menu-item">
                  <a
                    class="header__menu-link"
                    href="https://www.instagram.com/tomoaki_tennis/"
                    >instagram</a
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
header {
  width: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  z-index: 99;
}

.header {
  &__wrapper {
    display: flex;
    margin: 0 auto;
    justify-content: flex-end;
    margin: 22px 40px;
  }

  &__logo {
    width: 180px;
    img {
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  }

  /*ハンバーガーボタン*/
  &__humberger {
    display: block;
    position: fixed;
    z-index: 99;
    right: 0;
    top: 0;
    width: 42px;
    height: 42px;
    cursor: pointer;
    text-align: center;
    position: relative;
  }

  &__bar {
    display: block;
    position: absolute;
    width: 30px;
    height: 2px;
    right: 6px;
    background: #555;
    transition: 0.3s ease-in-out;

    &-top {
      top: 10px;
    }
    &-middle {
      top: 20px;
    }
    &-bottom {
      top: 30px;
    }
  }

  &__wrapper-mask {
    display: block;
    position: fixed;
    top: 70px;
    left: -500px;
    margin: 0;
  }

  &__menu-item {
    margin: 0 20px;
    padding: 10px 0;
  }

  &__menu-link {
    padding: 30px 0;
    font-size: 14px;
    color: #fff;
    transition: all 0.3s ease-in-out;
    &:hover {
      opacity: 0.5;
      transition: all 0.3s ease-in-out;
    }
  }

  &__humberger-menu {
    padding-top: 30px;
    li {
      padding: 20px 0;
      border-top: solid 1px #fff;
      &:last-child {
        border-bottom: 1px solid #fff;
      }
    }
  }

  &__contact {
    padding-top: 40px;
    li {
      padding-top: 0;
    }
  }
}

//ハンバーガーを開いたとき
.active-top {
  transform: translate(0, 10px) rotate(405deg);
  transition: transform 0.5s;
}
.active-middle {
  display: none;
  transition: transform 0.5s;
}
.active-bottom {
  transform: translate(0, -10px) rotate(-405deg);
  transition: transform 0.5s;
}
.open {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.8);
  z-index: 100;
}

.on {
  display: block;
  position: fixed;
  top: 0;
  width: 300px;
  height: 100%;
  background: rgba($color: #121212, $alpha: 1);
  z-index: 110;
  opacity: 1;
}
</style>
