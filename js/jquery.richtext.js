/*
 * Copyright 2009,2010 - Jose Carrero. All rights reserved.
 *
 * jquery.richtext.js
 *
 * version 2.0 (2010/02/17) 
 * 
 * Licensed under the GPL license:  
 *   http://www.gnu.org/licenses/gpl.html
 *
 * This file is part of jrichtext.
 *
 *  jrichtext is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  jrichtext is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with jrichtext.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

(function($){
	
	var selectedText,originalHeight;
	var full_toolbar=[
        [
        	['cut','copy','paste'],['undo','redo'],
        	['numberedlist','bulletedlist'],['outdent','indent'],
        	['maximize','preview','source','removeformat']
        ],
        [
	        ['bold','italic','underline','strike'],['superscript','subscript'],
	        ['justifyleft','justifycenter','justifyright','justify'],
	        ['link','unlink'],
	        ['image','table','horizontalrule','symbol']
        ],
        [
        	['fontfamily','fontsize','heading'],['forecolor','backcolor']
        ]
	];

	var symbols_table="<table class='symbols_table' border=1><tr><td><a href='&amp;iexcl;'>&iexcl;<\/a><\/td><td><a href='&amp;cent;'>&cent;<\/a><\/td><td><a href='&amp;pound;'>&pound;<\/a><\/td><td><a href='&amp;curren;'>&curren;<\/a><\/td><td><a href='&amp;yen;'>&yen;<\/a><\/td><td><a href='&amp;brvbar;'>&brvbar;<\/a><\/td><td><a href='&amp;sect;'>&sect;<\/a><\/td><td><a href='&amp;uml;'>&uml;<\/a><\/td><td><a href='&amp;copy;'>&copy;<\/a><\/td><td><a href='&amp;ordf;'>&ordf;<\/a><\/td><td><a href='&amp;laquo;'>&laquo;<\/a><\/td><\/tr><tr><td><a href='&amp;not;'>&not;<\/a><\/td><td><a href='&amp;euro;'>&euro;<\/a><\/td><td><a href='&amp;reg;'>&reg;<\/a><\/td><td><a href='&amp;macr;'>&macr;<\/a><\/td><td><a href='&amp;deg;'>&deg;<\/a><\/td><td><a href='&amp;plusmn;'>&plusmn;<\/a><\/td><td><a href='&amp;sup2;'>&sup2;<\/a><\/td><td><a href='&amp;sup3;'>&sup3;<\/a><\/td><td><a href='&amp;acute;'>&acute;<\/a><\/td><td><a href='&amp;micro;'>&micro;<\/a><\/td><td><a href='&amp;para;'>&para;<\/a><\/td><\/tr>	<tr><td><a href='&amp;middot;'>&middot;<\/a><\/td><td><a href='&amp;cedil;'>&cedil;<\/a><\/td><td><a href='&amp;sup1;'>&sup1;<\/a><\/td><td><a href='&amp;ordm;'>&ordm;<\/a><\/td><td><a href='&amp;raquo;'>&raquo;<\/a><\/td><td><a href='&amp;frac14;'>&frac14;<\/a><\/td><td><a href='&amp;frac12;'>&frac12;<\/a><\/td><td><a href='&amp;frac34;'>&frac34;<\/a><\/td><td><a href='&amp;iquest;'>&iquest;<\/a><\/td><td><a href='&amp;Agrave;'>&Agrave;<\/a><\/td><td><a href='&amp;Aacute;'>&Aacute;<\/a><\/td><\/tr>	<tr><td><a href='&amp;Acirc;'>&Acirc;<\/a><\/td><td><a href='&amp;Atilde;'>&Atilde;<\/a><\/td><td><a href='&amp;Auml;'>&Auml;<\/a><\/td><td><a href='&amp;Aring;'>&Aring;<\/a><\/td><td><a href='&amp;AElig;'>&AElig;<\/a><\/td><td><a href='&amp;Ccedil;'>&Ccedil;<\/a><\/td><td><a href='&amp;Egrave;'>&Egrave;<\/a><\/td><td><a href='&amp;Eacute;'>&Eacute;<\/a><\/td><td><a href='&amp;Ecirc;'>&Ecirc;<\/a><\/td><td><a href='&amp;Euml;'>&Euml;<\/a><\/td><td><a href='&amp;Igrave;'>&Igrave;<\/a><\/td><\/tr><tr><td><a href='&amp;Iacute;'>&Iacute;<\/a><\/td><td><a href='&amp;Icirc;'>&Icirc;<\/a><\/td><td><a href='&amp;Iuml;'>&Iuml;<\/a><\/td><td><a href='&amp;ETH;'>&ETH;<\/a><\/td><td><a href='&amp;Ntilde;'>&Ntilde;<\/a><\/td><td><a href='&amp;Ograve;'>&Ograve;<\/a><\/td><td><a href='&amp;Oacute;'>&Oacute;<\/a><\/td><td><a href='&amp;Ocirc;'>&Ocirc;<\/a><\/td><td><a href='&amp;Otilde;'>&Otilde;<\/a><\/td><td><a href='&amp;Ouml;'>&Ouml;<\/a><\/td><td><a href='&amp;times;'>&times;<\/a><\/td><\/tr><tr><td><a href='&amp;Oslash;'>&Oslash;<\/a><\/td><td><a href='&amp;Ugrave;'>&Ugrave;<\/a><\/td><td><a href='&amp;Uacute;'>&Uacute;<\/a><\/td><td><a href='&amp;Ucirc;'>&Ucirc;<\/a><\/td><td><a href='&amp;Uuml;'>&Uuml;<\/a><\/td><td><a href='&amp;Yacute;'>&Yacute;<\/a><\/td><td><a href='&amp;THORN;'>&THORN;<\/a><\/td><td><a href='&amp;szlig;'>&szlig;<\/a><\/td><td><a href='&amp;agrave;'>&agrave;<\/a><\/td><td><a href='&amp;aacute;'>&aacute;<\/a><\/td><td><a href='&amp;acirc;'>&acirc;<\/a><\/td><\/tr><tr><td><a href='&amp;atilde;'>&atilde;<\/a><\/td><td><a href='&amp;auml;'>&auml;<\/a><\/td><td><a href='&amp;aring;'>&aring;<\/a><\/td><td><a href='&amp;aelig;'>&aelig;<\/a><\/td><td><a href='&amp;ccedil;'>&ccedil;<\/a><\/td><td><a href='&amp;egrave;'>&egrave;<\/a><\/td><td><a href='&amp;eacute;'>&eacute;<\/a><\/td><td><a href='&amp;ecirc;'>&ecirc;<\/a><\/td><td><a href='&amp;euml;'>&euml;<\/a><\/td><td><a href='&amp;igrave;'>&igrave;<\/a><\/td><td><a href='&amp;iacute;'>&iacute;<\/a><\/td><\/tr><tr><td><a href='&amp;icirc;'>&icirc;<\/a><\/td><td><a href='&amp;iuml;'>&iuml;<\/a><\/td><td><a href='&amp;eth;'>&eth;<\/a><\/td><td><a href='&amp;ntilde;'>&ntilde;<\/a><\/td><td><a href='&amp;ograve;'>&ograve;<\/a><\/td><td><a href='&amp;oacute;'>&oacute;<\/a><\/td><td><a href='&amp;ocirc;'>&ocirc;<\/a><\/td><td><a href='&amp;otilde;'>&otilde;<\/a><\/td><td><a href='&amp;ouml;'>&ouml;<\/a><\/td><td><a href='&amp;divide;'>&divide;<\/a><\/td><td><a href='&amp;oslash;'>&oslash;<\/a><\/td><\/tr>	<tr><td><a href='&amp;ugrave;'>&ugrave;<\/a><\/td><td><a href='&amp;uacute;'>&uacute;<\/a><\/td><td><a href='&amp;ucirc;'>&ucirc;<\/a><\/td><td><a href='&amp;uuml;'>&uuml;<\/a><\/td><td><a href='&amp;yacute;'>&yacute;<\/a><\/td><td><a href='&amp;thorn;'>&thorn;<\/a><\/td><td><a href='&amp;yuml;'>&yuml;<\/a><\/td><td><a href='&amp;quot;'>&quot;<\/a><\/td><td><a href='&amp;lt;'>&lt;<\/a><\/td><td><a href='&amp;gt;'>&gt;<\/a><\/td><td><a href='&amp;amp;'>&amp;<\/a><\/td><\/tr><tr><td><a href='&amp;OElig;'>&OElig;<\/a><\/td><td><a href='&amp;oelig;'>&oelig;<\/a><\/td><td><a href='&amp;trade;'>&trade;<\/a><\/td><td><a href='&amp;#9658;'>&#9658;<\/a><\/td><td><a href='&amp;bull;'>&bull;<\/a><\/td><td><a href='&amp;rarr;'>&rarr;<\/a><\/td><td><a href='&amp;diams;'>&diams;<\/a><\/td><td><a href='&amp;asymp;'>&asymp;<\/a><\/td><\/tr><\/table>";
	var link_dialog='<table><tr><td>Protocol:<br><select id="protocol"><option value="http://">http://<\/option><option value="https://">https://<\/option><option value="ftp://">ftp://<\/option><\/select><\/td><td>URL:<br><input type="text" id="url"><\/td><\/tr><tr><td colspan="2">Target:<br><select id="target"><option value="">Not set<\/option><option value="_blank">New Window<\/option><option value="_top">Topmost Window<\/option><option value="_self">Same Window<\/option><option value="_parent">Parent Window<\/option><\/select><\/td><\/tr><\/table>';
	var table_dialog="<table><tr><td>Rows:<br><input type='text' id='rows' size='5' value='2'><\/td><td>Width:<br><input type='text' id='width' size='5' value='200'><select id='units'><option value=''>Pixels<\/option><option value='%'>Percent<\/option><\/select><\/td><\/tr><tr><td>Columns:<br><input type='text' id='cols' size='5' value='3'><\/td><td>Border Size:<br><input type='text' id='border' size='5' value='1'><\/td><\/tr><tr><td>Cell spacing:<br><input type='text' id='cellspacing' size='5' value='1'><\/td><td>Cell padding:<br><input type='text' id='cellpadding' size='5' value='1'><\/td><\/tr><tr><td colspan='2'>Aligment:<br><select id='align'><option value=''>Not Set<\/option><option value='left'>Left<\/option><option value='center'>Center<\/option><option value='right'>Right<\/option><\/select><\/td><\/tr><\/table>";
	var img_dialog="<table><tr><td colspan='2'>URL:<br><input type='text' id='imgurl'><\/td><\/tr><tr><td>Width:<br><input type='text' id='width' size='5'><\/td><td>Height:<br><input type='text' id='height' size='5'><\/td><\/tr><tr><td>Border:<br><input type='text' id='border' size='5' value='0'><\/td><td>Align:<br><select id='align'><option value=''>Not Set<\/option><option value='left'>Left<\/option><option value='right'>Right<\/option><\/select><\/td><\/tr><\/table>";

	function getElementCode(the_element,instance){
        var element=richtext_elements[the_element];
        var code="";
        var button_text="";
        var button_class=the_element+"_"+element.type;
        
        if(element.text){
            button_text=element.text;
            if(element.type=="button"){
            	button_class+=" button_text";
            }
        }
        
        if(element.type=="button" || element.type=="color-select"){
        	code="<a href='#"+element.action+"' rel='"+instance+"' class='"+button_class+" "+element.type+"' title='"+element.title+"'>";
            code+=button_text;
            code+="<\/a>";
        }
        if(element.type=="select"){
        	code="<div class='select-wrapper'>";
        	//code+="<input type='button' rel='"+instance+"' id='"+element.action+"_"+instance+"' class='"+button_class+" "+element.type+"' title='"+element.title+"' value='"+element.text+"'>";
        	code+="<a href='#"+element.action+"' rel='"+instance+"' id='"+element.action+"_"+instance+"' class='"+button_class+" "+element.type+"' title='"+element.title+"'>"+element.text+"<\/a>";
			code+="<div class='opciones_combo'><ul>";
			$.each(element.options,function(index,opt){
				if(opt.text){
					code+="<li><a href='#' rel='"+opt.arg+"'>"+opt.text+"<\/a><\/li>";
				}else{
					code+="<li><a href='#' rel='"+opt+"'>"+opt+"<\/a><\/li>";
				}
			});
			code+="<\/ul><\/div>";
			code+="<\/div>";
        }
        
        return code;
    }

    function getDocument(n){
        var id_editor="richtext_"+n;
        return $($("#"+id_editor)[0].contentWindow).attr("document");
    }
    
    function setFocus(n){
    	var id_editor="richtext_"+n;
    	$("#"+id_editor)[0].contentWindow.focus();
	}
	
	function getHTML(n){
		return getDocument(n).body.innerHTML;
	}
	
	function selectText(n){
		if(document.body.createTextRange){
            var eldoc=getDocument(n);
            var range=eldoc.selection.createRange();
            selectedText=range.getBookmark();
        }
	}
	
	function activateSelection(n){
		if(document.body.createTextRange){
			var eldoc=getDocument(n);
	        var rng=eldoc.body.createTextRange();
	        rng.moveToBookmark(selectedText);
	        rng.select();
	    }
	}
	
	function getAction(object){
		var href=$(object).attr("href");
    	var action=href.replace("#","");
    	if($.browser.msie){
    		var sharpIndex=href.indexOf("#")+1;
    		action=href.substring(sharpIndex);
    	}
    	return action;
	}
	
	function updateHTML(n){
		var html=getHTML(n);
		var id_wrapper="editor-wrapper_"+n;
		$("#"+id_wrapper+" textarea").val(html);
	}
	
	function updateEditor(n){
		var eldoc=getDocument(n);
    	var id_wrapper="editor-wrapper_"+n;
		$(eldoc.body).html($("#"+id_wrapper+" textarea").val());
	}

    function doEdit(n,command,ui,param){
    	
    	var id_editor="richtext_"+n;
    	var id_wrapper="editor-wrapper_"+n;
    	
        var eldoc=getDocument(n);
        var executed=false;
        
        try{
			executed=eldoc.execCommand(command,ui,param);
        }catch(e){
        	executed=false;
        }
        
        if(!executed){
        	
        	var theselection=null;
        	
        	if(eldoc.selection){
        		theselection=eldoc.selection.createRange();
        		selectedLength=theselection.text.length;
        	}else{
        		theselection=eldoc.getSelection();
        		selectedLength=theselection.length;
        	}
        	
        	setFocus(n);
        	
            if(command=="do-maximize"){
            
            	viewportheight=$(document).height();
            	viewportwidth=$(document).width();
            	
            	var toolbarheight=$("#"+id_wrapper+" .toolbar-box").height();
            	
            	if($("#"+id_wrapper).hasClass("maximized")){
            		newHeightIframe=$("#"+id_wrapper+" .iframe-wrapper").attr("rel")+"px";
            		newHeight=originalHeight;
            	}else{
            		originalHeight=$("#"+id_wrapper).height();
            		newHeightIframe="100%";
            		newHeight=viewportheight-toolbarheight+"px";
            	}
            	
            	$("#"+id_wrapper).toggleClass("maximized").css({
            		height: newHeight 
            	}).find(".iframe-wrapper").css({
            		height: newHeightIframe
            	}).find("textarea").css({
            		height: newHeightIframe
            	});
            
            	setFocus(n);
            }
            if(command=="do-preview"){
            	var newwindow2=window.open("","jrichtext_preview","height=500,width=600,toolbar=no");
            	var tmp = newwindow2.document;
				tmp.write('<html><head><title>jrichtext Preview<\/title><\/head><body>');
				tmp.write(getHTML(n));
				tmp.write("<p style='text-align: center'><a href='#' onClick='window.close()'>Close Window<\/a><\/p>");
				tmp.write('<\/body><\/html>');
				tmp.close();
            }
            if(command=="do-source"){
            	var htmlSource=getHTML(n);

            	if($("#"+id_wrapper+" textarea").css("display")=="none"){
            		$("#"+id_wrapper+" textarea").val(htmlSource);
            	}else{
            		//$(eldoc.body).html($("#"+id_wrapper+" textarea").val());
            		updateEditor(n);
            	}
            	
            	$(".opciones_combo").hide();
            	$("#"+id_wrapper+" textarea").toggle();
				$("#"+id_editor).toggle();
				$("#"+id_wrapper+" .source-overlay").toggle();
            }
            if(command=="do-link"){
            	selectText(n);
            	jConfirm(link_dialog,"Insert Link",function(r,p){
            		if(r){
						var protocol=$(p).find("#protocol").val();
						var target=$(p).find("#target").val();
						var url=$(p).find("#url").val();
						var code="<a href='"+protocol+""+url+"'";
						if(target!=""){
							code+=" target='"+target+"'";
						}
						code+=">";
						
						link_text=protocol+url;
						if(document.selection){
							if(theselection.text!=null && theselection.text!=undefined && theselection.text!=""){
								link_text=theselection.text;
							}
						}else{
							if(theselection!=null && theselection!=undefined && theselection!=""){
								link_text=theselection;
							}	
						}
						
						code+=link_text+"<\/a>";
						
						activateSelection(n);
						doEdit(n,"inserthtml",ui,code);
            		}
            	});
            }
            if(command=="do-table"){
            	selectText(n);
            	jConfirm(table_dialog,"Insert Table",function(r,p){
            		if(r){
            			var rows=$(p).find("#rows").val();
            			var cols=$(p).find("#cols").val();
            			var width=$(p).find("#width").val();
            			var units=$(p).find("#units").val();
            			var border=$(p).find("#border").val();
            			var cellspacing=$(p).find("#cellspacing").val();
            			var cellpadding=$(p).find("#cellpadding").val();
            			var align=$(p).find("#align").val();
            			
            			code="<table";
            			if(border!=""){
            				code+=" border='"+border+"'";
            			}
            			if(width!=""){
            				code+=" width='"+width+units+"'";
            			}
            			if(cellspacing!=""){
            				code+=" cellspacing='"+cellspacing+"'";
            			}
            			if(cellpadding!=""){
            				code+=" cellpadding='"+cellpadding+"'";
            			}
            			if(align!=""){
            				code+=" align='"+align+"'";
            			}
            			code+=">";
            			for(i=0;i<rows;i++){
            				code+="<tr>";
            				for(j=0;j<cols;j++){
            					code+="<td>&nbsp;<\/td>";
            				}
            				code+="<\/tr>";
            			}
            			code+="<\/table>";
            			
            			activateSelection(n);
						doEdit(n,"inserthtml",ui,code);
            		}
            	});
            }
            if(command=="do-image"){
            	selectText(n);
            	jConfirm(img_dialog,"Insert Image",function(r,p){
            		if(r){
            			var url=$(p).find("#imgurl").val();
            			var width=$(p).find("#width").val();
            			var height=$(p).find("#height").val();
            			var border=$(p).find("#border").val();
            			var align=$(p).find("#align").val();
            			
            			code="<img src='"+url+"'";
            			
            			var styles=new Array(0);
            			if(width!=""){
            				styles.push(" width: "+width+"px");
            			}
            			if(height!=""){
            				styles.push(" height: "+height+"px");
            			}
            			if(align!=""){
            				styles.push(" float: "+align);
            			}
            			
            			if(styles.length!=0){
            				code+=" style='"+styles.join(';')+"'";
            			}
            			
            			if(border!=""){
            				code+=" border='"+border+"'";
            			}
            			
            			code+=">";
            			activateSelection(n);
						doEdit(n,"inserthtml",ui,code);
            		}
            	});
            }
            if(command=="inserthtml"){
                theselection.pasteHTML(param);
            }
           	if(command=="hilitecolor"){
            	doEdit(n,"backcolor",ui,param);
			}
			if(command=="inserthorizontalrule"){
				doEdit(n,"inserthtml",ui,"<hr>");
			}
			if(command=="formatblock"){
				selectText(n);
				if(document.selection){
					if(theselection.text!=null && theselection.text!=undefined && theselection.text!=""){
						block_text=theselection.text;
					}
				}
				
				doEdit(n,"inserthtml",ui,"<"+param+">"+block_text);
			}
        }
        
        setFocus(n);
    }

    $.fn.richText=function(options){

        var defaults={
            toolbar: full_toolbar,
            readOnly: false
        };

        var opts=$.extend({},defaults,options);

        this.each(function(i){

            var id_editor="richtext_"+i;
            var id_wrapper="editor-wrapper_"+i;

            var toolbar_code="<div class='toolbar-box'>";
            $.each(opts.toolbar,function(index,bar){
                toolbar_code+="<ul class='toolbar'>";
                $.each(bar,function(index2,group){
                    toolbar_code+="<li class='grupo'><ul>";
                    $.each(group,function(index3,element){
                        toolbar_code+="<li class='editor-button'>";
                        
                        if(element!="source"){
                        	toolbar_code+="<div class='source-overlay'><\/div>";
                        }
                        
                        toolbar_code+=getElementCode(element,i);
                        
                        toolbar_code+="<\/li>";
                    });
                    toolbar_code+="<\/ul><\/li>";
                });
                toolbar_code+="<\/ul>";
            });
            toolbar_code+="<\/div>"

            var editorWidth=$(this).attr("clientWidth");
            var editorHeight=$(this).attr("clientHeight");

			//style='height: "+editorHeight+"px;'
	
            var iframeCode="<div class='iframe-wrapper' rel='"+editorHeight+"' style='height: "+editorHeight+"px;'><iframe class='textEditor' id='"+id_editor+"'><\/iframe><\/div>";
            
            code=toolbar_code+iframeCode;
            
            $(this).css({
				"border": "none",
				"margin": 0,
				"width": "100%"
            }).hide()
            	.wrap("<div class='editor-wrapper' id='"+id_wrapper+"' style='width: "+editorWidth+"px;'>")
            	.parent()
            	.append(code)

            $(this).appendTo($(this).parent().find(".iframe-wrapper"));
            
            var doc = getDocument(i);
            
            var w3c = $("#"+id_editor)[0].contentDocument !== undefined ? true : false;
	    	
	    	if(!opts.readOnly){
	            doc.designMode = w3c ? "on" : "On";
			}else{
				doc.designMode = w3c ? "off" : "Off";
			}
            
            doc.open();
            codigo="<html><head><\/head><body bgcolor='white'>"+$(this).val()+"<\/body><\/html>";
            doc.write(codigo);
            doc.close();
            
        });
        
        
        $.each($(".iframe-wrapper iframe"),function(i,iframe){
        	if(iframe.contentWindow.addEventListener){
	        	iframe.contentWindow.addEventListener( 'blur', function(){
	        		updateHTML(i);	
	        	}, false ) ;
        	}else{
        		iframe.onblur=function(){
        			updateHTML(i);
        		};
        	}
        });
                
        $(".toolbar-box").find("a.button").click(function(){
        	
			var action=getAction($(this));
			var instance=$(this).attr("rel");
			doEdit(instance,action,false,null);
			return false;
		}).end().find(".select").click(function(){
			var instance=$(this).attr("rel");
			selectText(instance);
			$(".opciones_combo").hide();
			$(this).parent().find(".opciones_combo").show();
			return false;
		});
		
		$(".opciones_combo li a").click(function(){
        	$(this).parents(".select-wrapper").find(".opciones_combo").hide();
        	var button=$(this).parents(".select-wrapper").find("a.select");
        	var instance=$(button).attr("rel");
        	var action=getAction($(button));
        	
        	activateSelection(instance);
        	
			doEdit(instance,action,false,$(this).attr("rel").toLowerCase());
			return false;	
        });
		
		$(".color-select").ColorPicker({
			onBeforeShow: function(hs,he,rg){ 
				var action=getAction($(this));
				var instance=$(this).attr("rel");
				
				selectText(instance);
			},
			onSubmit: function(hsb, hex, rgb, el){
				var action=getAction($(el));
				var instance=$(el).attr("rel");
			
				$(el).ColorPickerHide();
				
				activateSelection(instance);
				doEdit(instance,action,false,"#"+hex);
			}
		});
		
		$(".symbol_button").append(symbols_table);
		$(".symbol_button").click(function(){
			$(this).find(".symbols_table").toggle();	
		});
		$(".symbols_table a").click(function(){
			var instance=$(this).parents(".symbol_button").attr("rel");
			setFocus(instance);
			doEdit(instance,"inserthtml",false,$(this).text());
			$(this).parents(".symbols_table").hide();
			return false;
		});

    };
    
    $.fn.getHTML=function(){
    	var n=$(this).parent().find("iframe").attr("id").replace("richtext_","");
    	return getDocument(n).body.innerHTML;
    }
    
})(jQuery)
