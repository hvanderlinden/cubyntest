create table `parcels` 
(`id` int(11) NOT NULL, `type` varchar(200), `weight` float , `volume` float, `recipient` varchar(250), `address` varchar(250), `city` varchar(250), `zipcode` varchar(250));
ALTER TABLE `parcels` ADD PRIMARY KEY (`id`);
ALTER TABLE `parcels` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;