import { useEffect, useState } from "react";
import { numberOfNews } from "../../../commons/functions";
import Item from "./item";
import './news.css';

async function searchNews(q: string | number | boolean) {
  q = encodeURIComponent(q);
  const response = await fetch(`https://bing-news-search1.p.rapidapi.com/news/search?freshness=Week&textFormat=Raw&mkt=en-US&setLang=EN&safeSearch=Strict&q=${q}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
      "x-rapidapi-key": 'e130d9abcbmsh6115b7d3f45d8c9p17f786jsnfe9fbe5600c2',
      "x-bingapis-sdk": "true"
    }
  });
  const body = await response.json();
  return body.value;
}
  
let loadedForTheFirstTime = false;

export default function News() {

  const fixedQuery = "Atlus Persona";
  const [list, setList] = useState([]);

  function search(): void {
    searchNews(fixedQuery).then(setList);
    //console.log("A search has been made");
  }

  if(loadedForTheFirstTime === false){
      search();
      loadedForTheFirstTime = true;
  }

  useEffect(()=>{
    setInterval(()=>{
      search();
      //A cada 8 horas atualiza 
    },1000*60*60*8 )
  });

  list.splice(numberOfNews());
    
  return (
    <div className="app">
      {!list
        ? null
        : list.length === 0
          ? <p><i>No results</i></p>
          : <ul>
            {list.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </ul>
      }
    </div>
  );
}