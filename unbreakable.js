function split(str, sep) {
    let res = [], cur = "";

    if (sep === "") {
        for (let c of str) res.push(c);
        return res;
    }

    for (let i = 0; i < str.length; i++) {
        if (str.slice(i, i + sep.length) === sep) {
            res.push(cur);
            cur = "";
            i += sep.length - 1;
        } else {
            cur += str[i];
        }
    }

    res.push(cur);
    return res;
}

function join(arr, sep) {
    let res = "";
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
        if (i < arr.length - 1) res += sep;
    }
    return res;
}

