"use strict";
// The industrial revolution and its consequences have been a disaster for the human race
for(let i=0; i<10; i++){
    console.log("THE FOG IS COMING\n");
}

const toolTip = () => {
    const shortcuts = document.getElementsByClassName("shortcut");
    for(let i=0; i<shortcuts.length; i++){
        shortcuts.addEventListener("mouseover", (e) => {
            const createDiv = document.createElement("div");
                //   createDiv.id = "divID";
                  createDiv.classList.add("shortcut-tooltip");
            e.createDiv.innerHTML = socialData[i].name;
        })
    }
}
// toolTip();

//horizontal scrollwheel for chips
const horizontalScroll = () => {
    const scrollContainer = document.getElementById("chipCont");
    const button = document.getElementById('button-nxt');

    scrollContainer.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });
    button.onclick = () => {
        scrollContainer.scrollLeft += 30;
        
    };
    
    return(0);
};

const toggleHeader = () => {
    const header = document.getElementById("header");
    const settings = document.getElementById("settings");

    settings.addEventListener("click", function(){
        if(header.style.display !== "flex"){
            header.style.display = "flex";
        }else{
            header.style.display = "none";
        }
    });

    return(0);
}

//greetings
const greetings = () => {
    const greet = document.getElementById('greet');
    const greetIcon = document.getElementById('greet-icon');
    let hour = new Date().getHours();
    const greetings = [
        "Morning", 
        "Afternoon", 
        "Evening",
        "Night"
    ];
    const icon = [
        "/assets/svg/ui/sunny.svg",
        "/assets/svg/ui/sunset_sunrise.svg",
        "/assets/svg/ui/clear_night.svg"
    ]

    let greetingstxt = ""; let greetingsIcon = "";
    
    // setting the text
    switch(true){
        case(hour<12):{
            greetingstxt = greetings[0];
            break;
        }
        case(hour<17):{
            greetingstxt = greetings[1];
            break;
        }
        case(hour<20):{
            greetingstxt = greetings[2];
            break;
        }
        case(hour<24 || hour<5):{
            greetingstxt = greetings[3];
            break;
        }
    }

    // sets the time icons
    switch(true){
        case(hour<16):{
            greetingsIcon = icon[0];
            break;
        }
        case(hour<18 || hour<7):{
            greetingsIcon = icon[1];
            break;
        }
        case(hour<24 || hour<4):{
            greetingsIcon = icon[2];
            break;
        }
        default:
            console.log("Could not aquire time!");
    }

    greet.innerHTML = greetingstxt;
    greetIcon.src = greetingsIcon;

    return(0);
}

// sets shortcut icons
const shortcutIcon = () => {
    const ICON_LEN = 10;
    for(let i=0; i < ICON_LEN; i++){
        social[i].src = socialData[i].ico;
        socialLink[i].href = socialData[i].link;

        music[i].src = musicData[i].ico;
        musicLink[i].href = musicData[i].link;

        code[i].src = codeData[i].ico;
        codeLink[i].href = codeData[i].link;

        google[i].src = googleData[i].ico;
        googleLink[i].href = googleData[i].link;

        util[i].src = utilData[i].ico;
        utilLink[i].href = utilData[i].link;

        shop[i].src = shopData[i].ico;
        shopLink[i].href = shopData[i].link;

        fun[i].src = funData[i].ico;
        funLink[i].href = funData[i].link;
    }

    return(0);
}

// 24hr clock
// sigma male military time grindset
const clock = () => {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    // Sets AM and PM
    // let session = "AM";
    // if(hh > 12){
    //     session = "PM";
    // }
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let hrsMs = hh + ":" + mm;

    document.getElementById("hours").innerText = hrsMs;
    document.getElementById("seconds").innerText = ss;

    let t = setTimeout(() =>{ clock(); }, 1000);

    return(0);
};

// weather
// Report: Your mom gets wetter than the amazon rainforests when she sees me
const weather = () => {
    const link = "https://api.openweathermap.org/data/2.5/weather?q=Kolkata,IN&appid=93b3a46ee9acfdecfb74f4a2a2abede6";
    const request = new XMLHttpRequest();

    request.open('GET',link,true);
    request.onload = function(){
        const obj = JSON.parse(this.response);
        let main = obj.weather[0].main;
        let desc = obj.weather[0].description;
        let id = obj.weather[0].id;
        let hh = new Date().getHours();
        const weaIco = document.getElementById('weatherIcon');

        const icon = [
            "/assets/svg/ui/thunderstorm.svg",
            "/assets/svg/ui/rainy.svg",
            "/assets/svg/ui/snowing.svg",
            "/assets/svg/ui/water.svg",
            "/assets/svg/ui/tornado.svg",
            "/assets/svg/ui/sunny.svg",
            "/assets/svg/ui/cloudy.svg",
            "/assets/svg/ui/partly_cloudy_day.svg",
            "/assets/svg/ui/partly_cloudy_night.svg",
            "/assets/svg/ui/clear_night.svg"
        ];
        console.log(obj);
        document.getElementById('temp').innerHTML = Math.round(obj.main.temp - 273.15) + "<sup>°</sup>" + "C";
        document.getElementById('weather').innerHTML = "&nbsp" + desc;
        // document.getElementById('humidity').innerHTML = Math.round(obj.main.humidity) + "&nbsp" + "%";
          
        switch(true){
            case(main === "Thunderstorm"):{
                weaIco.src = icon[0];
                break;
            }
            case(main === "Drizzle" || main === "Rain"):{
                weaIco.src = icon[1];
                break;
            }
            case(main === "Snow"):{
                weaIco.src = icon[2];
                break;
            }
            case(main === "Mist" ||
                 main === "Smoke" ||
                 main === "Haze" ||
                 main === "Dust" ||
                 main === "Fogs" ||
                 main === "Sand" ||
                 main === "Ash" ||
                 main === "Squall"):{
                weaIco.src = icon[3];
                break;
            }
            case(main === "Tornado"):{
                weaIco.src = icon[4];
                break;
            }
            case(main === "Clear"):{
                weaIco.src = icon[5];
                break;
            }
            case(main === "Clouds"):{
                if (hh < 18) {
                    weaIco.src = icon[6];
                }else 
                    if (hh < 24 || hh < 5){
                        weaIco.src = icon[8];
                    }else 
                        if (id === 801 || id === 802){
                            weaIco.src = icon[7];
                        }
                break;
            }
        }
    
    }

    if(request.status==200){
        console.log("WEATHER ERROR");
    }
    request.send();
    


    return(0);
};

const rightClickMenu = () => {
    let i=0;
    const shortcut = document.getElementsByClassName('shortcut');
    // const menu = document.getElementsByClassName('custom-menu-cont');
    for(i=0; i<shortcut.length; i++){
        shortcut[i].addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    }
    return(0);
};

const dragAndDrop = () => {
    const draggables = document.querySelectorAll('.shortcut');
    const containers = document.querySelectorAll('.shortcut-cont');
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () =>{
            draggable.classList.add('dragging');
        });
        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
        });
    });

    containers.forEach(container => {
        container.addEventListener('dragover', (e) => {
            e.preventDefault();
            const afterElement = getDragAfterElement(container, e.clientY);
            const draggable = document.querySelector('.dragging');

            if(afterElement == null){
                container.appendChild(draggable);
            } else {
                container.insertBefore(draggable, afterElement);
            }
        });
    });

    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]
      
        return draggableElements.reduce((closest, child) => {
          const box = child.getBoundingClientRect()
          const offset = y - box.top - box.height / 2
          if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }
          } else {
            return closest
          }
        }, { offset: Number.NEGATIVE_INFINITY }).element
    };
};

const utility = () => {
    const modal = document.getElementById("modal");
    const profile = document.getElementById("profile-cont");
    const books = document.getElementById("books-cont");


    document.addEventListener("click", (e) => {
        modal.style.display = "flex"
        switch(true){
            case(e.target.id === "profileOpen"):{
                profile.style.display = "block";
                break;
            }
            case(e.target.id === "bookOpen"):{
                books.style.display = "block";
                break;
            }
            case(e.target.id === "profileClose" || e.target.id === "booksClose"):{
                profile.style.display = "none";
                books.style.display = "none";
                modal.style.display = "none";
                break;
            }
        }
    }, false);
}

const birthdayReminder = () => {
    const birthdays = [
        {
            name: "Aniket Chanda",
            birthday: "11-01"
        }
    ]
}
birthdayReminder();

    
// dragAndDrop();
// toggleHeader();
// horizontalScroll();
greetings();
shortcutIcon();
clock();
weather();
// rightClickMenu()


//TODO: FIX THIS ASAP RETARD 🤫
// utility();
