const ireland = ['Duplin', 'Galway', 'Cork'];
const love =  ireland.map (function (nome){
    return `I love ${nome}`;
});
console.log(love);
const loveArrow =  ireland.map (
     (nome) =>{
    return `I love ${nome}`;
});

console.log(loveArrow);
const loveArrowSingle =  ireland.map (
    nome =>{
   return `I love ${nome}`;
});
console.log(loveArrowSingle);
const loveArrowOneLine =  ireland.map (nome => `I love ${nome}`);
console.log(loveArrowOneLine);

const loveChain = ireland
                .filter(nome => nome === 'Duplin')
                .map (nome => `I love ${nome}`);
console.log(loveChain);