window.jqBus||(window.jqBus={url:"/bus.php",result:{unknown:0,success:1,failure:2,timeout:3},errors:[]}); (function(){jqBus.makeRequest=function(b){var d=b==null?"invalid object":b.service==null||b.service==""?"invalid service":b.method==null||b.method==""?"invalid method":b.callback==null||typeof b.callback!="function"?"invalid callback":true;if(d!==true){jqBus.errors.push(d);return false}jQuery.ajax({url:jqBus.url,cache:false,data:{json:JSON.stringify(b)},dataType:"json",type:"POST",success:function(a){b.callback(a);return true},error:function(a,d,c){a={result:jqBus.result.unknown,data:""};if(d==null){a.result= jqBus.result.failure;a.message="unknown failure"}else{switch(d){case "timeout":a.result=jqBus.result.timeout;a.data="timout";break;case "notmodified":a.result=jqBus.result.failure;a.data=c!=null?c:"not modified";break;case "parsererror":a.result=jqBus.result.failure;a.data=c!=null?c:"parse error";break;case "error":a.result=jqBus.result.failure;a.data=c!=null?c:"unknown failure";break;default:a.result=jqBus.result.failure;a.data=c!=null?c:"unknown failure"}jqBus.errors.push(a.message);b.callback(a); return false}}})}})();