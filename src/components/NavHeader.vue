<template>
  <div class="header">
        <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
          <div class="container">
            <a class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#">Start Bootstrap</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav mx-auto">
                <li class="nav-item active px-lg-4">
                  <a class="nav-link text-uppercase text-expanded" href="index.html">Home
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item px-lg-4">
                  <a class="nav-link text-uppercase text-expanded" href="about.html">About</a>
                </li>
                <li class="nav-item px-lg-4">
                  <a class="nav-link text-uppercase text-expanded" href="products.html">Products</a>
                </li>
                <li class="nav-item px-lg-4">
                  <a class="nav-link text-uppercase text-expanded" href="store.html">Store</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  </div>
</template>
<script type="text/javascript">
  import '../assets/css/bootstrap/bootstrap.min.css';
  import '../assets/css/product/style.css';
  
  import axios from 'axios';
  import Alert from '@/components/Alert';
  import Modal from '@/components/Modal';

  export default{
    name: 'NavHeader',
    props: ["loginProps"],
    data(){
      return {
        username: '',
        userpwd: '',
        errorShow: false,
        errorMsg: '',
        publicErrorShow: false,
        publicErrorMsg: '',
        login: this.loginProps,
        loginCover: false
      }
    },
    mounted(){
      const userId = this.getCookies('userId');
      if(userId){
        this.login = true; 
      }
    },
    components: {
      Alert,
      Modal
    },
    methods: {
      hidelogin($event){
        this.loginCover = false;
      },
      showLogin(){
        this.loginCover = true;
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
      loginFetch(){
        axios.post('/users/login',{
          username: this.username,
          userpwd: this.userpwd
        })
          .then(res=>{
            if(res.data.status === '1'){
               this.errorMsg = res.data.msg;
               this.errorShow = true;
            }else if(res.data.status === '0'){
                this.errorShow = false;
                this.loginCover = false;
                this.login = true;
            }else{
              this.errorMsg = res.data.result.msg;
              this.errorShow = true;
            }
          });
      },
      logoutFunc(){
        axios.post('/users/logout')
          .then(res => {
            if(res.data.status === '0'){
              this.publicErrorShow = true;
              this.publicErrorMsg =  res.data.result.msg;
              this.login = false;
            }else{
              this.publicErrorShow = true;
              this.publicErrorMsg = res.data.result.msg;
            }
          })
      }
    }
  }
</script>

