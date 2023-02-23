Cryptocurrency Realtime Price

Cryptocurrency realtime Price tracking.

Dependencies

- **axios** : axios 0.21.1
- **tailwindcss**: tailwindcss 2.1.4
- **typescript**: typescript 4.3.4
- **express**: express 4.17.1
- **memory-cache**: memory-cache 0.2.0
- **postcss**: postcss 8.3.5
- **postcss-cli**: postcss-cli 8.3.1
- **react**: react 17.0.2
- **react-dom**: react-dom 17.0.2
- **react-query**: react-query 3.17.2
- **react-scripts**: react-scripts 4.0.3

API:
NodeJS, Express

Requirements

- Clarify requirements in case you have any questions/difficulties

  Faced difficulties with https://www.cryptonator.com/api/ call as it is protected by cloudflare , instead i have used wazirx api https://docs.wazirx.com/#24hr-ticker-price-change-statistics

- Demonstrate your development flow with commits and pull requests

  Used Conventional commits

- Test cases coverage
- Provide an architecture design

  Added screnshot

- Node.js, React and TypeScript are MUST

  Used as required

- Consideration of responsive design

  Tailwind css used and it is responsive

- Consideration of scalability

  memory-cache used to cache api response

- Consideration of minimizing charging fee for API calls

  Used memory-cache

- (Optional) Dockerizing the whole application

### wazirx.com API

HTTP GET API used:

- https://api.wazirx.com/sapi/v1/ticker/24hr?symbol=[pair]

##### [pair]

Pair consists of a base and a target, in the form of _[base][target]_. example:

- [https://api.wazirx.com/sapi/v1/ticker/24hr?symbol=btcusdt](https://api.wazirx.com/sapi/v1/ticker/24hr?symbol=btcusdt)

# How to build & run

In the project directory, you can run:

### `npm install`

### `npm start` or `yarn start`

# Output

![alt text](https://github.com/sthitajena/Cryptocurrency_Realtime_Price/blob/main/screenshot/app.png)

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

_Note: this is a one-way operation. Once you `eject`, you can’t go back!_
