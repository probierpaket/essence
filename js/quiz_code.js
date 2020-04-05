window.onload = function(){

    // Ссылка для последней страницы
    let a_href = 'http://google.com/';

    let step = 0;

    showQuestion();
    document.onclick = function(event) {
        event.stopPropagation();
        if(event.target.classList.contains('btn') && step != 6){
            step++;
            showQuestion(step);
        }
    }


    function showQuestion(questionNumber){
        let question = '';
        for (let key in quiz[step]['q']){
            question += `<div class="question__item">${quiz[step]['q'][key]}</div>`;
        }
        document.querySelector(".question").innerHTML = question;
        let answer = '';
        if(step == 0){
            answer += `<div class="btn answers__first">${quiz[step]['a'][1]}</div>`;
        }
        if(step == 6){
        for (let key in quiz[step]['a']){
                answer += `<a href="${a_href}"><div class=" btn answers__last">${quiz[step]['a'][key]}</div></a>`;
            }
        }
        if(step > 0 && step < 6){
            for (let key in quiz[step]['a']){
                answer += `<div class=" btn answers__item">${quiz[step]['a'][key]}</div>`;
            }
        }
        document.querySelector(".answers").innerHTML = answer;
    }
}

