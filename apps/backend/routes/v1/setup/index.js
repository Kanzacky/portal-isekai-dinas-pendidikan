import express from "express";
const router = express.Router();

import user from "./user_login/user_data.js";
import userCreate from "./user_login/user_create.js";
import userUpdate from "./user_login/user_update.js";
import userDelete from "./user_login/user_delete.js";

import navBase from "./navigation/mst_navigation_data.js";
import navUser from "./navigation/user_navigation_data.js";
import navUserEdit from "./navigation/user_navigation_data_edit.js";
import navUserInsert from "./navigation/user_navigation_insert.js";

import configCreate from './config/config_create.js'
import configData from './config/config_data.js'

// master
// user
router.use("/user-login/user-data", user);
router.use("/user-login/user-create", userCreate);
router.use("/user-login/user-update", userUpdate);
router.use("/user-login/user-delete", userDelete);
// user
router.use("/config-data", configData);
router.use("/config-create", configCreate);
//navigation
router.use("/nav/base-data", navBase);
router.use("/nav/user-data", navUser);
router.use("/nav/user-data-edit", navUserEdit);
router.use("/nav/user-insert", navUserInsert);

export default router;
