<template>
	<div class="_j_inrcom_portfolio">
		    <!-- Portfolio Grid Section -->
		    <section class="portfolio" id="portfolio">
		      <div class="container">
		        <h2 class="text-center text-uppercase text-secondary mb-0">Portfolio</h2>
		        <hr class="star-dark mb-5">
		        <div class="row">

		          <div v-for="(item,index) in listData" class="col-md-6 col-lg-4 portfolioItem1" @click="inrpopupShowFunc('portfolioItem1',index,item._id)" v-bind:data-id="item._id">
		            <a class=" portfolio-item d-block mx-auto" href="javascript:void(0)">
		              <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
		                <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
		                  <i class="fa fa-hand-pointer-o fa-3x"></i>
		                </div>
		              </div>
		              <img class="img-fluid" v-bind:src="item.imgurl" alt="adminpanel">
		            </a>
		          </div>

                 <div class="col-md-6 col-lg-4 add portfolioAdd" @click="inrpopupShowAddFunc('portfolioAdd')">
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
		    <inrcom-popupadd v-bind:inrpopupShowAdd="inrpopupShowAdd" v-on:chgShow="inrpopupShowAdd=false"></inrcom-popupadd>
		    <inrcom-popup v-if="popdata" v-bind:popdata="listData[popindex]" v-bind:popindex="popindex" v-bind:popid="popid" v-bind:inrpopupShow="inrpopupShow" v-on:chgShow="inrpopupShow=false"></inrcom-popup>
		    <inrcom-popupview v-if="inrpopupShowview" v-bind:popdata="listData[popindex]" v-bind:popindex="popindex" v-bind:popid="popid" v-bind:inrpopupShow="inrpopupShowview" v-on:chgShow="inrpopupShowview=false" v-on:triggerEdit="popdata=true"></inrcom-popupview>
	</div>
</template>
<script>
	import './index.less';
    import InrcomPopupadd from './components/Popup/PopupAdd';
    import InrcomPopup from './components/Popup/Popup';
    import InrcomPopupview from './components/Popup/PopupView';
    import axios from 'axios';

	export default({
		data(){
			return {
				inrpopupShow: false,
				inrpopupShowAdd: false,
				inrpopupShowview: false,
				listData: [],
				popindex: '',
				popid: '',
				popdata: false 
			}
		},
		mounted(){
			const _this = this;
			axios.get('/portfolios/vlist')
			.then((res)=>{
				_this.listData = res.data.result.data;
			})
		},
		methods: {
			inrpopupShowAddFunc(comp){
				const _this = this;
				_this.inrpopupShowAdd = true;
				const ele = document.getElementsByClassName(comp)[0];
				const top = ele.offsetTop;
				document.getElementsByClassName('_j_inrcom_protfolios_popup')[0].style.top = (top-130)+'px';
			},
			inrpopupShowFunc(comp,index,popid){
				const _this = this;
				_this.popindex = index;
				_this.popid = popid;
				_this.inrpopupShow = true;
				_this.inrpopupShowview=true;
				// _this.popdata = true;
				const ele = document.getElementsByClassName(comp)[0];
				const top = ele.offsetTop;
				document.getElementsByClassName('_j_inrcom_protfolios_popup')[0].style.top = (top-130)+'px';	
			}

		},
		components: {
			InrcomPopupadd: InrcomPopupadd,
			InrcomPopup: InrcomPopup,
			InrcomPopupview: InrcomPopupview	
		}
	})
</script>