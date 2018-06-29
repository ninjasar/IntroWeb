document.addEventListener('DOMContentLoaded', function(){

  function displayTime(){
    const time= new Date();
    var hours = time.getHours();
    var mins = time.getMinutes();
    document.querySelector('#website').innerHTML +=  "  BTW, This is your local time! " + hours + ":" + mins;
  }

  displayTime();

});

function changeSomeStyle(e){
  var toChange = document.querySelector('#mar');
  var fmInput = document.querySelector('#topFmInput');
  toChange.innerHTML = fmInput.value;
  toChange.style.color = "hotpink";
  console.log("hi");
}
