# Hunger Null

For the everyday person who wants to get food delivered, Hunger: NULL is an app that connects different food delivery services together, so you can easily view all available options without having to check multiple apps.
<br>
Our app will ideally connect all the different food delivery apps like Grubhub, Doordash, Postmates etc. in one app. This means that all the restaurants that deliver in your city will be easy to see and pick from. The app will also have basic searchability, filtering capabilities, and links to restaurant websites for more information.

## Project Structure
resources
    ---- css
            ---- style.css - style css file for entire project
    ---- img - contains images for all restauraunts
            ---- bossladypizza.png 
            ---- cafemexicali.png
            ---- chipotle.png
            ---- cosmos.png
            ---- dominos.png
            ---- fiveguys.png
            ---- illegalpetes.png
            ---- mcdonalds.png
            ---- pastajays.png
            ---- pizzahut.png
            ---- potbelly.png
            ---- qdoba.png
            ---- subway.png
            ---- thaiavenue.png
            ---- wendys.png
    ---- js - contains scripts for javascript
            ---- queries.js - queries to access database
            ---- script.js - overall site javascript (populate pages, cards, etc)
test
    ---- test.js - contains unit tests (run with "npm test")
views
    ---- pages - contains ejs pages to be rendered by server
            ---- about.ejs
            ---- cafemexicali.js
            ---- cosmos.ejs
            ---- dominos.ejs
            ---- fiveguys.ejs
            ---- index.ejs
            ---- mcdonalds.ejs
            ---- pizzahut.ejs
            ---- potbelly.ejs
            ---- qdoba.ejs
            ---- subway.ejs
            ---- team_members.ejs
            ---- wendys.ejs
    ---- partials - contains partial ejs sites to be used
            ---- footer.ejs
            ---- header.ejs
            ---- menu.ejs
Hunger_Database.sql - database of menu items
package-lock.json
package.json
publishConfig.txt
README.md
server.js - start point of hunger: null


## Getting Started

Clone the repository. In terminal, using npm, install: <br>
npm install ejs
<br>
npm install express
<br>
npm install jquery
<br>
npm install mocha
<br>
npm install promise
<br>
npm install request
<br>
npm install should
<br>
From there, navigate to the folder where you cloned to and edit the server.js. Uncomment the local testing port and comment out the proccess port (for heroku use). In terminal, start the node server with "node server.js"

## Running Unit Tests

To run the unit tests, navigate in terminal to the project folder and type "npm test"

## Deployment

http://hungernulllive.herokuapp.com/
<br>
To deploy, comment back in the app.listen(PROCESS.ENV.PORT) and comment out the other port.

## Authors

* **Erik Pohle** - *JavaScript, HTML, Unit Tests, Heroku Deploy, Home Page*
* **Anand Zupa** - *Database Integration*
* **Matt Wu** - *CSS, About Page, Team Members Page*

## Acknowledgments

* CSCI 3308 TA: Shreshtha Pankaj
