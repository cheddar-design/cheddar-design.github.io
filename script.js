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
}
fillMap()
const getLetter = (value) => {
    return [...chars].find(([key, val]) => val == value)[0]
}

const cl = chars.size;

const encode = (str) => {
    let encoded = [];
    let add = (Math.floor(str.length/cl)*cl)+cl;
    for (let i = 0; i < str.length; i++) {
        let shift = i;
        console.log(chars.get(str[i]), str[i], shift, add, cl)
        let char = i%2 == 0 ? (chars.get(str[i])+shift+add)%cl : getLetter((chars.get(str[i])+shift+add)%cl);
        encoded.push(char);
    }
    return encoded.join('');
}

const decode = (str) => {
    let patt = /(\d+)/g;
    let patt2 = /\D/g;
    let nums = str.match(patt);
    let char = str.match(patt2);
    let length = nums.length;
    let decode = [];
    let add = (Math.floor(length*2/cl)*cl)+cl;
    for (let i = 0; i < length; i++) {
        let shift = i*2;
        decode.push(getLetter((Number(nums[0])-shift+add)%cl));
        nums.shift();
        if (char && char[0]) {
            shift++;
            console.log(chars.get(char[0]), char[0], shift, add, cl)
            decode.push(getLetter((chars.get(char[0])-shift+add)%cl));
            char.shift();
        }
    }
    return decode.join('');
}

const encodeBtn = document.getElementById('encodeBtn');
const encodeOut = document.getElementById('encodeOut');

const decodeBtn = document.getElementById('decodeBtn');
const decodeOut = document.getElementById('decodeOut');

encodeBtn.addEventListener('click', () => {
    if (!document.getElementById('encodeIn').value.match(/\d/g)) {
        encodeOut.innerText = encode(document.getElementById('encodeIn').value);
        document.getElementById('decodeIn').value = encodeOut.innerText;
        document.getElementById('error').innerText = '';
    } else {
        document.getElementById('error').innerText = 'Remove all numbers and emojis';
    }
})

decodeBtn.addEventListener('click', () => {
    decodeOut.innerText = decode(document.getElementById('decodeIn').value);
})

// ------------ EMOCODE ------------------------

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
emoChars.set('😵', '!');
emoChars.set('🤔', '?');
emoChars.set('🚀', ' ');
emoChars.set('🫥', '.');
emoChars.set('🤐', ',');
}
fillEmoMap()
const getEmo = (value) => {
    return [...emoChars].find(([key, val]) => val == value)[0]
}

const emoEncode = (str) => {
    let encoded = str.split('').map(c => getEmo(c.toLowerCase()));
    return encoded.join('');
}

const emoDecode = (str) => {
    let decoded = [...str];
    decoded = decoded.map(c => emoChars.get(c.toLowerCase()))
    return decoded.join('');
}

const emoEncodeBtn = document.getElementById('emoEncodeBtn');
const emoEncodeOut = document.getElementById('emoEncodeOut');

const emoDecodeBtn = document.getElementById('emoDecodeBtn');
const emoDecodeOut = document.getElementById('emoDecodeOut');

emoEncodeBtn.addEventListener('click', () => {
    emoEncodeOut.innerText = emoEncode(document.getElementById('emoEncodeIn').value);
    document.getElementById('emoDecodeIn').value = emoEncodeOut.innerText;
})

emoDecodeBtn.addEventListener('click', () => {
    emoDecodeOut.innerText = emoDecode(document.getElementById('emoDecodeIn').value);
})