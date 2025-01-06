# AILA

AI Licence Agreement or AILA.

It uses a "bitmask" to anounce the openess of the licence so it is easily parseable by either humans or machines !

## The "bits"

### Training weight availability

weights are :

* 0: unavailable
* 1: available for personal use
* 2: available for research and academic use
* 4: available for commercial use

### Trained Model availability

The trained model is :

* 0: unavailable
* 1: available for personal use
* 2: available for research and academic use
* 4: available for commercial use

### Training data

Training data is :

* 0: unavailable
* 1: available if open source or public
* 2: available for research and academic use
* 4: available for commercial use

## Licence targets

there are 3 "sub licenses", C, B and F.

C and B for content creators, F for model creators.

### C : Creator

For content creator it signifies which condition, if at all, their content can be used for AI training.

AILA-777-C means that this content is available for AI training if :
* weights are available for any use
* model is available for any use
* all training data must be available

AILA-000-C means this content is freely available for AI builder under no conditions.

#### AILA-999-C

Nein, Nein, Nein, you will nicht use mein content fur AI Shtuff !

#### C-1 variant

AILA-777-C-1 means that this content is available for AI training if acccording to AILA-777-C but exception can be granted on a case by case basis.

### B : built with

For content creator to inform their consumer the content was created using models with this licence

AILA-777-B means that this content was built using a model respecting AILA-777-F

### F : Facteur

Facteur is a french word meaning the one who makes (think "manufacture", made with hands)

For AI model creator, it simplifies comunicating what is available (weights, models) for what use.
And what kind of training data is available.

## AILA-project.org

AILA-project.org is a website that allows you to create AILA licenses.

### tech stack

* nextjs
    * app router
* tailwindcss
* shadcn

### TODO

* [x] Bit Picker component
    "bit pickers" are component with :
        * bit explanation
        * 3 switches (from shadcn) one for each value (1, 2, 4) 
        * for each switch, a concise text and a hover-card with further explanation
* [~] licence text for each bit and bit value, store in public asset in md files
    distinct text for each bit and bit value will help in creating better fitting licenses
    * [~] weights/{0,1,2,3,4,5,6,7}.md
    * [~] model/{0,1,2,3,4,5,6,7}.md
    * [~] data/{0,1,2,3,4,5,6,7}.md
    * [x] AILA-999-C.md
    * [x] AILA-xxx-C-1.md
* [~] Home page
    * [ ] presentation hiatus
    * [~] licence generator
        * [x] choose Creator or Facteur
            * [x] if creator, switch for -999-C licence, stop form
            * [x] if creator, select if AI model has been used to create the content (for -b licence)
            * [x] if creator, switch for -C-1 licence variant
        * [~] 3 "Bit picker" (one for each bit)
            put the 3 on the same line for screen big enough
        * [x] a generate button
            * [x] generate the licence
                * [x] fetch all md part for the licence
                * [x] merge them
                * [x] parse md to html
            * [x] display button to copy the licence to the clipboard
            * [x] display button to download the licence as a markdown or html file
            * [x] display the licence
    * [x] design
        * [x] blue-light grey light/dark theme (follow system preference + toggle)
        * [x] clear, readable, responsive, accessible,
* [x] licenses page
    * [x] /licenses is an index page with a list of all licenses variations
    * [x] use enxtjs prendering to prerender every licenses variations, accessable by url, eg: /licenses/AILA-777-C-1
