
import { it, expect } from 'vitest'
import { convertToKeys } from './convertToKeys';

const tests = [
    { shortcut: ['SPACE', 'v'], expectedResult: ['space', 'v'] },
    { shortcut: [['CTRL', 'p'], 'f'], expectedResult: ['ctrl+p', 'f'] },
    { shortcut: [['CTRL', 'g'], 'j', 'm'], expectedResult: ['ctrl+g', 'j', 'm'] },
    { shortcut: ['K'], expectedResult: ['K'] },
    { shortcut: [['SHIFT', 'h']], expectedResult: ['shift+h'] },
    { shortcut: [['SHIFT', 'h', 'p']], expectedResult: ['shift+h+p'] },
    { shortcut: ['c', 'i', '"'], expectedResult: ['c', 'i', '"'] }
]

tests.forEach(({ shortcut, expectedResult }) => {
    it(`should handle ${shortcut}`, () => {
        const result = convertToKeys(shortcut);

        expect(result).toEqual(expectedResult);
    })
})
