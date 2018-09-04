<template>
  <div class="topiclist">
     <ul class="items2">
        <li v-for="(item,index) in topics" class="item">
        <div class="img">
          <img v-lazy="item.author.avatar_url" alt="">
        </div>
        <div class="top2">
          <span>{{item.reply_count}}/</span><span>{{item.visit_count}}</span>  
        </div>
        <router-link :to=" '/index/topic/'+item.id  " tag="div" class="title">{{item.title}}</router-link>
        <div class="time">{{res(item.last_reply_at)}}</div>
      </li>
     </ul>
  </div>
</template>

<script>
// 引入请求数据的模块
import { getTopicList } from "@/getdata/index.js";


export default {
  name: 'TopicList2',
  data () {
    return {
    }
  },
  // 钩子函数
  mounted(){
  },
  //接收  父组件传递过来的值
  props: ["topics"],
  // 方法
  methods:{
   res:function(n){
      var date = new Date(n);
      var Y2 = date.getFullYear();
      var M2 = date.getMonth() +1;
      var D2 = date.getDate();
      var H2 = date.getHours();
      var Mi2 = date.getMinutes();

      var date1 = new Date();
      var Y1 = date1.getFullYear();
      var M1 = date1.getMonth()+1;
      var D1 = date1.getDate();
      var H1 = date1.getHours();
      var Mi1 = date1.getMinutes();
      // console.log(Y1+'.'+M1+'.'+D1+'-'+Y2+'.'+M2+'.'+D2)
      if (Y1>Y2){
        var Y3= Y1 - Y2
        return (Y3+"年前")
      }else if (M1>M2) {
        var M3 = M1 - M2
        return (M3+"个月前")
      }else if (D1>D2){
        var D3 = D1 - D2
        return (D3+"天前")
      }else if (H1>H2){
        var H3 = H1 - H2
        return (H3+"小时前")
      }else{
        return '刚刚'
      }
    }
  }
}


</script>
<style lang="scss">

  // 加载基础的样式
  @import '../../assets/sass/base.scss';

   .topiclist{
    margin-top: rem(80px);
  }
  .items2{
    width:100%;
    .item{
      display: flex;
      align-items: center;
      height: rem(100px);
      border:1px solid #ccc;
      padding: 0 rem(9px);
      .img{
        img{
          width:rem(60px);
          height: rem(60px);
        }
      }
      .top2{
        margin: 0 rem(10px);
        color: #999;
        border-radius: rem(9px);
        display: flex;
        width:rem(80px);
        span{
          display: block;
          height: rem(40px);
          font-size: rem(20px);
          text-align: center;
          line-height: rem(40px);
        }
        span:nth-child(1){
            font-size:rem(30px);
            color:#666;
        }
      }
      .topStyle{
        background: #369219;
        color: #fff;
      }
      .title{
        color:#333;
        font-size: rem(28px);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width:rem(470px);
      }
      .time{
        margin:0 rem(10px);
        color:#666;
      }
    }
  }


</style>