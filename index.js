// EX1
var x = 5;
let y = 10;
const z = 15;
console.log(x)
console.log(y)
console.log(z)
           ** ex*
function testScope() { 
if (true) { 
var a = "var visible partout"; 
let b = "let visible ici seulement"; 
} 
console.log(a); 
console.log(b); // Pourquoi erreur ?
//erreur parceque b variable local
} 
testScope();


//exercice3
function sayHello(name) { 
return' Bonjour ${name}'; 
} 
const sayHelloArrow = (name) =>'Bonjour $ {name}';
console.log(sayHello("ouma"));
console.log(sayHelloArrow("kikoo"));
//les deux fcts donnent la mm resultat ms juste une classique et une fleche

       // ex4
const person = { 
  name: "Sara", 
  sayHello: function () { 
    console.log("Bonjour " + this.name); 
  }, 
  sayHelloArrow: () => { 
    console.log("Bonjour " + this.name); 
  }, 
}; 
 
person.sayHello(); 
person.sayHelloArrow(); 
// le fait de this ici fonctionne que dans une fonction classique ms pas dans une fonction flechee

//ex 5//
const fruits = ["pomme", "banane", "orange"];

fruits.push("kiwi");  // ajoute "kiwi" à la fin
fruits.pop();          // retire le dernier élément
console.log(fruits);   // affiche le tableau final /

ex6
const nums = [1, 2, 3, 4, 5];

// Multiplie chaque nombre par 2
console.log(nums.map(n => n * 2));  
// Garde seulement les nombres pairs
console.log(nums.filter(n => n % 2 === 0));
// Calcule la somme totale
console.log(nums.reduce((sum, n) => sum + n, 0));

exercice7
console.log(nums.find(n => n > 3));  // Trouve le premier nombre supérieur à 3
console.log(nums.some(n => n < 0));  
console.log(nums.every(n => n > 0));
 
exercice8
const user = { id: 1, name: "Ali", city: "Rabat" };

const { name, city } = user;
console.log(`${name} habite à ${city}`); // ✅ Ali habite à Rabat

const { name: fullName, ...rest } = user;
console.log(fullName); // Ali
console.log(rest);     // { id: 1, city: "Rabat" }

exercice9
const p = new Promise((resolve) => {
  setTimeout(() => resolve("Opération terminée !"), 2000);
});

p.then(result => console.log(result));

exercice10 
async function getUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.error("Erreur :", e.message);
  }
}

getUsers();

exercice11
const names = "Nadia";
const hour = new Date().getHours();
console.log(`Bonjour ${name}, il est ${hour}h`);

exercice12
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2); // [1, 2, 3, 4]

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

exercice13

const settings = { theme: null };
console.log(settings.theme ?? "light"); // light

const user2 = { profile: { email: "x@y.com" } };
console.log(user2.profile?.email); // x@y.com
console.log(user2.address?.city);  // undefined

  Gestionproduit
  const produits = [
  { nom: "Lait", prix: 10, expireLe: "2025-12-01" },
  { nom: "Yaourt", prix: 5, expireLe: "2024-01-01" },
  { nom: "Jus", prix: 8, expireLe: "2026-02-15" },
];

const aujourdHui = new Date();

const valides = produits.filter(p => new Date(p.expireLe) > aujourdHui);
const total = valides.reduce((s, p) => s + p.prix, 0);

console.log("Produits valides :", valides);
console.log("Total :", total, "DH");


