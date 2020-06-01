let capi="https://api.covid19api.com/summary";

window.fetch(capi)
.then(data =>{
    data.json().then(data =>{
        console.log(data.Global.TotalConfirmed);
        let on=data.Global;
  
        document.getElementById("ccontainer").innerHTML=`
            <h4>NewConfirmed<br/><span class="badge badge-warning">${on.NewConfirmed}</span></h4>
            <h4>TotalConfirmed <br/><span class="badge badge-warning">${on.TotalConfirmed}</span></h4>
            <h4>NewDeaths<br/><span class="badge badge-danger">${on.NewDeaths}</span></h4>
            <h4>TotalDeaths<br/><span class="badge badge-danger">${on.TotalDeaths}</span></h4>
            <h4>NewRecovered<br/><span class="badge badge-success">${on.NewRecovered}</span></h4>
            <h4>TotalRecovered<br/><span class="badge badge-success">${on.TotalRecovered}</span></h4>
            `;
     
    }).catch(err => console.log(err))
}).catch(err => console.log(err))