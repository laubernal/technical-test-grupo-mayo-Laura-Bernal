-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: mariadb
-- Tiempo de generación: 12-09-2022 a las 15:36:02
-- Versión del servidor: 10.3.32-MariaDB-1:10.3.32+maria~focal
-- Versión de PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `weather`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cities`
--

CREATE TABLE `cities` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `lat` varchar(80) NOT NULL,
  `lon` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cities`
--

INSERT INTO `cities` (`id`, `name`, `lat`, `lon`) VALUES
(1, 'Aviles', '43.560000000', '-5.930000000'),
(2, 'Barcelona', '41.280000000', '2.070000000'),
(3, 'Burgos', '42.340000000', '-3.700000000'),
(4, 'Albacete', '39.010000000', '-1.860000000'),
(5, 'Ourense', '42.340000000', '-7.860000000');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `climates`
--

CREATE TABLE `climates` (
  `id` int(11) NOT NULL,
  `month` varchar(2) NOT NULL,
  `min_temp` varchar(20) NOT NULL,
  `max_temp` varchar(20) NOT NULL,
  `rain_days` varchar(10) NOT NULL,
  `rain_fall` varchar(10) NOT NULL,
  `city_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `climates`
--

INSERT INTO `climates` (`id`, `month`, `min_temp`, `max_temp`, `rain_days`, `rain_fall`, `city_id`) VALUES
(1, '1', '5.9', '12.9', '16.1', '102.8', 1),
(2, '2', '5.7', '13.1', '14.6', '88.2', 1),
(3, '3', '6.8', '14.6', '14.9', '82.3', 1),
(4, '4', '7.5', '15.1', '16.6', '99.2', 1),
(5, '5', '10.0', '17.3', '16.9', '78.7', 1),
(6, '6', '12.8', '19.6', '11.8', '60.7', 1),
(7, '7', '14.8', '21.5', '11.7', '46.9', 1),
(8, '8', '15.3', '22.3', '11.8', '59.1', 1),
(9, '9', '13.7', '21.2', '12.1', '73.2', 1),
(10, '10', '11.3', '18.7', '15.9', '118.1', 1),
(11, '11', '8.3', '15.3', '16.9', '137.1', 1),
(12, '12', '6.5', '13.4', '17.0', '116.8', 1),
(13, '1', '4.7', '13.6', '5.4', '37.7', 2),
(14, '2', '5.4', '14.3', '5.4', '37.0', 2),
(15, '3', '7.4', '16.1', '6.2', '35.5', 2),
(16, '4', '9.4', '18.0', '6.9', '40.4', 2),
(17, '5', '12.8', '21.1', '6.7', '47.3', 2),
(18, '6', '16.8', '24.9', '5.1', '29.6', 2),
(19, '7', '19.8', '28.0', '3.0', '20.7', 2),
(20, '8', '20.2', '28.5', '6.0', '62.0', 2),
(21, '9', '17.4', '25.8', '6.5', '81.0', 2),
(22, '10', '13.5', '22.1', '8.0', '91.0', 2),
(23, '11', '8.6', '17.3', '6.8', '58.8', 2),
(24, '12', '5.7', '14.3', '6.5', '40.5', 2),
(25, '1', '-0.8', '7.3', '13.4', '43.6', 3),
(26, '2', '-0.8', '9.4', '11.2', '35.0', 3),
(27, '3', '1.1', '13.4', '10.1', '34.4', 3),
(28, '4', '2.7', '14.9', '13.5', '61.3', 3),
(29, '5', '5.9', '19.0', '13.1', '62.7', 3),
(30, '6', '9.2', '24.5', '7.7', '40.7', 3),
(31, '7', '11.5', '28.5', '5.5', '23.3', 3),
(32, '8', '11.5', '28.4', '5.4', '22.8', 3),
(33, '9', '8.8', '24.1', '7.7', '38.3', 3),
(34, '10', '5.9', '17.8', '12.5', '60.2', 3),
(35, '11', '2.2', '11.4', '13.1', '60.2', 3),
(36, '12', '0.2', '8.1', '14.7', '63.3', 3),
(37, '1', '0.6', '11.3', '7.4', '21.2', 4),
(38, '2', '1.7', '13.3', '6.8', '24.2', 4),
(39, '3', '4.0', '16.9', '7.0', '26.9', 4),
(40, '4', '6.1', '18.9', '9.3', '41.5', 4),
(41, '5', '9.9', '23.3', '9.2', '39.4', 4),
(42, '6', '14.5', '29.6', '4.8', '32.9', 4),
(43, '7', '17.5', '33.8', '1.5', '8.1', 4),
(44, '8', '17.5', '33.0', '2.9', '10.1', 4),
(45, '9', '14.0', '27.9', '6.1', '36.2', 4),
(46, '10', '9.5', '21.5', '8.6', '41.5', 4),
(47, '11', '4.6', '15.3', '8.4', '36.4', 4),
(48, '12', '1.8', '11.5', '9.1', '31.3', 4),
(49, '1', '3.3', '12.7', '13.8', '86.4', 5),
(50, '2', '3.2', '15.1', '11.8', '66.5', 5),
(51, '3', '5.0', '18.7', '11.8', '59.0', 5),
(52, '4', '6.7', '19.8', '14.9', '71.7', 5),
(53, '5', '9.4', '22.9', '13.7', '63.5', 5),
(54, '6', '12.8', '27.5', '7.0', '35.9', 5),
(55, '7', '14.8', '30.2', '4.8', '19.9', 5),
(56, '8', '14.5', '30.6', '5.3', '21.5', 5),
(57, '9', '12.3', '27.6', '8.2', '57.2', 5),
(58, '10', '9.6', '21.6', '14.0', '111.3', 5),
(59, '11', '6.3', '15.8', '14.5', '104.8', 5),
(60, '12', '4.1', '12.8', '15.4', '112.3', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `forecasts`
--

CREATE TABLE `forecasts` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `weather` varchar(20) NOT NULL,
  `min_temp` varchar(20) NOT NULL,
  `max_temp` varchar(20) NOT NULL,
  `city_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `forecasts`
--

INSERT INTO `forecasts` (`id`, `date`, `weather`, `min_temp`, `max_temp`, `city_id`) VALUES
(3, '2022-09-12', 'Mostly Cloudy', '18', '25', 1),
(4, '2022-09-13', 'Light Rain', '20', '30', 1),
(5, '2022-09-14', 'Rain', '18', '27', 1),
(6, '2022-09-15', 'Rain', '17', '24', 1),
(7, '2022-09-16', 'Rain', '17', '23', 1),
(8, '2022-09-12', 'Sunny', '23', '31', 2),
(9, '2022-09-13', 'Light Rain', '25', '31', 2),
(10, '2022-09-14', 'Rain', '23', '29', 2),
(11, '2022-09-15', 'Partly Cloudy', '22', '30', 2),
(12, '2022-09-16', 'Scattered Showers', '22', '29', 2),
(13, '2022-09-12', 'Light Rain', '18', '31', 3),
(14, '2022-09-13', 'Rain', '17', '26', 3),
(15, '2022-09-14', 'Light Rain', '12', '25', 3),
(16, '2022-09-15', 'Rain', '11', '25', 3),
(17, '2022-09-16', 'Light Rain', '11', '24', 3),
(18, '2022-09-12', 'Scattered Showers', '20', '35', 4),
(19, '2022-09-13', 'Rain', '16', '25', 4),
(20, '2022-09-14', 'Partly Cloudy', '18', '27', 4),
(21, '2022-09-15', 'Partly Cloudy', '15', '27', 4),
(22, '2022-09-16', 'Partly Cloudy', '13', '28', 4),
(23, '2022-09-12', 'Rain', '19', '32', 5),
(24, '2022-09-13', 'Rain', '17', '28', 5),
(25, '2022-09-14', 'Rain', '16', '26', 5),
(26, '2022-09-15', 'Light Rain', '15', '28', 5),
(27, '2022-09-16', 'Sunny', '14', '30', 5);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `climates`
--
ALTER TABLE `climates`
  ADD PRIMARY KEY (`id`),
  ADD KEY `city_id` (`city_id`);

--
-- Indices de la tabla `forecasts`
--
ALTER TABLE `forecasts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `city_id` (`city_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cities`
--
ALTER TABLE `cities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `climates`
--
ALTER TABLE `climates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT de la tabla `forecasts`
--
ALTER TABLE `forecasts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `climates`
--
ALTER TABLE `climates`
  ADD CONSTRAINT `climates_ibfk_1` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`);

--
-- Filtros para la tabla `forecasts`
--
ALTER TABLE `forecasts`
  ADD CONSTRAINT `forecasts_ibfk_1` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
