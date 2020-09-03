<template>
  <div class="test">
    <div class="center-box">
      <div class="find-box clear-fix">
        <div class="find-aside">
          <ul>
            <li v-for="(item,index) in findListData" :key="index">
              <span>{{ item.title }}</span>
            </li>
          </ul>
        </div>
        <div class="find-content-box">
          <div class="find-content-list">
            <div class="find-content-item" v-for="(item, index) in findContentData" :key="index">
              <div class="find-content-item-cover">
                <img :src="item.pict_url" alt="">
              </div>
              <div class="right-container">
                <div class="find-content-item-title">
                  <span>{{ item.title }}</span>
                </div>
                <div class="find-content-item-info">
                  <span>{{ item.item_description }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import api from "~/utils/api";

export default {
  name: "index",
  async asyncData() {
    let findList = await api.getCategories();
    console.log(findList.data)
    console.log(findList.data[0].id)
    let findContent = await api.getCategoryContent(findList.data[0].id, 1);
    console.log(findContent.data)
    return {
      findListData: findList.data,
      findContentData: findContent.data
    }

  }

}
</script>

<style scoped>
.right-container {
  flex: 1;
  margin-left: 15px;
}
.find-content-item-title {
  font-size: 22px;
  color: #47494e;
}

.find-content-item {
  display: flex;
}
.find-content-item-cover {
  margin-left: 6px;
  margin-top: 5px;
}
.find-content-item-cover img {
  width: 180px;
  height: 180px;
}

.find-content-list {
  display: flex;
  flex-direction: column;
}

.find-content-box {
  margin-left: 125px;
  background: #fff;
  box-shadow: #7F828B;
  margin-top: 20px;

  border: 1px solid #d4d4d4;
}

.find-aside ul {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 105px;
}

.active-item {
  color: #ff4500;
}

.find-aside {
  position: fixed;
  margin-top: 2px;
  border: 1px solid #d4d4d4;
  background: #fff;
  box-shadow: #d4d4d4;
}

*, :before :after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.find-aside li {
  line-height: 40px;
  list-style: none;
  height: 40px;
  margin-bottom: 5px;
  margin-top: 5px;
  cursor: pointer;
}


</style>
