import { API } from './api.js';
import * as UI from './interfaz.js'

UI.formSearch.addEventListener('submit',searchSong)



function searchSong(e) {
    e.preventDefault()

    const artist = document.getElementById('artista').value
    const song = document.getElementById('cancion').value


    if (artist ==='' || song === '') {
        UI.divMessage.innerHTML = 'Todos los campos son necesarios'
        UI.divMessage.classList.add('error')
        setTimeout(() => {
            UI.divMessage.innerHTML = ''
            UI.divMessage.classList.remove('error')
        }, 1500);
    }else{
        const getApi = new API(artist,song)
        getApi.consultaAPI()
            .then(data =>{

                if (data.response.lyrics) {
                    const lyrics = data.response.lyrics
                    UI.result.textContent = lyrics
                    

                }else{
                   
                    UI.divMessage.innerHTML = 'No hay resultado para la busqueda'
                    UI.divMessage.classList.add('error')

                    setTimeout(() => {
                        UI.divMessage.innerHTML = ''
                        UI.divMessage.classList.remove('error')
                        UI.formSearch.reset()
                    }, 3000);




                }

            
            })
    }


}



