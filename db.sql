-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 17, 2024 at 05:09 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db`
--

-- --------------------------------------------------------

--
-- Table structure for table `affectation`
--

CREATE TABLE `affectation` (
  `ID` int(11) NOT NULL,
  `Module` varchar(255) NOT NULL,
  `Professeur` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `affectation`
--

INSERT INTO `affectation` (`ID`, `Module`, `Professeur`) VALUES
(175, 'Gl', 'salima salima'),
(177, 'GP', 'jamila Lakhalifi'),
(178, 'JEE', 'wafae Elhassani'),
(184, 'crypto', 'amina aman');

-- --------------------------------------------------------

--
-- Table structure for table `module`
--

CREATE TABLE `module` (
  `id` int(11) NOT NULL,
  `Nom` varchar(30) NOT NULL,
  `NombresHeures` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `module`
--

INSERT INTO `module` (`id`, `Nom`, `NombresHeures`) VALUES
(15, 'GP', '23'),
(14, 'ML', '22'),
(12, 'Gl', '88'),
(16, 'JEE', '22'),
(17, 'crypto', '23');

-- --------------------------------------------------------

--
-- Table structure for table `paiements`
--

CREATE TABLE `paiements` (
  `ID` int(11) NOT NULL,
  `Module` varchar(30) NOT NULL,
  `Professeur` varchar(30) NOT NULL,
  `Montant` varchar(30) NOT NULL,
  `Etat` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `paiements`
--

INSERT INTO `paiements` (`ID`, `Module`, `Professeur`, `Montant`, `Etat`) VALUES
(76, 'ML', 'aicha sabir', '4000', 'Payé');

-- --------------------------------------------------------

--
-- Table structure for table `professeurs`
--

CREATE TABLE `professeurs` (
  `Nom` varchar(20) NOT NULL,
  `Prenom` varchar(20) NOT NULL,
  `Adresse` varchar(20) NOT NULL,
  `Telephone` varchar(20) NOT NULL,
  `Email` varchar(20) NOT NULL,
  `Tauxhoraire` varchar(20) NOT NULL,
  `PW` varchar(20) NOT NULL,
  `ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `professeurs`
--

INSERT INTO `professeurs` (`Nom`, `Prenom`, `Adresse`, `Telephone`, `Email`, `Tauxhoraire`, `PW`, `ID`) VALUES
('aicha', 'sabir', 'agadir', '0612345678', 'kawtar@gmail.com', '25', '6f2f291d-f978-11ed-8', 20),
('jamila', 'Lakhalifi', 'tiznit', '0612345678', 'jamila@gmail.com', '22', 'c7598984-f978-11ed-8', 21),
('wafae', 'Elhassani', 'sale', '0612345678', 'wafae@gmail.com', '23', 'ee28a6c2-f978-11ed-8', 22),
('MOHAMED', 'ALI', 'CASA', '0612345678', 'ALI@gmail.com', '12', '90bbc848-f9a2-11ed-8', 25),
('amina', 'aman', 'agadir', '0612345678', 'aman@gmail.com', '25', '2d48e9da-f9a6-11ed-8', 26);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `affectation`
--
ALTER TABLE `affectation`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `Module` (`Module`);

--
-- Indexes for table `module`
--
ALTER TABLE `module`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Nom` (`Nom`);

--
-- Indexes for table `paiements`
--
ALTER TABLE `paiements`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `Module` (`Module`);

--
-- Indexes for table `professeurs`
--
ALTER TABLE `professeurs`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `affectation`
--
ALTER TABLE `affectation`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=186;

--
-- AUTO_INCREMENT for table `module`
--
ALTER TABLE `module`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `paiements`
--
ALTER TABLE `paiements`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT for table `professeurs`
--
ALTER TABLE `professeurs`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
