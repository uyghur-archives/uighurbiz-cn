Rstate = new Array("已停止","正在连接","缓冲中","正在播放","暂停","寻找中");

function openplay(urlo)	
{
 var oobj='<embed type="audio/x-pn-realaudio-plugin" id="fww" STYLE="display: none" width="0" height="0" src="'+urlo+'" autostart=1>';
 bfqkk.innerHTML=oobj;
 runend();
}

function runend()		
{
 var tn = -99;
 try {
  tn = fww.GetPlayState();
 } catch(c){
 }
  if(tn==-99)
    setTimeout("runend()",20);
  else
    kkss();
}


function zlplay()	
{
 if(!zlzht())
  fww.DoPlay();
}

function zlpause()	
{
  fww.DoPause();
}

function zlstop()	
{
 fww.SetPosition(0);
 fww.DoPause();
}

function zlgoto(zzg)	
{
 fww.SetPosition(zzg*1000);
}

function zlvol(ov)		
{
 fww.SetVolume(ov);
}



function zlzht()	
{
  return (fww.GetPlayState()!=0 && fww.GetPlayState()!=4);
}

function zlzhtm()	
{
 return fww.GetPlayState();
}

function zlcurrent()	
{
  return fww.GetPosition()/1000;
}

function zltotal()	
{
  return fww.GetLength()/1000;
}

function zlsj(zsj)	
{
  var min, sec, str;
  min = Math.floor(zsj/60);
  sec = Math.floor(zsj%60);
  if (isNaN(min))
    return "00:00";
  if (min>9)
    str = min.toString()+":";
  else
    str = "0"+min.toString()+":";
  if (sec>9)
    str += sec.toString()
  else
    str += "0"+sec.toString()
  return str;
}


openplay(fileurl);