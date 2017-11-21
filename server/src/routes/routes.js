module.exports = (app) => {
  app.post('/register', (req, res) => {
    console.log('Hello' + req.body)
    res.send(`Hello ${req.body.email} !`)
  })
}
