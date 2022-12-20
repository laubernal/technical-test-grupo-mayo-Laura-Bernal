# Laura Bernal's technical test for Grupo Mayo

This is a technical test for Grupo Mayo made by Laura Bernal.

## Way of approaching the problem

Since the instructions said that I could do what ever I thought it was necessary to show the database data in the front end I didn't ask for further instructions, but in a real world project with a team I would've asked questions about the goal of the task, the domain (if I'm not familiar with it or if I have doubts about it), how the data should be displayed, and more questions.

The first steps that I took in this case were:

- understanding the data that was provided in the database
- designing a domain
- designing the front end to have a clear vision of what and how I wanted to show [Front end schema](/images/TechnicalTestGrupoMayoFrontEndSchema.png)
- thinking the technologies that would be necessary

Once all that was clear and i had a vision of the path that I needed to take I started to code the back end part first and when I had it done I moved to the front end part [using the data that was provided by the back end]❗.

## Technical considerations

In this section I will justify the decisions that I made to do this technical test.

### Back end

- The best architectural solution for this application would've been to do an MVC due to the simplicity of the use case but I have used a simplification of hexagonal architecture to show what I'm capable of building.
- I haven't done a .env file with the variables for the database (user, password, etc.) because this way is easier for you to build the it withuut having to worry about inserting a seperate file. I wanted to make it easy for you to be able of running the application.
- I have used NestJs for this application because there are multiple advantages and with the small amount of time that I had to build this application it was a good decision. On one hand NestJs includes the Express framework itself so I wouldn't have to worry to install it and handle it myself due to the lack of time. On the other hand it has dependency injection which is a great tool to use for being able of following the SOLID Principles and better testing, it allows you to not having to instanciate classes inside.
- Due to the short time that I have had to do this application I decided to use a third party service inside my domain although usually it's not a good idea to have parts of code that you don't control in your domain. I used the Zod library to be able of validating strings and numbers in my value objects. [Usually I wouldn't do it without adding a layer between my domain and the library.]❗
- For this application I only did one method for the repository (_findOneByCityName_) but with more time I would have done a filter and a more generic method for the repository (_findOne_).
- I used TypeORM to build the query because it's more readable for the developers instead of a pure SQL query with joins. It's also integrated in NestJs so that's an advantage too.

### Front end

- Since I didn't have much time I decided to use the Mantine library to build my components so it would be easier and more agile.
- For the routing I used the fetch method.

### Flowchart of the application

![Flowchart of the application](/images/TechnicalTestGrupoMayoFlowchart.png 'Flowchart of the application')

## Getting Started

Following these instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites

⚠ You need to have Docker installed

### Installing

[Steps to get the application running in development mode:]❗

To build the database from the docker container

```
docker-compose up
```

To run the server

```
npm run start:dev
```

To run the client

```
npm start
```

## Built With

- [NestJs](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zod](https://zod.dev/)
- [Docker](https://www.docker.com/)
- [MariaDB](https://mariadb.org/)
- [TypeORM](https://typeorm.io/)
- [React](https://es.reactjs.org/)
- [Mantine](https://mantine.dev/)
- [Tabler Icons React](https://tabler-icons-react.vercel.app/)
- [Icons8](https://icons8.com/)
