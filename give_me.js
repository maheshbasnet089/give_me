

const fetch = require("node-fetch");
const chalk = require('chalk');
const dotenv = require("dotenv")

dotenv.config()


Color = chalk.bold.yellow

//NEWS SECTION 
function give_local_news(){
 const newsUrl = `https://newsapi.org/v2/everything?q=nepal&apiKey=${process.env.NEWS_API}`
 fetch(newsUrl)
  .then(response => response.json())
  .then((news) => {
        
        for(var i = 0;i<10;i++){
            console.log(chalk.bold.green( news.articles[i].title));
             console.log(' => '+ news.articles[i].description);
        }
  })
  .catch(error => {
    console.log(error);
  });
}
function give_tech_news(){
  const newsUrl = `https://newsapi.org/v2/everything?q=technology&apiKey=${process.env.NEWS_API}`
  fetch(newsUrl)
   .then(response => response.json())
   .then((news) => {
         
         for(var i = 0;i<10;i++){
             console.log(chalk.bold.green( news.articles[i].title));
              console.log(' => '+ news.articles[i].description);
         }
   })
   .catch(error => {
     console.log(error);
   });
 }





 //JOKES SECTION 
async function give_programming_jokes(){
  const jokesUrl = `https://v2.jokeapi.dev/joke/Programming`

  try{
    const response = await fetch(jokesUrl)
    const json = await response.json();
    if(typeof json.setup !== 'undefined' && typeof json.delivery !== 'undefined'){
      console.log(Color(json.setup));
      console.log(json.delivery);
    }
  }
  catch(err){
    console.log(err)
  }
}
async function give_misc_jokes(){
  const jokesUrl = `https://v2.jokeapi.dev/joke/Misc`

  try{
    const response = await fetch(jokesUrl)
    const json = await response.json();
    if(typeof json.setup !== 'undefined' && typeof json.delivery !== 'undefined'){
      console.log(Color(json.setup));
      console.log(json.delivery);
    }
  }
  catch(err){
    console.log(err)
  }
}

async function give_any_jokes(){
  const jokesUrl = `https://v2.jokeapi.dev/joke/Any`

  try{
    const response = await fetch(jokesUrl)
    const json = await response.json();
    if(typeof json.setup !== 'undefined' && typeof json.delivery !== 'undefined'){
      console.log(json.setup);
      console.log(json.delivery);
    }
  }
  catch(err){
    console.log(err)
  }
}


async function give_dark_jokes(){
  const jokesUrl = `https://v2.jokeapi.dev/joke/Dark`

  try{
    const response = await fetch(jokesUrl)
    const json = await response.json();
    if(typeof json.setup !== 'undefined' && typeof json.delivery !== 'undefined'){
      console.log(json.setup);
      console.log(json.delivery);
    }
  }
  catch(err){
    console.log(err)
  }
}



// setInterval(give_misc_jokes,9000)
// setInterval(give_programming_jokes,1000)
// setInterval(give_dark_jokes,1000)
// setInterval(give_any_jokes,1000)


module.exports= {
  give_programming_jokes,
  give_dark_jokes,
  give_any_jokes,
  give_misc_jokes,
  give_local_news,
  give_tech_news
}

