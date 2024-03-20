function storeData() {
    let divHtml = document.getElementById('projects').innerHTML;

    localStorage.setItem('divContent', divHtml);
   
}

function retrieveData() {
    let storedDivHtml = localStorage.getItem('divContent');

    let div = document.getElementById('projects')
    
    div.innerHTML = storedDivHtml; 
}

export { storeData, retrieveData };