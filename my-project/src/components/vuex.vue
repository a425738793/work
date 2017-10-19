<template>
	<div>
		<input type="button" value="-" @click="minNum(2,'zhangsan',20)" />
		{{num}}
		<input type="button" value="+" @click="addNum(5,'lisi',18)" />
	</div>
</template>

<script>
	export default {
//	  name: 'Vuex',
//	  data:function () {
//	  	return {
//	  		num : 100,
//	  		num : this.$store.state.num
//	  	}
//	  },
	  computed:{
            num(){
              return  this.$store.state.num
            }
      },
	  methods : {
	  	addNum(num,str,age){
//	  		this.num+=5
//			this.$store.commit('Addnum')
//			this.$store.commit('Addnum',num)
			this.$store.commit('Addnum',{n:num,name:str,ages:age})
			
	  	},
	  	minNum(num,str,age){
//	  		this.num-=5
//	  		this.$store.commit('Minnum')
//	  		this.$store.commit('Minnum',num)
	  		this.$store.commit('Minnum',{n:num,name:str,ages:age})
	  		
	  	}
	  }
	}
</script>

<style>
</style>