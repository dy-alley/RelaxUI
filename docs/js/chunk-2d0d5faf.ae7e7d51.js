(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d5faf"],{7132:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("div",{staticClass:"components-button-demo"},[s("RelaxTag",{attrs:{name:"普通提示"}},[s("template",{slot:"temp"},[s("x-button",{attrs:{type:"primary"},on:{click:t.info}},[t._v("显示普通提示")])],1),s("template",{slot:"desc"},[t._v("\n        最基本的提示，默认在"),s("i",[t._v("1.5")]),t._v("秒后消失。\n      ")]),s("textarea",{attrs:{slot:"code"},slot:"code"},[t._v("        <template>\n          <x-button type='primary' @click=\"info\">显示普通提示</x-button>\n        </template>\n        <script>\n        export default {\n          methods: {\n            info(){\n              this.$message.info('message 消息')\n            }\n          }\n        }\n        <\/script>\n      ")])],2),s("RelaxTag",{attrs:{name:"提示类型"}},[s("template",{slot:"temp"},[s("x-button",{attrs:{type:"success"},on:{click:t.success}},[t._v("显示成功提示")]),s("x-button",{attrs:{type:"warning"},on:{click:t.warning}},[t._v("显示警告提示")]),s("x-button",{attrs:{type:"danger"},on:{click:t.error}},[t._v("显示错误提示")])],1),s("template",{slot:"desc"},[t._v("\n        不同的提示状态：成功、警告、错误。\n      ")]),s("textarea",{attrs:{slot:"code"},slot:"code"},[t._v('        <template>\n          <x-button type="success" @click="success">显示成功提示</x-button>\n          <x-button type="warning" @click="warning">显示警告提示</x-button>\n          <x-button type="danger" @click="error">显示错误提示</x-button>\n        </template>\n        <script>\n        export default {\n          methods: {\n            success(){\n              this.$message.success(\'message 消息\')\n            },\n            warning(){\n              this.$message.warning(\'message 消息\')\n            },\n            error(){\n              this.$message.error(\'message 消息\')\n            }\n          }\n        }\n        <\/script>\n      ')])],2),s("RelaxTag",{attrs:{name:"加载中"}},[s("template",{slot:"temp"},[s("x-button",{on:{click:t.loading}},[t._v("显示加载中")])],1),s("template",{slot:"desc"},[t._v("\n        Loading 的状态，并异步在某个时机移除。\n      ")]),s("textarea",{attrs:{slot:"code"},slot:"code"},[t._v("        <template>\n          <x-button @click=\"loading\">显示加载中</x-button>\n        </template>\n        <script>\n        export default {\n          methods: {\n            loading(){\n              const loading = this.$message.loading('message 消息', 0)\n              setTimeout(loading, 3000)\n            }\n          }\n        }\n        <\/script>\n      ")])],2)],1)])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"topbar"},[s("div",{staticClass:"page-title-box"},[s("h4",{staticClass:"page-title"},[t._v("Message 消息")]),s("p",{staticClass:"page-title-decs"},[t._v("消息通知")])])])}],o={methods:{info:function(){this.$message.info("message 消息")},success:function(){this.$message.success("message 消息")},warning:function(){this.$message.warning("message 消息")},error:function(){this.$message.error("message 消息")},loading:function(){var t=this.$message.loading("message 消息",0);setTimeout(t,3e3)}}},i=o,c=s("2877"),r=Object(c["a"])(i,n,a,!1,null,null,null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0d5faf.ae7e7d51.js.map