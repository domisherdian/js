var classicMode=!1,summary=20,indent=3;imgr=new Array,imgr[0]="http://sites.google.com/site/fdblogsite/Home/nothumbnail.gif",showRandomImg=!0,aBold=!0,count=1,summaryPost=170,summaryTitle=25,numposts1=6,numposts2=8;classicMode=!1,summary=50,indent=3;var relatedTitles=new Array,relatedTitlesNum=0,relatedUrls=new Array,thumburl=new Array;function stripHtmlTags(s,a){return s.replace(/<.*?>/gi,"").split(/\s+/).slice(0,a-1).join(" ")}function createSummaryAndThumb(s,a,e,i,l,d,t){var c=a,n=(e=e,i=i,d=d,document.getElementById(s)),r=n.getElementsByTagName("img"),o=n.innerHTML.replace(/<img.*?>/gi,"").replace(/<iframe.*?>/gi,"").split(/<br\s*\/?>/),p=o[0]+o.slice(1,-1).join("<br>")+o.slice(-1),v=new Array;v[0]="Jan",v[1]="Feb",v[2]="Mar",v[3]="Apr",v[4]="May",v[5]="Jun",v[6]="Jul",v[7]="Aug",v[8]="Sep",v[9]="Oct",v[10]="Nov",v[11]="Dec";v[e.split("/")[0]],e.split("/")[1],e.split("/")[2];if(1==count){if(1==r.length)var m='<div class="post-image"><a href="'+c+'"><img class="thumb" width="940" height="987" src="'+r[0].src+'"></a></div>'+'<div class="embedd"><header class="post-header"><span class="aftert"></span><div class="post-details"><span class="auth"><div class="labelhome">'+d+' </div></span> </div></header><div class="cen"></div></div></div>';else if(r.length>1){for(var h="",g=0;g<r.length;g++)h=h+'<div><img src="'+r[g].src+'"></div>';m='<div class="slickslider post-image">'+h+"</div>"+'<div class="embedd"><header class="post-header"><span class="aftert"></span><div class="post-details"><span class="auth"><div class="labelhome">'+d+' </div></span> </div></header><div class="cen"></div><div class="intro-text">'+stripHtmlTags(p,55)+'... </div><span class="post-da"><i class="fa fa-clock-o"></i> '+e+'</span><span class="post-comm"><i class="fa fa-commenting-o"></i> '+i+"</span></div></div>"}else{if((f=n.getElementsByTagName("iframe")).length>=1)m='<iframe width="100%" height="450" frameborder="no" src="'+f[0].src+'" scrolling="no"></iframe>'+'<div class="embedd"><header class="post-header"><span class="aftert"></span><div class="post-details"><span class="auth"><div class="labelhome">'+d+' </div></span> </div></header><div class="cen"></div><div class="intro-text">'+stripHtmlTags(p,55)+'... </div><span class="post-da"><i class="fa fa-clock-o"></i> '+e+'</span><span class="post-comm"><i class="fa fa-commenting-o"></i> '+i+"</span></div></div>";else m='<div class="embedd blankimage"><header class="post-header"><span class="aftert"></span><div class="post-details"><span class="auth"><div class="labelhome">'+d+' </div></span> </div></header><div class="cen"></div><div class="intro-text">'+stripHtmlTags(p,55)+'... </div><span class="post-da"><i class="fa fa-clock-o"></i> '+e+'</span><span class="post-comm"><i class="fa fa-commenting-o"></i> '+i+"</span></div></div>"}count+=1}else if(1==r.length)m='<div class="post-image"><a href="'+c+'"><img class="thumb" width="940" height="987" src="'+r[0].src+'"></a></div>'+'<div class="embedd"><header class="post-header"><span class="aftert"></span><div class="post-details"><span class="auth"><div class="labelhome">'+d+' </div></span> </div></header><div class="cen"></div></div></div>';else if(r.length>1){for(h="",g=0;g<r.length;g++)h=h+'<div><img src="'+r[g].src+'"></div>';m='<div class="slickslider post-image">'+h+"</div>"+'<div class="embedd"><header class="post-header"><span class="aftert"></span><div class="post-details"><span class="auth"><div class="labelhome">'+d+' </div></span> </div></header><div class="cen"></div><div class="intro-text">'+stripHtmlTags(p,30)+'... </div><span class="post-da"><i class="fa fa-clock-o"></i> '+e+'</span><span class="post-comm"><i class="fa fa-commenting-o"></i> '+i+"</span></div></div>"}else{var f;if((f=n.getElementsByTagName("iframe")).length>=1)m='<iframe width="100%" height="450" frameborder="no" src="'+f[0].src+'" scrolling="no"></iframe>'+'<div class="embedd"><header class="post-header"><span class="aftert"></span><div class="post-details"><span class="auth"><div class="labelhome">'+d+' </div></span> </div></header><div class="cen"></div><div class="intro-text">'+stripHtmlTags(p,30)+'... </div><span class="post-da"><i class="fa fa-clock-o"></i> '+e+'</span><span class="post-comm"><i class="fa fa-commenting-o"></i> '+i+"</span></div></div>";else m='<div class="embedd blankimage"><header class="post-header"><span class="aftert"></span><div class="post-details"><span class="auth"><div class="labelhome">'+d+' </div></span> </div></header><div class="cen"></div><div class="intro-text">'+stripHtmlTags(p,30)+'... </div><span class="post-da"><i class="fa fa-clock-o"></i> '+e+'</span><span class="post-comm"><i class="fa fa-commenting-o"></i> '+i+"</span></div></div>"}n.innerHTML=m,n.style.display="block";var u=document.getElementsByClassName("separator");for(g=0;g<u.length;g++)u[g].innerHTML=""}