<template>
	<div class="_j_inrcom_protfolios_popup">
		    <div class="portfolio-modal" v-bind:class="{'mfp-hide':!inrpopupShow}" id="portfolio-modal-1">
		      <div class="portfolio-modal-dialog bg-white">
		        <a @click="changeShow" class="close-button d-none d-md-block portfolio-modal-dismiss" href="javascript:void(0)">
		          <i class="fa fa-3x fa-times"></i>
		        </a>
		        <div class="container text-center">
		          <div class="row">
		            <div class="col-lg-8 mx-auto">
		              <h2 class="text-secondary text-uppercase mb-0">React Admin Panel</h2>
		              <hr class="star-dark solo mb-5">
		              <!-- <img class="img-fluid mb-5" src="img/portfolio/cabin.png" alt=""> -->
		              <video class="img-fluid mb-5" controls> 
		                <source src="http://7xsoic.com1.z0.glb.clouddn.com/videoadminpaneldemo.mp4" type="video/mp4">
		                  Your browser does not support the html5 tag
		              </video>
		              <p class="mb-5">Framework: React + Redux + React Router 4.<br/>
		                              Language: Javascript, ES6, nodejs<br/>
		                              Library: Less, Antdesign<br/>
		                              Tool: Webpack, Babel
		              </p>
		              <a class="btn btn-primary btn-lg rounded-pill" target="_blank" href="http://120.79.9.10/projects/">
		                check project
		              </a>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
	</div>
</template>

<script>
	export default({
		props: ['inrpopupShow'],
		data(){
			return{
				data: []
			}
		},
		methods: {
			changeShow(){
				this.$emit('chgShow',false);
			}
		}
	})
</script>
