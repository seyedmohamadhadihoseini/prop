-- AlterTable
ALTER TABLE `user` ADD COLUMN `parentReferralCode` INTEGER NULL,
    ADD COLUMN `referralCode` INTEGER NOT NULL DEFAULT 0;
