-- CreateTable
CREATE TABLE `ChallengeLow` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `header` VARCHAR(191) NOT NULL,
    `content` MEDIUMTEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
