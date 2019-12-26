//浮动广告
var brOK=false;
var mie=false;
var vmin=2;
var vmax=5;
var vr=3;
var timer1;
var jobads;

function movechip(chipname)
{
	if(brOK)
	{
		eval("chip="+chipname);
		if(!mie)
		{
			pageX=window.pageXOffset;
			pageW=window.innerWidth;
			pageY=window.pageYOffset;
			pageH=window.innerHeight;
		} 
		else
		{
			pageX=window.document.body.scrollLeft;
			pageW=window.document.body.offsetWidth-8;
			pageY=window.document.body.scrollTop;
			pageH=window.document.body.offsetHeight;
		}
		chip.xx=chip.xx+chip.vx;
		chip.yy=chip.yy+chip.vy;
		chip.vx+=vr*(Math.random()-0.5);
		chip.vy+=vr*(Math.random()-0.5);
		if(chip.vx>(vmax+vmin))  chip.vx=(vmax+vmin)*2-chip.vx;
		if(chip.vx<(-vmax-vmin)) chip.vx=(-vmax-vmin)*2-chip.vx;
		if(chip.vy>(vmax+vmin))  chip.vy=(vmax+vmin)*2-chip.vy;
		if(chip.vy<(-vmax-vmin)) chip.vy=(-vmax-vmin)*2-chip.vy;
		if(chip.xx<=pageX)
		{
			chip.xx=pageX;
			chip.vx=vmin+vmax*Math.random();
		}
		if(chip.xx>=pageX+pageW-chip.w)
		{
			chip.xx=pageX+pageW-chip.w;
			chip.vx=-vmin-vmax*Math.random();
		}
		if(chip.xx>=680)
		{
			chip.xx=chip.xx-20;
			chip.vx=-vmin-vmax*Math.random();
		}
		if(chip.yy<=pageY)
		{
			chip.yy=pageY;
			chip.vy=vmin+vmax*Math.random();
		}
		if(chip.yy>=pageY+pageH-chip.h)
		{
			chip.yy=pageY+pageH-chip.h;
			chip.vy=-vmin-vmax*Math.random();
		}
		if(!mie)
		{
			eval('document.'+chip.named+'.top ='+chip.yy);
			eval('document.'+chip.named+'.left='+chip.xx);
		}
		else
		{
			eval('document.all.'+chip.named+'.style.pixelLeft='+chip.xx);
			eval('document.all.'+chip.named+'.style.pixelTop ='+chip.yy);
		}
		chip.timer1=setTimeout("movechip('"+chip.named+"')",80);
	}
}

function stopme(chipname)
{
	if(brOK)
	{
		eval("chip="+chipname);
		if(chip.timer1!=null)
		{
			clearTimeout(chip.timer1)
		}
	}
}

function jobads()
{
	if(navigator.appName.indexOf("Internet Explorer")!=-1)
	{
		if(parseInt(navigator.appVersion.substring(0,1))>=4) brOK=navigator.javaEnabled();mie=true;
	}
	if(navigator.appName.indexOf("Netscape")!=-1)
	{
		if(parseInt(navigator.appVersion.substring(0,1))>=4) brOK=navigator.javaEnabled();
	}
	jobads.named="jobads";
	jobads.vx=vmin+vmax*Math.random();
	jobads.vy=vmin+vmax*Math.random();
	jobads.w=1;
	jobads.h=1;
	jobads.xx=0;
	jobads.yy=0;
	jobads.timer1=null;
	movechip("jobads");
}


function move_ad(Forum_ads_3,Forum_ads_4,Forum_ads_5,Forum_ads_6)
{
	document.write('<div id="jobads" style="height:49px;left:178px;position:absolute;top:1237px;width:70px; z-index:1000">');
	document.write('<a href="' + Forum_ads_4 + '" target="_blank" onmouseover=stopme("jobads"); onmouseout=movechip("jobads");>');
	document.write('<img src="' + Forum_ads_3 + '" border="0" width="' + Forum_ads_5 + '" height="' + Forum_ads_6 + '"></a></div>');
	jobads();
}

//右边固定广告
function StayCorner(){
var sgTop;var sgLeft
var ns6=document.getElementById&&!document.all
if(ns6){
	sgTop  = pageYOffset+window.innerHeight-document.getElementById("Corner").style.height-10;sgLeft = pageXOffset+window.innerWidth-document.getElementById("Corner").style.width-10;document.getElementById("Corner").top  = sgTop;document.getElementById("Corner").left = sgLeft;}
else{
	sgTop  = document.body.scrollTop+document.body.clientHeight-document.all.Corner.offsetHeight-30;sgLeft = document.body.scrollLeft+document.body.clientWidth-document.all.Corner.offsetWidth-5;Corner.style.top  = sgTop;Corner.style.left = sgLeft;
}
setTimeout('StayCorner()', 50)
}

function fix_up_ad(sgImg,sgWidth,sgHeight,sgLink){
var ns6=document.getElementById&&!document.all
if(ns6){document.write('<LAYER ID="Corner" WIDTH='+sgWidth+' HEIGHT='+sgHeight+'><A href="'+sgLink+'" target=_blank><IMG src="'+sgImg+'" BORDER=0 WIDTH="'+sgWidth+'" HEIGHT="'+sgHeight+'"></A></LAYER>');}else{document.write('<DIV ID="Corner" STYLE="position:absolute; width:'+sgWidth+'; height:'+sgHeight+'; z-index:9; filter: Alpha(Opacity=70)"><A href="'+sgLink+'" target=_blank><IMG src="'+sgImg+'" BORDER=0 WIDTH="'+sgWidth+'" HEIGHT="'+sgHeight+'"></A></DIV>');}
sgDump = StayCorner()
}