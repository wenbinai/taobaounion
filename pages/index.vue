<template>
  <section class="container">
    <div class="clear-fix">
      <div class="center-box">
        <div class="recommand-category-box">
          <!--          推荐导航栏-->
          <ul class="recommand-category-list">
            <li v-for="(item, index) in recommandListData" :key="index">
              <span v-text="item.favorites_title"></span>
            </li>
          </ul>


          <!--推荐内容区-->
          <div class="recommand-content-list-box">
            <div class="recommand-content-title" v-text="favoriteTitle"></div>
            <div class="recommand-content-list">
              <div class="recommand-content-item" v-for="(item, index) in recommandContent" :key="index">
                <span class="recommend-coupon-info" v-if="item.coupon_info!==null">{{item.coupon_info}}</span>
                <div class="recommand-content-item-container">
                  <img class="recommand-content-item-cover" :src="item.pict_url" alt="">
                  <div class="recommand-content-item-title">
                    <a :href="item.coupon_click_url!==null?item_coupon_click_url:item.click_url">{{ item.title }}</a>
                  </div>
                  <div class="recommand-content-item-info">

                    <a v-if="item.coupon_click_url !== null" :href="item.coupon_click_url" target="_blank">领卷购买</a>
                    <span v-if="item.coupon_click_url !== null">原价: {{ item.zk_final_price }} </span>
                    <span v-else>晚了, 没有优惠卷了!</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>

</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import api from "~/utils/api"

export default {
  components: {
    AppLogo
  },
  methods: {
    onCategoryItemClick(item) {
      document.documentElement.scrollTop = 0;
      this.currentFavoriteId = item.favorites_id;
      this.currentCategory = itemm.favorites_title
      //加载对应的内容
      this.loadContentByCategory(item.favorites_id);
    },
    loadContentByCategory(favoriteId) {

    }
  },
  async asyncData() {
    let recommandList = await api.getRecommendCategories();
    let recommandListData = recommandList.data;
    let categoryId = recommandListData[0].favorites_id
    let favoriteTitle = recommandListData[0].favorites_title
    let recommandContentList = await api.getRecommendContent(categoryId)
    let recommandContent = recommandContentList.data.tbk_uatm_favorites_item_get_response.results.uatm_tbk_item

    return {
      recommandListData: recommandList.data,
      recommandContent,
      favoriteTitle
    }
  }
}
</script>

<style>
.recommand-content-item-title a {
  text-decoration: none !important;
  cursor: pointer !important;
  color: #47494e;
}
.recommand-content-title {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
}
.recommand-content-item-info span {
  font-weight: 600;
  color: #ebb563;
}
.recommand-content-item {
  position: relative;
}
.recommend-coupon-info {
  position: absolute;
  right: 12px;
  top: 20px;
  padding: 5px 10px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  background: #c9302c;
  color: #fff;
}
.recommand-content-item-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
}


.recommand-content-item-title {
  margin-bottom: 15px;
}

.recommand-content-item-info a {
  width: 98px;
  text-decoration: none;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  transition: .1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  color: #fff;
  background-color: #f56c6c;
  /*border: 1px solid #f56c6c;*/
}

.recommand-content-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.recommand-content-item {
  width: 265px;
  height: 370px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px #d4d4d4;
  background: #fff;
  margin: 10px;
}

.recommand-content-item-cover {
  width: 243px;
  height: 243px;
  margin-bottom: 10px;
}

.recommand-category-box {
  margin-top: 20px;
}

.recommand-category-list {
  display: flex;
  justify-content: space-around;
  color: #ffffff;

  /*border: 1px solid blue;*/
}

.recommand-category-list li {
  flex: 1;
  color: #7F828B;
  list-style: none;
  text-align: center;

  /*border: 1px solid red;*/
}

*, :after, :before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>

