<template>
  <div class="all">
      <topic-list1 :topics="topics"></topic-list1>
      <infinite-loading @infinite="infiniteHandler" v-show="loadingIsShow"></infinite-loading>
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
  name: 'All',
  data () {
    return {
      topics:[],
      // 页面
      page:1,
      // 控制 页面滑动到底部 如果有数据 就 显示loading  如果没有就 不显示
      loadingIsShow:true
    }
  },
  // 加载组件
  components:{
    TopicList1,
    InfiniteLoading
  },
  // 钩子函数  
  mounted(){
    getTopicList({
      limit:20,
      page:this.page
    }).then((data)=>{
      this.topics = data.data.data
      // console.log(data.data.data)
    })
  },
  methods: {
    infiniteHandler($state) {
      setTimeout(() => {
        getTopicList({limit:10,page:++(this.page)}).then(data=>{
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
  },
}


</script>
<style lang="scss">
</style>