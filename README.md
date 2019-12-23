# wtfood

## what the food?!

The point of this app is two-fold:

- Build a full-stack application from the ground up and maximize the learning potential from the project
- Build something useful that I would actually like to use

### Motivation

When I tried the keto diet a couple times in 2018/2019, I tracked all of my nutritional data in a Google Sheets spreadsheet. This included tracking the meals I ate, various ingredients and their macronutrient breakdowns (macros) as well as recipes and their respective nutritional information.

What I found was that accessing this spreadsheet (on desktop and mobile) to log data was complicated, and I eventually stopped altogether. Building a webapp with ease of use as a primary design factor would allow me to continue logging nutritional intake.

### Built with

- **Front-end:** [Bootstrap 4 free dashboard SH Admin 2](https://startbootstrap.com/themes/sb-admin-2/) -> Based on Boostrap 4, this template takes care of the site design for consistent look and feel, as well as responsiveness
- **Backend:** NodeJS + Express + EJS + MongoDB -> This well supported stack allows for rapid prototyping via built-in reactivity and components

### Goals

Mainly the goal of the project is just to get the basic functionality of the site going:

- Leverage a bespoke CRUD API to:
  - Log ingredients (and their macros)
  - Log recipes (and their macros)
- Log dietary intake
  - Track macronutrient consumption

Future goals include functionality such as

- User accounts
- Privacy/sharing of personally-entered datasets
- Multi-user access to the database of ingredients and recipes
- Entering of data by scanning nutritional labels on food
- Tracking sleep
- Tracking exercise
- Building custom meal plans leveraging user-submitted recipes
- Offer meal plans customized by diet (keto, vegetarian, vegan, carnivore, etc.)

### Use

- `npm install -g nodemon`
- `git clone https://github.com/cwdott/wtfood.git`
- `cd wtfood/`
- `npm install`
- `npm run dev`
- Open browser to `http://localhost:3000/`
