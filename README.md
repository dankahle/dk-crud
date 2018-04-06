# dk-crud
this project is a POC to see the differences between rest and graphql and if both can share the same code on some level.  
  
It contains 3 branches:
rest - plain rest api and UI  
graphql - graphql api and UI  
restql - shared repo version rest api and UI  
  
So it's a test to see how much different graphql is from vanilla rest, but also if code can be shared in a dual graphql/rest api scenario.
  
Turns out with some minor tweaks you can share the repo between the two. This appears to be the way you want to go here, as most of the code would be duplicated if separate repos.

### setup
1. switch to graphql branch
2. npm install
3. run seed.bat at site root (to reset the mongodb local mongodb database with dkcrud database)
4. node rest-api/rest-server.js // start api server
5. ng serve // for angular/cli ui on 4200



