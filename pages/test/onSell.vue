<template>
  <div class="center-box">
    <div class="special-sell-container">
      <div class="special-sell-list">
        <div class="special-sell-item" v-for="(item, index) in specialSellListData" :key="index">
          <div class="special-sell-item-cover">
            <img :src="item.pict_url" alt="">
          </div>
          <div class="special-sell-item-info">
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import api from "~/utils/api";

export default {
  name: "onSell",

  async asyncData() {
    let specialSellList = await api.getOnSellContent(1);
    console.log(specialSellList.data.tbk_dg_optimus_material_response.result_list.map_data)
    return {
      specialSellListData: specialSellList.data.tbk_dg_optimus_material_response.result_list.map_data
    }
  }
}
</script>

<style scoped>
.special-sell-container {
  margin-top: 20px;
}
.special-sell-item {
  width: 275px;
  cursor: pointer;
  margin: 5px;
  padding: 5px;
  border: 1px solid #dfdfdf;
}
.special-sell-list {
  display: flex;
  flex-wrap: wrap;

}
.special-sell-item-cover img {
  height: 263px;
  width: 263px;
}

</style>
