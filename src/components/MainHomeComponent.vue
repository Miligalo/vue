<template>
  <div class="products">
    <div class="product" v-for="good in store.state.goods">
      <router-link :to="{name: 'goodPage', params:{id: good.id}}">
        <img v-bind:src="good.img">
        <p>{{good.name}}</p>
        <p>{{good.price}}</p>
      </router-link>
        <div class="btn_set" @click="AddToCart(good)">
          <button class="cart_btn">
        <span class="button-text">
          Добавить в корзину
        </span>
          </button>
        </div>
    </div>
    <div  v-for="product in db">
      <div class="product" v-for="good in product.product">
        <router-link :to="{name: 'jsonProduct', params:{owner: product.owner, id: good.id}, props: {name: good.name, id: good.id}}">
        <p>{{good.name}}</p>
        <p>{{good.price}}</p>
        <p>{{product.owner}}</p>
        </router-link>
        <div class="btn_set" @click="addToJsonCart(good,product.owner)">
          <button class="cart_btn">
        <span class="button-text">
          Добавить в корзину
        </span>
          </button>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import db from "../../public/data.json"
let store = useStore();


function AddToCart(data){
  store.commit("addToCart", data);
}

function addToJsonCart(data,owner){
  store.commit("addToJsonCart", {data: data, owner:owner})
}

// console.log(store.state.goods)
</script>

<style scoped>
.products{

  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;

}

.product{
  height: 200px;
  width: 30%;
  margin-top: 40px;
}
.product img{
  width: 100px;
  height: 100px;
  display: flex;
  margin-left: 10px;
}

.product p{
  margin-top: 5px;
  text-align: center;
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
</style>