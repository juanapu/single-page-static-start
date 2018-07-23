<template>
	<div id="page-top">
		<nav-header></nav-header>
		<layout-content></layout-content>
		<layout-footer></layout-footer>
	</div>
</template>
<script>
	import './index.less';
	import Header from '@/components/Header/Header';
	import Content from '@/components/Content/Content';
	import Footer from '@/components/Footer/Footer';

	export default{
		data(){
			return{
				data: []
			}
		},
		components: {
			NavHeader: Header,
			LayoutContent: Content,
			LayoutFooter: Footer		
		}
	}
</script>