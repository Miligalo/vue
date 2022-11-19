<template>
  <div class="project">
    <header-component></header-component>
    <main-cart-component></main-cart-component>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import MainCartComponent from "../components/MainCartComponent.vue";

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