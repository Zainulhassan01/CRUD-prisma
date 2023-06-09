const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllUsers = async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
}

const addUser = async (req, res) => {
    const user = await prisma.user.create({ data: req.body });
    res.send(user);
}

const updateUser = async(req, res) => {
    const user = await prisma.user.update({
        where: {
            id: parseInt(req.params.id)
        },
        data: {
            email: req.body.email,
            country: req.body.country
        }
    })
    res.send(user)
}

const deleteUser = async (req, res) => {
    const user = await prisma.user.delete({
        where: {
            id: parseInt(req.params.id)
        }
    })
    res.send(user)
}

module.exports = {
    getAllUsers,
    addUser,
    updateUser,
    deleteUser
}
  