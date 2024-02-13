const fs = require("fs");

function deleteDirectory(path) {
    if (fs.existsSync(path)) {
        fs.rmdirSync(path, { recursive: true })
    }
}

module.exports = { deleteDirectory }