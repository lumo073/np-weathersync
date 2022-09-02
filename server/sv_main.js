(()=>{"use strict";const t={RAIN:.25,THUNDER:.25,CLEARING:.1,HALLOWEEN:.5},e={EXTRASUNNY:!0,CLEAR:!0,CLEARING:!0,OVERCAST:!0,SMOG:!0,FOGGY:!0,CLOUDS:!0,RAIN:!0,THUNDER:!0,SNOW:!1,BLIZZARD:!1,SNOWLIGHT:!1,XMAS:!1,HALLOWEEN:!1},n={EXTRASUNNY:.5,CLEAR:1,CLEARING:4,OVERCAST:5,SMOG:2,FOGGY:4,CLOUDS:5,RAIN:8,THUNDER:12,SNOW:6,BLIZZARD:12,SNOWLIGHT:4,XMAS:6,HALLOWEEN:12},o={EXTRASUNNY:[90,110],CLEAR:[80,95],CLEARING:[75,85],OVERCAST:[80,80],SMOG:[90,95],FOGGY:[80,90],CLOUDS:[80,90],RAIN:[75,90],THUNDER:[75,90],SNOW:[0,32],BLIZZARD:[-15,10],SNOWLIGHT:[0,32],XMAS:[-5,15],HALLOWEEN:[50,80]},a={EXTRASUNNY:[{to:"CLEAR",chance:50},{to:"OVERCAST",chance:50}],CLEAR:[{to:"FOGGY",chance:10},{to:"CLEAR",chance:10},{to:"CLOUDS",chance:25},{to:"SMOG",chance:25},{to:"EXTRASUNNY",chance:50}],CLEARING:[{to:"FOGGY",chance:10},{to:"CLOUDS",chance:25},{to:"SMOG",chance:25},{to:"CLEAR",chance:50},{to:"EXTRASUNNY",chance:50}],OVERCAST:[{to:"RAIN",chance:5},{to:"THUNDER",chance:5},{to:"CLOUDS",chance:25},{to:"SMOG",chance:25},{to:"FOGGY",chance:25},{to:"CLEAR",chance:50},{to:"EXTRASUNNY",chance:50}],SMOG:[{to:"CLEAR",chance:100}],FOGGY:[{to:"RAIN",chance:10},{to:"CLEAR",chance:100}],CLOUDS:[{to:"RAIN",chance:10},{to:"CLEARING",chance:50},{to:"OVERCAST",chance:50}],RAIN:[{to:"CLEARING",chance:100}],THUNDER:[{to:"CLEARING",chance:100}],SNOW:[{to:"CLEARING",chance:5},{to:"OVERCAST",chance:5},{to:"FOGGY",chance:5},{to:"CLOUDS",chance:5},{to:"XMAS",chance:50},{to:"SNOWLIGHT",chance:50},{to:"BLIZZARD",chance:50}],BLIZZARD:[{to:"XMAS",chance:50},{to:"SNOWLIGHT",chance:50}],SNOWLIGHT:[{to:"SNOW",chance:50},{to:"XMAS",chance:50}],XMAS:[{to:"SNOW",chance:50},{to:"SNOWLIGHT",chance:50},{to:"BLIZZARD",chance:50}],HALLOWEEN:[{to:"CLEARING",chance:100}]},c={0:{short:"N",long:"North"},1:{short:"NE",long:"Northeast"},2:{short:"E",long:"East"},3:{short:"SE",long:"Southeast"},4:{short:"S",long:"South"},5:{short:"SW",long:"Southwest"},6:{short:"W",long:"West"},7:{short:"NW",long:"Northwest"}},r=["THUNDER","RAIN","HALLOWEEN","CLEARING"],h=Object.keys(e).filter((t=>e[t]));let i=0;setImmediate((()=>{const t=new Date,e=(3600*t.getUTCHours()+60*t.getUTCMinutes()+t.getUTCSeconds())%7200/7200;i=Math.floor(1440*e),emitNet("nns_weather:client:time",-1,i)})),setInterval((()=>{i++,i>=1440&&(i=0)}),5e3),RegisterCommand("time",((t,e)=>{const n=NPX.getModule("Player").GetUser(t);if("admin"!==n.group&&"owner"!==n.group)return emitNet("DoLongHudText",t,"You do not have permissions to use this command.",2);if(0===e.length)return emitNet("DoLongHudText",t,"Format: /time [0-1440]",2);const o=parseInt(e[0]);if(o<0||o>1440)return emitNet("DoLongHudText",t,"Format: /time [0-1440]",2);i=o,emitNet("nns_weather:client:time",-1,i),emitNet("DoLongHudText",t,"Time changed",1)}),!1),onNet("nns_weather:client:time:request",(()=>{emitNet("nns_weather:client:time",global.source,i)}));const s=()=>Math.floor(i/60),N=()=>i%60;global.exports("currentTime",(()=>i)),global.exports("currentHour",s),global.exports("currentMinute",N),global.exports("currentTimeFormatted",(()=>`${s().toString().padStart(2,"0")}:${N().toString().padStart(2,"0")}`));let l=[];setImmediate((async()=>{for(let t=0;t<6;t++)await L()})),setInterval((()=>{l.shift(),L();const t=l[0];console.log(`^2[WEATHER] ${t.weather} at ${t.temperature}°F with ${(2.236936*t.windSpeed).toFixed(2)}mph ${c[Math.round(t.windDir)].long} ${r.includes(t.weather)?`with ${Math.round(100*t.rainLevel)}% Rain`:""}\n  `),emitNet("nns_weather:client:weather",-1,t)}),12e5),onNet("nns_weather:client:weather:request",(()=>{emitNet("nns_weather:client:weather",global.source,l[0])})),RegisterCommand("weather",((e,a)=>{var c,r;const i=NPX.getModule("Player").GetUser(e);if("admin"!==i.group&&"owner"!==i.group)return emitNet("DoLongHudText",e,"You do not have permissions to use this command.",2);if(0===a.length)return emitNet("DoLongHudText",e,"Format: /weather [type]",2);const s=a[0];if(!h.includes(s))return emitNet("DoLongHudText",e,"Format: /weather [type]",2);const N=null!==(c=o[s])&&void 0!==c?c:[80,100];l=[{weather:s,windSpeed:Math.random()*n[s],windDir:7*Math.random(),rainLevel:null!==(r=t[s])&&void 0!==r?r:0,temperature:getRandomInt(N[0],N[1])}];for(let t=0;t<5;t++)L();emitNet("nns_weather:client:weather",-1,l[0])}),!1);const L=()=>{var e,a,c,r;const i=l[l.length-1];if(i){const e=u(i.weather),a=null!==(c=o[e])&&void 0!==c?c:[80,100];l.push({weather:e,windSpeed:Math.random()*n[e],windDir:7*Math.random(),rainLevel:null!==(r=t[e])&&void 0!==r?r:0,temperature:getRandomInt(a[0],a[1])})}else{const c=(s=h)[Math.floor(Math.random()*s.length)],r=null!==(e=o[c])&&void 0!==e?e:[80,100];l.push({weather:c,windSpeed:Math.random()*n[c],windDir:7*Math.random(),rainLevel:null!==(a=t[c])&&void 0!==a?a:0,temperature:getRandomInt(r[0],r[1])})}var s},u=t=>{const e=(t=>{let e;const n=[];for(e=0;e<t.length;e++)n[e]=t[e].chance+(n[e-1]||0);const o=Math.random()*n[n.length-1];return t[n.findIndex((t=>t>o))]})(a[t]);return h.includes(e.to)?e.to:u(t)};global.exports("currentWeather",(()=>l[0])),global.exports("getProgression",(()=>l)),async function(){await async function(){await async function(){}(),await async function(){}(),await async function(){}()}()}()})();