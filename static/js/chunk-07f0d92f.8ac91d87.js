(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07f0d92f"],{"341d":function(t,e,a){"use strict";var r=a("39d4"),n=a.n(r);n.a},"39d4":function(t,e,a){},9764:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",[a("el-main",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData.rows,border:"",stripe:""}},[a("el-table-column",{attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",prop:"recruitTitle",label:"主题"}}),t._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",prop:"applicantName",label:"申请人"}}),t._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",prop:"deptId",label:"店面"}}),t._v(" "),a("el-table-column",{attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",label:"需求岗位"}})],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.query.page,"page-size":t.query.limit,layout:"total,sizes, prev, pager, next, jumper",total:t.tableData.total},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})],1)],1)},n=[],i=(a("63ff"),a("e5af")),l=a("d025"),o={name:"RecruitList",data:function(){return{tableData:{rows:[],total:0},query:{page:1,limit:10,deptId:this.$store.getters.deptId}}},created:function(){this.getListData()},methods:{getListData:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["e"])(this.query);case 2:e=t.sent,this.tableData.rows=e.data.list,this.tableData.total=e.data.total;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),resetForm:function(){this.$refs.searchForm.resetFields()},handleSearch:function(){this.query.page=1,this.getListData()},handleSizeChange:function(t){this.query.page=1,this.query.limit=t,this.getListData()},handleCurrentChange:function(t){this.query.page=t,this.getListData()}}},s=o,c=(a("341d"),a("5511")),u=Object(c["a"])(s,r,n,!1,null,"67d10622",null);e["default"]=u.exports}}]);