/**
 * @swagger
 * components:
 *  schemas:
 *    customer:
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
 * /api/customers:
 *  post:
 *    summary: Create a new user
 *    tags: [customer]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/customer'
 *    responses:
 *      200:
 *        description: return an object with the new user values.
 */

/**
 * @swagger
 * /api/customers:
 *  get:
 *    summary: Get all users
 *    tags: [customer]
 *    responses:
 *      200:
 *        description: return all users.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/customer'
 */

/**
 * @swagger
 * /api/customers/{id}:
 *  get:
 *    summary: Get an user
 *    tags: [customer]
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
 *              $ref: '#/components/schemas/customer'
 *      404:
 *        description: User with id {id_in_url} doesn't exists
 */

/**
 * @swagger
 * /api/customers/{id}:
 *  delete:
 *    summary: Delete an user
 *    tags: [customer]
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
 *              $ref: '#/components/schemas/customer'
 *      404:
 *        description: User not found
 */

/**
 * @swagger
 * /api/customers/{id}:
 *  put:
 *    summary: Uptdate an user
 *    tags: [customer]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/customer'
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
 *              $ref: '#/components/schemas/customer'
 *      404:
 *        description: User not found
 */
