// const { json } = require("express/lib/response");

// console.log("hello jagadsish");

// let student={
//     name:"jagadsish",
//     age:20,
//     rollno:55,
//     branch:"CSM",
//     course:"btech"
// };

// let jsonstring=JSON.stringify(student);
// console.log("JSON string:",jsonstring);

// let parseobj = JSON.parse(jsonstring);
// console.log("parsed object:",parseobj);

// //create a json structure for variable name books having 3 attributes title, author, price

// let book1 = {
//     Title : "Book1",
//     Author : "Author1",
//     Price : 100
// };

// let book2 = {
//     Title : "Book2",
//     Author : "Author2",
//     Price : 200
// };

// let book3 ={
//     Title : "Book3",
//     Author : "Author3",
//     Price : 300
// };

// let book4 = JSON.stringify(book1);
// console.log("JSON String:", book4);

// let book5 = JSON.stringify(book2);
// console.log("JSON String:", book5);

// let book6 = JSON.stringify(book3);
// console.log("JSON String:", book6);

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res =>res.json())
// .then(users =>{
//     let output = "<h3>user list</h3><ul>";
//     users.forEach(user => {
//         output+=`<li>${user.name}-${user.email}</li>`;
//     });
//     output+="</ul>";
//     document.body.innerHTML += output;
// });

//weather info fetcher project

console.log("=== Weather Info Fetcher ===");

//predefined city -> coordinates
const cityCoords = {
    "banglore": { lat: 12.9716, lon: 77.5946 },
    "mumbai": { lat: 19.0760, lon: 72.8777 },
    "delhi": { lat: 28.7041, lon: 77.1025 },
    "chennai": { lat: 13.0827, lon: 80.2707 },
    "kolkata": { lat: 22.5726, lon: 88.3639 },
    "london": { lat: 51.5074, lon: -0.1278 },
    "newyork": { lat: 40.7128, lon: -74.0060 }
};

//event listener for button click
document.getElementById("fetchWeatherBtn").addEventListener("click", () => {
    let city = document.getElementById("cityInput").value.toLowerCase();

    if(!cityCoords[city]){
        document.getElementById("weather").innerHTML = "<p>City not found in predefined list.</p>";
        return;
    }

    let coords = cityCoords[city];
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

    //ajax fetch
    fetch(url)
    .then(res => res.json())
    .then(data => {
        if(data.current_weather){
            document.getElementById("weather").innerHTML = `
                <h3>Weather in ${city}</h3>
                <p>Temperature: ${data.current_weather.temperature}°C</p>
                <p>Wind Speed: ${data.current_weather.windspeed} km/h</p>
                <p>Weather Code: ${data.current_weather.weathercode}</p>
            `;
        } else {
            document.getElementById("weather").innerHTML = "<p>Weather data not available.</p>";
        }       
    })
.catch(error => {
    console.error('Error fetching weather data:', error);
    document.getElementById("weather").innerHTML = "<p>Error fetching weather data.</p>";
}   
);
});