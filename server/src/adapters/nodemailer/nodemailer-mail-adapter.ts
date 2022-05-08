import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ab9941d92663a0",
    pass: "79c93f05554c32"
  }
});

export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Elizabeth dos Santos <elizabethsantos2402@gmail.com>',
        subject,
        html: body,
      })
  };
}