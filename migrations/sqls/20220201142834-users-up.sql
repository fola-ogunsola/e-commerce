CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,    
    "first_name" varchar,
    "last_name" varchar,
    "email" varchar UNIQUE,
    "phone_number"  VARCHAR(50) NOT NULL,
    "password" varchar(255),
    "confirmation_code" varchar,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
)