//* MANEJA UN CRUD

module.exports = {
  getUser: (req, res) => {
    res.status(200).json({ message: "GET a la ruta '/user/" });
  },
  postUser: (req, res) => {},
  putUser: (req, res) => {},
  deleteUser: (req, res) => {},
};