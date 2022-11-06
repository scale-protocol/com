<template>
  <div :class="{'wrap mui-fl-col mui-fl-btw': 1, 'index': $route.name === 'index' || $route.name === 't'}">
    <div :class="{'mui-header-wrap': isScroll}">
      <div class="holder" />
      <header class="mui-header">
        <div class="section mui-fl-vert mui-fl-btw">
          <i class="icon-menu" @click="handleShowNav" />
          <div class="mui-header-in mui-fl-central">
            <nuxt-link to="/">
              <div class="logo">
                <span class="seo-span">scale</span>
              </div>
            </nuxt-link>
            <ul :class="{'mui-fl-vert nav': 1, 'active': showNav}" @click="handleHideNav">
              <li class="phone-header-overlay">
                <img src="~@/assets/img/close.png" alt="" class="close">
                <img src="~@/assets/img/logo.png" alt="" class="img-logo">
              </li>
              <li
                v-for="item of navArr"
                :key="item.id"
                @click="handleNavli(item)"
              >
                <template v-if="item.routerLink">
                  <nuxt-link :to="item.routerLink">
                    {{ item.text }}
                  </nuxt-link>
                </template>
                <template v-else>
                  <template v-if="item.href === ''">
                    {{ item.text }}
                  </template>
                  <template v-else>
                    <a :href="item.href" target="_blank">{{ item.text }}</a>
                  </template>
                </template>
              </li>

              <li class="mui-fl-central launch-app">
                <m-button class="sty3-button" @click="handleTip">
                  Launch App
                </m-button>
              </li>
            </ul>
          </div>

          <div class="mui-fl-vert">
            <div class="language taplight2 mui-fl-vert">
              <i class="mico-global icon-global" />
              <span>EN</span>
              <!-- <i class="mico-arrow-right icon-arrow" /> -->
            </div>
            <m-button round class="sty1-button" @click="handleTip">
              Launch App
            </m-button>
          </div>
        </div>
      </header>
    </div>

    <Nuxt />

    <footer class="footer">
      <div class="section mui-fl-vert_end mui-fl-btw mui-fl-wrap">
        <div class="left">
          <img src="~@/assets/img/logo2.png" alt="">
          <p>Trading Everywhere Anytime</p>
        </div>
        <p class="copyright0">
          2022 scale.exchange All rights reserved.
        </p>
        <div class="right">
          <p class="t">
            Contact us
          </p>
          <ul class="mui-fl-vert">
            <li v-for="(item, index) of footerArr" :key="index" :class="{'mui-fl-vert': 1, 'email': index === 0}" @click="handleClk(item)">
              <template v-if="index === 0">
                <a :href="item.url" target="_blank" class="mui-fl-vert">
                  <i :class="[item.icon]" />
                  <span>Support</span>
                </a>
              </template>
              <template v-else>
                <a v-if="item.url !== ''" :href="item.url" target="_blank">
                  <i :class="[item.icon]" />
                </a>
                <i v-else :class="[item.icon]" />
              </template>
            </li>
          </ul>
        </div>

        <p class="copyright1">
          2022 scale.exchange All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showNav: false,
      ndBody: null,
      navArr: [
        { id: '#trade', text: 'Trade', index: 0, href: '' },
        { id: '#pool', text: 'Pool', index: 1, href: '' },
        // { id: '#marketplace', text: 'Marketplace', index: 2, href: '' },
        { id: '#whitepaper', text: 'Whitepaper', index: 3, href: '/whitepaper.pdf' },
        { id: '#docs', text: 'Docs', index: 4, href: 'https://scaleprotocol.gitbook.io/scale-protocol-1/' }
      ],
      footerArr: [
        {
          key: 'email',
          icon: 'mico-email',
          url: 'mailto:ScaleProtocol@Gmail.com'
        },
        {
          key: 'telegram',
          icon: 'mico-telegram',
          url: 'https://t.me/scaleprotocol_official'
        },
        {
          key: 'discord',
          icon: 'mico-discord',
          url: 'https://discord.gg/WgyNUdK2eJ'
        },
        {
          key: 'twitter',
          icon: 'mico-twitter',
          url: 'https://twitter.com/ScaleProtocol'
        },
        {
          key: 'github',
          icon: 'mico-github',
          url: 'https://github.com/ScaleProtocol/protocol'
        },
        {
          key: 'medium',
          icon: 'mico-medium',
          url: 'https://medium.com/@scaleprotocol'
        }
      ],
      isScroll: false
    }
  },
  mounted () {
    this.ndBody = document.querySelector('body')
    document.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleClk (item) {
      if (item.url === '') {
        this.handleTip()
      }
    },
    handleNavli (item) {
      if (!item.href) {
        this.handleTip()
      }
    },
    handleTip () {
      this.$message({
        message: 'Coming soon',
        customClass: 'sty1-message mui-fl-vert mui-fl-hori',
        duration: 3000,
        iconClass: 'mico-warn',
        offset: 102
      })
    },
    handleShowNav () {
      this.showNav = !this.showNav
      if (this.showNav) {
        this.ndBody.classList.add('noscroll')
      } else {
        this.ndBody.classList.remove('noscroll')
      }
    },
    handleHideNav () {
      this.showNav = false
      this.ndBody.classList.remove('noscroll')
    },
    handleScroll (e) {
      this.isScroll = window.scrollY > 0
    }
  }
}
</script>

<style lang="scss">
  .wrap {
    position: relative;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    &.index::after {
      content: '';
      width: 100%;
      height: 884px;
      background: url('~@/assets/img/bg.png') no-repeat;
      background-size: cover;
      position: absolute;
      top: 0;
      z-index: -1;
    }
  }
  .mui-header-wrap {
    position: sticky;
    top: 0;
    z-index: 99;
    .mui-header {
      background: rgba(255, 255, 255, 0.36);
      backdrop-filter: blur(16px);
      transition: background cubic-bezier(.4,0,.2,1) .5s;
    }
  }
  .icon-menu {
    display: none;
  }
  .mui-header {
    z-index: 100;
    width: 100%;
    height: 78px;
    background: rgba(255, 255, 255, 0.36);
    backdrop-filter: blur(16px);
    .logo {
      width: 130px;
      height: 78px;
      background: url('~/assets/img/logo.png') 0 50% no-repeat;
      background-size: 130px;
    }
  }
  .seo-span {
    position: absolute;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(0px 0px 99.9% 99.9%);
    overflow: hidden;
    height: 1px;
    width: 1px;
    padding: 0;
    border: 0;
    top: 50%;
    user-select: none;
    color: transparent;
  }
  .nav {
    margin-right: 72px;
    .phone-header-overlay, .launch-app {
      display: none;
    }
    li {
      position: relative;
      font-weight: 600;
      font-size: 16px;
      line-height: 1.5;
      color: #000;
      cursor: pointer;
      margin-left: 40px;
      a {
        color: #000;
      }
    }
  }

  .language {
    color: #000000;
    margin-right: 33px;
    position: relative;
    .icon-global {
      font-size: 20px;
      margin-right: 4px;
    }
    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
    }
    .icon-arrow {
      font-size: 12px;
      margin-left: 2px;
    }
    &::after {
      content: '';
      width: 1px;
      height: 24px;
      background-color: rgba(0, 0, 0, 0.05);
      position: absolute;
      right: -17px;
      top: 0;
      bottom: 0;
      margin: auto;
    }
  }

  .footer {
    padding-top: 56px;
    padding-bottom: 56px;
    background: #69D2F5;
    .left {
      img {
        width: 163px;
        margin-bottom: 4px;
      }
      line-height: 18px;
      color: rgba(255, 255, 255, 0.75);
    }
    .copyright0 {
      line-height: 18px;
      color: rgba(255, 255, 255, 0.5);
      display: block;
    }
    .copyright1 {
      display: none;
    }
    .right {
      .t {
        line-height: 18px;
        color: #FFFFFF;
        margin-bottom: 12px;
      }
      ul {
        li {
          background-color: #FFFFFF;
          border-radius: 50%;
          font-size: 24px;
          padding: 2px;
          cursor: pointer;
          margin-right: 12px;
          i {
            color: #69D2F5;
          }
          &.email {
            padding: 4px 8px 4px 6px;
            border-radius: 4px;
            position: relative;
            margin-right: 25px;
            a {
              color: #69D2F5;
            }
            i {
              font-size: 20px;
              margin-right: 4px;
            }
            span {
              font-weight: 700;
              font-size: 16px;
              line-height: 20px;
            }
            &::after {
              content: '';
              width: 1px;
              height: 18px;
              background-color: #FFFFFF;
              position: absolute;
              right: -13px;
              top: 0;
              bottom: 0;
              margin: auto;
            }
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1000px) {
    .nav li {
      margin-left: 25px;
      font-size: 14px;
    }
  }

  @media screen and (max-width: 900px) {
    .wrap {
      position: relative;
      width: 100%;
      min-height: 100vh;
      height: 100%;
      &.index::after {
        content: '';
        width: 100%;
        height: 884px;
        background: url('~@/assets/img/bg.png') no-repeat;
        background-size: contain;
        position: absolute;
        top: 0;
        z-index: -1;
      }
    }
    .mui-header {
      height: 60px;
      .logo {
        height: 60px;
        background-size: 98px;
      }
    }
    .holder {
      height: 60px;
      width: 100%;
    }
    .icon-menu {
      position: fixed;
      // top: 20px;
      // right: 24px;
      // left: 24px;
      z-index: 999;
      display: block;
      width: 20px;
      height: 20px;
      background: url('~@/assets/img/menu.png') no-repeat;
      background-size: 20px 20px;
    }
    .mui-header {
      position: fixed;
      top: 0;
      left: 0;
      height: 60px;
      align-items: flex-start;
      transition: height .35s ease-in 200ms;
      .logo {
        width: 100px;
        height: 60px;
        background-size: contain;
      }
    }
    .mui-header-in {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    .nav {
      flex-direction: column;
      align-items: flex-end;
      position: fixed;
      width: 100vw;
      height: 100vh;
      box-sizing: border-box;
      // top: 60px;
      top: 0;
      left: 0;
      background: rgba(250, 250, 250);
      opacity: 0;
      transition: opacity .3s;
      visibility: hidden;
      z-index: 9999;
      .phone-header-overlay {
        height: 60px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: rgb(252, 252, 252);
        border-bottom: 1px solid rgb(237, 237, 237);
        .close {
          width: 20px;
          height: 20px;
        }
        .img-logo {
          width: 100px;
        }
      }
      li:nth-child(2) {
        padding-top: 20px;
      }
      .launch-app {
        display: flex;
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid rgb(237, 237, 237);
      }
      .phone-header-overlay, .launch-app {
        &::after {
          width: 0;
          height: 0;
          background-image: none;
          content: '';
          position: relative;
          right: 0;
          margin: 0%;
        }
      }
      li + li {
        margin-left: 0;
      }
      li {
        width: 100%;
        box-sizing: border-box;
        padding: 8px 24px;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        position: relative;
        &::after {
          content: '';
          width: 20px;
          height: 20px;
          background: url('~@/assets/img/arrow.png') no-repeat;
          background-size: 20px;
          position: absolute;
          right: 24px;
          top: 0;
          bottom: 0;
          margin: auto;
        }
      }
      &.active {
        visibility: visible;
        opacity: 1;
      }
    }
    .language {
      margin-right: 0;
      .icon-global, &::after {
        display: none;
      }
    }

    .footer {
      padding-top: 20px;
      padding-bottom: 20px;
      .left {
        display: none;
      }
      .copyright1 {
        font-size: 12px;
        line-height: 16px;
        text-align: center;
        width: 100%;
        display: block;
        margin-top: 24px;
        color: rgba(255, 255, 255, 0.5);
      }
      .copyright0 {
        display: none;
      }
      .right {
        width: 100%;
        .t {
          text-align: center;
          margin-bottom: 8px;
        }
        ul {
          justify-content: center;
        }
      }
    }
  }
</style>
