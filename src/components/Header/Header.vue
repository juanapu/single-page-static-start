<template>
	<div class="_j_pub_header">
		    <nav class="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
		      <div class="container">
		        <a class="navbar-brand js-scroll-trigger" href="#page-top">Juana</a>
		        <button class="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
		          Menu
		          <i class="fa fa-bars"></i>
		        </button>
		        <div class="collapse navbar-collapse" id="navbarResponsive">
		          <ul class="navbar-nav ml-auto">
		            <li class="nav-item mx-0 mx-lg-1">
		              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Portfolio</a>
		            </li>
		            <li class="nav-item mx-0 mx-lg-1">
		              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a>
		            </li>
		            <li class="nav-item mx-0 mx-lg-1">
		              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">More</a>
		            </li>
		            <li class="nav-item mx-0 mx-lg-1">
		              <a @click="modalCover=true" v-show="!login" class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="javascript:void(0)">Admin</a>
		              <a @click="logoutFunc" v-show="login" class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="javascript:void(0)">Logout</a>
		            </li>
		          </ul>
		        </div>
		      </div>
		    </nav>
		    <!-- login modal -->
	        <Modal v-bind:modalCover="modalCover" v-on:hideModal="hideModal" v-on:confirmFuc="confirmFuc">
	          <div slot="title">Admin Login</div>
	          <div slot="content">
	            <form class="loginform">
	                  User Name:<br>
	                  <input type="text" name="username" v-model="username" @change="errorShow=false"><br>
	                  Pass Word<br>
	                  <input type="password" name="password" v-model="password" @change="errorShow=false">
	            </form>
	            <div class="errormsg" v-show="errorShow">*{{this.errorMsg}}</div>
	          </div>
	          <div slot="cancle">close</div>
	          <div slot="confirm">confirm</div>
        </Modal>

	</div>
</template>
<script>
	import '@/assets/vendor/bootstrap/css/bootstrap.min.css';
	import '@/assets/vendor/font-awesome/css/font-awesome.min.css';
	import '@/assets/vendor/magnific-popup/magnific-popup.css';
	import '@/assets/vendor/css/freelancer.min.css';
	import '@/assets/vendor/css/style.css';
	import axios from 'axios';
	import Modal from '@/components/Modal/Modal';
	import './index.less';


	export default({
		data(){
			return {
				 login: false,
				 modalCover: false,
				 username: '',
				password: '',
				errorShow: false,
				errorMsg: ''	 
			}
		},
		mounted(){
			const _this = this;
			_this.login = (_this.checkLogin()).length?true:false;
		},
		methods: {
			hideModal(){
		        this.modalCover = false;
		      },
		      checkLogin(){
		      	const cookie = document.cookie;
		      	const ind = cookie.indexOf('_id=')+4;
		      	const lastletter = cookie.indexOf(';',ind);
		      	const result = (lastletter === -1)?cookie.substring(ind):cookie.substring(ind,lastletter);
		      	return result
		      },
		      logoutFunc(){
		      	const _this = this;
		      	axios.post('/users/logout')
		      	 .then(res=>{
			      	 	_this.errorMsg = res.data.result.msg;
		               _this.errorShow = true;
		               _this.login = false;
		      	 });
		      },
		      confirmFuc(confirm){
		        const _this = this;
		        if(confirm){
		          _this.loginFetch();  
		        }
		      },
		       loginFetch(){
		        const _this = this;
		        axios.post('/users/login',{
		          username: _this.username,
		          password: _this.password
		        })
		          .then(res=>{
		            if(res.data.status === '1'){
		            	 _this.errorMsg = res.data.result.msg;
		               _this.errorShow = true;
		            }else if(res.data.status === '0'){
                       _this.errorShow = false;
		                _this.loginCover = false;
		                _this.modalCover= false;
		                _this.login = true;
		                // _util.setCookie('_id',res.data.result.data._id,0.05);
		                // _this.showPubErr("congrates, your've login");
		            }else{
			             _this.errorMsg = res.data.result.msg;
			              _this.errorShow = true;
		            }
		          });
		      }
	},
	components: {
		Modal: Modal
	}
	})
</script>