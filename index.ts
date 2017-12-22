
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

export function fene2Sum(start: number, end: number, count: number, o?: { step?: number, baseArray?: number[], invertPatternLength?: number, offset?: number }): number[] {
	let result: number[] = o && o.baseArray || []
	if (result.length < count) {
		for (let i = result.length; i < count; i++) {
			result.push(0)
		}
	}
	let step = o && o.step || 1
	let invertPatternLength = o && o.invertPatternLength
	let offset = o && o.offset || 0
	for (let patternLength = start; patternLength < end; patternLength += step) {
		for (let i = 0; i < count; i++) {
			let value = feneValue(patternLength, i + offset)
			if (invertPatternLength && feneValue(invertPatternLength, patternLength)) value = !value
			result[i] += value ? 1 : 0
		}
	}
	return result
}