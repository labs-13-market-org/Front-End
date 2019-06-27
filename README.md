🚫 Note: All lines that start with 🚫 are instructions and should be deleted before this is posted to your portfolio. This is intended to be a guideline, feel free to add your own flare to it.

🚫 The numbers 1️⃣ through 5️⃣ next to each item represent the week that part of the docs needs to be comepleted by.  Make sure to delete the numbers by the end of Labs.

🚫 Each student has a required minimum number of meaningful PRs each week per the rubric. Contributing to docs does NOT count as a PR to meet your weekly requirements.

# 1️⃣ Market Organizer App

1️⃣ You can find the deployed project at [https://nostalgic-wing-420c23.netlify.com/](https://nostalgic-wing-420c23.netlify.com/).

## 4️⃣ Contributors

🚫Add contributor info below, make sure add images and edit the social links for each member. Add to or delete these place-holders as needed

|                                       [**Francis Chen**](https://github.com/fncischen)                                        |                                       [**Sem Limi**](https://github.com/Sem8)                                        |                                       [**Latifah President**](https://github.com/latifahpresident)                                        |                                       [**Patrick Schwindt**](https://github.com/pschwin)                                        |                                       [**Toua Xiong**](https://github.com/txiong000)                                        |
| :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: |
|                      [<img src="https://avatars2.githubusercontent.com/u/5484192?s=460&v=4" width = "200" />](https://github.com/fncischen)                       |                      [<img src="https://avatars2.githubusercontent.com/u/7892799?s=460&v=4" width = "200" />](https://github.com/Sem8)                       |                      [<img src="https://avatars2.githubusercontent.com/u/38023390?s=460&v=4" width = "200" />](https://github.com/latifahpresident)                       |                      [<img src="/market-org/src/components/about/patrick.jpg" width = "200" />](https://github.com/pschwin)                       |                      [<img src="./market-org/src/components/about/toua.JPG" width = "200" />](https://github.com/txiong000)                       |
|                 [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/fncischen)                 |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Sem8)             |           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/latifahpresident)            |          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/pschwin)           |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/txiong000)             |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/francischen2/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/sem-limi-85316427/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/latifah-president/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/patrick-schwindt-059089a3/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/toua-xiong-97bb45185/) |

<br>
<br>

🚫 4️⃣ Optional examples of using images with links for your tech stack, make sure to change these to fit your project

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)
![Typescript](https://img.shields.io/npm/types/typescript.svg?style=flat)
[![Netlify Status](https://api.netlify.com/api/v1/badges/b5c4db1c-b10d-42c3-b157-3746edd9e81d/deploy-status)](netlify link goes in these parenthesis)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

🚫 more info on using badges [here](https://github.com/badges/shields)

## Project Overview

1️⃣ [Trello Board](https://trello.com/labs13marketorganizer)

1️⃣ [Product Canvas](https://projects.invisionapp.com/share/MHRGLDMF8G3#/screens/357205480)

1️⃣ [UX Design files](🚫add link to design files here) - 🚫 delete if not applicable

Small markets (flea markets, farmers markets, etc.) can display how many stalls they have available and of what size. They can also list the current merchants and link to the vendor's profile so customers can see their products. Merchants can rent available stalls on the application and have a display for their store. Merchants can upload and update their inventory or services to display on their profile.

A online platform for merchants to rent stalls from markets to sell produce at public farmers markets.



### 4️⃣ Key Features

-    Signup as a market user or vendor user
-    As a market user, advertise/display your market stalls to sell (upload image)
-    As vendor user, search for suitable stalls to purchase (orders/carts)
-    Market user, signup with stripe through our platform to receive payment directly from vendors (stripe connect)


## 1️⃣ Tech Stack

### Front end built using:

#### _Front end framework goes here_
React & React hooks with Context

- Single Page Application, doesn't load new pages from server, allowing for quick load times.
- Reusable Components (very easy to scale app) 
- Popular amongst develepors, allowing for library upkeep.
- Can transition to learning React native easier
- React Hooks with Context was used for global state management

Material UI
- Scales between mobile and desktop view out of the box.
- Developed base on Google's material design
- Extensive documents, great layout examples on their website
- Work well with React

Firebase
- For user authentication
- Easy Oauth implementation
- Track logged user on web application
- Image Upload and image storage capability


#### Front end deployed to `https://www.netlify.com/`

#### [Back end](https://github.com/labs-13-market-org/Backend) built using:

Node/Express js
- Uses Javascript to build web server.
- light-weight web application framework to help organize web application into an MVC architecture
- Express makes building REST API simpler

PostgreSQL
- use SQL to build relational database
- Support JSON

# APIs

## 2️⃣ Authentication API here
Firebase authentication

Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.



## 2️⃣ Payment API here
Stripe Connect

Marketplaces and platforms use Stripe Connect to accept money and pay out to third parties. Connect provides a complete set of building blocks to support virtually any business model, including on-demand businesses, e‑commerce, crowdfunding, and travel and events.

## 3️⃣ Firebase Storage

Firebase storage was used for image upload feature

Cloud Storage for Firebase lets developers upload and share user generated content, such as images, allowing the app to contain colorful media content. The data is stored in a Google Cloud Storage bucket, an exabyte scale object storage solution with high availability and global redundancy. Cloud Storage lets users securely upload these files directly from mobile devices and web browsers.

## 3️⃣ Misc API here

🚫Replace text below with a description of the API

When you do it your way you can go anywhere you choose. Let your heart take you to wherever you want to be. If I paint something, I don't want to have to explain what it is. A tree needs to be your friend if you're going to paint him. That's a son of a gun of a cloud. Even the worst thing we can do here is good.

## 3️⃣ Misc API here

🚫Replace text below with a description of the API

Volunteering your time; it pays you and your whole community fantastic dividends. Maybe there's a happy little waterfall happening over here. You can spend all day playing with mountains. We don't have to be committed. We are just playing here. You have freedom here. The only guide is your heart. It's cold, but it's beautiful.

# 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

🚫These are just examples, replace them with the specifics for your app

    *  REACT_APP_apiKey - this is your Google API key, which can be generated in the Google Cloud Console
    *  REACT_APP_authDomain - when you set up your Firebase project, this information will be in the dashboard
    *  REACT_APP_databaseURL - in the Firebase dashboard
    *  REACT_APP_projectID - in the Firebase dashboard
    *  REACT_APP_storageBucket - in the Firebase dashboard
    *  REACT_APP_messagingSenderId - in the Firebase dashboard
    *  REACT_APP_stripe_API - this is your public Stripe API key, generated in the Stripe dashboard
    *  REACT_APP_backendURL - optional for your local development server
    *  REACT_APP_clientid - this is the Stripe_connect clientID, generated in Stripe_connect settings
    *  REACT_APP_stripe_plan - this is the ID for a second Stripe subscription plan, generated under Stripe products

# 5️⃣ Content Licenses

🚫For all content - images, icons, etc, use this table to document permission of use. Remove the two placeholders and add you content to this table

| Image Filename | Source / Creator | License                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------- |
| doodles.png    | Nicole Bennett   | [Creative Commons](https://www.toptal.com/designers/subtlepatterns/doodles/) |
| rings.svg      | Sam Herbert      | [MIT](https://github.com/SamHerbert/SVG-Loaders)                             |

# 4️⃣ Testing

🚫Document what you used for testing and why

# 4️⃣ Installation Instructions

🚫explain how to install the required dependencies to get this project up and running with yarn and NPM

## Other Scripts

🚫replace these examples with your own

    * typecheck - runs the TypeScript compiler
    * build - creates a build of the application
    * start - starts the production server after a build is created
    * test - runs tests in **tests** directory \* eject - copy the configuration files and dependencies into the project so you have full control over them

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request
   
 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](https://github.com/labs-13-market-org/Backend/blob/master/README.md) for details on the backend of our project.
