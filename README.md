<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project we will be building a site for a University to keep track of student information and class enrollment. We will be using React Router to navigate between the various views. Take some time to familiarize yourself with the provided components. 

* `App` will be the top level component for our application.
* `Home` will be the home page displayed when the application first loads. It will also display the available classes.
* `About` will be the about page displaying information about the University.
  * `History` will be a nested view with the about page and will display the history of the university.
  * `Contact` will be a nested view with the about page and will display the University's contact information.
* `ClassList` will display all the enrolled students for that specific class.
* `Student` will be the detail view for a particular student.

# Live Example

<a href="https://apis.devmountain.com/routing">Click Me!</a>

<img src="https://github.com/DevMountain/react-4-afternoon/blob/solution/readme-assets/1.png" />

## Setup

* `fork` and `clone` this repository.
* `cd` into the project.
* Run `npm install`.
    * One of the packages that was installed is `json-server`.
    * This library will mimic a REST api and allow you to make HTTP requests for the student data.
      * This data is stored in `./db.json`.
    * Another package that was installed for you is `concurrently`.
    * This library will allow us to run multiple scripts in a single terminal window.
* Run `npm start` to spin up the development server <b>AND</b> the `json-server`.

<img src="https://github.com/DevMountain/react-4-afternoon/blob/solution/readme-assets/2.png" />

## Step 1

### Summary

In this step, we'll be installing additional dependencies required for configuring a react router. We'll then create a router for the project.

### Instructions

* Install React Router (`npm install --save react-router-dom`).
* Create a new file in `./src` called `routes.js` and open it.
* Configure a router in this file: 
  * Use the following components as routes:
    * `./src/components/Home/Home.js`
    * `./src/components/About/About.js`
  * Use the following combinations of paths and components for your routes:
    * Path: "/" - Component: `Home` - This path should be exact.
    * Path: "/about" - Component: `About`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by installing the `react-router-dom` package. This will allow us to use routing in a react application. We can install it by running `npm install --save react-router-dom` in a terminal. Make sure the terminal is `cd` into the root project directory.

Now that we have `react-router-dom`, let's create a JavaScript file that will hold all of our routes. In `.src/`, let's make a new file called `routes.js`. At the top of this file we'll need to import `React` from `react` and also import `Switch` and `Route` from `react-router-dom`.

```js
import React from 'react';
import { Switch, Route } from 'react-router-dom';
```

We'll also want to import the components that we want the user to be able to route to. In this case, let's import the `Home` and `About` component.

```js
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
```

Now that we have all of our dependencies in `routes.js`, we can use an `export default` statement to export a router. We'll need an `exact` route at `/` to load the `Home` component and a route at `/about` to load the `About` component.

```js
export default (
  <Switch>
    <Route component={ Home } exact path="/" />
    <Route component={ About } path="/about" />
  </Switch>
)
```

</details>

### Solution

<details>

<summary> <code> ./src/routes.js </code> </summary>

```js
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';

export default (
  <Switch>
    <Route component={ Home } exact path="/" />
    <Route component={ About } path="/about" />
  </Switch>
)
```

</details>

## Step 2

### Summary

In this step, we will take the routes we just configured in `./src/routes.js` and add it to our application in `./src/index.js`.

### Instructions

* Open `./src/index.js`.
* Import `HashRouter` from `react-router-dom`.
* Wrap the `App` component in a `HashRouter` component.
* Open `./src/App.js`.
* Import `routes` from `./routes.js`.
* Underneath the `nav` element render the `routes` JSX.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `./src/index.js` and importing `HashRouter` from `react-router-dom` at the top of the component. We'll need to wrap our react application with this `HashRouter` component in order for routing to work.

```js
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>
, document.getElementById('root'));
```

Now that our application is wrapped with `HashRouter`, we can render our router any where in the app. Let's open `./src/App.js` and import `./src/routes.js` at the top of the file. Then, in the `render` method, let's render our routes underneath the `nav` element.

```js
render() {
  return (
    <div>
      <nav className='nav'>
        <div>WestSide University</div> 
        <div className='link-wrap'>
          <div className='links'>Home</div>
          <div className='links'>About</div> 
        </div>
      </nav>

      { routes }
    </div>
  )
}
```

</details>

### Solution

<details>

<summary> <code> ./src/index.js </code> </summary>

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './main.css';
import App from './App';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>
, document.getElementById('root'));
```

</details>

<details>

<summary> <code> ./src/App.js </code> </summary>

```js
import React, { Component } from 'react';
import routes from './routes';

export default class App extends Component {
  render() {
    return (
      <div>
        <nav className='nav'>
          <div>WestSide University</div> 
          <div className='link-wrap'>
            <div className='links'>Home</div>
            <div className='links'>About</div> 
          </div>
        </nav>

        { routes }
      </div>
    )
  }
}
```

</details>

<img src="https://github.com/DevMountain/react-4-afternoon/blob/solution/readme-assets/3.png" />

## Step 3

### Summary

In this step, we will be adding links to render our home and about views.

### Instructions

* Open `src/App.js`.
* Import `Link` from `react-router-dom`.
* Locate the `div` elements with className of links.
  * Replace the `div` elements to be `Link` components.
  * The Home link should be sent to `/`.
  * The About link should be sent to `/about`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `src/App.js` and importing `Link` from `react-router-dom` at the top of the file. The `Link` component will allow us to add clickable links into the DOM so the user can navigate the application. There are two `div` elements with the classname of `links`. Let's replace the `div` to be `Link` with the same classname. The `Link` component uses a `to` prop to determine which route to navigate to. For the home route, we'll want to use `/`, and for the about route, we'll want to use `/about`.

```js
<Link to="/" className='links'>Home</Link>
<Link to="/about" className='links'>About</Link> 
```

</details>

### Solution

<details>

<summary> <code> ./src/App.js </code> </summary>

```js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from './routes';

export default class App extends Component {
  render() {
    return (
      <div>
        <nav className='nav'>
          <div>WestSide University</div> 
          <div className='link-wrap'>
            <Link to="/" className='links'>Home</Link>
            <Link to="/about" className='links'>About</Link>
          </div>
        </nav>

        { routes }
      </div>
    )
  }
}
```

</details>

<br />

<img src="https://github.com/DevMountain/react-4-afternoon/blob/solution/readme-assets/4g.gif" />

## Step 4

### Summary

In this step, we will be adding a new route for our `ClassList` component. We will also be adding `Link` components in the `Home` component to link to the `ClassList` route for each of the listed classes ( Math, English, and Biology ). The `ClassList` component will need to render students for a specific class, in order to do this we'll be using route params.

### Instructions

* Open `src/routes.js`.
* Import the `ClassList` component to use as a route.
* Create a `ClassList` route with the following properties:
  * Path: `/classlist/:class` - Component: `ClassList`.
* Open `src/Home/Home.js`.
* Import `Link` from `react-router-dom`.
* Wrap each `button` element with a `Link` component.
* Each link should direct to the path `/classlist` with the class parameter.
  * Math 1010 - `/classlist/MATH1010`
  * English 2010 - `/classlist/ENG2010`
  * Biology 2020 - `/classlist/BIO2020`

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `src/routes.js` and importing the `ClassList` at the top of the file with the other imported components. For this component, we are going to make use of routing parameters. This will allow us to use a single component that can know what dataset to load by looking at the parameter. For example: the math parameter will be `MATH1010`, when the component loads and reads `MATH1010` we can select all the students from `db.json` with the class of `MATH1010`. If that doesn't make sense entirely don't worry, we'll go into more detail in later steps.

For now let's add a new route that uses a path of `/classlist/:class` and uses a component of `ClassList`. The `:class` indicates a route parameter called `class` in the url. We'll cover how to access the route parameter in a later step.

```js
<Route component={ ClassList } path="/classlist/:class" />
```

Now that we have our new route setup in `./src/routes.js`, let's open up `./src/components/Home/Home.js` and import `Link` from `react-router-dom` at the top of the file. The `Home` component renders three buttons for the classes, let's update those buttons to be wrapped in a `Link` component. For Math, we'll want to route `/classlist/MATH1010`. For English, we'll want to route to `/classlist/ENG2010`. And for Biology, we'll want to route to `/classlist/BIO2020`. If you're wondering why it's specifically `MATH1010`, `ENG2010`, and `BIO2020`; it's so that we can map over the `db.json` and make a `class` match. A student's `class` property will equal one of those three strings.

```js
render() {
  return (
    <div className="box">
      <Link to='/classlist/MATH1010'><button className='btn'>Math 1010</button></Link>
      <Link to='/classlist/ENG2010'><button className='btn'>English 2010</button></Link>
      <Link to='/classlist/BIO2020'><button className='btn'>Biology 2020</button></Link>
    </div>
  );
}
```

</details>

### Solution

<details>

<summary> <code> ./src/routes.js </code> </summary>

```js
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import ClassList from './components/ClassList/ClassList';

export default (
  <Switch>
    <Route component={ Home } exact path="/" />
    <Route component={ About } path="/about" />
    <Route component={ ClassList } path="/classlist/:class" />
  </Switch>
)
```

</details>

<details>

<summary> <code> ./src/components/Home/Home.js </code> </summary>

```js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {

  render() {
    return (
      <div className="box">
        <Link to='/classlist/MATH1010'><button className='btn'>Math 1010</button></Link>
        <Link to='/classlist/ENG2010'><button className='btn'>English 2010</button></Link>
        <Link to='/classlist/BIO2020'><button className='btn'>Biology 2020</button></Link>
      </div>
    );
  }
}
```

</details>

<br />

<b>Watch how the URL changes when navigating between pages</b>

<img src="https://github.com/DevMountain/react-4-afternoon/blob/solution/readme-assets/5g.gif" />

## Step 5

### Summary

In this step, we will update the `ClassList` component to display the students enrolled for that specific class. To get this data, we will look at what the `class` route parameter equals an make a `HTTP` request to our `json-server`.

### Instructions

* Open `src/components/ClassList/ClassList.js`.
* Create a constructor method that initializes state with a property called `students`.
  * `students` should default to an empty array.
* Create a `componentDidMount` method that makes a `HTTP` request to the `json-server`:
  * Install `axios` and `import` it into the component.
  * The `json-server` API url is `http://localhost:3005/students?class=`.
    * Class should equal `MATH1010` OR `ENG2010` OR `BIO2020` depending on the route parameter.
    * Hint: `react-router-dom` passes down a `match` object on a component's `props`.
  * Use the returned data from the API request to update the `students` array on `state`.
* Go into the `render` method of the component.
* `map` over the students and return an `h3` tag of the students `first` and `last` name.
  * Remember react requires a unique `key` prop on mapped elements.
* Undearneath the `h2` tag, render the `mapped` over students.
* Update the `h1` tag to display the page's class name.
  * Hint: `react-router-dom` passes down a `match` object on a component's `props`.

<details>

<summary> Detailed Instructions </summary>

<br />



</details>

### Solution

<details>

<summary> <code> ./src/components/ClassList/ClassList </code> </summary>

```js
import React, { Component } from 'react';
import axios from 'axios';

export default class ClassList extends Component {
  constructor() {
    super();

    this.state = {
      students: []
    };
  }

  componentDidMount() {
    return axios.get(`http://localhost:3005/students?class=${ this.props.match.params.class }`).then( results => {
      this.setState({
        students: results.data
      });
    });
  }

  render() {
    const students = this.state.students.map((student, i) => (
      <h3 key={ i }>{ student.first_name } { student.last_name }</h3>
    ));

    return (
      <div className='box'>
        <h1>{ this.props.match.params.class }</h1>
        <h2>ClassList:</h2>
        { students }
      </div>
    )
  }
}
```

</details>

<br />

<img src="https://github.com/DevMountain/react-4-afternoon/blob/solution/readme-assets/6g.gif" />

## Step 6

### Summary

Now that we are getting the class student enrollment list for each class, we will start setting up the Student detail view.

### Instructions

* Open `src/routes.js`.
* Import the `Student` component to use as a route.
* The `Student` component will need to render the details for a specific student. In order to do this, we will be using params.
    * Create a new route with the path being `/student/:id` and the component being the `Student` component you previously imported.
* Open `src/components/ClassList/ClassList.js`.
* Each of the student's names will need to link to the `Student` component by passing up the student's id to the URL as a parameter.
    * Import `Link` from `react-router-dom`.
    * Inside the callback function for the `.map()` method, wrap the `h3` tag being returned with a `Link` component. Have that `Link` component direct to `/student/${student.id}`.
    * Don't forget to move the unique `key` prop to the outer most element.
* You should now be able to navigate from the `ClassList` view to the `Student` detail view (which will be empty).

### Solution

<details>

<summary>src/routes.js</summary>

```jsx
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import ClassList from './components/ClassList/ClassList';
import Student from './components/Student/Student';

export default (
  <Switch>
    <Route component={ Home } exact path="/" />
    <Route component={ About } path="/about" />
    <Route component={ ClassList } path='/classlist/:class' />
    <Route component={ Student } path='/student/:id' />
  </Switch>
)
```

</details>

<details>

<summary>src/components/ClassList/ClassList.js</summary>

```jsx
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ClassList extends Component {
    constructor() {
        super();

        this.state = {
            students: []
        }
    }

    componentDidMount() {
        return axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then(res => {
            this.setState({
                students: res.data
            })
        })
    }

    render() {
        const students = this.state.students.map((student, i) => (
            <Link to={`/student/${student.id}`} key={i}>
                <h3>{ student.first_name } { student.last_name }</h3>
            </Link>
        ))

        return (
            <div className='box'>
                <h1>{ this.props.match.params.class }</h1>
                <h2>ClassList:</h2>
                { students }
            </div>
        )
    }

}
```

</details>

## Step 7

### Summary

Using the student's id which was passed as a parameter in the url, we will make an HTTP request to our `json-server` for that specific student's information. We will display the specific student's information in the `Student` component.

### Instructions

* Open `src/components/Student/Student.js`.
* We first need to initialize state.
    * In the `constructor` method, initialize state with a property named `studentInfo` that is set to the value of an empty object.
* We now need to make an HTTP request to our `json-server` to get the information for the specific student.
    * Import `axios`.
    * Create a `componentDidMount` lifecycle hook method.
    * Inside of the `componentDidMount` lifecylce hook method, make a get request using `axios` to `http://localhost:3005/students/`. Using the `params` object, add to the end of the request URL the id that was passed as a parameter.
    * Update state's `studentInfo` to be the returning data.
* Now that we have the data for the student, we can display it on the page.
    * Underneath the `h1` tag, display state's `studentInfo` properties:
        * `first_name` and `last_name` within an `h1` tag.
        * The text `Grade:` followed by the `grade` property within an `h3` tag.
        * The text `Email:` followed by the `email` property within an `h3` tag.

### Solution

<details>

<summary>src/components/Student/Student.js</summary>

```jsx
import React, { Component } from 'react';
import axios from 'axios';

export default class Student extends Component {
    constructor() {
        super();

        this.state = {
            studentInfo: {}
        }
    }

    componentDidMount() {
        return axios.get(`http://localhost:3005/students/${this.props.match.params.id}`).then(res => {
            this.setState({
                studentInfo: res.data
            })
        })
    }
    
    render() {

        return (
            <div className='box'>
                <h1>Student:</h1>
                <h1>{this.state.studentInfo.first_name} {this.state.studentInfo.last_name}</h1>
                <h3>Grade: {this.state.studentInfo.grade}</h3>
                <h3>Email: {this.state.studentInfo.email}</h3>
            </div>
        )
    }
}
```

</details>

![student-detail-view](readme-assets/student-detail-view.gif)

## Step 8

### Summary

We now will add a subnav bar that will link to the soon to be nested `About`, `History`, and `Contact` components.

### Instructions

* Open `src/components/About/About.js`.
* Import `Link` from `react-router-dom`.
* Inside the `div` with the className `subnav`, add 3 `h3` tags with the text:
    * `About`
    * `History`
    * `Contact`
* Wrap each `h3` tag with a `Link` component that links the following paths:
    * About - `/about`
    * History - `/about/history`
    * Contact - `/about/contact`
* Give each of these `Link` components the className `subnav_links`.

### Solution

<details>

<summary>src/components/About/About.js</summary>

```jsx
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {

    render() {
        return (
            <div>
                <div className='subnav'>
                    <Link to='/about' className='subnav_links'><h3>About</h3></Link>
                    <Link to='/about/history' className='subnav_links'><h3>History</h3></Link>
                    <Link to='/about/contact' className='subnav_links'><h3>Contact</h3></Link>                    
                </div>
                <div className='box'>
                </div>
            </div>
        )
    }
    
}
```

</details>

## Step 9

### Summary

We will finish by nesting the routes to the `About`, `History`, and `Contact` components.

### Instructions

* Open `src/components/About/About.js`.
* Import `Switch` and `Route` from `react-router-dom`.
* Import the `History` and `Contact` components.
* Inside the `div` with the className `box`, add a `Switch` component. 
* Add 2 routes inside the `Switch` component that will render the `History` and `Contact` components. Look to the `Link` components above for the correct paths.
* Inside that same `Switch` component, create a third route. 
    * Instead of using a component prop, this will use a `render` prop to render the JSX for the `About` page. Insert the following JSX in the render's function:
<details>

<summary>About JSX</summary>

```jsx
<div>
    <h1 className='title'>About WestSide University:</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu lorem et ultricies. In porta lorem at dui semper porttitor. Nullam quis cursus dui. Cras tincidunt vehicula tellus eu facilisis. Donec nisi turpis, iaculis et arcu a, aliquet ultrices nisl. Nam in pharetra odio, ac blandit metus. Suspendisse potenti. Praesent elementum diam non orci cursus rutrum. Pellentesque condimentum ultrices dignissim. Sed a tempor ligula, vel luctus sapien. Mauris vehicula rutrum massa. Duis condimentum, ex quis ullamcorper rhoncus, erat libero tempor arcu, condimentum facilisis tellus lectus ut nunc. Pellentesque vitae faucibus diam. Vestibulum eu erat ex. Ut justo neque, varius aliquet erat vel, scelerisque convallis lacus. Mauris semper lorem mauris, sed dignissim eros consectetur nec.</p>
</div>
```

</details>

* Make sure to add this route after the History and Contact routes otherwise only the About route will be loaded.
* You should now be able to navigate between each of the `About`, `History`, and `Contact` views from the sub nav.

### Solution

<details>

<summary>src/components/About/About.js</summary>

```jsx
import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import History from '../History/History';
import Contact from '../Contact/Contact';

export default class About extends Component {

    render() {
        return (
            <div>
                <div className='subnav'>
                    <Link to='/about' className='subnav_links'><h3>About</h3></Link>
                    <Link to='/about/history' className='subnav_links'><h3>History</h3></Link>
                    <Link to='/about/contact' className='subnav_links'><h3>Contact</h3></Link>                    
                </div>
                <div className='box'>
                    <Switch>
                        <Route path='/about/history' component={ History }/>
                        <Route path='/about/contact' component={ Contact }/>      
                        <Route path='/about' render={() => (
                            <div>
                                <h1>About the University</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu lorem et ultricies. In porta lorem at dui semper porttitor. Nullam quis cursus dui. Cras tincidunt vehicula tellus eu facilisis. Donec nisi turpis, iaculis et arcu a, aliquet ultrices nisl. Nam in pharetra odio, ac blandit metus. Suspendisse potenti. Praesent elementum diam non orci cursus rutrum. Pellentesque condimentum ultrices dignissim. Sed a tempor ligula, vel luctus sapien. Mauris vehicula rutrum massa. Duis condimentum, ex quis ullamcorper rhoncus, erat libero tempor arcu, condimentum facilisis tellus lectus ut nunc. Pellentesque vitae faucibus diam. Vestibulum eu erat ex. Ut justo neque, varius aliquet erat vel, scelerisque convallis lacus. Mauris semper lorem mauris, sed dignissim eros consectetur nec.</p>
                            </div>
                        )}/>
                    </Switch>
                </div>
            </div>
        )
    }
    
}
```

</details>

![about-nested-routes](readme-assets/about-nested-routes.gif)

## Black Diamond

Try adding a back button on the `Student` detail view that will route back to the `ClassList` view. You can also add a back button to the `ClassList` view that will route back to the `Home` view.

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>
