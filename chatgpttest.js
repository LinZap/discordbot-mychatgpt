const chatgpt = require('./chatgpt');
(async ()=>{
    let resp = await chatgpt('who are you?')
    console.log(resp)
})();