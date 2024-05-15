"use strict";
window.onload = function () {

   // Set the govtChkbox's clicked event handler to the onGovtChkboxClicked function 
   let govtChkbox = document.getElementById("govtChkbox");
   govtChkbox.onclick = onGovtChkboxClicked;

   // other events handlers connected here
   let extraPerDay = 0;

   let tollTagChkbox = document.getElementById("tollTagChkbox");
   //determining whether the checkbox is checked using the Boolean checked property
   if (tollTagChkbox.checked) {
      extraPerDay += 3.95;
   }

   let gpsChkbox = document.getElementById("gpsChkbox");
   if (gpsChkbox.checked) {
      extraPerDay += 4.95;
   }

   let roadsideChkbox = document.getElementById("roadsideChkbox");
   if (roadsideChkbox.checked) {
      extraPerDay += 2.95;
   }

};

function onGovtChkboxClicked() {

   let govtChkbox = document.getElementById("govtChkbox");

   if (govtChkbox.checked) {
      // check the roadside assist checkbox
      let roadsideChkBox = document.getElementById("roadsideChkbox");
      roadsideChkBox.checked = true;
   }
}

