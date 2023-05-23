import { it, expect } from 'vitest'
import { shortcutCreator } from './shortcutCreator'

const tests = [
    { shortcut: '<leader>v', expectedResult: ['SPACE', 'v'] },
    { shortcut: '<C-p>f', expectedResult: [['CTRL', 'p'], 'f'] },
    { shortcut: '<C-g>jm', expectedResult: [['CTRL', 'g'], 'j', 'm'] },
    { shortcut: 'K', expectedResult: ['K'] },
    { shortcut: '<S-h>', expectedResult: [['SHIFT', 'h']] },
    { shortcut: '<S-hp>', expectedResult: [['SHIFT', 'h', 'p']] },
    { shortcut: 'ci"', expectedResult: ['c', 'i', '"'] }
]

tests.forEach(({ shortcut, expectedResult }) => {
    it(`should handle ${shortcut}`, () => {
        const result = shortcutCreator(shortcut, "SPACE");

        expect(result).toEqual(expectedResult);
    })
})
