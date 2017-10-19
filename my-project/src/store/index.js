import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
	state: {
		num: 100
	},
	mutations: {
		Addnum (state,s) {
//			state.num+=num
			state.num+=s.n
			console.log(s)
			console.log(s.name)
			console.log(s.ages)
			
		},
		Minnum (state,num) {
//			state.num -= num
			state.num -= num.n
			console.log(num)
			console.log(num.name)
			console.log(num.ages)
			
		}
	}
})

export default store