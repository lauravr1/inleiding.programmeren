// stage of plant used to calculate the amount of profit
var growstage = 1;
// player cash
var money = 0;
// stores the amount of times you watered/feeded/enlightened
var waterCount = 0;
var feedCount = 0;
var enlightenCount = 0;
var plants = ["steve"];

function init() {
    document.getElementById("feed").addEventListener("click", function() {
        updateImage("Feed")
    });
    document.getElementById("water").addEventListener("click", function() {
        updateImage("Water")
    });
    document.getElementById("enlighten").addEventListener("click", function() {
        updateImage("Enlighten")
    });

    document.getElementById("snip").addEventListener("click", function() {
        snip()
    });
    document.getElementById("addplant").addEventListener("click", function() {
        addPlant()
    });
}



// document.getElementById("feed").onclick = updateImage("Feed")

function updateImage(button) {
    //what button was pressed and is counted 
    if (button == "Water") {
        waterCount++;
        var src = "audio/water-droplet-drip.mp3"
        var audio = new Audio(src);
        audio.play();
    } else if (button == "Feed") {
        feedCount++;
        var src = "audio/minecraft.villager.mp3"
        var audio = new Audio(src);
        audio.play();
    } else if (button == "Enlighten") {
        enlightenCount++;
        var src = "audio/enlighten.mov"
        var audio = new Audio(src);
        audio.play();
    }
    // create imageurl for htmlelement steve
    var imgurl = "img/plant/plant" + growstage + ".png";
    // dont go past the images we made image6 and such
    if (growstage < 5) {
        growstage++;
    }
    // update the image
    plants.forEach(plant => {
        document.getElementById(plant).src = imgurl;

    });
}

function snip() {
    // saves last wallet ammount to calculate gains
    var test = money;
    console.log(plants)

    // checks how nice you treated the plant
    if (waterCount > 4 || feedCount > 4 || enlightenCount > 4) {
        money = money + ((growstage * 1) * plants.length);
    } else if (waterCount > 3 || feedCount > 3 || enlightenCount > 3) {
        money = money + ((growstage * 5) * plants.length);
    } else {
        money = money + ((growstage * 10) * plants.length);
    }
    // logs amount gained in console
    console.log(money - test);
    // reset plant values
    waterCount = 0;
    feedCount = 0;
    enlightenCount = 0;
    growstage = 0;

    document.getElementById("money").innerHTML = money;
    // create imageurl for htmlelement steve
    var imgurl = "img/plant/plant" + growstage + ".png";
    // update the image
    plants.forEach(plant => {
        document.getElementById(plant).src = imgurl;
    });
    var src = "audio/snip.mov"
    var audio = new Audio(src);
    audio.play();
}

var plantcount = 2;

function addPlant() {
    if (money < 50) {
        alert("nee je niet genoeg geld");
        document.getElementById("addplant").style.backgroundColor = "#F00";

    } else {
        var plantname = "plant" + plantcount;
        var elementString = "<img src='img/plant/plant0.png' class='plant' id=" + plantname + ">";
        money -= 50;
        document.getElementById("money").innerHTML = money;
        document.getElementById("image-container").innerHTML += elementString;
        plants.push(plantname);
        plantcount++;

    }
    var src = "audio/ka$ching.mp3"
    var audio = new Audio(src);
    audio.play();
    document.getElementById("moneyDiff").innerHTML = "-50";

    setTimeout(function() {
        document.getElementById("moneyDiff").innerHTML = "";
    }, 3000);
}

// Button add plant activate/deactivated color