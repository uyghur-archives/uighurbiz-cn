Rstate = new Array("加载中","已停止","暂停","正在播放","处理中","处理中","处理中");

function openplay(urlo)	
{
 var oobj=''
+'<OBJECT CLASSID="clsid:05589FA1-C356-11CE-BF01-00AA0055595A" ID="fww" STYLE="display: none" WIDTH="1" HEIGHT="1">'
+'<PARAM NAME="AutoStart" VALUE="-1">'
+'<PARAM NAME="AutoSize" VALUE="0">'
+'<PARAM NAME="AnimationAtStart" VALUE="0">'
+'<PARAM NAME="AllowScan" VALUE="-1">'
+'<PARAM NAME="AllowChangeControlType" VALUE="0">'
+'<PARAM NAME="AllowChangeDisplaySize" VALUE="-1">'
+'<PARAM NAME="AutoRewind" VALUE="0">'
+'<PARAM NAME="BufferingTime" VALUE="5">'
+'<PARAM NAME="ClickToPlay" VALUE="0">'
+'<PARAM NAME="ControlType" VALUE="0">'
+'<PARAM NAME="CursorType" VALUE="0">'
+'<PARAM NAME="CurrentPosition" VALUE="-1">'
+'<PARAM NAME="CurrentMarker" VALUE="0">'
+'<PARAM NAME="DefaultFrame" VALUE>'
+'<PARAM NAME="DisplaySize" VALUE="-1">'
+'<PARAM NAME="EnableContextMenu" VALUE="0">'
+'<PARAM NAME="EnablePositionControls" VALUE="0">'
+'<PARAM NAME="EnableFullScreenControls" VALUE="0">'
+'<PARAM NAME="EnableTracker" VALUE="0">'
+'<PARAM NAME="Filename" VALUE>'
+'<PARAM NAME="InvokeURLs" VALUE="-1">'
+'<PARAM NAME="PlayCount" VALUE="1">'
+'<PARAM NAME="Rate" VALUE="1">'
+'<PARAM NAME="SendOpenStateChangeEvents" VALUE="-1">'
+'<PARAM NAME="SendWarningEvents" VALUE="-1">'
+'<PARAM NAME="SendErrorEvents" VALUE="-1">'
+'<PARAM NAME="SendKeyboardEvents" VALUE="0">'
+'<PARAM NAME="SendMouseClickEvents" VALUE="0">'
+'<PARAM NAME="SendMouseMoveEvents" VALUE="0">'
+'<PARAM NAME="SendStateChangeEvents" VALUE="-1">'
+'<PARAM NAME="SendPlayStateChangeEvents" VALUE="-1">'
+'<PARAM NAME="TransparentAtStart" VALUE="-1">'
+'<PARAM NAME="ShowControls" VALUE="0">'
+'<PARAM NAME="ShowAudioControls" VALUE="0">'
+'<PARAM NAME="ShowStatusBar" VALUE="0">'
+'<PARAM NAME="ShowCaptioning" VALUE="0">'
+'<PARAM NAME="ShowDisplay" VALUE="0">'
+'<PARAM NAME="ShowGotoBar" VALUE="0">'
+'<PARAM NAME="ShowPositionControls" VALUE="0">'
+'<PARAM NAME="ShowTracker" VALUE="0">'
+'</OBJECT>';
 bfqkk.innerHTML=oobj;
 fww.Filename = urlo;
 try {
   realyl.SetVolume(100);
 } catch(hh){}
 runend();
}

function runend()		
{
 var tn = -99;
 try {
  tn = fww.CurrentState;
 } catch(c){
 }
  if(tn==-99)
    setTimeout("runend()",20);
  else
    kkss();
}

function zlplay()	
{
  fww.Run();
}

function zlpause()	
{
  fww.Pause();
}

function zlstop()	
{
  fww.Stop();
  fww.CurrentPosition = 0;
}

function zlgoto(zzg)	
{
  fww.CurrentPosition = zzg;
}

function zlvol(ov)		
{
 fww.volume = ov*32-3200;
}

function zlzht()	
{
  return (fww.CurrentState==2);
}

function zlzhtm()	
{
 return fww.CurrentState+1;
}

function zlcurrent()	
{
  return fww.CurrentPosition;
}

function zltotal()	
{
  return fww.Duration;
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