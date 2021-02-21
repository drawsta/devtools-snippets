// export-snippets.js
// import-snippets.js
// 1. Open a DevTools of the DevTools
//    Press Ctrl+Shift+i to open a DevTools pane, then undock it into separate window
//    On the opened DevTools pane, press Ctrl+Shift+i again to open a DevTools of the DevTools.
// 2. Run export-snippets.js
(function() {
    'use strict';

    function export2SingleFile(content, fileName, contentType) {
        let a = document.createElement("a");
        let blob = new Blob([content], {type: contentType});
        a.href = URL.createObjectURL(blob);
        a.download = fileName;
        a.click();
    }

    InspectorFrontendHost.getPreferences(_ => {
        export2SingleFile(_.scriptSnippets, 'snippets.json', 'application/json')
    });
})();
