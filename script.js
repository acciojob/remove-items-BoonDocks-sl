//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  // Get the necessary elements
  var colorSelect = document.getElementById("colorSelect");
  var button = document.querySelector("input[type='button']");

  // Add event listener to the button
  button.addEventListener("click", function() {
    // Get the selected option
    var selectedOption = colorSelect.options[colorSelect.selectedIndex];

    // Remove the selected option from the dropdown
    colorSelect.removeChild(selectedOption);
  });
});
