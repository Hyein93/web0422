// 요소 찾기
const btn1 = document.querySelectorAll('#tabs li').item(0);
const btn2 = document.querySelectorAll('#tabs li').item(1);

const cont1 = document.querySelector('#tab1');
const cont2 = document.querySelector('#tab2');

btn1.onclick = function () {
    resetF();
    resetC();
    btn1.classList.add('text');
    cont1.classList.add('on');
}

btn2.onclick = function () {
    resetF();
    resetC();
    btn2.classList.add('text');
    cont2.classList.add('on');
}

function resetF() {
    cont1.classList.remove('on');
    cont2.classList.remove('on');
}
function resetC() {
    btn1.classList.remove('text');
    btn2.classList.remove('text');
}
