var main = (function () {

document.addEventListener("DOMContentLoaded",()=>{
	let toggle = document.getElementById("nav--toggle");
	toggle.addEventListener("click",()=>{
		toggle.classList.toggle("active");
	});
});

})();

