-- CreateEnum
CREATE TYPE "Provider" AS ENUM ('Google');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "display_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "edu_level" TEXT NOT NULL,
    "learning_style" TEXT[],
    "hobbies" TEXT[],
    "explanation_type" TEXT[],
    "onboarding_complete" BOOLEAN NOT NULL DEFAULT false,
    "provider" "Provider" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
