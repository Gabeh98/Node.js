const db = require('./_database')

async function updateData (){
    await db.connect();
    const queryParticipante = "UPDATE participante SET nome = 'Carlos augusto' WHERE nome = 'Carlos'";
    await db.query(queryParticipante);
    

    const queryEventoParticipante = "DELETE FROM evento_participante WHERE evento_id = '1' AND participante_id = '1'"
    await db.query(queryEventoParticipante)
    console.log("Update realizado");
}
updateData();
