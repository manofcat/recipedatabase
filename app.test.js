'use strict';

const request = require('supertest');
const app = require('./app');

describe('Tests', () => {
    test('GET /users/all succeeds', () => {
        return request(app)
	    .get('/users/all')
	    .expect(200);
    });

    test('GET /users/check succeeds', () => {
        return request(app)
	    .get('/users/check')
	    .expect(200);
    });

    test('GET /users/attributes succeeds', () => {
        return request(app)
	    .get('/users/attributes')
        .query({ username: 'hanssel'})
	    .expect(200);
    });

    test('GET /users/ownedrecipes succeeds', () => {
        return request(app)
	    .get('/users/ownedrecipes')
        .query({ username: 'hanssel'})
	    .expect(200);
    });

    test('GET /recipe/all succeeds', () => {
        return request(app)
	    .get('/recipe/all')
	    .expect(200);
    });

    test('GET /recipe/search succeeds', () => {
        return request(app)
	    .get('/recipe/search')
        .query({ attr: 'name', val: 'spaghetti' })
	    .expect(200);
    });

    test('GET /users/all succeeds', () => {
        return request(app)
	    .get('/users/all')
	    .expect(200);
    });

    test('POST /recipe/new succeeds', () => {
        const params = {created_by: 'hanssel',name: 'Iced Water',image: 'https://preview.redd.it/0wn7d9bspti81.jpg?width=1481&format=pjpg&auto=webp&s=d23b9ef169b2dab279032e34c172edd316fbdb10',ingredients: { 'water': '50 ml' },instructions: ['Pour tap water into a cup', 'Add some ice from the freezer'],rating: 5,difficulty: '1',time_taken: '1',description: 'Cool and refreshing'};
        return request(app)
	    .post('/recipe/new')
        .send(params)
	    .expect(200);
    });

s 

    test('POST /users/new/favourite succeeds', () => {
        const favourite_params = {to: 'hanssel',recipe: {created_by: 'hanssel',name: 'Lemonade',image: 'https://natashaskitchen.com/wp-content/uploads/2023/07/Lemonade-Recipe-4.jpg',ingredients: { 'lemon': '3', 'ice cubes': '7'},instructions: ['Squeeze lemons into a cup', 'Add some ice cubes from the freezer'],rating: 5,difficulty: '1',time_taken: '1',description: 'Deliciously cool'}};
        return request(app)
	    .post('/users/new/favourite')
        .send(favourite_params)
	    .expect(200);
    });

    test('POST /users/new/createdby succeeds', () => {
        const createdby_params = {created_by: 'hanssel',name: 'Iced Water',image: 'https://preview.redd.it/0wn7d9bspti81.jpg?width=1481&format=pjpg&auto=webp&s=d23b9ef169b2dab279032e34c172edd316fbdb10',ingredients: { 'water': '50 ml'},instructions: ['Pour tap water into a cup', 'Add some ice from the freezer'],rating: 5,difficulty: '1',time_taken: '1',description: 'Cool and refreshing'};
        return request(app)
	    .post('/users/new/createdby')
        .send(createdby_params)
	    .expect(200);
    });
});
