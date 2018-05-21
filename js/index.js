function test1 () {
	var tempStr = document.getElementById('test').value;
	if (tempStr === "请输入关键字进行搜索") {
		document.getElementById('test').value = "";
	}
}

function test2 () {
	var tempStr = document.getElementById('test').value;
	if (tempStr === "") {
		document.getElementById('test').value = "请输入关键字进行搜索";
	}
}

function test3 () {
	var tempStr = document.getElementById('test1').value;
	if (tempStr === "请输入要搜索的关键字") {
		document.getElementById('test1').value = "";
	}
}

function test4 () {
	var tempStr = document.getElementById('test1').value;
	if (tempStr === "") {
		document.getElementById('test1').value = "请输入要搜索的关键字";
	}
}


$(function () {
	document.oncontextmenu = function () {
		return false
	};
	//导航
	$(".navWrap ul li #nav").hide();

	$("li.mainMenu").hover(function () {
		$(this).find("#nav").stop(true, true);
		$(this).find("#nav").slideDown();
	}, function () {
		$(this).find("#nav").stop(true, true);
		$(this).find("#nav").slideUp();
	});
	$(document).ready(function () {
		$(".navWrap ul li").hover(function () {
			$(this).addClass('cur').siblings().removeClass('cur');
		});
	});

	$("#nav a:last-child").css({
		'border-bottom': 'none'
	});

	//banner
	jQuery(".slideBox1").slide({
		mainCell: ".bd ul",
		autoPlay: true
	});
	jQuery(".slideBox2").slide({
		mainCell: ".bd ul",
		autoPlay: true
	});
	jQuery(".slideBox3").slide({
		mainCell: ".bd ul",
		autoPlay: true
	});
	jQuery(".insiFocus").slide({
		mainCell: ".bd ul",
		autoPlay: true
	});
	
	//tab切换
	$(document).ready(function () {
		var $tab_li = $('.tab-menu li');
		$tab_li.hover(function () {
			$(this).addClass('selected').siblings().removeClass('selected');
			var index = $tab_li.index(this);
			$('div.tab-box > div').eq(index).show().siblings().hide();
		});
	});
});


















