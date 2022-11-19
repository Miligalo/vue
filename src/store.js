import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    state:{
        product: {
            count: 0,
            color: 0,
        },
        cart: [],
        jsonCart: [],
        goods:[
            {
                id: 1,
                name: 'Half Daisy Dangles',
                price: 900,
                img: "public/img/Main%20picture.png",
                color: 1,
                count: 1,
            },
            {
                id: 2,
                name: 'Half Daisy Dangles 2',
                price: 1900,
                img: "public/img/Main%20picture.png",
                color: 1,
                count: 1,
            },
            {
                id: 3,
                name: 'Half Daisy Dangles 3',
                price: 2900,
                img: "public/img/Main%20picture.png",
                color: 1,
                count: 1,
            },
        ],
    },
    plugins: [createPersistedState()],
    mutations:{
        setProduct(state, data){
            this.state.cart.push(data);
        },
        deleteItem(state,index){
            let lol = this.state.cart
            lol.splice(index,1);
        },
        addToCart(state,data){
            this.state.cart.push(data);
        },
        addToJsonCart(state,data, owner){

            if (!this.state.jsonCart[data.owner]){
                this.state.jsonCart[data.owner]=[data.data]
            }
            else {
                this.state.jsonCart[data.owner].push(data.data);
            }

        }
    },
    actions:{
        setProduct({commit}){
            commit('setProduct')
        },
        deleteItem({commit}){
            commit('deleteItem')
        }
    }
})

export default store;
