<<<<<<< HEAD
const fetch = require('node-fetch');

const HesabFaApiCall=async(url,body)=>{
    const { hesabServer ,hesabApi,tokenApi} = process.env;
    const headers={
        'Content-Type': 'application/json'
    }
    const initialPost=JSON.stringify({
        apiKey: hesabApi,
        loginToken: tokenApi,
        ...body
    })
    //console.log(initialPost)
    try{
    const response = await fetch(hesabServer+url,
         {method: 'POST', body: initialPost, headers:headers });
    const data = await response.json();
    //console.log(data)
       return(data)
    }
    catch(error){
        return(error)
    }
}
=======
const fetch = require('node-fetch');

const HesabFaApiCall=async(url,body)=>{
    const { hesabServer ,hesabApi,tokenApi} = process.env;
    const headers={
        'Content-Type': 'application/json'
    }
    const initialPost=JSON.stringify({
        apiKey: hesabApi,
        loginToken: tokenApi,
        ...body
    })
    //console.log(initialPost)
    try{
    const response = await fetch(hesabServer+url,
         {method: 'POST', body: initialPost, headers:headers });
    const data = await response.json();
    //console.log(data)
       return(data)
    }
    catch(error){
        return(error)
    }
}
>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
module.exports =HesabFaApiCall