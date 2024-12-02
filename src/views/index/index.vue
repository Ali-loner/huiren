<template>
  <!-- <div class="index">
    <div class="index-top">
      <header>
        <span class="title">UMB ARENA</span>
        <span class="el-icon-setting"></span>
      </header>
    </div>
    <div class="index-bottom"></div>
  </div> -->

  <TwoTeam></TwoTeam>
</template>
<script>
import TwoTeam from "./components/TwoTeam.vue";
export default {
  name: "index",
  components: {
    TwoTeam,
  },
};
</script>
<style lang="less" scoped>
.index {
  position: fixed;
  inset: 0;
  background: #f2f5f6;
  padding: 0 12px;
  height: 100%;
  display: flex;
  flex-direction: column;
  .index-top {
    flex: 1;
    header {
      height: 48px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .title {
        font-size: 24px;
        font-weight: 900;
        color: #0e69b6;
      }
      .el-icon-setting {
        font-size: 32px;
        font-weight: 900;
        color: #0e69b6;
        margin: 0 8px 0 16px;
      }
    }
  }
  .index-bottom {
    flex: 1;
  }
}
</style>