# Node JS Blog Manager

#### Table of Contents
- [Description](#description)
- [Additional Requirements](#additional-requirements)
- [Running the App Locally](#running-the-app-locally)
- [Changes from Original Project](#changes-from-original-project)
- [Further Potential Improvements](#further-potential-improvements)

## Description
A blog management system built using Node JS (with a React client), as part of the coursework for [Stephen Grider's Advanced Node JS Udemy course](https://www.udemy.com/course/advanced-node-for-developers).

This project is an exercise in working with legacy content and updating it to contemporary standards. The course content hasn't been revised in some time, but community Q&A has provided some options for updating the project app accordingly.

## Additional Requirements
- You will need to have Redis-Server available, as this is used for caching in the app
- Additionally, for image upload functionality, an AWS S3 bucket is required. The config information should be added to the relevant dev.js file in the config folders for both client and server
- To run Playwright tests, you will need to also run `npx install playwright` to ensure availability of browsers for use in testing

## Running the App Locally
- CD into project folder and run `npm install`
- CD into client folder and run `npm install`
- Ensure Redis Server is running in a terminal (run using the command `redis-server`)
- Return to project folder and run `npm run dev`

## Changes from Original Project
- Revised frontend app to use Vite and TypeScript
    - Changed unit testing from Jest to Vitest to go with use of Vite
- Implemented Redux Toolkit and TanStack Query and Router in frontend
    - Applied use of file-based routing to cut down on unnecessary component separation
    - Route guards added to prevent unauthorized access
- Revised Passport strategy to use auth0 for better testing
- Removed outdated or unnecessary dependency uses
    - Lodash, Redux Form, Passport-Google-OAuth
- Revised form setup to use React Hook Form and Yup form validation
- Moved integration testing from Puppeteer to Playwright
- Switched CI setup from Travis to GitHub Actions workflow

## Further Potential Improvements
- Expand unit and integration testing coverage
- Consider alternatives to S3 Bucket storage for image upload