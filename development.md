Why we use proxy?

- When we hit https://api-tiktokdownloader-dev.prach.org/tiktok/uservideodetails from http://localhost:5173/profile, it results in a CORS error.
- To avoid this, we use a proxy to make the request from the same origin (http://localhost:5173/tiktok/uservideodetails).
- The proxy configuration in vite.config.ts forwards all requests starting with /tiktok to the target server https://api-tiktokdownloader-dev.prach.org.
- For example, when we hit http://localhost:5173/tiktok/uservideodetails, it forwards the request to https://api-tiktokdownloader-dev.prach.org/tiktok/uservideodetails.
- This way, we avoid CORS errors and make the request from the same origin.
