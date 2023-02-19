const { Configuration, OpenAIApi } = require("openai")
const dotenv  =  require("dotenv")

dotenv.config()

module.exports = async function (message) {

    const configuration = new Configuration({
        organization: "org-g9CHnpViYW5YMJYj2ucCFrK3",
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        //stream: true,
        prompt: message,
        // temperature: 0.5,
        //stop: null,
        max_tokens: 100,
        //logit_bias: {"50256": -100},
        temperature: 1,
        // top_p: 0.1,
        // frequency_penalty: 1,
        // presence_penalty: 1,
        //stop: "\n",
        // logprobs: null,
        //echo: true
    })

    var result = response.data.choices[0].text;

    //console.log('response',response.data.choices[0].text)
    return result
}   


