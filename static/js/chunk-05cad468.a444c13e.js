(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05cad468"],{3151:function(e,t,r){"use strict";r.d(t,"e",(function(){return c})),r.d(t,"g",(function(){return i})),r.d(t,"a",(function(){return s})),r.d(t,"d",(function(){return l})),r.d(t,"h",(function(){return u})),r.d(t,"j",(function(){return p})),r.d(t,"b",(function(){return f})),r.d(t,"f",(function(){return m})),r.d(t,"i",(function(){return h})),r.d(t,"k",(function(){return d})),r.d(t,"c",(function(){return b}));var n=r("b775"),a=r("4360"),o="/hrm",c=function(e){return Object(n["a"])({url:"".concat(o,"/hrmsafe/getSafeList/").concat(a["a"].getters.deptId),method:"get",data:e})},i=function(e){return Object(n["a"])({url:"".concat(o,"/hrmsafe/addSafe"),method:"post",params:e})},s=function(e){return Object(n["a"])({url:"".concat(o,"/hrmsafe/delSafe/").concat(e.id),method:"delete"})},l=function(e){return e.deptId=a["a"].getters.deptId,Object(n["a"])({url:"".concat(o,"/hrmsafelevel/getSafeLevelList"),method:"get",data:e})},u=function(e){return e.deptId=a["a"].getters.deptId,Object(n["a"])({url:"".concat(o,"/hrmsafelevel/addSafeLevel"),method:"post",params:e})},p=function(e){return e.deptId=a["a"].getters.deptId,Object(n["a"])({url:"".concat(o,"/hrmsafelevel/changeSafeLevel"),method:"put",params:e})},f=function(e){return Object(n["a"])({url:"".concat(o,"/hrmsafelevel/delSafeLevel/").concat(e.safeLevelId),method:"delete"})},m=function(e){return Object(n["a"])({url:"".concat(o,"/hrmsalaryjoblevelsalepolicy"),method:"get",params:e})},h=function(e){return Object(n["a"])({url:"".concat(o,"/hrmsalaryjoblevelsalepolicy"),method:"post",params:e})},d=function(e){return Object(n["a"])({url:"".concat(o,"/hrmsalaryjoblevelsalepolicy"),method:"put",params:e})},b=function(e){return Object(n["a"])({url:"".concat(o,"/hrmsalaryjoblevelsalepolicy/").concat(e.id),method:"delete"})}},"43b4":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",[r("el-header",{staticClass:"search_header",staticStyle:{"min-height":"60px",height:"auto"}},[r("el-form",{attrs:{"label-position":"left"}},[r("div",[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{xs:12,sm:12,md:12,lg:8,xl:8}},[r("el-popover",{attrs:{placement:"bottom",width:"400",trigger:"click"},model:{value:e.popShow,callback:function(t){e.popShow=t},expression:"popShow"}},[r("el-form",{attrs:{"label-width":"50px"}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"说明"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1),e._v(" "),r("el-form-item",{staticStyle:{"margin-bottom":"0"}},[r("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")]),e._v(" "),r("el-button",{on:{click:function(t){e.popShow=!1}}},[e._v("取消")])],1)],1),e._v(" "),r("el-button",{attrs:{slot:"reference",icon:"el-icon-plus"},slot:"reference"},[e._v("\n                添加保险类别\n              ")])],1)],1)],1)],1)])],1),e._v(" "),r("el-main",[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData.rows,border:"",stripe:""}},[r("el-table-column",{attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",prop:"name",label:"名称"}}),e._v(" "),r("el-table-column",{attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",prop:"remark",label:"说明"}}),e._v(" "),r("el-table-column",{attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",prop:"title",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(r){return e.deleteItem(t.row)}}},[e._v("\n            删除\n          ")])]}}])})],1),e._v(" "),r("el-pagination",{attrs:{"current-page":e.query.page,"page-size":e.query.limit,layout:"total, prev, pager, next, jumper",total:e.tableData.total},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}})],1)],1)},a=[],o=(r("5ab2"),r("6d57"),r("e10e"),r("cc57"),r("63ff"),r("e5af")),c=r("9d37"),i=r("3151"),s=r("52c1");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(c["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p={name:"InsuranceSetting",components:{},data:function(){return{tableData:{rows:[],total:0},popShow:!1,query:{page:1,limit:10},form:{name:"",remark:""}}},computed:u({},Object(s["b"])(["deptId"])),created:function(){this.getListData()},methods:{getListData:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["e"])(this.query);case 2:t=e.sent,this.tableData.rows=t.data,this.tableData.total=t.data.length;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onSubmit:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=Object.assign({},this.form),t.name){e.next=3;break}return e.abrupt("return",this.$message.error("请填写名称"));case 3:return t.deptId=this.deptId,e.next=6,Object(i["g"])(t);case 6:this.popShow=!1,this.form={name:"",remark:""},this.getListData(),this.$message.success("操作成功！");case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),deleteItem:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$confirm("确认删除？");case 2:return e.next=4,Object(i["a"])(t);case 4:this.getListData(),this.$message.success("操作成功！");case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),resetForm:function(){this.$refs.searchForm.resetFields()},handleSearch:function(){this.query.page=1,this.getListData()},handleSizeChange:function(e){this.query.page=1,this.query.limit=e,this.getListData()},handleCurrentChange:function(e){this.query.page=e,this.getListData()}}},f=p,m=(r("651a"),r("5511")),h=Object(m["a"])(f,n,a,!1,null,"3ffe615e",null);t["default"]=h.exports},"651a":function(e,t,r){"use strict";var n=r("82e9"),a=r.n(n);a.a},"82e9":function(e,t,r){}}]);