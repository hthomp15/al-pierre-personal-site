const { createServer } = require('http');
const sheetsAPI = require('./api/sheets');

server = createServer(sheetsAPI);

const PORT  = process.env.PORT || 4000;

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    }
);
