CREATE TABLE `blog_categories` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`slug` varchar(100) NOT NULL,
	`description` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `blog_categories_id` PRIMARY KEY(`id`),
	CONSTRAINT `blog_categories_name_unique` UNIQUE(`name`),
	CONSTRAINT `blog_categories_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `blog_posts` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(500) NOT NULL,
	`slug` varchar(500) NOT NULL,
	`categoryId` int,
	`status` enum('draft','published','unpublished','scheduled') NOT NULL DEFAULT 'draft',
	`excerpt` text,
	`heroImageUrl` text,
	`heroImageAlt` varchar(500),
	`heroImageCaption` varchar(500),
	`heroImageSource` enum('upload','ai','url') DEFAULT 'upload',
	`contentHtml` longtext,
	`contentJson` json,
	`metaTitle` varchar(200),
	`metaDescription` text,
	`focusKeyword` varchar(200),
	`secondaryKeywords` json,
	`tags` json,
	`canonicalUrl` varchar(500),
	`ogTitle` varchar(200),
	`ogDescription` text,
	`ogImageUrl` text,
	`isIndexed` boolean NOT NULL DEFAULT true,
	`isFollowed` boolean NOT NULL DEFAULT true,
	`geoRegion` varchar(100),
	`geoAudience` varchar(200),
	`authorName` varchar(255) NOT NULL DEFAULT 'MySentry Editorial Team',
	`readTimeMinutes` int DEFAULT 5,
	`wordCount` int DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`publishedAt` timestamp,
	`scheduledAt` timestamp,
	CONSTRAINT `blog_posts_id` PRIMARY KEY(`id`),
	CONSTRAINT `blog_posts_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `blog_redirects` (
	`id` int AUTO_INCREMENT NOT NULL,
	`oldSlug` varchar(500) NOT NULL,
	`newSlug` varchar(500) NOT NULL,
	`postId` int NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `blog_redirects_id` PRIMARY KEY(`id`),
	CONSTRAINT `blog_redirects_oldSlug_unique` UNIQUE(`oldSlug`)
);
