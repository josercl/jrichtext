/*
 * Copyright 2009,2010 - Jose Carrero. All rights reserved.
 *
 * elements.js
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
 
var richtext_elements={
		"cut":{
			title: "Cut",
			type: "button",
			action: "cut"
		},
		"copy":{
			title: "Copy",
			type: "button",
			action: "copy"
		},
		"paste":{
			title: "Paste",
			type: "button",
			action: "paste"
		},
		"undo": {
			title :"Undo",
			type: "button",
			action: "undo"
		},
		"redo": {
			title :"Redo",
			type: "button",
			action: "redo"
		},
        "bold": {
            title: "Bold",
            type: "button",
            action: "bold"
        },
        "underline": {
            title: "Underline",
            type: "button",
            action: "underline"
        },
        "italic": {
            title: "Italic",
            type: "button",
			action: "italic"
        },
        "strike": {
        	title:"Strike",
        	type: "button",
        	action: "strikethrough"
        },
        "superscript":{
        	title:"Superscript",
        	type: "button",
        	action: "superscript"
        },
        "subscript":{
        	title:"Subscript",
        	type: "button",
        	action: "subscript"
        },
        "numberedlist":{
        	title:"Insert Numbered List",
        	type: "button",
        	action: "insertorderedlist"
        },
        "bulletedlist":{
        	title: "Insert Unordered List",
        	type: "button",
        	action: "insertunorderedlist"
        },
        "indent":{
        	title:"Increase Indent",
        	type: "button",
        	action: "indent"
        },
        "outdent":{
        	title:"Decrease Indent",
        	type: "button",
        	action: "outdent"
        },
        "justifyleft":{
        	title:"Align Left",
        	type:"button",
        	action:"justifyleft"
        },
        "justifyright":{
        	title:"Align Right",
        	type:"button",
        	action:"justifyright"
        },
        "justifycenter":{
        	title:"Center",
        	type:"button",
        	action:"justifycenter"
        },
        "justify":{
        	title:"Justify",
        	type:"button",
        	action:"justifyfull"
        },
        "link":{
        	title: "Link",
        	type: "button",
        	action: "do-link"
        },
        "unlink":{
        	title: "Unlink",
        	type: "button",
        	action: "unlink"
        },
        "image":{
        	title: "Insert Image",
        	type:"button",
        	action:"do-image"
        },
        "table":{
        	title:"Insert Table",
        	type:"button",
        	action:"do-table"
        },
        "horizontalrule":{
        	title: "Insert Horizontal Rule",
        	type: "button",
        	action: "inserthorizontalrule"
        },
        "symbol":{
        	title: "Insert symbol",
        	type:"button",
        	action: "insert-symbol"
        },
        "maximize": {
        	title: "Maximize",
        	type:"button",
        	action:"do-maximize"
        },
        "preview":{
        	title:"Preview",
        	type:"button",
        	action:"do-preview"
        },
        "source":{
        	title:"View HTML Source",
        	type:"button",
        	action:"do-source",
        	text:"Source"
        },
        "fontfamily":{
        	title: "Font Name",
        	type: "select",
        	text: "Font",
        	options:[
                    {arg: "arial,helvetica,sans-serif",text: "Arial"},
                    {arg: "comic sans ms,cursive", text: "Comic Sans MS"},
                    {arg: "courier new,courier,monospace",text: "Courier New"},
                    {arg: "georgia,serif", text: "Georgia"},
                    {arg: "lucida sans unicode,lucida grande,sans-serif", text: "Lucida Sans Unicode"},
                    {arg: "sans-serif", text: "Sans serif"},
                    {arg: "tahoma,geneva,sans-serif",text: "Tahoma"},
                    {arg: "times new roman,times,serif",text:"Times New Roman"},
                    {arg: "times new roman,times,serif",text:"Trebuchet MS"},
                    {arg: "verdana,geneva,sans-serif",text: "Verdana"}
                    ],
			action: "fontname"
        },
        "fontsize":{
        	title: "Font Size",
        	type: "select",
        	text: "Size",
        	//options:[8,9,10,11,12,14,16, 18,20,22,24,26,28,36,48,72],
        	options:[1,2,3,4,5,6,7],
			action: "fontsize"
        },
        "forecolor":{
        	title:"Text Color",
        	type: "color-select",
        	action: "forecolor"
        },
        "backcolor":{
        	title:"Background Color",
        	type: "color-select",
        	action: "hilitecolor"
        },
        "heading":{
        	title: "Heading",
        	type: "select",
        	text: "Block Format",
        	action: "formatblock",
        	options: [
        		{arg: "div",text: "Normal"},
        		{arg: "h1",text: "Heading 1"},
        		{arg: "h2",text: "Heading 2"},
        		{arg: "h3",text: "Heading 3"},
        		{arg: "h4",text: "Heading 4"},
        		{arg: "h5",text: "Heading 5"},
        		{arg: "h6",text: "Heading 6"},
        		{arg: "p",text: "Paragraph"},
        		{arg: "address",text: "Address"}
        	]	
        },
        "removeformat":{
        	title:"Remove Format",
        	type: "button",
        	action: "removeformat"
        }
 };