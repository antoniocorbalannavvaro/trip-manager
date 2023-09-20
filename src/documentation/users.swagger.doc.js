/**
 * @swagger
 * components:
 *  schemas:
 *    user:
 *      type: object
 *      properties:
 *        user_name:
 *          type: string
 *          description: User name
 *        user_email:
 *          type: string
 *          description: An email
 *        user_password:
 *          type: string
 *          description: User password
 *      required:
 *        - user_name
 *        - user_email
 *        - user_password
 *      example:
 *        name: Topo
 *        email: topo@gmail.com
 *        password: mypassword
 */

/**
 * @swagger
 * /api/users:
 *  post:
 *    summary: Create a new user
 *    tags: [user]
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

/**
 * @swagger
 * /api/users:
 *  get:
 *    summary: Get all users
 *    tags: [user]
 *    responses:
 *      200:
 *        description: return all users.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/user'
 */

/**
 * @swagger
 * /api/users/{id}:
 *  get:
 *    summary: Get an user
 *    tags: [user]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *         type: string
 *        required: true
 *        description: The user id you want to find
 *    responses:
 *      200:
 *        description: return an user.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/user'
 *      404:
 *        description: User with id {id_in_url} doesn't exists
 */

/**
 * @swagger
 * /api/users/{id}:
 *  delete:
 *    summary: Delete an user
 *    tags: [user]
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

/**
 * @swagger
 * /api/users/{id}:
 *  put:
 *    summary: Uptdate an user
 *    tags: [user]
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
