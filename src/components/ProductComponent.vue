<template>
  <div class="project">
    <header-component></header-component>
    <way-component></way-component>
    <div class="main-body">
      <div class="left-main">
        <left-main-component></left-main-component>
      </div>
      <div class="right-main">
        <right-main-component></right-main-component>
      </div>
    </div>
  </div>
</template>

<script type="module">

import HeaderComponent from "./HeaderComponent.vue";
import WayComponent from "./WayComponent.vue";
import LeftMainComponent from "./LeftMainComponent.vue";
import RightMainComponent from "./RightMainComponent.vue";
export default {
  components: {RightMainComponent, LeftMainComponent, WayComponent, HeaderComponent}
}

</script>

<style scoped>
.main-body{
  width: 100%;
  display: flex;
}
.left-main{
  width: 60%;
}
.right-main{
  width: 40%;

}
.project{
  max-width: 800px;
  margin: auto;
}
</style>