const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

// app.post('/kinal', (req,res) =>{
//     res.send('Bienvenidos a Kinal')
// });

// app.put('/editar/1', (req,res) => {
//     res.send('ID 1 editado')
// });

// app.delete('/delete/1', (req,res) => {
//     res.send('ID 1 eliminado')
// });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});