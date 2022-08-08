//------------------------------------------
// Invision Power Board v2.0
// Topics JS File
// (c) 2003 Invision Power Services, Inc.
//
// http://www.invisionboard.com
//------------------------------------------

//==========================================
// Link to a post
//==========================================

function link_to_post(pid)
{
	temp = prompt( ipb_lang_tt_prompt, ipb_var_base_url + "showtopic=" + ipb_input_t + "&view=findpost&p=" + pid );
	return false;
}

//==========================================
// Delete post
//==========================================

function delete_post(theURL)
{
	if (confirm( ipb_lang_js_del_1 ))
	{
		window.location.href=theURL;
	}
	else
	{
		alert ( ipb_lang_js_del_2 );
	} 
}

//==========================================
// Multi quote
//==========================================

function multiquote_add(id)
{
	saved = new Array();
	clean = new Array();
	add   = 1;
	
	//-----------------------------------
	// Get any saved info
	//-----------------------------------
	
	if ( tmp = my_getcookie('mqtids') )
	{
		saved = tmp.split(",");
	}
	
	//-----------------------------------
	// Remove bit if exists
	//-----------------------------------
	
	for( i = 0 ; i < saved.length; i++ )
	{
		if ( saved[i] != "" )
		{
			if ( saved[i] == id )
			{
				 add = 0;
			}
			else
			{
				clean[clean.length] = saved[i];
			}
		}
	}
	
	//-----------------------------------
	// Add?
	//-----------------------------------
	
	if ( add )
	{
		clean[ clean.length ] = id;
		eval("document.mad_"+id+".src=removequotebutton");
	}
	else
	{
		eval(" document.mad_"+id+".src=addquotebutton");
	}
	
	my_setcookie( 'mqtids', clean.join(','), 0 );
	
	return false;
}

//==========================================
// Check delete
//==========================================

function checkdelete()
{
	if ( ! document.modform.selectedpids.value )
	{
		return false;
	}
	
	isDelete = document.modform.tact.options[document.modform.tact.selectedIndex].value;
	
	if (isDelete == 'delete')
	{
		formCheck = confirm( lang_suredelete );
		
		if (formCheck == true)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
}


//==========================================
// Toggle selection
//==========================================

function topic_toggle_pid( pid )
{
	//-----------------------------------
	// Got a number?
	//-----------------------------------
	
	if ( isNaN( pid ) )
	{
		return false;
	}
	
	saved = new Array();
	clean = new Array();
	add   = 1;
	
	//-----------------------------------
	// Get form info
	//-----------------------------------
	
	tmp = document.modform.selectedpids.value;
	
	saved = tmp.split(",");
	
	//-----------------------------------
	// Remove bit if exists
	//-----------------------------------
	
	for( i = 0 ; i < saved.length; i++ )
	{
		if ( saved[i] != "" )
		{
			if ( saved[i] == pid )
			{
				 add = 0;
			}
			else
			{
				clean[clean.length] = saved[i];
			}
		}
	}
	
	//-----------------------------------
	// Add?
	//-----------------------------------
	
	if ( add )
	{
		clean[ clean.length ] = pid;
		eval("document.img"+pid+".src=selectedbutton");
	}
	else
	{
		eval(" document.img"+pid+".src=unselectedbutton");
	}
	
	newvalue = clean.join(',');
	
	my_setcookie( 'modpids', newvalue, 0 );
	
	document.modform.selectedpids.value = newvalue;
	
	newcount = stacksize(clean);
	
	document.modform.gobutton.value = lang_gobutton + ' (' + newcount + ')';
	
	return false;
}

function ins(name){
	var input=document.REPLIER.Post;
	input.value=input.value+"[b]"+name+"[/b],"+" \n";
	}

	function Insert(text){
	if (text!="") paste("[quote]"+text+"[/quote]\n", 0);
	}

	function paste(text, flag){
	if ((document.selection)&&(flag)) {
		document.REPLIER.Post.focus();
		document.REPLIER.document.selection.createRange().text = text;
	} else document.REPLIER.Post.value += text;
	}

	function get_selection() {
	   if (document.getSelection){
		selection = document.getSelection();
		selection = selection.replace(/\r\n\r\n/gi, "_doublecaret_");
		selection = selection.replace(/\r\n/gi, " ");
		   while (selection.indexOf("  ") !=-1) selection = selection.replace(/  /gi, "");
		selection = selection.replace(/_doublecaret_/gi, "\r\n\r\n");
	  } else
		  selection = document.selection.createRange().text;
	}

	function copyQ() {
	txt=''
	if (document.getSelection) {txt=document.getSelection()}
	else if (document.selection) {txt=document.selection.createRange().text;}
	txt='[quote]'+txt+'[/quote]\n'
	}


	function pasteQ(){if(document.REPLIER.Post)document.REPLIER.Post.value += txt}