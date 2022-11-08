const { Router } = require('express');
const router = Router();
const BD = require('../config/configbd');


// get especifico
router.get('/getRol/:id', async (req, res) => {
    const { id } = req.params;
    sql = "select * from rol where id_r =:id";

    let result = await BD.Open(sql, [id], false);

    result.rows.map(rol => {
        let rolSchema = {
            "id_r": rol[0],
            "nombre_r": rol[1]
        }

        rol.push(rolSchema);
        Rol = [rolSchema];
    })
    
    res.json(Rol);
})

// get de todo
router.get('/getRoles', async (req, res) => {
    sql = "select * from rol";

    let result = await BD.Open(sql, [], false);
    Roles = [];

    result.rows.map(rol => {
        let rolesSchema = {
            "id_r": rol[0],
            "nombre_r": rol[1]
        }

        Roles.push(rolesSchema);
    })

    res.json(Roles);
})

//agregar
router.post('/addRol', async (req, res) => {
    const { id_r, nombre_r} = req.body;

    sql = "insert into rol(id_r, nombre_r) values (:id_r, :nombre_r)";

    await BD.Open(sql, [id_r, nombre_r], true);

    res.status(200).json({
        "id_r": id_r,
        "nombre_r": nombre_r
    })
})

//Actualizar
router.put("/UpdateRol", async (req, res) => {
    const { id_r, nombre_r} = req.body;
    
    sql = "update rol set nombre_r=:nombre_r where id_r=:id_r";

    await BD.Open(sql, [nombre_r, id_r], true);

    res.status(200).json({
            "id_r": id_r,
            "nombre_r": nombre_r
        })
})

//DELETE
router.delete("/deleteRol/:id", async (req, res) => {
    const { id } = req.params;

    sql = "delete rol where id_r=:id";

    await BD.Open(sql, [id], true);

    res.json({ msg: "Rol Eliminado" })
})

module.exports = router;