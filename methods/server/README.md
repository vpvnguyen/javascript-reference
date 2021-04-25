# JavaScript Array Methods in TypeScript

## Run

- `cd` into `/server`
- Run `nodemon` or `yarn start` or `npm start`
- Navigate to `http://localhost:5000/`
  > If PORT is incorrect, refer to the console output

## API Architecture

### File Structure

```
server|src/
  index.js
    - load all of the below and listen on a port
  test.js
  - main test file that will run all test cases under test/

  configs/
    index.js
    - configuration files
  controllers/
    index.js
    - routes with provider functions as callback functions
  providers/
    index.js
    - business logic for controller routes
  services/
    index.js
    - common business logic used in the provider functions
  models/
    index.js
    - database models
  routes/
    index.js
    childRoute/
      childRouteN/
    - all routes
  logHandlers/
    index.js
  errorHandlers/
    index.js
  tests/
    index.js
    unit/
      - unit tests
    integration/
      - integration tests
```

### Import / Export Files

- All directory's `index.js` to import and export collection of respective
