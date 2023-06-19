// // background.js (background script)

// // Retrieve cookies
// chrome.cookies.getAll({}, function(cookies) {
//     // Send cookies to the popup
//     chrome.runtime.sendMessage({ cookies: cookies }, function(response) {
//       // Handle the response from the popup if needed
//     });
//   });
  
chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason === "install") {
      console.log("Extension installed");
    } else if (details.reason === "update") {
      console.log("Extension updated");
    }
  });
  