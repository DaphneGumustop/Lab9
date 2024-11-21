// Q1
const characters = ['Harry', 'Hermione', 'Ron', 'Draco', 'Luna'];
console.log('Q1: Characters:');
for (let i = 0; i < characters.length; i++) {
    console.log(characters[i]);
}

// Q2
const firstName = 'Harry';
const house = 'Gryffindor';
console.log(`Q2: Welcome, ${firstName} of ${house}!`);

// Q3
const characterName = 'Hermione';
console.log('Q3: Lowercase:', characterName.toLowerCase());
console.log('Q3: Uppercase:', characterName.toUpperCase());

// Q4
const spell = ' Expelliarmus ';
console.log('Q4: Trimmed spell:', spell.trim());

// Q5
const quote = 'I solemnly swear that I am up to no good';
console.log('Q5: Extracted word:', quote.slice(11, 16));

// Q6
const ronFirstName = 'Ron';
const lastName = 'Weasley';
console.log('Q6: Concatenated name:', ronFirstName.concat(' ', lastName));

// Q7
const sentence = 'Draco is a good wizard';
console.log('Q7: Modified sentence:', sentence.replace('good', 'bad'));

// Q8
const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw'];
houses.push('Slytherin');
houses.pop();
console.log('Q8: Final houses array:', houses);

// Q9
const spells = ['Alohomora', 'Lumos', 'Nox'];
spells.unshift('Accio');
spells.shift();
console.log('Q9: Final spells array:', spells);

// Q10
const professors = ['Dumbledore', 'McGonagall', 'Snape', 'Hagrid'];
const slicedProfessors = professors.slice(1, 3);
console.log('Q10: Sliced array:', slicedProfessors);

// Q11
const students = ['Neville', 'Seamus', 'Dean', 'Parvati'];
students.splice(1, 2);
console.log('Q11: Modified students array:', students);

// Q12
const phrase = ' Mischief Managed ';
const trimmedPhrase = phrase.trim().toLowerCase().concat(' - Harry');
console.log('Q12: Final phrase:', trimmedPhrase);

// Q13
const wizards = ['Harry', 'Hermione', 'Ron'];
wizards.push('Luna', 'Draco');
console.log('Q13: Updated wizards array:', wizards);

// Q14
const message = 'Welcome to Hogwarts School of Witchcraft and Wizardry';
const substring = message.slice(11, 19).concat(' Castle');
console.log('Q14: Final message:', substring);
