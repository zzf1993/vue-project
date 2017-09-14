<template>
    <div class="login-bg">
    	<div class="login-from">
    		<h1>Employer Log in</h1>
    		<div class="inset">
	    		<div>
	    			<label>账号:</label>
	    			<input type="text" v-model="login.user">
	    		</div>
	    		<div>
	    			<label>密码:</label>
	    			<input type="password" v-model="login.psd">
	    		</div>
				<div class="forget" v-if="true">
					<router-link to="/home">忘记密码？</router-link>
				</div>
				<div  class="login-btn">
    				<el-button :disabled="login.btn">Login in</el-button>
				</div>
    		</div>
    	</div>
       <router-link to="/home">登录到首页</router-link>
    </div>
</template>

<script>
	export default {
		data(){
			return{
				login:{
					user:'',
					psd:'',
					btn:true
				}
			}
		},
		methods:{
				loginTo:function(){
					if(this.login.psd==""||this.login.user==""){
						this.login.btn = true;
					}else{
						this.login.btn = false;
					}
				}
			},
		mounted:function(){
				// this.loginTo();
		}
	};
</script>

<style scoped>
	.login-bg{
		height:100%; 
		background: #333333;
		color: white;
	}
	.login-from{
		width:360px;
		height:400px;
		background: #111;
		margin: 0 auto;
		box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.2);
		border-radius: 0.4em;
		border: 1px solid #191919;
		overflow: hidden;
		position: relative;
		top:60px;
	}
	.login-from h1{
		font-size: 18px;
		text-shadow: 0 1px 0 black;
		text-align: center;
		padding: 15px 0;
		border-bottom: 1px solid black;
		position: relative;
	}
	.login-from label{
		color: #666;
		padding-bottom: 9px;
	}
	.inset{
		padding: 20px;
    	border-top: 1px solid #19191a;
	}
	input[type=text],
	input[type=password] {
	  width: 80%;
	  padding: 8px 5px;
	  background: linear-gradient(#1f2124, #27292c);
	  border: 1px solid #222;
	  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);
	  border-radius: 0.3em;
	  margin-bottom: 20px;
	}
	.forget{
		text-align: right;
		font-size: 14px;
	}
	.forget *{
		color:#20A0FF;
		text-decoration: underline;
	}
	.login-btn{
		text-align: center;
	}
	.login-btn button{
		width: 120px;
		height: 40px;
		background-color: #20A0FF;
		border:none;
		cursor: pointer;
		color:#fff;
	}
	.login-btn button:hover{
		opacity: 0.9;
		color:#fff;
		background-color: #20A0FF;
	}
</style>