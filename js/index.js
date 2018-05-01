delet.onclick = function(){
    document.getElementById('cuferblat').value ='';
};
delet1.onclick = function(){
    var str = document.getElementById('cuferblat').value ;
    str=str.substring(0, str.length - 1);
    document.getElementById('cuferblat').value = str;
};


click3.onclick = function() {
    document.getElementById('cuferblat').value += 3;
};
click2.onclick = function() {
    document.getElementById('cuferblat').value += 2;
};
click1.onclick = function() {
    document.getElementById('cuferblat').value += 1;
};
click4.onclick = function() {
    document.getElementById('cuferblat').value += 4;
};
click5.onclick = function() {
    document.getElementById('cuferblat').value += 5;
};
click6.onclick = function() {
    document.getElementById('cuferblat').value += 6;
};
click7.onclick = function() {
    document.getElementById('cuferblat').value += 7;
};
click8.onclick = function() {
    document.getElementById('cuferblat').value += 8;
};
click9.onclick = function() {
    document.getElementById('cuferblat').value += 9;
};
click0.onclick = function() {
    document.getElementById('cuferblat').value += 0;
};
point.onclick = function() {
    document.getElementById('cuferblat').value += ".";
};

plus.onclick = function() {
    document.getElementById('cuferblat').value += '+';
};
minus.onclick = function() {
    document.getElementById('cuferblat').value += '-';
};
division.onclick = function() {
    document.getElementById('cuferblat').value += '/';
};

mult.onclick = function() {
    document.getElementById('cuferblat').value += '*';
};
rovno.onclick = function() {
    if(document.getElementById('cuferblat').value == "")
    document.getElementById('cuferblat').value="";
    else
   document.getElementById('cuferblat').value=eval( document.getElementById('cuferblat').value);
};
