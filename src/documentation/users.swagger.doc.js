//? USERS SCHEMA:
/**
 * @swagger
 * components:
 *  schemas:
 *    user:
 *      type: object
 *      properties:
 *        userName:
 *          type: string
 *          description: username
 *        email:
 *          type: string
 *          description: email
 *        password:
 *          type: string
 *          description: password
 *        gender:
 *          type: string
 *          description: gender
 *        dni:
 *          type: string
 *          description: dni
 *      required:
 *        - userName
 *        - email
 *        - password
 *      example:
 *        userName: user_1
 *        email: user_1@gmail.com
 *        password: password123
 *        gender: male
 *        dni: 43546576F
 */

//! ERRORS SCHEMA:
/**
 * @swagger
 * components:
 *  schemas:
 *    error_get_users:
 *      type: object
 *      properties:
 *        message:
 *          type: string
 *          description: error message
 *      example:
 *        message: No users yet
 *
 *    error_get_user:
 *      type: object
 *      properties:
 *        message:
 *          type: string
 *          description: error message
 *      example:
 *        message: User with id ${userId} doesn't exist
 */

//* GET ALL:
/**
 * @swagger
 * /api/users:
 *  get:
 *    summary: Get all users
 *    tags: [users]
 *    responses:
 *      200:
 *        description: return an array of objects.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/user'
 *      403:
 *        description: return an object.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/error_get_users'
 */

//* GET:
/**
 * @swagger
 * /api/users/{id}:
 *  get:
 *    summary: Get an user
 *    tags: [users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *         type: string
 *        required: true
 *        description: return an object
 *    responses:
 *      200:
 *        description: return an object with the users
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/user'
 *      403:
 *        description: return an object.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/error_get_user'
 */

//? POST:
/**
 * @swagger
 * /api/users:
 *  post:
 *    summary: Create a new user
 *    tags: [users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/user'
 *    responses:
 *      200:
 *        description: return an object with the new user values.
 */

//? PUT:
/**
 * @swagger
 * /api/users/{id}:
 *  put:
 *    summary: Uptdate an user
 *    tags: [users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/user'
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *         type: string
 *        required: true
 *        description: The user id you want to update
 *    responses:
 *      200:
 *        description: "{message: 'Success', oldUser: Data, newUser: data}"
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/user'
 *      404:
 *        description: User not found
 */

//! DELETE:
/**
 * @swagger
 * /api/users/{id}:
 *  delete:
 *    summary: Delete an user
 *    tags: [users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *         type: string
 *        required: true
 *        description: The user id you want to delete
 *    responses:
 *      200:
 *        description: return and object with a message an the deleted user.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/user'
 *      404:
 *        description: User not found
 */
