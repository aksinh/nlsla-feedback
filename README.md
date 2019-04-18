# nlsla-feedback

Directory which holds the actual application and everything is unsurprisingly named `app`

The accessibility menu is in a seperate folder but will be merged into `index.html` soon


## app

Important file to understand:

### main.py

This file like most main files runs the actual app 

`@app.route(ENTRY_POINT + '/', methods=['GET'])` seems complicated but this simplifies to 
`@app.route('/')` which is basically the default endpoint

Within this it just renders the most important front end file [`index.html`](#abcd). 
`render_template` is a cool Flask function which simply given a html file will find it in the `templates` folder and as you can guess from its name, will render it when you go to the link described by the `@app.route`. To read more about Flask and files like `main.py` you can look [here](http://flask.pocoo.org/docs/1.0/quickstart/)

## templates 

Contains the important html files:

<a name="abcd"></a>
### index.html 

Front end for entire app. Divided into several blocks:

#### First block: 

Just imports a bunch of stuff: 
[bootstrap](https://getbootstrap.com/), [jquery](https://jquery.com/)  

Also adds all css files from the `static` folder e.g. `audio.css`, `base.css` and the javascript files form the `js`e.g. `modernizr.custom.js`, `audio.js`

#### Second block (nav class="navbar....):

Contains the navigation bar on top of every page: Buttons and stuff that currently do not work. Just a basic template. Prob be replaced soon

#### Third block (div class="audio-select"):

audio-select

Part of code that decides whether to have text read out loud or not

#### Fourth Block (div class="zoom-select"):

Zooming section. Allows to zoom in and zoom out. Pinnacle of technology.

#### Fifth block (div class="pt-wrapper"): 

Contains next and back buttons as well as references to `page-blocks/p1....p5.html`. Ends with `transitions.js`, the javascript file that helps transition between pages

## static

Contains images as well as javascript and css files

### image folder

Whenever you want to add a new icon/image add the image here and then link it in `index.html` similar to how other icons are linked (e.g. look at the audio-select block)

### js folder

If you add any javascript, the corresponding files go here. Look at example files like `audio.js` and understand them

### style

Contains the relevant css files for `index.html`. `base.css` contains most of it. Add corresponding css here when you add new html files.


