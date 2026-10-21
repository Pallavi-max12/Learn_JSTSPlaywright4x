let temp = 19;
let feel = (temp >= 40) ? "Too Hot 🔥" :
    (temp >= 30) ? "Hot 🌞" :
        (temp >= 20) ? "Pleasant 🌤️" :
            (temp >= 10) ? "Cool ❄️" : "Cold 🥶";

console.log("Temperature: ", temp, "°C — Feeling: ", feel);
