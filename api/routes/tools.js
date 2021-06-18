const express = require( 'express' );
const router = express.Router();
const tools = require( '../models/tools' );

router.get( '/', async ( req, res ) =>
{
  const data = await tools.find();
  res.send( data );
} );

router.get( '/:id', async ( req, res ) =>
{
  const data = await tools.findOne( { _id: req.params.id } );
  res.send( data );
} );

router.post( '/', async ( req, res ) =>
{
  const newTool = new tools( req.body );
  newTool.save();
  res.send( 'Cadastro realizado com sucesso.' );
} );

router.put( '/:id', async ( req, res ) =>
{
  await tools.updateOne( { _id: req.params.id } );
  res.send( 'Cadastro alterado com' );
} );

router.delete( '/:id', async ( req, res ) =>
{
  await tools.deleteOne( { _id: req.params.id } );
  res.send( 'Cadastro excluido com sucesso.' );
} );

module.exports = router;
