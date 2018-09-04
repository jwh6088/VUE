<template>
  <div class="topic">
    <div class="title">{{topicData.title}}</div>
    <hr>
    <div class="content" v-html="topicData.content"></div>
  </div>
</template>

<script>

// 引入请求数据的模块
import { getTopicShow } from "@/getdata/index.js"

export default {
  name: 'HelloWorld',
  data () {
    return {
      topicData:[]
    }
  },
  // 钩子函数
  mounted(){
    // 获取到 主题的id
    // console.log(this.$route.params.id);
    getTopicShow(this.$route.params.id).then((data)=>{
        this.topicData = data.data.data;
        console.log(this.topicData)
    })
  }
}
</script>
<style lang="scss">

    // 加载基础的样式
    @import "../../assets/sass/base.scss";

    .topic{
        margin-top: rem(80px);
        margin-bottom: rem(100px);
        .title{
            text-align: center;
            font-size: rem(38px);
            font-weight: bold;
            padding:rem(50px) rem(10px);
            color:#333;
        }
        .content{
            width: rem(730px);
            max-width: rem(730px);
            overflow: hidden;
            img{
              width: 100%;
              height: auto;
            }
        }
    }




</style>
