# Raw Server

A simple Node.js server built using the core `http` module.

## Features

- Minimal, zero-dependency setup
- Serves a homepage at `/`
- Provides a basic API endpoint at `/api/projects`
- Easily configurable via environment variable (`SERVER_PORT`)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)

### Installation

Clone the repository:

```bash
git clone https://github.com/kaiobrunobm/raw-server.git
cd raw-server
```

Install dependencies (for development tools):

```bash
npm install
```

### Running the Server

First, create a `.env` file if you wish to specify a custom port:

```
SERVER_PORT=8080
```

Start the server:

```bash
npm start
```

The server will run at [http://localhost:3000](http://localhost:3000) by default, or on the port you specified.

## Available Endpoints

| Method | Route              | Description                 |
|--------|--------------------|-----------------------------|
| GET    | `/`                | Returns a welcome HTML page |
| GET    | `/api/projects`    | Returns a list of projects in JSON format |
| *      | any other route    | Returns 404 Not Found       |

## Example Response

### `/api/projects`

```json
[
  {
    "id": 1,
    "name": "Task master",
    "github": "https://github.com/kaiobrunobm/task-master"
  }
]
```

## License

MIT

## Author

[Kaio Bruno](mailto:bmkaiobruno@gmail.com)
