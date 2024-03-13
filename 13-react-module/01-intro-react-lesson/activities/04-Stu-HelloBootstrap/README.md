# HelloBootstrap

In this activity, we will utilize Bootstrap CSS and render components utilizing Bootstrap classes.

## Instructions

* Replace your application's `src` folder with [starter/src](starter/src). Stop the dev server if it is already running.

* Run `npm i --save bootstrap @popperjs/core` in your command line to install Bootstrap and Popper.js.

* Add `import 'bootstrap/dist/css/bootstrap.min.css';` and `import * as bootstrap from 'bootstrap'` to the `main.jsx` file.

> **Note:** Popper.js is needed for interactive features such as dropdowns and popovers. Both imports must be included for these features to work properly.

* Start the app in dev mode by running `npm run dev`.

* Inside the src folder, create a `components` folder. Then inside that newly created folder, create a brand new file named `HelloBootstrap.jsx`. Add code to this file to accomplish the following:

  * It should render a [Bootstrap navbar](https://getbootstrap.com/docs/5.3/components/navbar/), followed by a [Bootstrap jumbotron](https://getbootstrap.com/docs/5.3/examples/jumbotron/), and lastly a [Bootstrap card](https://getbootstrap.com/docs/5.3/components/card/).

  * Set the default export of this file to be your `HelloBootstrap` component.

* Update the `src/App.jsx` file so that it imports the `src/components/HelloBootstrap.jsx` file. Render the `HelloBootstrap` component instead of the text that is currently being rendered.

### Hints

* In order to return separate JSX elements from a function, all of the higher-level elements need a single parent (e.g., usually a `div`).

* All JSX tags must either have an adjacent tag or else have a self-closing forward slash.

* `className` must be used to describe an element's `class` property since `class` is a reserved word in JavaScript.

* Remember to import the `react` library in any file where JSX is utilized. Inspect some of the other files provided with the starter code if you're having difficulty remembering the syntax for this.

* The style attribute works differently in JSX than HTML. If the card component you use has a style set to it, change the syntax to `style={{width:'18rem'}}`

### BONUS

* Instead of having all of your Bootstrap code inside of a single component, create three separate components for the navbar, jumbotron, and card. Render these components inside of the App component.

---

© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
