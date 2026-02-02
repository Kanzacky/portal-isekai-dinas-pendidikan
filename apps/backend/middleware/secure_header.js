export default function secureHeader(req, res, next) {
  res.setHeader("Referrer-Policy", "no-referrer-when-downgrade");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' platform.twitter.com plausible.io utteranc.es *.cloudflare.com 'unsafe-inline' 'unsafe-eval' plausible.io/js/plausible.js utteranc.es/client.js; style-src 'self' *.cloudflare.com 'unsafe-inline'; img-src 'self' * data:; font-src 'self' data: ; connect-src 'self' plausible.io/api/event; media-src 'self'; frame-src 'self' platform.twitter.com plausible.io utteranc.es github.com *.youtube.com *.vimeo.com; object-src 'none'; base-uri 'self';"
  );
  res.setHeader("Expect-CT", "enforce, max-age=30");
  res.setHeader(
    "Permissions-Policy",
    "autoplay=(self), camera=(), encrypted-media=(self), fullscreen=(), geolocation=(self), gyroscope=(self), magnetometer=(), microphone=(), midi=(), payment=(), sync-xhr=(self), usb=()"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type,Authorization,X-Requested-With,X-CSRF-Token,X-Signature,X-Timestamp"
  );
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("X-Content-Type-Options", "nosniff");

  const unwantedHeaders = ["x-powered-by", "server"];
  unwantedHeaders.forEach((header) => {
    res.removeHeader(header);
  });

  next();
}
