const axiosApi = require('../services/api')

const handleRemoverDescriptionFromArray = (movies)=>{
    const movieNameList = movies.map((movie)=>{
        return {id:movie.id, title:movie.title}
    })

    return movieNameList;
}

exports.getAllRepositories = async (req, res) => {

    const{api} = axiosApi;
    const authorization = req.authorization;

    await api.get('/movies')
    .then((response)=>{ 
        authorization? 
        res.json(response.data)
        :
        res.json(handleRemoverDescriptionFromArray(response.data))
    }).catch((error)=>{
        res.status(error?.response?.status || 500);
        res.json(error.message)
    })
}

exports.findRepositorieId = async(req, res)=>{
    const {api} = axiosApi;

    const idMovie = req.params.idmovie;
    const authorization = req.authorization;

    await api.get(`/movies/${idMovie}`)
     .then((response)=>{
        
        authorization? 
        res.json(response.data)
        :
        res.json({id: response.data.id, title:response.data.title})

     }).catch((error)=>{
        res.status(error?.response?.status || 500);
        res.json(error.message)
    })

}

