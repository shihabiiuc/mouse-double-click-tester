var click = document.getElementById('click');
var textarea = document.getElementById('textarea');
var clicks = document.getElementById('count');
var dcCount = document.getElementById('dcCount');
var reset = document.getElementById('reset');
reset.onclick = function () {
    clicks.value = 0;
    dcCount.value = 0;
    textarea.value = '';
    click.style.background = '#182860';
}
var prevClickTime = Date.now();
function clickEvent() {
    var currentTime = Date.now();
    var diff = currentTime - prevClickTime;

    if (diff <= 80) { // 0.08 seconds in milliseconds
        click.style.background = 'red';
        dcCount.value++;
    }
    textarea.value = diff + " ms\n" + textarea.value;
    prevClickTime = currentTime;
    clicks.value++;
}
click.addEventListener('click', clickEvent);