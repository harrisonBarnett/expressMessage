var express = require('express');
var router = express.Router();

// messages db mockup
const messages = [
  {
    text: 'testing',
    user: 'yours truly',
    added: new Date().toLocaleString('en-US')
  },
  {
    text: 'testing again',
    user: 'his truly',
    added: new Date().toLocaleString('en-US')
  },
  {
    text: 'testing once more',
    user: 'hers truly',
    added: new Date().toLocaleString('en-US')
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'the feed', messages: messages })
});
// post a new message
router.post('/new', (req, res) => {
  if(!req.body.text || !req.body.user){
    return res.redirect('/')
  }
  var date = new Date()
  const newMessage = {
    text: req.body.text,
    user: req.body.user,
    added: date.toLocaleString('en-US')
  }
  messages.push(newMessage)
  res.redirect('/')
})

module.exports = router;
