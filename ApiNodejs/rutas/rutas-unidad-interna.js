const { Router } = require('express');
const router = Router();
const BD = require('../config/configbd');


//Get especifico
router.get('/api-unidad/getUI/:id', async (req, res) => {
    
    try{
        const { id } = req.params;
        sql = "select * from unidad_interna where id_ui =:id";

        let result = await BD.Open(sql, [id], false);
        Unidad_Interna = [];

        result.rows.map(unidad_interna => {
            let unidad_internaSchema = {
                "id_ui": unidad_interna[0],
                "nombre_ui": unidad_interna[1]
            }

            Unidad_Interna.push(unidad_internaSchema);
        })
        
        res.json(Unidad_Interna);
        } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Get de todo
router.get('/api-unidad/getUSIS', async (req, res) => {

    try{
        sql = "select * from unidad_interna";

        let result = await BD.Open(sql, [], false);
        Unidades_Internas = [];

        result.rows.map(unidad_interna => {
            let unidades_internasSchema = {
                "id_ui": unidad_interna[0],
                "nombre_ui": unidad_interna[1]
            }

            Unidades_Internas.push(unidades_internasSchema);
        })

        res.json(Unidades_Internas);
        } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Agregar
router.post('/api-unidad/addUI', async (req, res) => {
    try{
        const { id_ui, nombre_ui} = req.body;

        sql = "insert into unidad_interna(id_ui, nombre_ui) values (:id_ui, :nombre_ui)";

        await BD.Open(sql, [id_ui, nombre_ui], true);

        res.status(200).json({
            "id_ui": id_ui,
            "nombre_ui": nombre_ui
        })
        } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Actualizar
router.patch("/api-unidad/UpdateUI/:id", async (req, res) => {
    
    try{
        const { id } = req.params;
        const { id_ui, nombre_ui} = req.body;

        sql = "update unidad_interna set nombre_ui=:nombre_ui where id_ui=:id";

        await BD.Open(sql, [nombre_ui, id], true);

        res.status(200).json({
                "id_ui": id_ui,
                "nombre_ui": nombre_ui
            })
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Borrar
router.delete("/api-unidad/deleteUI/:id", async (req, res) => {

    try{
        const { id } = req.params;

        sql = "delete unidad_interna where id_ui=:id";

        await BD.Open(sql, [id], true);

        res.json({ msg: "Unidad interna eliminada" })
        } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

module.exports = router;