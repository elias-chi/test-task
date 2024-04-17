# Web Shop Project Structure

This repository contains the basic project structure for a web shop application built with React, Next.js, NestJS, TypeScript, Prisma, and PostgreSQL.
Each module encapsulates its own logic, promoting reusability and testability, while the overall structure facilitates easy navigation and understanding of the codebase.

## Client Folder Structure

- **client/**: Contains all files related to the frontend or client-side code of the application.
    - **public/**: Holds static assets served by the web server
    - **src/**: Contains the source code for the frontend application, including React components and other assets.
        - **components/**: Reusable UI components used throughout the application.
        - **pages/**: Next.js specific directory where each file corresponds to a page/route in the application.
    - **src/App.tsx**: The main component file where the root component of the application is defined.
    - **src/index.tsx**: The entry point file for the React application, where the main React DOM rendering takes place.

## Server Folder Structure

- **server/**: Contains all files related to the backend or server-side code of the application.
    - **src/**: Holds the source code for the backend application, including modules, controllers, services, and configurations.
        - **modules/**: Contains modules encapsulating related functionality such as `product`, `category`, `customer`, etc.
          - **app.module.ts**: Main module file where the NestJS application is initialized and configured.
          - **main.ts**: Entry point file for the NestJS application, where the server is started and listens for incoming requests.
          - **errors**: all modules has its own custom errors
        - **addons/**: Holds functions for common tasks such as error filtering and validation.
    - **tests/**: Contains unit and integration tests for the backend modules.

## Explanation of Architecture/Design Choices:

### Separation of Concerns:

- **Controllers**: Handle incoming requests, process data, and send responses.
- **Services**: Contain the core business logic and act as an interface between controllers and data access layers.
- **Entities**: Define data schemas and interact with the database using Prisma ORM.

### Design Patterns:

- **MVC (Model-View-Controller)**: Used to separate concerns between data models, user interface, and application logic.
- **Dependency Injection**: Services are injected into controllers to promote modularity and testability.
- **Repository Pattern**: Services interact with entities to perform database operations, abstracting away database logic and promoting code reusability.

### Choice of Technologies:

- **Next.js**: Chosen for the frontend to leverage its server-side rendering capabilities and improved SEO.
- **NestJS**: Selected for the backend to leverage its scalability, modularity, and adherence to best practices.
- **TypeScript**: Used throughout the project for its static typing, enhancing code readability, maintainability, and scalability.
- **Prisma**: Utilized as the ORM for its type-safe query builder and schema migrations.
- **PostgreSQL**: Chosen as a database for its relational nature and ACID compliance.