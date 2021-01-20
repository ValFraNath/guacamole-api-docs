define({ "api": [
  {
    "type": "get",
    "url": "/question/:type",
    "title": "Get a random question",
    "name": "GetRandomQuestion",
    "group": "Question",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "question",
            "description": "<p>Question object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "question.type",
            "description": "<p>Type of the question</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "question.subject",
            "description": "<p>Question subject</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "question.goodAnswer",
            "description": "<p>The good answer</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[String]",
            "optional": false,
            "field": "question.badAnswers",
            "description": "<p>Three false answers</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../server/controllers/question.js",
    "groupTitle": "Question"
  },
  {
    "type": "get",
    "url": "/status/",
    "title": "Get server status",
    "name": "GetServerStatus",
    "group": "Server",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Connection status to the server</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "db_version",
            "description": "<p>Database date-based version (AAAA-MM-DD)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../server/controllers/api.js",
    "groupTitle": "Server"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "Login a user",
    "name": "PostUserLogin",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userPseudo",
            "description": "<p>ENT Login</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userPassword",
            "description": "<p>ENT password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pseudo",
            "description": "<p>the ENT login</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>the user token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../server/controllers/user.js",
    "groupTitle": "User"
  }
] });
