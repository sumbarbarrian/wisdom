const citation = [
    {
        text: '«Надо любить жизнь больше, чем смысл жизни».',
        author: '(Федор Достоевский)'
    },

    {
        text: '«Все счастливые семьи счастливы одинаково, каждая несчастливая семья несчастлива по-своему».',
        author: '(«Анна Каренина», Лев Толстой)'
    },

    {
        text: '«Настоящая ответственность бывает только личной».',
        author: '(Фазиль Искандер)'
    },

    {
        text: '«Счастлив тот, кто считает себя счастливым».',
        author: '(Генри Филдинг)'
    },

    {
        text: 'placeholder',
        author:'placeholder'
}

]

const randomArrayElement = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
}

const quoteText = document.getElementById("id_quote_text");
const quoteAuthor = document.getElementById("id_quote_author");
const result = randomArrayElement(citation)
quoteText.innerText = result.text
quoteAuthor.innerText = result.author




