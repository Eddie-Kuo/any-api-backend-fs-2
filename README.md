# Template for Backend Express

The Golden Rule:
🦸 🦸‍♂️ Stop starting and start finishing. 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Scripts

| command                | description                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------- |
| `npm start`            | starts the app - should only be used in production as changes will not get reloaded |
| `npm run start:watch`  | runs the app using `nodemon` which watches for changes and reloads the app          |
| `npm test`             | runs the tests once                                                                 |
| `npm run test:watch`   | continually watches and runs the tests when files are updated                       |
| `npm run setup-db`     | sets up the database locally                                                        |
| `npm run setup-heroku` | sets up the database on heroku                                                      |

setup.sql
Add a test for a route
COMMIT (to show TDD)
Add your controller file to app.js
Controller / Model -- these kind of go in tandem
COMMIT (with passing test)
Repeat steps 1-6 multiple times
Index in public
Define index path in app
