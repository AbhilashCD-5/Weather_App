async function weather_info(location){
    try{
        const response=await fetch(`https://api.weatherapi.com/v1/current.json?key=bdd7d33b617a4900b06134736250303&q=${location}`);
        const data=await response.json();
        console.log(data);
        let temperature=data.current.temp_c;
        let time=data.location.localtime;
        let date_part=time.split(" ")[0];
        let day=new Date(date_part).getDay();
        let condition=data.current.condition.text;
        let weather_image=data.current.condition.icon;
        let place=data.location.name;
        updateWebPage(temperature,place,time,day,weather_image,condition);        
    }
    catch(error){
        alert("Data for the requested location does not exist");
        console.log(error);
    }   
}

function updateWebPage(temperature,place,time,day,weather_image,condition){
    temp_h3.innerText=temperature;
    loc_h2.innerText=place;
    loc_p.innerText=time;
    loc_h4.innerText=days[day];
    det_p.innerText=condition;
    pic.src="https:"+weather_image;
}

const form_ele=document.querySelector('form');
const input_ele=document.querySelector('input');
const temp_h3=document.querySelector('#temperature');
const loc_h2=document.querySelector("#ooru");
const loc_p=document.querySelector('#thedi');
const loc_h4=document.querySelector('#vaaram');
const det_p=document.querySelector('#suchana');
const pic=document.querySelector('img');
const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];


form_ele.addEventListener('submit',function (e){
    e.preventDefault();
    let location=input_ele.value;
    weather_info(location);   
})




