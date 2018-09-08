# Neigborhood map react application

When you run this project, you can find pizza places in Varaždin. Places should be listed on the left sidebar, and also marked with markers on the map. You also can search for places based on current list of places and find place by entering specific caracter.  

## Table of Contents

* [Instructions](#instructions)
* [Used Resources](#used-resources)
* [Folder Structure](#folder-structure)

## Instructions

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

## Used Resources

* [react-google-maps](https://github.com/tomchentw/react-google-maps) - used for importing Google Maps API
* [escape-string-regexp](https://www.npmjs.com/package/escape-string-regexp) - used for search
* [axios](https://github.com/axios/axios) - used for making http requests from node.js
* [foursquare](https://foursquare.com/) - used to fetch data about places

## Folder Structure

After download, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    manifest.json
    index.html
    favicon.ico
  src/
    components/
      Map.js
      Modal.js
      Places.js
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
    registerServiceWorder.js
```
