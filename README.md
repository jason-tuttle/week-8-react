# State, Props, and Forms
###### In this project, you will work with using state, props, and forms to create an application that shares the song you are listening to or suggesting to other users.

### Objectives  

You will need to create a new React application using ```create-react-app```.
You will need to create styles and components folders and place the appropriate files in each, being sure to link the other files correctly to each other.
Your project will need to have the following components:
1. App.js
2. NavBar.js
3. PlayListForm.js
4. PlayList.js
5. PlayListItem.js

You can use Bootstrap 4 for easy styling of this project.

[Bootstrap 4 Link](https://v4-alpha.getbootstrap.com/)

Simply add:

```<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">```

to your index.html file in your public directory.
If using Bootstrap, be sure to add a ```class="container"``` to your ```<div id="root"></div>``` tag in your index.html.
Adding the various class names will help automatically style many of your features.
This project is about managing state, props, lifecycles, and forms. The following should be true of your application:

1. ```Your PlayList``` component should pass down the state in the form of props to your ```PlayListItem``` component which will render the actual play list entries. (Hint: PlayListItem should be imported in PlayList)
2. Your ```App.js``` component should only have import statements for your ```NavBar```, ```PlayList```, and ```PlayListForm```.
3. The state for your ```PlayListForm``` component should have ```userName```, ```songArtist```, ```songTitle```, and ```songNotes``` in order to function properly with the fetch functions from the ```tinylasgna.js``` file that you will copy into the component. Follow the directions in that file.
4. The state for your ```PlayList``` should just have one key value pair, ```songs```, in order to properly function with the ```fetch``` function from the ```tinylasagna.js``` file that you will copy into the ```PlayListComponent``` (follow the directions in that file).
5. The styling is up to you, but please make this a polished product!

### Hints  

This will be structuring a working application. Be sure to link up everything properly and look through the [Facebook React Docs](https://facebook.github.io/react/) to help answer any questions.

In order to deploy this application on ```gh-pages``` on GitHub checkout the following link: [Deploying a Create React App](http://jakewiesler.com/surge-vs-github-pages-deploying-a-create-react-app-project/). Skip to the portion about gh-pages and following along!

Don't forget how to handle input changes - here's a tasty example:


```JavaScript
<input  onChange={this.handleUserName}
        type="text"
        className="form-control"
        id="user"
        placeholder="Name or User Name"
        value={this.state.userName}/>
```
        
Be sure to add the corresponding methods or expressions to your component. Look back over the lesson material for help.
