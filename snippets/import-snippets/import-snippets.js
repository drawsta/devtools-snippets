// import-snippets.js
// 1. Open a DevTools of the DevTools
//    Press Ctrl+Shift+i to open a DevTools pane, then undock it into separate window
//    On the opened DevTools pane, press Ctrl+Shift+i again to open a DevTools of the DevTools.
// 2. Run import-snippets.js
// https://stackoverflow.com/questions/19025718/which-file-does-snippets-of-chrome-dev-tool-saved-at
// Clear all snippets: InspectorFrontendHost.setPreference("scriptSnippets", "");
(function() {
    'use strict';
    
    const url = "https://drawsta.github.io/devtools-snippets/snippets.json";
    new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then(data_from_fetched => {
                InspectorFrontendHost.setPreference("scriptSnippets", JSON.stringify(data_from_fetched));
            });
    });
})(); 
