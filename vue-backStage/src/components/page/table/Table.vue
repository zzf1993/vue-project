<template>
    <div>
	    <div>
	    	<v-query @query="query"></v-query>
	    </div>
	    <div class="modul">
	    	<el-table :data="tableData" stripe style="width: 100%">
			    <el-table-column prop="date" label="日期" width="180"></el-table-column>
			    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
			    <el-table-column prop="age" label="年龄"></el-table-column>
			    <el-table-column prop="address" label="地址"></el-table-column>
			    <el-table-column  prop="" label="">
			    	<span>修改</span>
			    </el-table-column>
			</el-table>
	    </div>
	    <div class="block modul text-right">
		    <el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page="currentPage4"
		      :page-sizes="[5, 10, 15, 20]"
		      :page-size="1"
		      layout="total, sizes, prev, pager, next, jumper"
		      :total="tableData.length">
		    </el-pagination>
	  	</div>
    </div>
</template>

<script>
	import vQuery from './Query.vue';
	import axios from 'axios';
	import Mock from '../../../util/mock.js';
		

	export default {
		components:{
			vQuery
		},
		data(){
			return{
				tableData: [],
			    currentPage4: 1
			}
		},
		methods: {
			cc: function (str) {
		      alert(str)
		    },
			query: function(){
				this.apis();
			},
	      handleSizeChange(val) {
	        console.log(`每页 ${val} 条`);
	        this.apis();
	      },
	      handleCurrentChange(val) {
	        console.log(`当前页: ${val}`);
	        this.apis();
	      },
	      apis: function(){
	 	// axios.get('/admin')
			// .then(function(data){
			// 	 console.log(1112);
			// 	 console.log(data.data.object);
			// })
			// .catch(function(data){
			// 	 console.log(222);
			// });
			axios.post('/list',{
				ticket:1,
				page:'${val}',
				pageSize:'${val}'
			}).then((data)=>{
				console.log(data.data.object);
				this.tableData = data.data.object;
			});
	      }
	    },
	    mounted: function(){
	    	this.apis();
	    }

	}
</script>

<style>
	.modul{
		margin:10px 0;
	}
	.text-right{
		text-align: right;
	}
</style>