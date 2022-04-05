import Tabs from "./tabs.js";
import State from "./state.js";

window.addEventListener("load", () => {
    // Initialize default Tab
    Tabs.initTabs(State.currentTab);

    document.getElementById("getHackedNow").addEventListener("click", (e) => {
        document.getElementById("renderText").innerHTML = document.getElementById("corruptedText").value;
        document.getElementById("renderImg").innerHTML = `<img src="${
            document.getElementById("corruptedText").value
        }">`;
        // Handlebars.Utils.escapeExpression(model.get("imageData")).replace(new RegExp(("&#x3D;"), 'g'), "=")
    });
});