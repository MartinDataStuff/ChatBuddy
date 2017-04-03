$(document).ready(function () {
  var listOfAllUsers = document.getElementById('usersList');
  var toggleButton = document.getElementById('btn_toggleUsersList');

  setUpLoginAndRegistrationDiv();
  console.log("Document ready");
  function setUpLoginAndRegistrationDiv(){

    var toggled = true;

    //////Menu toggle login/registration button
    $("#toggle_Btn").click(function () {

      console.log("toggle button pressed")  //den når hertil

      $(listOfAllUsers).toggle(500);
      if (toggled) {
        toggleButton.innerHTML = "Toggle ON";
      }
      else {
        toggleButton.innerHTML = "Toggle OFF";
      }
      toggled = !toggled;
    });
  }

});
