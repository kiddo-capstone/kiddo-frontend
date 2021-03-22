>[KidDo deployed site](main.d308du7xm8oyif.amplifyapp.com/)

---

### KidDo 
###### A secret agent themed learning platform for kids that is both fun and rewarding. KidDo Agents learn to earn! 

---

![Welcome to KidDo](https://user-images.githubusercontent.com/66697338/111925957-6cb98580-8a70-11eb-8c2e-bc930d5f1872.png)


*Homepage*

## Table of Contents
* [Introduction](#introduction)
* [Features](#features)
* [Reflection](#reflection)
* [Team](#team)


## Introduction

### Overview
KidDo is a secret-agent-themed skill building app for kids ages ~9-12. KidDo gamifies learning and task management, allowing the user to collect "photo evidence" with their phone's camera in order to complete tasks centered around health, social/emotional, academic, and basic life skills. A kid "Agent" receives positive reinforcement by collecting points for completing tasks within a mission, working toward redeeming parent rewards created by the parent.

KidDo is a Progressive Web App built with React and advanced hooks on the front end, and ruby/rails on the backend. KidDo is a fullstack group project designed specifically for Mod 4 Turing software engineer students. The project seeks to challenge the totality of learning of students up to this point, pulling together their combined core-stack knowledge in front and backend technologies.

The project emphasises React fundamentals at a scale much greater than students previously embarked on. We used advanced hooks (context + reducer) for state management, saving on the boilerplate of Redux. The fullstack nature of the project required carefully and critically planning component architecture and the flow of data, pushing us to employ professional 'soft' skills in the planning and project management stages; the team utilized wireframing, mind-mapping and managing project workflow with Issues and PRs through the **Agile** methodology on GitHub Project Board.

Lastly, be sure to click this here when you see it:
<details>
  <summary>**Under the Hood**</summary>
There's more info under here about the functionality being described!
</details>

### Tech Stack
> - Progressive Web App
> - Service Workers
> - React (w/ hooks)
> - React Router
> - JavaScript ES6
> - Async
> - REST API
> - Material-UI
> - Auth0
> - HTML 
> - CSS
> - Material UI
> - TDD: Cypress, React Testing Library, Jest

- Deploy: AWS + TravisCI
- Project Management: GitHub Projects Board
- VC: git + GH
- Wireframing: Miro

## Features 

### **Parent Dashboard (HQ)**

![Screen Shot 2021-03-21 at 6 11 07 PM](https://user-images.githubusercontent.com/66697338/111926038-d0dc4980-8a70-11eb-9f47-55ed0da145ea.png)

*Parent Dashboard (HQ)*
<br/>

The official 'parent' portion of the app. In this view, parents can add children to their account. This is where mission creation happens. Missions are composed of tasks for children to do. Those tasks are worth points and can be used to redeem a 'Parent Reward' - which is also created by the parent. See this video for a breakdown of the features offered in the Parent Dashboard.
<br/>

[![Parent View Tutorial](https://user-images.githubusercontent.com/66697338/111926634-41846580-8a73-11eb-921c-7163c8f8836e.png)](https://player.vimeo.com/video/527057071 "Video Title")

<br/>
<br/>

### **Mission Control** 
<br/>


![Mission Control](https://user-images.githubusercontent.com/66697338/111926819-f7e84a80-8a73-11eb-9fec-8bb96872f767.png)
<br/>
<br/>

The rest of the app is effectively an experience for the child, or KidDo agent. Mission control is where KidDo agents can find the missions created by parent accounts populated with preloaded or custom parent tasks. Mission cards carry information pertinent to the mission, including badges that indicate the type of tasks populating the mission.
<br/>
<br/>

![Mission card](https://user-images.githubusercontent.com/66697338/111926936-7644ec80-8a74-11eb-9476-f73cce6a9537.gif)
<br/>

<details>
  <summary>**Under the Hood**</summary>

---

This being our first comprehensive full stack project, there were some missteps in the planning stages. To gather a users missions, we do not have a single API call to the backend to get a list of missions for a user by ID...sadly. When the component renders, an API call is made to gather a list of all missions. The user's ID is passed into the endpoint from the Account selection screen, and then collected from the endpoint inside of the `match` object on the Mission Control screen. This ID is then used to filter out all related missions from the entire list of missions. 

In the future, we'd like to retool some of the API calls, including getting all missions by user ID.

---

</details>

<br/>
<br/>

### **Mission Details**
<br/>
<br/>

![Screen Shot 2021-03-21 at 6 44 57 PM](https://user-images.githubusercontent.com/66697338/111927204-8b6e4b00-8a75-11eb-9759-e0defaaa22a7.png)
<br/><br/>


Inside of the mission, users can see the various tasks that compose that mission, their details, point value, and what they submitted if the task has been completed.
<br/>
<br/>

![Mar-21-2021 18-46-42](https://user-images.githubusercontent.com/66697338/111927286-d1c3aa00-8a75-11eb-9909-fe569757d83b.gif)

<br/>
<br/>

### **Task View**
<br/>

![Screen Shot 2021-03-21 at 6 48 03 PM](https://user-images.githubusercontent.com/66697338/111927324-f9b30d80-8a75-11eb-8af0-31c6ee3addf2.png)
<br/>
<br/>

Inside of Task View, users will receive information on their task and what to do to complete it. Tasks are currently either completed by journaling based on a prompt, or by taking a photo based on a prompt. Upon submission, the task is reflected as complete, the user collects the point value of the task, and the user can see a record of what they submitted.

On completion, users receive an animation that indicates the collection of points and their 'Agent Stats' are updated.
<br/>
<br/>

![Mar-21-2021 18-57-30](https://user-images.githubusercontent.com/66697338/111927725-53680780-8a77-11eb-8904-228dfe200b62.gif)

<br/>

<details>
  <summary>**Under the Hood**</summary>

---

The preloaded tasks were composed in a CSV and seeded into our DB. Similar logic exists for creating custom Parent Tasks in Parent View. The logic to render completed cards occurs inside of a `useEffect` in the Daily Mission view. Similar logic updates point totals, task completion tracking, and changes to the missions list. 

---

</details>

<br/>
<br/>

### **Parent Rewards**
<br/>

![image](https://user-images.githubusercontent.com/66697338/111927791-8e6a3b00-8a77-11eb-9e46-2fbd914a2c21.png)
<br/>
<br/>

Once users have accumulated enough points, users may opt to redeem a Parent Reward (as created by the parent in parent view)...for clarification, this production shot has placeholder text that is in regards to the developer's cat.
<br/>
<br/>


## Reflection
<br/>
<br/>


#### Wins

* Stable App
* Delivered a very ambitious app on a limited timeline and new fs environment
* Excellently detailed/documented issues and stories inside GH Projects
* Complex interactions between the different type of accounts (parents, kids)
* Rebase workflow resulted in zero merge conflicts
* Deploy to AWS with TravisCI
* Deploying as PWA with caching for offline functionality

#### Challanges

* Limited time frame with limited experience on a full stack team
Given more time/experience in these settings, I think we'd have learned to 'speak each others' languages' a bit more fluently. Despite the best intent, often even when saying the same things, the differences in approaching coding from the BE to the FE resulted in some gaps. That being said, it still worked extremely well working together and it was a delight to begin to better understand the best practices of developing data models inside of a relational database.

* Scope
We elected to stick with React without a framework. While I do not believe this is a problem in and of itself for a project this size, it does mean that planning has to be clear, crisp and extensive. While we didn't shirk planning duties - our foresight was limited by a lack of experience. There were numerous revisions in how to approach data in both the FE and BE as the project began to grow. This challenge goes hand in hand with the above challenge.

* Security and Persistence
Currently, on refresh state will persist by virtue of local storage. The limitations of local storage are quite obvious. In the future, persisting states would be more of a collaborative effort between FE and BE. I would like to look into more modern and professional solutions, such as cookies, tokens, etc.

#### Future

* More robust security
* First UX
* Better UX for child login
* Validating Google for use with Auth0 in production
* Push and email notifications

#### _Frontend Created By: [Scott Brabson](https://github.com/brabbuss), [Lola Dolinsky](https://github.com/lo-la-do-li) and [Bailey Dunning](https://github.com/baileydunning)_

Visit the [KidDo Backend Repo](https://github.com/kiddo-capstone/kiddo-backend) to see the server, data schema, and API contracts developed by our amazing Backend team! The server enables full CRUD methodology for our app.


## Contributors

- Scott Brabson - [![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/scott-brabson/) - [![GitHub][github-shield]](https://github.com/brabbuss)

- Lola Dolinsky - [![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/lola-dolinsky-15b5b01ba/) - [![GitHub][github-shield]](https://github.com/lo-la-do-li)
 
- Bailey Dunning - [![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/baileydunning/) - [![GitHub][github-shield]](https://github.com/baileydunning)

<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[github-shield]: https://img.shields.io/badge/-GitHub-black.svg?style=flat-square&logo=github&colorB=555
