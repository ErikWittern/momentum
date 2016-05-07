# momentum
Client for momentum
Created at TechCrunch Disrupt NY 2016.

Install dependencies:

    npm install

Run Webpack in observe-mode

    webpack --progress --colors --watch

It will create `bundle.js` and `bundle.js.map` files in `assets`, which are referenced from `index.html`. Furthermore, it will observe the file-system and update these files on every change.

Then just open `index.html` in the browser.