import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    state:{
        product: {
            count: 0,
            color: 0,
        }
    },
    plugins: [createPersistedState()],
    mutations:{
        setProduct(state, data){
            this.state.product = data;
            // console.log(JSON.parse(localStorage.getItem("product")))
            // localStorage.setItem('product', JSON.stringify(data))
        }
    },
    actions:{
        setProduct({commit}){
            commit('setProduct')
        }
    }
})

export default store;
