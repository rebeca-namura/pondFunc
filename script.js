function mediaNotas (n1, n2, n3) {
    let media = (n1 + n2 + n3)/3;
    if (media >= 7) {
        return "Aprovado, sua média foi " + media;
    } else if (media >= 5 && media < 7) { return "Recuperação, sua média foi "+ media;
    } else { return "Reprovado, sua média foi " + media; }
}

let x = 2;
let y = 4;
let z = 9;

console.log(mediaNotas(x, y, z));
