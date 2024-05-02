const button = document.getElementById("searchButton");
const input = document.getElementById("searchInput");
const imagesconatiner = document.querySelector(".image-gallery");
let keyword = "";
let page = 1;
const accessKey = "MAftuosAXM8Iptkok97kgK1taT0minGVt9fimYkGt9I";
button.addEventListener("click", async () => {
  keyword = input.value;
  let response = await fetch(
    `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`
  );
  let data = await response.json();
  console.log(data.results);
  imagesconatiner.innerHTML = ''

  data.results.map((d)=>{
    imagesconatiner.innerHTML +=    ` 
      <div class="card">
                <img src=${d.urls.small} alt="Placeholder Image">
                
      </div>`;
      
  })

});
