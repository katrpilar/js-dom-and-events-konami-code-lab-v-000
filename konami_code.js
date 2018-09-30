const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let lis = []

function init(e) {
  // Write your JavaScript code inside the init() function
  if e.which == code[i]


  if(lis != code){
    for(let i=0;i<code.length;i++){
      if(e.which == code[i]){
        lis.push(e.which)
      }

    }
  }else{
    let ans = ""
    code.forEach(elem){
      ans += String.fromCharCode(elem);
    }
    alert(ans);
  }
}

const body = document.querySelector('body');
body.addEventListener('keydown',init);
