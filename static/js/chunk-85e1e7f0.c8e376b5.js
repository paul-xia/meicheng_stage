(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-85e1e7f0"],{"011d":function(e,t){},"091c":function(e,t,o){"use strict";o.r(t);var n=o("011d"),l=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,(function(){return n[e]}))}(a);t["default"]=l.a},3474:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-container",[o("el-main",[o("el-card",{attrs:{"body-style":{padding:"20px"}}},[o("div",{attrs:{slot:"header"},slot:"header"},[o("el-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[o("el-col",[e._v("\n            盘点管理("+e._s(e.stocktakingInfo.commons.stocktakingDetailNo)+")：\n            "),o("el-tag",{attrs:{type:"primary",size:"small"}},[e._v("\n              "+e._s(e._f("filterStatus")(e.stocktakingInfo.commons.status))+"\n            ")])],1),e._v(" "),o("el-col",[o("el-row",{attrs:{type:"flex",justify:"end"}},[o("el-button",{attrs:{type:"info",size:"medium"},on:{click:e.cancelStock}},[e._v("\n                取消盘点\n              ")]),e._v(" "),o("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.confirmStock}},[e._v("\n                确认盘点\n              ")])],1)],1)],1)],1),e._v(" "),o("el-form",{ref:"searchForm",attrs:{"label-position":"left",model:e.query}},[o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{xs:12,sm:12,md:12,lg:8,xl:8}},[o("el-form-item",{attrs:{label:"盘点仓库",prop:"warehouseId","label-width":"90px"}},[e._v("\n              "+e._s(e.stocktakingInfo.commons.warehouseName)+"\n            ")])],1),e._v(" "),o("el-col",{attrs:{xs:12,sm:12,md:12,lg:8,xl:8}},[o("el-form-item",{attrs:{label:"所属机构",prop:"warehouseId","label-width":"90px"}},[e._v("\n              "+e._s(e.stocktakingInfo.commons.orgName)+"\n            ")])],1),e._v(" "),o("el-col",{attrs:{xs:12,sm:12,md:12,lg:8,xl:8}},[o("el-form-item",{attrs:{label:"备注",prop:"warehouseId","label-width":"90px"}},[e._v("\n              "+e._s(e.stocktakingInfo.commons.notes)+"\n            ")])],1),e._v(" "),o("el-col",{attrs:{xs:12,sm:12,md:12,lg:8,xl:8}},[o("el-form-item",{attrs:{label:"发起时间",prop:"warehouseId","label-width":"90px"}},[e._v("\n              "+e._s(e._f("formartDate")(e.stocktakingInfo.commons.startedAt,"Y-M-D"))+"\n            ")])],1),e._v(" "),o("el-col",{attrs:{xs:12,sm:12,md:12,lg:8,xl:8}},[o("el-form-item",{attrs:{label:"发起人",prop:"warehouseId","label-width":"90px"}},[e._v("\n              "+e._s(e.stocktakingInfo.commons.initiateName)+"\n            ")])],1),e._v(" "),o("el-col",{attrs:{xs:12,sm:12,md:12,lg:8,xl:8}},[o("el-form-item",{attrs:{label:"仅看差异",prop:"warehouseId","label-width":"90px"}},[o("el-checkbox",{on:{change:e.handleChangeWithZeroStock},model:{value:e.query.onlyDff,callback:function(t){e.$set(e.query,"onlyDff",t)},expression:"query.onlyDff"}})],1)],1)],1)],1),e._v(" "),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.stocktakingInfo.items,border:"",stripe:""}},[o("el-table-column",{attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",label:"物料编号",prop:"stocktakingDetailNo"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.skuNo)+"\n          ")]}}])}),e._v(" "),o("el-table-column",{attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",label:"物料名称",prop:"stocktakingDetailNo"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.title)+"\n          ")]}}])}),e._v(" "),o("el-table-column",{attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",label:"别名",prop:"stocktakingDetailNo"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.alias)+"\n          ")]}}])}),e._v(" "),o("el-table-column",{attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",label:"物料类型",prop:"stocktakingDetailNo"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.category)+"\n          ")]}}])}),e._v(" "),o("el-table-column",{attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",label:"品牌/厂商",prop:"stocktakingDetailNo"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.brand)+"\n          ")]}}])}),e._v(" "),o("el-table-column",{attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",label:"规格",prop:"stocktakingDetailNo"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.spec)+"\n          ")]}}])}),e._v(" "),o("el-table-column",{attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",label:"型号",prop:"stocktakingDetailNo"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.model)+"\n          ")]}}])}),e._v(" "),o("el-table-column",{attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",label:"单位",prop:"stocktakingDetailNo"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.stockNnit)+"\n          ")]}}])}),e._v(" "),o("el-table-column",{attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",label:"其他属性",prop:"stocktakingDetailNo"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.otherPropsStr)+"\n          ")]}}])}),e._v(" "),o("el-table-column",{attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",label:"物料编号",prop:"stocktakingDetailNo"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.skuNo)+"\n          ")]}}])}),e._v(" "),o("el-table-column",{attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",label:"采购订单",prop:"stocktakingDetailNo"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.purchaseOrderNo)+"\n          ")]}}])}),e._v(" "),o("el-table-column",{attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",label:"供应商",prop:"stocktakingDetailNo"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.supplierTitle)+"\n          ")]}}])}),e._v(" "),o("el-table-column",{attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",label:"销售价",prop:"stocktakingDetailNo"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.suggestionPrice)+"\n          ")]}}])}),e._v(" "),o("el-table-column",{attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",label:"自由库存"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.stock)+"\n          ")]}}])}),e._v(" "),o("el-table-column",{attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",label:"盘点值"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.stock)+"\n          ")]}}])}),e._v(" "),o("el-table-column",{attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",label:"差异原因"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.notes)+"\n          ")]}}])})],1),e._v(" "),o("el-pagination",{attrs:{"current-page":e.query.page,"page-sizes":e.pageSizes,"page-size":e.query.pageSize,layout:"total,sizes, prev, pager, next, jumper",total:e.stocktakingInfo.pagination.totalCount},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}})],1)],1)],1)},l=[];o.d(t,"a",(function(){return n})),o.d(t,"b",(function(){return l}))},4628:function(e,t,o){},4804:function(e,t,o){"use strict";o.r(t);var n=o("3474"),l=o("091c");for(var a in l)"default"!==a&&function(e){o.d(t,e,(function(){return l[e]}))}(a);o("6607");var r=o("5511"),s=Object(r["a"])(l["default"],n["a"],n["b"],!1,null,"193f0ed7",null);t["default"]=s.exports},6607:function(e,t,o){"use strict";var n=o("4628"),l=o.n(n);l.a}}]);