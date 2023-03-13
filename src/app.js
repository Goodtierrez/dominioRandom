const dominioRandom = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let webName = [];

  for (let i = 0; i < pronoun.length; i++) {
    console.log("primer ciclo:", pronoun[i]);
    for (let j = 0; j < adj.length; j++) {
      console.log("segundo ciclo:", adj[j]);
      for (let k = 0; k < noun.length; k++) {
        console.log("tercer ciclo:", noun[k]);

        webName.push(pronoun[i] + adj[j] + noun[k] + ".com");
        console.log(webName);
      }
    }
  }
  return webName;
};

dominioRandom();
