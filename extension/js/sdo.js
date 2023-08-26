document.addEventListener("DOMContentLoaded", function() {
    var elementAnswerDiv = document.createElement("div")
    var textArea = document.createElement("textarea")
    textArea.style = "height: 200px; width: 400px; display: none;"
    textArea.disabled = true;
    elementAnswerDiv.style = "position: fixed;" +
                             "bottom: 10px;" +
                             "left: 10px;"
    elementAnswerDiv.appendChild(textArea)
    this.body.appendChild(elementAnswerDiv);
    var questions = document.getElementsByClassName("qtext");
    for (var i=0; i < questions.length; i++) {
        var text = questions[i].textContent;
        var elementButton = document.createElement("button");
        elementButton.textContent = "Получить ответ";
        (function(text, block) {
            elementButton.addEventListener("click", function() {
                getAnswer(text, block);
            });
        })(text, textArea);
        questions[i].appendChild(elementButton);
    }
})