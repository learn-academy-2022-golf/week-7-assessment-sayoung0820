# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:

If you forget the foreign key, you can use a migration to update the database. The foreign key should be the modelname_id. In this example, the foreign key would be the Cohort model. 


Researched answer:

Forgetting a foreign key won't produce an error but it will impact performance and efficiency. It's easy to forget creating a foreign key because Rails will not create the foreign key columns for you. You would have to create them manually by explicityly defining them as part of a migration. You do this by using migrations to modify the database and add the foreign key.

2. Which RESTful routes must always be passed params? Why?

Your answer:

The RESTful routes that require params are update, show, destroy/delete, edit - all require params to be passed. The params are required because in order for these routes to return the data we need, they have to have the correct information passed to evaluate. The other routes don't require params because they are returning data that is already in the database. 

Researched answer:

3. Name three rails generator commands. What is created by each?

Your answer:

Three rails generator commands are Controller, Model, and Migration.

Researched answer:

Three rails generator commands are Controller, Model, Resource and generator. The generate controller command creates a new controller that inherits from the ApplicationController and has methods. The generate Model command, generates a class that is used to represent data and can also interact with the application's database using Active Record. Model names are singular. The generate migration command, is used to change an application's database schema to match the structure of the database.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students

A. The corresponding controller action is index, this will display all students in the database

action: "POST" location: /students

B. The corresponding controller action is create, this will create a new instance of Student in the database

action: "GET" location: /students/new

C. The corresponding controller action is New, this will send an HTML form for the user to enter their information 

action: "GET" location: /students/2

D. The corresponding controller action is Show, this will send one instance of students from index 2

action: "GET" location: /students/2/edit

E. The corresponding controller action is Edit, this will update the 2nd instance in students

action: "PATCH" location: /students/2

F. The corresponding controller action is Update, this will modify the instance called upon in the database to update the primary id with 2

action: "DELETE" location: /students/2

G. The corresponding controller action is Destory, this will delete the instance called upon from the database


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As a user I can see the Home Screen of a To-Do list website
As a user I can click the log in icon on the top right hand corner to login
As a user I can type in my user name and password
As a new user I typed in my username, and a password (that did not meet the requirements to create a login
As new user I made an password that fit the criteria for signing into the to-do list webpage
As a user I can see a plethora of to do list templates
As a user I click a random to do list template
As a user I put 3 of the 4 required fields
As a user I cannot continue because of 4 fields must be filled out
As a user I finished the field that was empty and I was able to add an item to my to do list 
