// var block1 = 'block1';
// console.log('block1');
// var block2 = 'block2';
// console.log('block2');
// var block3 = 'block3';
// console.log('block3');
// var block4 = 'block4';
// console.log('block4');
// block1.addEventListener('mousemove', function() {
//     for(var i=0; i<block; i++){
//         block1[i].img.src="307600.jpg";
//     }
// });
table.onmouseover = function(event) {
    var target = event.target;
    target.style.background = 'pink';
    text.value += "mouseover " + target.tagName + "\n";
    text.scrollTop = text.scrollHeight;
  };
  
  table.onmouseout = function(event) {
    var target = event.target;
    target.style.background = '';
    text.value += "mouseout " + target.tagName + "\n";
    text.scrollTop = text.scrollHeight;
  };