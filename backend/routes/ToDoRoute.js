const {Router} = require('express');
const {getToDo, saveToDo,updateToDo, deleteToDo} = require('../controllers/ToDoController');
const router = Router();

router.get('/', getToDo);
router.post('/save', saveToDo);
router.delete('/delete', deleteToDo);
router.put('/update', updateToDo);
module.exports = router;