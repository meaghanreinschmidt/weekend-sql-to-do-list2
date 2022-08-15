CREATE TABLE "task" (
	"id" serial primary key,
	"" varchar(50) not null
);

INSERT INTO "task" ("task")
VALUES ('Laundry');

SELECT * FROM "task";

ALTER TABLE "task"
ADD COLUMN "complete" integer default 0;
