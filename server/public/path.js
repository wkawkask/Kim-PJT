
const dirpath = require('path');

const serverDirpath = dirpath.join(__dirname,'..');
const buildDirpath = dirpath.join(__dirname,'../../build');




module.exports = {

    serverDirpath: function() {
        return serverDirpath;
    },

    buildDirpath: function() {
        return buildDirpath;
    }
};

