-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 01, 2018 at 09:48 PM
-- Server version: 5.6.35
-- PHP Version: 7.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dung_quen`
--

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `task` varchar(255) NOT NULL,
  `status` enum('to do','done') NOT NULL,
  `priority` enum('low','medium','high') NOT NULL,
  `expiry_date` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `user`, `task`, `status`, `priority`, `expiry_date`) VALUES
(83, 62, 'Test', 'to do', 'low', 1522447200),
(84, 62, 'Test', 'to do', 'low', 1522533600),
(85, 62, 'Test', 'to do', 'medium', 1522533600),
(86, 62, 'Test', 'to do', 'high', 1522533600),
(87, 62, 'Test', 'done', 'low', 1522533600),
(88, 62, 'Test', 'to do', 'medium', 1522533600),
(89, 62, 'Test', 'to do', 'low', 1522533600),
(90, 62, 'Test', 'done', 'low', 1522533600),
(91, 62, 'Test', 'to do', 'low', 1522533600),
(92, 62, 'Test', 'to do', 'medium', 1522533600),
(93, 62, 'Test', 'to do', 'high', 1522533600),
(94, 62, 'Test', 'to do', 'low', 1522620000),
(96, 62, 'Test', 'to do', 'high', 1522620000),
(97, 62, 'Test', 'done', 'low', 1522620000),
(98, 62, 'Test', 'to do', 'high', 1522620000),
(99, 62, 'Test', 'to do', 'medium', 1522620000),
(100, 62, 'Test', 'to do', 'low', 1522620000),
(107, 62, 'Test', 'to do', 'low', 1522533600),
(113, 62, 'Test', 'to do', 'high', 1554069600),
(114, 62, 'Test', 'done', 'low', 1554069600),
(115, 62, 'Test', 'to do', 'low', 1554069600),
(116, 62, 'Test', 'to do', 'low', 1533074400),
(117, 62, 'Test', 'to do', 'medium', 1522706400),
(118, 62, 'Test', 'to do', 'low', 1522620000),
(119, 62, 'Test', 'done', 'high', 1522706400),
(120, 62, 'Test with a very very very very very very very very very very very very very very very very very very long text', 'done', 'low', 1522533600);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `password`) VALUES
(62, 'Alain', '0cc175b9c0f1b6a831c399e269772661');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=121;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
