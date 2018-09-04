<template>
  <div class="share">
      <topic-list1 :topics="topics"></topic-list1>
      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
// 引入请求数据的模块
import { getTopicList } from "@/getdata/index.js";
// 引入主题 列表 组件
import TopicList1 from "@/components/topics/TopicList1";
// 加载 上下滑动模块
import InfiniteLoading from 'vue-infinite-loading';

export default {
  name: 'Share',
  data () {
    return {
      topics:[],
      // 页面
      page:1,
      // 控制 页面滑动到底部 如果有数据 就 显示loading  如果没有就 不显示
      loadingIsShow:true
    }
  },
   // 钩子函数
  mounted(){
    // 调用查询数据的函数
      getTopicList({tab:'share',limit:20,page:this.page}).then((data)=>{
      this.topics = data.data.data
    })
  },
   // 加载组件
  components:{
    TopicList1,
    InfiniteLoading
  },
  methods: {
    infiniteHandler($state) {
      setTimeout(() => {
        getTopicList({tab:'share',limit:10,page:++(this.page)}).then(data=>{
          // console.log(data) 
          this.topics = this.topics.concat(data.data.data);
          // 取数据的时候 判断  data.data.data  的 length  
          if(data.data.data.length==0){
            this.loadingIsShow = false;
          }else{
            // 重新请求数据
            $state.loaded();  
          }
        })
        // console.log('ook');
      }, 1000);
    },
  }
}
</script>
<style lang="scss">
</style>
