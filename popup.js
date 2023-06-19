document.addEventListener("DOMContentLoaded", function () {
  var getCookiesBtn = document.getElementById("getCookiesBtn");
  var cookiesList = document.getElementById("cookiesList");

  var auth_token = null;

  getCookiesBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.cookies.getAll({ url: tabs[0].url }, function (cookies) {
        
        cookies.forEach(function (cookie) {

          if (cookie.name === "__Secure-next-auth.session-token") {
            auth_token = cookie.value; // Saving the matching cookie in the variable
            console.log(cookie); // Logging the matching cookie object
          }

          var li = document.createElement("li");
          li.textContent = cookie.name + ": " + cookie.value;
          cookiesList.appendChild(li);
        });
      });
    });
  });

  var searchBtn = document.getElementById("searchBtn");
  searchBtn.addEventListener("click", function() {
    var searchKeyword = document.getElementById("searchInput").value;
    console.log(auth_token);
    fetch("https://chat.openai.com/backend-api/conversations?offset=0&limit=28&order=updated" + encodeURIComponent(searchKeyword), {
      headers: {
        'Authorization': 'Bearer'+auth_token
        
      }
    })
      .then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(function(data) {
        // Process the API response
        console.log(data);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
  
});
