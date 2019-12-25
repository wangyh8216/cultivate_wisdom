function show(msg){
	//alert("111");
	// alert("old_msg:"+old_msg);
	var old_id = old_msg;
	// alert(old_id);
	var id = msg;
		// alert(old_id+" "+" "+id);
	/* if(id==null){
		var id = "参数未传递成功";
	}
	else{
		alert("参数传递成功");
	}
	alert(id); */
	/* if(old_id != null && times = 0){	//不加会出错，不知道为什么,可能出错后无法执行下面的其他代码吧
		document.getElementById(old_id).style.display='none';
		times++;
	} */
	if(old_id != null){	//不加会出错，不知道为什么,可能出错后无法执行下面的其他代码吧
		document.getElementById(old_id).style.display='none';
	}
	document.getElementById(id).style.display='block';
	old_msg = msg;	//多次后无法执行，故增加计时器避免上述old_id出错
	// alert("old_msg:"+old_msg);
	// alert(msg);
}

/* function show_reload(msg){
	var old_id = old_msg;
	//alert("before");
	var id = msg;
	if(old_id != null){	//不加会出错，不知道为什么,可能出错后无法执行下面的其他代码吧
		document.getElementById(old_id).style.display='none';
	}
	document.getElementById(id).style.display='block';
	old_msg = msg;	//多次后无法执行，故增加计时器避免上述old_id出错
	document.getElementById('old_msg').contentWindow.location.reload(true);
	reload_begin();
	alert("reload");
}

function reload_begin(){
	document.getElementById('old_msg').contentWindow.location.reload(true);
} */

function display_none(msg_close){	//不可用close，应该是保留字
	// alert("函数调用成功");
	var id_close = msg_close;
	document.getElementById(id_close).style.display='none';
}


/* function display_iframe(){
	var iframe_id = document.getElementById(id);
	iframe_id.setAttribute("src") = id
} */




/* 上述的无注释代码：
function show(msg){
	var old_id = old_msg;
	var id = msg;
		alert(old_id+" "+" "+id);
	if(old_id != null){
		document.getElementById(old_id).style.display='none';
	}
	document.getElementById(id).style.display='block';
	old_msg = msg;
	alert("old_msg:"+old_msg);
}

function display_none(msg_close){
	var id_close = msg_close;
	document.getElementById(id_close).style.display='none';
} */