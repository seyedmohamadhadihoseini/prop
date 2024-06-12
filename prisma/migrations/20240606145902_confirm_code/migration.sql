/*
  Warnings:

  - Added the required column `email` to the `confirmCode` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `confirmCode` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `confirmcode` ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL;
