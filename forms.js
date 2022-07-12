function validate(){
	var fn=document.getElementById('first').value;
	//alert(fn);
	if(fn.length<4 ){
		alert("invalid first name");
		return false;
	}
	else{
		//alert("valid");
		return vlname();
	}
}
function vlname(){
	var ln=document.getElementById("lname").value;
        //alert(ln);
        if(ln.length<4){
        	alert("invalid last name");
    	    return false;
    	}
    	else{
    		//alert("vaild last name")
    		return cname();
    	}
}	
function cname(){
	var cn=document.getElementById("cName").value;
	//alert(cn);
	if(cn=="India"){
		//alert("successfully  in India")

		return IPH();
	}
	if(cn=="usa"){
		//alert("successfully in USA");
		return UPH();


		;
	}
	return false;

}
function IPH(){
	//alert("phone");
	var cIph=document.getElementById("iph").value;
	var Iph=/\d{10}/;
		if(Iph.test(cIph)){
			//alert(cIph);
			return mail();
		}
		alert("invalid phone")
		return false;
}
function UPH(){
	//alert("usa phone");
	var cuph=document.getElementById("iph").value;
	//alert(cuph);
	var Uph=/\d{3}-\d{3}-\d{4}/;
	if(Uph.test(cuph)){
		alert(cuph);
		// alert("inside");
		return mail();
	}
	alert("invalid phone number");
	return false;
}
function mail(){
	var Mailid=document.getElementById("mailid").value;
	//alert(Mailid);
	var mailId=/[A-Za-z0-9_%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;
	if(mailId.test(Mailid)){
		//alert(Mailid);
		return Pwd();
	}
	else{
		alert("invaild mail id");
		return false;
	}
}
function Pwd(){
	var pawd=document.getElementById("pwd").value;
	//alert(pawd);
	var pass=/[0-9a-zA-Z]{8,20}/;
	if(pawd.length<8){
		//alert(pawd);
		alert("invalid password")
        return false;
	}
	 if(pass.test(pawd)){
		//alert("perfect password");
		return cbox();

	}
else{
	alert("password contain min 8 charaters");
	return false;
 }
 return false;
}
function cbox(){
	var cBox=document.getElementById("checkbox").value;
	//alert(cBox)
	if(cBox=="on"){
		//alert(cBox);
		//alert("policy");
		//return Dob();
	}
	else{
		alert("not agree terms");
		return false;
	}
	//alert("before dob");
	return Dob();
}
function Dob(){
	//lert("in dob");
	var DOB=document.getElementById("date").value;
	// alert("dob");
	alert(DOB);
	if(DOB=""){
		alert("please enter date of birth");
		return false;
	}
	else{
		return sub();
	}
}
function sub(){
	var Sub=document.getElementById('submit').value;
	alert("successfully register\n click back to go home page");
	return false;
}
