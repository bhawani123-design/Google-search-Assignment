
async function fetchSearchResult() {
    let query = document.getElementById("search").value;
    if (query.length <= 1) {
        return false;
    }
    let res = await fetch(`http://api.serpstack.com/search?access_key=1c0e0f53dc52fa458f5920296a3453ff&query=${query}`)
    
    let data = await res.json();
    console.log('data:', data.organic_results)

    return data.organic_results;
}

let main_div = document.getElementById('content');
async function appendResults() {
    let d = await fetchSearchResult()
    main_div.innerHTML = null;
    d.forEach(({ title, displayed_url }) => {
        // let subD = document.createElement('div');
        // subD.setAttribute('id','subD')
        let p_title = document.createElement('p');
        let a_url = document.createElement('a');
        a_url.href = displayed_url
        a_url.target = "_blank"
        // let p_url = document.createElement('p');
        p_title.innerHTML = `<h2>${title}</h2>`
        a_url.innerHTML = displayed_url;
       
        // subD.append();
        main_div.append(p_title, a_url)

    })
}


// let timerId;
function throttleFunction() {

    appendResults();

    // if (timerId) {
    //     return false;
    // }
    
    // timerId = setTimeout(() => {
    //     appendResults()
    //     timerId = undefined;
    // }, 2000)
    
}






// let main_div = document.getElementById('content');
// let sugDiv = document.getElementById("suggestion");

// async function appendResults() {
//     let d = await fetchSearchResult();
//     sugDiv.innerHTML = null;
//     let inDiv = document.createElement("div");
//     d.forEach(({ title, displayed_url }) => {
//         let p_temp = document.createElement('p');
//         p_temp.innerHTML = title;
//         p_temp.addEventListener('click', () => {
//             endDisplay(title, d)
//         })
//         inDiv.append(p_temp);
//     })
//     sugDiv.append(inDiv);
// }



// function endDisplay(titl, de) {
//     de.forEach(({ title, displayed_url }) => {
//         if (title == titl) {
//             let subD = document.createElement('div');
//             subD.setAttribute('id','subD')
//             let p_title = document.createElement('p');
//             let p_url = document.createElement('p');
//             p_title.innerHTML = `<h2>${title}</h2>`
//             p_url.innerHTML = `${displayed_url}`;
//             subD.append(p_title, p_url);
//             main_div.append(subD);
//         }
        
//     })
// }
// let timerId;
// function throttleFunction() {

//     if (timerId) {
//         return false;
//     }
    
//     timerId = setTimeout(() => {
//         appendResults()
//         timerId = undefined;
//     }, 2000)
    
// }

