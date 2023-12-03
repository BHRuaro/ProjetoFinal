import { headerComponent } from "./components/header.js";
import { footerComponent } from "./components/footer.js";
import { infoComponent } from "./components/info.js";
import { headerLogin } from "./components/header.js";

window.onload = function () {
    const conta = JSON.parse(localStorage.getItem('conta'));

    if (conta) {
        const appHeader = document.getElementById('appHeader');
        appHeader.innerHTML = headerLogin;
    } else {
        const appHeader = document.getElementById('appHeader');
        appHeader.innerHTML = headerComponent;
    }

    const appInfo = document.getElementById('appInfo');
    appInfo.innerHTML = infoComponent;

    const appFooter = document.getElementById('appFooter');
    appFooter.innerHTML = footerComponent;
}