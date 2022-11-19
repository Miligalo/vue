<template>
  <div class="project">
    <header-component></header-component>
    <way-component></way-component>
    <div class="main-body">
      <div class="left-main">
        <img-product-component></img-product-component>
      </div>
      <div class="right-main">
        <json-product-info-component></json-product-info-component>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import JsonProductInfoComponent from "../components/JsonProductInfoComponent.vue";
import ImgProductComponent from "../components/ImgProductComponent.vue";
import WayComponent from "../components/WayComponent.vue";

export default {
  name: "JsonProductPage",
  components: {WayComponent, ImgProductComponent, JsonProductInfoComponent, HeaderComponent}
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