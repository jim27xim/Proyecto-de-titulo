const { Router } = require('express');
const router = Router();
const BD = require('../config/configbd');

//Get especifico de vista con tarea
router.get('/api-tarea-sub/get_TareaSub/:id', async (req, res) => {

    try{
        const { id } = req.params;
        sql = "select * from TAREA_SUBORDINADA where id_ts=:id";

        let result = await BD.Open(sql, [id], false);
        TareaSub = [];

        result.rows.map(Tarea_Sub => {
            let tarea_subSchema = {
                "id_ts": Tarea_Sub[0],
                "nombre_ts": Tarea_Sub[1],
                "descripcion_ts": Tarea_Sub[2],
                "fecha_inicio_ts": Tarea_Sub[3],
                "fecha_entrega_ts": Tarea_Sub[4],
                "fecha_entrega_efectiva_ts": Tarea_Sub[5],
                "porcentaje_avance_ts": Tarea_Sub[6],
                "estado_ts": Tarea_Sub[7],
                "indicador_ts": Tarea_Sub[8],
                "id_t": Tarea_Sub[9],
                "id_ft": Tarea_Sub[10]
            }

            TareaSub.push(tarea_subSchema);
        })
        
        res.json(TareaSub);
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Get especifico de vista con tarea (Modificado)
router.get('/api-tarea-sub/get_Tarea_Sub/:id', async (req, res) => {

    try{
        const { id } = req.params;
        sql = "select * from TAREA_SUBORDINADA where id_t=:id";

        let result = await BD.Open(sql, [id], false);
        Vista_Tarea_Sub = [];

        result.rows.map(tarea_subordinada => {
            let vista_tarea_subSchema = {
                "id_ts": tarea_subordinada[0],
                "nombre_ts": tarea_subordinada[1],
                "descripcion_ts": tarea_subordinada[2],
                "fecha_inicio_ts": tarea_subordinada[3],
                "fecha_entrega_ts": tarea_subordinada[4],
                "fecha_entrega_efectiva_ts": tarea_subordinada[5],
                "porcentaje_avance_ts": tarea_subordinada[6],
                "estado_ts": tarea_subordinada[7],
                "indicador_ts": tarea_subordinada[8],
                "id_t": tarea_subordinada[9],
                "id_ft": tarea_subordinada[10]
            }

            Vista_Tarea_Sub.push(vista_tarea_subSchema);
        })
        
        res.json(Vista_Tarea_Sub);
        } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})
//Get especifico de vista por flujo de tareas (Modificado)
router.get('/api-tarea-sub/get_Tarea_Sub_Por_FT/:id', async (req, res) => {

    try{
        const { id } = req.params;
        sql = "select * from TAREA_SUBORDINADA where id_ft=:id";

        let result = await BD.Open(sql, [id], false);
        Vista_Tarea_Sub = [];

        result.rows.map(tarea_subordinada => {
            let vista_tarea_subSchema = {
                "id_ts": tarea_subordinada[0],
                "nombre_ts": tarea_subordinada[1],
                "descripcion_ts": tarea_subordinada[2],
                "fecha_inicio_ts": tarea_subordinada[3],
                "fecha_entrega_ts": tarea_subordinada[4],
                "fecha_entrega_efectiva_ts": tarea_subordinada[5],
                "porcentaje_avance_ts": tarea_subordinada[6],
                "estado_ts": tarea_subordinada[7],
                "indicador_ts": tarea_subordinada[8],
                "id_t": tarea_subordinada[9],
                "id_ft": tarea_subordinada[10]
            }

            Vista_Tarea_Sub.push(vista_tarea_subSchema);
        })
        
        res.json(Vista_Tarea_Sub);
        } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})


//Get de todo la vista
router.get('/api-tarea-sub/getVista_Tareas_Sub', async (req, res) => {
    
    try{
        sql = "select * from vista_tarea_sub_tarea";

        let result = await BD.Open(sql, [], false);
        Vista_Tareas_Sub = [];

        result.rows.map(vista_tarea_sub_tarea => {
            let vista_tareas_subSchema = {
                "nombre_ts": vista_tarea_sub_tarea[1],
                "descripcion_ts": vista_tarea_sub_tarea[2],
                "fecha_inicio_ts": vista_tarea_sub_tarea[3],
                "fecha_entrega_ts": vista_tarea_sub_tarea[4],
                "porcentaje_avance_ts": vista_tarea_sub_tarea[5],
                "estado_ts": vista_tarea_sub_tarea[6],
                "nombre_u": vista_tarea_sub_tarea[7],
                "nombre_t": vista_tarea_sub_tarea[8]
            }

            Vista_Tareas_Sub.push(vista_tareas_subSchema);
        })
        
        res.json(Vista_Tareas_Sub);
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Get especifico
router.get('/getTarea_Sub/:id', async (req, res) => {

    try{
        const { id } = req.params;
        sql = "select * from tarea_subordinada where id_ts =:id";

        let result = await BD.Open(sql, [id], false);
        Tarea_Subordinada = [];

        result.rows.map(tarea_subordinada => {
            let tarea_subordinadaSchema = {
                "id_ts": tarea_subordinada[0],
                "nombre_ts": tarea_subordinada[1],
                "descripcion_ts": tarea_subordinada[2],
                "fecha_inicio_ts": tarea_subordinada[3],
                "fecha_entrega_ts": tarea_subordinada[4],
                "porcentaje_avance_ts": tarea_subordinada[5],
                "estado_ts": tarea_subordinada[6]
            }

            Tarea_Subordinada.push(tarea_subordinadaSchema);
        })
        
        res.json(Tarea_Subordinada);
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Get de todo (Modificado)
router.get('/api-tarea-sub/getTareas_Sub', async (req, res) => {

    try{
        sql = "select * from tarea_subordinada";

        let result = await BD.Open(sql, [], false);
        Tareas_Subordinadas = [];

        result.rows.map(tarea_subordinada => {
            let tareas_subordinadasSchema = {
                "id_ts": tarea_subordinada[0],
                "nombre_ts": tarea_subordinada[1],
                "descripcion_ts": tarea_subordinada[2],
                "fecha_inicio_ts": tarea_subordinada[3],
                "fecha_entrega_ts": tarea_subordinada[4],
                "fecha_entrega_efectiva_ts": tarea_subordinada[5],
                "porcentaje_avance_ts": tarea_subordinada[6],
                "estado_ts": tarea_subordinada[7],
                "indicador_ts": tarea_subordinada[8],
                "id_t": tarea_subordinada[9],
                "id_ft": tarea_subordinada[10]
            }

            Tareas_Subordinadas.push(tareas_subordinadasSchema);
        })

        res.json(Tareas_Subordinadas);
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Agregar
router.post('/api-tarea-sub/getTareas_Sub/', async (req, res) => {

    try{
        const { id_ts, nombre_ts, descripcion_ts, fecha_entrega_ts, 
                porcentaje_avance_ts, estado_ts, id_t, id_ft} = req.body;

        sql = "insert into tarea_subordinada(id_ts, nombre_ts, descripcion_ts, fecha_entrega_ts, porcentaje_avance_ts, estado_ts, id_t, id_ft) values (:id_ts, :nombre_ts, :descripcion_ts, :fecha_entrega_ts, :porcentaje_avance_ts, :estado_ts, :id_t, :id_ft)";

        await BD.Open(sql, [id_ts, nombre_ts, descripcion_ts, fecha_entrega_ts, porcentaje_avance_ts, estado_ts, id_t, id_ft], true);

        res.status(200).json({
            "id_ts": id_ts,
            "nombre_ts": nombre_ts,
            "descripcion_ts": descripcion_ts,
            "fecha_entrega_ts": fecha_entrega_ts,
            "porcentaje_avance_ts": porcentaje_avance_ts,
            "estado_ts": estado_ts,
            "id_t": id_t,
            "id_ft": id_ft
        })
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Actualizar
router.patch("/api-tarea-sub/UpdateTarea_Sub/:id", async (req, res) => {

    try{
        const { id } = req.params;
        const { id_ts, nombre_ts, descripcion_ts, fecha_inicio_ts, fecha_entrega_ts, fecha_entrega_efectiva_ts, 
            porcentaje_avance_ts, estado_ts, indicador_ts, id_t, id_ft} = req.body;

        sql = "update tarea_subordinada set nombre_ts=:nombre_ts, descripcion_ts=:descripcion_ts, fecha_inicio_ts=:fecha_inicio_ts, fecha_entrega_ts=:fecha_entrega_ts, fecha_entrega_efectiva_ts=:fecha_entrega_efectiva_ts, porcentaje_avance_ts=:porcentaje_avance_ts, estado_ts=:estado_ts, indicador_ts=:indicador_ts, id_t=:id_t, id_ft=:id_ft where id_ts=:id";

        await BD.Open(sql, [nombre_ts, descripcion_ts, fecha_inicio_ts, fecha_entrega_ts, fecha_entrega_efectiva_ts, porcentaje_avance_ts, estado_ts, indicador_ts, id_t, id_ft, id], true);

        res.status(200).json({
            "nombre_ts": nombre_ts,
            "descripcion_ts": descripcion_ts,
            "fecha_inicio_ts": fecha_inicio_ts,
            "fecha_entrega_ts": fecha_entrega_ts,
            "fecha_entrega_efectiva_ts": fecha_entrega_efectiva_ts,
            "porcentaje_avance_ts": porcentaje_avance_ts,
            "estado_ts": estado_ts,
            "indicador_ts": indicador_ts,
            "id_t": id_t,
            "id_ft": id_ft
        })
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

//Borrar
router.delete("/api-tarea-sub/deleteTarea_Sub/:id", async (req, res) => {

    try{
        const { id } = req.params;

        sql = "delete tarea_subordinada where id_ts=:id";

        await BD.Open(sql, [id], true);

        res.json({ msg: "Tarea subordinada eliminada" })
    } catch (error){
        return res.status(500).json({message: 'Hubo un error'})
    }
})

module.exports = router;