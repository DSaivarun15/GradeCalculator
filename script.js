function calgrade() {
  let hindi = document.getElementById("hindi").value;
  let telugu = document.getElementById("telugu").value;
  let english = document.getElementById("english").value;
  let maths = document.getElementById("maths").value;
  let science = document.getElementById("science").value;
  let social = document.getElementById("social").value;

  hindi = parseInt(hindi)
  telugu = parseInt(telugu)
  english = parseInt(english)
  maths = parseInt(maths)
  science = parseInt(science)
  social = parseInt(social)

  let total = hindi + telugu + english + maths + science + social;

  let percentage = (total / 600) * 100;

  let grade;
  if (percentage >= 91) {
    grade = "A1";
  } else if (percentage >= 81 && percentage <= 90) {
    grade = "A2";
  } else if (percentage >= 71 && percentage <= 80) {
    grade = "B1";
  } else if (percentage >= 61 && percentage <= 70) {
    grade = "B2";
  } else if (percentage >= 51 && percentage <= 60) {
    grade = "C1";
  } else if (percentage >= 41 && percentage <= 50) {
    grade = "C2";
  } else if (percentage >= 33 && percentage <= 40) {
    grade = "D";
  } else if (percentage >= 21 && percentage <= 30) {
    grade = "E1";
  } else if (percentage >= 0 && percentage <= 20) {
    grade = "E2";
  }

  let pof;
  if (percentage >= 91) {
    pof = "you are pass";
  } else if (percentage >= 81 && percentage <= 90) {
    pof = "you are pass";
  } else if (percentage >= 71 && percentage <= 80) {
    pof = "you are pass";
  } else if (percentage >= 61 && percentage <= 70) {
    pof = "you are pass";
  } else if (percentage >= 51 && percentage <= 60) {
    pof = "you are pass";
  } else if (percentage >= 41 && percentage <= 50) {
    pof = "you are pass";
  } else if (percentage >= 33 && percentage <= 40) {
    pof = "you are fail";
  } else if (percentage >= 21 && percentage <= 30) {
    pof = "you are fail";
  } else if (percentage >= 0 && percentage <= 20) {
    pof = "you are fail";
  }

  document.getElementById("percentage").innerHTML = "Percentage :" + percentage + "";
  document.getElementById("total").innerHTML = "Total:" + total + "";
  document.getElementById("grade").innerHTML = "Grade:" + grade + "";
  document.getElementById("POF").innerHTML = "" + pof + "";
}
