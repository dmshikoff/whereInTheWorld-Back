const express = require('express')
const router = express.Router()

const controller = require('../controllers/users')



router.get('/:usersId/', controller.getOne)
router.get('/:usersId/reqUser/:email', controller.getUserByEmail)

router.post('/', controller.create)
router.delete('/:usersId', controller.remove)


const commentController = require('../controllers/comments')

router.get('/:usersId/comments', commentController.getAll)
router.get('/:usersId/comments/:commentsId', commentController.getOne)
router.post('/:usersId/comments/:snackId', commentController.create)
router.put('/:usersId/comments/:commentsId', commentController.update)
router.delete('/:usersId/comments/:commentsId', commentController.remove)

module.exports = router