# Pre-interview task: Contact form


## Quick note from me (Ilayda!)

I enjoyed this challenge so thanks for the opportunity! I left the TODO comments in so the tasks could be easily found. I also added a few comments of my own to explain a bit of my thought process ahead of the interview.

Given more time I think the form submission and validation error messages could be made more slick, for example, if a user submits two unique messages from the same email address, the success message that pops up says 'You've already submitted' which is only partially correct (same email, different message). I also set constraints on the textarea input because a user could drag it all about making the form look untidy. 

I look forward to further discussing the tasks with you in person tomorrow! 

## Setup

### Requirements:

* Node (you can download it [here](https://nodejs.org/en/download)
* A modern web browser
* Your choice of IDE

### Instructions:

1. Clone the repository
```
git clone https://github.com/benpolhill/contact-form-task
cd contact-form-task
```
2. Install dependencies
```
npm install
```
This will install the `serve` package, which we're using to bypass CORS issues when using ES6 modules directly in browsers.

3. Start the local server
```
npx serve
```
Head to http://localhost:3000 and you'll see a web form. But, uh-oh! It should look like this:

<img width="725" alt="form-correct-style" src="https://github.com/benpolhill/contact-form-task/assets/39273900/4b34b9c6-de85-458d-9717-c0d41ba8c33a">

## Tasks

1. *Styling*: Your first task is to fix the form styling. (Hint: you may not need to write very much CSS!)
2. *Validation*: The form currently has some basic validation implemented, but it could be improved.
3. *State management*: The form should give feedback to users after they've successfully submitted it, and prevent them from submitting twice, but there's a bug here. Please fix it!
4. *Improvements*: You might like to suggest some general improvements to the validation method implemented here.

## Submission

After completing the task, commit your changes, push them to a fork of this repository and share the link with us. Good luck!
# ilayda-contact-form-task
