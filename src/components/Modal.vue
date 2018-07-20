<template>
  <!-- Modal -->
  <div id="myModal" class="modal" role="dialog" v-bind:class="{'fade': !modalCover}">
    <div class="modal-dialog">

      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <slot name="title"></slot>
          <button type="button" class="close" data-dismiss="modal" v-on:click="hideModal">&times;</button>
        </div>
        <div class="modal-body">
          <slot name="content"></slot>
        </div>
        <div class="modal-footer">
           <button type="button" class="btn btn-default confirm" data-dismiss="modal" v-on:click="confirmFuc"><slot name="confirm"></slot></button>
          <button type="button" class="btn btn-default" data-dismiss="modal" v-on:click="hideModal"><slot name="cancle"></slot></button>
        </div>
      </div>

    </div>
  </div>
</template>

<script type="text/javascript">
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
  		},
      confirmFuc(){
        this.$emit('confirmFuc',true);
      }
  	}

  }
</script>