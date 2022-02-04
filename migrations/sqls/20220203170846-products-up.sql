/* Replace with your SQL commands */
CREATE TABLE "products" (
    "id" SERIAL PRIMARY KEY,    
    "name"  varchar UNIQUE,
    "price" varchar,
    "description" varchar,
    "image"  TEXT
)