/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. 
We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. 
It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

*/

function likes(num) {
  let people = "";
  switch (num.length) {
    case 0:
      people = "no one likes this";
      break;
    case 1:
      people = num[0] + " likes this";
      break;
    case 2:
      people = num[0] + " and " + num[1] + " like this";
      break;
    case 3:
      people = num[0] + ", " + num[1] + " and " + num[2] + " like this";
      break;
    default:
      people =
        num[0] + ", " + num[1] + " and " + (num.length - 2) + " others like this";
  }

  return people;
}

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
