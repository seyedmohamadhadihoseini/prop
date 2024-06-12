-- CreateTable
CREATE TABLE `confirmCode` (
    `id` VARCHAR(191) NOT NULL,
    `code` INTEGER NOT NULL,

    UNIQUE INDEX `confirmCode_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
