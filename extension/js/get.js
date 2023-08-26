document.addEventListener('DOMContentLoaded', function () {
    var content = document.getElementById("question");
    var answerArea = document.getElementById("answer");
    var button = document.getElementById("question-button")
    button.addEventListener("click", function(){
        getAnswer(content.value, answerArea);
        answerArea.value = "";
    })
})