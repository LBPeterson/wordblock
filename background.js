//Global Things
brands = [];

function sync() {
  alert("syncing");
}

chrome.runtime.onMessage.addListener(function(request, sender, callback) {
    if (request.type == 'localStorage - step 4') {
        callback( some_method(request.name) );
    } else if (request.type == 'localStorage - step 5') {
        localStorage.setItem(request.name, request.value);
    }
});
