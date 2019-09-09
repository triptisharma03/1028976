$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/FeatureFile.feature");
formatter.feature({
  "name": "Order a Tshirt and Update Personal Information functionalities of automationpractice web application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Test scenario 1 : Order T-Shirt",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@firstTest"
    }
  ]
});
formatter.step({
  "name": "user is on the Sign in page",
  "keyword": "Given "
});
formatter.step({
  "name": "user adds a T-Shirt to cart by clicking on Add to cart",
  "keyword": "When "
});
formatter.step({
  "name": "completes the order using \"\u003cemail\u003e\",\"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "select Pay by bank wire",
  "keyword": "And "
});
formatter.step({
  "name": "Order reference of the order placed is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "someone@example.com",
        "Password123"
      ]
    }
  ]
});
formatter.background({
  "name": "Open the URL",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is in the homepage \"http://automationpractice.com/index.php\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_is_in_the_homepage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test scenario 1 : Order T-Shirt",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@firstTest"
    }
  ]
});
formatter.step({
  "name": "user is on the Sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_is_on_the_Sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds a T-Shirt to cart by clicking on Add to cart",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_adds_a_T_Shirt_to_cart_by_clicking_on_Add_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "completes the order using \"someone@example.com\",\"Password123\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.completes_the_order_using(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select Pay by bank wire",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.select_Pay_by_bank_wire()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Order reference of the order placed is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.order_reference_of_the_order_placed_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test Scenario 2 : Update First Name in My Account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@secondTest"
    }
  ]
});
formatter.step({
  "name": "user is in the Sign in page",
  "keyword": "Given "
});
formatter.step({
  "name": "user sign in into the account using \"\u003cemail\u003e\",\"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "updates first name in My Account page using \"\u003cfName\u003e\",\"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user gets a success message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "fName"
      ]
    },
    {
      "cells": [
        "someone@example.com",
        "Password123",
        "Smriti"
      ]
    }
  ]
});
formatter.background({
  "name": "Open the URL",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is in the homepage \"http://automationpractice.com/index.php\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_is_in_the_homepage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test Scenario 2 : Update First Name in My Account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@secondTest"
    }
  ]
});
formatter.step({
  "name": "user is in the Sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_is_in_the_Sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sign in into the account using \"someone@example.com\",\"Password123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_sign_in_into_the_account_using(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "updates first name in My Account page using \"Smriti\",\"Password123\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.updates_first_name_in_My_Account_page_using(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets a success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_gets_a_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});