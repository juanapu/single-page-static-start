<template>
	<div class="login-wrap">
		<button class="btn btn-primary" @click="showLogin"><slot></slot></button>
	</div>
</template>

<script>
	import '@/assets/css/inrcomps/logincom.css';

	export default{
		name: 'LoginCom',
		components: {
		},
		data(){
			return {
				init: ''
			}
		},
		methods: {
			showLogin(){
				this.$emit('showLogin',true);
			}
		}
	};
</script>