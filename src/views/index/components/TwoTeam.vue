<template>
  <div class="team">
    <div class="team-top">
      <header>
        <span class="title">UMB ARENA</span>
        <span class="el-icon-setting"></span>
      </header>
      <div
        :style="{ height: isPC ? 'calc(50vh - 64px)' : 'calc(100vh - 64px)' }"
        class="dialog-box"
      >
        <div class="dialog-box-left" v-if="isPC">
          <div class="zsk">
            <div class="title">知识库问答</div>
            <div id="zskBox" class="content">
              <div v-for="(item, index) in msgKnowList" :key="index">
                <div class="zsk-item">
                  <div class="fl-r desc msg msg-right">{{ item }}</div>
                </div>
              </div>
            </div>
            <div class="search-line">
              <el-input
                suffix-icon
                placeholder="请输入您想问的..."
                v-model.trim="msgKnow"
                @keyup.native.enter="handelSendKnow"
              ></el-input>

              <img
                @click="handelSendKnow"
                class="send-btn"
                src="@/assets/send.jpg"
                alt=""
                srcset=""
              />
              <span class="new-start-item" @click="handleNewChatKnow"
                >New Chat</span
              >
            </div>
          </div>
          <div class="charts">
            <EchartsItem ref="echarts" :option="opts1" />
          </div>
        </div>

        <div class="dialog-box-right">
          <div class="service-title">客服交互</div>

          <div id="dialogBox" class="service-box">
            <div
              class="item"
              :data-id="item.msgId"
              v-for="(item, index) in msgList"
              :key="index"
            >
              <div class="left-box">
                <div class="service-content">
                  <div class="service-item" v-if="item.chat">
                    <div class="msg-card">
                      <div class="card-title">
                        <div class="btn-name">孙先生</div>
                      </div>
                      <div class="card-content">
                        <div class="desc">{{ item.msgText }}</div>
                      </div>
                    </div>
                  </div>
                  <div v-else class="service-item right">
                    <div class="service-card">
                      <div class="card-title">
                        <div class="btn-person">人类客服</div>
                      </div>
                      <div class="card-content">
                        <div class="btn-ai">AI客服</div>
                        <div class="desc">
                          {{ item.msgText }}
                          <!-- 您好，汇仁药业客服中心，请问有什么可以帮您？ -->
                        </div>
                      </div>
                    </div>
                  </div>

                  <div v-if="showEnd" class="service-item">
                    <div class="finish-card">
                      <div class="card-title">
                        本轮对话已结束，以下是对本次对话的整体评价：
                      </div>
                      <div class="card-content">
                        <div class="desc">
                          此处为本次圣诞的整体评价详情信息...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="right-box" v-if="isPC && msgList.length > 1">
                <!-- <div class="asideBox" v-if="item.chat && item.chatDetail">
                  <div>
                    <span>用户意图识别</span>
                  </div>
                  <div>
                    <span>ID：</span>
                    <span>{{ item?.chatDetail?.subInputId }}</span>
                  </div>
                  <div>
                    <span>用户情绪识别 ：</span>
                    <span>{{ item?.chatDetail?.decisionMood }}</span>
                  </div>
                  <div>
                    <span>话术对齐总分：</span>
                    <span>【0%】</span>
                  </div>
                </div> -->

                <div class="asideBox" v-if="!item.chat && item.chatDetail">
                  <div>
                    <span>客服会话</span>
                    <span>【 {{ item?.chatDetail?.count }} 】</span>
                  </div>
                  <div>
                    <span>ID：</span>
                    <span>【{{ item?.chatDetail?.subInputId }}】</span>
                    <!-- <span>【呼进买药-购买意图未知- BR1】</span> -->
                  </div>
                  <div>
                    <span>知识库引用来源：</span>
                    <!-- <span>【UMB V10 标准话术】</span> -->
                    <span>【{{ item?.chatDetail?.kl?.[0] }}】</span>
                  </div>
                  <div>
                    <span>话术对齐得分</span>
                    <span>【0%】</span>
                  </div>
                  <div>
                    <span>话术对齐总分</span>
                    <span>【0%】</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="chat-box">
            <div class="chat-header">
              <div class="chat-body">
                <div class="name-item hasMsg">王先生</div>
                <div class="name-item hasMsg">李先生</div>
                <div class="name-item">胡女士</div>
                <div class="name-item active">孙先生</div>
              </div>

              <div class="chat-body-right">
                <el-select size="mini" v-model="gptValue" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <el-switch
                  active-value="user"
                  inactive-value="person"
                  v-model="switchValue"
                  active-color="#eee"
                  inactive-color="#eee"
                  disabled
                ></el-switch>
                <span class="desc">客服/用户切换</span>
              </div>
            </div>
            <div class="chat-content">
              <!-- placeholder="当前您正在模拟人类用户，在此发言" -->
              <el-input
                :disabled="showEnd || disabledSendMsg"
                suffix-icon
                placeholder="当前您正在模拟人类用户，在此发言"
                v-model.trim="msgText"
                @keyup.native.enter="handleSendMsg"
              ></el-input>

              <img
                @click="handleSendMsg"
                class="el-icon-s-promotion"
                src="@/assets/send.jpg"
                alt=""
                srcset=""
              />

              <div class="chat-btn-box">
                <span class="new-start-item" @click="handleStop">挂机</span>
                <span class="new-chat-item" @click="handleNewChat"
                  >New Chat</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="team-bottom" v-if="isPC">
      <TableCpn
        @delInfo="delInfo"
        :currentUser="currentUser"
        :userInfo1="userInfo1"
        :userInfo2="userInfo2"
      />
    </div>
  </div>
</template>
      
<script>
import EchartsItem from "./Echarts.vue";
import TableCpn from "./TableCpn.vue";
import { tableData, getLineOption } from "@/const";
import {
  fetchConfigDify,
  chatMessages,
  sortedSubYitu,
  fetchOldUserProfile,
  fetchUser,
} from "@/api";
import { currentUserData } from "./mockData";
export default {
  name: "two-team",
  components: {
    EchartsItem,
    TableCpn,
  },
  mounted() {
    this.getAppKey();
    // this.getUserInfo(); // TODO 测试使用
    // this.getOldUserInfo();// TODO 测试使用
    this.$nextTick(() => {
      window.addEventListener("resize", this.handleResize);
      this.clientWidth = window.innerWidth;
      this.getRandomId();
    });
  },
  data() {
    return {
      clientWidth: 1200,
      appKey: "app-58sD2jpcITCjVZaiwPU3ZTXG",
      msgKnow: "",
      msgKnowList: [],
      msgText: "",
      disabledSendMsg: false,
      options: [
        {
          value: "ChatGPT4.0",
          label: "ChatGPT4.0",
        },
        {
          value: "ChatGPT3.5",
          label: "ChatGPT3.5",
        },
        {
          value: "ChatGPT3.0",
          label: "ChatGPT3.0",
        },
      ],
      gptValue: "ChatGPT4.0",
      switchValue: "user",
      msgList: [],
      msgId: -1, // 机器人回复自增id
      showEnd: false,
      opts1: {},
      tableData,
      conversation_id: "",
      cidList: [],
      currentUser: {},
      userInfo1: {},
      userInfo2: {},
      randomId: "",
      chartTableData: {
        part: [],
        verger: [],
        mood: [],
      },
    };
  },
  methods: {
    async getAppKey() {
      const res = await fetchConfigDify();
      localStorage.setItem("token", res?.appSecret || this.appKey);
    },
    getRandomId() {
      const userList = [
        "a5695fd5-f84b-45f1-9c61-12d33ada2bc7",
        "d6213300-89e8-4e31-835a-b5a8615ff374",
        "81191104-5425-4114-8d8c-6f9efc48260d",
        "26157a51-02d7-4aa1-bf19-a81470fb0139",
        "3b6a3c04-a84a-422c-a5a2-04085aa9e63a",
      ];
      const idx = () => Math.floor(Math.random() * 5);
      this.randomId = userList[idx()];
    },
    getTwoUserInfo() {
      console.log(this.cidList);
      this.getUserInfo();
      if (this.cidList?.length == 1) {
        this.getOldUserInfo(this.cidList[0], "first");
      }
      if (this.cidList?.length >= 2) {
        const cid1 = this.cidList[this.cidList.length - 1];
        const cid2 = this.cidList[this.cidList.length - 2];
        //对话记录1
        this.getOldUserInfo(cid1, "first");
        //对话记录2
        this.getOldUserInfo(cid2, "second");
      }
    },
    handleResize() {
      this.clientWidth = window.innerWidth;
    },
    handelSendKnow() {
      if (!this.msgKnow) {
        this.$message.error("请输入对话内容");
        return;
      }
      this.msgKnowList.push(this.msgKnow);
      this.scrollChatContent("zskBox");
      this.msgKnow = "";
    },
    handleSendMsg() {
      if (!this.msgText) {
        this.$message.error("请输入对话内容");
        return;
      }
      if (this.showEnd) {
        this.$message.error("请开始新对话");
        return;
      }
      // 用户发消息
      this.sendMessage();
    },
    scrollChatContent(id = "dialogBox") {
      setTimeout(() => {
        var dialogBox = document.getElementById(id);
        dialogBox.scrollTo({
          top: dialogBox.scrollHeight,
          behavior: "smooth",
        });
      }, 100);
    },
    async sendMessage() {
      this.msgId++;
      this.msgList.push({
        chat: 1, // 1=问 0=回答
        msgText: this.msgText,
        msgId: this.msgId,
      });
      const postData = {
        query: this.msgText,
        inputs: {},
        response_mode: "blocking",
        user: this.randomId,
        conversation_id: this.conversation_id,
        // files: [
        //   {
        //     type: "image",
        //     transfer_method: "remote_url",
        //     url: "https://cloud.dify.ai/logo/logo-site.png",
        //   },
        // ],
      };
      this.msgText = "";
      this.scrollChatContent();
      this.disabledSendMsg = true;
      const res = await chatMessages(postData);
      if (res) {
        this.conversation_id = res?.conversation_id || "";
        this.getChartData(res?.answer);
        this.getTwoUserInfo();
        this.disabledSendMsg = false;
      }
    },
    async getUserInfo() {
      const res = await fetchUser({
        userId: this.randomId,
      });
      if (res) {
        this.currentUser =
          JSON.parse(JSON.stringify(res).replaceAll("NULL", "")) || {};
      }
      // this.currentUser = currentUserData;
    },
    async getOldUserInfo(cId, part) {
      const res = await fetchOldUserProfile({
        userId: this.randomId,
        cId,
      });
      if (res) {
        if (part == "first") {
          this.userInfo1 =
            JSON.parse(JSON.stringify(res).replaceAll("NULL", "")) || {};
        } else if (part == "second") {
          this.userInfo2 =
            JSON.parse(JSON.stringify(res).replaceAll("NULL", "")) || {};
        }
      }
    },
    async getChartData(answer) {
      const res = await sortedSubYitu({
        cId: this.conversation_id,
      });
      if (!res) return;
      this.msgId++;
      const postMsg = {
        chat: 0, // 1=问 0=回答
        msgText: answer,
        msgId: this.msgId,
        chatDetail: res[res.length - 1],
      };
      this.msgList.push(postMsg);

      // const prevList = this.msgList.map((item, index) => {
      //   if (index === this.msgId - 1) {
      //     return {
      //       ...item,
      //       chatDetail: res[this.msgId - 1],
      //     };
      //   }
      //   return item;
      // });
      // this.msgList = [...prevList, postMsg];
      // console.log("this.msgList===", this.msgList);
      this.scrollChatContent();

      // this.msgList = this.msgList.map((item, index) => {
      //   return {
      //     chatDetail: index === prev ? res[prev] : null,
      //     ...item,
      //   };
      // });

      // const res = [
      //   {
      //     count: "R1",
      //     subInputId: "【开场意图识别】",
      //     decisionMood: "中性",
      //     kl: ["【UMB V 10标准话术】"],
      //   },
      //   {
      //     count: "R2",
      //     subInputId: "【呼进买药-购买意图未知-BR1】",
      //     decisionMood: "",
      //     kl: ["汇仁企业文化库", "汇仁医学库"],
      //   },
      //   {
      //     count: "R3",
      //     subInputId: "【问诊-购买意图未知-BR1-意图判断】",
      //     decisionMood: "积极",
      //     kl: ["汇仁产品库", "汇仁医学库"],
      //   },
      // ];
      const decisionMoodMap = {
        中性: 5,
        积极: 10,
        犹豫: 3,
        失望不满: 0,
      };
      const currentMoodMap = {
        中性: 7,
        积极: 9,
        犹豫: 6,
        失望不满: 5,
      };
      const xData = res?.map((item) => item.count); //["R1", "R2", "R3", "R4", "R5", "R6"];
      this.opts1 = getLineOption({
        title: "用户情绪反馈表",
        type: "line",
        legend: ["当前对话", "标准话术/情绪中值", "情绪波动"],
        yData: [
          [],
          // res?.map((item) => currentMoodMap[item.decisionMood || '中性']), TODO 暂时不做
          res?.map((item) => 5),
          res?.map((item) => decisionMoodMap[item.decisionMood || "中性"]),
        ],
        xData: xData,
      });
    },

    delInfo() {
      this.userInfo1.userInfo = {};
      this.userInfo2.userInfo = {};
    },
    handleStop() {
      if (!this.msgList.length) {
        this.$message.error("暂未开启对话");
        return;
      }
      this.showEnd = true;
      this.conversation_id && this.cidList.push(this.conversation_id);
      this.conversation_id = "";
    },
    handleNewChatKnow() {
      this.msgKnowList = [];
      this.msgKnow = "";
    },
    handleNewChat() {
      this.msgList = [];
      this.chartTableData = {
        part: [],
        verger: [],
        mood: [],
      };
      this.showEnd = false;
    },
  },
  computed: {
    isPC() {
      return this.clientWidth > 800;
    },
  },
  watch: {
    showEnd() {
      this.scrollChatContent("dialogBox");
    },
  },
};
</script>
 
<style lang="less">
body {
  margin: 0; // overflow: hidden;
  .el-input__inner {
    background: #eee;
    border: 1px solid #eee;
    &:focus {
      border: 1px solid #eee;
    }
    &:hover {
      border: 1px solid #eee;
    }
  }
  // .el-input__inner {
  //   background: #eee;
  //   &:focus {
  //     border: 1px solid #eee;
  //   }
  // }
}
</style>
<style lang="less" scoped>
.team {
  background: #f2f5f6;
  padding: 0 12px;
  .team-top {
    height: calc(50vh - 8px);
  }
  .team-bottom {
    height: 50vh;
  }
  header {
    height: 48px;
    // border-bottom: 1px solid #0068b85d;
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
  .dialog-box {
    // height: calc(50vh - 64px);
    height: 50vh;
    display: flex;
    column-gap: 8px;
    .desc {
      font-size: 14px;
      color: #606266;
    }
    .content {
      .msg {
        position: relative;
        width: fit-content;
        max-width: 250px;
        &::after {
          content: "";
          position: absolute;
          width: 10px;
          height: 10px;
          transform: rotate(45deg);
          top: 2px;
        }
      }
      .msg-left {
        padding: 10px 12px;
        background: #ffefb2;
        border-radius: 2px;
        margin: 0 60px 0 20px;
        &::after {
          background: #ffefb2;
          left: -5px;
        }
      }
      .msg-right {
        color: #fff;
        padding: 10px 12px;
        background: #0e69b6;
        border-radius: 2px;
        margin: 0 20px 0 60px;
        &::after {
          background: #0e69b6;
          right: -5px;
        }
      }
    }
    .dialog-box-left,
    .dialog-box-right {
      .zsk {
        border: 1px solid #ddd;
        background: #fff;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
      }
      display: flex;
      flex-direction: column;
      .title {
        height: 48px;
      }
      /deep/.el-switch__core {
        background: #0e69b6 !important;
      }
      .content {
        flex: 1;
        padding: 20px 0;
        border-bottom: 1px solid #f0f1f4;
      }
      .search-line {
        display: flex;
        align-items: center;
        background: #eee;
        .send-btn {
          width: 32px;
          height: 32px;
          margin-right: 10px;
          cursor: pointer;
        }
        .new-start-item {
          border-radius: 8px;
          border: 1px solid #ddd;
          background: #fff;
          color: #0a50a9;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          width: 90px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
      }
      .new-start {
        padding: 8px 0 8px 16px;
      }
      .new-start-item {
        color: #0067b8;
        border: 1px solid #eee;
        padding: 2px 4px;
        font-size: 13px;
        border-radius: 4px;
        margin-right: 8px;
        cursor: pointer;
        &:hover {
          background-color: #0e69b6;
          color: #fff;
        }
      }
      .item-last {
        float: right;
      }
    }
    .dialog-box-left {
      flex: 42;
      //   border-right: 1px solid #0068b85d;

      .title {
        color: #0067b8;
        font-weight: 900;
        height: 48px;
        padding-left: 16px;
        line-height: 48px;
        // border-bottom: 1px solid #f0f1f4;
      }
      .content {
        height: 72px;
        border-bottom: none;
        padding: 0;
        overflow-y: auto;
        .zsk-item {
          overflow: hidden;
          margin-bottom: 12px;
        }
      }
      .charts {
        flex: 1;
        margin-top: 8px;
        border: 1px solid #ddd;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
      }
    }
    .dialog-box-right {
      flex: 60;
      .header {
        height: 48px;
        padding-left: 16px;
        line-height: 48px;
        border-bottom: 1px solid #f0f1f4;
        .title {
          color: #0067b8;
          font-weight: 900;
        }
        .el-switch,
        .desc {
          float: right;
        }
        .el-switch {
          transform: translateY(14px);
        }
        .el-switch.is-disabled {
          opacity: 1;
        }
        .desc {
          margin: 0 16px 0 16px;
        }
      }
      .content {
        overflow-y: scroll;
        padding: 0 40px 40px 20px;
        font-size: 12px;
        display: flex;
        .content-l {
          flex: 3;
        }
        .content-r {
          flex: 1;
          height: calc(100%);
        }
      }
    }
  }
  .echarts-box {
    width: 100%;
    height: 320px;
  }
  .fl-r {
    float: right;
  }
  .table-wrapper {
    overflow-x: scroll;
  }
  table,
  tr,
  td,
  th {
    border-collapse: collapse;
    text-align: center;
    font-size: 12px;
    border: 1px solid rgb(184, 182, 182);
  }
  th {
    width: 140px;
    font-weight: 400;
  }
}

.dialog-box-right {
  overflow-y: auto;
  box-shadow: 0px 6px 4px 0px #ddd;
  border: 1px solid #ddd;

  .service-title {
    color: #0a50a9;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    background: #fff;
    padding: 6px 10px;
  }
  .service-box {
    height: 100%;

    overflow-y: auto;
    background: #fff;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
    .item {
      display: flex;
    }

    .left-box {
      width: calc(100% - 250px);
      padding: 10px 32px 10px 10px;
      background: #fff;

      .service-content {
        .service-item {
          display: flex;
          align-items: center;
          &.right {
            justify-content: flex-end;
          }
        }
        .service-card {
          max-width: 354px;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #0a50a9;
          margin-bottom: 30px;
          .card-title {
            background: #0a50a9;
            display: flex;
            height: 38px;
            padding: 16px 10px;
            align-items: center;
            .btn-person {
              display: flex;
              height: 24px;
              padding: 0px 10px;
              justify-content: center;
              align-items: center;
              border-radius: 100px;
              background: #fff;
              color: #0a50a9;
              font-size: 10px;
              font-weight: 400;
            }
          }
          .card-content {
            padding: 10px;
            .btn-ai {
              display: flex;
              height: 24px;
              padding: 0px 10px;
              max-width: 60px;
              justify-content: center;
              align-items: center;
              border-radius: 100px;
              background: #0a50a9;
              color: #fff;
              font-size: 10px;
              font-weight: 400;
            }
            .desc {
              margin-top: 9px;
              color: #333;
              font-size: 12px;
              font-weight: 400;
            }
          }
        }
        .msg-card {
          width: 100%;
          margin: 20px 0;
          display: flex;
          padding: 10px;
          flex-direction: column;
          align-items: flex-start;
          border-radius: 10px;
          border: 1px solid #ddd;
          background: #f2f2f2;
          .card-title {
            .btn-name {
              display: flex;
              padding: 5px 10px;
              justify-content: center;
              align-items: center;
              color: #0a50a9;
              font-size: 10px;
              font-weight: 400;
              border-radius: 100px;
              background: #fff;
            }
          }
          .card-content {
            margin-top: 8px;
            .desc {
              color: #333;
              font-size: 12px;
              font-weight: 400;
            }
          }
        }

        .finish-card {
          width: 100%;
          margin: 10px 0;
          display: flex;
          padding: 10px;
          flex-direction: column;
          align-items: flex-start;
          border-radius: 10px;
          background: #ecf3f9;
          border: 1px solid #ddd;
          .card-title {
            color: #0a50a9;
            font-size: 12px;
            font-weight: 400;
          }
          .card-content {
            .desc {
            }
          }
        }
      }
    }
    .right-box {
      padding-top: 10px;
      // border: 1px solid #ddd;
      font-size: 10px;
      background: #ecf3f9;
      padding-left: 8px;
      width: 250px;
      .asideBox {
        width: 100%;
        margin-bottom: 85px;
      }
    }
  }
  .chat-box {
    margin-top: 8px;
    border: 1px solid #ddd;
    background: #fff;
    box-shadow: 0px 6px 4px 0px #ddd;

    .chat-header {
      padding-right: 10px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      .chat-body {
        display: flex;
        height: 32px;
        .name-item {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 80px;
          border-right: 0.5px solid #ddd;
          &.active {
            border-radius: 0px 10px 0px 0px;
            background: #3a78c8;
            border-right: 0;
            color: #fff;
          }
          &.hasMsg {
            position: relative;
            &::before {
              display: block;
              content: "";
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background: #e13637;
              position: absolute;
              top: 5px;
              right: 5px;
            }
          }
        }
      }
      .chat-body-right {
        /deep/ .el-select {
          width: 140px;
          .el-input__inner {
            background: #fff;
            border: 0;
            color: #0a50a9;
            font-size: 15px;
            font-weight: 700;
          }
          .el-input .el-select__caret {
            color: #0e69b6;
          }
        }
        .desc {
          margin-left: 16px;
        }
      }
    }
    .chat-content {
      height: 64px;
      display: flex;
      align-items: center;
      /deep/ .el-input__inner {
        background: #fff;
        border: 0;
      }
      .el-icon-s-promotion {
        cursor: pointer;
        margin-right: 28px;
        width: 32px;
        height: 32px;
      }
      .chat-btn-box {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
        .new-start-item {
          border-radius: 8px;
          border: 1px solid #ddd;
          background: #fff;
          color: #0a50a9;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          width: 90px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          &:hover {
            background-color: #0e69b6;
            color: #fff;
          }
        }
        .new-chat-item {
          border-radius: 8px;
          border: 1px solid #ddd;
          background: #fff;
          color: #0a50a9;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          width: 90px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          &:hover {
            background-color: #0e69b6;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
