const express = require("express");
const router = express.Router();
const mysql = require('mysql');
const bcrypt = require('bcryptjs')

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "assignment"
});

router.get('/', (req, res) => {
  res.render("index");
});


//Sign up
router.get('/signup', (req, res) => {
  res.render("signup");
});
router.post('/signup', (req, res) => {
  console.log(req.body);
  // const email = req.body.email;
  // const password = req.body.password;
  const { email, password } = req.body
  db.query('SELECT email FROM user WHERE email = ?', [email], async (error, results) => {
    if (error) {
      console.log(error);
    }
    //如果註冊過
    if (results.length > 0) {
      return res.status(400).render('signup', {
        message: 'Oops! That email has already been signed up.'
      });
    }

    let hashedPassword = await bcrypt.hash(password, 8);
    console.log(hashedPassword);

    db.query('INSERT INTO user SET ?', { email: email, password: hashedPassword }, (error, results) => {
      if (error) {
        console.log(error);
      } else {
        console.log(results);
        return res.redirect('/memberpage')
      }
    });
  });

});
//sign in
router.get('/homepage', (req, res) => {
  res.render("homepage");
});

router.post('/homepage', async (req, res) => {
  try {
    const { email, password } = req.body;
    res.cookie('useremail', req.body.email);
    console.log(req.body);

    if (!email || !password) {
      return res.status(400).render('homepage', {
        message: 'Please provide an email and password!'
      })
    }

    db.query('SELECT * FROM user WHERE email = ?', [email], async (error, results) => {
      //確定是會員並檢查密碼對不對
      console.log(results);
      console.log(results[0].password);
      if (!results || !(await bcrypt.compare(password, results[0].password))) {
        return res.status(401).render('homepage', {
          message: 'Please provide correct email and password!'
        });
      } else {
        return res.redirect('/memberpage')
      }
    })
  } catch (error) {
    console.log(error);
  }

})


router.get('/memberpage', (req, res) => {
  let username = req.cookies.useremail;
  if (username) {
    res.render("memberpage", { username });
  } else {
    res.redirect("homepage");
  }
});



module.exports = router;

