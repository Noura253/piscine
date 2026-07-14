function estUneDateValide(date) {
    return date instanceof Date && !isNaN(date.getTime());
}

function estApres(date1, date2) {
    return estUneDateValide(date1) && estUneDateValide(date2) && date1.getTime() > date2.getTime();
}

function estAvant(date1, date2) {
    return estUneDateValide(date1) && estUneDateValide(date2) && date1.getTime() < date2.getTime();
}

function estDansLeFutur(date) {
    return estUneDateValide(date) && date.getTime() > Date.now();
}

function estDansLePasse(date) {
    return estUneDateValide(date) && date.getTime() < Date.now();
}