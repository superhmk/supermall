<template>
  <div class="tab-bar-item" @click="itemClick">
<!--  包含在div块里是为了改变时不影响其他的标签 直接把判断语句写在div里-->
    <div v-if="!idActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="idActiveStyle"><slot name="item-text"></slot></div>

<!--     所有的item展示的都是同一个图片,同一个文字  -->
<!--    <img src="../../assets/img/tabbar/home.png" alt="">-->
<!--    <div>首页</div>-->
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  //父传子的用法 需要用props来选择传值的属性
  props: {
  //传值的属性
    path: String,
    activeColor: {
      //传值的属性 父组件已经定义好了属性值 在这边选择传值的属性就可以
      path: String,
      //传值的默认值
      default: 'red',
    }
  },
  //组件中的数据 为函数 必须要return返回
  data() {
    return{
      // idActive:false
    }
  },
  //计算属性
  computed: {
  //实现查找到活跃的路由
    idActive() {
      //indexOf来查找路径的值 不存在时返回-1 此时不等于-1 就实现了存在该路径 就可以使用到if else语句来实现活跃时获得的样式
      return this.$route.path.indexOf(this.path) !== -1
    },
    //实现父传子来获得父组件设置的样式 当为空时 可在props中设置default默认值
    idActiveStyle() {
      //使用三目运算来获得 当为真时返回父组件定义的字符串 为假时返回空
      return this.idActive ? {color : this.activeColor } : {}
    }
  },
  methods: {
   //事件监听来获取路径 点击时可以在路径上加入指定的路径 在父组件已经确定好了路径 直接监听加入就可以
   itemClick(){
     this.$router.push(this.path)
   }
  }
}
</script>

<style scoped>

.tab-bar-item{
  /*flex语法同上*/
  flex: 1;
  /*来居中文字*/
  text-align: center;
  /*设置块的高度*/
  height: 49px;
  /*设置文字大小*/
  font-size: 14px;
}

.tab-bar-item img{
  /*设置图片宽高*/
  height: 24px;
  width: 24px;
  /*设置图片上边距*/
  margin-top: 3px;
  /*因添加了上边距 在一块的标签里也有3px 这个代码是消除这个3px的*/
  vertical-align: middle;
  /*修改下边距*/
  margin-bottom: 2px;
}

/*动态绑定class来改变样式,因后期需要使用者修改颜色 这里不用动态绑定class了*/
/*.active{*/
/*  color: #d81e06;*/
/*}*/
</style>
