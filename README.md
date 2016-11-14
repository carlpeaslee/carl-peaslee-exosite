# Carl Peaslee's Exosite Market
Hi, I put together a market application using React and Node. Check it out!

The application loads products from a database asynchronously using redux-saga. You may then add products to your cart and check out. The checkout process will validate your input information and calculate your shipping total. When you confirm your checkout, your order information will be saved remotely in the database using the api. 

## Live Site
[Live version](https://carl-exosite-client.herokuapp.com/)
[Graphql API Interface] (https://carl-exosite-api.herokuapp.com/graphql)

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
