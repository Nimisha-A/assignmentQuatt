# Quatt API automation assignment

## Introduction

Cypress automation project to automate API tests for https://gorest.co.in/

There are 5 test suites for validating all CRUD operations with API Version 2 and HTTP Bearer Token authentication from [https://gorest.co.in/](https://gorest.co.in/) service.

###### API test suite

Includes the following test suites:

1. **addUser** - includes 3 test cases to validate POST operation
   i) Checks addition of a valid user - Adds a new user from a randomnly generated email id.
   ii) Checks addition of an existing user - Tries to add already created user.
   iii) Checks addition of an invalid user - Tries to add a user with invalid email.
2. **authVerify** - includes 2 test cases to validate authentication
   i) Checks if user can be created using valid token.
   ii) Checks if user can be created using invalid token.
3. **deleteUser** - a test case to validate DELETE operation.
   i) Checks creating a user and deleting the created user.
4. **getUser** - includes 3 test cases to validate GET operations
   i) Get details of all users.
   ii) Get details of a particular user using user id.
   iii) Checks if user details can be accessed by passing an invalid user id.
5. **updateUser** - a test case to validate PUT operations.i) Checks creating a new user and updating the user's name.

## Requirements

* Operating System required should be:
  * macOS 10.15 and above (Intel or Apple Silicon 64-bit (x64 or arm64)) or
  * Linux Ubuntu 20.04 and above, Fedora 38 and above, and Debian 10 and above (x64 or arm64) or
  * Windows 10 and above (64-bit only)
* Node.js 18.x, 20.x, 22.x and above need to be installed.

## Installation

Install Cypress via npm:

    cd /your/project/path

    npm install cypress --save-dev

## Steps to run

* Open Cypress folder from project root

  npx cypress run
