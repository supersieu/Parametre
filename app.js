document.addEventListener('mousemove', moveObject);
function moveObject(e) {
    const mousecoords = getMousePos(e);
    const bubbles = document.querySelectorAll('.bubble');
    const layers = document.querySelectorAll('.layer');
    layers.forEach(function (layer, index) {
        let elcoords = getOffset(layer);
        let x = mousecoords.x - elcoords.left;
        let y = mousecoords.y - elcoords.top;
        let x2 = x;
        let y2 = y;
        if (x > 250) {
            x = 250;
        }
        if (x < 0) {
            x = 0;
        }
        if (y > 200) {
            y = 200;
        }
        if (y < 0) {
            y = 0;
        }
        bubbles[index].style.top = y + 'px';
        bubbles[index].style.left = x + 'px';
        layer.style.clipPath = `circle(30% at ${x2}px ${y2}px)`;
    })
    const bubblesUl = document.querySelectorAll('.bubble-ul');
    const layersUl = document.querySelectorAll('.layer-ul');
    layersUl.forEach(function (layer, index) {
        let elcoords = getOffset(layer);
        let x = mousecoords.x - elcoords.left;
        let x2 = x;
        let y = mousecoords.y - elcoords.top;
        if (x > 350) {
            x = 350;
        }
        bubblesUl[index].style.top = y + 'px';
        bubblesUl[index].style.left = x + 'px';
        layer.style.clipPath = `circle(30% at ${x2}px ${y}px)`;
    })
}

function getMousePos(e) {
    return {
        x: e.clientX + document.body.scrollLeft,
        y: e.clientY + document.body.scrollTop
    };
}
function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}

const checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function () {
    if (this.checked) {
        trans();
        document.querySelector('nav').classList.add('darkmode');
        document.querySelector('section').classList.add('darkmode');
        document.querySelector('.inputBox div .slider').classList.add('lightmode');
        document.querySelector('.inputBox div span').classList.add('lightmode');
        document.querySelector('ul .slider').classList.add('lightmode');
    } else {
        trans();
        document.querySelector('nav').classList.remove('darkmode');
        document.querySelector('section').classList.remove('darkmode');
        document.querySelector('.inputBox div .slider').classList.remove('lightmode');
        document.querySelector('.inputBox div span').classList.remove('lightmode');
        document.querySelector('ul .slider').classList.remove('lightmode');
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}

const slider = document.querySelector('ul .slider');
const allLi = document.querySelectorAll('li');
allLi.forEach(li => {
    li.addEventListener('click', () => {
        if (li.getAttribute('data-id') == 4) {
            slider.style.top = getOffset(li).top - 85 + 'px';
        }
        else {
            slider.style.top = getOffset(li).top - 90 + 'px';
        }
    })
})
const burger = document.querySelector('.burger');
const nav = document.querySelector('.divNav');
const section = document.querySelector('section');
burger.addEventListener('click', toggle);
function toggle() {
    burger.classList.toggle('toggle');
    nav.classList.toggle('navActive');
    section.classList.toggle('sectionActive');
}
