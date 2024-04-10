# Synaptiq React Skills Test

## Your mission

Create a new "combined date" control as described in the shopify polaris "patterns"
documentation at https://polaris.shopify.com/patterns/date-picking/single-date

    - You should fork this repository and open a pull request against it with your changes.
    - Your code should compile and test cleanly via github actions. 
        - Opening a pull request will verify this
        - You can also use `act -C..` from https://github.com/nektos/act to run locally
    -You should build off the framework and tools in this repo, namely:
        - yarn
        - storybook
        - next.js
        - react
        - tailwind.css
        - typescript
    - You may pick any of the patterns described (single-date, date range or date list)
    - You should include your component in a sample next.js page added to this project
    - Your example page can do anything you want, so show off what it can do!
    - Your component should be added to the storybook in this project
    - Your component should be tested and demonstrate your command of css, html and react
    - Your should add (and document) the commands used to run your tests
    - Your component should meet the usability guidelines from polaris
    - You should update this readme explaining what usability features and capabilities you have implemented
    - You should be prepared to discuss your changes in detail and explain why they are great.

## Project Details

Project example page can be seen by running `yarn dev` on http://localhost:3000/combinedDate
 
Implemented single-date pattern with option to use start and/or end date.
Example page has test data that can be filtered by entering a start date. 
You can enter an optional end date to filter the data by selecting add end 
date. Dates can be reset by selecting the reset button.

Story component for DateInput can be seen in http://localhost:6006/?path=/docs/example-datainput--docs 

Initial testing for DateInput can be tested by running `yarn test`.