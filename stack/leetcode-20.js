function checkStringIsValid($str) {
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}',
    };

    if(
        !$str.length % 2 || // if str is odd this will invalid
        pairs[$str[0]] !== $str[$str.length - 1] || // if first and last char are not pair
        !Object.keys(pairs).includes($str[0]) // if first char is start with close syntax
    ) {
        return "invilid";
    }

    let halfIndex = $str.length / 2;

    let status = 'valid';

    for (let i = 1; i <= (halfIndex-1); i++) {
        
        if(pairs[$str[i]] !== $str[$str.length - 1 - i]) {
            status = 'invalid';
            break;
        }
    }

    return status;
}

console.log(
    checkStringIsValid(
        '([{[({])]}])'
    )
);