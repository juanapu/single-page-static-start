<template>
	<div class="user-wrap" @click="showUserPop">
		<div class="icon-wrap">
			<v-icon name="user"></v-icon>
		</div>
	</div>
</template>

<script>
	import '@/assets/css/inrcomps/user.css';

	export default{
		props: ['showUserPopProps'],
		name: 'UserProf',
		components: {
		},
		data(){
			return {
				init: ''
			}
		},
		methods: {
			showUserPop(){
				console.log(this.showUserPopProps);
				this.$emit('showUserPop',!this.showUserPopProps);
			}

		}
	};
</script>