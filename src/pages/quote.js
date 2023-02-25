const citation = [
    '«Надо любить жизнь больше, чем смысл жизни».\n' +
    '(Федор Достоевский)',

    '«Настоящая ответственность бывает только личной».\n' +
    '(Фазиль Искандер)',

    '«Все счастливые семьи счастливы одинаково, каждая несчастливая семья несчастлива по-своему».\n' +
    '(«Анна Каренина», Лев Толстой)',

    '«Счастлив тот, кто считает себя счастливым». \n' +
    '(Генри Филдинг)'
]

const quoteContainer = document.getElementById("quote_container");
quoteContainer.innerText = getRandomArrayElement(citation)

function getRandomArrayElement(arr){
    return arr[Math.floor(Math.random()*arr.length)]
}



