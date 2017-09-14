import axios from 'axios';
import Mock from 'mockjs';

Mock.mock('/admin', 'get',{
		"object|1-50":[{
			"name" : '@cname',     //模拟名称
            "age|15-24":100,          //模拟年龄(1-100)
            "address":'@county(true)',  //模拟地区
            "date":'@date("yyyy-MM-dd")', //模拟日期
            "boolean":'@boolean'       //模拟是否
		}]
});
Mock.mock('/list', 'post',{
		"object|1-50":[{
			"name" : '@cname',     //模拟名称
            "age|15-24":100,          //模拟年龄(1-100)
            "address":'@county(true)',  //模拟地区
            "date":'@date("yyyy-MM-dd")', //模拟日期
            "boolean":'@boolean'       //模拟是否
		}]
});
