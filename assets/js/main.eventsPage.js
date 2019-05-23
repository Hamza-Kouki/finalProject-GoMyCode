
		function loadAjax(){
			var username= document.getElementById("username").value;
			var email= document.getElementById("email").value;
			var topic= document.getElementById("topic").value;
			var comment= document.getElementById("comment").value;
			if(username.trim() =="" || email.trim()=="" || topic.trim() =="" || comment.trim()==""){
			alert("All fields are Required");
			return false;
			}

			
			var url="ajaxrequestPage.jsp?username="+username +"&email="+email+"&topic="+topic +"&comment="+comment;



			if(window.XMLHttpRequest){
				
				request = new XMLHttpRequest();
				
			}else if(window.ActiveXObject){
				
				request = new ActiveXObject("Microsoft.XMLHTTP");
			}			
			try{
				request.onreadystatechange=sendInfo;
				request.open("POST",url,true);
				request.send();
				
			}catch(e){
			document.write(e);
			}			
		}

		function sendInfo(){
			var p =		document.getElementById("print");

			if(request.readyState ==1){
				var text = request.responseText;
				p.innerHTML="Please Wait...";
				console.log("1");
			}

			if(request.readyState ==2){
				var text = request.responseText;
				console.log("2");				
			}
			if(request.readyState ==3){
				var text = request.responseText;
				console.log("3");				
			}
			if(request.readyState ==4){
				var text = request.responseText;
				p.innerHTML=" Your Comment has been Posted  "+text;
			}
		}