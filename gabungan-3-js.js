var relatedTitles=new Array();var relatedTitlesNum=0;var relatedUrls=new Array();var thumburl=new Array();function related_results_labels_thumbs(json){for(var i=0;i<json.feed.entry.length;i++){var entry=json.feed.entry[i];relatedTitles[relatedTitlesNum]=entry.title.$t;try{thumburl[relatedTitlesNum]=entry.gform_foot.url}catch(error){s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if(json.feed.entry[i].media$thumbnail){thumburl[relatedTitlesNum]=json.feed.entry[i].media$thumbnail.url}else thumburl[relatedTitlesNum]='http://3.bp.blogspot.com/-zP87C2q9yog/UVopoHY30SI/AAAAAAAAE5k/AIyPvrpGLn8/s1600/picture_not_available.png'}if(relatedTitles[relatedTitlesNum].length>35)relatedTitles[relatedTitlesNum]=relatedTitles[relatedTitlesNum].substring(0,35)+"...";for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){relatedUrls[relatedTitlesNum]=entry.link[k].href;relatedTitlesNum++}}}}function removeRelatedDuplicates_thumbs(){var tmp=new Array(0);var tmp2=new Array(0);var tmp3=new Array(0);for(var i=0;i<relatedUrls.length;i++){if(!contains_thumbs(tmp,relatedUrls[i])){tmp.length+=1;tmp[tmp.length-1]=relatedUrls[i];tmp2.length+=1;tmp3.length+=1;tmp2[tmp2.length-1]=relatedTitles[i];tmp3[tmp3.length-1]=thumburl[i]}}relatedTitles=tmp2;relatedUrls=tmp;thumburl=tmp3}function contains_thumbs(a,e){for(var j=0;j<a.length;j++)if(a[j]==e)return true;return false}function printRelatedLabels_thumbs(){for(var i=0;i<relatedUrls.length;i++){if((relatedUrls[i]==currentposturl)||(!(relatedTitles[i]))){relatedUrls.splice(i,1);relatedTitles.splice(i,1);thumburl.splice(i,1);i--}}var r=Math.floor((relatedTitles.length-1)*Math.random());var i=0;if(relatedTitles.length>0)document.write('<h1>'+relatedpoststitle+'</h1>');document.write('<div class="xjxj" style="clear: both;"/>');while(i<relatedTitles.length&&i<20&&i<maxresults){document.write('<a');document.write(' href="'+relatedUrls[r]+'"><img class="related_img" src="'+thumburl[r]+'"/><br/><div class="related_title">'+relatedTitles[r]+'</div></a>');if(r<relatedTitles.length-1){r++}else{r=0}i++}document.write('</div>');relatedUrls.splice(0,relatedUrls.length);thumburl.splice(0,thumburl.length);relatedTitles.splice(0,relatedTitles.length)};

/* relatedTitles */
imgr=new Array,imgr[0]="http://sites.google.com/site/fdblogsite/Home/nothumbnail.gif",showRandomImg=!0,aBold=!0,summaryTitle=25,summaryPost=200,summaryPost2=150,numposts=8;var classicMode=!1,summary=20,indent=3;imgr=new Array,imgr[0]="http://sites.google.com/site/fdblogsite/Home/nothumbnail.gif",showRandomImg=!0,aBold=!0,summaryPost=170,count=0,summaryTitle=25,numposts1=3,numposts2=8,numposts12=1,numposts3=3;classicMode=!1,summary=50,indent=3;var relatedTitles=new Array,relatedTitlesNum=0,relatedUrls=new Array,thumburl=new Array;function removeHtmlTag(e,t){for(var r=e.split("<"),a=0;a<r.length;a++)-1!=r[a].indexOf(">")&&(r[a]=r[a].substring(r[a].indexOf(">")+1,r[a].length));return r=(r=r.join("")).substring(0,t-1)}function stripHtmlTags(e,t){return e.replace(/<.*?>/gi,"").split(/\s+/).slice(0,t-1).join(" ")}function showcat(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0,img=new Array,numposts12<=e.feed.entry.length?maxpost=numposts12:maxpost=e.feed.entry.length,document.write('<div class="topcategories">');for(var t=0;t<maxpost;t++){var r=e.feed.entry[t],i=(r.title.$t,"");if(e.feed.entry[t].category)for(var n=0;n<e.feed.entry[t].category.length;n++)n<1&&(i=i+'<a href="/search/label/'+e.feed.entry[t].category[n].term+'?max-results=6">'+e.feed.entry[t].category[n].term+"</a>"),'<a href="/search/label/'+e.feed.entry[t].category[n].term+'?max-results=6">'+e.feed.entry[t].category[n].term+"</a>";if(t==e.feed.entry.length)break;for(var l=0;l<r.link.length;l++)if("alternate"==r.link[l].rel){r.link[l].href;break}for(l=0;l<r.link.length;l++)if("replies"==r.link[l].rel&&"text/html"==r.link[l].type){r.link[l].title.split(" ")[0];break}if("content"in r)var o=r.content.$t;else if("summary"in r)o=r.summary.$t;else o="";postdate=r.published.$t,j>imgr.length-1&&(j=0),img[t]=imgr[j],s=o,a=s.indexOf("<img"),b=s.indexOf('src="',a),h=s.indexOf('"',b+5),d=s.substr(b+5,h-b-5),-1!=a&&-1!=b&&-1!=h&&""!=d&&(img[t]=d);for(var m=[1,2,3,4,5,6,7,8,9,10,11,12],c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],f=(postdate.split("-")[2].substring(0,2),postdate.split("-")[1]),g=(postdate.split("-")[0],0);g<m.length;g++)if(parseInt(f)==m[g]){f=c[g];break}var u,p=e.feed.entry[t].content.$t,h=$("<div>").html(p).find("img:first").attr("src");if(e.feed.entry[t].media$thumbnail&&(-1!=(u=e.feed.entry[t].media$thumbnail.url).indexOf("img.youtube.com")&&(u=e.feed.entry[t].media$thumbnail.url.replace("default","mqdefault")),u=u.replace("/s72-c/","/s600/")),void 0===h)if(e.feed.entry[t].media$thumbnail)var y='<div  style="background:url('+u+') no-repeat center center;background-size: cover;width: 100%;height: 268px;display:block;"></div>';else y='<div class="noimg odd-image" style="background:url(http://1.bp.blogspot.com/-S5pmP6Y0KUs/V6CsQEqKNGI/AAAAAAAAEFY/LZigJ20wKVkpzFLJSuzvjJDkC9z9IFy5wCK4B/s1600/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png) no-repeat center center;background-size: cover;width: 100%;height: 268px;display:block;"></div>';else y='<div class="odd-image" style="background:url('+d+') no-repeat center center;background-size: cover;width: 100%;height: 268px;display:block;"></div>';var v=y+'<div class="cwrap"><div class="ccwrap">'+i+"</div></div>";document.write(v),j++}document.write("</div>")}function showrecentsidebar(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0,img=new Array,numposts1<=e.feed.entry.length?maxpost=numposts1:maxpost=e.feed.entry.length,document.write('<div class="recentsidebar">');for(var t=0;t<maxpost;t++){var r,i=e.feed.entry[t],n=i.title.$t,l="";if(e.feed.entry[t].category)for(var o=0;o<e.feed.entry[t].category.length;o++)o<=0&&(l=l+'<a href="/search/label/'+e.feed.entry[t].category[o].term+'?max-results=6">'+e.feed.entry[t].category[o].term+"</a>"),'<a href="/search/label/'+e.feed.entry[t].category[o].term+'?max-results=6">'+e.feed.entry[t].category[o].term+"</a>";if(t==e.feed.entry.length)break;for(var m=0;m<i.link.length;m++)if("alternate"==i.link[m].rel){r=i.link[m].href;break}for(m=0;m<i.link.length;m++)if("replies"==i.link[m].rel&&"text/html"==i.link[m].type){i.link[m].title.split(" ")[0];break}if("content"in i)var c=i.content.$t;else if("summary"in i)c=i.summary.$t;else c="";postdate=i.published.$t,j>imgr.length-1&&(j=0),img[t]=imgr[j],s=c,a=s.indexOf("<img"),b=s.indexOf('src="',a),w=s.indexOf('"',b+5),d=s.substr(b+5,w-b-5),-1!=a&&-1!=b&&-1!=w&&""!=d&&(img[t]=d);for(var f=[1,2,3,4,5,6,7,8,9,10,11,12],g=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],u=postdate.split("-")[2].substring(0,2),p=postdate.split("-")[1],h=postdate.split("-")[0],y=0;y<f.length;y++)if(parseInt(p)==f[y]){p=g[y];break}var v,k=e.feed.entry[t].content.$t,w=$("<div>").html(k).find("img:first").attr("src");if(e.feed.entry[t].media$thumbnail&&(-1!=(v=e.feed.entry[t].media$thumbnail.url).indexOf("img.youtube.com")&&(v=e.feed.entry[t].media$thumbnail.url.replace("default","mqdefault")),v=v.replace("/s72-c/","/s600/")),void 0===w)if(e.feed.entry[t].media$thumbnail)var x='<a href="'+r+'" class="iframevideo odd-image" style="background:url('+v+') no-repeat center center;background-size: cover;width: 90px;height: 90px;display:block;"/>';else x='<a href="'+r+'" class="noimg odd-image" style="background:url(http://1.bp.blogspot.com/-S5pmP6Y0KUs/V6CsQEqKNGI/AAAAAAAAEFY/LZigJ20wKVkpzFLJSuzvjJDkC9z9IFy5wCK4B/s1600/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png) no-repeat center center;background-size: cover;width: 90px;height: 90px;display:block;"/>';else x='<a href="'+r+'" class="odd-image" style="background:url('+d+') no-repeat center center;background-size: cover;width: 90px;height: 90px;display:block;"/>';var A='<div class="item"><div class="item-wrap"><div class="item-wrap-inner"><div class="item-image">'+x+'</div><div class="item-info-wrapper"><div class="item-info"><div class="item-date">'+l+'</div><div class="item-title"><a href="'+r+'" title="'+n+'" >'+n+'</a></div><div class="item-content">'+(u+" "+p+" "+h)+"</div></div></div></div></div></div>";document.write(A),j++}document.write("</div>")};

// Generated by CoffeeScript 1.3.3
(function(){var e,t;e=function(){function e(e,t){var n,r;this.options={target:"instafeed",get:"popular",resolution:"thumbnail",sortBy:"none",links:!0,mock:!1,useHttp:!1};if(typeof e=="object")for(n in e)r=e[n],this.options[n]=r;this.context=t!=null?t:this,this.unique=this._genKey()}return e.prototype.hasNext=function(){return typeof this.context.nextUrl=="string"&&this.context.nextUrl.length>0},e.prototype.next=function(){return this.hasNext()?this.run(this.context.nextUrl):!1},e.prototype.run=function(t){var n,r,i;if(typeof this.options.clientId!="string"&&typeof this.options.accessToken!="string")throw new Error("Missing clientId or accessToken.");if(typeof this.options.accessToken!="string"&&typeof this.options.clientId!="string")throw new Error("Missing clientId or accessToken.");return this.options.before!=null&&typeof this.options.before=="function"&&this.options.before.call(this),typeof document!="undefined"&&document!==null&&(i=document.createElement("script"),i.id="instafeed-fetcher",i.src=t||this._buildUrl(),n=document.getElementsByTagName("head"),n[0].appendChild(i),r="instafeedCache"+this.unique,window[r]=new e(this.options,this),window[r].unique=this.unique),!0},e.prototype.parse=function(e){var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S;if(typeof e!="object"){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,"Invalid JSON data"),!1;throw new Error("Invalid JSON response")}if(e.meta.code!==200){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,e.meta.error_message),!1;throw new Error("Error from Instagram: "+e.meta.error_message)}if(e.data.length===0){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,"No images were returned from Instagram"),!1;throw new Error("No images were returned from Instagram")}this.options.success!=null&&typeof this.options.success=="function"&&this.options.success.call(this,e),this.context.nextUrl="",e.pagination!=null&&(this.context.nextUrl=e.pagination.next_url);if(this.options.sortBy!=="none"){this.options.sortBy==="random"?d=["","random"]:d=this.options.sortBy.split("-"),p=d[0]==="least"?!0:!1;switch(d[1]){case"random":e.data.sort(function(){return.5-Math.random()});break;case"recent":e.data=this._sortBy(e.data,"created_time",p);break;case"liked":e.data=this._sortBy(e.data,"likes.count",p);break;case"commented":e.data=this._sortBy(e.data,"comments.count",p);break;default:throw new Error("Invalid option for sortBy: '"+this.options.sortBy+"'.")}}if(typeof document!="undefined"&&document!==null&&this.options.mock===!1){a=e.data,this.options.limit!=null&&a.length>this.options.limit&&(a=a.slice(0,this.options.limit+1||9e9)),n=document.createDocumentFragment(),this.options.filter!=null&&typeof this.options.filter=="function"&&(a=this._filter(a,this.options.filter));if(this.options.template!=null&&typeof this.options.template=="string"){i="",o="",l="",v=document.createElement("div");for(m=0,b=a.length;m<b;m++)s=a[m],u=s.images[this.options.resolution].url,this.options.useHttp||(u=u.replace("http://","//")),o=this._makeTemplate(this.options.template,{model:s,id:s.id,link:s.link,image:u,caption:this._getObjectProperty(s,"caption.text"),likes:s.likes.count,comments:s.comments.count,location:this._getObjectProperty(s,"location.name")}),i+=o;v.innerHTML=i,S=[].slice.call(v.childNodes);for(g=0,w=S.length;g<w;g++)h=S[g],n.appendChild(h)}else for(y=0,E=a.length;y<E;y++)s=a[y],f=document.createElement("img"),u=s.images[this.options.resolution].url,this.options.useHttp||(u=u.replace("http://","//")),f.src=u,this.options.links===!0?(t=document.createElement("a"),t.href=s.link,t.appendChild(f),n.appendChild(t)):n.appendChild(f);document.getElementById(this.options.target).appendChild(n),r=document.getElementsByTagName("head")[0],r.removeChild(document.getElementById("instafeed-fetcher")),c="instafeedCache"+this.unique,window[c]=void 0;try{delete window[c]}catch(x){}}return this.options.after!=null&&typeof this.options.after=="function"&&this.options.after.call(this),!0},e.prototype._buildUrl=function(){var e,t,n;e="https://api.instagram.com/v1";switch(this.options.get){case"popular":t="media/popular";break;case"tagged":if(typeof this.options.tagName!="string")throw new Error("No tag name specified. Use the 'tagName' option.");t="tags/"+this.options.tagName+"/media/recent";break;case"location":if(typeof this.options.locationId!="number")throw new Error("No location specified. Use the 'locationId' option.");t="locations/"+this.options.locationId+"/media/recent";break;case"user":if(typeof this.options.userId!="number")throw new Error("No user specified. Use the 'userId' option.");if(typeof this.options.accessToken!="string")throw new Error("No access token. Use the 'accessToken' option.");t="users/"+this.options.userId+"/media/recent";break;default:throw new Error("Invalid option for get: '"+this.options.get+"'.")}return n=""+e+"/"+t,this.options.accessToken!=null?n+="?access_token="+this.options.accessToken:n+="?client_id="+this.options.clientId,this.options.limit!=null&&(n+="&count="+this.options.limit),n+="&callback=instafeedCache"+this.unique+".parse",n},e.prototype._genKey=function(){var e;return e=function(){return((1+Math.random())*65536|0).toString(16).substring(1)},""+e()+e()+e()+e()},e.prototype._makeTemplate=function(e,t){var n,r,i,s,o;r=/(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,n=e;while(r.test(n))i=n.match(r)[1],s=(o=this._getObjectProperty(t,i))!=null?o:"",n=n.replace(r,""+s);return n},e.prototype._getObjectProperty=function(e,t){var n,r;t=t.replace(/\[(\w+)\]/g,".$1"),r=t.split(".");while(r.length){n=r.shift();if(!(e!=null&&n in e))return null;e=e[n]}return e},e.prototype._sortBy=function(e,t,n){var r;return r=function(e,r){var i,s;return i=this._getObjectProperty(e,t),s=this._getObjectProperty(r,t),n?i>s?1:-1:i<s?1:-1},e.sort(r.bind(this)),e},e.prototype._filter=function(e,t){var n,r,i,s,o;n=[],i=function(e){if(t(e))return n.push(e)};for(s=0,o=e.length;s<o;s++)r=e[s],i(r);return n},e}(),t=typeof exports!="undefined"&&exports!==null?exports:window,t.Instafeed=e}).call(this);

/*
* jquery-match-height 0.7.0 by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,i=function(t){return parseFloat(t)||0},a=function(e){var o=1,a=t(e),n=null,r=[];return a.each(function(){var e=t(this),a=e.offset().top-i(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(n-a))<=o?r[r.length-1]=s.add(e):r.push(e),n=a}),r},n=function(e){var o={
byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=n(e);if(o.remove){var i=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(i)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="0.7.0",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,
r._afterUpdate=null,r._rows=a,r._parse=i,r._parseOptions=n,r._apply=function(e,o){var s=n(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),d=h.parents().filter(":hidden");return d.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),d.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",
"padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=a(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var a=t(o),n=0;if(s.target)n=s.target.outerHeight(!1);else{if(s.byRow&&a.length<=1)return void a.css(s.property,"");a.each(function(){var e=t(this),o=e.attr("style"),i=e.css("display");"inline-block"!==i&&"flex"!==i&&"inline-flex"!==i&&(i="block");var a={
display:i};a[s.property]="",e.css(a),e.outerHeight(!1)>n&&(n=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}a.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=i(e.css("border-top-width"))+i(e.css("border-bottom-width")),o+=i(e.css("padding-top"))+i(e.css("padding-bottom"))),e.css(s.property,n-o+"px"))})}),d.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),
this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),i=o.attr("data-mh")||o.attr("data-match-height");i in e?e[i]=e[i].add(o):e[i]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(i,a){if(a&&"resize"===a.type){var n=t(window).width();if(n===e)return;e=n;
}i?-1===o&&(o=setTimeout(function(){s(a),o=-1},r._throttle)):s(a)},t(r._applyDataApi),t(window).bind("load",function(t){r._update(!1,t)}),t(window).bind("resize orientationchange",function(t){r._update(!0,t)})});
//]]>