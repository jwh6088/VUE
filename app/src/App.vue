<template>
  <div id="app">

    <!-- 放置组件视图 -->
    <router-view/>
    <nav class="footer">
      <ul>
        <router-link to="/index" tag="li" :class="respath=='index'?'bg':''">首页</router-link>
        <router-link to="/gzh" tag="li" :class="respath=='gzh'?'bg':''">公众号</router-link>
        <router-link to="/me" tag="li" :class="respath=='me'?'bg':''">关于我们</router-link>
      </ul>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'App',
  // 计算属性
  computed:{
    // 计算路径
    respath:function(){
      var pathArr = this.$route.path.split('/');
      return pathArr[1];
    }
  }
}
</script>
<style lang="scss">
  // 加载基础样式
  @import './assets/sass/base.scss';

  nav.footer{
    position: fixed;
    bottom:0;
    left: 0;
    width: 100%;
    height: rem(80px);
    background:#333;
    ul{
      display: flex;
      // justify-content: space-around;
      li{
        width: 33.3%;
        text-align: center;
        color:#fff;
        font-size: rem(40px);
        line-height: rem(80px);
      }
      li.bg{
        background:#369219;
      }
    }
  }
  #app{
    padding-bottom: rem(80px);
  }
</style>
