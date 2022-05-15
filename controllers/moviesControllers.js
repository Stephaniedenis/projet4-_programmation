
var { Movie } = require ('../modeles/movie');
var ObjectID = require('mongoose').Types.ObjectId;

exports.index = (req,res)=>{
    Movie.find((err, docs)=>{
        if (!err){
            res.send(docs)
        }else {
            res.status(500).send(err)
        }
    })
};
exports.searchById = (req, res)=>{
    const id = req.params.id;
    res.send(`Id found : ${id}`);
}
exports.insert = (req, res)=> {
    const movieItem = req.body.movie;
    const newMovies = new Movie ({movie: movieItem});
    newMovies.save((err, docs)=>{
        if(!err) {
            res.status(201).send(docs)
        }else{
            res.status(500).send(err)
        }
    });
}

exports.update = (req,res)=>{
    const id = req.params.id;
    console.log(`update with given id: ${id}`);

    if(!ObjectID.isValid(id)){
        return res.send(400).send(`No record with given id ${id}`)
    }

const movieItem = req.body.movie;
const newMovies = {
    movie: movieItem
};

Movie.findByIdAndUpdate(id, {$set: newMovies},{new: true},(err,docs)=>{
    if(!err){
        res.status(200).send(docs)
    }else{
        console.log('Error while updating the data'+ JSON.stringify(err, undefined, 2))
    }
  })

}

exports.delete = (req, res )=>{
    const id = req.params.id;
    if(!ObjectId.isValid(id)){
        return res.send(400).send(`No record with givin id: ${id}`)
    }
    Movie.findByIDAndRemove(id, (erro, docs)=>{
        const result = {
            data: docs,
            message: 'Movie has bee removed successfully',
            status: 200,
        }
        
        if(!err){
            res.status(200).send(result)
        }else{
            res.status(500).send(err)
        }
    })
}