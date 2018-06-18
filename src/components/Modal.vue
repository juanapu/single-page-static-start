<template>
	<div class="modal">
		 <div class="md-modal modal-msg md-modal-transition" v-bind:class="{'md-show':modalCover}">
	          <div class="md-modal-inner">
		            <div class="md-top">
		              <div class="md-title">
		              	<slot name="title"></slot>
		              </div> 
		              <button class="md-close" v-on:click="hideModal">Close</button>
		            </div> 
		            <slot name="content"></slot>
               <div class="md-button">
                       <slot name="cancel"></slot>
                       <slot name="confirm"></slot>
                </div>
	           </div>
        </div>
        <div v-show="modalCover" class="md-overlay" ></div>
	</div>
</template>

<script type="text/javascript">
  import '../assets/css/app.css';
  import '../assets/css/modal.css';
  export default{
  	name: 'Modal',
  	props: [
  	  'modalCover',
  	  // 'errorShow'
  	],
  	data(){
  		return {
  		}
  	},
  	mounted(){
  	},
  	methods: {
  		hideModal(){
  			this.$emit('hideModal',true);
  		}
  	}

  }
</script>