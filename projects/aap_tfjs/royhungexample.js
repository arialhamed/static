

function genHeadlines() {
    /**
    * Makes AJAX POST request to application server to generate news headlines 
    * @param {string} start_string - Starting text for RNN input
    */

    // Disable button and inputs
    button = document.getElementById("headlines-button");
    start_string_input = document.getElementById("start-string");
    button.innerHTML = "Generating Headlines ..."
    console.log(start_string_input.value);
    button.disabled = true;
    start_string_input.disabled = true;

    // Replace Headlines with loader
    headlines = document.getElementById("headlines");
    headlines.innerHTML = '<div class="loader"></div>';

    // Create an XMLHttpRequest for API call
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {

            var json_response = JSON.parse(this.response);
            console.log(json_response)

            // Remove loader and replace with headlines
            headlines.innerHTML = "<hr>";
            for (i=0; i < json_response.length; i++) {
                headlines.innerHTML += '<p class="headline">' + json_response[i] + '</p>';
            }
            headlines.innerHTML += "<hr>"


            // Re-enable buttons and input
            button.disabled = false;
            start_string_input.disabled = false;
            button.innerHTML = "Generate Headlines";
            return json_response
        }
    }
    xhttp.open('POST', '/sg-rnn-news/gen_headlines', true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.setRequestHeader('X-CSRFToken', getCookie('csrftoken'));
    data = JSON.stringify({
        "start_string":start_string_input.value,    
        "n_headlines":5,    
        })
    xhttp.send(data);
}

function show_word_cloud(elem) {

    // Display word cloud when category button is clicked

    // Hide current wordcloud
    currentImg = document.getElementsByClassName("current-wordcloud-img")[0];
    currentImg.style.display = "none";
    currentImg.classList.remove("current-wordcloud-img")

    // Show new wordcloud
    buttonId = elem.id;
    imageId = buttonId.replace("button-","");
    imageElem = document.getElementById(imageId);
    imageElem.style.display ="";
    imageElem.classList.add("current-wordcloud-img");
    
    // unHighlight current button 
    currentBtn = document.getElementsByClassName("button-wordcloud-cat-clicked")[0];
    currentBtn.classList.remove("button-wordcloud-cat-clicked");

    //Highlight new button
    elem.classList.add("button-wordcloud-cat-clicked");
}

function img_defer () {
  // Defer loading of images with attribute data-src
  var imgDefer = document.getElementsByTagName('img')
  for (var i = 0; i < imgDefer.length; i++) {
    if (imgDefer[i].getAttribute('data-src')) {
      imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'))
    }
  }
}

(function(){
    // Press Enter event handler for start-string text box
    document.getElementById("start-string")
        .addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                document.getElementById("headlines-button").click();
        }
    });

    // Add event listeners to news segments button
    cat_buttons = document.getElementsByClassName("button-wordcloud-cat");
    for (i=0; i < cat_buttons.length; i++) {
        cat_buttons[i].addEventListener(
            "click", function(event) {
                show_word_cloud(this);
            }
        )
    }

    window.onload=img_defer;

})();

