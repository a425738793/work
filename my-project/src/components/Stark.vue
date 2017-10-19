<template>
	<div>
		我是stark组件
		
		<router-link :to="'/stark/' + item.name" v-for="item in infoList" :key="item.id">{{item.age}} </router-link>
	    <p>name:{{userInfo.name}}</p>
		<p>age:{{userInfo.age}}</p>
	</div>
</template>

<script>
	let data = [
	  {
	    id: 1,
	    name: 'zhangsan',
	    age: 15
	  },
	  {
	    id: 2,
	    name: 'lisi',
	    age: 16
	  },
	  {
	    id: 3,
	    name: 'wangwu',
	    age: 17
	  }
	]
	export default{
	  data () {
	    return {
	      infoList: data,
	      userInfo: ''
	    }
	  },
	  watch: {
    $route () {
      this.getData()
    }
  },
	  created () {
	    this.getData()
	  },
	  methods: {
	    getData () {
	      let name = this.$route.params.user
	      if (name) {
	        this.userInfo = this.infoList.filter((item) => {
	          return item.name === name
	        })[0]
	      }
	      console.log(this.userInfo)
	    }
	  }
	}
</script>

<style>
</style>