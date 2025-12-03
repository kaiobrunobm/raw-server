import http from 'node:http'

const port = process.env.SERVER_PORT || 3000

const server = http.createServer((req, res) => {


  if( req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.end('<h1>Welcome to my portfolio</h1>')
  } else if (req.url === '/api/projects') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(
      JSON.stringify([
        {
          id: 1,
          name: 'Task master',
          github: 'https://github.com/kaiobrunobm/task-master'
        }
      ])
    )
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Page no found')
  }
})


server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
})
