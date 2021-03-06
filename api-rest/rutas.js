const router = require('express').Router()
const conexion = require('./config/conexion')

//asignacion de rutas

//metodo Get obtener lista

// Configurar cabeceras y cors
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


router.get('/',(req, res)=>{
	let sql = 'select * from tb_equipo'
	conexion.query(sql,(err, rows, fields)=>{
		if (err){
			 throw err;
		}else{
			res.json(rows)
		}
	})
})


//metodo Get obtener un solo equipo
router.get('/:id',(req, res)=>{
	const {id} = req.params
	let sql = 'select * from tb_equipo where id_equipo = ?'
	conexion.query(sql,[id],(err, rows, fields)=>{
		if (err){
			 throw err;
		}else{
			res.json(rows)
		}
	})
})

//agregar un equipo
router.post('/',(req, res)=>{
	const {nombre, logo} = req.body
	let sql = `insert into tb_equipo(nombre, logo) values('${nombre}','${logo}')`
	conexion.query(sql,(err, rows, fields)=>{
		if (err){
			 throw err;
		}else{
			res.json({status: 'equipo agregado'})
		}
	})
})


//eliminar
router.delete('/:id', (req, res)=>{
	const{id}=req.params
	let sql = `delete from tb_equipo where id_equipo = '${id}'`
	conexion.query(sql,(err, rows, fields)=>{
		if (err){
			 throw err;
		}else{
			res.json({
				status: 'equipo eliminado'
			})
		}
	})
})

//modifica
router.put('/:id', (req, res)=>{
	const{id}=req.params
	const{nombre, logo} = req.body

	let sql = `update tb_equipo set
				nombre = '${nombre}',
				logo = '${logo}'
				where id_equipo = '${id}'`
	conexion.query(sql,(err, rows, fields)=>{
		if (err){
			 throw err;
		}else{
			res.json({
				status: 'equipo modificado'
			})
		}
	})
})

module.exports = router;
