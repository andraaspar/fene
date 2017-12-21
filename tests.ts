import { test } from 'ava'
import { feneValue } from './index'

test('feneValue of length 1 goes like [x x x x x ]', t => {
	let result = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => feneValue(1, i))
	// console.log(result)
	t.deepEqual(result, [true, false, true, false, true, false, true, false, true, false])
})

test('feneValue of length 2 goes like [xx  xx  xx]', t => {
	let result = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => feneValue(2, i))
	// console.log(result)
	t.deepEqual(result, [true, true, false, false, true, true, false, false, true, true])
})

test('feneValue of length 3 goes like [xxx   xxx ]', t => {
	let result = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => feneValue(3, i))
	// console.log(result)
	t.deepEqual(result, [true, true, true, false, false, false, true, true, true, false])
})