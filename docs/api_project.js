define({
  "name": "Apothiquiz API documentation",
  "version": "1.0.0",
  "description": "Documentation for the REST API of Apothiquiz",
  "title": "Documentation Apothiquiz API ",
  "url": "https://apothiquiz.com/api/v1",
  "header": {
    "title": "Authentication",
    "content": "<h1>Authentication</h1>\n<h2>Login</h2>\n<p>To connect to the application, the user must exist in the database, and provide his university password to connect via the CAS.</p>\n<p>If all user data is correct, the API provides a token, which will be needed for future authenticated requests.</p>\n<p>-&gt; See <a href=\"#post-login\">Login endpoint</a>.</p>\n<p><img src=\"./assets/AuthLoginDiagram.svg\" alt=\"Login system diagram\"></p>\n<p><em>Diagram made with <a href=\"https://sequencediagram.org/\">sequencediagram.org</a> (<a href=\"./assets/AuthLoginDiagramSource.txt\">source</a>).</em></p>\n<h2>Authenticated requests</h2>\n<p>To send authenticated requests, you need to set the Authorization header as follows :</p>\n<pre class=\"prettyprint lang-json\">Authorization: Bearer <token>\n</pre>\n<p>Our client application automatically sets this header for all requests when the user is logged in.</p>\n"
  },
  "template": {
    "withCompare": false,
    "withGenerator": true,
    "aloneDisplay": false
  },
  "sampleUrl": "",
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2021-04-19T19:17:36.773Z",
    "url": "https://apidocjs.com",
    "version": "0.26.0"
  }
});
