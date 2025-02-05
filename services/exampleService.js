const Example = require('../models/exampleModel');

const createExample = async (data) => {
    const example = new Example(data);
    return await example.save();
};

const getExamples = async () => {
    return await Example.find();
};

module.exports = {
    createExample,
    getExamples,
};