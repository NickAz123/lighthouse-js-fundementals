const raining = false;
const cold = false;
const temperature = -1;

if (temperature < 0){
  console.log("Make sure you pick out a scarf!");
}else if (temperature < 15){
  console.log("Short sleeves won't cut it!");
}else {
  console.log("Short sleeves are fine.")
}

console.log("Now you're ready to go outside!");

//

const isCitizen = true;
const age =26;

if (isCitizen && age > 18){
  console.log("You are eligable to vote.");
}

//

if (temperature < -40 || temperature > 40){
  console.log("Going out today is not a good idea.");
}

if (!raining){
  console.log("No need to take your umbrella with you.");
}