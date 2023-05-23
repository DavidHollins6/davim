const KEY_MAP: Record<string, string> = {
    "SHIFT": "shift",
    "CTRL": "control",
    "CR": "enter",
    "SPACE": "space",
}

export const convertToKeys = (shortcut: (string | string[])[]): string[] => {
    return shortcut.reduce<string[]>((acc: string[], s) => {
        if (Array.isArray(s)) {
            const [heldKey, ...rest] = s;
            return [...acc,`${heldKey.toLowerCase()}+${rest.reduce((a, c) => `${a}+${c}`)}` ]
        }
        return [...acc, `${KEY_MAP[s] || s}`];

    }, []);
}
