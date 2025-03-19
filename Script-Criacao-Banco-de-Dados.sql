CREATE DATABASE ContasAPagar;
USE ContasAPagar

CREATE TABLE Bills (
	Id Int IDENTITY(1,1),
	IDUser Int NOT NULL,
	Title NVARCHAR(255) NOT NULL,
	dueDate Int NOT NULL,
	Amount decimal(18,2) NOT NULL,
	Completed bit NOT NULL
)