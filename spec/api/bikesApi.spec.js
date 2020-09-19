const Bikes = require('../../models/bikes');
const axios = require('axios');
const server = require('../../bin/www');

describe('Bikes API', () => {
  describe('GET Bikes /', () => {
    it('Status 200', (done) => {
      expect(Bikes.allBikes.length).toBe(0);

      const a = new Bikes(1, 'red', 'urban', [-34.6012424, -58.3861497]);
      Bikes.add(a);

      axios.get('http://localhost:3000/api/bikes').then(
        (response) => {
          expect(response.status).toBe(200);
          done();
        },
        (error) => {}
      );
    });
  });

  describe('POST Bikes /create', () => {
    it('Status 200', (done) => {
      const a = { id: 10, color: 'red', model: 'urban', lat: -34.6012424, lng: -58.3861497 };
      axios({
        method: 'post',
        url: 'http://localhost:3000/api/bikes/create',
        headers: { 'content-type': 'application/json' },
        data: a,
      }).then(
        (response) => {
          expect(response.status).toBe(200);
          expect(Bikes.findById(10).color).toBe('red');
          done();
        },
        (error) => {}
      );
    });
  });

  describe('DELETE Bikes /delete', () => {
    it('Status 204', (done) => {
      expect(Bikes.allBikes.length).toBe(0);

      const a = new Bikes(1, 'red', 'urban', [-34.6012424, -58.3861497]);
      Bikes.add(a);

      expect(Bikes.allBikes.length).toBe(1);

      axios({
        method: 'delete',
        url: 'http://localhost:3000/api/bikes/delete',
        headers: { 'content-type': 'application/json' },
        data: { id: 1 },
      }).then(
        (response) => {
          expect(response.status).toBe(204);
          expect(Bikes.allBikes.length).toBe(0);
          done();
        },
        (error) => {}
      );
    });
  });

  describe('PUT Bikes /update', () => {
    it('Status 200', (done) => {
      expect(Bikes.allBikes.length).toBe(0);

      const a = new Bikes(1, 'red', 'urban', [-34.6012424, -58.3861497]);
      Bikes.add(a);

      expect(Bikes.allBikes.length).toBe(1);
      expect(Bikes.findById(1).color).toBe('red');

      const updateData = { id: 1, color: 'blue', model: 'mountain', lat: -34.6012424, lng: -58.3861497 };
      axios({
        method: 'put',
        url: 'http://localhost:3000/api/bikes/update',
        headers: { 'content-type': 'application/json' },
        data: updateData,
      }).then(
        (response) => {
          expect(response.status).toBe(200);
          expect(Bikes.findById(1).color).toBe('blue');
          expect(Bikes.findById(1).model).toBe('mountain');
          done();
        },
        (error) => {}
      );
    });
  });
});
