const data = [
     {
         name: 'Jonas',
         marks: [10, 2, 8, 4, 6] // vidurkis = 6;
     },
     {
         name: 'Maryte',
         marks: [3, 7, 9, 5] // vidurkis = 6;
     },
     {
         name: 'Petras',
         marks: [7, 7, 7] // vidurkis = 7;
     },
     {
         name: 'Ona',
         marks: [10, 9, 8, 7, 6] // vidurkis = 8;
     },
 ]

// PASTABA: jei kazkuri reikalavima atitinka daugiau nei vienas mokinys, spausdinti visus
// Isspausdinti mokinio varda ir pazymi, kuris turi prasciausia pazymi

let maziausiBalai = [];
let min = 0;

for (let i = 0; i < data.length; i++) {
    maziausiBalai[i] = (Math.min(...data[i].marks))
}

min = Math.min(...maziausiBalai)
for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].marks.length; j++)
        if (data[i].marks[j] == min) {
            console.log("Turi atspazdinti prasciausia pazymi: ", data[i].name, min);
        }
}

console.log("");


// Isspausdinti mokinio varda ir pazymi, kuris turi geriausia pazymi

let didziausiBalai = [];
let max = 0;

for (let i = 0; i < data.length; i++) {
    didziausiBalai[i] = (Math.max(...data[i].marks))
}

max = Math.max(...didziausiBalai)
for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].marks.length; j++)
        if (data[i].marks[j] == max) {
            console.log("Turi atspauzdinti geriausia pazymi: ", data[i].name, max);
        }
}

console.log("");


// Isspausdinti mokinio varda ir pazymiu vidurki, kuris turi prasciausia pazymiu vidurki






// Isspausdinti mokinio varda ir pazymiu vidurki, kuris turi geriausia pazymiu vidurki





// Isspausdinti mokinio varda, jei jis turi pazymi 8

for (let i = 0; i < data.length; i++){
    for(let j = 0; j < data[i].marks.length; j++)
    if(data[i].marks[j] === 8){
        console.log("Turi pazymi 8: ", data[i].name);
        console.log("");

    }
}


// Isspausdinti mokinio varda, jei jis neturi pazymio 7 

let x = 0;
for (let i = 0; i < data.length; i++){
    for(let j = 0; j < data[i].marks.length; j++)
    if(data[i].marks[j] === 7){
        x += 1;
}
if(x === 0)
console.log("Neturi pazymio 7:", data[i].name);
}

