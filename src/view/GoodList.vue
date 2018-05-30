<template>
    <div>
      <navHeader></navHeader>
      <bread><span slot="goodlist">GoodList</span></bread>
      <div class="accessory-result-page accessory-page">
        <div class="container">
          <div class="filter-nav">
            <span class="sortby">Sort by:</span>
            <a href="javascript:void(0)" class="default cur">Default</a>
            <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
            <a @click="showPop" href="javascript:void(0)" class="filterby stopPop">Filter by</a>
          </div>
          <div class="accessory-result">
            <!-- filter -->
            <div class="filter stopPop" v-bind:class="{'filterby-show':overLayFlag}" id="filter">
              <dl class="filter-price">
                <dt>Price:</dt>
                <dd><a @click="checkedIndex='All'" v-bind:class="{'cur':(checkedIndex=='All')}" href="javascript:void(0)">All</a></dd>
                <dd v-for="(price,index) in filterPrice">
                  <a @click="checkedIndex=index" v-bind:class="{'cur':checkedIndex==index}" href="javascript:void(0)">{{price.priceStart}} - {{price.priceEnd}}</a>
                </dd>
              </dl>
            </div>

            <!-- search result accessories list -->
            <div class="accessory-list-wrap">
              <div class="accessory-list col-4">
                <ul>
                  <li v-for='item in resData'>
                    <div class="pic">
                      <a href="#"><img v-lazy="'static/'+item.prodcutImg" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">{{item.productName}}</div>
                      <div class="price">{{item.prodcutPrice}}</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md-overlay" v-show="overLayFlag" @click="overLayFlag=false"></div>
      <navFooter></navFooter>
    </div>
</template>

<script>
import '../assets/css/product.css';
import '../assets/css/base.css';
import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/navFooter';
import Bread from '@/components/Bread';
import axios from 'axios';

export default {
  name: 'GoodList',
  data () {
    return {
      resData: '',
      filterPrice: [
        {
          priceStart: 0,
          priceEnd: 100
        },
        {
          priceStart: 100,
          priceEnd: 500
        },
        {
          priceStart: 500,
          priceEnd: 1000
        },
        {
          priceStart: 1000,
          priceEnd: 2000
        }
      ],
      checkedIndex: 'All',
      overLayFlag: false
    }
  },
  mounted: function(){
    this.init();
  },
  components: {
    NavHeader,
    NavFooter,
    Bread
  },
  methods: {
    init(){
      axios.get('/goods')
        .then((res)=>{
          this.resData = res.data.result.list;
        })
    },
    showPop(){
      this.overLayFlag=true;
    }
  }
}
</script>

