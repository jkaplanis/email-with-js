function sendEmail() {
  var emailsSent = 0;
  var emailInterval = setInterval(function () {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "johntkaplanis@gmail.com",
      Password: "password",
      To: "jkap07@yahoo.com",
      From: "johntkaplanis@gmail.com",
      Subject: "This is a test",
      Body: "If you are reading this then the test worked."
    }).then(message => {
      emailsSent += 1;
      // clearInterval after the function has been called 3 times.
      if (emailsSent === 2) {
        clearInterval(emailInterval);
      }
    });
  }, 15000);
}

// Host: "smtp.gmail.com"
// Username: "johntkaplanis@gmail.com"
// Password: "password"
