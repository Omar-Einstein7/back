const exampleService = require('../services/exampleService');

const createExample = async (req, res) => {
    try {
        const example = await exampleService.createExample(req.body);
        res.status(201).json(example);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getExamples = async (req, res) => {
    try {
        const examples = await exampleService.getExamples();
        res.status(200).json(examples);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createExample,
    getExamples,
};