function cekAngka() {
    let angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

    for (let i = 0; i < angka.length; i++) {
        if (isFinite(angka[i].length) === false) {
            console.log('Angka ' + angka[i] + ' NOT Infinity');
        } else {
            console.log('Angka ' + angka[i] + ' Infinity');
        }
    }
}
cekAngka();