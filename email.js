var emailInterval;

function giphyCall() {
  // giphy api call
  var queryURL =
    "http://api.giphy.com/v1/gifs/random?tag=middle+finger&rating=r&api_key=Tqf8MqeViTyiKtCCXA2KUC1sci29Di6p&limit=1";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(response => {
    console.log(response);
    var gifUrl = response.data.image_original_url;
    var gif = $("<img>");
    gif.attr("src", gifUrl);
    gif.attr("alt", "middle finger gif");
    $("#gif").prepend(gif);
  });
}

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

      giphyCall();
    });
  }, interval);
}
