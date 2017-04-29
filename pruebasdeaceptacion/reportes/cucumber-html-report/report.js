$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Prueba de Login",
  "description": "",
  "id": "prueba-de-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login",
  "description": "",
  "id": "prueba-de-login;login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "cargamos el navegador y vamos al sitio web Linkedin",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "el usurio ingrese su username \"\u003cusuario\u003e\" y el password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "el usuario presione click en el boton entrar",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "el usuario deberia ver el mensaje \"\u003cmensaje\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "prueba-de-login;login;",
  "rows": [
    {
      "cells": [
        "usuario",
        "password",
        "mensaje"
      ],
      "line": 10,
      "id": "prueba-de-login;login;;1"
    },
    {
      "cells": [
        "yusmira_castillo@hotmail.com",
        "Yusmi134",
        "Hmm, thats not the right password. Please try again or request a new one."
      ],
      "line": 11,
      "id": "prueba-de-login;login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Login",
  "description": "",
  "id": "prueba-de-login;login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "cargamos el navegador y vamos al sitio web Linkedin",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "el usurio ingrese su username \"yusmira_castillo@hotmail.com\" y el password \"Yusmi134\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "el usuario presione click en el boton entrar",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "el usuario deberia ver el mensaje \"Hmm, thats not the right password. Please try again or request a new one.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});