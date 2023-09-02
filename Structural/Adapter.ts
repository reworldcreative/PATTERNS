class EmailService {
  sendEmail(to: string, message: string): void {
    console.log(`Sending email to ${to}: ${message}`);
  }
}

class SMSService {
  sendMessage(number: string, message: string): void {
    console.log(`Sending SMS to ${number}: ${message}`);
  }
}

class EmailServiceAdapter extends SMSService {
  private emailService: EmailService;
  constructor(emailService: EmailService) {
    super();
    this.emailService = emailService;
  }
  sendMessage(recipient: string, message: string): void {
    this.emailService.sendEmail(recipient, message);
  }
}

function message(target: SMSService, to: string, message: string) {
  target.sendMessage(to, message);
}

const emailService = new EmailService();
const emailAdapter = new EmailServiceAdapter(emailService);
const smsService = new SMSService();
message(smsService, "+1234567890", "Hello via SMS!");
message(emailAdapter, "user@example.com", "Hello via email!");
// emailAdapter.sendMessage("user@example.com", "Hello via email!");
// smsService.sendMessage("+1234567890", "Hello via SMS!");
// emailService.sendMessage("user@example.com", "Hello via email!") // error
