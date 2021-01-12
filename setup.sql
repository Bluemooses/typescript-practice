CREATE TABLE "user" (
	"id" serial NOT NULL,
	"username" varchar(255) NOT NULL UNIQUE,
	"password" varchar(1000) NOT NULL UNIQUE,
	"admin" BOOLEAN NOT NULL DEFAULT 'FALSE',
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL,
	"shipping_address" varchar(1000) NOT NULL,
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "products" (
	"id" serial NOT NULL,
	"name" varchar(500) NOT NULL,
	"description" varchar(5000) NOT NULL,
	"cost" money NOT NULL,
	"available" BOOLEAN NOT NULL DEFAULT 'FALSE',
	"slug" varchar(1000) NOT NULL DEFAULT 'null',
	CONSTRAINT "products_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "cart" (
	"id" serial NOT NULL,
	"user_id" bigint NOT NULL,
	"product_id" bigint NOT NULL,
	CONSTRAINT "cart_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "favorites" (
	"id" serial NOT NULL,
	"cart_id" bigint NOT NULL,
	"product_id" bigint NOT NULL,
	CONSTRAINT "favorites_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);





ALTER TABLE "cart" ADD CONSTRAINT "cart_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "cart" ADD CONSTRAINT "cart_fk1" FOREIGN KEY ("product_id") REFERENCES "products"("id");

ALTER TABLE "favorites" ADD CONSTRAINT "favorites_fk0" FOREIGN KEY ("cart_id") REFERENCES "cart"("id");
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_fk1" FOREIGN KEY ("product_id") REFERENCES "products"("id");
