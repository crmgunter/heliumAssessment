# heliumAssessment

### Setting Up

Once you've cloned the repo, add a .env file at the root directory. Inside the .env file, you'll need to add an environment variable:

```
MONGODB_URI=mongodb://localhost/your-database-name
```
From here, in the project folder in your terminal, run the command ```npm run build```.

This will install all the dependencies in for the backend and client side as well as seeding your database.

To run the project locally, simply run ```npm run dev``` from the root directory in your terminal.
This command assumes you have nodemon installed globally on your machine. If you don't have nodemon, run ```npm i -g nodemon``` in the terminal and try again. 

To reseed the database at any time, you can run ```node db/seeds```.
