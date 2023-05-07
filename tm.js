          // Hide the splash screen after 3 seconds
          setTimeout(function() {
            document.getElementById('splash-screen').style.display = 'none';
            document.getElementById('content').style.display = 'block';
          }, 2000);
    
          function fadeSplashScreen(){
            const splashScreen = document.querySelector('.image-screen');
            // fade in the splash screen
            splashScreen.style.opacity = '1';
            // wait for 2 secs
            setTimeout(() => {
              //fade out the splash screen
              splashScreen.style.opacity = '0';
              //wait for 1s before removing the splash screen from the DOM
              setTimeout(() => {
                splashScreen.remove();
              }, 2000);
            }, 2000);
          }
    
          window.onload = function(){
            fadeSplashScreen();
          }