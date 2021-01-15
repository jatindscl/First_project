
function func() {
	// body...
	var x=document.getElementById("name").value;
	if(x.length==0){
		alert("Enter your name pls");
	}
	else{
	var msg="HELLO "+x+", Welcome to this Responsive Website!";
	alert(msg);
	document.querySelector("#start").scrollIntoView({
		behavior: "smooth"
	});
	
	}

}

function setnew1() {
	// body...
	document.getElementById("del").src="delcm.jpg";
}
function setold1() {
	// body...
	document.getElementById("del").src="delhi.jpg";
}

function setnew2() {
	// body...
	document.getElementById("agr").src="agracm.jpg";
}
function setold2() {
	// body...
	document.getElementById("agr").src="agra.jpg";
}

function setnew3() {
	// body...
	document.getElementById("utt").src="uttracm.jpg";
}
function setold3() {
	// body...
	document.getElementById("utt").src="uttrakhand.jfif";
}

function setnew4() {
	// body...
	document.getElementById("hyd").src="hydracm.jpg";
}
function setold4() {
	// body...
	document.getElementById("hyd").src="hydrabad.jfif";
}

function setnew5() {
	// body...
	document.getElementById("guj").src="gujcm.jpg";
}
function setold5() {
	// body...
	document.getElementById("guj").src="sou.jfif";
}

function setnew6() {
	// body...
	document.getElementById("mum").src="mumcm.jpg";
}
function setold6() {
	// body...
	document.getElementById("mum").src="mumbai.webp";
}

function setnew7() {
	// body...
	document.getElementById("qut").src="delcm2.jpg";
}
function setold7() {
	// body...
	document.getElementById("qut").src="qb.jfif";
}

function setnew8() {
	// body...
	document.getElementById("ker").src="kercm.jpg";
}
function setold8() {
	// body...
	document.getElementById("ker").src="kerela.jpg";
}
function scr_top(){
	window.scroll({
		top: 0,
		left: 0,
		behavior: "smooth"
	});
};
function scr_to_ele(){
	document.querySelector("#content1").scrollIntoView({
		behavior: "smooth"
	});
};
function setmodi(){
	document.getElementById("ha").src="modi.jpg";
}
function remmodi(){
	document.getElementById("ha").src="blue.jfif";
}

function ss() {
	console.log("You have clicked a button.");
	const xhr = new XMLHttpRequest();
	xhr.open("GET","ajax.txt",true)
	xhr.onprogress = function(){
        console.log('On progress');
    }

    xhr.onload = function () {
        if(this.status === 200){

            console.log(this.responseText)
            document.getElementById("last_div").innerHTML=this.responseText;
        }
        else{
            console.log("Some error occured")
        }
    }
    xhr.send();

}
function s2(){
	var temp=document.getElementById("last_div");
	
		temp.style.display="block";
	
}
var glob="<li>This is just the sample text(On mouse hover) of this button.<br><li>Notice the updated text (After clicking) WITHOUT REFRESHING.<br><li>Live from the server."
function s3(){
	var temp=document.getElementById("last_div");
	
		temp.style.display="none";
		document.getElementById("last_div").innerHTML=glob;
}