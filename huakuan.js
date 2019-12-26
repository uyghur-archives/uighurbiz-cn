//作者：海浪
//美化：POPOCO
//日期：2004-4-26
var Ofx;
var move_obj = false;
var m_o_fx;
var move_obj_cod;
var move_obj_codt;

function document_onmousemove()
{
 if(!move_obj) return;
 var judger,max;
 if(m_o_fx==1)
 {
   judger = event.clientY-Math.round(move_obj.offsetHeight/2)-Ofx;
   max = move_obj.parentElement.offsetHeight-move_obj.offsetHeight;
 }
 else
 {
   judger = event.clientX-Math.round(move_obj.offsetWidth/2)-Ofx;
   max = move_obj.parentElement.offsetWidth-move_obj.offsetWidth;
 }
 if(judger<0) judger = 0;
 if(judger>max) judger = max;
 if(m_o_fx==1)
   move_obj.style.pixelTop = judger;
 else
   move_obj.style.pixelLeft = judger;
 if(move_obj_codt!=null)
   eval(move_obj_codt);

}

function document_onmouseup()
{
 document.onmouseup = null;
 document.onmousemove = null;
 move_obj.releaseCapture();
 move_obj = false;
 if(move_obj_cod!=null)
   eval(move_obj_cod);
}

function start_move(b_obj,m_fx,cod,codt)
{
 move_obj = b_obj;
 m_o_fx = m_fx;
 move_obj_cod = cod;
 move_obj_codt = codt;
 if(m_o_fx==1)
   Ofx = event.clientY-event.offsetY;
 else
   Ofx = event.clientX-event.offsetX;
 move_obj.setCapture(); 
 document.onmouseup = document_onmouseup;
 document.onmousemove = document_onmousemove;
 document_onmousemove();
}
