(this["webpackJsonpreact-music-player"]=this["webpackJsonpreact-music-player"]||[]).push([[0],{18:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(12),s=n.n(r),o=n(3),i=n.n(o),l=n(5),u=n(9),d=n(8),p=n(28);var j=function(){return console.log("importing songs list"),[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(p.a)(),active:!0},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(p.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(p.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(p.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(p.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(p.a)(),active:!1}]},m=(n(18),n(0)),b=function(e){var t=e.rangeChangeHandler,n=e.time,a=e.currentSong,c={transform:"translateX(".concat(n.rawCurrentTime/n.rawTotalTime*100,"%)")},r={background:"linear-gradient(to right, ".concat(a.color[0],", ").concat(a.color[1],")")};return Object(m.jsx)("div",{className:"slider-container",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{type:"range",style:r,onChange:t,min:"0",value:n.rawCurrentTime,max:n.rawTotalTime}),Object(m.jsx)("div",{className:"animate-track",style:c})]})})},h=function(e){var t=e.time,n=e.handleManualSeek,a=e.currentSong;return Object(m.jsxs)("div",{className:"seeker",children:[Object(m.jsx)("p",{className:"current-time",children:t.currentTime}),Object(m.jsx)(b,{rangeChangeHandler:function(e){n(e.target.value)},time:t,currentSong:a}),Object(m.jsx)("p",{className:"total-time",children:t.totalTime})]})},f=n(6),v=n(4),g=function(e){var t=e.isPlaying,n=e.handlePlay,a=e.songs,c=e.setCurrentSong,r=e.audioRef,s=e.setIsPlaying,o=e.currentSong,u=function(){var e=Object(l.a)(i.a.mark((function e(n){var l,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=a.findIndex((function(e){return e.id===o.id})),u="forward"===n?(l+1)%a.length:0===l?a.length-1:(l+-1)%a.length,e.next=4,c(a[u]);case 4:console.log("done"),t&&(r.current.play(),s(!0));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"controls",children:[Object(m.jsx)(f.a,{icon:v.a,className:"controls-left",onClick:function(){return u("back")}}),Object(m.jsx)(f.a,{icon:t?v.d:v.e,onClick:n,className:"controls-play"}),Object(m.jsx)(f.a,{icon:v.b,className:"controls-right",onClick:function(){return u("forward")}})]})},O=function(e){var t=e.navState,n=e.setNavState;return Object(m.jsx)("div",{className:"nav-container",children:Object(m.jsxs)("button",{onClick:function(){n(!t)},className:"nav-library-button ".concat(t?"library-open":""),children:[Object(m.jsx)(f.a,{icon:v.c,className:"icon-music"}),Object(m.jsx)("p",{className:"nav-title",children:"Library"})]})})},x=function(e){var t=e.song;return Object(m.jsxs)("div",{className:"song-info",children:[Object(m.jsx)("img",{src:t.cover,alt:"cover"}),Object(m.jsx)("h4",{className:"song-name",title:t.name,children:t.name}),Object(m.jsx)("h5",{className:"song-artist",title:t.artist,children:t.artist})]})},S=function(e){var t=e.song,n=e.setCurrentSong,a=e.audioRef,c=e.setIsPlaying,r=e.currentSong,s=e.setNavState,o=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.id),e.next=3,n(t);case 3:a.current.play(),c(!0),s(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"library-card-container ".concat(r.id===t.id?"card-selected":""),onClick:o,children:Object(m.jsxs)("div",{className:"library-card",children:[Object(m.jsx)("img",{src:t.cover,alt:t.name}),Object(m.jsxs)("div",{className:"song-meta",children:[Object(m.jsx)("div",{className:"song-name",children:t.name}),Object(m.jsx)("div",{className:"artist-name",children:t.artist})]})]})})},y=function(e){var t=e.songs,n=e.setCurrentSong,c=e.audioRef,r=e.setIsPlaying,s=e.currentSong,o=e.navState,i=e.setNavState,l=Object(a.useRef)(null);function u(e){console.log(e.target.className),!l.current||l.current.contains(e.target)||e.target.className.includes("nav-library-button")||(console.log("closing library"),i(!1),document.removeEventListener("mouseup",u))}return Object(a.useEffect)((function(){if(!1!==o)return document.addEventListener("mouseup",u),function(){document.removeEventListener("mouseup",u)}}),[o]),Object(m.jsxs)("div",{className:"library-container ".concat(o?"":"hide-library"),ref:l,children:[Object(m.jsx)("div",{className:"library-title",children:"Library"}),Object(m.jsx)("div",{className:"library",children:t.map((function(e){return Object(m.jsx)(S,{song:e,setCurrentSong:n,audioRef:c,setIsPlaying:r,currentSong:s,setNavState:i},e.id)}))})]})},N=function(e){var t=e.setIsPlaying,n=e.isPlaying,c=e.audioRef;Object(a.useEffect)((function(){document.addEventListener("keyup",r,!1)}),[t,n,c]);var r=function e(a){"Space"===a.code&&(console.log("Space pressed"),n?(c.current.pause(),t(!1)):(c.current.play(),t(!0)),document.removeEventListener("keyup",e,!1))};return Object(m.jsx)("div",{})},w=j();function C(e){var t=Math.floor(e/3600).toString().padStart(1,"0");return(t>0?t+":":"")+Math.floor(e%3600/60).toString().padStart(1,"0")+":"+Math.floor(e%60).toString().padStart(2,"0")}var T=function(){var e=Math.floor(Math.random()*(w.length-1+1)),t=Object(a.useState)(w[e]),n=Object(d.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(!1),o=Object(d.a)(s,2),p=o[0],j=o[1],b=Object(a.useState)(!1),f=Object(d.a)(b,2),v=f[0],S=f[1],T=Object(a.useState)({currentTime:"0:00",totalTime:"    ",rawCurrentTime:0,rawTotalTime:0}),k=Object(d.a)(T,2),P=k[0],E=k[1],I=Object(a.useRef)(null),M=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=w.findIndex((function(e){return e.id===c.id})),n=(t+1)%w.length,e.next=4,r(w[n]);case 4:v&&(I.current.play(),S(!0));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"super-class",children:[Object(m.jsx)(y,{songs:w,setCurrentSong:r,audioRef:I,setIsPlaying:S,currentSong:c,navState:p,setNavState:j}),Object(m.jsx)(x,{song:c}),Object(m.jsxs)("div",{className:"song-controls",children:[Object(m.jsx)(h,{time:P,handleManualSeek:function(e){console.log(e),I.current.currentTime=e},currentSong:c}),Object(m.jsx)(g,{isPlaying:v,handlePlay:function(){v?I.current.pause():I.current.play(),S(!v)},songs:w,setCurrentSong:r,audioRef:I,setIsPlaying:S,currentSong:c})]}),Object(m.jsx)(O,{navState:p,setNavState:j}),Object(m.jsx)("audio",{ref:I,src:c.audio,onTimeUpdate:function(e){var t=e.target;E(Object(u.a)(Object(u.a)({},P),{},{currentTime:C(t.currentTime),rawCurrentTime:t.currentTime}))},onLoadedMetadata:function(e){var t=e.target;E(Object(u.a)(Object(u.a)({},P),{},{totalTime:C(t.duration),rawTotalTime:t.duration}))},onEnded:M}),Object(m.jsx)(N,{isPlaying:v,setIsPlaying:S,audioRef:I})]})};n(25);var k=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(T,{})})};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.640197df.chunk.js.map