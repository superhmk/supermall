<template>
<div id="main-tab-bar">
  <tab-bar>
    <!--      tabbar小组件的插槽使用-->
    <!--path 为组件路径  activeColor 为父组件传入子组件内容 需要在子组件里添加props属性-->
    <tab-bar-item path="/home" activeColor="#d81e06">
      <!--        slot对应的为子组件定义插槽的内容 指对应哪个插槽-->
      <img slot="item-icon" src="../../../assets/img/tabbar/home.png" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/home1.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/cate" activeColor="#d81e06">
      <img slot="item-icon" src="../../../assets/img/tabbar/cate.png" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/cate1.png" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/goods" activeColor="#d81e06">
      <img slot="item-icon" src="../../../assets/img/tabbar/goods.png" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/goods1.png" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="#d81e06">
      <img slot="item-icon" src="../../../assets/img/tabbar/me.png" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/me1.png" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</div>
</template>

<script>
//导入组件
import TabBar from "../../common/tabbar/TabBar";
import TabBarItem from "../../common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
    components: {
      //使用组件
      TabBar,
      TabBarItem
    }
}
</script>

<style scoped>

</style>
