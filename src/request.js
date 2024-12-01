import axios from "axios";
import { Message } from "element-ui";

// create an axios instance
const service = axios.create({
  // baseURL: "/api", // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  // timeout: 5000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    // 后端接口以 /common 和 /admin开头，在配置nginx哪里需要如下设置
    /**
     * 
     *  location /admin/ {
          proxy_pass http://jzq.lingser.cn;
        }
        location /common/ {
          proxy_pass http://jzq.lingser.cn;
        }
     */
    config.headers["Authorization"] = "Bearer " + localStorage.getItem("token");

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      const res = response.data;
      if (!res) {
        Message({
          message: res.msg || "Error",
          type: "error",
          duration: 5 * 1000,
        });

        return Promise.reject(new Error(res.msg || "Error"));
      } else {
        if(res == 'no found'){
          Message({
            message: "不支持的消息",
            type: "error",
            duration: 5 * 1000,
          });
          return null;
        }
        return res;
      }
    }
  },
  (error) => {
    console.log("error===", error);
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
