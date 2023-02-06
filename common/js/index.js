
////////////////////Loaded////////////////////
const $spin = document.getElementById('Loading');
const Loaded = () => {
    onload = $spin.classList.add('loaded');
}
setTimeout(Loaded,1000);

////////////////////closeHeader////////////////////
const $head = document.getElementById('header');
const $contY = document.getElementById('contact');
const y = () => {
    const clientY = $contY.getBoundingClientRect().top;
    if ( clientY < 140 ) {
        $head.classList.add('closeHead');
    }else{
        $head.classList.remove('closeHead');
    }
}
setInterval(y,100);

////////////////////form////////////////////
const $name01 = document.getElementById('name01');
const $name02 = document.getElementById('name02');
const $add = document.getElementById('address');
const $sub = document.getElementById('subject');
const $mes = document.getElementById('message');
const $btn = document.getElementById('btn');

const $warName = document.getElementById('warName');
const $warAdd = document.getElementById('warAdd');
const $warSub = document.getElementById('warSub');
const $warMes = document.getElementById('warMes');
const $warning = document.getElementById('warning');

$btn.addEventListener('click', (e) => {
    e.preventDefault();
    if ($name01.value.length < 1 && $name02.value.length < 1) {
        $warName.classList.add('warName');
    } else{
        $warName.classList.remove('warName');
    }
})

$btn.addEventListener('click', (e) => {
    e.preventDefault();
    if ($add.value.length < 1) {
        $warAdd.classList.add('warAdd');
    } else{
        $warAdd.classList.remove('warAdd');
    }
})

$btn.addEventListener('click', (e) => {
    e.preventDefault();
    if ($sub.value.length < 1) {
        $warSub.classList.add('warSub');
    } else{
        $warSub.classList.remove('warSub');
    }
})

$btn.addEventListener('click', (e) => {
    e.preventDefault();
    if ($mes.value.length < 1) {
        $warMes.classList.add('warMes');
    } else{
        $warMes.classList.remove('warMes');
    }
})

$btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (
        $name01.value.length > 1 &&
        $name02.value.length > 1 &&
        $add.value.length > 1 &&
        $sub.value.length > 1 &&
        $mes.value.length > 1
    ) {
        const subLen = document.forms[0].length
        var i = 0
        while (subLen > i) {
            const a = document.forms[0].elements[i].value;
            console.log(a)
            i++
        }
    }
})

