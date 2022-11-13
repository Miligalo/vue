import { createStore } from 'vuex'

const store = createStore({
    state(){
      return {
          product: {
              count: 0,
              color: 0,
          }
      }
    },
    mutations:{
        setProduct(state, data){
            this.state.product = data;
        }
    },
    actions:{
        setProduct({commit}){
            commit('setProduct')
        }
    }
})

export default store;
