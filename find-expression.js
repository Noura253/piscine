function findExpression(n, current = 1, expr = "1") {
    if (current === n) {
        return expr;
    }

    if (current > n) {
        return undefined;
    }

    let add = findExpression(n, current + 4, expr + " " + add4);
    if (add !== undefined) {
        return add;
    }

    return findExpression(n, current * 2, expr + " " + mul2);
}
 