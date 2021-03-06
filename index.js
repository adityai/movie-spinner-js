const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

router.route('/spin')
    .get((req, res) => {
          const response = { "Selected movie": spinner() }
          res.json(response);
    });

app.use("/api", router);

app.get('/', (req, res) => {
    res.send("Welcome to the movie spinner");
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});

function spinner(){
var movie = [];;
movie.push("Big Miracle | Netflix");
movie.push("Big Fat Liar | Netflix");
movie.push("Big Time Movie | Netflix");
movie.push("Bruno and Boots: Go Jump in the Pool | Netflix");
movie.push("Christopher Robin | Netflix");
movie.push("Earth to Echo | Netflix");
movie.push("From Japan to Egypt | Netflix");
movie.push("Harriet the Spy: Blog Wars | Netflix");
movie.push("Hey Arnold! The Jungle Movie | Netflix");
movie.push("Jinxed | Netflix");
movie.push("Kids on the Block | Netflix");
movie.push("Looney Tunes: Back in Action | Netflix");
movie.push("Mary and The Witch's Flower | Netflix");
movie.push("Miracle | Netflix");
movie.push("Motu Patlu: King of Kings | Netflix");
movie.push("New York Minute | Netflix");
movie.push("Pup Star: Better 2Gether | Netflix");
movie.push("Puppy Star Christmas | Netflix");
movie.push("Radio Rebel | Netflix");
movie.push("Rock My Heart | Netflix Official Site");
movie.push("Rugrats Go Wild | Netflix");
movie.push("Rugrats in Paris: The Movie | Netflix");
movie.push("Shorts | Netflix");
movie.push("Tarzan 2 | Netflix");
movie.push("The Adventure Club | Netflix");
movie.push("The Adventures of Tintin | Netflix");
movie.push("The Guardian Brothers | Netflix");
movie.push("The Princess Switch | Netflix Official Site");
movie.push("The Rugrats Movie | Netflix");
movie.push("The Short Game | Netflix Official Site");
movie.push("Tom and Jerry: The Magic Ring | Netflix");
movie.push("Walk. Ride. Rodeo. | Netflix Official Site");
movie.push("White Fang | Netflix Official Site");
movie.push("Zokkomon | Netflix");
movie.push("Charlotte's Web (1973)| Amazon Prime Free");
movie.push("The Tractor Mac Show| Amazon Prime Free");
movie.push("Legend Of Sarila| Amazon Prime Free");
movie.push("The Boxcar Children: Surprise Island| Amazon Prime Free");
movie.push("Amanda and the Fox| Amazon Prime Free");
movie.push("My Dad's A Soccer Mom| Amazon Prime Free");
movie.push("Golden Winter| Amazon Prime Free");
movie.push("A Turtle's Tale: Sammy's Adventures| Amazon Prime Free");
movie.push("Ready, Jet, Go!: Back to Bortron 7| Amazon Prime Free");
movie.push("The Lost Medallion| Amazon Prime Free");
movie.push("Ice Princess Lily| Amazon Prime Free");
movie.push("Bernie the Dolphin| Amazon Prime Free");
movie.push("Star Trek: The Motion Picture| Amazon Prime Free");
movie.push("All Creatures Big & Small| Amazon Prime Free");
movie.push("Asterix and the Vikings| Amazon Prime Free");
movie.push("The Stolen Princess| Amazon Prime Free");
movie.push("Imagine That| Amazon Prime Free");
movie.push("Borrowers| Amazon Prime Free");
movie.push("All I Want Is Christmas| Amazon Prime Free");
movie.push("Sox: A Family's Best Friend| Amazon Prime Free");
movie.push("Belle and Sebastian| Amazon Prime Free");
movie.push("Heidi| Amazon Prime Free");
movie.push("Minuscule: Valley Of The Lost Ants| Amazon Prime Free");
movie.push("Alpha and Omega 3: The Great Wolf Games| Amazon Prime Free");
movie.push("Spark: A Space Tail| Amazon Prime Free");
movie.push("Jr. Detective Agency| Amazon Prime Free");
movie.push("Adventures in Odyssey: Escape From the Forbidden Matrix| Amazon Prime Free");
movie.push("Adventures in Odyssey: Go West, Young Man!| Amazon Prime Free");
movie.push("Chitty Chitty Bang Bang| Amazon Prime Free");
movie.push("The Best of Laurel and Hardy (In Color)| Amazon Prime Free");
movie.push("Iron Man 2| Amazon Prime Free");
movie.push("Alone For Christmas| Amazon Prime Free");
movie.push("Fireman Sam: Ultimate Heroes - The Movie| Amazon Prime Free");
movie.push("Ace Of Hearts| Amazon Prime Free");
movie.push("Maya The Bee| Amazon Prime Free");
movie.push("Agent Fox| Amazon Prime Free");
movie.push("Bold Eagles| Amazon Prime Free");
movie.push("The Adventures of Mickey Matson and the Copperhead Treasure| Amazon Prime Free");
movie.push("Top Cat Begins| Amazon Prime Free");
movie.push("Oddball| Amazon Prime Free");
movie.push("The Cat in the Hat Knows a Lot About Camping!| Amazon Prime Free");
movie.push("The Cat in the Hat Knows a Lot About Space!| Amazon Prime Free");
movie.push("Sing and Rhyme with Mother Goose Club| Amazon Prime Free");
movie.push("Odd Squad: The Movie| Amazon Prime Free");
movie.push("Tad: The Lost Explorer| Amazon Prime Free");
movie.push("Wild Kratts: Alaska- Hero's Journey| Amazon Prime Free");
movie.push("A Christmas Tree Miracle| Amazon Prime Free");
movie.push("Gone in 60 Seconds| Amazon Prime Free");
movie.push("Apollo 13| Amazon Prime Free");
movie.push("Azorian: The Raising of the K-129| Amazon Prime Free");
movie.push("The Spy Next Door | Amazon Prime Free");
selected = movie[Math.floor(Math.random() * 84) + 1];
console.log(selected);
return selected;
}
