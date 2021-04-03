const express = require('express');
const dir = require('../public/path');
const path = require('path');
const router = express.Router();



router.get('/', function(req, res ){
  
    res.sendFile( path.join( dir.buildDirpath(),'index.html') )
  });
  
//경로를 입력해도 리액트 페이지가 보여질 수 있도록
router.get('*', function(req, res){
   
    res.sendFile( path.join( dir.buildDirpath(), 'index.html') )
});


module.exports = router;