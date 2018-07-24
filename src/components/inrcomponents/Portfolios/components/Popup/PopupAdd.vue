<template>
	<div class="_j_inrcom_protfolios_popup addpop">
		    <div class="portfolio-modal" v-bind:class="{'mfp-hide':!inrpopupShowAdd}" id="portfolio-modal-1">
		      <div class="portfolio-modal-dialog bg-white">
		        <a @click="changeShow" class="close-button d-none d-md-block portfolio-modal-dismiss" href="javascript:void(0)">
		          <i class="fa fa-3x fa-times"></i>
		        </a>
		        <div class="container text-center">
		          <div class="row">
		            <div class="col-lg-8 mx-auto">
		            	<form class="form-horizontal">
			            	<div class="form-group">
								  <label class="control-label col-xs-12 col-md-2" for="fadd_imgurl">imgurl:</label><div class="col-xs-12 col-md-10">
								  	<input v-model="params.imgurl" type="text" class="form-control" id="fadd_imgurl">
								</div>
							</div>

			            	<div class="form-group">
								  <label class="control-label col-xs-12 col-md-2" for="fadd_alt">alt:</label><div class="col-xs-12 col-md-10">
								  	<input v-model="params.alt" type="text" class="form-control" id="fadd_alt">
								</div>
							</div>

			            	<div class="form-group">
								  <label class="control-label col-xs-12 col-md-2" for="fadd_title">title:</label><div class="col-xs-12 col-md-10">
								  	<input v-model="params.title" type="text" class="form-control" id="fadd_title">
								</div>
							</div>
							<div class="form-group">
								  <label class="control-label col-xs-12 col-md-2" for="fadd_description">description:</label><div class="col-xs-12 col-md-10">
								  	<input v-model="params.des" type="text" class="form-control" id="fadd_description">
								</div>
							</div>
							<div class="form-group">
								  <label class="control-label col-xs-12 col-md-2" for="fadd_vurl">video url:</label><div class="col-xs-12 col-md-10">
								  	<input v-model="params.vurl" type="text" class="form-control" id="fadd_vurl">
								</div>
							</div>
							<div class="form-group">
								  <label class="control-label col-xs-12 col-md-2" for="fadd_content">content:</label><div class="col-xs-12 col-md-10">
								  	<textarea v-model="params.content" class="form-control" id="fadd_content"></textarea>
								</div>
							</div>
							<div class="form-group">
								  <label class="control-label col-xs-12 col-md-2" for="fadd_purl">project url:</label><div class="col-xs-12 col-md-10">
								  	<input v-model="params.purl" type="text" class="form-control" id="fadd_purl">
								</div>
							</div>
							<div class="form-group">
								  <label class="control-label col-xs-12 col-md-2" for="fadd_index">index:</label><div class="col-xs-12 col-md-10">
								  	<input  v-model="params.index" type="text" class="form-control" id="fadd_index">
								</div>
							</div>
						  <div class="_j_inrcom_buttonwrap text-center">	
			                  <a @click="changeShow" class="btn btn-default btn-lg rounded-pill" href="javascript:void(0)">
				                Cancel
				              </a>
				              <a @click="addFunc" class="btn btn-primary btn-lg rounded-pill" href="javascript:void(0)">
				                Confirm
				              </a>
				          </div>
		                </form>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
	</div>
</template>

<script>
	import axios from 'axios';

	export default({
		props: ['inrpopupShowAdd'],
		data(){
			return{
				params: {
					imgurl: '',
					alt: '',
					title: '',
					des: '',
					vurl: '',
					content: '',
					purl: '',
					index: ''
				}
			}
		},
		methods: {
			changeShow(){
				this.$emit('chgShow',false);
			},
			addFunc(){
				console.log('clicked');
				const _this = this;
				axios.post('/portfolios/add',{
					imgurl: _this.params.imgurl, 
					alt: _this.params.alt,
					title: _this.params.title,
					des: _this.params.des,
					vurl: _this.params.vurl,
					content: _this.params.content,
					purl: _this.params.purl,
					index: _this.params.index
				}).then(res=>{
					_this.changeShow();
				});
			}
		}
	})
</script>
