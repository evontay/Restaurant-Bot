$(document).ready(function() {
	console.log("Order system ready");
});

$('button').on('click', function(event){
	console.log("New order begins");
	// order();


//==== Order Flow ====//
var guestName = prompt("Sawadeeka! May I have your name, please?");
var tableFor = prompt(("Hi ") + guestName + (", how many guest?"));

var gOrder = [];
for(var i = 0; i < tableFor; i++) {
    	gOrder.push(prompt("What would you like to order? Please type 'Set A', 'Set B' or 'Set C'."));
	}

var numSetA = 0;
var numSetB = 0;
var numSetC = 0;
for(var i = 0; i < gOrder.length; i++) {
		if(gOrder[i] === "Set A") {
		numSetA += 1;
		} else if(gOrder[i] === "Set B") {
			numSetB += 1;
		} else if(gOrder[i] === "Set C") {
			numSetC += 1;
		} else { 
			alert("Invalid order. Please type 'Set A', 'Set B' or 'Set C'.");
			location.reload();
		}
	}

var sayOrder = console.log("Set A:" + numSetA + "." + " Set B:" + numSetB + "." + " Set C:" + numSetC + "."); 
alert("Your order is Set A:" + numSetA + "." + " Set B:" + numSetB + "." + " Set C:" + numSetC + ".");

var subTotal = (numSetA * 10) + (numSetB * 12) + (numSetC * 15);

var gstTip = 0.1;

var bill = (subTotal * gstTip + subTotal).toFixed(2);

var sayBill = console.log("Kob khun ka! Your bill is $" + bill + " (10% gst included) Take a seat, your food is arriving shortly."); alert("Kob khun ka! Your bill is $" + bill + " (10% gst included). Please take a seat, your food is arriving shortly.");

});