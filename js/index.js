const f = document.querySelector('.rondon-color');
const a = document.querySelector('.a-color');
const er = document.querySelector('.r-color');
const i = document.querySelector('.test-color');
const violet = document.querySelector('.nenem');
const a2 = document.querySelector('.a');
const n = document.querySelector('.n');
const i2 = document.querySelector('.i');
const n2 = document.querySelector('.n2');
const h = document.querySelector('.h');
const o = document.querySelector('.o');
const ex = document.querySelector('.ex');





function colorRandom() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    f.style.color = 'rgb(' + r + ', ' + g + ', ' + g + ')';
    a.style.color = 'rgb(' + r + ', ' + g + ', ' + r + ')';
    er.style.color = 'rgb(' + b + ', ' + r + ', ' + b + ')';
    i.style.color = 'rgb(' + r + ', ' + b + ', ' + b + ')';
    violet.style.color = 'rgb(' + g + ', ' + b + ', ' + r + ')';
    a2.style.color = 'rgb(' + r + ', ' + r + ', ' + b + ')';
    n.style.color = 'rgb(' + b + ', ' + g + ', ' + g + ')';
    i2.style.color = 'rgb(' + g + ', ' + g + ', ' + g + ')';
    n2.style.color = 'rgb(' + b + ', ' + r + ', ' + g + ')';
    h.style.color = 'rgb(' + g + ', ' + g + ', ' + r + ')';
    o.style.color = 'rgb(' + r + ', ' + b + ', ' + r + ')';
    ex.style.color = 'rgb(' + r + ', ' + r + ', ' + r + ')';
}
var tm = setInterval(colorRandom, 1000);