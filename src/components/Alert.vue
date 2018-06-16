<template>
	  <div class="public-error" v-show="inrPublicErrorShow">
	    <div class="inrerror">
	    	{{message}}
	    </div>
	    <div class="close" v-on:click="$emit('publicError',false)">
	      <button>X</button>
	    </div>
	  </div>
</template>

<script type="text/javascript">
  import '../assets/css/publicerror.css';
  export default{
  	name: "PubliError",
  	props: [
  		'message'
  	],
  	data(){
  		return{
		        inrPublicErrorShow: false
		        // inrPublicErrorMsg: 'test test'
  			}
  	},
  	methods:{
  	}
  }
</script>