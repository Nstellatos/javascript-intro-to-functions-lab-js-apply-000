//return statement will stop the function and return a value
// log will log out info in code
//function is a set of statements that perform a task or calc a value
// === strict equality
// == converting equality
// argument - values that are input into a function (string)
function shout(string) { //parameter
  return string.toUpperCase() // input parameter into function
} // SHOUT
function whisper(string){
  return string.toLowerCase()
} // whisper
function logShout(string){
  console.log(string.toUpperCase())
} // LOGSHOUT
function logWhisper(string){
  console.log(string.toLowerCase())
} //logwhisper
function sayHiToGrandma(string){
  if (string === string.toLowerCase())
  return "I can't hear you!";
else if (string === string.toUpperCase())
return "YES INDEED!"
}
if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}
