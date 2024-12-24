import express from 'express';
import path from 'path';
import { BrandController } from './controllers/brandController';
import { CarsController } from './controllers/carsController';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// Controllers
const brandController = new BrandController();
const carsController = new CarsController();

// Routes
app.post('/brands', (req, res) => brandController.addBrand(req, res));
app.put('/brands/:id', (req, res) => brandController.updateBrand(req, res));
app.delete('/brands/:id', (req, res) => brandController.deleteBrand(req, res));

app.post('/cars', (req, res) => carsController.addCar(req, res));
app.put('/cars/:id', (req, res) => carsController.updateCar(req, res));
app.delete('/cars/:id', (req, res) => carsController.deleteCar(req, res));

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});