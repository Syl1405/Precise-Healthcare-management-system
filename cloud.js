import React from "react";
import ReactDOM from "react-dom";
import WordCloud from "react-d3-cloud";
import data from "./wordcloud.json";
const keys=Object.keys(data);
let buffer = [];
for(var i=0;i<keys.length;++i){
  if(data[keys[i]]["draw"]){
    buffer.push({text:keys[i],value:data[keys[i]]["times"]+10.5}); //加權
  }
  else{
    buffer.push({text:keys[i],value:data[keys[i]]["times"]});
  }
}
function DrawCloud() {
  const newData = buffer.map(item => ({
    text: item.text,
    value: item.value
  }));

  function show(v){
    function ShowValue(){
      const className = 'value';
      return(<div className={className}><h1>{v}</h1></div>);
    }
    ReactDOM.render( <ShowValue /> , document.getElementById('WordCloud') );
    console.log(v);
  }
  return (
    <WordCloud
      width={1000}
      height={750}
      data={newData}
      fontSizeMapper={word => word.value*4+10} //scale function
      onWordMouseOver={word=> show(word.value)}
      padding={2}
    />
  );
}
function run() {
  ReactDOM.render(<DrawCloud />, document.getElementById('root'));
}
if (['complete','loaded','interactive'].includes(document.readyState) && document.body) { // onload
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}