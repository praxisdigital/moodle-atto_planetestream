YUI.add("moodle-atto_planetestream-button",function(e,t){var n,r,i,s=1e3,o=700,u,a;e.namespace("M.atto_planetestream").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{initializer:function(){if(this.get("disabled"))return;this.addButton({icon:"button",iconComponent:"atto_planetestream",title:"pluginname",buttonName:"button",callback:this._displayDialogue})},_listen:function(){window.addEventListener?(n="addEventListener",r="message"):window.postMessage?(n="attachEvent",r="onmessage"):i._insertContent("Sorry, your web-browser is not compatible with this feature.");var e=window[n];e(r,function(e){var t=e.data;t.indexOf("rt=2")!=-1&&(t+="&extended=true"),i._insertContent('<iframe style="width: '+i.get("estream_width")+"px; height: "+i.get("estream_height")+'px; border: 0" src="'+i.get("estream_url")+"/Embed.aspx?"+t+'"></iframe><a href="'+"/_planetestreamiframe_/Embed.aspx?"+t+'">&nbsp;</a>')},!1)},_insertContent:function(e){a||(i.getDialogue().hide(),i.editor.focus(),i.get("host").insertContentAtFocusPoint(e),i.markUpdated(),a=!0)},_displayDialogue:function(t){t.preventDefault(),a=!1;var n=this.getDialogue({headerContent:"Insert Planet eStream Item",width:s+"px",height:o+"px"});n.width!==s+"px"&&n.set("width",s+"px"),n.width!==o+"px"&&n.set("height",o+"px"),u=e.Node.create("<div></div>"),u.append('<form class="atto_form"><div class="mdl-align"><iframe style="border: 0px; width: '+(parseInt(s,10)-78)+"px;"+"height: "+(parseInt(o,10)-65)+'px;" src="'+this.get("estream_url")+this.get("estream_path")+"&td="+window.location.protocol+"//"+window.location.host+'"></iframe></div></form>'),n.set("bodyContent",u),n.show(),this.markUpdated(),i=this,i._listen()}},{ATTRS:{disabled:{value:!1},usercontextid:{value:null},estream_url:{value:""},estream_path:{value:""},estream_height:{value:""},estream_width:{value:""}}})},"@VERSION@",{requires:["moodle-editor_atto-plugin"]});
