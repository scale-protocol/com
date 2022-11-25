<template>
  <div class="pg-index">
    <div class="section">
      <div class="mui-fl-col mui-fl-vert section-1">
        <h2 class="title">
          SCALE PROTOCOL
        </h2>
        <p class="desc">
          Trading Everywhere Anytime
        </p>
        <m-button class="sty3-button" @click="handleTip">
          Launch App
        </m-button>
        <p class="sui mui-fl-vert">
          <span>Powered by</span>
          <img src="~@/assets/img/sui.png" alt="">
        </p>
        <img src="~@/assets/img/banner.png" alt="" class="img-banner">
      </div>
    </div>

    <div class="section-2">
      <div class="section mui-fl-col mui-fl-vert">
        <h1 class="title mui-fl-vert">
          Why Choose
          <span>SCALE</span>
        </h1>
        <ul class="mui-fl-wrap mui-fl-btw">
          <li v-for="(item, index) of chooseList" :key="index">
            <img :src="item.img" alt="">
            <p class="t1">
              {{ item.title }}
            </p>
            <p class="d">
              {{ item.desc }}
            </p>
          </li>
        </ul>
      </div>
    </div>

    <div class="section-3">
      <ul>
        <li class="mui-fl-vert mui-fl-btw mui-fl-wrap">
          <div>
            <p class="t1">
              If you are new to trading
            </p>
            <p class="t2">
              Don't know how to trade?<br>
              Don't know how to use leverage?<br>
              Don't know how to make a profit?<br>
              Please read our introduction.<br>
            </p>
            <a href="https://scaleprotocol.gitbook.io/scale-protocol-1/">
              <m-button class="sty3-button">
                Learn More
              </m-button>
            </a>
          </div>
          <!-- <p class="img-banner1" /> -->
          <img src="~@/assets/img/banner-01.png" alt="" class="img-banner1">
        </li>
        <li class="mui-fl-vert mui-fl-btw mui-fl-wrap">
          <!-- <p class="img-banner2" /> -->
          <img src="~@/assets/img/banner-02.png" alt="" class="img-banner2">
          <div>
            <p class="t1">
              Tired of trading risks?
            </p>
            <p class="t2">
              Willing to take high risks to gain profits, <br>
              but don't know how to trade?<br>
              Try to become a liquidity provider for Scale!<br>
              Let's work together!<br>
            </p>
            <m-button class="sty3-button">
              Learn More
            </m-button>
          </div>
          <img src="~@/assets/img/banner-02.png" alt="" class="img-banner2_1">
        </li>
      </ul>
    </div>

    <div class="section-4">
      <div class="section">
        <p class="t1">
          What we expect from
        </p>
        <p class="t2">
          SCALE PROTOCOL
        </p>
        <ul class="mui-fl-vert mui-fl-btw mui-fl-wrap">
          <li class="mui-fl-central">
            Fast and cheap<br>leverage Protocol
          </li>
          <li class="mui-fl-central">
            Symbols defined<br>by traders
          </li>
          <li class="mui-fl-central">
            Continuously optimized<br>user experience
          </li>
          <li class="mui-fl-central">
            Smooth and friendly<br>UI design
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      chooseList: [
        {
          id: 0,
          title: 'High Leverage',
          desc: 'Support up to 100* leverage.',
          img: require('@/assets/img/choose-1.png')
        },
        {
          id: 1,
          title: 'No Commission',
          desc: 'No commissions are charged for trading, increasing profits.',
          img: require('@/assets/img/choose-2.png')
        },
        {
          id: 2,
          title: 'Fair Index Price',
          desc: 'Index price is fetched from multiple oracles. ',
          img: require('@/assets/img/choose-3.png')
        },
        {
          id: 3,
          title: 'Trading Depth',
          desc: 'Allows you to avoid slippage losses when closing large positions.',
          img: require('@/assets/img/choose-4.png')
        }
      ],
      activeW: 0,
      interval: null
    }
  },
  methods: {
    handleTip () {
      this.$message({
        message: 'Coming soon',
        customClass: 'sty1-message mui-fl-vert mui-fl-hori',
        duration: 3000,
        iconClass: 'mico-warn',
        offset: 88
      })
    }
  }
}
</script>

<style lang="scss" src="~/assets/css/pages/_index.scss" scoped></style>
