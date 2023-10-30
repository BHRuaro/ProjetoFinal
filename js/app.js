import { headerComponent } from "./components/header.js";
import { footerComponent } from "./components/footer.js";

window.onload = function(){
    const appHeader = document.getElementById('appHeader');
    appHeader.innerHTML = headerComponent;

    const appFooter = document.getElementById('appFooter');
    appFooter.innerHTML = footerComponent;
}