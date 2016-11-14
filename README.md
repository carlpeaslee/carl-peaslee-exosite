# Carl Peaslee's Exosite Market
Hi, I put together a market application using React and Node. Check it out!

The application loads products from a database asynchronously using redux-saga. You may then add products to your cart and check out. The checkout process will validate your input information and calculate your shipping total. When you confirm your checkout, your order information will be saved remotely in the database using the api.

## Live Site

Live: [carl-exosite-client](https://carl-exosite-client.herokuapp.com/)

API: [carl-exosite-api](https://carl-exosite-api.herokuapp.com/graphql)

## Directions for Running Locally
If you want to run the server on your machine you'll need to make sure that you have a postgres database provisioned. I'm happy to help you set that up but it will probably be easier for you to just use the server I set up on Heroku.

1. Download this repository onto your machine.
2. Navigate into the client folder
  * ```cd client```
3. Install the necessary packages
  * ```npm install```
4. Start the app!
  * ```npm start```

## Technology Used
* react
* redux-saga
* material-ui
* node
* express
* graphql
* scss (exosite's stylesheet)
* postgres


## Project Structure
Here is an overview of the project's structure. In general, the interesting things are in the components, containers, and actions directories.

The app is being mounted from the ```client/src/index.js``` page. Most of the data is being connected through containers and each of the views (```client/src/views```) are being supplied as children in the template container.  

```
root
  /client
    /config
    /public
    /scripts
    /src
      /actions   <-- redux actions
      /components   <-- the components you see on the page
      /containers  <-- where we connect material ui, our redux store, styles, routing etc.
      /helpers   <-- this is kind of a sad, mostly empty file right now
      /reducers  <-- where our redux reducers live
      /routes  <-- where we handling the logic for our client-side routing
      /store  <-- the configuration information
      /styles <-- where the stylesheet is being kept, also my styling class object, a custom theme should be in here too probably...
      /utils <-- some configurations for fetching
      /views <--the views that are being rendered as children of the router
      index.js

  /server
    /src
      /data
        /models
        /mutations
        /queries
        /types
        db.js
        dbconfig.js
        defaultProducts.js
        schema.js
      server.js
