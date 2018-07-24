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
		            	<form class="form-horizontal">
		            		<div class="form-group">
								  <label class="control-label col-xs-12 col-md-2" for="f_imgurl">imgurl:</label><div class="col-xs-12 col-md-10">
								  	<input v-model="params.imgurl" type="text" class="form-control" id="f_imgurl">
								</div>
							</div>

			            	<div class="form-group">
								  <label class="control-label col-xs-12 col-md-2" for="f_alt">alt:</label><div class="col-xs-12 col-md-10">
								  	<input v-model="params.alt" type="text" class="form-control" id="f_alt">
								</div>
							</div>

			            	<div class="form-group">
								  <label class="control-label col-xs-12 col-md-2" for="f_title">title:</label><div class="col-xs-12 col-md-10">
								  	<input v-model="params.title" type="text" class="form-control" id="f_title">
								</div>
							</div>
							<div class="form-group">
								  <label class="control-label col-xs-12 col-md-2" for="f_description">description:</label><div class="col-xs-12 col-md-10">
								  	<input v-model="params.des" type="text" class="form-control" id="f_description">
								</div>
							</div>
							<div class="form-group">
								  <label class="control-label col-xs-12 col-md-2" for="f_vurl">video url:</label><div class="col-xs-12 col-md-10">
								  	<input v-model="params.vurl" type="text" class="form-control" id="f_vurl">
								</div>
							</div>
							<div class="form-group">
								  <label class="control-label col-xs-12 col-md-2" for="f_content">content:</label><div class="col-xs-12 col-md-10">
								  	<textarea v-model="params.content" class="form-control" id="f_content"></textarea>
								</div>
							</div>
							<div class="form-group">
								  <label class="control-label col-xs-12 col-md-2" for="f_purl">project url:</label><div class="col-xs-12 col-md-10">
								  	<input v-model="params.purl" type="text" class="form-control" id="f_purl">
								</div>
							</div>
							<div class="form-group">
								  <label class="control-label col-xs-12 col-md-2" for="f_index">index:</label><div class="col-xs-12 col-md-10">
								  	<input v-model="params.index" type="text" class="form-control" id="f_index">
								</div>
							</div>
		                  <a @click="deleteFunc" class="btn btn-danger btn-lg rounded-pill" target="_blank" href="javascript:void(0)">
			                Delete
			              </a>
			              <a @click="editFuc" class="btn btn-primary btn-lg rounded-pill" target="_blank" href="javascript:void(0)">
			                Confirm
			              </a>

		                </form>
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
				params: {
					imgurl: this.popdata?this.popdata.imgurl:'',
					alt: this.popdata?this.popdata.alt:'',
					title: this.popdata?this.popdata.title:'',
					des: this.popdata?this.popdata.des:'',
					vurl: this.popdata?this.popdata.vurl:'',
					content: this.popdata?this.popdata.content:'',
					purl: this.popdata?this.popdata.purl:'',
					index: this.popdata?this.popdata.index:''
				},
				modalCover: false
			}
		},
		watch:{
			'popdata': function(){
				for(let val in this.params){
					this.params[val] = this.popdata[val];
				};
			}
		},
		methods: {
			changeShow(){
				this.$emit('chgShow',false);
			},
			editFuc(){
				const _this = this;
				axios.post('/portfolios/edit',{
					_vid: _this.popid,
					imgurl: _this.params.imgurl, 
					alt: _this.params.alt,
					title: _this.params.title,
					des: _this.params.des,
					vurl: _this.params.vurl,
					content: _this.params.content,
					purl: _this.params.purl,
					index: _this.params.index
				}).then(res=>{
					if(res.data.status === '0'){
						_this.changeShow();
					}else{
						alert(res.data.result.msg);
					}
				});
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
			CusModal: CusModal
		}
	})
</script>
