let insertJoke = document.getElementById("joke");
let insertGif = document.getElementById("gif");
let resultGif = document.getElementById("insertGif");
let insertSecondGif = document.getElementById("secondGif");
let secondResultGif = document.get;

function joke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data.value);
      insertJoke.innerHTML = data.value;
    });
}
insertSecondGif.addEventListener("click", function() {
  $.ajax({
    url:
      "https://api.giphy.com/v1/gifs/random?api_key=sy21l1iRVeVEYri7QiLBfg5KuJ7RLN5x",
    method: "GET",
    success: function(result) {
      console.log(result);
      console.log(result.data.image_url);

      let secondimg = document.getElementById("newgiftwo");
      secondimg.setAttribute("src", result.data.image_url);
    },
    error: function(error) {
      console.log(`Error: ${error}`);
    }
  });
});

insertGif.addEventListener("click", function() {
  $.ajax({
    url:
      "https://api.giphy.com/v1/gifs/random?api_key=sy21l1iRVeVEYri7QiLBfg5KuJ7RLN5x&tag=&rating=G",
    method: "GET",
    success: function(result) {
      console.log(result);
      console.log(result.data.image_url);

      //   let img = document.createElement("img");
      let img = document.getElementById("newgif");
      img.setAttribute("src", result.data.image_url);
      //   resultGif.appendChild(img);
    },
    error: function(error) {
      console.log(`Error: ${error}`);
    }
  });
});
