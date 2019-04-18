// ==UserScript==
// @name         WhatsApp Dark Style
// @namespace
// @version      0.3.4
// @description  Darker Style for WhatsApp website
// @author       Manuel Bissinger
// @match        https://web.whatsapp.com/
// @homepageURL   https://github.com/DigitalIQ/Tampermonkey/blob/master/WhatsAppDarkStyle.user.js
// @supportURL    https://github.com/DigitalIQ/Tampermonkey/blob/master/WhatsAppDarkStyle.user.js
// @updateURL     https://github.com/DigitalIQ/Tampermonkey/raw/master/WhatsAppDarkStyle.user.js
// @downloadURL   https://github.com/DigitalIQ/Tampermonkey/raw/master/WhatsAppDarkStyle.user.js
// @grant         GM_setValue
// @grant         GM_getValue
// @run-at        document-end
// ==/UserScript==

GM_setValue('own_background_color', 'rebeccapurple');
GM_setValue('own_font_color', 'whitesmoke');
GM_setValue('mate_background_color', 'firebrick');
GM_setValue('mate_font_color', 'whitesmoke');
GM_setValue('chat_list_width', '20%');

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName("head")[0];
    if (!head) { return; }
    style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = css;
    head.appendChild(style);
}
function addGlobalHTML(element,attr,val) {
    var elem = document.getElementsByClassName(element)[0];
    var att = document.createAttribute(attr);
    att.value = val;
    elem.setAttributeNode(att);
}

addGlobalStyle(".app-wrapper-web::after { background-color: " + GM_getValue('own_background_color') + " !important; }");
addGlobalStyle("body>div>div>div>div:last-child>div { border-color: " + GM_getValue('own_background_color') + " !important; }");
addGlobalStyle(".app-wrapper-web { background-color: dimgray !important; }");
addGlobalStyle("body>div>div>div>div:last-child>div:after { border-color: " + GM_getValue('own_background_color') + " !important; }");

addGlobalStyle("body>div>div>div>div>div>span>div>div>header { background-color: " + GM_getValue('own_background_color') + " !important; }");
addGlobalStyle("body>div>div>div>div>div>span>div>span>div>header { background-color: " + GM_getValue('own_background_color') + " !important; }");
addGlobalStyle("body>div>div>div>div>div>span>div>span>div>div>div>div>div>div>div { background-color: " + GM_getValue('own_background_color') + " !important; border-color: " + GM_getValue('own_background_color') + " !important; }");
addGlobalStyle(".message-out { background-color: " + GM_getValue('own_background_color') + " !important; color: " + GM_getValue('own_font_color') + "; }");
addGlobalStyle(".message-in { background-color: " + GM_getValue('mate_background_color') + " !important; color: " + GM_getValue('mate_font_color') + "; }");
addGlobalStyle(".message-out>div>div:nth-child(2)>div>span { color: " + GM_getValue('own_font_color') + "; }");
addGlobalStyle(".message-in>div>div:nth-child(2)>div>span { color: " + GM_getValue('mate_font_color') + "; }");
addGlobalStyle(".message-out>div>div>div>div { background-color: " + GM_getValue('own_background_color') + " !important; }");
addGlobalStyle(".message-in>div>div>div>div { background-color: " + GM_getValue('mate_background_color') + " !important; }");
addGlobalStyle(".message-out>div>div>div>div>div>div>span { color: " + GM_getValue('own_font_color') + "; }");
addGlobalStyle(".message-in>div>div>div>div>div>div>span { color: " + GM_getValue('mate_font_color') + "; }");
addGlobalStyle(".message-out>span>div { background: none !important; }");
addGlobalStyle(".message-in>span>div { background: none !important; }");
addGlobalStyle("span.tail-container { width: 0;}");
addGlobalStyle(".two>div:nth-child(2)>div { flex: " + GM_getValue('chat_list_width') + ";}");
//addGlobalStyle("#main>header { background-color: #808080 !important; }");
//addGlobalHTML(".input-search","class","autofocus");

// deprecated by WhatsApp
//addGlobalStyle(".drawer-header { background-color: #069 !important; }");
//addGlobalStyle(".pane-header { background-color: #98CA6B !important; }");
//addGlobalStyle(".pane-chat-body { background-color: #222 !important; }");
