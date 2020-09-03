<template>
  <div>
    <div class="header">
      <div class="center-box">
        <div class="center-container">
          <div class="logo">
            <span>阳光沙滩-券场</span>
          </div>
          <div class="nav">
            <ul>
              <a href="/">
                <li class="">发现</li>
              </a>
              <a href="/test/onSell">
                <li class="">券场</li>
              </a>
              <a href="/test">
                <li class="">特惠</li>
              </a>
            </ul>
          </div>
          <div class="search">
            <div class="search-input">
              <el-input size="small" placeholder="复制 (淘宝的标题或者关键字) 找优惠卷!"></el-input>
            </div>
            <div class="search-btn">
              <el-button size="small">搜索</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nuxt/>
    <div class="footer">
      <div class="center-box footer-container">

        <div class="footer-link">
          <ul>
            <Li>联系我们</Li>
            <Li>人才招聘</Li>
            <Li>广告投放</Li>
            <Li>网店加盟</Li>
            <li>常见问题</li>
            <li>友情链接</li>
          </ul>
        </div>
        <div class="size-info">
          <p>©2019 taobaounion.cn 粤IPC备 1209832号-11 code by TrillGates</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.size-info {
  margin-top: 20px;
  text-align: center;
}

.footer {
  background: #c9302c;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-link ul {
  display: flex;
  justify-content: space-around;
}

.footer-link ul li {
  list-style: none;
  color: #ffffff;
}

.search-btn .el-button {
  width: 100px;
  background: #f56c6c;
  color: #ffffff;
}

.search-input {
  margin-right: 15px;
  width: 300px;
}

.center-container .search {
  display: flex;
}

.center-container logo {
  flex: 2;
}

.center-container nav {
  flex: 2;
}

.center-container search {
  flex: 3;
}

.center-container ul {
  display: flex;
  justify-content: space-around;
  width: 200px;
}

.center-container ul a li {
  list-style: none;
  cursor: pointer;
  color: #000;
  font-size: 16px;
  font-weight: 600;
  line-height: 70px;

}

.center-container ul a {
  text-decoration: none;
}

.header {
  height: 70px;
  box-shadow: 0 5px 10px #d4d4d4;
  background: #fff;
  height: 70px;
}

.logo span {
  font-size: 24px;
  line-height: 70px;
  font-weight: 600;
  color: #c9302c;
}

.logo {
  margin-right: 10px;
}

.center-container {
  display: flex;
  align-items: center;

}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.center-box {
  width: 1140px;
  margin: 0 auto;
  /*border: 1px solid lightblue;*/
}


</style>

