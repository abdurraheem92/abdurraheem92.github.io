(function () {
  var contactForm = $('#contactForm');
  var modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
  });
  modal.addFooterBtn('Close', 'tingle-btn tingle-btn--primary', function () {
    modal.close();
  });

  var name = $('#name');
  var email = $('#email');
  var message = $('#message');
  contactForm.submit(function (event) {
    event.preventDefault();
    if (name.val() && email.val()) {
      modal.setContent(
        "<h1>Hello " + name.val() +
        ",</h1><p>We received your message:</p><blockquote>" + message.val() +
        "</blockquote><p>A reply has been sent to your email: " + email.val()
      );
    } else {
      modal.setContent("<h1>A name and email is required!!!</h1>")
    }
    modal.open();
    // Empty form fields
    name.val('');
    email.val('');
    message.val('');
  });
}());