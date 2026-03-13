# Lesson 1

Simple NestJS REST API for managing products.

## Overview

This project is a small learning app built with NestJS. It exposes a `products`
module with in-memory CRUD operations. Data is stored in a local array inside
the service, so it resets whenever the server restarts.

## Tech Stack

- NestJS 11
- TypeScript
- Jest
- ESLint
- Prettier

## Project Structure

```text
src/
  app.module.ts
  main.ts
  products/
    interfaces/
      products.interface.ts
    products.controller.ts
    products.module.ts
    products.service.ts
test/
  app.e2e-spec.ts
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the app

```bash
npm run start
```

The server starts on `http://localhost:3000` by default.

To use a different port:

```bash
PORT=4000 npm run start
```

## Available Scripts

- `npm run start` starts the app once
- `npm run start:dev` starts the app in watch mode
- `npm run start:debug` starts the app in debug + watch mode
- `npm run start:prod` runs the compiled output from `dist`
- `npm run build` compiles the project
- `npm run lint` runs ESLint with auto-fix
- `npm run format` formats source and test files
- `npm run test` runs unit tests
- `npm run test:watch` runs unit tests in watch mode
- `npm run test:cov` runs tests with coverage
- `npm run test:e2e` runs end-to-end tests

## API

Base URL:

```text
http://localhost:3000
```

### Product shape

```json
{
  "id": 1,
  "name": "product1",
  "price": 120
}
```

### Create product payload

```json
{
  "name": "keyboard",
  "price": 250
}
```

### Endpoints

#### `GET /products`

Returns all products.

Example response:

```json
[
  { "id": 1, "name": "product1", "price": 120 },
  { "id": 2, "name": "product2", "price": 200 },
  { "id": 3, "name": "product3", "price": 150 }
]
```

#### `GET /products/:id`

Returns one product by id.

Example:

```bash
curl http://localhost:3000/products/1
```

#### `POST /products`

Creates a new product.

Example:

```bash
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"mouse\",\"price\":99}"
```

#### `PATCH /products/:id`

Updates an existing product.

Example:

```bash
curl -X PATCH http://localhost:3000/products/1 \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"updated product\",\"price\":180}"
```

#### `DELETE /products/:id`

Deletes a product and returns the deleted item when found.

Example:

```bash
curl -X DELETE http://localhost:3000/products/1
```

## Notes

- The app does not use a database yet.
- Product data is stored in memory inside `ProductsService`.
- Restarting the server resets the product list.

## Next Improvements

- Add DTO classes with validation using `class-validator`
- Return proper HTTP exceptions instead of plain strings/objects
- Add persistent storage with a database
- Add more unit tests for the service and controller
