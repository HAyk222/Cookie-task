var radioes = document.querySelectorAll("input[type='radio']")
for(var i=0; i < radioes.length; i++) {
	radioes[i].onclick = function(){
		document.getElementById("gender").value=this.dataset.type
	}
}

document.getElementById("checkbox").onclick = function() {
	document.getElementById("agree").value = this.checked ? true : false
}