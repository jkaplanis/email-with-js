var emailInterval;

function getValues() {
  var recipientEmail = document.getElementById("recipientEmail").value;
  var senderEmail = document.getElementById("senderEmail").value;
  var senderPassword = document.getElementById("senderPassword").value;
  var emailSubject = document.getElementById("emailSubject").value;
  var emailBody = document.getElementById("emailBody").value;
  var numberOfEmails = parseInt(
    document.getElementById("numberOfEmails").value
  );
  var interval = parseInt(document.getElementById("interval").value) * 60000;

  sendEmail(
    recipientEmail,
    senderEmail,
    senderPassword,
    emailSubject,
    emailBody,
    numberOfEmails,
    interval
  );
}

function sendEmail(
  recipientEmail,
  senderEmail,
  senderPassword,
  emailSubject,
  emailBody,
  numberOfEmails,
  interval
) {
  var emailsSent = 0;
  emailInterval = setInterval(function () {
    Email.send({
      Host: "smtp.gmail.com",
      Username: `${senderEmail}`,
      Password: `${senderPassword}`,
      To: `${recipientEmail}`,
      From: `${senderEmail}`,
      Subject: `${emailSubject}`,
      Body: `${emailBody}`
    }).then(() => {
      emailsSent += 1;
      if (emailsSent === numberOfEmails) {
        clearInterval(emailInterval);
      }
    });
  }, interval);
}
