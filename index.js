const express = require( 'express' );
const app = express();
const port = 4000;
const path = require( 'path' );

app.listen( port, ()=>{
	console.log('Server is running on '+ port)
});

/*app.get( '/', (req, res)=>{
	res.send( 'hi there ')
})*/

app.use( '/', express.static( path.join(__dirname, 'public') ));
 
 
	
