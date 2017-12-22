
export const blockCharactersByDarkness = ' ░▒▓█'.split('')
export const charactersByDarkness = ' ·-~+xO0#$'.split('')

export function numbersToCharacters(a: number[], o?: { scale?: boolean, characters?: string[] }): string {
	let characters = o && o.characters || charactersByDarkness
	if (o && o.scale) {
		a = scaleNumbersTo(0, characters.length - 1, a)
	}
	return a.map(_ => characters[_]).join('')
}

export function scaleNumbersTo(min: number, max: number, a: number[]) {
	let aMin = Math.min(...a)
	let aMax = Math.max(...a)
	let offset = min - aMin
	let multi = (max - min) / (aMax - aMin)
	return a.map(_ => Math.round((_ + offset) * multi))
}