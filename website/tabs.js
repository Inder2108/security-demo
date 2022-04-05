import State from "./state.js";

const resetTabs = () => {
    State.tabs.forEach((tab) => {
        document.getElementById(`${tab}TabContainer`).classList.add("d-none");
        document.getElementById(`${tab}Tab`).classList.remove("active");
    });
};

const initTab = (tab) => {
    document.getElementById(`${tab}TabContainer`).classList.remove("d-none");
    document.getElementById(`${tab}Tab`).classList.add("active");
    window.sessionStorage.setItem("token", "session_token_secret_code");
};

export default {
    initTabs: (tab) => {
        // Setup Tab click handlers
        State.tabs.forEach((tab) => {
            document.getElementById(`${tab}Tab`).addEventListener("click", (e) => {
                resetTabs();
                initTab(tab);
            });
        });
        initTab(tab);
    },
    initTab,
    resetTabs,
};
