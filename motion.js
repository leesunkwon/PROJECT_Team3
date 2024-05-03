
  
			function toggleMenu() {
        var menu = document.querySelector('.menu');
        if (menu.style.left === '-300px') {
          menu.style.left = '0';
        } else {
          menu.style.left = '-300px';
        }
      }