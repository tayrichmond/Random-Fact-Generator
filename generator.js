function randomString(arrayOfStrings) {
  var arrayLength = arrayOfStrings.length;
  var index = Math.floor(Math.random() * arrayLength);

  return arrayOfStrings[index];
}

var randomFacts = ["Odontophobia is the fear of teeth.",
  'Karoke means "empty orchestra" in Japanese.',
  "Elephants are the only mammals that can't jump."];


$(function() {
  $("button").on("click", function() {
    $("div").text(randomString(randomFacts));
  });
});
