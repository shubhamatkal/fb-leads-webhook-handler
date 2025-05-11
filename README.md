# fb-lead-webhook

A simple Node.js Express server to handle Facebook Lead Ads webhooks.

## Setup

1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in the root directory with the following content:
   ```env
   VERIFY_TOKEN=your_verify_token_here
   PORT=2000
   ```

## Running the Server

```bash
node index.js
```

The server will start on the port specified in your `.env` file (default: 3000).

## Webhook Endpoints

### GET /webhook
- Used by Facebook to verify your webhook.
- Responds with the `hub.challenge` if `hub.mode` is `subscribe` and `hub.verify_token` matches your VERIFY_TOKEN.

### POST /webhook
- Receives lead data from Facebook Lead Ads.
- Logs the received JSON body to the console. 