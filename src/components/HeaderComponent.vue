

<script setup>
import { useStore } from 'vuex'
let store = useStore();
</script>


<template>
  <header class="main-header">
    <div class="name-company">
      <h1><span class="a">C</span><span class="b">l</span><span class="c">a</span><span class="d">y</span> <span class="e">C</span><span class="f">r</span><span class="g">e</span><span class="h">a</span><span class="i">t</span><span class="j">i</span><span class="k">o</span><span class="l">n</span><span class="m">s</span></h1>
    </div>
    <nav class="header-nav">
        <ul class="ul-header">
          <li>
            <router-link to="/home" class="header-link">
                Home
            </router-link>
          </li>
          <li>
            <router-link to="/product" class="header-link">
              Products
            </router-link>
          </li>
          <li>
            <a href="#" class="header-link">Care Instructions</a>
          </li>
        </ul>
    </nav>
    <div class="right_header">
      <div class="item">
        <img src="../../public/img/search.png">
      </div>
      <router-link style="height: 24px" to="/cart">
      <div class="item">
        <img src="../../public/img/shopping_bag.png">
        <div class="counter">
          <span class="span_id">{{store.state.cart.length}}</span>
        </div>
      </div>
      </router-link>
      <div class="item">
        <img src="../../public/img/account_circle.png">
      </div>
    </div>
  </header>
</template>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
.counter{
  margin-left: -12px;
  margin-top: 12px;
}
.span_id{
  height: 14px;
  width: 15px;
  background-color: #F1635A;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 'Poppins',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;

}
  .item{
    display: inline-flex;
    margin-right: 20px;
  }
  .right_header{
    margin: auto;
  }
  .ul-header{
    display: flex;
    width: 100%;
    margin: auto;
    justify-content: space-around;
  }
  .header-link{
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    color: #6B6B6B;
    text-decoration: none;
  }
  .header-nav{
    width: 40%;
    display: flex;
  }
  .main-header{
    display: flex;
    margin-top: 42px;
    width: 100%;
  }
  .name-company{
    width: 25%;
    margin-left: 32px;
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 1000;
    font-size: 24px;
    line-height: 36px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .a{
    color: #FF6B6B;
  }
  .b{
    color: #FFAC4A;
  }
  .c{
    color: #EEDC3E;
  }
  .d{
    color: #36CC4E;
  }
  .e{
    color: #2A86F3;
  }

  .f{
    color: #9167EA;
  }

  .g{
    color: #3C07AC;
  }

  .h{
    color: #FEB8B4
  }

  .i{
    color: #FFCE6D;
  }

  .j{
    color: #CCE72A;
  }
  .k{
    color: #6DE8AD;
  }
  .l{
    color: #8ECEEA;
  }
  .m{
    color: #E5B2F7;
  }

</style>