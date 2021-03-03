# devtools-snippets

A collection of helpful snippets (forked from [bgrins/devtools-snippets](https://github.com/bgrins/devtools-snippets)) to use inside of browser devtools.

## How to use it

**(1) Open a DevTools of the DevTools**

Press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>i</kbd> to open a DevTools pane, then undock it into separate window.

On the opened DevTools pane, press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>i</kbd> again to open a DevTools of the DevTools.

**(2) Run the following code (import-snippets.js)**

```javascript
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
```

**ATTENTION: This will overwrite all your existing code snippets!**

