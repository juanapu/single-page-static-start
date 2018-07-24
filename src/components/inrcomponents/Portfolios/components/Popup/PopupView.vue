<template>
	<div v-if="popdata" class="_j_inrcom_protfolios_popup addpop">
		    <div class="portfolio-modal" v-bind:class="{'mfp-hide':!inrpopupShow}" id="portfolio-modal-1">
		      <div class="portfolio-modal-dialog bg-white">
		        <a @click="changeShow" class="close-button d-none d-md-block portfolio-modal-dismiss" href="javascript:void(0)">
		          <i class="fa fa-3x fa-times"></i>
		        </a>
		        <div class="container text-center">
		          
		          <div class="row">
		            <div class="col-lg-8 mx-auto">
		            	   <h2 class="text-secondary text-uppercase mb-0">{{popdata.title}}</h2>
			              <hr class="star-dark mb-5" v-bind:class="{'solo':popdata.des!='star-dark'}">
			              <!-- <img class="img-fluid mb-5" src="img/portfolio/cabin.png" alt=""> -->
			              <video v-show="popdata.vurl" class="img-fluid mb-5" controls> 
			                <source  v-bind:src="popdata.vurl" type="video/mp4">
			                  Your browser does not support the html5 tag
			              </video>
			              <p class="mb-5" v-html="popdata.content">
			              </p>
		                  <a @click="deleteFunc" class="btn btn-danger btn-lg rounded-pill" target="_blank" href="javascript:void(0)">
			                Delete
			              </a>
			              <a @click="triggerEdit" class="btn btn-primary btn-lg rounded-pill" target="_blank" href="javascript:void(0)">
			                Edit
			              </a>
		            </div>
		          </div>

		        </div>
		      </div>
		    </div>
		    <cus-modal v-bind:modalCover="modalCover" v-on:hideModal="hideModal" v-on:confirmFuc="deleteConfirmFuc">
		    	 <strong slot="title">Warning</strong>
		    	 <p slot="content"> Are you sure to delete this project?</p>
		    	 <span slot="confirm">Yes</span>
		    	 <span slot="cancle">Cancel</span>
		    </cus-modal>
	</div>
</template>

<script>
    import axios from 'axios';
    import CusModal from '@/components/Modal/Modal';

	export default({
		props: ['inrpopupShow','popindex','popid','popdata'],
		data(){
			return{
				data: [],
				modalCover: false
			}
		},
		methods: {
			changeShow(){
				this.$emit('chgShow',false);
			},
			triggerEdit(){
				const _this = this;
				_this.changeShow();
				_this.$emit('triggerEdit',true);
			},
			deleteFunc(){
				this.modalCover = true;
			},
			deleteConfirmFuc(){
				const _this = this;
				axios.post('/portfolios/delete',{
					_vid: _this.popid
				}).then(res=>{
					if(res.data.status === '0'){
						_this.changeShow();
						_this.modalCover = false;
					}else{
						alert(res.data.result.msg);
					}
				})
			},
			hideModal(){
				this.modalCover = false;
			}
		},
		components: {
			CusModal:CusModal	
		}

	})
</script>
