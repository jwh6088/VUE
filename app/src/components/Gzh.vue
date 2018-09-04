<template>
  <div class="gzh">
    <div><img src="../../static/images/1.png"></div>
    <div>Vue中文社区 独家公众号,面向前端爱好者,每日更新最有料的文章,最前沿的资讯,内容包含但不限于Vue,React,Angular,前端工程化...等各种"大保健"知识点,右上角点关注,老司机带你弯道超车,不定期更有各种福利赠送 </div>
    <div class="sao">👈🏼 亲,微信扫一扫奴家</div>
  </div>
</template>

<script>
export default {
  name: 'Gzh',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style lang="scss">
    @import '../assets/sass/base.scss';

    .gzh{
      div{
        padding:0 rem(50px);
        font-size:rem(24px);
        line-height: rem(60px);
        img{
          width: rem(600px);
          height: rem(600px);
          margin: 0 auto;
        }
      }
      div.sao{
        color:#369219;
      }
    }
</style>
