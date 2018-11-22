const search = document.querySelector("#search");
const input = document.querySelector("#input");
search.addEventListener("click", function (event) {
  event.preventDefault();
  clearResult();
  const api = "https://api.giphy.com/v1/gifs/search";
  const query = `?q=${input.value}`;
  const apiKey = "&api_key=4UWiNk7a6ATkezNjgRLMEh7SqaPgzhwY&limit=3";
  const newApi = api + query + apiKey;

  async function getGif() {
    let response = await fetch(newApi);
    if (response.status == 200) {
      let json = await response.json();
      for (let i = 0; i < json.data.length; i++) {
        console.log(json.data[i].images.fixed_width.url);
        // const img = document.createElement("img");
        let img = document.createElement("img");
        img.src = json.data[i].images.original.url;
        let li = document.querySelector("#imagesection");
        //let li = document.createElement("li");

        li.appendChild(img);

      }

    }


  }

  function clearResult() {
    const resultDiv = document.querySelector('#imagesection');
    resultDiv.innerHTML = '';
  };

  getGif();

});