# Hunger Null

For the everyday person who wants to get food delivered, Hunger: NULL is an app that connects different food delivery services together, so you can easily view all available options without having to check multiple apps.
<br>
Our app will ideally connect all the different food delivery apps like Grubhub, Doordash, Postmates etc. in one app. This means that all the restaurants that deliver in your city will be easy to see and pick from. The app will also have basic searchability, filtering capabilities, and links to restaurant websites for more information.

## Project Structure
resources <br>
&nbsp;    ---- css <br>
            ---- style.css - style css file for entire project <br>
    ---- img - contains images for all restauraunts <br>
            ---- bossladypizza.png  <br>
            ---- cafemexicali.png <br>
            ---- chipotle.png <br>
            ---- cosmos.png <br>
            ---- dominos.png <br>
            ---- fiveguys.png <br>
            ---- illegalpetes.png <br>
            ---- mcdonalds.png <br>
            ---- pastajays.png <br>
            ---- pizzahut.png <br>
            ---- potbelly.png <br>
            ---- qdoba.png <br>
            ---- subway.png <br>
            ---- thaiavenue.png <br>
            ---- wendys.png <br>
    ---- js - contains scripts for javascript <br>
            ---- queries.js - queries to access database <br>
            ---- script.js - overall site javascript (populate pages, cards, etc) <br>
test <br>
    ---- test.js - contains unit tests (run with "npm test") <br>
views <br>
    ---- pages - contains ejs pages to be rendered by server <br>
            ---- about.ejs <br>
            ---- cafemexicali.js <br>
            ---- cosmos.ejs <br>
            ---- dominos.ejs <br>
            ---- fiveguys.ejs <br>
            ---- index.ejs <br>
            ---- mcdonalds.ejs <br>
            ---- pizzahut.ejs <br>
            ---- potbelly.ejs <br>
            ---- qdoba.ejs <br>
            ---- subway.ejs <br>
            ---- team_members.ejs <br>
            ---- wendys.ejs <br>
    ---- partials - contains partial ejs sites to be used <br>
            ---- footer.ejs <br>
            ---- header.ejs <br>
            ---- menu.ejs <br>
Hunger_Database.sql - database of menu items <br>
package-lock.json <br>
package.json <br>
publishConfig.txt <br>
README.md <br>
server.js - start point of hunger: null <br>


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
