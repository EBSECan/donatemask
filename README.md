# Donate A Mask Project

This github structure is set up so that this project, initially created for the region of Canada, can readily be copied and adapted for use in other regions should the idea grow. By creating abstracted regional details upfront, it will be easier to localize later.

The purpose of this project is to create a website and associated mobile applications using the same back end that allow people to do the following:

1. Request masks to be sent to them
   - Input the number of desired masks
   - Input the address for shipping
   - Post a message in the thank you roll (optional)
2. Donate money towards masks
   - Choose an amount of masks to "donate"
     - The system will multiply that amount by the cost per mask (e.g. $2.50/mask) and generate a total amount
   - Pay the donation amount via a range of payment services
     - Ideally, payment services will be offered that allow low/no fees for charity donations
   - Create a recurring mask donation every "x" period
   - Post a message in the "inspirational message" roll (optional)
3. View 'Donate A Mask' statistics and messages
   - View the number of masks donated to date (pledged amount of money converted to "mask" quantity per system multiplier)
   - View the number of masks requested to date
   - View the number of masks requested with no matching donation yet
   - View the thank you message roll
   - View the inspiration message roll
4. Purchase corporate sponsorship with name/logo/level of support, etc.
   - Future addition once up and running and publicised
5. Share messages, mask requests, mask donations, etc. on social media to link people back here

Initially, the backend system will just be a simple database tracking:

- Requestor details
  - name
  - address
  - quantity requested
  - etc.
- Donator details
  - etc.
- Recurring donation details
  - etc.

Processing of shipments will be manual by volunteers at first.

Eventually, the goal is to automate the back end so that if there are sufficient donated funds, it automates sending the order to the chosen region's supplier for processing. That will be a bit more complicated as will depend on each supplier's APIs for automated order submission.

Future features:

- Donate cryptocurrency for masks
- Create a campaign to get fundraising donations for masks tied directly into the site
  - Same but tied into Facebook fundraising campains and fundraising campaigns via other similar sites
- More payment services/options
- Set up a way for mask suppliers to bid on providing masks at lower prices in exchange for branding/publicity
- Set up full charity organization with CRA number, etc.
  - Issue tax receipts for organizations that donate masks
  - Issue tax receipts for individual donations over a certain amount (e.g., min $20?)

Web presences:

- <https://donatemask.ca>
- <https://twitter.com/donatemask>
- <https://www.facebook.com/donatemaskca>
- <https://www.instagram.com/donatemask>

## How to Contribute

To contribute:

- fork and clone this repo
- create a new branch
- cd into the main project folder with `cd donatemask`

### Unit Tests

Unit tests are automatically run automatically on every pull request and merge to the `main` branch.

To run the tests locally, use:

```sh
npm test
```

You can also run a single test:

```sh
npm test test.name
```

Or run the tests in watch mode:

```sh
npm run test:watch
```

To get a test coverage report, use:

```sh
npm run coverage
```

See the `coverage/lcov-report/index.html` file to see detailed information about files and lines of code not currently being tested.

### Integration Tests

The integration tests use headless browsers to simulate real interactions between the front-end, back-end, and third-party services (e.g., Stripe).

Integration tests are automatically run automatically on merge to the `main` branch, but not for pull requests (i.e., they require access to repo secrets not available to PRs).  If the tests fail, videos of the failing test run(s) are automatically uploaded to GitHub as a build artifact (see the Actions item for your commit).

To run these locally, you'll first need to install the headless browsers:

```sh
npx playwright install
```

Now build and run the front-end and back-end using Docker:

```sh
docker-compose up --build
```

Finally, run the integration tests:

```sh
npm run test:integration
```

To debug the tests, and see the [Playwright Debug docs](https://playwright.dev/docs/debug).  Specifically, you can run with the `PWDEBUG=1` environment variable set to open the [Playwright Inspector](https://playwright.dev/docs/inspector).  You might also want to comment-out all but 1 of the browsers in `playwright.config.js` so you can focus on a single run.

You can also turn-on the browsers to visually see them run the tests:

```sh
npm run test:integration-debug
```

### Back-End

To run the back-end for local development:

```sh
$ cd server
$ npm install
$ npm run dev
```

The back-end will be running on http://localhost:4443.  You should run the front-end next to use it.

NOTE: the back-end is currently limited to node v13.14.0 in production, so be aware of what version you run locally.

### Front-End

To run the front-end for local development:

```sh
$ npm install
$ npm start
```

The front-end will be running on http://localhost:3000.  The front-end will proxy requests to the back-end in development mode at http://localhost:4443, so make sure you are running the back-end first.

### Running Everything Together

To run the front-end and back-end together locally in development, use:

```sh
$ npm run dev
```

### Pull Requests

You're welcome to file issues and create a pull requests.
