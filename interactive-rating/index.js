
var userClickRate = [];
var rating = [];
var numberOfRateButton = document.querySelectorAll(".rate-btn").length
for (var i = 0; i < numberOfRateButton; i++) {


    document.querySelectorAll(".rate-btn")[i].addEventListener("click", function () {

        rating.push(this.innerHTML)
        var userChooseRate = "rate" + this.innerHTML;
        userClickRate.push(userChooseRate);
        //user rate                                //user prev rate
        rateButtonAnimation(userClickRate[userClickRate.length - 1], userClickRate[userClickRate.length - 2]);
    });


}

document.querySelectorAll("p")[0].classList.remove("rating-div");

document.querySelector(".submit-btn").addEventListener("click", function () {


    document.querySelector("h1").textContent = "Thank you!";
    document.querySelectorAll("p")[1].textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch! ";
    document.querySelector("h1").classList.add("submitted");
    document.querySelectorAll("p")[1].classList.add("submitted");

    document.querySelectorAll("p")[0].textContent = "You selected " + rating[rating.length - 1] + " out of 5";

    document.querySelector(".rate").remove();
    document.querySelector(".submit-btn").remove();

    document.querySelector("img").src = "images/illustration-thank-you.svg";

    document.querySelectorAll("p")[0].classList.add("rating-div");

    document.querySelector(".img-div").classList.remove("star");
    document.querySelector(".img-div").classList.add("thankyou-img");

});





//remove the previous user choose rate
function rateButtonAnimation(choosenRate, unchooseRate) {

    var userRate = document.querySelector("#" + choosenRate);
    var prevChoose = document.querySelector("#" + unchooseRate);

    userRate.classList.add("clicked-rate");

    if (userClickRate.length >= 2) {

        prevChoose.classList.remove("clicked-rate");

    }
}







