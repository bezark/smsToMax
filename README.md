# SMS To MAX


This is a simple web app which forwards sms messages to max msp.

You'll need to do a couple of things to configure it:
1) Make a Twilio Account
2) Buy a phone number
3) Find out what your sid and auth tokens are
4) Remix [this glitch project](https://glitch.com/~sms-to-max) and change the domain to something specific for you
5) Paste youre auth and sid into the 🗝.env page
6) On twilio navigate to Phone Numbers/Manage Numbers/Active Numbers and change the incoming sms webhook from "https://sms-to-max.glitch.me/incomingsms" to https://YOUR_DOMAIN.glitch.me/incomingsms"
7) Download this github repo.

