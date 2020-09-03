import request from "~/utils/http";

export const baseUrl = "https://api.sunofbeach.net/shop/";

const SUCCESS_CODE = 10000;

export default {
  SUCCESS_CODE,

  //获取分类接口
  getCategories() {
    return request.requestGet(baseUrl + "discovery/categories");
  },

  //获取分类具体的商品
  getCategoryContent(materialId, page) {
    return request.requestGet(baseUrl + "discovery/" + materialId + "/" + page);
  },

  //获取推荐商品类别
  getRecommendCategories() {
    return request.requestGet(baseUrl + "recommend/categories")
  },

  //获取推荐商品类别具体信息
  getRecommendContent(categoryId) {
    return request.requestGet(baseUrl + "recommend/" + categoryId)
  },

  //获取特惠商品
  getOnSellContent(page) {
    return request.requestGet(baseUrl + "onSell/" + page);
  },

  //搜索相关接口
  getOnSearchContent(keyword, page) {
    return request.requestGet(baseUrl + keyword + "/" + page);
  },

  //生成淘口令接口



}
