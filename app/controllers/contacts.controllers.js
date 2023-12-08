const db = require("../models")
const Contacts = db.contacts

exports.create = (req, res) => {

    req.body.phone = new String(req.body.phone)

    Contacts.create(req.body)
        .then(() => res.send({message: "Contact saved"}))
        .catch(err => res.status(500).send({message: err.message}));
}

exports.findAll = (req, res) => {
    Contacts.find()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({message: err.message}))
}

exports.find = (req, res) => {
    const id = req.params.id;

    Contacts.findById(id)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({message: err.message}))
}

exports.update = (req, res) => {
    const id = req.params.id;

    Contacts.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if(!data) {
                res.status(404).send({message: "Failed to update contact"})
            }
            res.send({message: "Contact updated"})
        })
        .catch(err => res.status(500).send({message: err.message}))
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Contacts.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({message: "Failed to delete Contact"})
            }
            res.send({message: "Contact deleted successfully"})
        })
        .catch(err => res.status(500).send({message: err.message}))
}