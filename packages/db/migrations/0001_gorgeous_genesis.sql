CREATE TABLE IF NOT EXISTS "test" (
	"id" serial NOT NULL,
	"name" text
);
--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "created_at" SET DEFAULT now();