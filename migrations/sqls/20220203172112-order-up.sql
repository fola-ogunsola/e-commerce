/* Replace with your SQL commands */
CREATE TABLE "orders" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES users(id),
    "name" VARCHAR REFERENCES products(name),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
)