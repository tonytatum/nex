//Nexo - TAG

!function(e,i){if(!e.pixie){var n=e.pixie=function(e,i,a){n.actionQueue.push({action:e,actionValue:i,params:a})};n.actionQueue=[];var a=i.createElement("script");a.async=!0,a.src="//acdn.adnxs.com/dmp/up/pixie.js";var t=i.getElementsByTagName("head")[0];t.insertBefore(a,t.firstChild)}}(window,document);
pixie('init', '18d99fae-84d3-4d60-96b9-638fe9ca6f4f');
pixie('event', 'PageView');

createCybbaPixel("//secure.adnxs.com/px?id=1517565&t=2");

if(!!~window.location.href.indexOf("signup-verified")){
	window.cybOrderData = {
        	order_id: Date.now(),
        	value: "1"
	};
	createCybbaPixel("//secure.adnxs.com/px?id=1517564&order_id="+window.cybOrderData.order_id+"&value="+window.cybOrderData.value+"&other=[USD]&t=2");
	pixie('event', 'Lead');
	window._vteq = window._vteq || [];
	window._vteq.push({
	    confirmation: {
	        items: [],
	        orderId: window.cybOrderData.order_id,
	    	total: window.cybOrderData.value
		}
	});
}
if(document.querySelector("a[href*='play.google'],a[href*='apps.apple']")){
	document.querySelectorAll("a[href*='play.google'],a[href*='apps.apple']").forEach(function(element){
		element.addEventListener("mousedown",function(){
			createCybbaPixel("//secure.adnxs.com/px?id=1517630&t=2");
		});
	})
}

function createCybbaPixel(src){
    var input = document.createElement('img');
    input.setAttribute('src',src);
    input.setAttribute('width', 0);
    input.setAttribute('height', 0);
    input.setAttribute('alt', "");
    input.setAttribute('style', "display:none !important;");
    document.getElementsByTagName("body")[0].appendChild(input); 
}