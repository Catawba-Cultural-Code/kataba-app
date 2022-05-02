const express = require('express'),
  router = express.Router(),
  cms = require('../cms')

let content = null
cms.getEntries().then((o) => (content = o))

router.get('/content', (req, res) => {
  // console.log(content)
  res.json(content)
})

module.exports = router
