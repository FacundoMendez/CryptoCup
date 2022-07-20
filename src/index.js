import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


window.onload = function() {
    document.addEventListener("contextmenu", function(e){
      e.preventDefault();
    }, false);
};


/* evita problemas de consola  */
(function () {
    if (typeof EventTarget !== "undefined") {
        let func = EventTarget.prototype.addEventListener;
        EventTarget.prototype.addEventListener = function (type, fn, capture) {
            this.func = func;
            if(typeof capture !== "boolean"){
                capture = capture || {};
                capture.passive = false;
            }
            this.func(type, fn, capture);
        };
    };
}());

console.log("%cCRYPTO CUP QATAR 2022",`
  box-sizing: content-box;
  border: none;
  font: bold 25px/normal "Anton", Helvetica, sans-serif;
  color:#9999ff;
  line-height:50px;
  text-shadow: 0 0 0px #9999ff , 10px -10px 30px #9999ff, -20px -20px 40px #000000 ;
`);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
