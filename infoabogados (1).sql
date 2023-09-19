create database infoabogadoss;
    use infoabogadoss;

create table login 
(
    id_usuario int not null,
    tipo_documento varchar(35) not null,
    nombre varchar(35) not null,
    apellido varchar(35) not null,
    ciudad varchar (35)not null,
    email varchar(100) not null,
    contrasena varchar(100) not null,
    primary key(id_usuario)
);

create table reservaciones
(
    id_reserva int not null auto_increment,
    nombre_usuario varchar(35) not null,
    desc_caso varchar(99) not null,
    fecha date not null,
    hora date not null,
    profesional varchar (35) not null,
    primary key(id_reserva)
);