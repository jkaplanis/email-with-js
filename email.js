function getValues() {
  var recipientEmail = document.getElementById("recipientEmail").value;
  var senderEmail = document.getElementById("senderEmail").value;
  var senderPassword = document.getElementById("senderPassword").value;
  var emailSubject = document.getElementById("emailSubject").value;
  var emailBody = document.getElementById("emailBody").value;
  var numberOfEmails = document.getElementById("numberOfEmails").value;
  var emailInterval = document.getElementById("emailInterval").value * 60000;

  sendEmail(
    recipientEmail,
    senderEmail,
    senderPassword,
    emailSubject,
    emailBody,
    numberOfEmails,
    emailInterval
  );
}

function sendEmail(
  recipientEmail,
  senderEmail,
  senderPassword,
  emailSubject,
  emailBody,
  numberOfEmails,
  emailInterval
) {
  var emailsSent = 0;
  var emailInterval = setInterval(function () {
    Email.send({
      Host: "smtp.gmail.com",
      Username: `${senderEmail}`,
      Password: `${senderPassword}`,
      To: `${recipientEmail}`,
      From: `${senderEmail}`,
      Subject: `${emailSubject}`,
      Body: `${emailBody}`
    }).then(message => {
      emailsSent += 1;
      // clearInterval after the function has been called 3 times.
      if (emailsSent === numberOfEmails) {
        clearInterval(emailInterval);
      }
    });
  }, 15000);
}
