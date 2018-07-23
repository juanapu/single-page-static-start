<template>
	<div class="_j_inrcom_portfolio">
		    <!-- Portfolio Grid Section -->
		    <section class="portfolio" id="portfolio">
		      <div class="container">
		        <h2 class="text-center text-uppercase text-secondary mb-0">Portfolio</h2>
		        <hr class="star-dark mb-5">
		        <div class="row">

		          <div class="col-md-6 col-lg-4 portfolioItem1" @click="inrpopupShowFunc('portfolioItem1')">
		            <a class=" portfolio-item d-block mx-auto" href="script:void(0)">
		              <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
		                <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
		                  <i class="fa fa-hand-pointer-o fa-3x"></i>
		                </div>
		              </div>
		              <img class="img-fluid" src="http://7xsoic.com1.z0.glb.clouddn.com/adminpanel.png" alt="adminpanel">
		            </a>
		          </div>

		          <div class="col-md-6 col-lg-4">
		            <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-2">
		              <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
		                <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
		                  <i class="fa fa-hand-pointer-o fa-3x"></i>
		                </div>
		              </div>
		              <img class="img-fluid" src="http://7xsoic.com1.z0.glb.clouddn.com/bike.png" alt="bike">
		            </a>
		          </div>
		          <div class="col-md-6 col-lg-4">
		            <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-3">
		              <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
		                <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
		                  <i class="fa fa-hand-pointer-o fa-3x"></i>
		                </div>
		              </div>
		              <img class="img-fluid" src="http://7xsoic.com1.z0.glb.clouddn.com/tech5.png" alt="">
		            </a>
		          </div>
		          <div class="col-md-6 col-lg-4">
		            <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-4">
		              <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
		                <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
		                  <i class="fa fa-hand-pointer-o fa-3x"></i>
		                </div>
		              </div>
		              <img class="img-fluid" src="http://7xsoic.com1.z0.glb.clouddn.com/swimingpool.png" alt="">
		            </a>
		          </div>
		          <div class="col-md-6 col-lg-4">
		            <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-5">
		              <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
		                <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
		                  <i class="fa fa-hand-pointer-o fa-3x"></i>
		                </div>
		              </div>
		              <img class="img-fluid" src="http://7xsoic.com1.z0.glb.clouddn.com/link.png" alt="">
		            </a>
		          </div>

		          <div class="col-md-6 col-lg-4">
		            <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-6">
		              <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
		                <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
		                  <i class="fa fa-hand-pointer-o fa-3x"></i>
		                </div>
		              </div>
		              <img class="img-fluid" src="http://7xsoic.com1.z0.glb.clouddn.com/alert.png" alt="alert">
		            </a>
		          </div>

                 <div class="col-md-6 col-lg-4 add portfolioAdd" @click="inrpopupShowFunc('portfolioAdd')">
		            <a class="portfolio-item d-block mx-auto" href="javascript:void(0)">
		              <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
		                <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
		                  <i class="fa fa-plus fa-3x"></i>
		                </div>
		              </div>
		              <img class="img-fluid" src="http://7xsoic.com1.z0.glb.clouddn.com/alert.png" alt="alert">
		            </a>
		          </div>

		        </div>
		      </div>
		    </section>
		    <inrcom-popup v-bind:inrpopupShow="inrpopupShow" v-on:chgShow="inrpopupShow=false"></inrcom-popup>
	</div>
</template>
<script>
	import './index.less';
    import InrcomPopup from './components/Popup/Popup';
    import axios from 'axios';

	export default({
		data(){
			return {
				inrpopupShow: false
			}
		},
		mounted(){
			axios.get('/portfolios/vlist')
			.then((res)=>{
				console.log(res);
			})
		},
		methods: {
			inrpopupShowFunc(comp){
				const _this = this;
				_this.inrpopupShow = true;
				const ele = document.getElementsByClassName(comp)[0];
				const top = ele.offsetTop;
				document.getElementsByClassName('_j_inrcom_protfolios_popup')[0].style.top = (top-130)+'px';
			}
		},
		components: {
			InrcomPopup: InrcomPopup	
		}
	})
</script>