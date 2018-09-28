
const prizes = ['a baseball cap', 'a million dollars', 'a hug', 'a brand new car', 'a pretty dress'];


const change = () => {
  console.log('im getting called');
  let body = document.querySelector('body');
  let title = document.getElementById('title');
  let picture1 = document.getElementById('img1');
  let picture2 = document.getElementById('img2');
  let background = document.getElementById('about');
  let descrip = document.getElementById('descrip');
  let button = document.getElementById('styleBtn');
  title.innerHTML = 'You did it!';
  title.classList.add('siteTitleChanged');
  picture1.classList.add('picChanged');
  picture2.classList.add('picChanged');
  background.classList.add("aboutChanged");
  descrip.innerHTML = 'Congrats</br>';
  styleBtn.style = "display: none";
  body.style = "cursor: url(http://ani.cursors-4u.net/others/oth-9/oth898.cur), auto !important;";
}

const swapT = () => {
  let p1 = document.getElementById('p1');
  let p2 = document.getElementById('p2');
  let temp = p1.innerHTML;
  p1.innerHTML = p2.innerHTML;
  p2.innerHTML = temp;
}

const swapI = () => {
  let p1 = document.getElementById('img1');
  let p2 = document.getElementById('img2');
  let temp = p1.src;
  p1.src = p2.src;
  p2.src = temp;
}


const randPrizeList = () => {
  let list = document.getElementById('prizeList');
  for(let a=0; a<prizes.length; a++) {
    list.innerHTML += '<li>' + prizes[a] + '</li> <br>';
  }
}

randPrizeList();

const winPrize = () => {
  let index = Math.floor(Math.random() * prizes.length)
  let displayDv = document.getElementById('prizeList');
  let btn = document.getElementById('prize');
  let message = document.getElementById('prizeDescrip');
  displayDv.innerHTML = 'You won <b>' + prizes[index] + '!</b>';
  btn.innerHTML = 'Click to win another!';
  message.innerHTML = 'Congratulations! <br>';
  message.style = 'font-weight: bold; text-align: center; font-size: 20px;'
}

const convert = () => {
  event.preventDefault();
  let miles = document.getElementById('miles').value;
  let km = document.getElementById('km');
  let res = miles*1.609344;
  km.innerHTML = res;
}

const newDoc = () => {

  let x = document.open();
  var date = new Date();

  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = "text/css";
  link.href = "./newDoc.css";

  x.write("<h1 class='imgTitle'>Narwhal</h1>");
  x.write("<img class='pic' id='pic' width='300px' height='300px' src='./narwhal.jpg'/>");
  x.write("<figCaption class='caption'><p>This is a picture of an adorable Narwhal.<br>");
  x.write('It is ' + document.getElementById('pic').width + ' pixels wide and '+ document.getElementById('pic').height +' pixels tall.</p></figCaption>');
  x.write("<p>Today's date is: "+date+"</p>");
  x.querySelector('head').appendChild(link);


  x.close();

}
