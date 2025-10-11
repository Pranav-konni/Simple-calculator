function btnClick(value) {
    document.getElementById('input').value += value;
}

function clearDisplay() {
    document.getElementById('input').value = '';
}
function equalClick() {
    var text =document.getElementById('input').value;
    var result=eval(text);
    document.getElementById('input').value=result;
}