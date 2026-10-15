const EMAIL_API = "https://mjphub.com/api/emails/send";

// Sends an email through the MJP Hub API. Every request needs a fresh
// Cloudflare Turnstile token (tokens are single-use).
export default function sendEmail({
  from,
  to,
  subject,
  emailProps,
  text,
  captchaToken,
}) {
  return fetch(EMAIL_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ from, to, subject, emailProps, text, captchaToken }),
  });
}
