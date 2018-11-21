// From StackOverflow
// https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript

function makeid() {
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let text = "";

  for (let i = 0; i < 6; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

export default makeid;