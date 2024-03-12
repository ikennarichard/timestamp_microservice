# Timestamp Microservice

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
- [Docker Setup](#docker-setup)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

This is a simple timestamp microservice built with Node.js and Express.

## Features

- It provides an endpoint that returns a unix timestamp and utc date string.

## Installation

- Clone the repository:

```bash
git clone https://github.com/ikennarichard/timestamp_microservice.git
```

- Navigate to the project directory:

```bash
cd timestamp_microservice
```

```bash
npm install
```

- Set up `.env` file in the root of the project and add the following variables:

```bash
PORT=3000 
# you can use your preferred port
```

- Run the development server:

```bash
npm run dev
```

## Usage

Go to this __Endpoint__: /api/:dateEntry in your browser

- Example 1: localhost:3000/api/1451001600000
- Example 2: localhost:3000/api/2015-12-25

Response: {"unix":1451001600000,"utc":"Fri, 25 Dec 2015 00:00:00 GMT"}

## Test

To run the test, enter the following command in the terminal

```bash
npm test
```

## Docker Setup

To run the application using Docker, follow these steps:

- Build the Docker image:

```bash
docker build -t timestamp_microservice .
```

- Run the Docker container:

```bash
docker run -p 3000:8080 timestamp_microservice
# map local port 3000 to docker port 8080
```

The application should now be accessible at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please feel free to submit any bug fixes or enhancements as pull requests.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Acknowledgements

This project was inspired by [freecodecamp](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/timestamp-microservice).
