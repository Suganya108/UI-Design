var body = document.getElementsByTagName('body')[0];
var d = document.createElement('div');
d.className = 'd';
var d1 = document.createElement('div');
d1.className = 'd1';

var dt = document.createElement('div');
dt.className = 'dt';


var ul = document.createElement('ul');
ul.className = 'searchToolOptions';
var li = document.createElement('li');
li.className = 'left';
var a = document.createElement('p');
a.className = 'searchToolOption';
a.href = '#';
a.innerHTML = 'Landing';
li.appendChild(a);
ul.appendChild(li);

var b = document.createElement('div');
b.style.backgroundColor = '#fff';
b.style.padding = '1px';
var li = document.createElement('li');
li.className = 'right';
var a = document.createElement('button');
a.className = 'searchToolOption';
a.href = '#';
a.innerHTML = 'Get Started';
b.appendChild(a);
li.appendChild(b);
ul.appendChild(li);

var li = document.createElement('li');
li.className = 'right';
var a = document.createElement('p');
a.className = 'searchToolOption';
a.href = '#';
a.innerHTML = 'FAQ';
li.appendChild(a);
ul.appendChild(li);
var li = document.createElement('li');
li.className = 'right';
var a = document.createElement('p');
a.href = '#';
a.innerHTML = 'Pricing';
li.appendChild(a);
ul.appendChild(li);
var li = document.createElement('li');
li.className = 'right';
var a = document.createElement('p');
a.className = 'searchToolOption';
a.href = '#';
a.innerHTML = 'Reviews';
li.appendChild(a);
ul.appendChild(li);
var li = document.createElement('li');
li.className = 'right';
var a = document.createElement('p');
a.className = 'searchToolOption';
a.href = '#';
a.innerHTML = 'Features';
li.appendChild(a);
ul.appendChild(li);
var li = document.createElement('li');
li.className = 'right';
var a = document.createElement('p');
a.className = 'searchToolOption';
a.href = '#';
a.innerHTML = 'Home';
li.appendChild(a);
ul.appendChild(li);

dt.appendChild(ul);
d1.appendChild(dt);
d.appendChild(d1)
body.appendChild(d);

var p = document.createElement('p');
p.style.marginTop = '12%';
p.style.marginLeft = '5%';
p.style.fontWeight = 'normal';
p.innerHTML = '<p class="f2" style="color:white; font-size:40px; line-height: 1;"> Fly  makes  you <br> faster</p>';
d1.appendChild(p);
d.appendChild(d1)
body.appendChild(d);

var p = document.createElement('p');
p.style.marginTop = '-3%';
p.style.marginLeft = '5%';
p.style.fontWeight = 'normal';
p.innerHTML = '<p class="f2" style="color:white; font-size:12px;line-height: 2;"> New free template by uicookies.com. For more <br> templates visit the site. Lorem ipsum dolor sit amet, <br> consectetur adipisicing elit. </p>';
d1.appendChild(p);
d.appendChild(d1)
body.appendChild(d);

var b = document.createElement('button');
b.className = 'b1';
b.style.marginLeft = '5%';
b.innerHTML = 'SEE PRICING';
d1.appendChild(b);
d.appendChild(d1)
body.appendChild(d);

var d3 = document.createElement('div');
d3.className = 'd3';
var c = document.createElement('center');
c.innerHTML = '<p style="color:gray; font-size:18px;font-family:Verdana;margin-top:-10px;"> Sign Up for Free</p>';
d3.appendChild(c);
d1.appendChild(d3);
d.appendChild(d1)
body.appendChild(d);

var i = document.createElement('input');
i.className = 'i';
i.placeholder = 'Full name';
d3.appendChild(i);
d1.appendChild(d3);
d.appendChild(d1)
body.appendChild(d);
var i = document.createElement('input');
i.className = 'i';
i.placeholder = 'Email';
d3.appendChild(i);
d1.appendChild(d3);
d.appendChild(d1)
body.appendChild(d);
var i = document.createElement('input');
i.className = 'i';
i.placeholder = 'Email';
d3.appendChild(i);
d1.appendChild(d3);
d.appendChild(d1)
body.appendChild(d);
var i = document.createElement('select');
i.className = 'i';
i.style.padding = '0px';
i.innerHTML = '<option>Type</option>';
d3.appendChild(i);
d1.appendChild(d3);
d.appendChild(d1);
body.appendChild(d);
var b = document.createElement('button');
b.className = 'b2';
b.innerHTML = 'Register';
d3.appendChild(b);
d1.appendChild(d3);
d.appendChild(d1);
body.appendChild(d);

var d2 = document.createElement('div');
d2.className = 'd2';

var c = document.createElement('center');
var p = document.createElement('p1');
p.innerHTML = 'F E A T U R E S';
c.appendChild(p);
d2.appendChild(c);
var c = document.createElement('center');
var p = document.createElement('p2');
p.innerHTML = 'App Features';
c.appendChild(p);
d2.appendChild(c);

d.appendChild(d2);
body.appendChild(d);