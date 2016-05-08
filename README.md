# momentum

## front-end

Client for momentum
Created at TechCrunch Disrupt NY 2016.

Install dependencies:

    npm install

Run Webpack in observe-mode

    webpack --progress --colors --watch

It will create `bundle.js` and `bundle.js.map` files in `assets`, which are referenced from `index.html`. Furthermore, it will observe the file-system and update these files on every change.

Then just open `index.html` in the browser.


## rails

    # reset the database
    source .env
    rake db:drop && rake db:create && rake db:migrate && cd util && ruby load.rb

## docker

Bluemix

    # login and copy env variables
    cf ic login

    # build images
    bash build.sh

    # run the app
    source .env
    docker-compose -f docker-compose.yml -f docker-compose-ic.yml up -d

Docker Toolbox

    # set env variables
    eval $(docker-machine env default)

    # build images
    bash build.sh

    # run the app
    source .env
    docker-compose run --rm -e RAILS_ENV=production momentum rake db:create
    docker-compose run --rm -e RAILS_ENV=production momentum rake db:migrate
    docker-compose -f docker-compose.yml up
