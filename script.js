document.write('<p>Estadisticas centro medico ñuñoa</p>');

var radiologia = [{
        hora: '11:00',
        especialista: 'IGNACIO SCHULZ',
        paciente: 'FRANCISCA ROJAS',
        rut: '9878782-1',
        prevision: 'FONASA'
    },
    {
        hora: '11:30',
        especialista: 'FEDERICO SUBERCASEAUX',
        paciente: 'PAMELA ESTRADA',
        rut: '15345241-3',
        prevision: 'ISAPRE'
    },
    {
        hora: '15:00',
        especialista: 'FERNANDO WURTHZ',
        paciente: 'ARMANDO LUNA',
        rut: '16445345-9',
        prevision: 'ISAPRE'
    },
    {
        hora: '15:30',
        especialista: 'ANA MARIA GODOY',
        paciente: 'MANUEL GODOY',
        rut: '17666419-0',
        prevision: 'FONASA'
    },
    {
        hora: '16:00',
        especialista: 'PATRICIA SUAZO',
        paciente: 'RAMON ULLOA',
        rut: '14989389-K',
        prevision: 'FONASA'
    },
];

var traumatologia = [{
        hora: '08:00',
        especialista: 'MARIA PAZ ALTUZARRA',
        paciente: 'PAULA SANCHEZ',
        rut: '15554774-5',
        prevision: 'FONASA'
    },
    {
        hora: '10:00',
        especialista: 'RAUL ARAYA',
        paciente: 'ANGÉLICA NAVAS',
        rut: '15444147-9',
        prevision: 'ISAPRE'
    },
    {
        hora: '10:30',
        especialista: 'MARIA ARRIAGADA',
        paciente: 'ANA KLAPP',
        rut: '17879423-9',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:00',
        especialista: 'ALEJANDRO BADILLA',
        paciente: 'FELIPE MARDONES',
        rut: '1547423-6',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:30',
        especialista: 'CECILIA BUDNIK',
        paciente: 'DIEGO MARRE',
        rut: '16554741-K',
        prevision: 'FONASA'
    },
    {
        hora: '12:00',
        especialista: 'ARTURO CAVAGNARO',
        paciente: 'CECILIA MENDEZ',
        rut: '9747535-8',
        prevision: 'ISAPRE'
    },
    {
        hora: '12:30',
        especialista: 'ANDRES KANACRI',
        paciente: 'MARCIAL SUAZO',
        rut: '11254785-5',
        prevision: 'ISAPRE'
    },
];

var dental = [{
        hora: '08:30',
        especialista: 'ANDREA ZUÑIGA',
        paciente: 'MARCELA RETAMAL',
        rut: '11123425-6',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:00',
        especialista: 'MARIA PIA ZAÑARTU',
        paciente: 'ANGEL MUÑOZ',
        rut: '9878789-2',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:30',
        especialista: 'SCARLETT WITTING',
        paciente: 'MARIO KAST',
        rut: '7998789-5',
        prevision: 'FONASA'
    },
    {
        hora: '13:00',
        especialista: 'FRANCISCO VON TEUBER',
        paciente: 'KARIN FERNANDEZ',
        rut: '18887662-K',
        prevision: 'FONASA'
    },
    {
        hora: '13:30',
        especialista: 'EDUARDO VIÑUELA',
        paciente: 'HUGO SANCHEZ',
        rut: '17665461-4',
        prevision: 'FONASA'
    },
    {
        hora: '14:00',
        especialista: 'RAQUEL VILLASECA',
        paciente: 'ANA SEPULVEDA',
        rut: '14441281-0',
        prevision: 'ISAPRE'
    },
];

// Desafio

// Ejercicio 1, agregar la lista 
traumatologia.push({
    hora: '09:00',
    especialista: 'RENÉ POBLETE',
    paciente: 'ANA GELLONA',
    rut: '13123329-7',
    prevision: 'ISAPRE'
}, {
    hora: '09:30',
    especialista: 'MARIA SOLAR',
    paciente: 'RAMIRO ANDRADE',
    rut: '12221451-K',
    prevision: 'FONASA'
}, {
    hora: '10:00',
    especialista: 'RAUL LOYOLA',
    paciente: 'CARMEN ISLA',
    rut: '10112348-3',
    prevision: 'ISAPRE'
}, {
    hora: '10:30',
    especialista: 'ANTONIO LARENAS',
    paciente: 'PABLO LOAYZA',
    rut: '13453234-1',
    prevision: 'ISAPRE'
}, {
    hora: '12:00',
    especialista: 'MATIAS ARAVENA',
    paciente: 'SUSANA POBLETE',
    rut: '14345656-6',
    prevision: 'FONASA'
});



//ejercicio 2, eliminar el primer y ultimo elemento de radiologia
radiologia.shift();
radiologia.pop();

// Ejercicio 3, imprimir atenciones dentales separados por un guion con join()
document.write(`<p>Atenciones dentales:</p>`);
dental.forEach((paciente) => {
    const result = Object.values(paciente).join(" - ") + "<br/>";
    document.write(result);
});

//Ejercicio 4, hacer una lista de todos los pacientes actualizados
let pacientes = [];
radiologia.forEach(consulta => {
    pacientes.push(consulta.paciente);
});
traumatologia.forEach(consulta => {
    pacientes.push(consulta.paciente);
});
dental.forEach(consulta => {
    pacientes.push(consulta.paciente)
});

document.write(`<p>Listado de pacientes Actualizado: </p>`)
pacientes.forEach((paciente, i) => {
    document.write(`<p>${i+1}) ${paciente} </p>`);
});


//Ejercicio 5, filtrar por pacientes que sean isapre en dental
document.write(`<br><p>Pacientes con prevision isapre de Dental:<p/>`)
var pacientes_dental = dental.filter((pre) => {
    if (pre.prevision === "ISAPRE") {
        document.write(`${pre.paciente} - ${pre.prevision} <br>`)
    }
});

//Ejercicio 6, filtrar por pacientes que sean FONASA en traumatologia
document.write(`<br><p>Pacientes con prevision fonasa de traumatologia:<p/>`)
var pacientes_traumatologia = traumatologia.filter((pre) => {
    if (pre.prevision === "FONASA") {
        document.write(`${pre.paciente} - ${pre.prevision} <br>`)
    }
})