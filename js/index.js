

const dropDownList = document.querySelector("#location");


dropDownList.addEventListener("change",()=>{


    if(dropDownList.value!="")
    {
        const endPoint = `http://api.weatherstack.com/current?access_key=ff2cd1ba845a63a638aba86e0537d488&query=${dropDownList.value}`;


    
        fetch(endPoint)
        .then((response)=>{
    
            return response.json()
        })
        .then((data)=>{
    
            const  div = document.querySelector("#container");

            div.innerHTML= `The current Temperature of ${dropDownList.value} is ${data.current.temperature}`;
            div.innerHTML+=  `<br>Weather Description  : ${data.current.weather_descriptions[0]}`;
            div.innerHTML+=`<br> <img src="${data.current.weather_icons[0]}">`;
    //           
    
        })
        .catch((err)=>{
    
                console.log(`Error ${err}`);
    
        })
    
    }

    else
    {
      alert("You must select a location")
    }

  


});
