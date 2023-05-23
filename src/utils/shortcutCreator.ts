const SPECIAL_KEY_LOOKUP: Record<string, string> = {
    "C": "CTRL",
    "S": "SHIFT",
    "M": "META",
    "A": "ALT"
}

const HELD_KEYS = ['S', 'C', 'M', 'A']

export const shortcutCreator = (cmd: string, leader: string): (string | string[])[] => {
    const shortcut: (string | string[])[] = [];
    let insideBuffer = false;
    let buffer = "";

    [...cmd].forEach((char, index) => {
        if (char === "<") {
            insideBuffer = true;
            return;
        }

        if (char === ">") {
            insideBuffer = false;
            if (buffer === 'leader') {
                shortcut.push(leader);
                return;
            }

            const [heldKey, rest] = buffer.split('-');
            if (HELD_KEYS.includes(heldKey)) {
                shortcut.push([SPECIAL_KEY_LOOKUP[heldKey], ...rest.split("")]);
            }

            buffer = "";
            return;
        }

        if (insideBuffer) {
            buffer = `${buffer}${char}`
            return;
        }
        shortcut.push(char);
    })

    return shortcut;
}
