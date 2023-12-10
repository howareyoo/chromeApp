const searchBtn = document.getElementById("searchBtn");
const searchValue = document.getElementById("searchInput");



function onSearchSubmit(){
    const searchString = searchValue.value;
    const url = `https://www.google.com/search?q=${searchString}`;

    window.open(url);
    searchValue.value = "";

}


searchBtn.addEventListener("click", onSearchSubmit);
