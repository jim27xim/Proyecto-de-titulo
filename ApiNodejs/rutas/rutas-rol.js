const { Router } = require('express');
const router = Router();
const BD = require('../config/configbd');


//Get especifico
router.get('/api-rol/getRoles/:id', async (req, res) => {

    try{
        const { id } = req.params;
        sql = "select * from rol where id_r =:id";

        let result = await BD.Open(sql, [id], false);
        Rol = [];

        result.rows.map(rol => {
            let rolSchema = {
                "id_r": rol[0],
                "nombre_r": rol[1]
            }

            Rol.push(rolSchema);
        })
        
        res.json(Rol);
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Get de todo
router.get('/api-rol/getRoles', async (req, res) => {

    try{
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
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Agregar
router.post('/api-rol/addRol/', async (req, res) => {

    try{
        const { id_r, nombre_r} = req.body;

        sql = "insert into rol(id_r, nombre_r) values (:id_r, :nombre_r)";

        await BD.Open(sql, [id_r, nombre_r], true);

        res.status(200).json({
            "id_r": id_r,
            "nombre_r": nombre_r
        })
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Actualizar
router.patch("/api-rol/UpdateRol/:id", async (req, res) => {

    try{
        const { id } = req.params;
        const { id_r, nombre_r} = req.body;
        
        sql = "update rol set nombre_r=:nombre_r where id_r=:id";

        await BD.Open(sql, [nombre_r, id], true);

        res.status(200).json({
                "id_r": id_r,
                "nombre_r": nombre_r
            })
        } catch (error){
            return res.status(500).json({message: 'Hubo un error'})
        }
})

//Borrar
router.delete("/api-rol/deleteRol/:id", async (req, res) => {

    try{
        const { id } = req.params;

        sql = "delete rol where id_r=:id";

        await BD.Open(sql, [id], true);

        res.json({ msg: "Rol eliminado" })
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

module.exports = router;