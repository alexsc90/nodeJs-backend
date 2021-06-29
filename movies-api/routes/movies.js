const express = require('express');
const MoviesService = require('../services/movies');


function moviesApi(app) {
    const router = express.Router();
    app.use('/api/movies', router);

    const moviesService = new MoviesService();

    router.get('/', async(req, res, next) => {
        const { tags } = req.query;

        try {
            const movies = await moviesService.getMovies({ tags });

            res.status(200).json({
                data: movies,
                message: 'movies listed'
            });

        } catch(err) {
            next(err)
        }
    });

    router.get('/:id', async(req, res, next) => {
        const { id } = req.params;

        try {
            const movie = await moviesService.getMovie({ id });

            res.status(200).json({
                data: movie,
                message: 'movie listed'
            });

        } catch(err) {
            next(err)
        }
    });

    router.post('/', async(req, res, next) => {
        const { body: movie } = req;
        try {
            const createMovieId = await moviesService.createMovie({ movie });

            res.status(201).json({
                data: createMovieId,
                message: 'movie created'
            });

        } catch(err) {
            next(err)
        }
    });

    router.put('/:id', async(req, res, next) => {
        const { id } = req.params;
        const { body: movie } = req;
        
        try {
            const updatedMovieId = await moviesService.updateMovie({ id, movie });

            res.status(200).json({
                data: updatedMovieId,
                message: 'movie updated'
            });

        } catch(err) {
            next(err)
        }
    });

    router.delete('/:id', async(req, res, next) => {
        const { id } = req.params;

        try {
            const deletedMovieId = await moviesService.deleteMovie({ id });

            res.status(200).json({
                data: deletedMovieId,
                message: 'movie deleted'
            });

        } catch(err) {
            next(err)
        }
    });
}

module.exports = moviesApi;