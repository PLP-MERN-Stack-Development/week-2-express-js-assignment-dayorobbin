const Task = require('./Task');
const express = require ('express');
const router = express.Router();


//Create a new Task
router.post('/tasks', async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save ();
        res.status(201).send(task)
    } catch (error) {
        res.status(400).send (error);
        
}
    
})

//Get all task

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.send(task);
    } catch (error) {
        res.status(500).send(error)
        
    }
});

//Get Task by ID
router.get('/tasks/:id', async (req, res) => {
    try {
        const task = await  Task.findById(req.params.id);
        if (!task) return res.status(404).send();
        res.send(task);
    } catch (error) {
        res.status(500).send(error);
        
    }
})

// Update a task
router.put('/tasks/:id', async (req, res) => {
    try {

        console.log(req.body);
        
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!task) return res.status(404).send();
        res.send(task);
    } catch (error) {
        res.status(500).send(error);
    }
});


// Delete a Task
router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete((req.params.id));
        if (!task) return res.status(404).send();
        res.send(task);
    } catch (error) {
        res.status(500).send(error);
    }
});
module.exports  = router;