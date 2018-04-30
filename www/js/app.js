// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'HealthCare', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
  // Enable panel left visibility breakpoint
  panel: {
    leftBreakpoint: 960,
  },
  
});



// Init/Create left panel view
/* var mainView = app.views.create('.view-left', {
  url: '/'
});
 */
// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

// Login Screen Demo


  $$('#my-login-screen .login-button').on('click', function () {
    var username = $$('#my-login-screen [name="username"]').val();
    var password = $$('#my-login-screen [name="password"]').val();
  
    // Close login screen
    app.loginScreen.close('#my-login-screen');
  
    // Alert username and password
    var msg = "ข้อมูลการจองได้ทำการส่งไปเรียบร้อยแล้ว ขอให้ท่านรอการยืนยันจากทางโรงพยาบาล application จะทำการแจ้งเตือนให้ทราบ"
    app.dialog.alert(msg);
  
  
    
  });

  



$$('#call').on('click', function () {

    var pMessage = {
      event_name: 'call',
      extension_number: '9233'
    }
 // check os
 
 var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
 if (isMobile)
 {
  console.log('chat ii post')
   window.postMessage(JSON.stringify(pMessage))
 }
  

});
$$('#chat').on('click', function () {
  console.log('chat ii')
  var pMessage = {
    event_name: 'chat',
    room_name: 'fp9FjPyYJuqyX97Gt'
  }
// check os
console.log(navigator.userAgent)
 var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
 if (isMobile)
 {
  console.log('chat ii post')
   window.postMessage(JSON.stringify(pMessage))
 }
  

});

function phoneCall (number)
{
  var pMessage = {
    event_name: 'call',
    extension_number: number
  }
// check os

  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  if (isMobile)
  {
  console.log('chat ii post')
  window.postMessage(JSON.stringify(pMessage))
  }

}

