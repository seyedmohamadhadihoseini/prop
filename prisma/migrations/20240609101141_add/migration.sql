/*
  Warnings:

  - You are about to alter the column `verifyLevel` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `Enum(EnumId(1))`.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `verifyLevel` ENUM('nothing', 'Pending', 'rejected', 'Yes') NULL DEFAULT 'nothing';
