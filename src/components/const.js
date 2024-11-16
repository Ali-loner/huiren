export const tableData = {
  用户基本信息: {
    姓名: {
      历史记录: "XXX",
      当前对话记录: "XXX",
    },
    年龄: {
      历史记录: "XXX",
      当前对话记录: "XXX",
    },
    手机号: {
      历史记录: "XXX",
      当前对话记录: "XXX",
    },
    快递地址: {
      历史记录: "XXX",
      当前对话记录: "XXX",
    },
    职业: {
      历史记录: "XXX",
      当前对话记录: "XXX",
    },
    购买主体: {
      历史记录: "XXX",
      当前对话记录: "XXX",
    },
    症状1: {
      历史记录: "XXX",
      当前对话记录: "XXX",
    },
    症状2: {
      历史记录: "XXX",
      当前对话记录: "XXX",
    },
    症状3: {
      历史记录: "XXX",
      当前对话记录: "XXX",
    },
    症状4: {
      历史记录: "XXX",
      当前对话记录: "XXX",
    },
    症状5: {
      历史记录: "XXX",
      当前对话记录: "XXX",
    },
    禁忌症: {
      历史记录: "XXX",
      当前对话记录: "XXX",
    },
    血压指标: {
      历史记录: "XXX",
      当前对话记录: "XXX",
    },
    血糖指标: {
      历史记录: "XXX",
      当前对话记录: "XXX",
    },
    血脂指标: {
      历史记录: "XXX",
      当前对话记录: "XXX",
    },
  },
  用户购买分析: {
    六味地黄丸: {
      历史购买记录: {
        购买时间: "",
        购买数量: "",
        购买价格: "",
        使用效果: "",
        通话次数: "",
        配送地址: "",
      },
      历史价格敏感度: {
        购买关注点: "",
        关注点情绪: "",
        攻单次数: "",
      },
      当前价格敏感度: {
        购买关注点: "",
        购买意向: "",
        攻单反馈情绪: "",
      },
    },
    肾宝片: {
      历史购买记录: {
        购买时间: "",
        购买数量: "",
        购买价格: "",
        使用效果: "",
        通话次数: "",
        配送地址: "",
      },
      历史价格敏感度: {
        购买关注点: "",
        关注点情绪: "",
        攻单次数: "",
      },
      当前价格敏感度: {
        购买关注点: "",
        购买意向: "",
        攻单反馈情绪: "",
      },
    },
    引阳索: {
      历史购买记录: {
        购买时间: "",
        购买数量: "",
        购买价格: "",
        使用效果: "",
        通话次数: "",
        配送地址: "",
      },
      历史价格敏感度: {
        购买关注点: "",
        关注点情绪: "",
        攻单次数: "",
      },
      当前价格敏感度: {
        购买关注点: "",
        购买意向: "",
        攻单反馈情绪: "",
      },
    },
  },
  用户知识咨询分析: {
    通用医学知识: {
      解答成功蓝色: {
        内容: "",
        次数: "",
      },
      解答失败蓝色: {
        内容: "",
        次数: "",
      },
      解答成功黄色: {
        内容: "",
        次数: "",
      },
      解答失败黄色: {
        内容: "",
        次数: "",
      },
    },
    工仁医学知识: {
      解答成功蓝色: {
        内容: "",
        次数: "",
      },
      解答失败蓝色: {
        内容: "",
        次数: "",
      },
      解答成功黄色: {
        内容: "",
        次数: "",
      },
      解答失败黄色: {
        内容: "",
        次数: "",
      },
    },
    工仁产品知识: {
      解答成功蓝色: {
        内容: "",
        次数: "",
      },
      解答失败蓝色: {
        内容: "",
        次数: "",
      },
      解答成功黄色: {
        内容: "",
        次数: "",
      },
      解答失败黄色: {
        内容: "",
        次数: "",
      },
    },
    工仁企业知识: {
      解答成功蓝色: {
        内容: "",
        次数: "",
      },
      解答失败蓝色: {
        内容: "",
        次数: "",
      },
      解答成功黄色: {
        内容: "",
        次数: "",
      },
      解答失败黄色: {
        内容: "",
        次数: "",
      },
    },
    通用社交闲聊知识: {
      解答成功蓝色: {
        内容: "",
        次数: "",
      },
      解答失败蓝色: {
        内容: "",
        次数: "",
      },
      解答成功黄色: {
        内容: "",
        次数: "",
      },
      解答失败黄色: {
        内容: "",
        次数: "",
      },
    },
  },
  用户异常记录: {
    历史异常: {
      敏感词: "",
      闲聊骚扰: "",
    },
    历史投诉: {
      产品效果投诉: "",
      快递投诉: "",
      服务质量投诉: "",
    },
    当前异常: { 敏感词: "", 闲聊骚扰: "" },
    当前投诉: { 产品效果投诉: "", 快递投诉: "", 服务质量投诉: "" },
  },
};

export const opts1 = {
  title: {
    text: "图表1",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
  legend: {
    data: ["Union Ads", "Video Ads", "Search Engine"],
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "line",
      name: "Union Ads",
    },
    {
      data: [50, 130, 24, 418, 235, 107, 160],
      type: "line",
      name: "Video Ads",
    },
    {
      data: [10, 330, 124, 198, 199, 14, 60],
      type: "line",
      name: "Search Engine",
    },
  ],
};
export const opts2 = {
  title: {
    text: "图表2",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
  legend: {
    data: ["关云长", "张翼德", "赵子龙"],
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [50, 30, 24, 218, 135, 147, 260],
      type: "bar",
      smooth: true,
      name: "关云长",
    },
    {
      data: [350, 130, 224, 418, 35, 107, 160],
      type: "bar",
      smooth: true,
      name: "张翼德",
    },
    {
      data: [10, 330, 124, 198, 199, 14, 60],
      type: "bar",
      smooth: true,
      name: "赵子龙",
    },
  ],
};

export const getLineOption = (option = {}) => {
  let options = {
    title: {
      text: option.title,
      textStyle:{
        fontSize: 12
      }
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      data: option.legend,
    },
    xAxis: {
      type: "category",
      //   data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      data: option.xData,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        // data: [50, 30, 24, 218, 135, 147, 260],
        data: option.yData?.[0],
        type:option.type,
        lineStyle:{
          width: 5
        },
        name:option.legend?.[0],
      },
      {
        // data: [350, 130, 224, 418, 35, 107, 160],
        data: option.yData?.[1],
        type:option.type,
        lineStyle:{
          width: 5
        },
        name: option.legend?.[1],
      },
      {
        // data: [10, 330, 124, 198, 199, 14, 60],
        data: option.yData?.[2],
        type:option.type,
        lineStyle:{
          width: 5
        },
        name: option.legend?.[2],
      },
    ],
  };
  return options;
};
