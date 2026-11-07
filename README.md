# Contrast Checker

Calculate WCAG color contrast ratios.

## Run

npm test and python -m http.server 8000 (visit http://localhost:8000)

## Example input (JSON)

{
  "foreground": "#ffffff",
  "background": "#000000"
}

## Expected output fields (JSON)

{
  "ratio": 21,
  "aaNormal": true,
  "aaaNormal": true
}

## Engineering

Standalone functional implementation, automated CI tests and no third-party runtime dependencies. Educational portfolio example: review for production readiness before deployment.

MIT License - https://github.com/santdevfull
