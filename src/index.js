
function order() {
    document.getElementById("lblName").innerHTML = document.getElementById("txtName").value;
    document.getElementById("lblNumber").innerHTML = document.getElementById("txtMobile").value;

    var mealName = "";
    var adOnName = "";

    var mealCost = 0;
    var adOnCost = 0;

    var total = 0;


    var optBurger = document.getElementById("optBurger");
    var optRoller = document.getElementById("optRoller");

    var optKrusher = document.getElementById("tikKrusher");
    var optWings = document.getElementById("tikWings");


    if (optBurger.checked) {
        mealName = optBurger.value;
        mealCost = 200;
    }

    if (optRoller.checked) {
        mealName = optRoller.value;
        adOnCost = 300;
    }

    if (optKrusher.checked) {
        adOnCost = 50;
        adOnName += optKrusher.value + "</br>";
        mealCost += adOnCost;
    }

    if (optWings.checked) {
        adOnCost = 80;
        adOnName += optWings.value + "</br>";
        mealCost += adOnCost;
    }
    total = mealCost;

    document.getElementById("lblTotal").innerHTML = total;
    document.getElementById("lblMeal").innerHTML = mealName;
    document.getElementById("lblAdon").innerHTML = adOnName;
}

