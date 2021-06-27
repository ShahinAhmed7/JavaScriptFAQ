//using selectors inside the element
// traversing the dom

// OPTION 1

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//     const question = e.currentTarget.parentElement.parentElement;
//       question.classList.toggle('show-text');
//     })
// })


// OPTION 2 another way
const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
    const btn = question.querySelector('.question-btn');

    btn.addEventListener('click', function(){

        // This code remove active class previos item
        questions.forEach(function(item){
            if(item !== question) {
                item.classList.remove('show-text');
            }
        });
         // end

        question.classList.toggle('show-text');
    });
});