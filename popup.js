document.addEventListener("DOMContentLoaded", function() {
  var getCookiesBtn = document.getElementById("getCookiesBtn");
  var cookiesList = document.getElementById("cookiesList");
  console.log(cookiesList)
  getCookiesBtn.addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.cookies.getAll({ url: tabs[0].url }, function(cookies) {
        cookies.forEach(function(cookie) {
          var li = document.createElement("li");
          li.textContent = cookie.name + ": " + cookie.value;
          cookiesList.appendChild(li);
        });
      });
    });
  });
});
