<template>
  <div class="me">
    <ul class="guan">
      <router-link to="/index" tag="li">主页</router-link>
      <li>/</li>
      <li>关于</li>
    </ul>
    <div class="yu">关于</div>
    <p>Vue 中文社区是全球最大的 Vueframework 中文开源技术社区，致力于 Vue 在中国的学习、推广、研究工作。</p>
    <p>Vue 中文社区正在努力建设中，如果你有什么想法，欢迎吐槽。</p>
    <div class="qq">
      <a href=""><img src="../../static/images/3.png"></a>
    </div>
    <p>群二维码</p>
    <p>尽管建了QQ群，但是还是希望大家尽量有问题在社区讨论，这样才可以有一些沉淀和积累，不至于每天都有人在问同样的问题，通过对问题的总结和用文字表达的过程，自己也可以对知识进行一个梳理。</p>
    <div class="yu">移动客户端</div>
    <p>客户端目前正在加急开发中...敬请期待</p>
  </div>
</template>

<script>
export default {
  name: 'Me',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style lang="scss">
  // 加载基础样式
  @import '../assets/sass/base.scss';

  .guan{
    display: flex;
    align-items: center;
    height: rem(80px);
    border:1px solid #ccc;
    padding: 0 rem(15px);
    background:#F6F6F6;
    font-size: rem(36px);
    li:nth-child(1){
      color:#369219;
      &:hover{
        text-decoration: underline;
      }
    }
    li:nth-child(2),li:nth-child(3){
      color:#999;
      margin:0 rem(8px);
    }
  }
  .yu{
    margin:rem(30px) rem(20px);
    border-bottom:1px solid #ccc;
    font-size:rem(40px);
    font-weight: bold;
    line-height: rem(75px);
  }
  p{
    margin:0 rem(20px) rem(30px) rem(20px);
    font-size:rem(17px);
  }
  .qq{
    margin:rem(20px) rem(20px);
    a img{
      width: rem(200px);
    }
  }
</style>
