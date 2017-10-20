<template>
	<div>
		<NavHrader/>
	    <!--<div class="nav-breadcrumb-wrap">
	        <div class="container">
	            <nav class="nav-breadcrumb">
	                <a href="/">Home</a>
	                <span>Goods</span>
	            </nav>
	        </div>
	    </div>-->
	    <NavBard/>
	    <div class="accessory-result-page accessory-page">
	        <div class="container">
	            <div class="filter-nav">
	                <span class="sortby">Sort by:</span>
	                <a href="javascript:void(0)" class="default cur">Default</a>
	                <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
	                <a href="javascript:void(0)" class="filterby stopPop">Filter by</a>
	            </div>
	            <div class="accessory-result">
	                <!-- filter -->
	                <div class="filter stopPop" id="filter">
	                    <dl class="filter-price">
	                        <dt>Price:</dt>
	                        <dd><a href="javascript:void(0)">All</a></dd>
	                        <dd>
	                            <a href="javascript:void(0)">0 - 100</a>
	                        </dd>
	                        <dd>
	                            <a href="javascript:void(0)">100 - 500</a>
	                        </dd>
	                        <dd>
	                            <a href="javascript:void(0)">500 - 1000</a>
	                        </dd>
	                        <dd>
	                            <a href="javascript:void(0)">1000 - 2000</a>
	                        </dd>
	                    </dl>
	                </div>
	
	                <!-- search result accessories list -->
	                <div class="accessory-list-wrap">
	                    <div class="accessory-list col-4">
	                        <ul>
	                            <li v-for="(item,index) in goodsList" :key="index">
	                                <div class="pic">
	                                    <a href="#"><img :src="'static/img/'+item.productImage" alt=""></a>
	                                </div>
	                                <div class="main">
	                                    <div class="name">item.productName</div>
	                                    <div class="price">item.salePrice</div>
	                                    <div class="btn-area">
	                                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
	                                    </div>
	                                </div>
	                            </li>
	                           
	                        </ul>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
	    <!-- <footer class="footer">
	  <div class="footer__wrap">
	    <div class="footer__secondary">
	      <div class="footer__inner">
	        <div class="footer__region">
	          <span>Region</span>
	          <select class="footer__region__select">
	            <option value="en-US">USA</option>
	            <option value="zh-CN">China</option>
	            <option value="in">India</option>
	          </select>
	        </div>
	        <div class="footer__secondary__nav">
	          <span>Copyright © 2017 Shudong All Rights Reserved.</span>
	          <a href="http://us.lemall.com/us/aboutUs.html">
	            About Us
	          </a>
	          <a href="http://us.lemall.com/us/termsofUse.html">
	            Terms &amp; Conditions
	          </a>
	          <a href="http://us.lemall.com/us/privacyPolicy.html">
	            Privacy Policy
	          </a>
	        </div>
	      </div>
	    </div>
	  </div>
	</footer> -->
	    <!--<div class="site-footer">
	        <div class="container">
	            <div class="footer-service">-->
	                <!-- <ul class="list-service clearfix">
	                    <li>
	                        <a rel="nofollow" href="javascript:void(0)">
	                            <i class="iconfont"></i>1小时快修服务
	                        </a>
	                    </li>
	                    <li>
	                        <a rel="nofollow" href="javascript:void(0)">
	                            <i class="iconfont"></i>7天无理由退货
	                        </a>
	                    </li>
	                    <li>
	                        <a rel="nofollow" href="javascript:void(0)">
	                            <i class="iconfont"></i>15天免费换货
	                        </a>
	                    </li>
	                    <li>
	                        <a rel="nofollow" href="javascript:void(0)">
	                            <i class="iconfont"></i>满150元包邮
	                        </a>
	                    </li>
	                    <li>
	                        <a rel="nofollow" href="javascript:void(0)">
	                            <i class="iconfont"></i>520余家售后网点
	                        </a>
	                    </li>
	                </ul> -->
	            <!--</div>
	            <div class="footer-links clearfix">
	                <div class="blank"></div>
	
	                <dl class="col-links">
	                    <dt>帮助中心</dt>
	                    <dd>
	                        <a href="article.php?id=9" target="_blank" title="配送方式" rel="nofollow">配送方式</a>
	                    </dd>
	                    <dd>
	                        <a href="article.php?id=10" target="_blank" title="支付方式" rel="nofollow">支付方式</a>
	                    </dd>
	                    <dd>
	                        <a href="article.php?id=11" target="_blank" title="购物指南" rel="nofollow">购物指南</a>
	                    </dd>
	
	                </dl>
	
	
	                <dl class="col-links">
	                    <dt>服务支持</dt>
	                    <dd>
	                        <a href="article.php?id=21" target="_blank" title="相关下载" rel="nofollow">相关下载</a>
	                    </dd>
	                    <dd>
	                        <a href="article.php?id=22" target="_blank" title="自助服务" rel="nofollow">自助服务</a>
	                    </dd>
	                    <dd>
	                        <a href="article.php?id=23" target="_blank" title="售后政策" rel="nofollow">售后政策</a>
	                    </dd>
	
	                </dl>
	
	
	                <dl class="col-links">
	                    <dt>vnshop</dt>
	                    <dd>
	                        <a href="article.php?id=12" target="_blank" title="预约亲临到店服务" rel="nofollow">预约亲临到店服务</a>
	                    </dd>
	                    <dd>
	                        <a href="article.php?id=13" target="_blank" title="服务网点" rel="nofollow">服务网点</a>
	                    </dd>
	                    <dd>
	                        <a href="article.php?id=14" target="_blank" title="vnshop" rel="nofollow">vnshop</a>
	                    </dd>
	
	                </dl>
	
	
	                <dl class="col-links">
	                    <dt>vnshop</dt>
	                    <dd>
	                        <a href="article.php?id=24" target="_blank" title="vnshop" rel="nofollow">vnshop</a>
	                    </dd>
	                    <dd>
	                        <a href="article.php?id=25" target="_blank" title="vnshop" rel="nofollow">vnshop</a>
	                    </dd>
	                    <dd>
	                        <a href="article.php?id=26" target="_blank" title="vnshop" rel="nofollow">vnshop</a>
	                    </dd>
	
	                </dl>
	
	
	                <dl class="col-links">
	                    <dt>vnshop</dt>
	                    <dd>
	                        <a href="article.php?id=15" target="_blank" title="官方微信" rel="nofollow">官方微信</a>
	                    </dd>
	                    <dd>
	                        <a href="article.php?id=16" target="_blank" title="vnshop" rel="nofollow">vnshop</a>
	                    </dd>
	                    <dd>
	                        <a href="article.php?id=17" target="_blank" title="新浪微博" rel="nofollow">新浪微博</a>
	                    </dd>
	
	                </dl>
	
	
	
	
	
	                <div class="col-contact">
	                    <p class="phone">400-023-3005</p>
	                    <p>周一至周日 8:00-18:00<br>（仅收市话费）</p>
	                    <a rel="nofollow" class="btn btn-line-primary btn-small">
	                        <i class="iconfont"></i> 24小时在线客服
	                    </a>
	                </div>
	            </div>
	        </div>
	    </div>-->
	    <!--<div class="site-info">
	        <div class="container">
	            <div class="logo ir">小米官网</div>
	            <div class="info-text">
	                <p class="sites">
	                </p>
	                <p>
	                    ©<a href='#'>mi.shudong.wang</a> 京ICP证110507号 京ICP备10046444号 京公网安备1101080212535号 <a href='#'>京网文[2014]0059-0009号</a>
	                </p>
	            </div>
	            <div class="info-links">
	                <a href="#"><img src="http://s1.mi.shudong.wang/zt/12052601/cnnicVerifyseal.png" alt="可信网站"></a>
	                <a href="#"><img src="http://s1.mi.shudong.wang/zt/12052601/szfwVerifyseal.gif" alt="诚信网站"></a>
	                <a href="#"><img src="http://s1.mi.shudong.wang/zt/12052601/save.jpg" alt="网上交易保障中心"></a>
	            </div>
	        </div>
	    </div>-->
		<FooterHrader/>
	</div>
</template>

<script>
	import NavHrader from '@/components/Header'
	import FooterHrader from '@/components/Footer'
	import NavBard from '@/components/NavBard'
	import axios from 'axios'
//	import '../../static/css/base.css'
//	import '../../static/css/product.css'
//	import '../../static/css/checkout.css'
//	import '../../static/css/login.css'
//	import '../../static/css/style.css'
	export default {
		components:{
			NavHrader,
			FooterHrader,
			NavBard
		},
		data(){
			return {
				goodsList: {}
			}
		},
		created(){
			this.getGoodsList()
		},
		 methods:{
            getGoodsList(){
                axios.get('http://easy-mock.com/mock/59e9e14945e0bc5d2a86d978/example/').then(res=>{
                    console.log(res);
                    this.goodsList = res.data.data;
                })
            }
        }
	}
</script>

<style>
</style>
