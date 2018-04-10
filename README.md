# dk-crud
This project is a POC to see the differences between rest and graphql and if both can share the same code on some level.  
  
It contains 3 branches:  
**rest** - plain rest api and UI  
**graphql** - graphql api and UI  
**restql** - rest api implemented in the graphql branch's shared repository form with a working UI hitting the rest api  
  
Each branche's readme has info pertaining to that branch. rest branch was straight forward, restql same thing, but with objects passed to repo instead of individual parameters. graphql branch was the real challenge, implementing the backend in graphql.js and the front in apollo. The apollo cache was a challenge too, and required some tweaking to make the user list never call back to the api as all was handled in the client cache.

### setup
1. switch to graphql branch (has all the packages)
2. npm install
3. run seed.bat at site root (to reset the mongodb local mongodb database with dkcrud database)
4. node rest-api/rest-server.js (node server/server.js in graphql) to start server on 3005
5. ng serve // for angular/cli ui on 4200



