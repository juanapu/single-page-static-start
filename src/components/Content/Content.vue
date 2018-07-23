<template>
	<div class="_j_layout_content">
		    <!-- Header -->
		    <inrcom-header></inrcom-header> 
		    <inrcom-portfolios></inrcom-portfolios>
		    <inrcom-about></inrcom-about>
		    <inrcom-contact></inrcom-contact>
	</div>
</template>
<script>
	import InrcomHeader from '@/components/inrcomponents/Header/Header';
	import InrcomPortfolios from '@/components/inrcomponents/Portfolios/Portfolios';
	import InrcomAbout from '@/components/inrcomponents/About/About';
	import InrcomContact from '@/components/inrcomponents/Contact/Contact';

	export default({
		data(){
			return {
				data: []
			}
		},
		components: {
				InrcomHeader: InrcomHeader,
				InrcomPortfolios: InrcomPortfolios,
				InrcomAbout: InrcomAbout,
				InrcomContact: InrcomContact
			}

	})
</script>