function code()
	{
		var res=document.getElementById("output").contentDocument;
		var editor_html = ace.edit("editor_html");
		var mycode_html= editor_html.session.getValue();
		var editor_css = ace.edit("editor_css");
		var mycode_css= editor_css.session.getValue();
		var editor_js = ace.edit("editor_js");
		var mycode_e= editor_js.session.getValue();
		
		res.open();
		var adding="<html><head><style>"+mycode_css+"</style></head>"+mycode_html+"</html>";
		
		console.log(adding);
		res.write(adding);
		res.write("<script>"+mycode_e+"</script>")
		res.close();
	
	}