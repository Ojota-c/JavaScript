function meuEscopo() {
    const h1elementos = document.getElementById('elementos');


    const elementos = [
        { tag: 'p', texto: 'Frase 1' },//0
        { tag: 'div', texto: 'Frase 2' },//1
        { tag: 'footer', texto: 'Frase 3' },//2
        { tag: 'section', texto: 'Frase 4' },//3
    ];

    let html = '';
    for (let i = 0; i < elementos.length; i++) {
        html += `<${elementos[i].tag}>${elementos[i].texto}</${elementos[i].tag}>`;
    }
    h1elementos.innerHTML = html;

}
meuEscopo();