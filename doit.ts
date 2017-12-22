import { fene2Sum } from './index'
import { numbersToCharacters, blockCharactersByDarkness } from './util'

let pattern1 = numbersToCharacters(fene2Sum(3, 7, 192, { invertPatternLength: 0 }), { characters: blockCharactersByDarkness, scale: false })
let pattern2 = numbersToCharacters(fene2Sum(3, 7, 192, { invertPatternLength: 1 }), { characters: blockCharactersByDarkness, scale: false })
for (let i = 0; i < 5; i++) {
	console.log(`[${pattern1}]`)
	console.log(`[${pattern2}]`)
}

/*
2
4
12
24 (48)
120 (240)
*/