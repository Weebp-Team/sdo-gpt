
function getAnswer(content, block, count=10) {
    if (count == 0) {
        return false;
    }
    const url = "https://free.churchless.tech/v1/chat/completions"
    var xmlHttp = new XMLHttpRequest();
    chrome.storage.sync.get(['token', 'model'], function (data) {
        xmlHttp.open("POST", url, false);
        xmlHttp.setRequestHeader("Content-Type", "application/json")
        xmlHttp.setRequestHeader("Authorization", `Bearer BetterChatGPT`)
        xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "Origin,Content-Type,Accept")
        var data = {
            "model": "gpt-3.5-turbo-0301",
            "messages": [{
                "role": "user",
                "content": content
            }
            ]
        }
        xmlHttp.onload = function() {
            var response = JSON.parse(xmlHttp.response)
            try {
                block.value = response["choices"][0]["message"]["content"];
                document.dispatchEvent(new Event('change'));
                return xmlHttp.response;
            }
            catch(e) {
                getAnswer(content, block, count-1);
            }
        }
        try {
            xmlHttp.send(JSON.stringify(data))
        }
        catch(e) {
            getAnswer(content, block, count-1);
        }
    })
}