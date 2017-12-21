
export function feneValue(length: number, index: number): boolean {
	return !(Math.floor(index / length) % 2)
}

export function fene(patternLength: number, length: number, o?: { invert?: boolean }): boolean[] {
	let result: boolean[] = []
	for (let i = 0; i < length; i++) {
		let value = feneValue(patternLength, i)
		if (o && o.invert) value = !value 
		result.push(value)
	}
	return result
}