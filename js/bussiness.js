let bussiapi="http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b545a879c4ce41f68d8ef16563ec189d";


window.fetch(bussiapi)
.then(data =>{
    data.json().then(data =>{
    console.log(data);
    let info=data.articles;
   

    let out=[];
    for(xon of info){
        out+=`
        <div id=sportblock>
        <div id="imgs">
         <img src="${xon.urlToImage}" alt="">
         </div
         <h3>${xon.title}</h3>
        </div>
        `;

    }
    document.getElementById("template2").innerHTML=out;
}).catch(err => console.log(err))}).catch(err => console.log(err));