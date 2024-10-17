/*
  Warnings:

  - The `learning_style` column on the `user` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `explanation_type` column on the `user` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `hobbies` column on the `user` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "learning_style",
ADD COLUMN     "learning_style" TEXT[],
DROP COLUMN "explanation_type",
ADD COLUMN     "explanation_type" TEXT[],
DROP COLUMN "hobbies",
ADD COLUMN     "hobbies" TEXT[];
