import { Router } from "express";
import {
    findAllUsers,
    findOneUser,
    createUser,
    updateUser,
    deleteUser
} from "./user.controllers.js"

export const router = Router()

router
.route('/users')
.get(findAllUsers)
.post(createUser)

router
.route('/users/:id')
.get(findOneUser)
.patch(updateUser)
.delete(deleteUser)

