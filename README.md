# HOW TO RUN THIS PROJECT

1. Prerequisites

   - Docker version: 20.210.21
   - Docker compose version: 2.13.0
   - Node version: 16.14.2
   - Npm version: 9.6.4
   - Go to `nestjs-my-employees` folder. Make sure the TypeOrmModule configuration looks like below

     ```javascript
         TypeOrmModule.forRoot({
            type: 'mariadb',
            host: 'db',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'ambassador',
            autoLoadEntities: true,
            synchronize: true,
         }),
     ```

   - Run this command to start mariadb and nestjs app

     ```bash
     docker compose up -d
     ```

2. Run projects

   - For local environment

     - Change TypeOrmModule configuaration in `nestjs-my-employees` to

       ```javascript
       host: 'localhost',
       port: 33066,
       ```

     - Go to `my-employees` and `nestjs-my-employees` folders and run command below for both folders

       ```bash
       yarn install
       ```

     - To run Front-End and Back-End. Go to each folder. Run this command to start the project

       ```bash
       cd my-employeees
       yarn start

       cd nestjs-my-employees
       yarn start
       ```

   - For docker environment
     - Because the docker compose was run to starting the containers. So we can access via:
       ```
          Front-End:
            - cd my-employeees
            - yarn start
            - Go to http://localhost:3000
          Back-End:
            - end point http://localhost:8080/api/v1
          MariaDB:
            - host: db
            - port: 3306
            - username: root
            - password: root
            - database: ambassador
       ```
