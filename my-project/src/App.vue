<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link exact to='/'>首页</router-link>
    <router-link to='/work' active-class="lisi">work</router-link>
    <router-link to='/stark' tag="li">stark组件</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.zhangsan{
	color: red;
}
.router-link-active{
	text-decoration: none;
	font-size: 24px;
}
.lisi{
	font-weight: 800;
}
</style>
