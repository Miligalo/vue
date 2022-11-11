<template>
  <div class="cart-block">
    <div class="left-cart-block">
      <div class="left-text">
        <h5>Cart</h5>
      </div>
    </div>
    <div class="right-cart-block">
      <div class="text-way">
        <p>Home > Cart</p>
      </div>
    </div>
  </div>
  
  <div class="main-block">
    <div v-if="store.state.lol == null" class="no-cart">
      <div class="cart-img">
        <img src="public/img/nocartIcon.png">
      </div>

      <div class="message">
          <p>Ваша корзина пуста</p>
        <div>{{store.state.lol}}</div>
      </div>
    </div>

    <div>
<!--      Количество: {{ store.state.lol.count}}-->
<!--      Id цвета: {{store.state.lol.color}}-->
    </div>

  </div>
</template>

<script setup>
import { useStore } from 'vuex'

let store = useStore();

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;300;600&display=swap');
  .cart-block{
    margin-top: 40px;
    margin-left: 15px;
    margin-right: 35px;
    display: flex;
  }
  .left-cart-block{
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    margin-left: 30px;
  }
  .left-text{
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 21px;
  }
  .right-cart-block{
    width: 50%;
  }
  .text-way{
    display: flex;
    justify-content: space-around;

    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 12px;
    color: #636363;
  }
  .main-block{
    width: 100%;
    margin-top: 30px;
  }
  .no-cart{

  }
  .cart-img{
    display: flex;
    justify-content: center;
  }
  .message{
    display: flex;
    justify-content: center;

    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 12px;
    color: #636363;
  }

</style>