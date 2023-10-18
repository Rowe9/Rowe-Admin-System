<script setup lang="ts">
import { getTime } from '@/utils/time'
import useUserStore from '@/store/modules/user'
let userStore = useUserStore()
</script>
<template>
  <div class="box">
    <img :src="userStore.avatar" alt="" class="avatar" />
    <div class="footer">
      <h3 class="title">
        {{ getTime() }}好,
        <span class="gradient">
          {{ userStore.username }},开始一天的工作吧！
        </span>
      </h3>
      <p class="subtitle">今日晴，20℃ - 32℃！</p>
    </div>
  </div>

  <!-- <div class="bottom">
    <def-svg-icon name="welcome" width="600px" height="300px"></def-svg-icon>
  </div> -->

  <div class="card">
    <el-card class="news">
      <template #header>
        <div class="header">
          <div class="title">最新新闻</div>
          <div class="more">
            <el-link>查看更多</el-link>
          </div>
        </div>
      </template>
      <div>list item111</div>
      <div>list item111</div>
      <div>list item111</div>
      <div>list item111</div>
    </el-card>

    <el-card class="fast">
      <template #header>
        <div class="header">
          <div class="title">快捷导航</div>
          <div class="more">
            <el-link>查看更多</el-link>
          </div>
        </div>
      </template>

      <div>list item111</div>
      <div>list item111</div>
      <div>list item111</div>
      <div>list item111</div>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>
.box {
  display: flex;
  align-items: center;
  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .footer {
    margin-left: 20px;
    .title {
      font-size: 16px;
      margin-bottom: 13px;
      .gradient {
        background: linear-gradient(to right, #001529, #001529, #ffffff);
        /* 渐变方向是从左到右，颜色从红色到绿色 */
        background-clip: text;
        -webkit-background-clip: text; /* 兼容WebKit浏览器（例如Chrome和Safari） */
        color: transparent;
      }
    }
    .subtitle {
      color: #ccc;
      font-size: 14px;
    }
  }
}
.card {
  display: flex;
  margin-top: 20px;
  .news {
    flex: 2;
    .header {
      display: flex;
      justify-content: space-between;
    }
  }
  .fast {
    flex: 1;
    margin-left: 20px;
    .header {
      display: flex;
      justify-content: space-between;
    }
  }
}
.bottom {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
</style>
