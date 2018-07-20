<template>
  <div class="header">
        <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
          <div class="container">
            <a class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#">Cleveland Cleaner</a>
            <button @click="bannerShow=!bannerShow" class="navbar-toggler" type="button">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" v-bind:class="{'show':bannerShow}" id="navbarResponsive">
              <ul class="navbar-nav mx-auto">
                <li class="nav-item active px-lg-4">
                  <a class="nav-link text-uppercase text-expanded" href="index.html">Home
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item px-lg-4">
                  <a class="nav-link text-uppercase text-expanded" href="about.html">About</a>
                </li>
                <li v-if="login" class="nav-item px-lg-4 mobileshow">
                    <router-link to="/mypage">                  
                      <a class="nav-link text-uppercase text-expanded" href="products.html">My Page</a>
                    </router-link>
                </li>
                <li v-if="login" class="nav-item px-lg-4 mobileshow">
                  <a class="nav-link text-uppercase text-expanded" href="script:void(0)" @click="logoutFunc">Logout</a>
                </li>
                <li v-if="!login" class="nav-item px-lg-4 mobileshow">
                  <a class="nav-link text-uppercase text-expanded" href="script:void(0)" @click="showLogin">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <user-prof v-if="login" v-bind:showUserPopProps="showUserPop" v-on:showUserPop="showUserPopFuc"></user-prof>
        <transition name="fade">
          <user-pop class="show-user-pop" v-show="showUserPop" v-on:logoutFunc="logoutFunc"></user-pop>
        </transition>
        <login-com v-if="!login" v-on:showLogin="showLogin">Check My Orders</login-com>
        <Modal v-bind:modalCover="modalCover" v-on:hideModal="hideModal" v-on:confirmFuc="confirmFuc">
          <div slot="title">Please Login</div>
          <div slot="content">
            <form class="loginform">
                  User Name:<br>
                  <input type="text" name="username" v-model="username" @change="errorShow=false"><br>
                  Pass Word<br>
                  <input type="password" name="userpwd" v-model="userpwd" @change="errorShow=false">
            </form>
            <div class="errormsg" v-show="errorShow">{{this.errorMsg}}</div>
          </div>
          <div slot="cancle">close</div>
          <div slot="confirm">confirm</div>
        </Modal>
  </div>
</template>
<script type="text/javascript">
  import '../assets/css/bootstrap/bootstrap.min.css';
  import '../assets/css/product/style.css';
  import '../assets/css/nav.css';
  import router from '../router'


  import _util from '@/assets/js/util/index';
  import base64 from 'base-64';
  import axios from 'axios';
  import Alert from '@/components/Alert';
  import PubAlert from '@/components/Alert';
  import Modal from '@/components/Modal';
  import UserProf from '@/components/inrcomponents/UserProf';
  import LoginCom from '@/components/inrcomponents/LoginCom';
  import UserPop from '@/components/inrcomponents/UserPop';

  export default{
    name: 'NavHeader',
    data(){
      return {
        bannerShow: false,
        username: '',
        userpwd: '',
        errorShow: false,
        errorMsg: '',
        publicError: false,
        pubMes: '',
        login: false,
        loginCover: false,
        modalCover: false,
        showUserPop: false //logout + my page popup
      }
    },
    mounted(){
      const userId = this.getCookies('_id');
      if(userId){
        this.login = true; 
      }
    },
    components: {
      Alert,
      Modal,
      UserProf,
      UserPop,
      LoginCom
    },
    methods: {
      hidelogin($event){
        this.loginCover = false;
      },
      showLogin(){
        this.loginCover = true;
        this.modalCover = true;
      },
      hideModal(){
        this.modalCover = false;
      },
      //clicked login confirm function
      confirmFuc(confirm){
        const _this = this;
        if(confirm){
          _this.loginFetch();  
        }
      },
      getCookies(cname){
        let name = cname + "=";
        const decodeCookie = decodeURIComponent(document.cookie);
        let ca = decodeCookie.split(';');
        for(let i=0;i<ca.length;i++){
          let c = ca[i];
          while (c.charAt(0) == ' '){
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0){
            return c.substring(name.length, c.length);
          }
        }
        return "";
    },
    checkLogin(){
      const _this = this;
        if(!_this.login){
          _this.loginCover = true;
          _this.modalCover = true;
        }
      },
      loginFetch(){
        const _this = this;
        axios.post('/users/loginbyuser',{
          username: _this.username,
          userpwd: base64.encode(_this.userpwd)
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
                _util.setCookie('_id',res.data.result.data._id,0.05);
                _this.showPubErr("congrates, your've login");
                router.push('/mypage');                
            }else{
              _this.errorMsg = res.data.result.msg;
              _this.errorShow = true;
            }
          });
      },
      logoutFunc(){
        this.showUserPop=false;
        axios.post('/users/logout')
          .then(res => {
            if(res.data.status === '0'){
              this.publicError = true;
              this.pubMes =  res.data.result.msg;
              this.login = false;
            }else{
              this.publicError = true;
              this.pubMes = res.data.result.msg;
            }
          })
      },
      showPubErr(msg){
        const _this = this;
          _this.pubMes = msg;
          _this.publicError = true;
      },
      showUserPopFuc(val){
        this.showUserPop=val;
      }
    }
  }
</script>

