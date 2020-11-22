// Scripts go here

//Function

function calculateTip() {
    // store input data
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;
    // validation
    if(billAmount === "" || serviceQuality == 0) {
       window.alert("I'm clever but not that clever Cheri.  Please enter an amount!");
       return;
    }

    if(numPeople === "" || numPeople <= 1) {
        numPeople =1;
        
        document.getElementById("each").style.display = "none";

    } else {

        document.getElementById("each").style.display ="block";
    
    }

        // calculate

        var total = (billAmount * serviceQuality) / numPeople;
        total = Math.round(total * 100) / 100;
        total = total.toFixed(2);

        // display the tip
        document.getElementById("totalTip").style.display ="block";
        document.getElementById("tip").innerHTML = total;



}

//  hide the tip amount on load
//document.getElementById("totalTip").style.display = "none";
//document.getElementById("each").style.display ="none";

// Function Call
document.getElementById("calculate").onclick = function() { calculateTip(); };

