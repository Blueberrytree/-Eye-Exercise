
document.onmousemove = (event) => {
  let eyes=['ball','ball2']
  console.log("length of eye",eyes.length)
  for (var i=0;i<eyes.length;i++){    
    console.log("loop index  ==>",i)
    const balls = document.getElementsByClassName(eyes[i]);
    const x = (event.clientX * 100) / window.innerWidth + '%';
    const y = (event.clientY * 100) / window.innerHeight + '%';
  
    balls[0].style.left = x;
    balls[0].style.top = y;
    balls[0].transform = 'translate(-' + x + ',-' + y + ')';

  }
 


  
};


