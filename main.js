const highScores =
  localStorage.getItem("scores") === null
    ? [
        { name: "Emi", score: 123 },
        { name: "Dan", score: 89 }
      ]
    : JSON.parse(window.localStorage.getItem("scores"));

window.localStorage.setItem("scores", JSON.stringify(highScores));

function showScoreList() {
  document.getElementById("high-score-list").innerHTML = "";
  highScores.forEach(person => {
    var para = document.createElement("P");
    para.innerHTML = `${person.name}: ${person.score}`;
    document.getElementById("high-score-list").appendChild(para);
  });
}

function checkNewScore(newName, newScore) {
  let foundName = false;
  highScores.forEach((person, index) => {
    if (person.name == newName) {
      foundName = true;
      if (newScore > person.score) {
        highScores[index].score = newScore;
        window.localStorage.setItem("scores", JSON.stringify(highScores));
      }
    }
  });
  if (foundName === false) {
    alert("Not found!");
    // add to list
    let newPerson = { name: newName, score: newScore };
    highScores.push(newPerson);
    window.localStorage.setItem("scores", JSON.stringify(highScores));
  }
  return;
}

function addNewScore(event) {
  const name = document.getElementById("name").value;
  const score = document.getElementById("score").value;

  checkNewScore(name, score);

  showScoreList();
}

showScoreList();
