<template>
	<div>
		<input type="button" value="-" @click="minNum(2,'zhangsan',20)" />
		{{num}}
		<input type="button" value="+" @click="addNum(5,'lisi',18)" />
		{{num2}}
	</div>
</template>

<script>
	import {mapState,mapGetters,mapActions} from 'vuex'
	export default {
//	  name: 'Vuex',
//	  data:function () {
//	  	return {
//	  		num : 100,
//	  		num : this.$store.state.num
//	  	}
//	  },
//	  computed:{
//          num(){
//            return  this.$store.state.num
//          },
//          num2(){
//          	return this.$store.getters.count
//          }
//    },
//	  computed: mapState(['num']),
//	  computed: mapState({
//	  	num: state=> state.num  //写法1
//		num: 'num'              //写法2
//		num(state){             //写法3
//			return state.num+100
//		}
//	  }),
	  computed: {
	  	...mapState({
	  		num: 'num'
	  	}),
	  	...mapGetters({
	  		count: 'count'
	  	}),
	  	num2(){
	  		return this.$store.getters.count
	  	}
	  },
	  methods : {
//	  	addNum(num,str,age){
//	  		this.num+=5
//			this.$store.commit('Addnum')
//			this.$store.commit('Addnum',num)
//			this.$store.commit('Addnum',{n:num,name:str,ages:age})
//			this.$store.commit({
//				type: 'Addnum',
//				n: num,
//				name: str,
//				ages: age
//			})
//			this.$store.dispatch('addAction',{n:num,name:str,ages:age})
//	  	},
	  	minNum(num,str,age){
//	  		this.num-=5
//	  		this.$store.commit('Minnum')
//	  		this.$store.commit('Minnum',num)
	  		this.$store.commit('Minnum',{n:num,name:str,ages:age})
	  		
	  	},
	  	...mapActions({
	  		addNum:'addAction'
//	  		addNum:{
//	  			type: 'addAction',
//	  			n: 5,
//	  			name: 'wangwu',
//	  			ages: 20
//	  		},
//	  		
		
	  	})
	  }
	}
</script>

<style>
</style>