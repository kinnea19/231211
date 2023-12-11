/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

function domainName(url) {
  nameRegex = /[a-z0-9\-]+(?=\.)/gi;
  const result = url.match(nameRegex).filter((name) => name !== "www");
  return result[0];
}

console.log(domainName("www.xakep.ru"));
console.log(domainName("http://google.co.jp"));
console.log(domainName("http://google.com"));
console.log(domainName("https://youtube.com"));

console.log(
  domainName("http://www.szw3ivx8coyotoizl3ctu9pi8g-cf.net/index.php")
);
console.log(domainName("9f-iz5mvb151l62.net/warez/"));
