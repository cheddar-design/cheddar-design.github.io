const chars = new Map();
const fillMap = () => {
chars.set('a', 0);
chars.set('B', 2);
chars.set('c', 3);
chars.set('D', 4);
chars.set('e', 5);
chars.set('F', 6);
chars.set('g', 7);
chars.set('H', 8);
chars.set('i', 9);
chars.set('J', 10);
chars.set('k', 11);
chars.set('L', 12);
chars.set('m', 13);
chars.set('N', 14);
chars.set('o', 15);
chars.set('P', 16);
chars.set('q', 17);
chars.set('R', 18);
chars.set('s', 19);
chars.set('T', 20);
chars.set('u', 21);
chars.set('V', 22);
chars.set('w', 23);
chars.set('X', 24);
chars.set('y', 25);
chars.set('Z', 26);

chars.set('?', 27);
chars.set('.', 28);
chars.set('!', 29);
chars.set(',', 30);
chars.set(' ', 31);
chars.set("'", 32);
chars.set(':', 33);
chars.set('/', 34);
chars.set('@', 35);
chars.set('#', 36);
chars.set('$', 37);
chars.set('%', 38);
chars.set('^', 39);
chars.set('&', 40);
chars.set('*', 41);
chars.set('(', 42);
chars.set(')', 43);
chars.set('-', 44);
chars.set('[', 45);
chars.set(']', 46);
chars.set(';', 47);
chars.set('"', 48);
chars.set('<', 49);
chars.set('>', 50);
chars.set('\\', 51);
chars.set('~', 52);
chars.set('`', 53);
chars.set('_', 54);
chars.set('+', 55);
chars.set('=', 56);
chars.set('{', 57);
chars.set('}', 58);

chars.set('A', 59);
chars.set('b', 60);
chars.set('C', 61);
chars.set('d', 62);
chars.set('E', 63);
chars.set('f', 64);
chars.set('G', 65);
chars.set('h', 66);
chars.set('I', 67);
chars.set('j', 68);
chars.set('K', 69);
chars.set('l', 70);
chars.set('M', 71);
chars.set('n', 72);
chars.set('O', 73);
chars.set('p', 74);
chars.set('Q', 75);
chars.set('r', 76);
chars.set('S', 77);
chars.set('t', 78);
chars.set('U', 79);
chars.set('v', 80);
chars.set('W', 81);
chars.set('x', 82);
chars.set('Y', 83);
chars.set('z', 1);
chars.set('“', 84);
chars.set('”', 85);
chars.set('‘', 86);
chars.set('’', 87);
chars.set('\n', 88);
chars.set('ñ', 89);
chars.set('ś', 90);
chars.set('ï', 91);
chars.set('ī', 92);
chars.set('ė', 93);
chars.set('ë', 94);
chars.set('š', 95);
chars.set('ù', 96);
chars.set('œ', 97);
chars.set('ō', 98);
chars.set('•', 99);
chars.set('¥', 100);
chars.set('£', 101);
chars.set('€', 102);
chars.set('|', 103);
}

const numbers = ['ñ', 'ś', 'ï', 'ī', 'ė', 'ë', 'š', 'ù', 'œ', 'ō'];

fillMap()
const getLetter = (value) => {
    return [...chars].find(([key, val]) => val == value)[0]
}

const fibonacci = (num) => {
    return num < 2 ? num : fibonacci(num - 1) + fibonacci(num - 2);
}

const emoChars = new Map();
const fillEmoMap = () => {
emoChars.set('🦙', 'a');
emoChars.set('🐝', 'b');
emoChars.set('👓', 'c');
emoChars.set('🦌', 'd');
emoChars.set('🙀', 'e');
emoChars.set('🧿', 'f');
emoChars.set('🤦', 'g');
emoChars.set('🔥', 'h');
emoChars.set('👀', 'i');
emoChars.set('🐦', 'j');
emoChars.set('👌', 'k');
emoChars.set('🌜', 'l');
emoChars.set('🤑', 'm');
emoChars.set('🚫', 'n');
emoChars.set('😮', 'o');
emoChars.set('🫣', 'p');
emoChars.set('😫', 'q');
emoChars.set('🤬', 'r');
emoChars.set('💪', 's');
emoChars.set('☕', 't');
emoChars.set('🐑', 'u');
emoChars.set('⛽', 'v');
emoChars.set('🔱', 'w');
emoChars.set('💩', 'x');
emoChars.set('🥺', 'y');
emoChars.set('😴', 'z');
emoChars.set('😁', 'A');
emoChars.set('😂', 'B');
emoChars.set('😎', 'C');
emoChars.set('😊', 'D');
emoChars.set('😉', 'E');
emoChars.set('😘', 'F');
emoChars.set('😍', 'G');
emoChars.set('😗', 'H');
emoChars.set('🤩', 'I');
emoChars.set('😶', 'J');
emoChars.set('😐', 'K');
emoChars.set('😚', 'L');
emoChars.set('🐡', 'M');
emoChars.set('🙄', 'N');
emoChars.set('😏', 'O');
emoChars.set('🥱', 'P');
emoChars.set('🫠', 'Q');
emoChars.set('😕', 'R');
emoChars.set('😭', 'S');
emoChars.set('😤', 'T');
emoChars.set('🥶', 'U');
emoChars.set('😷', 'V');
emoChars.set('😰', 'W');
emoChars.set('🐻', 'X');
emoChars.set('🤢', 'Y');
emoChars.set('🤮', 'Z')
emoChars.set('😵', '!');
emoChars.set('🤔', '?');
emoChars.set('🫥', '.');
emoChars.set('🤐', ',');
emoChars.set('🚀', ' ');
emoChars.set('🤠', "'");
emoChars.set('🤡', ':');
emoChars.set('🥸', '/');
emoChars.set('🤥', '@');
emoChars.set('🤫', '#');
emoChars.set('🤭', '$');
emoChars.set('😈', '%');
emoChars.set('🤓', '^');
emoChars.set('👹', '&');
emoChars.set('👺', '*');
emoChars.set('💀', '(');
emoChars.set('👻', ')');
emoChars.set('🫀', '-');
emoChars.set('😹', '[');
emoChars.set('😻', ']');
emoChars.set('🙈', ';');
emoChars.set('🐺', '"');
emoChars.set('🐶', '<');
emoChars.set('🦊', '>');
emoChars.set('🥾', '\\');
emoChars.set('🦴', '~');
emoChars.set('🦓', '`');
emoChars.set('🐸', '_');
emoChars.set('🐾', '+');
emoChars.set('🐈', '=');
emoChars.set('🐖', '{');
emoChars.set('🦨', '}');
emoChars.set('🐍', '“');
emoChars.set('🐳', '”');
emoChars.set('🦐', '‘');
emoChars.set('🦿', '’');
emoChars.set('🫰', '\n');
emoChars.set('👊', '0');
emoChars.set('🫲', '1');
emoChars.set('🐮', '2');
emoChars.set('👎', '3');
emoChars.set('✊', '4');
emoChars.set('🤚', '5');
emoChars.set('🤜', '6');
emoChars.set('🤌', '7');
emoChars.set('🫴', '8');
emoChars.set('🤞', '9');
emoChars.set('👟', 'ñ');
emoChars.set('👒', 'ś');
emoChars.set('⚽', 'ï');
emoChars.set('💎', 'ī');
emoChars.set('🏈', 'ė');
emoChars.set('🎱', 'ë');
emoChars.set('🏉', 'š');
emoChars.set('🎳', 'ù');
emoChars.set('🏐', 'œ');
emoChars.set('🏀', 'ō');
emoChars.set('🌍', '•');
emoChars.set('🪐', '¥');
emoChars.set('🥓', '£');
emoChars.set('🚧', '€');
emoChars.set('🚨', '|');
}
fillEmoMap()
const getEmo = (value) => {
    return [...emoChars].find(([key, val]) => val == value)[0]
}

const warn = () => {
    console.clear();
    activated && console.info('%c-- Security scrambler deactivated --', 'color: #198754');
    !activated && console.info('%c-- Security scrambler is activated --', 'color: #ffda6a');
}

const emoEncode = (str) => {
    let encoded = str.split('').map(c => {
        if (activated) {
            return getEmo(c);
        } else {
            return getLetter(chars.get(emoChars.get(c))+Math.floor(Math.random() * 10)%cl)
        }
    });
    return encoded.join('');
}

const emoDecode = (str) => {
    let decoded = [...str];
    decoded = decoded.map(c => emoChars.get(c))
    if (!activated) {
        decoded = decoded.map(e => {
            if (chars.get(e) > cl - 10 && chars.get(e)) {
                return getLetter(chars.get(e) - Math.floor(Math.random() * 10));
            } else if (chars.get(e)) {
                return getLetter(chars.get(e) + Math.floor(Math.random() * 10));
            } else {
                return e;
            }
        })
    }
    return decoded.join('');
}

let activated = false;

const cl = chars.size;

const encode = (str) => {
    console.group('Code BLUE - Encode');
    console.group('Setup');
    console.log(`Input: ${str}`);
    str = str.split('').map(c => isNaN(parseInt(c)) ? c : numbers[Number(c)]).reverse().join('');
    console.log(`Reversed and numbers replaced: ${str}`);
    const key = Math.floor(Math.random() * (cl-1));
    console.log(`Key: ${key} - ${getLetter(key)}`);
    let add = (Math.floor(str.length/cl)*cl)+cl;
    console.log(`Add: ${add}`);
    console.groupEnd();
    console.groupCollapsed('Iterations');
    let encoded = [];
    for (let i = 0; i < str.length; i++) {
        console.group(i.toString());
        let shift = i;
        console.log(`Shift: ${i}`);
        console.log(`Raw character: ${str[i]} - ${chars.get(str[i])}`)
        let char = i%2 == 0 ? ((chars.get(str[i])+shift+add)%cl)*key : getLetter((chars.get(str[i])+shift+add)%cl);
        console.log(`Math: ((${chars.get(str[i])} + ${shift}) % ${cl}) * ${key}`);
        console.log(`Character: ${char}`);
        encoded.push(char);
        console.groupEnd();
    }
    console.groupEnd();
    if (activated) {
        encoded = encoded.join('').split('').reverse().join('').concat(getLetter(key));
        console.log('%cResult:', 'font-weight: bold', encoded)
        console.groupEnd();
        return encoded;
    } else {
        encoded = encoded.join('').split('').reverse().join('');
        console.log('%cResult:', 'font-weight: bold', encoded)
        console.groupEnd();
        return encoded;
    }
}

const decode = (str) => {
    console.group('Code BLUE - Decode');
    console.group('Setup');
    console.log(`Input: ${str}`)
    const key = activated ? chars.get(str[str.length-1]) : 54;
    console.log(`Key: ${key} - ${getLetter(key)}`);
    str = activated ? str.slice(0,-1).split('').reverse().join('') : str.split('').reverse().join('');
    console.log(`Reversed and key removed: ${str}`);
    let patt = /(\d+)/g;
    let patt2 = /\D+/g;
    let nums = str.match(patt);
    let char = str.match(patt2);
    console.groupCollapsed('Numbers and characters');
    console.log(nums);
    console.log(char);
    console.groupEnd();
    let length = nums ? nums.length : 0;
    let decoded = [];
    let add = (Math.floor(length*2/cl)*cl)+cl;
    console.log(`Add: ${add}`);
    console.groupEnd();
    console.groupCollapsed('Iterations');
    for (let i = 0; i < length; i++) {
        let shift = i*2;
        console.group(shift.toString());
        console.log(`Shift: ${shift}`);
        console.log(`Input number: ${nums[0]}`);
        let alteredNum = Math.floor((((Number(nums[0])/key)-shift+add)%cl));
        console.log(`Output number: ${alteredNum}`);
        console.log(`Output character: ${getLetter(alteredNum)}`);
        decoded.push(getLetter(alteredNum));
        nums.shift();
        console.groupEnd();
        if (char && char[0]) {
            shift++;
            console.group(shift.toString());
            console.log(`Shift: ${shift}`);
            console.log(`Input character: ${char[0]}`);
            let alteredChar = getLetter((chars.get(char[0])-shift+add)%cl);
            decoded.push(alteredChar);
            console.log(`Output character: ${alteredChar}`);
            char.shift();
            console.groupEnd();
        }
    }
    console.groupEnd();
    decoded = decoded.reverse().map(c => numbers.includes(c) ? numbers.indexOf(c).toString() : c).join('')
    console.log('%cResult:', 'font-weight: bold', decoded);
    console.groupEnd();
    return decoded;
}

const encodeBtn = document.getElementById('encodeBtn');
const encodeOut = document.getElementById('encodeOut');

const decodeBtn = document.getElementById('decodeBtn');
const decodeOut = document.getElementById('decodeOut');

const encodeMatch = document.getElementById('encodeMatch');

encodeBtn.addEventListener('click', () => {
    warn();
    let input = document.getElementById('encodeIn').value;
    let blue = encode(document.getElementById('encodeIn').value);
    let emoblue = emoEncode(blue);
    let out = document.getElementById('decodeIn');
    let emo = emoDecode(emoblue);
    let emoblueTest = decode(emo);
    encodeMatch.innerHTML = emoblueTest == input ? '<i class="bi bi-check"></i> The message encoded correctly' : '<i class="bi bi-x"></i> The message encoded incorrectly';
    encodeMatch.classList = emoblueTest == input ? 'fw-semibold opacity-75 text-success' : 'fw-semibold opacity-75 text-danger';
    encodeOut.innerText = emoblue;
    out.value = emoblue;
    out.select();
    out.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(out.value);
    document.getElementById('error').innerText = '';
    if (document.getElementById('autoclear').checked) {
        if (emoblueTest == input) {
            setTimeout(e => {
                if (document.getElementById('autoclear').checked) {
                    document.getElementById('encodeIn').value = '';
                }
            }, 3000);
        }
    }
})

decodeBtn.addEventListener('click', () => {
    warn();
    let emo = emoDecode(document.getElementById('decodeIn').value);
    let emoblue = decode(emo);
    decodeOut.innerText = emoblue;
    setTimeout(e => {
        if (document.getElementById('autoclear').checked) {
            document.getElementById('decodeIn').value = '';
        }
    }, 3000);
})

warn();

document.querySelector('.security').addEventListener('click', e => {
    document.querySelector('.security').classList.toggle('hidden');
    activated = !activated;
})

document.getElementById('encodeInBtn').addEventListener('click', e => {
    document.getElementById('encodeIn').value = '';
    encodeOut.innerText = '-';
})

document.getElementById('decodeInBtn').addEventListener('click', e => {
    document.getElementById('decodeIn').value = '';
    decodeOut.innerText = '-';
})