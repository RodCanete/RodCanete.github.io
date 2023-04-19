function newsLetter(){
    Email.send({
    Host : "smtp.elasticemail.com", 
    Username : "apur.rosales.swu@phinmaed.com",
    Password : "A069ADD05CC0E0B0F53EE9CB3553FA4F1729",
    To : 'apur.rosales.swu@phinmaed.com',
    From : 'apur.rosales.swu@phinmaed.com', //document.getElementById("email").value
    Subject : "Subscribe to Newsletter",
    Body : "Email: " + document.getElementById("news").value
    }).then(
      message => alert("You have successfully subscribed to our newsletter")
    );
  }