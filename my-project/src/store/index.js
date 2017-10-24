import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
	state: {
		num: 100
	},
	getters: {
		count: state=>{
			return state.num > 130 ? 130 :state.num
		}
	},
	mutations: {
		Addnum (state,s) {
//			state.num+=num
//			如果写异步的话状态会发生混乱 mutations 的原则是同步的
//			setTimeout(()=>{
//				state.num+=s.n
//			},1000)
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
	},
	actions: {
		addAction(context,argument){
			console.log(argument);
			console.log(context);
			setTimeout(()=>{
				
//				context.commit('Addnum',{n:5,name:'wangwu',ages:20})
				context.commit('Addnum',{n:5,name:'wangwu',ages:20})
			},1000)
			context.dispatch('textAction')
		},
		textAction(context){
			console.log('textActionc触发了')
		}
	}
})

export default store