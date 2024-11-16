<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <TwoTeam />

    <el-container v-if="0">
      <el-aside width="150px">
        <!-- <div class="aside-item">名称</div> -->
        <div @click="changeTab(0)" :class="['aside-item', activeIndex == 0 && 'active']">
          规范学习
        </div>
        <div @click="changeTab(1)" :class="['aside-item', activeIndex == 1 && 'active']">
          规范审核
        </div>
        <div class="aside-last-item">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <i class="el-icon-setting"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-eleme">版本</el-dropdown-item>
              <el-dropdown-item icon="el-icon-files">输出类型</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-aside>
      <el-main>
        <el-row>
          <el-col :span="12">
            <el-row>
              <el-col :span="8">
                <el-upload class="upload-demo" action="#" :on-change="handleChange">
                  <el-button type="primary">点击上传</el-button>
                  <div slot="tip" class="el-upload__tip">
                    选择上传审核图片/文件
                  </div>
                </el-upload></el-col>
              <el-col v-if="activeIndex" :span="12">
                <el-input v-model="inputValue" placeholder="请输入内容"></el-input>
                <p class="wz-tips">请输入文字进行审核</p>
              </el-col>
            </el-row>
          </el-col>
          <el-col class="c-12" :span="12">
            <el-button :disabled="![0, 100].includes(percentage)" @click="checkFile" type="primary">{{ activeIndex ?
              "对比审核" : "微调学习" }}</el-button></el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-image v-if="imageUrl" :src="imageUrl"></el-image>

            <iframe v-if="pdfUrl" :src="pdfUrl" style="width: 500px; height: 400px"></iframe>
            <div class="docx" v-html="convertedHtml" v-if="convertedHtml"></div>
            <span class="empty" v-else>-</span>
          </el-col>
          <el-col class="c-12" :span="12">
            <span class="num">{{ percentage }} %</span>
            <div class="progress-bar">
              <div :style="{ width: percentage + '%' }" class="insert-bar"></div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12"><span class="empty">-</span></el-col>
          <el-col class="c-12" :span="12">
            <template v-if="percentage == 100">
              <span class="result">{{
                activeIndex ? "审核成功" : "学习成功"
              }}</span>&nbsp; <span class="el-icon-success"></span> &nbsp;&nbsp;
              <el-link v-if="activeIndex" @click="download" type="primary">下载审核文件</el-link></template></el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import mammoth from "mammoth";
import TwoTeam from './components/TwoTeam.vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  data() {
    return {
      imageUrl: "",
      pdfUrl: "",
      convertedHtml: "",
      inputValue: "",
      activeIndex: 0,
      percentage: 0,
    };
  },
  components: {
    TwoTeam
  },
  methods: {
    changeTab(tabIndex) {
      if (![0, 100].includes(this.percentage)) return
      this.activeIndex = tabIndex
    },
    handleChange(file) {
      console.log(file);
      if (file.raw && file.raw.type.includes("image")) {
        // 创建对象URL
        this.imageUrl = URL.createObjectURL(file.raw);
        this.pdfUrl = "";
        this.convertedHtml = "";
      } else if (file.raw && (file.raw.type.includes("pdf") || file.raw.type.includes("text"))) {
        this.pdfUrl = URL.createObjectURL(file.raw);
        this.imageUrl = "";
        this.convertedHtml = "";
      } else {
        const reader = new FileReader();
        reader.onload = (e) => {
          const arrayBuffer = e.target.result;
          mammoth
            .convertToHtml({ arrayBuffer: arrayBuffer })
            .then((result) => {
              this.convertedHtml = result.value;
            })
            .catch((err) => console.error(err));
        };
        reader.readAsArrayBuffer(file.raw);
        this.imageUrl = "";
        this.pdfUrl = "";
      }
    },
    download() {
      var downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(
        new Blob(["h"], { type: "text/plain" })
      );
      downloadLink.download = "文件"; // 设置下载文件名
      downloadLink.click();
    },
    checkFile() {
      this.percentage = 0;
      for (let i = 1; i <= 100; i++) {
        setTimeout(() => {
          this.percentage++;
        }, i * 20);
      }
    },
  },
  watch: {
    activeIndex() {
      this.imageUrl = "";
      this.pdfUrl = "";
      this.convertedHtml = "";
      this.inputValue = '';
      this.percentage = 0;
    },
  },
};
</script>

<style lang="less">
#app {
  .el-container {
    height: 96vh;
    border: 1px solid black;

    .el-aside {
      background: rgb(84, 92, 100);
      display: flex;
      flex-direction: column;

      .aside-item {
        color: #fff;
        height: 48px;
        text-align: center;
        border-bottom: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .active {
        background: orange;
      }

      .aside-last-item {
        color: #fff;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: 24px;

        .el-icon-setting {
          color: #fff;
          font-size: 24px;
        }
      }
    }

    .el-main {
      display: flex;
      flex-direction: column;

      .empty {
        color: #fff;
      }

      .wz-tips {
        font-size: 12px;
        color: #606266;
        margin-top: 7px;
      }

      .c-12 {
        padding-left: 40px;

        .num {
          font-size: 24px;
          color: #606266;
        }

        .progress-bar {
          margin-top: 24px;
          background: rgb(235, 238, 245);
          height: 48px;
          border-radius: 24px;

          .insert-bar {
            height: 100%;
            border-radius: 24px;
            background: #409eff;
          }
        }
      }

      .el-row:nth-of-type(1) {
        height: 64px;
      }

      .el-row:nth-of-type(2) {
        flex: 1;
        margin-top: 24px;

        .el-image {
          width: 300px;
        }

        .docx {
          width: 500px;
          height: 400px;
          overflow: scroll;
        }
      }

      .el-row:nth-of-type(3) {
        height: 64px;

        .result {
          color: #67c23a;
          font-weight: bold;
        }

        .el-icon-success {
          color: #67c23a;
        }
      }
    }
  }
}
</style>
