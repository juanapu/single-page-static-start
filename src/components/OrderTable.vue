<template>
	<div class="ordertable">
      <div class="container">
        <img class="img-fluid rounded about-heading-img mb-3 mb-lg-0" src="@/assets/img/about.jpg" alt="">
        <div class="about-heading-content">
          <div class="row">
            <div class="col-xl-9 col-lg-10 mx-auto">
              <div class="bg-faded rounded p-5">
                <h2 class="section-heading mb-4">
                  <span class="section-heading-upper">Strong Coffee, Strong Roots</span>
                  <span class="section-heading-lower">About Our Cafe</span>
                </h2>
                  <form class="form-horizontal">
                    <div class="form-group">
                      <label class="control-label col-sm-2" for="email">Selected Package:</label><div class="col-sm-10">
                          <select class="form-control" id="package" name="package" v-bind:value="orderPackage">
                            <option>package1</option>
                            <option>package2</option>
                            <option>package3</option>
                          </select>
                      </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="startTime">Visit time:</label><div class="col-sm-10">
                          <select class="form-control" id="startTime" name="startTime" v-bind:value="startTime">
                          </select>
                        </div>
                    </div>
                    <div class="form-group">
                      <label class="control-label col-sm-2" for="phone">Phone:</label><div class="col-sm-10">
                        <input type="phone" class="form-control" id="phone" placeholder="Enter phone" name="phone" v-model="phone">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="control-label col-sm-2" for="userPwd">Password:</label><div class="col-sm-10">          
                        <input type="password" class="form-control" id="userPwd" placeholder="Enter password" name="userPwd">
                      </div>
                    </div>
                    <div class="form-group">        
                      <div class="col-sm-offset-2 col-sm-10">
                        <div class="checkbox">
                          <label><input type="checkbox" name="remember"> Remember me</label>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">        
                      <div class="col-sm-offset-2 col-sm-10">
                        <button type="submit" class="btn btn-default">Submit</button>
                      </div>
                    </div>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
	</div>
</template>

<script>
  import axios from 'axios';

  export default{
    name: 'OrderTable',
    props: ['orderPackage'],
    data(){
      return {
        phone: '',
        userPwd: '',
        startTime: '',
        endTime:'',
        packag:'',
        allowKid: true,
        comments: '',
        remember: ''
      }
    },
    mounted(){
        const timeNn = new Date();
        const dateNn = timeNn.getDate();
        console.log(dateNn);

    },
    methods: {

    }
  }
</script>