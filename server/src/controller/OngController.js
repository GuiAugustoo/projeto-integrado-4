const OngModel = require('../model/OngModel');

class OngController {

    async create(req, res) {
        const ong = new OngModel(req.body);
        await ong
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async update(req, res) {
        await OngModel.findByIdAndUpdate({ '_id': req.params.id }, req.body, { new: true })
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async all(req, res) {
        /*filtrar por URL, usar o código { url: { '$in': req.params.url } } */
        await OngModel.find()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async filter(req, res) {
        /*filtrar por URL, usar o código { url: { '$in': req.params.url } } */
        await OngModel.find()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async delete(req, res) {
        await OngModel.deleteOne({ '_id': req.params.id })
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }
}

module.exports = new OngController();