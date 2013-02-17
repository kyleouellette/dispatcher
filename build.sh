#!/bin/bash
closure-compiler ./_js/main.js > ./_js/compressed/main.min.js
sass --update _scss:_css --compass -t expanded
sass --update _scss:_css/compressed/ --compass -t compressed
mv _css/compressed/main.css _css/compressed/main.min.css
