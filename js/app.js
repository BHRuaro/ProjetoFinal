import { headerComponent } from "./components/header.js";
import { footerComponent } from "./components/footer.js";
import { infoComponent } from "./components/info.js";

window.onload = function () {

    const appHeader = document.getElementById('appHeader');
    appHeader.innerHTML = headerComponent;

    const appInfo = document.getElementById('appInfo');
    appInfo.innerHTML = infoComponent;

    const appFooter = document.getElementById('appFooter');
    appFooter.innerHTML = footerComponent;
}