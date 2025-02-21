# Runtime Error: process is not defined in Next.js 15

This repository demonstrates a common runtime error in Next.js 15 applications when attempting to access environment variables within client-side components.  The error arises because the `process` global object is not available in the browser environment.

**Problem:**
The `about.js` file attempts to access `process.env.MY_VAR`. This works correctly on the server but fails on the client because the browser doesn't have a `process` object.

**Solution:**
The `aboutSolution.js` file shows how to correctly handle environment variables in the client.  Instead of directly accessing `process.env`, we utilize the `next/config` module to access the environment variable safely during build time. This ensures that the variable is available to the client without causing a runtime error.