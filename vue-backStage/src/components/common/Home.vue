<template>
	<div>
		<v-head></v-head>
    	<v-sidebar></v-sidebar>
    	<div class="content">
            <router-view></router-view>
        </div>
	</div>
</template>

<script>
	import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    export default {
        components:{
            vHead, vSidebar
        }
    }
</script>

<style>
	html,body{
		margin: 0;
		padding: 0;
	}
</style>