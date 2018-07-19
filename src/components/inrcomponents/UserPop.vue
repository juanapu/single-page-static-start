<template>
	<div class="user-pop-wrap">
		<ul>
			<li><router-link to="/mypage"><a>My Page</a></router-link></li>
			<li @click="logoutFuc">Log Out</li>
		</ul>
	</div>
</template>

<script>
	import '@/assets/css/inrcomps/user.css';
	import '@/assets/css/inrcomps/userpop.css';

	export default{
		name: 'UserProf',
		components: {
		},
		data(){
			return {
				init: ''
			}
		},
		methods: {
			logoutFuc(){
				this.$emit('logoutFunc',true);
			}

		}
	};
</script>