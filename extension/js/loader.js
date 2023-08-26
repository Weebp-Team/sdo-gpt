document.addEventListener("DOMContentLoaded", function(){
    var content = document.getElementById("question");
    var answerArea = document.getElementById("answer");
    chrome.storage.sync.get(['question', 'answer'], function (data) {
        content.value = data.question != undefined ? data.question : "";
        answerArea.value = data.answer != undefined ? data.answer : "";
    })
})

document.addEventListener("change", function(){
    var content = document.getElementById("question");
    var answerArea = document.getElementById("answer");
    chrome.storage.sync.set({ 'question': content.value });
    chrome.storage.sync.set({ 'answer': answerArea.value });
})