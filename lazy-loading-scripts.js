function loadScript(url) {
  let isLoaded = document.querySelectorAll('.search-script');
  if (isLoaded.length > 0) {
    return;
  }
  let myScript = document.createElement('script');
  myScript.src = url;
  myScript.className = 'search-script';
  document.body.appendChild(myScript);
}

const searchInput = document.querySelector('.search__input');
searchInput.addEventListener('focus', event => {
  loadScript('/path/to/search-script.js');
};

