<template>
	<div class="my-page">
		    <!-- Navigation -->
    <nav-header></nav-header>
    <com-title>
    	<span slot="smtitle">My Page</span>
    </com-title>
    <section class="page-section clearfix">
      <div class="container">
      	<com-imgintro>
      		<div class="pfimg" slot="smaltitle" v-bind:class="{'border':!userData.profile}">
      			<img v-bind:src="`${userData.profile}`">
      		</div>
      		<span slot="smaltitle">My Info</span>
      		<span slot="maintitle">{{userData.userName}}</span>
      		<ul slot="desc" class="profileWrap">
      			<li><div><v-icon name="phone"></v-icon></div>{{userData.phone}}</li>
      			<li><div><v-icon name="user"></v-icon></div>{{userData.userName}}</li>
      			<li><div><v-icon name="book-open"></v-icon></div>{{userData.addrs}}</li>
         	</ul>
      	</com-imgintro>
      </div>
    </section>

    <section class="page-section">
    	<div class="container">
	    	<div class="row">
	    		<div class="col-sm-12">
			    	<com-package>
			    		<span slot="smaltitle">Orders</span>
			      		<span slot="maintitle">Thanks for your suport</span>
			      		<div class="row col-sm-12 table" slot="table" v-for="(item,index) in userData.orders">
			      				<div class="col-sm-12 thead">
			      					<span class="icon">
				      					<v-icon name="calendar"></v-icon>
				      				</span>
			      					{{item.date.substr(0,4)}} - {{item.date.substr(4,2)}} - {{item.date.substr(6,2)}}
			      				</div>
								<div class="col-md-4 col-sm-12" >
									{{item.package}}
								</div>	
								<div class="col-md-4 col-sm-12" >
									<div>order details</div>
									<div><span class="icon"><v-icon name="clock"></v-icon></span><span>{{item.startTime}}:00 - {{item.endTime}}:00</span> </div>
									<div><span class="icon"><v-icon v-show="item.allowKid" name="user-check"></v-icon></span><span v-show="item.allowKid">allow kids</span><span class="icon"><v-icon v-show="!item.allowKid" name="x-check"></v-icon></span><span v-show="!item.allowKid">not allow kids</span> </div>
									<div><span class="icon"><v-icon name="book-open"></v-icon></span><span>{{item.addrs}}</span> </div>
								</div>	
								<div class="col-md-4 col-sm-12" >
									<div>contacts info</div>
									<div><span>register phone:</span><span>{{item.phone}}</span> </div>
									<div><span>user name:</span><span>{{item.userName}}</span> </div>
									<div><span>comments:</span><span>{{item.comments}}</span> </div>
								</div>			      			
			      		</div>
			    	</com-package>
			    </div>
		    </div>
		</div>
    </section>

    <section class="page-section cta">
		<com-desc>
      		<span slot="smaltitle">OUR PROMISE</span>
      		<span slot="maintitle">TO YOU</span>
      		<p slot="desc">When you walk into our shop to start your day, we are dedicated to providing you with friendly service, a welcoming atmosphere, and above all else, excellent products made with the highest quality ingredients. If you are not satisfied, please let us know and we will do whatever we can to make things right!</p>
		</com-desc>
    </section>
     <pub-alert v-bind:message="pubMes" v-bind:publicError="publicError" v-on:changePubError="changePubError"></pub-alert>
    	<nav-footer></nav-footer>
   		
	</div>
</template>

<script>
	import '../assets/css/bootstrap/bootstrap.min.css';
	import '../assets/css/product/style.css';
	import '../assets/css/product/custom.css';
	import '../assets/css/mypage.css';

	import router from '../router';
	import NavHeader from '@/components/NavHeader';
	import NavFooter from '@/components/NavFooter';
	import ComTitle from '@/components/ComTitle';
	import ComImgintro from '@/components/ComImgintro';
	import ComDesc from '@/components/ComDesc';
	import OrderTable from '@/components/OrderTable';
	import ComPackage from '@/components/ComPackage';

	import _util from '@/assets/js/util/index';
  
    import PubAlert from '@/components/Alert';

	import axios from 'axios';

	export default{
		name: 'MyPage',
		data(){
			return {
		      resData: [],
		      test: 'https://as.ftcdn.net/r/v1/pics/ea2e0032c156b2d3b52fa9a05fe30dedcb0c47e3/landing/images_photos.jpg',
		      showTable: false,
		      orderPackage: '',
		      userData: '',
              pubMes: '',
		        publicError: false
			}
		},
		mounted(){
			const _this = this;
			_this._getUser();
		},
		components:{
			NavHeader,
			NavFooter,
			ComTitle,
			ComImgintro,
			ComDesc,
			ComPackage,
			PubAlert
		},
		methods: {
			_getUser(){
				const _this = this;
		        axios.get('/users/info')
		        .then((res)=>{
		        	if(res.data.status === '1001'){
		        		// window.location.href = '/';
		        		router.push('/');
		        	}else{
			        	if(res.data.result.data){
				        	_this.userData = res.data.result.data;
			        	}else{
			        		_this.showPubErr('something wrong here,please login and try again');
			        	}
			        }
		        })
			},
	      changePubError(val){
	        this.publicError = false;
	      },
	      showPubErr(msg){
	        const _this = this;
	          _this.pubMes = msg;
	          _this.publicError = true;
	      },
	      getImg(imgurl,type){
	      	_util.getImgUrl(imgurl,type);
	      }
		}
	}

</script>