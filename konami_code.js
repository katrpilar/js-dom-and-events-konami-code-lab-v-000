const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let lis = []

function init(e) {
  // Write your JavaScript code inside the init() function
  if(lis == code){
    let ans = ""
    code.forEach(function(elem){
      ans += String.fromCharCode(elem);
    })
    alert(ans);
  }else{
    if(e.which == code[0]){
      lis.push(e.which)
    }else{
      lis = []
    }
  }
}

const body = document.querySelector('body');
body.addEventListener('keydown',init);
