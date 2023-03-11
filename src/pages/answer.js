let mouth  = document.querySelector('.answer__mouth'),
    pupils = document.querySelectorAll('.answer__pupil');

document.addEventListener('mousemove', debounce((e) => {
    let x = e.clientX,
        y = e.clientY,
        height = window.innerHeight,
        width  = window.innerWidth;

    if (y > height / 2) {
        mouth.classList.remove('-closed');
    } else {
        mouth.classList.add('-closed');
    }

    let deltaX = (x - width  / 2) / width,
        deltaY = (y - height / 2) / height;

    [].forEach.call(pupils, (pupil) => {
        pupil.style.transform = `
translateX(${deltaX * 25}px)
translateY(${deltaY * 25}px)`;
    });
}), 100);


function debounce(func, ms) {
    let callAllowed = true;

    return function() {
        if (!callAllowed) {
            return;
        }

        func.apply(this, arguments);

        callAllowed = false;

        setTimeout(() => {
            callAllowed = true;
        }, ms);
    };
}

const answer = ['Да!', 'Нет', 'Несомненно','Маловероятно' ,'Невозможно' ,'Конечно!' , 'Безусловно!'];
const answerText = document.getElementById("id_answer_text");
const answerButton = document.getElementById("id_answer_button");
const image = document.getElementById('id_answer__face_block')
const choiceAnswer = (arr) => {
    return arr[Math.floor(Math.random()*arr.length)]
}
answerButton.addEventListener('click', () => {
    const result = choiceAnswer(answer)
    answerText.innerText = result
    image.style.display = 'none'
})
