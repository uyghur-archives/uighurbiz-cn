var poi = opener;		

function plai(ur)
{
 var na = event.srcElement.innerText;
 poi.dkpl(ur,na);
}

function hplai(xur,xna)
{
 var xur,xna;
 poi.dkpl(xur,xna);
}

//===========================================


function cover(set,id)
{
var set,id;
if (set==1)
id.className='aup';
else
id.className='adown';
}

function durl(dc)
{
 var kl = dc.indexOf("plai('");
 var kr = dc.indexOf("')");
 return dc.slice(kl+6,kr);
}

function bfsx()
{
 var ttu = new Array();
 var ttn = new Array();
 var plop = mimnt.getElementsByTagName("INPUT");
 var ploa = mimnt.getElementsByTagName("SPAN");
 for(var ii=0; ii<ploa.length; ii++)
   if(plop[ii].checked)
   {
     var ol = ttu.length;
     var kou = ploa[ii].onclick+"";
     ttu[ol] = durl(kou);
     ttn[ol] = ploa[ii].innerText;
   }
 if(ttu.length>0)
   poi.dkpls(ttu,ttn);
}

function bfsxadd()
{
 if(poi.lopj==0)
 {
	alert("你还没有建立播放列表，无法追加！\n请先用“播放所选”建立播放列表。");
	return ;
 }
 var ttu = new Array();
 var ttn = new Array();
 var plop = mimnt.getElementsByTagName("INPUT");
 var ploa = mimnt.getElementsByTagName("SPAN");
 for(var ii=0; ii<ploa.length; ii++)
   if(plop[ii].checked)
   {
     var ol = ttu.length;
     var kou = ploa[ii].onclick+"";
     ttu[ol] = durl(kou);
     ttn[ol] = ploa[ii].innerText;
   }
 if(ttu.length>0)
   poi.dkplsadd(ttu,ttn);
}


function qbbf()
{
 var ttu = new Array();
 var ttn = new Array();
 var ploa = mimnt.getElementsByTagName("SPAN");
 for(var ii=0; ii<ploa.length; ii++)
 {
   var ol = ttu.length;
   var kou = ploa[ii].onclick+"";
   ttu[ol] = durl(kou);
   ttn[ol] = ploa[ii].innerText;
 }
 if(ttu.length>0)
   poi.dkpls(ttu,ttn);
}

function fxxz()
{
 var plop = mimnt.getElementsByTagName("INPUT");
 for(var ii=0; ii<plop.length; ii++)
   plop[ii].checked = !plop[ii].checked;
}

function qbqc()
{
 var plop = mimnt.getElementsByTagName("INPUT");
 for(var ii=0; ii<plop.length; ii++)
   plop[ii].checked = false;
}
