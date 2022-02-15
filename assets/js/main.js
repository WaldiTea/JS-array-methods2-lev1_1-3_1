// -----lev1_1-----
console.log('%c------lev1_1-----', 'color:lightgreen');
let languages = [
  "JavaScript",
  "Python",
  "Java",
  "Ruby",
  "PHP",
  "C++",
  "CSS",
  "C#",
  "Go",
  "C",
  "TypeScript",
  "Swift"
];

sortierung = () => console.log(languages.sort());
sortierung();


// -----lev1_2-----
console.log('%c------lev1_2-----', 'color:lightgreen');
sortierung2 = () => console.log(languages.sort().reverse());
sortierung2();


// -----lev1_13-----
console.log('%c------lev1_13-----', 'color:lightgreen');
let meinText1 = ['Hello', 'World'];
let meinText2 = ['Anass', 'Elaine', 'Eric', 'Georg'];
let meinText3 = ['Superman', 'Wonderwoman', 'Hulk', 'Batman', 'Spiderman'];

let join1Text1 = meinText1.join();
console.log(join1Text1);
let join2Text1 = meinText1.join("");
console.log(join2Text1);
let join3Text1 = meinText1.join(" ");
console.log(join3Text1);
let join4Text1 = meinText1.join("+");
console.log(join4Text1);

let join1Text2 = meinText2.join();
console.log(join1Text2);
let join2Text2 = meinText2.join("");
console.log(join2Text2);
let join3Text2 = meinText2.join(" ");
console.log(join3Text2);
let join4Text2 = meinText2.join("+");
console.log(join4Text2);

let join1Text3 = meinText3.join();
console.log(join1Text3);
let join2Text3 = meinText3.join("");
console.log(join2Text3);
let join3Text3 = meinText3.join(" ");
console.log(join3Text3);
let join4Text3 = meinText3.join("+");
console.log(join4Text3);


// -----lev2_2-----
console.log('%c------lev2_2-----', 'color:lightgreen');
let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

console.log(numArray2.sort((a, b) => a - b));


// -----lev3_1-----
console.log('%c------lev3_1-----', 'color:lightgreen');

let names = ['Max', 'John', 'Erika'];
let names2 = ['Sergio', 'Hannah', 'Regallager', 'Reliefpfeiler', 'Rentner'];
let text = ['Ella mag alle Bohnen', 'han nesaH has ennaH']

// const input = names.map(rev => {
//   return rev.split("").reverse().join("");
// })

function sortReversing(x) {
    return x.map(
      rev => {
        return rev.split("").reverse().join("");
    })
}

console.log(sortReversing(names));
console.log(sortReversing(names2));
console.log(sortReversing(text));
