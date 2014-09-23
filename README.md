# Super Basic Node API

[![Build Status](https://travis-ci.org/schleg/super-basic-node-api.svg?branch=master)](https://travis-ci.org/schleg/super-basic-node-api)

Implements a generic REST API for a "Model" with these endpoints:

- GET /api/models
- GET /api/models/:model_id
- POST /api/models
- PUT /api/models/:model_id
- DELETE api/models/:model_id

## Install
```
mkdir my_api && cd my_api
git clone git@github.com:schleg/super-basic-node-api.git .
npm install
```

## Test

```
npm test
```

## Code Coverage
```
npm test --coverage
```

## Run
```
npm start
```

## License
MIT
