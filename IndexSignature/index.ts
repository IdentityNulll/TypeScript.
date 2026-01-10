// index Signatures -> it is like telling TS that these object can have dynamic properities

interface Player {
  name: string;
  level: number;
  username: string;
} // normal object

let player: Player = {
  name: "Smth",
  level: 12,
  username: "Someone",
};

// player["heroPower"] // here we cannot use it because TypeScript doesn't allow it
// player.heroPower = "10" // not even here we know that

interface Dictionary {
  [word: string]: string;
} // index signature

let dictionary: Dictionary = {
  hello: "Salom",
  world: "Dunyo",
};

dictionary["apple"];
console.log(dictionary.apple); // here now we can use anything as long as we have value as string



// record -> it is the same thing as index signature but record is a type, not index signature

// example :
type Boys = Record<string, string>

let boys : Boys = {
  name : "Bro",
  height : "175"
} // it is something like this


