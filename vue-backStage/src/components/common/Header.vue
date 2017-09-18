<template>
    <div class="header">
        <div class="logo">vue后端管理平台</div>
        <div class="user-info">
        	<el-dropdown>
				  <el-button type="primary">
				    <span class="el-dropdown-link">
                        <img class="user-logo" src="../../../static/img/img.jpg">
                        {{name}}
                    </span>
				  </el-button>
				  <el-dropdown-menu slot="dropdown">
				    <el-dropdown-item v-for='(item, index) in userInfo'>
                        <a @click="jupForSelfPath(item.path,'add')">{{item.text}}</a>
                    </el-dropdown-item>
				  </el-dropdown-menu>
			</el-dropdown>
        </div> 
    </div>
</template>

<script>
	export default {
        data() {
            return {
                name: '我不是斯巴达',
                userInfo:{
                    more:{
                        path:'/login',
                        text:'更多信息'
                    },
                    out:{
                        path:'/login',
                        text:'退出'
                    }
                }
            }
        },
        methods:{
            jupForSelfPath:function(Path){
                this.$router.push({path:Path});
                // console.log(e);
            }
        }
    }
</script>

<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
        background-color: #20A0FF;
    }
    .header .logo{
        float: left;
        width:250px;
        text-align: center;
    }
    .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
    }
    .user-info .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 36px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }
    .user-info .user-logo{
        position: absolute;
        left: -15px;
        top: -13px;
        width: 38px;
        height: 38px;
        border-radius: 50%;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>