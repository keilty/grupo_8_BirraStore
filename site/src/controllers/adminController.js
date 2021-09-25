const path = require("path");
const fs = require("fs");

module.exports = {
    list: (req,res) => {
        res.render("admin/admin");
    },
    create: (req,res) => {
        res.render("admin/create");
    },
    store: (req,res) => {
        res.render("admin/create");
    },
    edit: (req,res) => {
        res.render("admin/edit");
    },
    update: (req,res) => {
        res.render("admin/edit");
    },
    eliminar: (req,res) => {
        res.redirect("/admin");
    }
}


