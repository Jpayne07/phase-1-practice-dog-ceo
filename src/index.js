console.log('%c HI', 'color: firebrick')


document.addEventListener("DOMContentLoaded", () =>{
  imageLoad();  
  breedFilter();
})
    
function imageLoad() {
        const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
        fetch(imgUrl)
            .then(response => response.json())
            .then(results =>{
                results.message.forEach(image =>addImage(image))
            })
}
function addImage(dogUrl){
    let container = document.querySelector("#dog-image-container");
    let imgTag = document.createElement('img')
    imgTag.src = dogUrl
    container.appendChild(imgTag);
    }

    function breedFilter() {
        fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => response.json())
        .then(results =>{
            breeds = Object.keys(results.message);
            updatedBreedsList(breeds)
            breedSelector()
        })

    }

    function updatedBreedsList(breeds){
        let ul = document.querySelector('#dog-breeds')
        removeChildren(ul)
        breeds.forEach(breed => addBreed(breed));
    }
    
    function removeChildren(element) {
        let child = element.lastElementChild;
        while (child) {
          element.removeChild(child);
          child = element.lastElementChild;
        }
      }
      function selectBreedsStartingWith(letter) {
        updatedBreedsList(breeds.filter(breed => breed.startsWith(letter)));
      }

      function breedSelector(){
        let breedSelectors = document.querySelector("#breed-dropdown")
        breedSelectors.addEventListener("change", function (event) {
            selectBreedsStartingWith(event.target.value)
        })
      }


      function addBreed(breed){
        let ul = document.querySelector("#dog-breeds")
        let li = document.createElement("li")
        li.innerText = breed
        li.style.cursor = 'pointer';
        ul.appendChild(li);
        li.addEventListener('click', updateColor);
      }

      function updateColor(event) {
        event.target.style.color = 'red';
      }
      
      
      