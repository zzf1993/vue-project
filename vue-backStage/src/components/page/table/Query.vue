<template>
    <div>
    	<el-row :gutter="20">
	    	<el-col :span="6">
	    		<div class="grid-content bg-purple">
	    			<label>关键词</label>
	       			<input v-model="inputVal" placeholder="请输入内容">
	    		</div>
	    	</el-col>	    	
       		<el-button type="primary" icon="search" @click="submit">搜索</el-button>
    	</el-row>
    </div>
</template>

<script>
	export default{
		data(){
			return{
				inputVal:''
			}
		},
		methods: {
		    submit: function () {
		      // 子组件中触发父组件方法query并传值inputVal
		      this.$emit('query',this.inputVal)
		    }
		}
	}
</script>

<style scoped>
	label,input{
		height: 36px;
		line-height: 36px;
	}
	input{

		border:1px solid #ddd;
		border-radius: 4px;
		padding-left: 4px;
	}
</style>