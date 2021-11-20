snake.gart02 = function() { // creates mod menu
  function selectCus() {
    var cussize2 = prompt("GARTER SNAKE: Enter custom level size number")
    while (cussize2 !== parseInt(cussize2, 10).toString()) {
      var cussize2 = prompt("GARTER SNAKE: That isn't a vaild number");
    }
    return cussize2;
  };
  var x = document.createElement("BUTTON");
  x.id = "GarterSet1";
  x.class = "FL0z2d iIs7Af";
  var y = document.createTextNode("Pause");
  x.appendChild(y);
  var z = document.getElementsByClassName("bZUgDf")[0];
  z.appendChild(x);
  
  x.addEventListener("click", function() {
     window.alert("GARTER SNAKE: Paused")
  });
  
  var x0 = document.createElement("BUTTON");
  x0.id = "GarterSet1";
  x0.class = "FL0z2d iIs7Af";
  var y0 = document.createTextNode("Set a Custom Stage Size");
  x0.appendChild(y0);
  
  x0.addEventListener("click", function() {
     window.cussize = selectCus();
     window.snake.gart01();
  });
};

snake.gart01 = function() {
  // actual stuff
  const scripts = document.getElementsByTagName('script');
  for(let script of scripts) {
    const req = new XMLHttpRequest();
    req.open('GET', script.src);
    req.onload = function() {
      const code = this.responseText;
      if(code.indexOf('#A2') === -1)
        return;
      
      // stuff that makes speeds work
      const limesarebetter = code.match(
        /[a-zA-Z0-9_$]{1,6}=function\(a\){switch\(a\.[a-zA-Z0-9_$]{1,6}\){case 1:return\.66[^}]*?1}}/
      )[0];
      const limename = limesarebetter.match(/[a-zA-Z0-9_$]{1,6}/)[0];
      const limespeed = limesarebetter.match(/switch\(a\.[a-zA-Z0-9_$]{1,6}\)/)[0].replace('switch(a.', 'this.').replace(')', '');
      const a = code.match(new RegExp(
        `this\\.[a-zA-Z0-9_$]{1,6}=[a-zA-Z0-9_$]{1,6}\\*${limename}\\(this\\);`
      ))[0];
      var rand = Math.random()
      eval(
        limesarebetter.replace(
          '1.33;',
          `1.33;case 3:return _soup;case 4:return 2;case 5:return Infinity;case 6:return ${rand};case 7:return 0.1;case 8:return 0.25;`
        )
      );

      const soup = code.match(
        /[a-zA-Z0-9_$]{1,6}\.prototype\.update=function\(\){[^]*?this\)}}}}/
      )[0];
      const p = soup.match(
        /:this\.[a-zA-Z0-9_$]{1,6}\+=1;this\.[a-zA-Z0-9_$]{1,6}\+\+;/
      )[0];
      eval('var _soup = 1.33;');
      eval('var _soep = 1.85;');
      eval(
        soup.replace(
          p,
          p + `_soup = Math.random() < .5 ? .66 : 1.33;_soep = Math.random() < .5 ? .45 : 1.85;${limespeed} === 3 && (${a.replace(limename + '(this);', '_soup')});${limespeed} === 6 && (${a.replace(limename + '(this);', '_soep')});`
        )
      );
      
      
      // stuff that makes stages function
      eval(
        code.match(
          /[a-zA-Z0-9_$]{1,6}=function\(a\){switch\(a\.[a-zA-Z0-9_$]{1,6}\){case 2:return 512;[^]*?256}}/
        )[0].replace(
          '96;',
          `96;case 3:return ${window.cussize};case 4:return 36;case 5:return 600;`
        )
      );
    };
    req.send();
  }  
};

snake.garter = function() {      
  
  // STAGE SIZES //
  
  img = new Image; // Custom Stage
  img.src = 'https://raw.githubusercontent.com/lukasexists/GoogleSnakeModAttempt/main/img/custom.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#size').appendChild(img);
  
  img = new Image; // Tiny Stage
  img.src = 'https://raw.githubusercontent.com/lukasexists/GoogleSnakeModAttempt/main/img/tiny.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#size').appendChild(img);
    
  img = new Image; // Extra Large Stage
  img.src = 'https://raw.githubusercontent.com/lukasexists/GoogleSnakeModAttempt/main/img/xlarge.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#size').appendChild(img);
  
  // SPEEDS //
    
  img = new Image; // Anxiety
  img.src = 'https://raw.githubusercontent.com/lukasexists/GoogleSnakeModAttempt/main/img/nervous.png';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);
  
  img = new Image; // Snail
  img.src = 'https://raw.githubusercontent.com/lukasexists/GoogleSnakeModAttempt/main/img/snail.png';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);
 
  img = new Image; // Zzz...
  img.src = 'https://raw.githubusercontent.com/lukasexists/GoogleSnakeModAttempt/main/img/zzz.png';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);
  
  img = new Image; // Fly
  img.src = 'https://raw.githubusercontent.com/lukasexists/GoogleSnakeModAttempt/main/img/annoying shit.png';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);
  
    img = new Image; // Gas
  img.src = 'https://raw.githubusercontent.com/lukasexists/GoogleSnakeModAttempt/main/img/car.png';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);
  
  img = new Image; // Bullet
  img.src = 'https://raw.githubusercontent.com/lukasexists/GoogleSnakeModAttempt/main/img/bullet.png';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);
};

window.cussize = "56"
window.snake.garter();
window.snake.gart01();
window.snake.gart02();
