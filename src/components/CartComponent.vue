<template>
  <div class="project">
    <header-component></header-component>
    <main-cart-component></main-cart-component>
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
import MainCartComponent from "./MainCartComponent.vue";

export default {
  name: "CartComponent",
  components: {MainCartComponent, HeaderComponent}
}
</script>

<style scoped>
.project{
  max-width: 800px;
  margin: auto;
}
</style>