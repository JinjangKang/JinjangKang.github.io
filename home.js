let moving = setTimeout(function () {
    let loadDiv = document.getElementById("load");
    loadDiv.style.backgroundPosition = "center top";
}, 500);

let text = "너의 이름은.";

function typeEffect(text, i) {
    if (i < text.length) {
        if (text.charAt(i) === " ") {
            // 공백 문자일 경우 HTML entity로 변환
            document.getElementById("typing").innerHTML += "&nbsp;";
        } else {
            document.getElementById("typing").innerHTML += text.charAt(i);
        }
        i++;
        setTimeout(function () {
            typeEffect(text, i);
        }, 300); // 각 글자가 출력되는 시간 간격 (200ms)
    }
}

setTimeout(() => typeEffect(text, 0), 2000);
