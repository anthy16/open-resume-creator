# OpenResume

OpenResume is an open-source resume builder, based off of the [JSON Resume](https://jsonresume.org/) schema.

The intention of this project is to provide a simple and free to use resource, for job-seekers in all industries - not just software developers!

**This project uses [Angular](https://angular.io) version 13.2.3.**

## Development

### How to Run

In order to run the project in a local development environment, Node v12.20.x or later must be installed, along with v13.2.x of the Angular CLI ([reference](https://gist.github.com/LayZeeDK/c822cc812f75bb07b7c55d07ba2719b3)).

**Clone**

```sh
$ git clone https://github.com/anthy16/web-portfolio.git
```

**Install Dependencies**

```sh
$ npm install
```

**Run Application**

```sh
$ npm run start
```

**Run Tests**

```sh
$ npm run test
```

### Tooling

| Tool                            | Purpose                                                                                    |
| ------------------------------- | ------------------------------------------------------------------------------------------ |
| [Angular](https://angular.io)   | Base SPA framework used. Angular provides good tooling and a fast development environment. |
| [Prettier](https://prettier.io) | Used to keep a consistent formatting style throughout the project.                         |
| [Jest](https://jestjs.io)       | Provides (faster than Karma) unit testing capabilities and coverage reporting.             |

### Scripts

| Script name     | Description                                                                         |
| --------------- | ----------------------------------------------------------------------------------- |
| `build`         | Makes a build of the Angular application (uses default `development` configuration) |
| `start`         | Runs the Angular development server (accessible from port `4200`)                   |
| `test`          | Runs all Jest unit tests                                                            |
| `test:coverage` | Runs all Jest unit tests and creates a coverage report                              |
