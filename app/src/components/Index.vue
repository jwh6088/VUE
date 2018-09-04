<template>
  <div class="index">
      <nav class="top">
      <!-- <ul>
        <router-link to="/" tag="li"><span :class="respath==''?'bg':''">全部</span></router-link>
        <router-link to="/index/good" tag="li"><span :class="respath=='/g'?'bg':''">精华</span></router-link>
        <router-link to="/index/weex" tag="li"><span :class="respath=='/w'?'bg':''">weex</span></router-link>
        <router-link to="/index/share" tag="li"><span :class="respath=='/s'?'bg':''">分享</span></router-link>
        <router-link to="/index/ask" tag="li"><span :class="respath=='/a'?'bg':''">问答</span></router-link>
        <router-link to="/index/job" tag="li"><span :class="respath=='/j'?'bg':''">招聘</span></router-link>
      </ul> -->
      <!-- Swiper -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <router-link to="/index/" tag="a" :class=" (respath=='' || respath==undefined)?'itemStyle':'' ">
              全部
            </router-link>
          </div>
          <div class="swiper-slide">
            <router-link to="/index/good" tag="a" :class=" respath=='good'?'itemStyle':'' ">
              精华
              </router-link>
          </div>
          <div class="swiper-slide">
            <router-link to="/index/weex" tag="a" :class=" respath=='weex'?'itemStyle':'' ">
              WEEX
            </router-link>
          </div>
          <div class="swiper-slide">
            <router-link to="/index/share" tag="a" :class=" respath=='share'?'itemStyle':'' ">
              分享
            </router-link>
          </div>
          <div class="swiper-slide">
            <router-link to="/index/ask" tag="a" :class=" respath=='ask'?'itemStyle':'' ">
              问答
              </router-link>
          </div>
          <div class="swiper-slide">
            <router-link to="/index/job" tag="a" :class=" respath=='job'?'itemStyle':'' ">
              招聘
              </router-link>
          </div>

          <div class="swiper-slide">
            <router-link to="" tag="a">测试</router-link>
          </div>

          <div class="swiper-slide">
            <router-link to="" tag="a">测试</router-link>
          </div>
          
          <div class="swiper-slide">
            <router-link to="" tag="a">测试</router-link>
          </div>
        </div>
      </div>
      </nav>
      <router-view/>
  </div>
</template>
<script>
export default {
  name: 'Index',
  // 计算属性
  computed:{
     // 计算路径
    respath:function(){
      // 把路径分割成数组
      var pathArr = this.$route.path.split('/');
      // console.log(pathArr)
      // 返回 表示 一级路由的 str
      // console.log(pathArr[2])
      return pathArr[2];
    }
  },
  // 钩子函数
  mounted(){
    // 自己的 js 就写在这里面了
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 6,
      spaceBetween: 20,
    }); 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  // 加载基础样式
  @import '../assets/sass/base.scss';

   nav.top{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: rem(80px);
    background:#f0f0f0;
    .swiper-container{
      .swiper-slide{
        font-size: rem(34px);
        text-align: center;
        a{
          line-height: rem(80px);
          color: #369219;
          padding: rem(3px) rem(10px);
          border-radius: rem(5px);
        }
        .itemStyle{
          background: #369219;
          color: #fff;          
        }
      }
    }
  }
</style>