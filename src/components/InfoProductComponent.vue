<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import {reactive} from "vue";
import { useRoute } from 'vue-router'


let route = useRoute

let store = useStore();
let good = store.state.goods[route().params.id - 1]
  let product = reactive({
    count: 0,
    color: '',
    name: good.name,
    price: good.price
  })

  let colors = reactive([
      {
        id: 1,
        color_class: 'color-one',
        is_active: false,
      },
    {
      id: 2,
      color_class: 'color-two',
      is_active: false,
    },
    {
      id: 3,
      color_class: 'color-three',
      is_active: false,
    },
    {
      id: 4,
      color_class: 'color-four',
      is_active: false,
    }

  ])

  function increment(){
     product.count++;
  }

  function discriminant(){
    if (product.count == 0){
      product.count
    }
    else {
      product.count--
    }
  }

let active_color = null;
let cart_item = null;
function getColor(color_item){
  product.color = color_item.id;
  if(active_color !== null){
    active_color.is_active = false
  }
  active_color = color_item

  color_item.is_active = true
  }

  function reset() {
    active_color.is_active = false;
    product.color = '';
    product.count = 0;
  }

  function addToCard(){
    cart_item = product;
    store.commit("setProduct", product);
    console.log(store.state.cart)

  }
  let goods = store.state.goods



</script>


<template>
  <div class="block">
      <div class="main-title">
        <h3>{{good.name}}</h3>
      </div>
      <div class="second-title">
        <h4>PKR {{good.price}}</h4>
      </div>
    <div class="main-info">
      <p>
        These colorful half daisy earrings are a lightweight, handmade statement piece for any outfit available in four beautiful shades.
      </p>
      <p class="second-text">Dimensions: 2 x 2.5 in</p>
    </div>
    <div class="colours">
      <div class="colours-title">
          <h5>Colours</h5>
      </div>
      <div class="select-color">
        <button v-for="color in colors" @click="getColor(color)" v-bind:class="[color.is_active ? 'active' : '', color.color_class]"></button>
          <button class="reset" @click="reset()">reset</button>
      </div>

    </div>
    <div class="quantity-block">
      <div class="quantity-title">
          <h5>Quantity</h5>
      </div>
      <form class='quantity' action='#'>
        <input @click="discriminant" type='button' value='-' class='qtyminus minus' field='quantity' />
        <input type='text'  name='quantity' v-bind:value="product.count" class='qty' />
        <input @click="increment" type='button' value='+' class='qtyplus plus' field='quantity' />
      </form>
    </div>
    <div class="btn_set">
      <button class="cart_btn" :disabled="product.count === 0 || product.color === ''" @click="addToCard">
        <span class="button-text">
          Add to cart
        </span>
      </button>
    </div>
  </div>

</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;300;600&display=swap');
  .main-title{
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 5px;
  }
  .reset{
    border: 0px;
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    background: 0;
    margin-left: 20px;
    cursor: pointer;
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
.qty {
  width: 40px;
  height: 15px;
  text-align: center;
  border: 0px;
  font-family: 'Poppins',sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
}
.qtyminus{
 background: #F5F5F5;
  border: 0px;
  width: 16px;
  color: #6B6B6B;
  cursor: pointer;
}
.qtyplus{
  background: #F5F5F5;
  border: 0px;
  width: 16px;
  color: #6B6B6B;
  cursor: pointer;
}
  .quantity-block{
    margin-top: 15px;
  }
  .quantity-title{
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 15px;
  }
  .select-color{
    display: flex;
  }
  .color-one{
    background: #9FC8DC;
    width: 25px;
    height: 22px;
    border-radius: 20%;
    margin-right: 8px;
    cursor: pointer;
    border: 0px;
  }

  .color-two{
    background: #E8653A;
    width: 25px;
    height: 22px;
    border-radius: 20%;
    margin-right: 8px;
    cursor: pointer;
    border: 0px;
  }
  .color-three{
    background: #D29DD7;
    width: 25px;
    height: 22px;
    border-radius: 20%;
    margin-right: 8px;
    cursor: pointer;
    border: 0px;
  }
  .color-four{
  background: #F9B2BB;
  width: 25px;
  height: 22px;
  border-radius: 20%;
  margin-right: 8px;
  cursor: pointer;
  border: 0px;
}
.active{
  border: 1px solid black !important;
}
  .second-text{
    margin-top: 3px;
  }
  .block{
    margin-top: 20px;
  }
  .colours{
    margin-top: 50px;
  }
  .colours-title{
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 15px;
    color: black;
  }
  .main-info{
    max-width: 256px;
    margin-top: 30px;
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 15px;
  }
  .second-title{
    margin-top: 3px;
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
  }
</style>