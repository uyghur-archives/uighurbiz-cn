//'-------------------------------------------------------------------------------------------------------------------------
//'���磺PageList(1,3,10,123,"acton=12",1)
//'ҳ�Σ�1/13ҳ��ÿҳ��10ƪ ����123ƪ [1][2][3]...[13] 
//'ҳ�Σ���ǰ��currentpagҳ��n �ָ�������ÿҳ��ʾ��¼��:MaxRows,�ܼ�¼����CountNum,vΪ��ʾ����
//'-------------------------------------------------------------------------------------------------------------------------
function PageList(CurrentPage,n,MaxRows,CountNum,PageSearch,v,getdata)
{
	var PageStr="";
	if (PageSearch!=''){
		PageSearch+="&";
	}
	CountNum=parseInt(CountNum);
	CurrentPage=parseInt(CurrentPage);
	if (CountNum%MaxRows==0){var Pagecount= parseInt(CountNum / MaxRows);}else{var Pagecount = parseInt(CountNum / MaxRows)+1}
	if (Pagecount>CurrentPage+n){var Endpage=CurrentPage+n;}else{var Endpage=Pagecount;}
	var ShowPage;
	switch (v)
	{
		case 1:
			ShowPage="<table border=\"0\" Style=\"width:98%\" align=center cellpadding=0 cellspacing=2><FORM action=\"?"+PageSearch+"\" method=POST name=\"PageForm\">";
			PageStr = SeachPage(CurrentPage,n,MaxRows,Endpage,Pagecount,PageSearch,1)
			ShowPage+="<tr><td nowrap>";
			ShowPage+="ҳ�Σ�<b><font color=red>"+CurrentPage+"<\/font><\/b>/<b>"+Pagecount+"</b>ҳ";
			ShowPage+="��ÿҳ����ʾ<b>"+MaxRows+"<\/b>�� ����<b>"+CountNum+"<\/b>����¼</td>";
			ShowPage+="<td valign=middle nowrap align=right>";
			ShowPage+=PageStr;
			ShowPage+="<\/td><td width=75 noWrap align=right><input type=text name=page size=4 value=\""+CurrentPage+"\"><input type=button onclick=\"submit(this)\" value=\">>\" title=\"��д��ת�ķ�ҳ��Ȼ�����鿴��\"><\/td><\/tr>";
			ShowPage+="<\/FORM><\/table>";
			break;
		case 2:
			ShowPage="<table border=\"0\" Style=\"width:98%\" align=center cellpadding=0 cellspacing=2><form action=\"?"+PageSearch+"\" method=POST name=\"PageForm\">";
			PageStr = SeachPage(CurrentPage,n,MaxRows,Endpage,Pagecount,PageSearch,2)
			ShowPage+="<tr><td nowrap>";
			ShowPage+="�����������Ĺ���<font color=red>"+CountNum+"<\/font>�� ���ڣ�<font color=red>"+CurrentPage+"<\/font> ҳ/�� <font color=red>"+Pagecount+"<\/font> ҳ";
			ShowPage+="</td><td valign=middle nowrap align=right>";
			ShowPage+=PageStr;
			ShowPage+="<\/td><td width=75 noWrap align=right><input type=text name=page size=4 value=\""+CurrentPage+"\"><input type=button onclick=\"submit(this)\" value=\"GO\" title=\"��д��ת�ķ�ҳ��Ȼ�����鿴��\"><\/td><\/tr>";
			ShowPage+="<\/FORM><\/table>";
			break;
		case 3:
			PageStr = SeachPage(CurrentPage,n,MaxRows,Endpage,Pagecount,PageSearch,3)
			ShowPage="<table cellpadding=0 cellspacing=1 class=tableborder5>";
			ShowPage=ShowPage+"<FORM action=\""+PageSearch+"\" method=POST name=\"PageForm\" target=\"hiddenframe\"><tr align=center>";
			ShowPage=ShowPage+"<td class=tabletitle1 title=\"����\">&nbsp;"+CountNum+"&nbsp;</td>";
			ShowPage=ShowPage+"<td class=tabletitle1 title=\"��ҳ����\">&nbsp;"+MaxRows+"&nbsp;</td>";
			ShowPage=ShowPage+"<td class=tabletitle1 title=\"��ҳ\">&nbsp;"+CurrentPage+"/"+Pagecount+"&nbsp;</td>";
			ShowPage=ShowPage+"";
			ShowPage=ShowPage+PageStr
			ShowPage=ShowPage+"<td class=tablebody1><input type=text name=star size=2 value=\""+CurrentPage+"\" Class=PageInput><input type=submit value=GO name=submit Class=PageInput></td>";
			ShowPage=ShowPage+"</tr></FORM></table>";
			break;
		case 4:
			PageStr = SeachPage(CurrentPage,n,MaxRows,Endpage,Pagecount,PageSearch,4)
			ShowPage="<table cellpadding=0 cellspacing=1 class=tableborder5>";
			ShowPage=ShowPage+"<FORM action=\"?"+PageSearch+"\" method=POST name=\"PageForm\"><tr align=center>";
			ShowPage=ShowPage+"<td class=tabletitle1 title=\"����\">&nbsp;"+CountNum+"&nbsp;</td>";
			ShowPage=ShowPage+"<td class=tabletitle1 title=\"��ҳ����\">&nbsp;"+MaxRows+"&nbsp;</td>";
			ShowPage=ShowPage+"<td class=tabletitle1 title=\"��ҳ\">&nbsp;"+CurrentPage+"/"+Pagecount+"&nbsp;</td>";
			ShowPage=ShowPage+"";
			ShowPage=ShowPage+PageStr
			ShowPage=ShowPage+"<td class=tablebody1><input type=text name=page size=2 value=\""+CurrentPage+"\" Class=PageInput><input type=submit value=GO name=submit Class=PageInput></td>";
			ShowPage=ShowPage+"</tr></FORM></table>";
			break;
	}
	if (getdata)
	{
		return ShowPage;
	}
	else{
		document.write (ShowPage);
	}
}


function SeachPage(CurrentPage,n,MaxRows,Endpage,Pagecount,PageSearch,v) {
var PageStr="";
switch (v)
{
	case 1:
		if (CurrentPage>n+1){PageStr="<a href=\"?"+PageSearch+"page=1\">[1]<\/a> ...";}
		for (var i=CurrentPage-n;i<=Endpage;i++)
		{
			if (i>=1)
			{
				if (i==CurrentPage)
				{
					PageStr+="<font color=Red>["+i+"]<\/font>";
				}else{
					PageStr+="<a href=\"?"+PageSearch+"page="+i+"\">["+i+"]<\/a>";
				}
			}
		}
		if (Pagecount>CurrentPage+n){PageStr+="...<a href=\"?"+PageSearch+"page="+Pagecount+"\" class=path>["+Pagecount+"]<\/a>";}
	break;
	case 2:
		var p;
		if ((CurrentPage-1)%n==0) 
		{
			p=(CurrentPage-1) /n
		}
		else
		{
			p=(((CurrentPage-1)-(CurrentPage-1)%n)/n)
		}
		if (CurrentPage!=1)
		{
			PageStr += "<a href=\"?"+PageSearch+"page=1\" title=\"��ҳ\"><img src=\"images/pagelist/First.gif\" border=\"0\" alt=\"��һҳ\"><\/a>";
		}

		if (p*n > 0)
		{
			PageStr += "<a href=\"?"+PageSearch+"page="+p*n+"\" title=\"��ʮҳ\"><img src=\"images/pagelist/Previous.gif\" border=\"0\"><\/a>";
		}
		//PageStr += "<b>";
		for (var i=p*n+1;i<p*n+n+1;i++)
		{
			if (i==CurrentPage)
			{
				PageStr += " <font color=\"red\">["+i+"]<\/font> ";
			}
			else
			{
				PageStr += " <a href=\"?"+PageSearch+"page="+i+"\">"+i+"<\/a> ";
			}
			if (i==Pagecount) break;
		}
		//PageStr += "</b>";
		if (i<Pagecount)
		{
			PageStr += "<a href=\"?"+PageSearch+"page="+i+"\" title=\"��ʮҳ\"><img src=\"images/pagelist/Next.gif\" border=\"0\"><\/a>";
		}
		if (CurrentPage!=Pagecount)
		{
			PageStr += "<a href=\"?"+PageSearch+"page="+Pagecount+"\" title=\"βҳ\"><img src=\"images/pagelist/Last.gif\" border=\"0\"><\/a>";
		}
	break;
	case 3:
		var p;
		if ((CurrentPage-1)%n==0) 
		{
			p=(CurrentPage-1) /n
		}
		else
		{
			p=(((CurrentPage-1)-(CurrentPage-1)%n)/n)
		}
		if (CurrentPage!=1)
		{			
			PageStr+="<td class=tablebody1>&nbsp;<a href=\""+PageSearch+"star=1\" title=\"��һҳ\" target=\"hiddenframe\"><img src=\"images/pagelist/First.gif\" border=\"0\" alt=\"��һҳ\"><\/a>&nbsp;<\/td>";
		}
		//else{
			//PageStr+="<td class=tablebody1><font style=\"font-family:webdings\">9<\/font><\/td>";
		//}
		if (p*n > 0)
		{
			PageStr +="<td class=tablebody1>&nbsp;<a href=\""+PageSearch+"star="+p*n+"\" title=\"��ʮҳ\" target=\"hiddenframe\"><img src=\"images/pagelist/Previous.gif\" border=\"0\"><\/a>&nbsp;<\/td>";
		}
		for (var i=p*n+1;i<p*n+n+1;i++)
		{
			if (i==CurrentPage)
			{
				PageStr+="<td class=tablebody2>&nbsp;<B><font color=\"red\">"+i+"<\/font><\/B><\/td>";
			}
			else
			{
				PageStr+="<td class=tablebody1>&nbsp;<a href=\""+PageSearch+"star="+i+"\" target=\"hiddenframe\">"+i+"<\/a>&nbsp;<\/td>";
			}
			if (i==Pagecount) break;
		}
		if (i<Pagecount)
		{
			PageStr+="<td class=tablebody1>&nbsp;<a href=\""+PageSearch+"star="+i+"\" title=\"��ʮҳ\" target=\"hiddenframe\"><img src=\"images/pagelist/Next.gif\" border=\"0\"><\/a>&nbsp;<\/td>";
		}
		if (CurrentPage<Pagecount)
		{
			PageStr+="<td class=tablebody1>&nbsp;<a href=\""+PageSearch+"star="+Pagecount+"\" title=\"βҳ\" target=\"hiddenframe\"><img src=\"images/pagelist/Last.gif\" border=\"0\"><\/a>&nbsp;";
			PageStr+="<\/td>";
		}
	break;

	case 4:
		var p;
		if ((CurrentPage-1)%n==0) 
		{
			p=(CurrentPage-1) /n
		}
		else
		{
			p=(((CurrentPage-1)-(CurrentPage-1)%n)/n)
		}
		if (CurrentPage!=1)
		{			
			PageStr+="<td class=tablebody1>&nbsp;<a href=\"?"+PageSearch+"page=1\" title=\"��һҳ\"><img src=\"images/pagelist/First.gif\" border=\"0\" alt=\"��һҳ\"><\/a>&nbsp;<\/td>";
		}
		if (p*n > 0)
		{
			PageStr +="<td class=tablebody1>&nbsp;<a href=\"?"+PageSearch+"page="+p*n+"\" title=\"��ʮҳ\"><img src=\"images/pagelist/Previous.gif\" border=\"0\"><\/a>&nbsp;<\/td>";
		}
		for (var i=p*n+1;i<p*n+n+1;i++)
		{
			if (i==CurrentPage)
			{
				PageStr+="<td class=tablebody2>&nbsp;<B><font color=\"red\">"+i+"<\/font><\/B><\/td>";
			}
			else
			{
				PageStr+="<td class=tablebody1>&nbsp;<a href=\"?"+PageSearch+"page="+i+"\">"+i+"<\/a>&nbsp;<\/td>";
			}
			if (i==Pagecount) break;
		}
		if (i<Pagecount)
		{
			PageStr+="<td class=tablebody1>&nbsp;<a href=\"?"+PageSearch+"page="+i+"\" title=\"��ʮҳ\"><img src=\"images/pagelist/Next.gif\" border=\"0\"><\/a>&nbsp;<\/td>";
		}
		if (CurrentPage<Pagecount)
		{
			PageStr+="<td class=tablebody1>&nbsp;<a href=\"?"+PageSearch+"page="+Pagecount+"\" title=\"βҳ\"><img src=\"images/pagelist/Last.gif\" border=\"0\"><\/a>&nbsp;";
			PageStr+="<\/td>";
		}
	break;
}
	return PageStr;
}
