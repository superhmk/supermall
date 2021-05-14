<template>
  <div id="tab-bar">
<!--  定义插槽-->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
/*在style里引入需要在前加艾特符号*/

#tab-bar{
  /*flex语法,用来平均分块的大小*/
  display: flex;
  /*统一设置背景色*/
  background-color: #f6f6f6;
  /*把div定在最下方的写法*/
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  /*可用来定义快的阴影 x,y的逻辑*/
  box-shadow: 0 -3px 1px rgba(100,100,100,.1);
}


</style>
