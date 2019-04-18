// ==UserScript==
// @name         WhatsApp Dark Style
// @namespace    
// @version      0.3.0
// @description  Darker Style for WhatsApp website
// @author       Manuel Bissinger
// @match        https://web.whatsapp.com/
// @homepageURL   https://github.com/DigitalIQ/Tampermonkey/blob/master/WhatsAppDarkStyle.user.js
// @supportURL    https://github.com/DigitalIQ/Tampermonkey/blob/master/WhatsAppDarkStyle.user.js
// @updateURL     https://github.com/DigitalIQ/Tampermonkey/raw/master/WhatsAppDarkStyle.user.js
// @downloadURL   https://github.com/DigitalIQ/Tampermonkey/raw/master/WhatsAppDarkStyle.user.js
// @grant         none
// @run-at        document-end
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
function addGlobalHTML(element,attr,val) {
    var elem = document.getElementsByClassName(element)[0];
    var att = document.createAttribute(attr);
    att.value = val;
    elem.setAttributeNode(att);
}

var own_background_color = 'rebeccapurple';
var own_font_color = 'whitesmoke';
// no effect anymore
//addGlobalStyle('.app-wrapper-web { background-color: #111 !important; }');
//addGlobalStyle('.app-wrapper-web::before { background-color: #000 !important; }');

addGlobalStyle('body>div>div>div>div>div>span>div>div>header { background-color: own_background_color !important; }');
addGlobalStyle('body>div>div>div>div>div>span>div>span>div>header { background-color: own_background_color !important; }');
addGlobalStyle('body>div>div>div>div>div>span>div>span>div>div>div>div>div>div>div { background-color: own_background_color !important; border-color: own_background_color !important; }');
addGlobalStyle('.message-out { background-color: own_background_color !important; color: own_font_color; }');
addGlobalStyle('span.tail-container { width: 0;}');
addGlobalStyle('.message-out>div>div:nth-child(2)>div>span { color: own_font_color; }');
addGlobalStyle('.message-out>div>div>div>div { background-color: own_background_color !important; }');
addGlobalStyle('.message-out>div>div>div>div>div>div>span { color: own_font_color; }');
addGlobalStyle('.message-out>span>div { background: none !important; }');
//addGlobalStyle('#main>header { background-color: #808080 !important; }');
//addGlobalHTML('.input-search','class','autofocus');

// deprecated by WhatsApp
//addGlobalStyle('.drawer-header { background-color: #069 !important; }');
//addGlobalStyle('.pane-header { background-color: #98CA6B !important; }');
//addGlobalStyle('.pane-chat-body { background-color: #222 !important; }');
