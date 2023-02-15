# SymplyKode

Created by Ahmed Ahmed and Sumanth Kumar for UOttaHack 5 2023

## Inspiration
As developers, we tend to have to read large blocks of code written by other developers so debugging might take a while until we understand all the code. So We wanted a way of being able to summarize blocks of code in normal everyday English quickly.

## What it does
SymplyKode takes code that can be copied into our chrome extension and then once the submit button has been pressed a blurb or summary about the code block is produced.

## How we built it
Firstly, we started off with research. It was very important to us that our project produces summaries that are very well formed so that even a second grader can understand what the code does after receiving the summary. We implemented OpenAI API to allow us to summarize code blocks that were inputted by the user. The front end was created using ReactJS and Material UI to make it as simple but as elegant as possible for the user. 

## Challenges we ran into
Despite having a solid idea of how the project was going to be implemented we ran into a few issues of which stack we would be using. We started off using flask to fetch the information and use OpenAI API to summarize the code but we ran into trouble with actually running the chrome extension. Then we transitioned into using NodeJS which also had us running into the same problems. So we ended up having everything using ReactJS which made it very simple to implement the frontend while fetching the information about the code.

## Accomplishments that we're proud of
- We really understood how understanding code is very important when developing software
- It was our first time implementing a chrome extension, so it was very fun learning that!

## What we learned
- Hackathons are a great way to be creative, problem solve and work as a team

## What's next for SymplyKode
One big step that can be a great direction for SymplyKode is being able to integrate it with source control systems and then users can compare two versions of the same repository for example which can greatly help in debugging!
