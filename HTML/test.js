var requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

$.getJSON(requestURL, function (superHeroes) {
  populateHeader(superHeroes);
  showHeroes(superHeroes);
});
function populateHeader(jsonObj) {
  var $header = $("header");

  var $myH1 = $("<h1>").text(jsonObj.squadName);
  $header.append($myH1);

  var $myPara = $("<p>").text(
    `Hometown: ${jsonObj.homeTown} // Formed: ${jsonObj.formed}`
  );
  $header.append($myPara);
}

function showHeroes(jsonObj) {
  var heroes = jsonObj["members"];
  var $section = $("section");

  for (var i = 0; i < heroes.length; i++) {
    var hero = heroes[i];

    var $myArticle = $("<article>");
    var $myH2 = $("<h2>").text(hero.name);
    var $myPara1 = $("<p>").text("Secret identity: " + hero.secretIdentity);
    var $myPara2 = $("<p>").text("Age: " + hero.age);
    var $myPara3 = $("<p>").text("Superpowers:");
    var $myList = $("<ul>");

    var superPowers = hero.powers;
    for (var j = 0; j < superPowers.length; j++) {
      var $listItem = $("<li>").text(superPowers[j]);
      $myList.append($listItem);
    }

    $myArticle
      .append($myH2)
      .append($myPara1)
      .append($myPara2)
      .append($myPara3)
      .append($myList);

    $section.append($myArticle);
  }
}
