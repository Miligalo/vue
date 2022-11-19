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
    <div v-if="store.state.cart.length === 0 && store.state.jsonCart.length === 0" class="no-cart">
      <div class="cart-img">
        <img src="public/img/nocartIcon.png">
      </div>

      <div class="message">
          <p>Ваша корзина пуста</p>
        <div></div>
      </div>
    </div>

    <div class="cart-item" v-else v-for="(product, index) in store.state.cart" :key="index">
         <p>Название продукта: {{product.name}}</p>
        <p>Цена: {{product.price * product.count}}</p>
        <p> Количество продукта: {{ product.count}}</p>
        <p> Цвет продукта: {{product.color}} </p>
      <div class="btn_set">
        <button class="cart_btn" @click="deleteItem(index)">
        <span class="button-text">
          удалить
        </span>
        </button>
      </div>
      <div>
      </div>
    </div>
    </div>
  <div v-for="(good, key) in store.state.jsonCart" :key="key" v-if="store.state.jsonCart.length > 0">
    <h5 v-if="good != null" class="main-owner">Овнер: {{key}}</h5>
    <div class="left-text" v-for="product in good" >
    </div>
      <div class="cart-item" v-for="product in good">
        <p>Название продукта: {{product.name}}</p>
        <p>Цена: {{product.price}} </p>
      </div>




  </div>


</template>

<script setup>
import { useStore } from 'vuex'
import {reactive} from "vue";

let store = useStore();
console.log(store.state.cart)
console.log(store.state.jsonCart)
function deleteItem(item){
  store.commit("deleteItem", item);
}



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
  .main-owner{
    text-align: center;
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
    display: flex;
    flex-wrap: wrap;
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

.button-text{
  font-family: 'Poppins',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
}
.btn_set{
  display: flex;
  justify-content: center;
}
.cart_btn {
  margin-top: 30px;
  background: #FFDB95;
  border: 5px;
  border-radius: 5px;
  padding: 5px 78px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  line-height: 19px;
  cursor: pointer;
}

.cart-item{
  margin: 20px;
  width: 40%;
  text-align: center;
}
</style>