# HTML Quickstart

![App screenshot](https://s3-us-west-2.amazonaws.com/files.wogan.me/github/html-quickstart-screenshot.png)

An HTML/JS template that gives you a good starting point for HTML-based Domo Apps.

Note that this is an UNOFFICIAL project, and is not supported by Domo Inc.

# About this Quickstart

This quickstart is compatible with the latest version of the Domo Dev Studio, and provides the following out of the box:

* A sidebar flyout, exposed by the wrench icon
* A simple HTML page paradigm, with a navigation section across the top
* Basic page transitions to help the app feel more responsive
* Domo loading icon included - call `showSpinner()` and `hideSpinner()` from anywhere

## Included Libraries

* jQuery v1.12.0
* jQuery UI v1.11.4
* Select2 v4.0.1
* domo.js v2.5.0

# Getting started

1. Ensure you have the Domo Dev Studio installed, as per the [official instructions](https://developer.domo.com/domo-apps/get-started)
1. Download a copy of this project here ([master.zip](https://github.com/woganmay/domo-html-quickstart/archive/master.zip))
1. Extract it, and inside the folder, edit `manifest.json` to set your app name and version
1. In the folder, `git init` or set up other source control
1. Run `domo dev` to start the local dev server
1. Run `domo publish` to push your app to the server
 
## Adding Pages

Each page in the app is build as an independent HTML and Javascript file. While this isn't a perfect setup yet, it should eventually be possible to encapsulate all your custom app logic in the `pages/` subfolder, so that the rest of the framework can be safely overwritten without losing your work.

To add a new page, create two files in `pages/`:

* pagename.html
* pagename.js

Include all the code required to render the page into the html file - including the CSS specific to that page. This content is only loaded when the page itself is requested, and is destroyed from the DOM when another page loads. The `.js` file is handled differently - it's loaded when the app itself loads. The only function you should include here is a function to load the page itself.

For the current version, you still need to integrate your new page into `index.html` in two places:

1. In `div#context-switcher`, add a new hyperlink that calls the page load function
2. In the `<!-- Libraries -->` section, add a reference to your page javascript

I'm hoping to have a dynamic setup for this in future versions.

# Contributions

Use GitHub issues to submit issues. Pull Requests are welcome if they address issues or add new features.

# Roadmap

As of 2017-07-29:

* Responsive! Some elements should collapse/show differently on smaller card sizes or in a mobile view
* Backend config data - allow the app to store per-instance config in a simple cloud key-value store
* Testing required across all browsers, especially for DOM load
* Allow for different transition effects
* Implement a basic charting library
* Have the app scan the `pages/` folder to register pages automatically