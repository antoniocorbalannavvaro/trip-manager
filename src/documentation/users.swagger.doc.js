//? USERS SCHEMA:
/**
 * @swagger
 * components:
 *  schemas:
 *    users:
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
 *
 */

//! ERRORS SCHEMA:
/**
 * @swagger
 * components:
 *  schemas:
 *    error_get_users:
 *      type: object
 *      properties:
 *        error:
 *          type: string
 *          description: error message
 *      example:
 *        error: No users yet
 *
 *    error_get_user:
 *      type: object
 *      properties:
 *        error:
 *          type: string
 *          description: error message
 *      example:
 *        error: User with id ${userId} doesn't exist
 *
 *    error_post_user:
 *      type: object
 *      properties:
 *        error:
 *          type: string
 *          description: error message
 *      example:
 *        error: Invalid key or value to create user
 *
 *    error_put_user:
 *      type: object
 *      properties:
 *        error:
 *          type: string
 *          description: error message
 *      example:
 *        error: User not found
 *
 *    error_delete_user:
 *      type: object
 *      properties:
 *        error:
 *          type: string
 *          description: error message
 *      example:
 *        error: User not found
 *
 *    error_post_duplicated_keys:
 *      type: object
 *      properties:
 *        error:
 *          type: string
 *          description: error message
 *      example:
 *        error: duplicate key value violates unique constraint
 *
 *    error_put_duplicated_keys:
 *      type: object
 *      properties:
 *        error:
 *          type: string
 *          description: error message
 *      example:
 *        error: duplicate key value violates unique constraint
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
 *                $ref: '#/components/schemas/users'
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
 *        description: return an object with an user
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/users'
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
 *            $ref: '#/components/schemas/users'
 *    responses:
 *      200:
 *        description: return an object with the user posted
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/users'
 *
 *      403:
 *        description: return an object.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/error_post_user'
 *
 *      404:
 *        description: return an object.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/error_post_duplicated_keys'
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
 *            $ref: '#/components/schemas/users'
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *         type: string
 *        required: true
 *        description: The user id you want to update
 *    responses:
 *      200:
 *        description: return an object with the user updated
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/users'
 *
 *      403:
 *        description: return an object.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/error_put_user'
 *
 *      404:
 *        description: return an object.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/error_put_duplicated_keys'
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
 *        description: return an object with the user deleted.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/users'
 *      403:
 *        description: return an object.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/error_delete_user'
 */
