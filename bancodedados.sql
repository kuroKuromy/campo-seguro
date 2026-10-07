CREATE DATABASE campo_seguro;

USE campo_seguro;

CREATE TABLE votos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ip VARCHAR(45) NOT NULL,
    tipo ENUM('LIKE', 'DESLIKE') NOT NULL,
    data_voto TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(ip)
);