// Disable left-click, like most clicker games

document.addEventListener("contextmenu", function(e){
  // Stop the context menu from popping up
  // Later I should add a custom left-click menu
    e.preventDefault();
    e.stopPropagation();
    // Right-click whatever the user left-clicked
    e.target.click();
}, false);





// jQuery:

/*
$(document).on("contextmenu", function(e){
    e.preventDefault();
    e.target.click();
});
*/
