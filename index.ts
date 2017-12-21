
export function feneValue(length: number, index: number): boolean {
	return !(Math.floor(index / length) % 2)
}