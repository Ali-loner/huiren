<template>
  <div @click="clickDom" ref="chartsBox" class="chart-box">
    <div class="main" :id="id" :ref="id + 'Canvas'"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "echart-box",
  props: {
    id: {
      type: String,
      default: "main"
    },
    option: Object,
    handler: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      echs: "",
      isClickDom: false,
      t: null
    };
  },
  watch: {
    option: {
      handler() {
        this.$nextTick(function() {
          this.renderInit();
        });
      },
      deep: true
    }
  },
  mounted() {
    console.log("this.option===ddd",this.option);
    this.renderInit();
    this.$nextTick(function() {
      
    });
  },

  beforeDestroy() {
    /* 释放内存*/
    this.echs.dispose(); // 销毁实例
    window.removeEventListener("resize", this.resizeCallback);
  },
  methods: {
    debunce(callback, delay) {
      return () => {
        clearTimeout(this.t);
        this.t = setTimeout(callback, delay);
      };
    },
    clickDom(e) {
      if (!this.isClickDom) {
        this.$emit("isNotClickEchart", [e, this.$refs.chartsBox.offsetWidth]);
      }
      this.isClickDom = false;
    },
    // 初始化echarts
    renderInit() {
      this.echs = echarts.getInstanceByDom(this.$refs[this.id + "Canvas"]);
      if (this.echs == null) {
        this.echs = echarts.init(this.$refs[this.id + "Canvas"]);
      }
      console.log("this.option===",this.option);
      this.echs.setOption(this.option, true);
      this.echs.off("click");
      this.echs.on("datazoom", params => {
        if(params?.batch?.[0]?.end == 100) {
          this.debunce(() => {
            this.$emit("changeDataZoom");
          }, 1000)();
        }
      });
      this.echs.on("click", params => {
        this.isClickDom = true;
        this.$emit("nodeClick", [params, echarts, this.id]);
      });

      this.echs.off("mouseover");
      this.echs.on("mouseover", params => {
        this.$emit("nodeMouseOver", [params, echarts, this.id]);
      });
      this.echs.off("mouseout");
      this.echs.on("mouseout", () => {
        this.$emit("nodeMouseOut");
      });
      this.echs.resize();
      window.addEventListener("resize", this.resizeCallback);
    },
    resizeCallback() {
      if (!document.body.contains(this.$parent.$el)) {
        return;
      }
      setTimeout(() => {
        this.echs.resize();
      }, 500);
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

.chart-box {
  width: 100%;
  height: 100%;
}

.main {
  width: 100%;
  height: 100%;
}
</style>
