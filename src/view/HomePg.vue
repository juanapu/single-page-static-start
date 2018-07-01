<template>
	<div class="home">
		    <!-- Navigation -->
    <nav-header></nav-header>
    <com-title>
    	<span slot="smtitle">Welcome to Cleveland Cleaner</span>
    	<span slot="pgtitle">Living Better</span>
    </com-title>
    <section class="page-section clearfix">
      <div class="container">
      	<com-imgintro>
      		<span slot="smaltitle">Best Service</span>
      		<span slot="maintitle">Here is title</span>
      		<p slot="desc">Every cup of our quality artisan coffee starts with locally sourced, hand picked ingredients. Once you try it, our coffee will be a blissful addition to your everyday morning routine - we guarantee it!</p>
      	</com-imgintro>
      </div>
    </section>

    <section class="page-section">
    	<div class="container">
	    	<div class="row">
	    		<div class="col-md-4 col-sm-12">
			    	<com-package>
			    		<span slot="smaltitle">Best Service</span>
			      		<span slot="maintitle">Here is title</span>
			      		<p slot="desc">Every cup of our quality artisan coffee starts with locally sourced, hand picked ingredients. Once you try it, our coffee will be a blissful addition to your everyday morning routine - we guarantee it!</p>
						<a class="btn btn-primary btn-xl" href="javascript:void(0);" v-on:click="orderFunc('package1')" slot="link">Order This!</a>
			    	</com-package>
			    </div>

			    <div class="col-md-4 col-sm-12">
		    		<com-package>
			    		<span slot="smaltitle">Best Service</span>
			      		<span slot="maintitle">Here is title</span>
			      		<p slot="desc">Every cup of our quality artisan coffee starts with locally sourced, hand picked ingredients. Once you try it, our coffee will be a blissful addition to your everyday morning routine - we guarantee it!</p>
						<a class="btn btn-primary btn-xl" href="javascript:void(0);" v-on:click="orderFunc('package2')" slot="link">Order This!</a>
			    	</com-package>
			    </div>
			    <div class="col-md-4 col-sm-12">
		    		<com-package>
			    		<span slot="smaltitle">Best Service</span>
			      		<span slot="maintitle">Here is title</span>
			      		<p slot="desc">Every cup of our quality artisan coffee starts with locally sourced, hand picked ingredients. Once you try it, our coffee will be a blissful addition to your everyday morning routine - we guarantee it!</p>
						<a class="btn btn-primary btn-xl" href="javascript:void(0);" v-on:click="orderFunc('package3')" slot="link">Order This!</a>
			    	</com-package>
			    </div>
		    </div>
		</div>
    </section>

    <section class="page-section about-heading" id="section-table">
    	<transition name="slide-fade">
    		<div v-show="showTable">
		    	<order-table v-bind:orderPackage="orderPackage" v-on:chgSelectPkg="chgSelectPkg"></order-table>
		    </div>
	    </transition>
	</section>

    <section class="page-section cta">
		<com-desc>
      		<span slot="smaltitle">OUR PROMISE</span>
      		<span slot="maintitle">TO YOU</span>
      		<p slot="desc">When you walk into our shop to start your day, we are dedicated to providing you with friendly service, a welcoming atmosphere, and above all else, excellent products made with the highest quality ingredients. If you are not satisfied, please let us know and we will do whatever we can to make things right!</p>
		</com-desc>
    </section>
    	<nav-footer></nav-footer>
   		
	</div>
</template>

<script>
	import '../assets/css/bootstrap/bootstrap.min.css';
	import '../assets/css/product/style.css';
	import '../assets/css/product/custom.css';

	import NavHeader from '@/components/NavHeader';
	import NavFooter from '@/components/NavFooter';
	import ComTitle from '@/components/ComTitle';
	import ComImgintro from '@/components/ComImgintro';
	import ComDesc from '@/components/ComDesc';
	import OrderTable from '@/components/OrderTable';
	import ComPackage from '@/components/ComPackage';

	export default{
		name: 'HomePg',
		data(){
			return {
		      resData: [],
		      showTable: false,
		      orderPackage: '',
			}
		},
		mounted(){

		},
		components:{
			NavHeader,
			NavFooter,
			ComTitle,
			ComImgintro,
			ComDesc,
			OrderTable,
			ComPackage
		},
		methods: {
			orderFunc(pack){
				const _this = this;
				_this.showTable=true;
				_this.orderPackage = pack;
			},
			chgSelectPkg(val){
				const _this = this;
				_this.orderPackage = val;
			}
		}
	}

</script>