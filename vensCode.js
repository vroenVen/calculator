init()

function init(){
	hideCopyBool = false

}
function copyInput(type=""){
	var copyied = document.getElementById("input").value
	if (type=="cut"){
		document.getElementById("input").value = ""
	} 
	if (type=="paste") {
		pasteTxt = navigator.clipboard.readText()
		document.getElementById("input").value = pasteTxt
	}
	
	copy(copyied)
}

function copyAnswer(input){
	copy(input)
}

function copy(input){
	navigator.clipboard.writeText(input)
	console.log("copied "+input+" to clipboard")
}

function clearInput(){
	document.getElementById("input").value = ""
}

async function paste(input) {
  const text = await navigator.clipboard.readText();
  input.value = text;
}


function showHideCopy(){
	var showHideCopyHTML = document.getElementById("showHideCopy")
	/*
	hideCopyBool
	true = hide Copy buttons & set button text to show
	false = show Copy buttons & set button text to hide
	*/
	if(showHideCopyHTML.innerHTML == "Show"){
		hideCopyBool = false
		
	} else if(showHideCopyHTML.innerHTML == "Hide"){
		hideCopyBool = true
	} else {
		//catches if button changed text in some other way
		console.log("ShowHideCopy Button Text changed Why did you do that")
		showHideCopyHTML.innerHTML
		hideCopyBool = true
	}
	if (hideCopyBool == true){
		showHideCopyHTML.innerHTML = "Show"
	} else {
		showHideCopyHTML.innerHTML = "Hide"
	}
	//refresh screen so that the changes get shown
	calque.repaint()
}


