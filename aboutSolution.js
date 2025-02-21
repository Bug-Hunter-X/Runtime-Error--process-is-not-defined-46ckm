```javascript
// pages/aboutSolution.js
import { useRouter } from 'next/router';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export default function About() {
  console.log(publicRuntimeConfig.MY_VAR);
  return (
    <div>
      <h1>About Page</h1>
      <p>Environment variable: {publicRuntimeConfig.MY_VAR}</p>
    </div>
  );
}
```
```javascript
// next.config.js
module.exports = {
  publicRuntimeConfig: {
    MY_VAR: process.env.MY_VAR,
  },
};
```