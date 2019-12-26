var fst = 14;
try {
	if (typeof window.screen.width != 'undefined') {
		if (window.screen.width > 1024 && window.screen.width <= 1600) {
        	fst = 15
    	} else if (window.screen.width > 1600) {
        	fst = 16;
		}
	}
} catch(e) {}
var pageOptions = {
    'pubId': req.afd.client,
    'channel': req.afd.channel,
    'adtest': req.adtest,
    'kw': req.afd.kw,
    'hl': req.hl,
    'terms': req.rks.join(','),
    'optimizeTerms': true,
    'maxTermLength': 50,
    'domainRegistrant': req.afd.drid,
    'colorAttribution': 'black',
    'fontFamilyAttribution': 'arial',
    'fontSizeAttribution': 20,
    'attributionBold': 'true',
    'uiOptimize' : false
};
var adBlock = {
    'container': 'ads',
    'type': 'ads',
    'number': req.ac,
    'linkTarget': '_blank',
    'colorAdSeparator' : '111',
    'colorAttribution': '666',
    'fontFamilyAttribution': 'arial',
    'fontSizeAttribution': 12,
    'attributionBold': 'false',
    'attributionText': 'Sponsored Listings',
    'lines': 3,
    'width': '705px',
    'noTitleUnderline': 'false',
    'verticalSpacing': '12',
    'fontFamily': 'Verdana',
    'fontSizeTitle': 24,
    'titleBold': false,
    'fontSizeDescription': 12,
    'fontSizeDomainLink': 11,
    'lineHeightTitle': 40,
    'lineHeightDescription': 40,
    'lineHeightDomainLink': 30,
    'colorTitleLink': 'fff',
    'colorText': '333',
    'colorDomainLink': '0098C8',
    'colorBackground': 'transparent',
    'adBorderSelections': 'left',
    'rolloverLinkColor' : 'cc0000',
    'rolloverLinkUnderline' : true
};

var adBlock2 = {
    'container': 'ads2',
    'type': 'ads',
    'number': req.ac,
    'linkTarget': '_blank',
    'colorAdSeparator' : '111',
    'colorAttribution': '666',
    'fontFamilyAttribution': 'arial',
    'fontSizeAttribution': 12,
    'attributionBold': 'false',
    'attributionText': 'Sponsored Listings',
    'lines': 3,
    'width': '900px',
    'noTitleUnderline': 'false',
    'verticalSpacing': '12',
    'fontFamily': 'Verdana',
    'fontSizeTitle': 24,
    'titleBold': false,
    'fontSizeDescription': 12,
    'fontSizeDomainLink': 11,
    'lineHeightTitle': 40,
    'lineHeightDescription': 40,
    'lineHeightDomainLink': 30,
    'colorTitleLink': 'fff',
    'colorText': '333',
    'colorDomainLink': '0098C8',
    'colorBackground': 'transparent',
    'adBorderSelections': 'left',
    'rolloverLinkColor' : 'cc0000',
    'rolloverLinkUnderline' : true
};

var imageBlock = {
    'container': 'img',
    'size': '728x90',
    'type': 'imagead',
    'linkTarget': '_blank',
    'colorBackground': ''
};
var imageBlock2 = {
    'container': 'img_2',
    'size': '336x280',
    'type': 'imagead',
    'linkTarget': '_blank',
    'colorBackground': ''
};
var rsblockmid = {
    'container': 'rkm',
    'type': 'relatedsearch',
    'number': 20,
    'colorAttribution': '666',
    'fontFamilyAttribution': 'arial',
    'fontSizeAttribution': 12,
    'attributionBold': 'false',
    'attributionText': 'Sponsored Listings',
    'width': '250px',
    'verticalSpacing': '2',
    'columns': 1,
    'columnSpacing': 2,
    'horizontalFlow': false,
    'fontFamily': 'Verdana',
    'fontSizeTitle': fst,
    'lineHeightTitle': 30,
    'colorTitleLink': '0098C8',
    'noTitleUnderline': 'false',
    'titleBold': 'true',
    'colorBackground': 'transparent',
    'adBorderSelections': 'left',
    'colorAdSeparator': '000',
    'rolloverLinkColor': 'f00',
    'rolloverLinkUnderline': 'true'
};


var rsblocktop = {
    'container': 'rkt',
    'type': 'relatedsearch',
    'number': 8,
    'colorAttribution': '6771a4',
    'fontFamilyAttribution': 'arial',
    'fontSizeAttribution': 12,
    'attributionBold': 'false',
    'attributionText': 'Sponsored Listings',
    'width': '960px',
    'verticalSpacing': '2',
    'columns': 8,
    'columnSpacing': 2,
    'horizontalFlow': 'true',
    'fontFamily': 'Verdana',
    'fontSizeTitle': 14,
    'lineHeightTitle': 22,
    'colorTitleLink': 'ccc',
    'noTitleUnderline': 'false',
    'titleBold': 'false',
    'colorBackground': 'transparent',
    'rolloverLinkColor': 'fff',
    'rolloverLinkUnderline': 'true'
};

var rsblockbot = {
    'container': 'rkb',
    'type': 'relatedsearch',
    'number': 25,
    'colorAttribution': '666',
    'fontFamilyAttribution': 'arial',
    'fontSizeAttribution': 12,
    'attributionBold': 'false',
    'attributionText': 'Sponsored Listings',
    'width': '1008px',
    'verticalSpacing': '2',
    'columns': 5,
    'columnSpacing': 2,
    'horizontalFlow': false,
    'fontFamily': 'Verdana',
    'fontSizeTitle': fst,
    'lineHeightTitle': 25,
    'colorTitleLink': '0098C8',
    'noTitleUnderline': 'false',
    'titleBold': 'true',
    'colorBackground': 'transparent',
    'adBorderSelections': 'left',
    'colorAdSeparator': '000',
    'rolloverLinkColor': 'f00',
    'rolloverLinkUnderline': 'true'
};

var rsblockbot2 = {
    'container': 'rkb2',
    'type': 'relatedsearch',
    'number': 16,
    'colorAttribution': '666',
    'fontFamilyAttribution': 'arial',
    'fontSizeAttribution': 12,
    'attributionBold': 'false',
    'attributionText': 'Sponsored Listings',
    'width': '948px',
    'verticalSpacing': '2',
    'columns': 4,
    'columnSpacing': 2,
    'horizontalFlow': false,
    'fontFamily': 'Verdana',
    'fontSizeTitle': fst,
    'lineHeightTitle': 25,
    'colorTitleLink': '0098C8',
    'noTitleUnderline': 'false',
    'titleBold': 'true',
    'colorBackground': 'transparent',
    'adBorderSelections': 'left',
    'colorAdSeparator': '000',
    'rolloverLinkColor': 'f00',
    'rolloverLinkUnderline': 'true'
};

var rsblockcat = {
    'container': 'rkc',
    'type': 'relatedsearch',
    'number': 39,
    'colorAttribution': 'b5b5b5',
    'fontFamilyAttribution': 'arial',
    'fontSizeAttribution': 12,
    'attributionBold': 'false',
    'attributionText': 'Sponsored Listings',
    'width': '700px',
    'verticalSpacing': '2',
    'columns':3,
    'columnSpacing': 2,
    'horizontalFlow': false,
    'fontFamily': 'Verdana',
    'fontSizeTitle': 16,
    'lineHeightTitle': 36,
    'colorTitleLink': '45ABD5',
    'noTitleUnderline': 'false',
    'titleBold': 'true',
    'colorBackground': 'transparent',
    'adBorderSelections': 'left',
    'rolloverLinkColor': '',
    'rolloverLinkUnderline': 'true',
	'adIconPageUrl':gl.cdn+'i/59/ico4.gif',
	'adIconPageWidth':13,
	'adIconPageHeight':13,
	'adIconPageSpacingAbove':12,
	'adIconPageSpacingBefore':6,
	'adIconPageSpacingAfter':3
};
var searchboxBlock = {
    'container': 'searchbox',
    'type' : 'searchbox',
    'widthSearchInput' : 396,
    'widthSearchButton' : 50,
    'fontSizeSearchButton' : 16,
    'hideSearchInputBorder' : 'true',
    'hideSearchButtonBorder' : 'true',
    'colorSearchButton' : 'transparent',
    'colorSearchButtonText' : 'transparent'
};
var reqSnapped = false;
var adSnapped = false;
var pageSnapped = false;
var googleLoadedCallback = false;
var secondtier_request;
var js;
var second_js;
var err = {
    'errorcode': 0,
    'errormsg': ''
};
function setErrorTracking(e) {
    try {
        var result = getTracking();
        result += '&method=error';
        if (req && req.partner) {
            result += '&p=' + req.partner
        }
        result += '&errorcode=' + err.errorcode;
        result += '&errormsg=' + encodeUrl(err.errormsg);
        writeLog(result)
    } catch(e) {}
}
function writeLog(a) {
    try {
        if (resp.px && resp.px > 0) {
            a += '&px=' + resp.px
        }
        if (resp.py && resp.py > 0) {
            a += '&py=' + resp.py
        }
        if (typeof resp.mm != 'undefined') {
            a += '&mm=' + resp.mm
        }
    } catch(e) {}
    try {
        var n = "img_" + unique();
        var b = window[n] = new Image();
        b.onload = (b.onerror = function() {
            window[n] = null
        });
        b.src = a;
        b = null;
        return true
    } catch(e) {
        err.errorcode = 6007;
        err.errormsg = 'writelog error';
        setErrorTracking(e);
        return false
    }
}
function denyFrame() {
    if (!req.framerequest) {
        try {
            if (window.top.location.host != window.self.location.host) {
                window.top.location.href = document.location.href
            }
        } catch(e) {
            err.errorcode = 6001;
            err.errormsg = 'denyFrame error';
            setErrorTracking(e)
        }
    }
}
var unique = (function() {
    var time = (new Date()).getTime() + '_',
    i = 0;
    return function() {
        return time + (i++)
    }
})();
function encodeUrl(a) {
    var result = "";
    try {
        result = encodeURIComponent(a)
    } catch(e) {
        result = escape(a)
    }
    return result
}
function decodeUrl(a) {
    var result = "";
    try {
        result = decodeURIComponent(a)
    } catch(e) {
        result = unescape(a)
    }
    return result
}
function getParam(name) {
    try {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        if (reg.test(location.search)) {
            return decodeUrl((RegExp.$2.replace(/\+/g, ' ')))
        } else {
            return null
        }
    } catch(e) {
        err.errorcode = 6011;
        err.errormsg = 'getparm error';
        setErrorTracking(e);
        return null
    }
}
function setjs(a) {
    try {
        var b = document.getElementsByTagName("head")[0];
        js && b.removeChild(js);
        js = document.createElement("script");
        js.src = a;
        js.type = "text/javascript";
        js.async = "true";
        var b = document.getElementsByTagName("head")[0];
        b && b.appendChild(js)
    } catch(e) {
        err.errorcode = '6002';
        err.errormsg = 'setjs error';
        setErrorTracking(e)
    }
}
try {
    pageOptions.resultsPageBaseUrl = getSearchURLForCaf();
    pageOptions.pageLoadedCallback = pageLoadedCallback;
    adBlock.adLoadedCallback = adLoadedCallback;
    adBlock.clicktrackUrl = setClickTracking();
	adBlock2.adLoadedCallback = adLoadedCallback;
    adBlock2.clicktrackUrl = setClickTracking();
    rsblockmid.clicktrackUrl = setClickTracking();
	rsblockbot2.clicktrackUrl = setClickTracking();
    rsblocktop.clicktrackUrl = setClickTracking();
    rsblockbot.clicktrackUrl = setClickTracking();
    rsblockcat.clicktrackUrl = setClickTracking()
} catch(e) {}
try {
    if (req.framerequest == true) {
        if (req.fdm) {
            pageOptions.domainName = req.fdm
        } else if (req.dm) {
            pageOptions.domainName = req.dm
        }
    }
    if (req.afd.sessiontoken && req.afd.sessiontoken != '') {
        pageOptions.domainSessionToken = req.afd.sessiontoken
    }
} catch(e) {}
function adChangedCallback(response) {
    if (typeof response.ad != 'undefined' && resp.adschangehistory.indexOf(response.ad) == -1) {
        req.ps.push(response.ad);
        if (typeof response.apk != 'undefined') {
            req.apk = response.apk
        }
        setreq()
    }
}
function setreq() {
    try {
        reqSnapped = false;
        adSnapped = false;
        if (resp.isfaillisted == true) {
            resp.faillistedlists.push(req.partner)
        }
        if (resp.isadult == true) {
            resp.adultlists.push(req.partner)
        }
        if (resp.needsreview == true) {
            resp.needsreviewlists.push(req.partner)
        }
        var p = req.ps.shift();
        resp.adschangehistory += p + ',';
        if (!p) {
            var result = getTracking();
            result += '&method=changeads';
            setjs(result);
            return
        }
        if (p != req.partner) {
            resp.isfaillisted = false;
            resp.faillistedreason = '';
            resp.isadult = false;
            resp.needsreview = false
        }
        req.partner = p;
        switch (req.partner) {
        case 'afd':
            if (resp.isfaillisted) {
                setreq();
                return
            } else if (resp.isadult || resp.needsreview) {
                if (!req.adultallowed) {
                    setreq();
                    return
                }
            }
            if (req.adultallowed && (resp.isadult || resp.needsreview)) {
                pageOptions.pubId = req.afd.adultclient
            } else {
                pageOptions.pubId = req.afd.client
            }
			if(req.lp == true){
				new google.ads.domains.Caf(pageOptions, adBlock,rsblockbot,rsblockmid,searchboxBlock);
			}else{
				document.getElementById('div2').style.display = '';
				document.getElementById('divy').style.display = 'none';
				document.getElementById('div_line').style.display = 'none';
				new google.ads.domains.Caf(pageOptions, adBlock2,rsblockbot2,searchboxBlock);	
			}
            
            break;
        case 'sg':
            secondtier_request = {
                dm: req.dm,
                sk: req.sg.kw,
                partner: req.partner,
                sac: req.sg.sac,
                format: 'json',
                oc: req.sg.oc
            };
            req.oc = req.sg.oc;
            setjs("http://a1.dnbizcdn.com/js/secondtier_caf.js");
            break;
        default:
            secondtier_request = {
                dm: req.dm,
                sk: req.sg.kw,
                partner: req.partner,
                sac: req.sg.sac,
                format: 'json',
                oc: req.sg.oc
            };
            req.oc = req.sg.oc;
            setjs("http://a1.dnbizcdn.com/js/secondtier_caf.js");
            break
        }
    } catch(e) {
        err.errorcode = 6003;
        err.errormsg = 'setreq error';
        setErrorTracking(e)
    }
}
function secondtier_request_done(secondtier_response) {
    try {
        adSnapped = true;
        if (secondtier_response.faillisted && secondtier_response.faillisted == true) {
            resp.isfaillisted = true
        }
        setresponse(secondtier_response)
    } catch(e) {
        err.errorcode = 6004;
        err.errormsg = 'secondtier_request_done error';
        setErrorTracking(e)
    }
}
function setresponse(response) {
    if (reqSnapped) {
        return
    }
    reqSnapped = true;
    if (response.q && response.q.length > 0) {
        resp.q = decodeUrl(response.q.replace('+', '%20'))
    }
    if (!req.oc && req.lp) {
        response.ads = null
    }
    if (response.ads && response.ads.length > 0) {
        resp.ac = response.ads.length
    }
    if (response.link_units && response.link_units.length > 0) {
        resp.kc = response.link_units.length
    }
    if (response.ads && response.ads.length > 0) {
        for (var i = 0; i < resp.ac; i++) {
            var rnd = unique();
            var ad = response.ads[i];
            var line3 = '';
            if (ad.line3 && ad.line3.length > 0) {
                line3 = ad.line3
            }
            resp.ads[i] = {
                id: rnd,
                pos: i,
                line1: ad.line1,
                line2: ad.line2,
                line3: line3,
                url: ad.url,
                visible_url: ad.visible_url,
                clicktrackingurl: ''
            };
            resp.ads[i].clicktrackingurl = setClickTracking(resp.ads[i])
        }
    }
    if (response.link_units && response.link_units.length > 0) {
        for (var i = 0; i < resp.kc; i++) {
            var rnd = unique();
            var rk = response.link_units[i];
            var kurl = getSearchURL(rnd, rk.term, rk.token);
            resp.rks[i] = {
                id: rnd,
                term: rk.term,
                searchurl: kurl
            }
        }
    }
    if (resp.rks.length < req.kc) {
        for (var i = resp.rks.length,
        j = 0; i < req.kc && j < req.rks.length; i++, j++) {
            var rnd = unique();
            var rk = req.rks[j];
            var kurl = getSearchURL(rnd, rk, resp.token);
            resp.rks[i] = {
                id: rnd,
                term: rk,
                searchurl: kurl
            }
        }
        for (var i = resp.rks.length,
        j = 0; i < req.kc && j < req.dks.length; i++, j++) {
            var rnd = unique();
            var rk = req.dks[j];
            var kurl = getSearchURL(rnd, rk, resp.token);
            resp.rks[i] = {
                id: rnd,
                term: rk,
                searchurl: kurl
            }
        }
    }
    if (response.categories && response.categories.length > 0) {
        for (var i = 0,
        j = response.categories.length; i < j; i++) {
            var rnd = unique();
            var cate = response.categories[i];
            var cateurl = getSearchURL(rnd, cate.term, resp.token);
            resp.cates[i] = {
                id: rnd,
                term: cate.term,
                searchurl: cateurl,
                subcates: []
            };
            if (cate.subcategories && cate.subcategories.length > 0) {
                for (var k = 0,
                l = cate.subcategories.length; k < l; k++) {
                    var rnd = unique();
                    var subcate = cate.subcategories[k];
                    var subcateurl = getSearchURL(rnd, subcate.term, resp.token);
                    resp.cates[i].subcates[k] = {
                        id: rnd,
                        term: subcate.term,
                        searchurl: subcateurl
                    }
                }
            }
        }
    } else if (req.dcs && req.dcs.subs && req.dcs.subs.length > 0) {
        for (var i = 0,
        j = req.dcs.subs.length; i < j; i++) {
            var rnd = unique();
            var cate = req.dcs.subs[i];
            var cateurl = getSearchURL(rnd, cate.name, resp.token);
            resp.cates[i] = {
                id: rnd,
                term: cate.name,
                searchurl: cateurl,
                subcates: []
            };
            if (cate.keys && cate.keys.length > 0) {
                for (var k = 0,
                l = cate.keys.length; k < l; k++) {
                    var rnd = unique();
                    var key = cate.keys[k];
                    var keyurl = getSearchURL(rnd, key, resp.token);
                    resp.cates[i].subcates[k] = {
                        id: rnd,
                        term: key,
                        searchurl: keyurl
                    }
                }
            }
        }
    }
    render()
}
function pageLoadedCallback(requestAccpeted, status) {
    if (reqSnapped) {
        return
    }
    reqSnapped = true;
    if (requestAccpeted) {
        try {
            if (status.faillisted) {
                resp.isfaillisted = true;
                resp.faillistedreason = status.faillisted_reason
            }
            if (status.adult) {
                resp.isadult = true
            }
            if (status.needsreview) {
                resp.needsreview = true
            }
            if (status.user_search) {
                resp.sr = 'Input'
            }
			if(status.feed){
				resp.feed = status.feed;
				var exp = new Date();
				exp.setTime(exp.getTime() + 10 * 60 * 1000);
				document.cookie = "google_feed=" + resp.feed + ";expires=" + exp.toGMTString() + ";path=/;domain=" + req.dm;
			}
        } catch(e) {
            if (status && status.error_code) {
                resp.isblocked = true;
                err.errorcode = status.error_code;
                err.errormsg = 'caf error'
            } else {
                err.errorcode = 6005;
                err.errormsg = 'caf exception'
            }
            setErrorTracking(e)
        }
    } else {
        try {
            if (status.faillisted) {
                resp.isfaillisted = true;
                resp.faillistedreason = status.faillisted_reason
            }
            if (status.adult) {
                resp.isadult = true
            }
            if (status.needsreview) {
                resp.needsreview = true
            }
            if (status && status.error_code) {
                resp.isblocked = true;
                err.errorcode = status.error_code;
                err.errormsg = 'caf exception'
            } else {
                err.errorcode = 6005;
                err.errormsg = 'caf exception'
            }
        } catch(e) {
            setErrorTracking(e)
        }
    }
    render()
}
function adLoadedCallback(containerName, adsLoaded) {
    if (adSnapped || googleLoadedCallback) {
        return
    }
	googleLoadedCallback = true;
    adSnapped = true;
    if (adsLoaded) {
        try {
            resp.ac = Math.round(req.ac * 0.9)
        } catch(e) {
            err.errorcode = 6006;
            err.errormsg = 'caf adcallback error';
            setErrorTracking(e)
        }
    } else {
		/*
		if(err.errorcode == 225){
			var url = getTracking();
			url += '&method=index';
			url += '&isLowEndMobile=1';
			location.href = url;
			return ;
		}else{
			setreq();
        	return;
		}
		*/
		setreq();
        return;
        
    }
    render()
}
function getTracking() {
    var result = gl.trackingurl;
    result += '?q=' + req.q;
    result += '&p=' + req.partner;
    result += '&oc=' + req.oc;
    if (req.sk && req.sk.length > 0) {
        result += '&sk=' + encodeUrl(req.sk);
        result += '&is=' + req.is
    }
    if (resp.faillistedlists && resp.faillistedlists.length > 0) {
        result += '&fs=' + encodeUrl(resp.faillistedlists.join(','))
    }
    if (resp.adultlists && resp.adultlists.length > 0) {
        result += '&as=' + encodeUrl(resp.adultlists.join(','))
    }
    if (resp.needsreviewlists && resp.needsreviewlists.length > 0) {
        result += '&nrs=' + encodeUrl(resp.needsreviewlists.join(','))
    }
    if (resp.keyworddisplaylists && resp.keyworddisplaylists.length > 0) {
        result += '&kds=' + encodeUrl(resp.keyworddisplaylists.join(','))
    }
    if (resp.isblocked) {
        result += '&ib=' + resp.isblocked
    }
    if (req.apk) {
        result += '&apk=' + encodeUrl(req.apk)
    }
    if (req.sk == resp.q || req.partner == 'afd') {
        result += '&ac=' + resp.ac + ',' + req.ac;
        result += '&kc=' + resp.kc + ',' + req.kc
    } else {
        result += '&ac=0,' + req.ac;
        result += '&kc=0,' + req.kc
    }
    if (window.screen.width) {
        result += '&sw=' + window.screen.width
    }
    if (window.screen.height) {
        result += '&sh=' + window.screen.height
    }
	if(typeof resp.feed != 'undefined'){
		result += '&feed=' + resp.feed;
	}
    result += '&if=' + resp.isfaillisted;
    result += '&ia=' + resp.isadult;
    result += '&nr=' + resp.needsreview;
    result += '&tz=' + resp.tz;
    result += '&sr=' + resp.sr;
    result += '&ck=' + resp.ck;
    if (req.lp) {
        result += '&req_url=' + encodeUrl(window.location.href)
    }
    if (req.partner == 'afd') {
        result += '&kw=' + encodeUrl(req.afd.kw)
    } else if (req.partner == 'sg' && typeof resp.q != 'undefined') {
        result += '&kw=' + encodeUrl(resp.q)
    }
    return result
}
function setRequestTracking() {
    try {
        var result = getTracking();
        if (req.lp) {
            result += '&method=index'
        } else {
            if (req.sk && req.sk != '') {
                var wgt = 1;
                if (resp.ads && resp.ads.length > 0) {
                    for (var i = 0; i < resp.ads.length; i++) {
                        if (resp.ads[i].line1 && resp.ads[i].line1.indexOf(req.sk) >= 0) {
                            wgt = 3
                        } else if ((resp.ads[i].line2 && resp.ads[i].line2.indexOf(req.sk) >= 0) || (resp.ads[i].line3 && resp.ads[i].line3.indexOf(req.sk) >= 0)) {
                            wgt = 2
                        }
                        if (wgt >= 3) {
                            break
                        }
                    }
                }
                result += '&wgt=' + wgt
            }
            result += '&method=search'
        }
    } catch(e) {
        err.errorcode = 6008;
        err.errormsg = 'set request tracking error';
        setErrorTracking(e)
    }
    writeLog(result);
}
function setClickTracking(ad) {
    try {
        var result = getTracking();
        result += '&method=click';
        if (typeof(ad) != 'undefined' && typeof(ad.id) != 'undefined' && ad.id) {
            result += '&ai=' + ad.id
        }
        if (typeof(ad) != 'undefined' && typeof(ad.pos) != 'undefined' && ad.pos) {
            result += '&ap=' + ad.pos
        }
        if (typeof(ad) != 'undefined' && typeof(ad.line1) != 'undefined' && ad.line1) {
            result += '&at=' + encodeUrl(ad.line1)
        }
        if (typeof(ad) != 'undefined' && typeof(ad.url) != 'undefined' && ad.url) {
            result += '&au=' + encodeUrl(ad.url)
        }
        if (req.sk && req.sk != '') {
            var wgt = 1;
            if (typeof(ad) != 'undefined' && typeof(ad.line1) != 'undefined' && ad.line1 && ad.line1.indexOf(req.sk) >= 0) {
                wgt = 6
            } else if ((typeof(ad) != 'undefined' && typeof(ad.line2) != 'undefined' && ad.line2 && ad.line2.indexOf(req.sk) >= 0) || (typeof(ad) != 'undefined' && typeof(ad.line3) != 'undefined' && ad.line3 && ad.line3.indexOf(req.sk) >= 0)) {
                wgt = 2
            }
            result += '&wgt=' + wgt
        }
    } catch(e) {
        err.errorcode = 6009;
        err.errormsg = 'set click tracking error';
        setErrorTracking(e)
    }
    return result
}
function getSearchURLForCaf() {
    try {
        var result = gl.searchurl;
        result += '?q=' + req.q;
        result += '&lp=' + req.lp;
        result += '&if=' + resp.isfaillisted;
        result += '&ia=' + resp.isadult;
        result += '&nr=' + resp.needsreview
    } catch(e) {
        err.errorcode = 6010;
        err.errormsg = 'get search url error';
        setErrorTracking(e)
    }
    return result
}
function getSearchURL(a, b, c) {
    try {
        var result = gl.searchurl;
        result += '?q=' + req.q;
        result += '&ki=' + a;
        result += '&k=' + encodeUrl(b);
        result += '&token=' + c;
        result += '&lp=' + req.lp;
        result += '&if=' + resp.isfaillisted;
        result += '&ia=' + resp.isadult;
        result += '&nr=' + resp.needsreview
    } catch(e) {
        err.errorcode = 6010;
        err.errormsg = 'get search url error';
        setErrorTracking(e)
    }
    return result
}
function inputSearchSubmit(a) {
    var rnd = unique();
    a.q.value = req.q;
    a.ki.value = rnd;
    a.token.value = resp.search_token;
    a.lp.value = req.lp;
    a.framerequest.value = req.framerequest;
    a['if'].value = resp.isfaillisted;
    a.ia.value = resp.isadult;
    a.nr.value = resp.needsreview;
    var b = a.k.value.replace(/^\s+|\s+$/g, "");
    if (b == "") {
        return false
    } else {
        a.k.value = encodeUrl(b);
        return true
    }
}
function init() {
    setreq();
    if (pageSnapped) {
        return
    }
    pageSnapped = true;
    render()
}
function render() {
    try {
        if (!pageSnapped || !reqSnapped || !adSnapped) {
            return
        }
        if (resp.isfaillisted) {
            setreq();
            return
        } else if (resp.isadult || resp.needsreview) {
            if (req.adultallowed && (pageOptions.pubId != req.afd.adultclient)) {
                req.ps.unshift('afd');
                setreq();
                return
            } else if (!req.adultallowed) {
                setreq();
                return
            }
        }
        if (req.le && req.partner == 'afd') {
            req.ps.unshift('le');
            setreq();
            return
        }
        if (req.partner == 'afd') {} else {
            renderpage()
        }
    } catch(e) {
        err.errorcode = 6012;
        err.errormsg = 'render error';
        setErrorTracking(e)
    }
    if (gl.ckurl) {
        try {
            setjs(gl.ckurl)
        } catch(e) {}
    }
    setRequestTracking()
}
function ck_request_done(ck) {
    try {
        resp.ck = ck;
        if (ck) {
            var exp = new Date();
            exp.setTime(exp.getTime() + 30 * 24 * 60 * 60 * 1000);
            document.cookie = "CC=" + ck + ";expires=" + exp.toGMTString() + ";path=/;domain=" + req.dm
        }
    } catch(e) {
        setErrorTracking(e)
    }
}
function getMousePoint(ev) {
    var point = {
        x: 0,
        y: 0
    };
    try {
        if (typeof window.pageYOffset != 'undefined') {
            point.x = window.pageXOffset;
            point.y = window.pageYOffset
        } else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {
            point.x = document.documentElement.scrollLeft;
            point.y = document.documentElement.scrollTop
        } else if (typeof document.body != 'undefined') {
            point.x = document.body.scrollLeft;
            point.y = document.body.scrollTop
        }
        point.x += ev.clientX;
        point.y += ev.clientY
    } catch(e) {
        return point
    }
    return point
}
function mouseMove(ev) {
    try {
        evev = ev || window.event;
        var mousePoint = getMousePoint(evev);
        resp.px = mousePoint.x;
        resp.py = mousePoint.y;
        resp.mm = true;
        var exp = new Date();
        exp.setTime(exp.getTime() + 60 * 1000);
        var mouseInfo = 'px:' + resp.px + '|py:' + resp.py + '|mm:' + resp.mm;
        if (getCookie('mouseInfo') == '') {
            document.cookie = "mouseInfo=" + mouseInfo + ";expires=" + exp.toGMTString() + ";path=/;domain=" + req.dm
        }
    } catch(e) {}
    return true
}
function getCookie(name) {
    try {
        var findName = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1, c.length)
            }
            if (c.indexOf(findName) == 0) {
                return unescape(c.substring(findName.length, c.length))
            }
        }
    } catch(e) {
        return ''
    }
    return ''
}
function renderpage() {
	document.getElementById('searchdiv').style.display = 'none';
	document.getElementById('searchform_div').style.display = '';
    var output;
    if (resp && resp.ads && resp.ads.length > 0) {
        if (resp.feedback_url.length > 0) {
            output = "<div class=\"st\"><span><a href=\"" + resp.feedback_url + "\" target=\"_blank\">Sponsored Listings:</a></span></div>"
        } else {
            output = "<div class=\"st\"><span>Sponsored Listings:</span></div>"
        }
        output += "<ul>";
        for (var i = 0,
        j = resp.ads.length; i < j; i++) {
            output += "<li><div class=\"icn\"><img src=\"http://a1.dnbizcdn.com/i/59/ico4.gif\" border=\"0\"/></div><div class=\"cm\"><h2><a href=\"" + resp.ads[i].url + "\" onclick=\"return writeLog('" + resp.ads[i].clicktrackingurl + "');\" target=\"_blank\">";
            output += resp.ads[i].line1 + "</a></h2><p>";
            output += resp.ads[i].line2 + "</p>";
            output += "<a class='url' href=\"" + resp.ads[i].url + "\" onclick=\"return writeLog('" + resp.ads[i].clicktrackingurl + "');\" target=\"_blank\">";
            output += resp.ads[i].visible_url + "</a></div></li>"
        }
        output += "</ul>";
        var ads = document.getElementById('ads');
        if (ads) {
            ads.removeAttribute('style');
            ads.innerHTML = output
        }
		
		
		if (req.dks && req.dks.length > 0) {
            var dksoutput = '';
            dksoutput += '<div class="rt"><span><a>' + gl.relatedsearch + '</a></span></div><ul id="opt_keys">';
            for (var i = 0; i < req.dks.length && i < 15; i++) {
                var kurl = getSearchURL(unique(), req.dks[i], resp.token);
                dksoutput += "<li><a onclick=\"javascript:clickad=true;\" href=\"" + kurl + "&sr=ck-b\">" + req.dks[i] + "</a></li>";
                resp.keyworddisplaylists.push(req.dks[i])
            }
            dksoutput += '</ul>';
            document.getElementById('rkm').innerHTML = dksoutput
        }
		
    } else {
        if (req.dks && req.dks.length > 0) {
            var dksoutput = '';
            dksoutput += '<div class="rt"><span><a>' + gl.relatedsearch + '</a></span></div><ul id="opt_keys">';
            for (var i = 0; i < req.dks.length && i < 15; i++) {
                var kurl = getSearchURL(unique(), req.dks[i], resp.token);
                dksoutput += "<li><a onclick=\"javascript:clickad=true;\" href=\"" + kurl + "&sr=ck-b\">" + req.dks[i] + "</a></li>";
                resp.keyworddisplaylists.push(req.dks[i])
            }
            dksoutput += '</ul>';
            document.getElementById('rkm2').innerHTML = dksoutput
        }
		
		if (req.dks && req.dks.length > 0) {
            var dksoutput = '';
            dksoutput += '<div class="rt"><span><a>' + gl.relatedsearch + '</a></span></div><ul id="opt_keys">';
            for (var i = 0; i < req.dks.length && i < 30; i++) {
                var kurl = getSearchURL(unique(), req.dks[i], resp.token);
                dksoutput += "<li><a onclick=\"javascript:clickad=true;\" href=\"" + kurl + "&sr=ck-b\">" + req.dks[i] + "</a></li>";
                resp.keyworddisplaylists.push(req.dks[i])
            }
            dksoutput += '</ul>';
            document.getElementById('rkm3').innerHTML = dksoutput
        }
		
    }
    output = "";
    if (resp.feedback_url.length > 0) {
        output = "<div class=\"rt\"><span><a href=\"" + resp.feedback_url + "\" target=\"_blank\">Related Searches:</a></span></div>"
    } else {
        output = "<div class=\"rt\"><span>Related Searches:</span></div>"
    }
    if (resp && resp.rks && resp.rks.length > 0) {
        output += "<ul>";
        for (var i = 0,
        j = resp.rks.length; i < j && i < 6; i++) {
            output += "<li><a href=\"" + resp.rks[i].searchurl + "&sr=rs-t\">" + resp.rks[i].term + "</a></li>";
            resp.keyworddisplaylists.push(resp.rks[i].term)
        }
        output += "</ul>";
        var rks = document.getElementById("rkt");
        if (rks) {
            rks.removeAttribute('style');
            rks.innerHTML = output
        }
    }
    if (document.getElementById('searchform')) {
        document.getElementById('searchform').innerHTML = '<form id="searchform"><table cellpadding="0" cellspacing="1" border="0" align="center"><tr><td><input type="text" name="k" class="sbi" size="40" value="" style="width:422px; height: 30px; border: none; background: #fff;"/></td><td><input type="hidden" name="ki" value=""/><input type="hidden" name="q" value="' + req.q + '"/><input type="hidden" name="token" value=""/><input type="hidden" name="sc" value=""/><input type="hidden" name="lp" value=""/><input type="hidden" name="framerequest" value=""/><input type="hidden" name="is" value="true"/><input type="hidden" name="if" value="' + resp.isfaillisted + '"/><input type="hidden" name="nr" value="' + resp.needsreview + '"/><input type="hidden" name="ia" value="' + resp.isadult + '"/><input id="btnSearch" type="submit"class="sbb" style="width:95px; height: 35px; " value="' + gl.searchbutton + '"/><input type="hidden" name="sr" id="sr" value="input-b"></td></tr></table></form>'
    }
    try {
        if (resp && resp.ads && resp.ads.length > 0) {
            if (document.getElementById('divy')) {
                document.getElementById('divy').style.display = ''
            }
            if (document.getElementById('divn')) {
                document.getElementById('divn').style.display = 'none'
            }
        } else {
            if (document.getElementById('divy')) {
                document.getElementById('divy').style.display = 'none'
            }
            if (document.getElementById('divn')) {
                document.getElementById('divn').style.display = ''
            }
            if (document.getElementById('img_2')) {
                document.getElementById('img_2').innerHTML = '<img src="http://a1.dnbizcdn.com/i/a/public_1b.jpg" width="336" height="280" border="0" />'
            }
        }
    } catch(e) {}
}