<template>
	  <div class="public-error" v-show="publicError">
	    <div class="inrerror">
	    	{{message}}
	    </div>
	    <div class="close" v-on:click="$emit('changePubError',false)">
	      <button>X</button>
	    </div>
	  </div>
</template>

<script type="text/javascript">
  import './publicerror.css';
  export default{
  	name: "PubAlert",
  	props: [
  		'message',
      'publicError'
  	],
  	data(){
  		return{
		        inrPublicErrorShow: true
		        // inrPublicErrorMsg: 'test test'
  			}
  	},
  	methods:{
  	}
  }
</script>