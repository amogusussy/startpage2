function bg(){
    var list = [
    "board.png",
    "cabin.png",
    "classroom.jpg",
    "comfy-room.jpg",
    "forest2.jpg",
    "forest-hut.png",
    "forest.jpg",
    "future-town.jpg",
    "house.jpg",
    "houseonthesideofalake.jpg",
    "hut.jpg",
    "lantern.jpg",
    "leaves3.jpg",
    "platform.jpg",
    "rails.jpg",
    "road.jpg",
    "staircase.jpg",
    "stairs.jpg",
    "town.jpg",
    "wallhaven-0p6g59_1920x1080.png",
    "wallhaven-3kvj23_1920x1080.png",
    "wallhaven-r77pqj_1920x1080.png",
    "wallhaven-y8gkv7_2560x1440.png"];
    let image = list[Math.floor(Math.random()*list.length)];
    document.documentElement.style.setProperty('--image', 'url(images/'+ image + ")");
}

function colours()
{
    let colours = ["#98971a", "#d79921", "#458588", "#b16286", "#689d6a", "#a89984"]
    let colour = colours[Math.floor(Math.random()*colours.length)];
    document.documentElement.style.setProperty("--border", colour);
}

function delay(time) 
{
    return new Promise(resolve => setTimeout(resolve, time));
}

async function time() 
{
    while (true){
        const today = new Date();
        let hour = checkTime(today.getHours());
        let minute = checkTime(today.getMinutes());
        let second = checkTime(today.getSeconds());
        let time = hour + ":" + minute + ":" +second;
        document.getElementById("time").innerHTML = time;
        await delay(1000);
    }
}

function checkTime(i) 
{
    if (i < 10) {i = "0" + i};
    return i;
}

function date()
{
    const today = new Date();
    let months = [
    "January","February","March",
    "April",  "May",     "June",
    "July",   "August",  "September",
    "October","November","December"
    ]

    let year = today.getFullYear();
    let day = today.getUTCDate();
    let month = months[today.getMonth()];
    let fullDate = day + " " + month + " " + year;
    return document.getElementById("date").innerHTML = fullDate;
}

function changeEngine(val) {
    let engines = {
        "google": ["google.com/search", "Search Google..."],
        "duckduckgo": ["duckduckgo.com", "Search DuckDuckGo..."],
        "searx": ["serx.ml", "Searx..."],
        "librex": ["librex.beparanoid.de/search.php", "Search Librex..."]
    } 
    let messages = {
        "google": "Search Google...",
        "duckduckgo": "Search DuckDuckGo...",
        "searx": "Searx...",
        "librex": "Search Librex..."
    }
    engine = engines[val][0];
    message = engines[val][1];
    document.getElementById("action").action = "https://" + engine;
    document.getElementById("bar").placeholder = message;
}

function weatherBalloon( cityID ) {
    var key = '4d8fb5b93d4af21d66a2948710284366';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
    .then(function(resp) { return resp.json() })
    .then(function(data) {
        let celcius = Math.round(parseFloat(data.main.temp)-273.15);
        document.getElementById('description').innerHTML = data.weather[0].description;
        document.getElementById('temp').innerHTML = celcius + '&deg;';
        document.getElementById('location').innerHTML = data.name;
    });
}

function main()
{
    time();
    date();
    bg();
    colours();
    weatherBalloon("YOUR CITY ID HERE");
}
