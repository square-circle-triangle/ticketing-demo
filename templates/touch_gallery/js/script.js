var myScroll;
function loaded() {
	setTimeout(function () {
		myScroll = new iScroll('wrapper',{
			snap     : true,
			vScroll  : false,
			momentum : false
		});
	}, 100);
}
function addHash(){
	window.location.hash = "active";
}
window.addEventListener('load', loaded, false);
window.addEventListener('touchstart', addHash, false);