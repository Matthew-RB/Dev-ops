const fetch = require('node-fetch');

const login = async ()=> {
    const tokenResponse = await fetch('https://dev.stedi.me/login',{
  method: 'POST',
  body:JSON.stringify({
    userName: "bru17005@byui.edu",
    password:"Dev@ps5150"
  })

})
};
export {login};
