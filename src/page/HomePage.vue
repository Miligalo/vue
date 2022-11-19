<template>
  <div class="project">
    <HeaderComponent></HeaderComponent>
    <MainHomeComponent></MainHomeComponent>
  </div>

</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import MainHomeComponent from "../components/MainHomeComponent.vue";
export default {
  name: "HomeComponent",
  components: {MainHomeComponent, HeaderComponent}
}
</script>

<style scoped>

.project{
  max-width: 800px;
  margin: auto;
}

</style>