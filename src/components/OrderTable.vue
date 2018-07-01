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
                      <label class="control-label col-sm-2" for="package">Selected Package:</label><div class="col-sm-10">
                          <select class="form-control" id="package" name="package" v-bind:value="orderPackage" @change="chgSelectPkg">
                            <option>package1</option>
                            <option>package2</option>
                            <option>package3</option>
                          </select>
                      </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="startTime">Visit time:</label><div class="col-sm-10">
                          <select required id="hourpk" name="hourpk" v-model="selectTime">
                            <option v-for="item in resAvbTime">{{item.startTime.slice(0,2)+":"+item.startTime.slice(2,4)}} - {{item.endTime.slice(0,2)+":"+item.startTime.slice(2,4)}}</option>
                          </select>
                           <datepicker @selected="selecTimeFuc" v-bind:disabledDates="disabledDates" v-bind:value="date"></datepicker>
                        </div>
                    </div>
                    <div class="form-group">
                      <label class="control-label col-sm-2" for="phone">Phone:</label><div class="col-sm-10">
                        <input type="phone" class="form-control" id="phone" placeholder="" name="phone" v-model="phone">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="control-label col-sm-2" for="inputAddress">Address</label><div class="col-sm-10">
                      <input type="text" class="form-control" id="inputAddress" placeholder="#1234 Main St" v-model="addrs">
                      </div>
                    </div>
                     <div class="form-group">
                      <label class="control-label col-sm-2" for="userName">Name</label><div class="col-sm-10">
                      <input type="text" class="form-control" id="userName" placeholder="" v-model="userName">
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-sm-2" for="userPwd">Password:</label><div class="col-sm-10">          
                        <input type="password" class="form-control" id="userPwd" placeholder="" name="userPwd" v-model="userPwd">
                      </div>
                    </div>
                    <div class="form-group">     
                      <div class="col-sm-offset-2 col-sm-10">
                        <div class="checkbox">
                          <label><input type="checkbox" name="allowKid" v-model="allowKid"> Allow to bring kids</label>
                        </div>
                        <div class="checkbox">
                          <label><input type="checkbox" name="remember" v-model="remember"> Remember me</label>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">        
                      <div class="col-sm-offset-2 col-sm-10">
                        <button type="submit" @click="submitFunc" class="btn btn-default">Submit</button>
                      </div>
                    </div>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
        <pub-alert v-bind:message="pubMes" v-bind:publicError="publicError" v-on:changePubError="changePubError"></pub-alert>
	</div>
</template>

<script>
  import axios from 'axios';
  import Datepicker from 'vuejs-datepicker';
  import _util from '@/assets/js/util/index';
  import base64 from 'base-64';
  import PubAlert from '@/components/Alert';

  export default{
    name: 'OrderTable',
    props: ['orderPackage'],
    data(){
      return {
        phone: '',
        userPwd: '',
        startTime: '',
        endTime:'',
        allowKid: true,
        comments: '',
        remember: false,
        userName: '',
        addrs: '',
        disabledDates: {
            to: new Date()
        },
        date: new Date(),
        formateDate: '',
        resAvbTime: '',
        selectTime: '',
        pkgData: {
          package1: {period: '3'},
          package2: {period: '4'},
          package3: {period: '5'}
        },
        pubMes: '',
        publicError: false,
      }
    },
    mounted(){
        const _this = this;
        const formateDate = _this.calcDate(_this.date);
        const param = {
          querydate: formateDate
        };
        const largerthan = (new Date()).getHours();
        _this.formateDate = formateDate;
        _this._getTimes(param,largerthan);
    },
    components: {
      Datepicker,
      PubAlert
    },
    methods: {
      selecTimeFuc(val){
        const _this = this;
        const formateDate = _this.calcDate(val);
         const param = {
          querydate: formateDate
        };
        const currentT = _this.calcDate(new Date());          
        const largerthan = (currentT === formateDate)?(new Date()).getHours():'0';
        _this.formateDate = formateDate;
        _this._getTimes(param,largerthan);
      },
      submitFunc(e){
        e.preventDefault();
        const _this = this;
        _this.chgSelectT();
        const allCk = _this.checkAllValid();
        if(allCk === 'true'){
          _this._postOrder();
        }else{
           _this.showPubErr(allCk + "field format is not correct");
        }

      },
      calcDate(dateInput){
         let formateDate = '';
         const monGap = ((dateInput.getMonth()+1)>9)?'':'0';
         const dateGap = (dateInput.getDate()>9)?'':'0';

         formateDate = dateInput.getFullYear().toString() + monGap +(dateInput.getMonth()+1).toString() + dateGap + dateInput.getDate().toString() ;
        return formateDate;
      },
      chgSelectT(){
        const _this = this;
        _this.startTime = _this.selectTime.slice(0,2);
        _this.endTime = parseInt(_this.selectTime.slice(0,2)) + parseInt(_this.pkgData[_this.orderPackage].period);
        return {
          startTime: _this.selectTime.slice(0,2),
          endTime: parseInt(_this.selectTime.slice(0,2)) + parseInt(_this.pkgData[_this.orderPackage].period)
        }
      },
      chgSelectPkg(e){
        this.$emit('chgSelectPkg',e.target.value);
      },
      changePubError(val){
        this.publicError = false;
      },
      checkAllValid(){

          const _this = this;
          const allCk = 'true';
          if(!_util.validate(_this.orderPackage, 'require')){
            return 'package'
          };
          if(!_util.validate(_this.startTime, 'require')){
            return 'time'
          };
          if(!_util.validate(_this.date, 'require')){
            return 'date'
          };
          if(!_util.validate(_this.phone,'phone')){
            return 'phone'
          };

          if(!_util.validate(_this.addrs,'require')){
            return 'address'
          };

          if(!_util.validate(_this.userPwd,'password')){
            return 'password'
          };


          return allCk
      },
      showPubErr(msg){
        const _this = this;
          _this.pubMes = msg;
          _this.publicError = true;
      },
      _getTimes(param,largerthan){
        const _this = this;
        axios.get('/times/',{
          params: param
        })
        .then((res)=>{
          const data = res.data.result.data;
          const result = [];
          for(let i=0;i<data.length;i++){
            if(parseInt(data[i].startTime.slice(0,2))>parseInt(largerthan)){

              result.push(data[i]);
            }
          }
          _this.resAvbTime = result;
        }); 
      },
      _postOrder(){
        const _this = this;
        axios.post('/orders/add',{
          phone: _this.phone,
          username: _this.userName,
          userpwd: base64.encode(_this.userPwd),
          starttime: _this.startTime,
          endtime: _this.endTime,
          packag: _this.orderPackage,
          allowkid:_this.allowKid,
          comments: _this.comments,
          remember: _this.remember,
          date: _this.formateDate,
          addrs: _this.addrs
        }).then((res)=>{
            if(res.data.status==='0'){
              //registered and saved
              _this._login();
            }else{
              _this.showPubErr(res.data.result.msg);
            }
        })
      },
      _login(){
        const _this = this;
        axios.post('/users/login',{
           phone: _this.phone,
           userpwd: base64.encode(_this.userPwd)
        }).then((res)=>{
          if(res.data.status==='0'){
              //registered and saved
              _util.setCookie('_id',res.data.result.data._id,0.05);
              _this.showPubErr("congrates, your've login");
            }else{
              _this.showPubErr(res.data.result.msg);
            }
        })
      }

    }
  }
</script>