(this.webpackJsonpblackjack=this.webpackJsonpblackjack||[]).push([[0],{22:function(a,e,r){a.exports=r(33)},27:function(a,e,r){},33:function(a,e,r){"use strict";r.r(e);var c=r(0),t=r.n(c),d=r(19),s=r.n(d),l=(r(27),r(10)),n=r(3),o=r(7),m=r(8),u=r(11),i=r(9),h=r(12),b=function(a){function e(){var a,r;Object(o.a)(this,e);for(var c=arguments.length,t=new Array(c),d=0;d<c;d++)t[d]=arguments[d];return(r=Object(u.a)(this,(a=Object(i.a)(e)).call.apply(a,[this].concat(t)))).state={name:"",ready:!1,badName:!1},r.handleInputChange=function(a){r.setState({name:a.target.value})},r.handleSubmit=function(a){a.preventDefault();var e=r.state.name;e?(localStorage.setItem("name",e),r.setState({ready:!0,badName:!1})):r.setState({badName:!0})},r}return Object(h.a)(e,a),Object(m.a)(e,[{key:"componentDidMount",value:function(){if(localStorage.setItem("name",""),!localStorage.getItem("highscores")){localStorage.setItem("highscores",JSON.stringify([{name:"Jerry",score:1225},{name:"Merry",score:1e3},{name:"Donald",score:225},{name:"Alicia",score:50}]))}}},{key:"render",value:function(){var a=this.state,e=a.name,r=a.ready,c=a.badName;return r?t.a.createElement(n.a,{to:"/game"}):t.a.createElement("div",{className:"start-page row"},t.a.createElement("div",{className:"col-md-12"},t.a.createElement("h1",null,"BlackJack")),t.a.createElement("div",{className:"col-md-12"},t.a.createElement("form",{onSubmit:this.handleSubmit},t.a.createElement("label",null,t.a.createElement("span",{className:"input-header"},"Nick:"),t.a.createElement("input",{type:"text",value:e,onChange:this.handleInputChange}),c?t.a.createElement("span",{className:"validation-message"},"Nick is required"):null),t.a.createElement("input",{className:"play-button",type:"submit",value:"Play"}))),t.a.createElement("div",{className:"mx-auto"},t.a.createElement(l.b,{to:"/highscores"},t.a.createElement("button",{className:"game-button"},"Highscores"))))}}]),e}(c.Component),C=function(a){return t.a.createElement("div",{className:a.className})},p=function(a){var e=a.cards.map((function(a,e){return t.a.createElement(C,{key:e,className:a.cardClass})}));return t.a.createElement("div",{className:"hand"},e)},y=function(a){var e=a.cards;return t.a.createElement("div",{className:"hand"},t.a.createElement(C,{className:e[0].cardClass}),t.a.createElement(C,{className:e[1]?e[1].cardClass:"cards card-back"}))},E=function(a){var e=a.bet,r=a.money,c=a.betLess,d=a.betMore,s=a.letsPlay;return t.a.createElement("div",{className:"bet-container"},t.a.createElement("div",null,t.a.createElement("h3",null,"Your money: ",r)),t.a.createElement("div",null,t.a.createElement("button",{className:"game-button",disabled:1===e,onClick:c},"-"),t.a.createElement("span",{className:"bet"},e),t.a.createElement("button",{className:"game-button",disabled:e>=r,onClick:d},"+")),t.a.createElement("button",{className:"game-button bet-button",onClick:s},"Play"))},g=[{cardId:"2c",cardClass:"cards card-2c",cardValue:2},{cardId:"2d",cardClass:"cards card-2d",cardValue:2},{cardId:"2h",cardClass:"cards card-2h",cardValue:2},{cardId:"2s",cardClass:"cards card-2s",cardValue:2},{cardId:"3c",cardClass:"cards card-3c",cardValue:3},{cardId:"3d",cardClass:"cards card-3d",cardValue:3},{cardId:"3h",cardClass:"cards card-3h",cardValue:3},{cardId:"3s",cardClass:"cards card-3s",cardValue:3},{cardId:"4c",cardClass:"cards card-4c",cardValue:4},{cardId:"4d",cardClass:"cards card-4d",cardValue:4},{cardId:"4h",cardClass:"cards card-4h",cardValue:4},{cardId:"4s",cardClass:"cards card-4s",cardValue:4},{cardId:"5c",cardClass:"cards card-5c",cardValue:5},{cardId:"5d",cardClass:"cards card-5d",cardValue:5},{cardId:"5h",cardClass:"cards card-5h",cardValue:5},{cardId:"5s",cardClass:"cards card-5s",cardValue:5},{cardId:"6c",cardClass:"cards card-6c",cardValue:6},{cardId:"6d",cardClass:"cards card-6d",cardValue:6},{cardId:"6h",cardClass:"cards card-6h",cardValue:6},{cardId:"6s",cardClass:"cards card-6s",cardValue:6},{cardId:"7c",cardClass:"cards card-7c",cardValue:7},{cardId:"7d",cardClass:"cards card-7d",cardValue:7},{cardId:"7h",cardClass:"cards card-7h",cardValue:7},{cardId:"7s",cardClass:"cards card-7s",cardValue:7},{cardId:"8c",cardClass:"cards card-8c",cardValue:8},{cardId:"8d",cardClass:"cards card-8d",cardValue:8},{cardId:"8h",cardClass:"cards card-8h",cardValue:8},{cardId:"8s",cardClass:"cards card-8s",cardValue:8},{cardId:"9c",cardClass:"cards card-9c",cardValue:9},{cardId:"9d",cardClass:"cards card-9d",cardValue:9},{cardId:"9h",cardClass:"cards card-9h",cardValue:9},{cardId:"9s",cardClass:"cards card-9s",cardValue:9},{cardId:"10c",cardClass:"cards card-10c",cardValue:10},{cardId:"10d",cardClass:"cards card-10d",cardValue:10},{cardId:"10h",cardClass:"cards card-10h",cardValue:10},{cardId:"10s",cardClass:"cards card-10s",cardValue:10},{cardId:"jc",cardClass:"cards card-jc",cardValue:2},{cardId:"jd",cardClass:"cards card-jd",cardValue:2},{cardId:"jh",cardClass:"cards card-jh",cardValue:2},{cardId:"js",cardClass:"cards card-js",cardValue:2},{cardId:"qc",cardClass:"cards card-qc",cardValue:3},{cardId:"qd",cardClass:"cards card-qd",cardValue:3},{cardId:"qh",cardClass:"cards card-qh",cardValue:3},{cardId:"qs",cardClass:"cards card-qs",cardValue:3},{cardId:"kc",cardClass:"cards card-kc",cardValue:4},{cardId:"kd",cardClass:"cards card-kd",cardValue:4},{cardId:"kh",cardClass:"cards card-kh",cardValue:4},{cardId:"ks",cardClass:"cards card-ks",cardValue:4},{cardId:"ac",cardClass:"cards card-ac",cardValue:11},{cardId:"ad",cardClass:"cards card-asd",cardValue:11},{cardId:"ah",cardClass:"cards card-ah",cardValue:11},{cardId:"as",cardClass:"cards card-js",cardValue:11}],I=function(a){function e(){var a,r;Object(o.a)(this,e);for(var c=arguments.length,t=new Array(c),d=0;d<c;d++)t[d]=arguments[d];return(r=Object(u.a)(this,(a=Object(i.a)(e)).call.apply(a,[this].concat(t)))).state={gameStarted:!1,bet:5,deck:[],playerCards:[],dealerCards:[],money:100,playerScore:0,dealerScore:0,playerWin:!1,dealerWin:!1,playerName:"",draw:!1,finish:!1},r.betLess=function(){r.state.bet>=1&&r.setState((function(a){return{bet:a.bet-5}}))},r.betMore=function(){r.state.bet<=r.state.money&&r.setState((function(a){return{bet:a.bet+5}}))},r.letsPlay=function(){r.setState({gameStarted:!0})},r.getRandomCards=function(){for(var a=0;a<2;a++)setTimeout(r.getPlayerCard,100);r.getDealerCard()},r.getDealerCard=function(){var a=r.state,e=a.deck,c=a.dealerCards,t=a.playerScore,d=a.money,s=a.bet,l=r.state.dealerScore,n=e.length>0?e:g,o=Math.floor(Math.random()*n.length);l+=n[o].cardValue,c.push(n[o]),n.splice(o,1);var m={dealerScore:l,dealerCards:c,deck:n};2===c.length&&(l===t?(m.draw=!0,m.money=d+s):21===l?(m.dealerWin=!0,m.money=d-s):21===t?(m.playerWin=!0,m.money=d+2*s):l>t?(m.dealerWin=!0,m.money=d-s):l<t&&(m.playerWin=!0,m.money=d+2*s)),r.setState(m)},r.startNewGame=function(){r.setState({gameStarted:!1,deck:[],playerCards:[],dealerCards:[],playerScore:0,dealerScore:0,playerWin:!1,dealerWin:!1,draw:!1})},r.getPlayerCard=function(){var a=r.state,e=a.deck,c=a.playerCards,t=a.bet,d=r.state,s=d.playerScore,l=d.playerWin,n=d.dealerWin,o=d.money,m=e.length>0?e:g,u=Math.floor(Math.random()*m.length);s+=m[u].cardValue,c.push(m[u]),21===s&&(l=!0,o+=2*t),s>21&&(n=!0,o-=t),r.setState({deck:m,playerCards:c,playerScore:s,playerWin:l,dealerWin:n,money:o})},r.endRound=function(){r.getDealerCard()},r.endGame=function(){var a=r.state,e=a.playerName,c=a.money,t=JSON.parse(localStorage.getItem("highscores"));t.push({name:e,score:c}),localStorage.setItem("highscores",JSON.stringify(t)),r.setState({finish:!0})},r}return Object(h.a)(e,a),Object(m.a)(e,[{key:"componentDidMount",value:function(){this.getRandomCards(4);var a=localStorage.getItem("name");this.setState({playerName:a})}},{key:"componentDidUpdate",value:function(){0===this.state.deck.length&&this.getRandomCards()}},{key:"render",value:function(){var a=this.state,e=a.gameStarted,r=a.bet,c=a.money,d=(a.playerName,a.dealerScore),s=a.playerScore,l=a.dealerCards,o=a.playerCards,m=a.playerWin,u=a.dealerWin,i=a.draw;return a.finish?t.a.createElement(n.a,{to:"/highscores"}):e?t.a.createElement("div",null,t.a.createElement(y,{cards:l}),t.a.createElement("div",{className:"panel"},t.a.createElement("h2",null,"Dealer's score: ",d)),t.a.createElement(p,{cards:o}),t.a.createElement("div",{className:"game-status"},t.a.createElement("div",{className:"info lose"},u?"You lost.":null),t.a.createElement("div",{className:"info win"},m?"You won!":null),t.a.createElement("div",{className:"info draw"},i?"Draw.":null),t.a.createElement("div",null,i||m||u?t.a.createElement("div",null,t.a.createElement("button",{className:"game-button",onClick:this.startNewGame},"Play again"),t.a.createElement("button",{className:"game-button",onClick:this.endGame},"End game and save score")):null)),t.a.createElement("div",{className:"panel"},t.a.createElement("h2",null,"Your score: ",s)),t.a.createElement("div",{className:"panel"},t.a.createElement("button",{className:"game-button",onClick:this.getPlayerCard,disabled:s>20||m||u},"Get card"),t.a.createElement("button",{className:"game-button",onClick:this.endRound,disabled:s>20||m||u},"End round"))):t.a.createElement(E,{bet:r,money:c,betLess:this.betLess,betMore:this.betMore,letsPlay:this.letsPlay})}}]),e}(c.Component),v=function(a){function e(){var a,r;Object(o.a)(this,e);for(var c=arguments.length,t=new Array(c),d=0;d<c;d++)t[d]=arguments[d];return(r=Object(u.a)(this,(a=Object(i.a)(e)).call.apply(a,[this].concat(t)))).state={highscores:[]},r}return Object(h.a)(e,a),Object(m.a)(e,[{key:"componentDidMount",value:function(){if(0===this.state.highscores.length){var a=JSON.parse(localStorage.getItem("highscores"));a.sort((function(a,e){return a.score>e.score?-1:e.score>a.score?1:0})),this.setState({highscores:a})}}},{key:"render",value:function(){var a=this.state.highscores.map((function(a,e){return t.a.createElement("tr",{key:e},t.a.createElement("td",null,e+1),t.a.createElement("td",null,a.name),t.a.createElement("td",null,a.score))}));return t.a.createElement("div",{className:"row"},t.a.createElement("div",{className:"col-md-12 text-center mt-5"},t.a.createElement(l.b,{to:"/"},t.a.createElement("button",{className:"game-button"},"Start Page"))),t.a.createElement("div",{className:"col-md-8 mx-auto mt-5 text-center"},t.a.createElement("div",{className:"mb-3"},t.a.createElement("h2",null,"Top 10")),t.a.createElement("table",{className:"table table-striped table-dark"},t.a.createElement("thead",null,t.a.createElement("tr",null,t.a.createElement("th",null,"Place"),t.a.createElement("th",null,"Nick"),t.a.createElement("th",null,"Score"))),t.a.createElement("tbody",null,a))))}}]),e}(c.Component);var f=function(){return t.a.createElement(l.a,null,t.a.createElement(n.b,{path:"/",exact:!0,component:b}),t.a.createElement(n.b,{path:"/game",exact:!0,component:I}),t.a.createElement(n.b,{path:"/highscores",exact:!0,component:v}))};s.a.render(t.a.createElement(f,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.0b0f805f.chunk.js.map