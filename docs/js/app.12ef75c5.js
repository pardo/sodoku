(function(t){function e(e){for(var a,l,s=e[0],o=e[1],u=e[2],d=0,h=[];d<s.length;d++)l=s[d],r[l]&&h.push(r[l][0]),r[l]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);c&&c(e);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var o=n[s];0!==r[o]&&(a=!1)}a&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},r={app:0},i=[];function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/sodoku/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"27dc":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("a481"),n("28a5"),n("55dd");var a=n("2909"),r=(n("6762"),n("2fdb"),n("7514"),n("cadf"),n("551c"),n("097d"),n("2b0e")),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},l=[],s=n("2877"),o={},u=Object(s["a"])(o,i,l,!1,null,null,null);u.options.__file="App.vue";var c=u.exports,d=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",[n("span",{directives:[{name:"show",rawName:"v-show",value:!t.$root.isConnected,expression:"!$root.isConnected"}],staticClass:"button",on:{click:t.connect}},[t._v(" Connect ")]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.$root.isConnected,expression:"$root.isConnected"}],staticClass:"button",on:{click:t.$root.disconnect}},[t._v(" Disconnect ("+t._s(t.matchName)+") ")]),n("span",{staticClass:"button",on:{click:t.newGame}},[t._v(" New Game ")]),n("span",{staticClass:"button",on:{click:t.generate}},[t._v(" Generate ")]),n("span",{staticClass:"button",on:{click:t.reset}},[t._v(" Reset ")])]),n("div",{staticStyle:{display:"inline-block","vertical-align":"middle"}},[t.$root.loading?t._e():n("board")],1)])},f=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"board"},[n("tr",[n("td",[n("block",{attrs:{indexes:t.$root.block0}})],1),n("td",[n("block",{attrs:{indexes:t.$root.block3}})],1),n("td",[n("block",{attrs:{indexes:t.$root.block6}})],1)]),n("tr",[n("td",[n("block",{attrs:{indexes:t.$root.block1}})],1),n("td",[n("block",{attrs:{indexes:t.$root.block4}})],1),n("td",[n("block",{attrs:{indexes:t.$root.block7}})],1)]),n("tr",[n("td",[n("block",{attrs:{indexes:t.$root.block2}})],1),n("td",[n("block",{attrs:{indexes:t.$root.block5}})],1),n("td",[n("block",{attrs:{indexes:t.$root.block8}})],1)])])},v=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"block"},[n("tr",[n("td",[n("number",{attrs:{index:t.indexes[0]}})],1),n("td",[n("number",{attrs:{index:t.indexes[3]}})],1),n("td",[n("number",{attrs:{index:t.indexes[6]}})],1)]),n("tr",[n("td",[n("number",{attrs:{index:t.indexes[1]}})],1),n("td",[n("number",{attrs:{index:t.indexes[4]}})],1),n("td",[n("number",{attrs:{index:t.indexes[7]}})],1)]),n("tr",[n("td",[n("number",{attrs:{index:t.indexes[2]}})],1),n("td",[n("number",{attrs:{index:t.indexes[5]}})],1),n("td",[n("number",{attrs:{index:t.indexes[8]}})],1)])])},m=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("number-pick",{directives:[{name:"show",rawName:"v-show",value:t.pickNumberViewVisible,expression:"pickNumberViewVisible"}],attrs:{disabled:t.disabled},on:{selected:t.selected}}),n("table",{directives:[{name:"show",rawName:"v-show",value:!t.pickNumberViewVisible,expression:"!pickNumberViewVisible"}],staticClass:"number",class:{editable:t.editable,transparent:null!==t.number}},[n("tr",[n("td",{staticClass:"b",on:{click:function(e){t.changeAlternative(0)}}},[t._v(t._s(t.alternatives[0]))]),n("td",{staticClass:"b wider",on:{click:function(e){t.changeAlternative(1)}}},[t._v(t._s(t.alternatives[1]))]),n("td",{staticClass:"b",on:{click:function(e){t.changeAlternative(2)}}},[t._v(t._s(t.alternatives[2]))])]),n("tr",[n("td",{staticClass:"b taller",on:{click:function(e){t.changeAlternative(3)}}},[t._v(t._s(t.alternatives[3]))]),n("td",{staticClass:"c taller",class:{error:t.error},on:{click:t.changeCenter}},[t._v(t._s(t.number))]),n("td",{staticClass:"b taller",on:{click:function(e){t.changeAlternative(4)}}},[t._v(t._s(t.alternatives[4]))])]),n("tr",[n("td",{staticClass:"b",on:{click:function(e){t.changeAlternative(5)}}},[t._v(t._s(t.alternatives[5]))]),n("td",{staticClass:"b wider",on:{click:function(e){t.changeAlternative(6)}}},[t._v(t._s(t.alternatives[6]))]),n("td",{staticClass:"b",on:{click:function(e){t.changeAlternative(7)}}},[t._v(t._s(t.alternatives[7]))])])])],1)},k=[],w=(n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("table",{staticClass:"number picker"},[n("tr",[n("td",{staticClass:"b",class:{disabled:t.isDisabled(1)},on:{click:function(e){t.select(1)}}},[t._v("1")]),n("td",{staticClass:"b wider",class:{disabled:t.isDisabled(2)},on:{click:function(e){t.select(2)}}},[t._v("2")]),n("td",{staticClass:"b",class:{disabled:t.isDisabled(3)},on:{click:function(e){t.select(3)}}},[t._v("3")])]),n("tr",[n("td",{staticClass:"b taller",class:{disabled:t.isDisabled(4)},on:{click:function(e){t.select(4)}}},[t._v("4")]),n("td",{staticClass:"b wider taller",class:{disabled:t.isDisabled(5)},on:{click:function(e){t.select(5)}}},[t._v("5")]),n("td",{staticClass:"b taller",class:{disabled:t.isDisabled(6)},on:{click:function(e){t.select(6)}}},[t._v("6")])]),n("tr",[n("td",{staticClass:"b",class:{disabled:t.isDisabled(7)},on:{click:function(e){t.select(7)}}},[t._v("7")]),n("td",{staticClass:"b wider",class:{disabled:t.isDisabled(8)},on:{click:function(e){t.select(8)}}},[t._v("8")]),n("td",{staticClass:"b",class:{disabled:t.isDisabled(9)},on:{click:function(e){t.select(9)}}},[t._v("9")])])])])}),_=[],x={props:{disabled:Array},methods:{select:function(t){this.isDisabled(t)||this.$emit("selected",t)},isDisabled:function(t){return this.disabled.includes(t)}}},C=x,$=Object(s["a"])(C,w,_,!1,null,null,null);$.options.__file="NumberPick.vue";var S=$.exports,A={props:{index:Number},components:{NumberPick:S},data:function(){return{pickNumberViewVisibleAtIndex:!1,lastChange:"center"}},computed:{error:function(){return this.$root.hasError(this.index)},editable:function(){return this.$root.boardState[this.index].editable},number:function(){return this.$root.board[this.index]},alternatives:function(){return this.$root.alternatives[this.index]},alternativeValues:function(){var t=this.alternatives.filter(function(t){return t});return t.sort(),t},disabled:function(){return"center"===this.lastChange?[]:this.alternatives},pickNumberViewVisible:function(){return this.$root.pickNumberViewVisibleAtIndex===this.index}},methods:{selected:function(t){"center"===this.lastChange?r["a"].set(this.$root.board,this.index,t):this.setAlternative(this.lastChange,t),this.$root.pickNumberViewVisibleAtIndex=null},changeAlternative:function(t){if(this.editable&&!this.number){var e=this.alternatives[t];null!==e?this.setAlternative(t,null):(this.lastChange=t,this.$root.pickNumberViewVisibleAtIndex=this.index)}},changeCenter:function(){this.editable&&(null!==this.number?r["a"].set(this.$root.board,this.index,null):(this.lastChange="center",this.$root.pickNumberViewVisibleAtIndex=this.index))},setAlternative:function(t,e){var n=Object(a["a"])(this.alternatives);n[t]=e,n.sort(),r["a"].set(this.$root.alternatives,this.index,n)}}},N=A,y=Object(s["a"])(N,g,k,!1,null,null,null);y.options.__file="Number.vue";var V=y.exports,R={props:{indexes:Array},components:{Number:V}},D=R,j=Object(s["a"])(D,p,m,!1,null,null,null);j.options.__file="Block.vue";var O=j.exports,I={components:{Block:O}},P=I,z=Object(s["a"])(P,b,v,!1,null,null,null);z.options.__file="Board.vue";var M=z.exports,B={components:{Board:M},data:function(){return{matchName:""}},methods:{newGame:function(){this.$root.loading||this.$root.loadFromInternet()},generate:function(){this.$root.loading||this.$root.loadFromGenerator()},reset:function(){this.$root.resetBoard(),this.$root.resetAlternative()},connect:function(){this.matchName=window.prompt("Match name?")||"",this.matchName=this.matchName.replace(/[^a-z0-9]/g,""),this.matchName&&this.$root.connectMath(this.matchName)}}},F=B,E=Object(s["a"])(F,h,f,!1,null,null,null);E.options.__file="Home.vue";var G=E.exports;r["a"].use(d["a"]);var U=new d["a"]({routes:[{path:"/",name:"home",component:G},{path:"/s/:state",name:"home-with-state",component:G}]}),T=n("bc3a"),L=n.n(T),J=n("d5af"),H=n.n(J);n("27dc");function q(t){return[0+t,1+t,2+t,9+t,10+t,11+t,18+t,19+t,20+t]}function K(t){return[0+t,1+t,2+t,3+t,4+t,5+t,6+t,7+t,8+t]}function Q(t){return[0+t,9+t,18+t,27+t,36+t,45+t,54+t,63+t,72+t]}r["a"].config.productionTip=!1,new r["a"]({router:U,data:{loading:!0,board:[],boardState:[],boardSolved:[],alternatives:[],pickNumberViewVisibleAtIndex:null,firebaseDatabase:window.firebase.database(),databaseRef:null,block0:q(0),block1:q(3),block2:q(6),block3:q(27),block4:q(30),block5:q(33),block6:q(54),block7:q(57),block8:q(60),col0:K(0),col1:K(9),col2:K(18),col3:K(27),col4:K(36),col5:K(45),col6:K(54),col7:K(63),col8:K(72),row0:Q(0),row1:Q(1),row2:Q(2),row3:Q(3),row4:Q(4),row5:Q(5),row6:Q(6),row7:Q(7),row8:Q(8)},computed:{isConnected:function(){return null!=this.databaseRef}},methods:{getCol:function(t){return[this.col0,this.col1,this.col2,this.col3,this.col4,this.col5,this.col6,this.col7,this.col8].find(function(e){return e.includes(t)})},getRow:function(t){return[this.row0,this.row1,this.row2,this.row3,this.row4,this.row5,this.row6,this.row7,this.row8].find(function(e){return e.includes(t)})},getBlock:function(t){return[this.block0,this.block1,this.block2,this.block3,this.block4,this.block5,this.block6,this.block7,this.block8].find(function(e){return e.includes(t)})},getValues:function(t){var e=this;return t.map(function(t){return e.board[t]})},hasError:function(t){var e=this.board[t];return null!==e&&(this.getValues(this.getCol(t)).filter(function(t){return t===e}).length>1||(this.getValues(this.getRow(t)).filter(function(t){return t===e}).length>1||this.getValues(this.getBlock(t)).filter(function(t){return t===e}).length>1))},resetAlternatives:function(){this.alternatives=[];for(var t=0;t<81;t++)this.alternatives.push([null,null,null,null,null,null,null,null])},stateStr:function(){var t,e,n=this;return this.board.map(function(r,i){return t=Object(a["a"])(n.alternatives[i]),t.sort(),e="("+t.join("")+")",(n.boardState[i].editable?"":"!")+(r||".")+("()"===e?"":e)}).join("")},loadStateStr:function(t){this.board=Array(81),this.boardState=Array(81),this.resetAlternatives();var e=0;t=t.split("");var n=t.shift();while(void 0!==n){if("!"===n?(n=t.shift(),this.board[e]=parseInt(n),this.boardState[e]={editable:!1},n=t.shift()):"."===n?(this.board[e]=null,this.boardState[e]={editable:!0},n=t.shift()):(this.board[e]=parseInt(n),this.boardState[e]={editable:!0},n=t.shift()),"("===n){n=t.shift();var a=0,i=[null,null,null,null,null,null,null,null];while(")"!==n)i[a]=parseInt(n),a+=1,n=t.shift();n=t.shift(),r["a"].set(this.alternatives,e,i)}e+=1}},loadFromInternet:function(){var t=this;this.loading=!0,L.a.get("https://cors-anywhere.herokuapp.com/https://www.sudoku-online.org/getsudoku.php").then(function(e){t.board=e.data.sudoku.split("").map(function(t){return parseInt(t)||null}),t.boardState=t.board.map(function(t){return{editable:null===t}}),t.boardSolved=e.data.solucion.split("").map(function(t){return parseInt(t)||null}),t.resetAlternatives(),t.loading=!1})},loadFromGenerator:function(){this.loading=!0;var t=H.a.makeBoardPuzzle();this.board=t.board.map(function(t){return null!==t?t+1:null}),this.boardState=this.board.map(function(t){return{editable:null===t}}),this.boardSolved=t.solved,this.resetAlternatives(),this.loading=!1},loadFromUrl:function(){this.loading=!0,this.loadStateStr(this.$route.params.state),this.loading=!1},loadDefault:function(){this.loading=!0,this.board=[null,3,null,null,2,8,null,null,5,6,null,null,9,4,5,3,2,null,null,null,2,null,null,null,4,null,null,5,null,null,4,6,null,null,7,null,null,null,7,2,null,null,null,null,4,null,4,null,8,7,null,null,6,null,4,9,6,3,null,null,7,5,null,2,null,null,null,null,null,null,null,3,null,null,3,5,null,6,null,4,8],this.boardState=this.board.map(function(t){return{editable:null===t}}),this.boardSolved=[7,3,4,6,2,8,9,1,5,6,1,8,9,4,5,3,2,7,9,5,2,1,3,7,4,8,6,5,2,1,4,6,3,8,7,9,8,6,7,2,5,9,1,3,4,3,4,9,8,7,1,5,6,2,4,9,6,3,8,2,7,5,1,2,8,5,7,1,4,6,9,3,1,7,3,5,9,6,2,4,8],this.resetAlternatives(),this.loading=!1},resetBoard:function(){var t=this;this.boardState.map(function(e,n){e.editable&&r["a"].set(t.board,n,null)})},updateURL:function(){this.$router.replace({name:"home-with-state",params:{state:this.stateStr()}})},disconnect:function(){this.databaseRef&&this.databaseRef.off("value"),this.databaseRef=null},connectMath:function(t){var e=this;this.loading=!0,this.databaseRef&&this.databaseRef.off("value"),this.databaseRef=this.firebaseDatabase.ref("matchs/".concat(t)),this.databaseRef.ref.once("value").then(function(t){var n=t.val();if(n)try{e.loadStateStr(n),e.loading=!1}catch(a){e.loadFromGenerator()}else e.loadFromGenerator();e.databaseRef.on("value",function(t){e.receiveDatabaseUpdate(t)})})},syncRealTimeDatabase:function(){this.databaseRef&&!this.loading&&this.databaseRef.set(this.stateStr())},receiveDatabaseUpdate:function(t){t.val()!==this.stateStr()&&this.loadStateStr(t.val())}},created:function(){if(this.$route.params.state)return this.loadFromUrl();this.loadFromInternet()},render:function(t){return t(c)},watch:{board:function(t){this.loading||(this.updateURL(),this.syncRealTimeDatabase())},alternatives:function(t){this.loading||(this.updateURL(),this.syncRealTimeDatabase())}}}).$mount("#app")},d5af:function(t,e){var n=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80];function a(t){for(var e=[],a=w(81,null),r=g(n.concat()),l=0;l<r.length;l++){var s=r[l];null==a[s]&&(e.push({pos:s,num:t[s]}),a[s]=t[s],u(a))}g(e);for(var o=e.length-1;o>=0;o--){var c=e[o];k(e,o);var d=i(v(e),t);-1===d&&e.push(c)}return v(e)}function r(t,e){for(var n=0,a=0;a<e;a++){var r=s(t);if(null==r.answer)return-1;n+=r.state.length}return n/e}function i(t,e){void 0===e&&(e=null);var n=s(t);if(null==n.answer)return-1;if(null!=e&&!p(e,n.answer))return-1;var a=n.state.length,r=o(n.state);return null!=r.answer?-1:a}function l(t){return s(t).answer}function s(t){var e=[].concat(t),n=u(e);if(null==n)return{state:[],answer:e};var a=[{guesses:n,count:0,board:e}];return o(a)}function o(t){while(t.length>0){var e=t.pop();if(!(e.count>=e.guesses.length)){t.push({guesses:e.guesses,count:e.count+1,board:e.board});var n=[].concat(e.board),a=e.guesses[e.count];n[a.pos]=a.num;var r=u(n);if(null===r)return{state:t,answer:n};t.push({guesses:r,count:0,board:n})}}return{state:[],answer:null}}function u(t){while(1){var e,n,a,r=!0,i=null,l=0,s=c(t),o=s.allowed,u=s.needed;for(n=0;n<81;n++)if(null===t[n]){if(e=f(o[n]),0===e.length)return[];if(1===e.length)t[n]=e[0],r=!1;else if(r){a=e.map(function(t){return{pos:n,num:t}});var h=b(i,l,a);i=h.guess,l=h.count}}if(!r){var v=c(t);o=v.allowed,u=v.needed}for(var p=0;p<3;p++)for(var m=0;m<9;m++){e=f(u[9*p+m]);for(var k=0;k<e.length;k++){for(var w=e[k],_=1<<w,x=[],C=0;C<9;C++)n=d(m,C,p),o[n]&_&&x.push(n);if(0===x.length)return[];if(1===x.length)t[x[0]]=w,r=!1;else if(r){a=x.map(function(t,e){return{pos:t,num:w}});var $=b(i,l,a);i=$.guess,l=$.count}}}if(r)return null!=i&&g(i),i}}function c(t){for(var e=[],n=t.map(function(t){return null==t?511:0}),a=0;a<3;a++)for(var r=0;r<9;r++){var i=h(t,r,a);e.push(i);for(var l=0;l<9;l++){var s=d(r,l,a);n[s]=n[s]&i}}return{allowed:n,needed:e}}function d(t,e,n){return void 0===n&&(n=0),0===n?9*t+e:1===n?9*e+t:[0,3,6,27,30,33,54,57,60][t]+[0,1,2,9,10,11,18,19,20][e]}function h(t,e,n){for(var a=0,r=0;r<9;r++){var i=t[d(e,r,n)];null!=i&&(a|=1<<i)}return 511^a}function f(t){for(var e=[],n=0;n<9;n++)0!==(t&1<<n)&&e.push(n);return e}function b(t,e,n){return null==t||n.length<t.length?{guess:n,count:1}:n.length>t.length?{guess:t,count:e}:0===m(e)?{guess:n,count:e+1}:{guess:t,count:e+1}}function v(t){for(var e=w(81,null),n=0;n<t.length;n++){var a=t[n],r=a.pos,i=a.num;e[r]=i}return e}function p(t,e){for(var n=0;n<81;n++)if(t[n]!==e[n])return!1;return!0}function m(t){return Math.floor(Math.random()*(t+1))}function g(t){for(var e=0;e<t.length;e++){var n=e;while(n===e)n=Math.floor(Math.random()*t.length);var a=t[e];t[e]=t[n],t[n]=a}return t}function k(t,e,n){var a=t.slice((n||e)+1||t.length);return t.length=e<0?t.length+e:e,t.push.apply(t,a)}function w(t,e){for(var n=[],a=0;a<t;a++)n.push(e);return n}t.exports={makeBoardPuzzle:function(){var t={solved:l(w(81,null))};return t.board=a(t.solved),t},makePuzzle:a,solvepuzzle:l,ratePuzzle:r,positionsFor:d}}});