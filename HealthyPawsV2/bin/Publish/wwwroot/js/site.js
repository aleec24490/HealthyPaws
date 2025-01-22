// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//Toastr y Confirmacion para Borrado Logico de Mascotas
$('.BorrarElemento').click(function (event) {
    event.preventDefault();
    var url = $(this).attr('href');
    var estadoMascota = $(this).data('estado');

    var estadoBool = (estadoMascota.toLowerCase() === 'true');

    if (!estadoBool) {
        toastr.options.positionClass = 'toast-top-center';
        toastr.info('El Elemento que esta intentando eliminar ya se encuentra Inactivo.');
        return;
    }

    if (confirm('¿Estás seguro de que deseas eliminar este elemento?')) {
        toastr.options.positionClass = 'toast-top-center';
        toastr.success('Usted ha Eliminado un Elemento Correctamente');
        setTimeout(function () {
            window.location.href = url;
        }, 3000);
    }


});

$('.CrearMedicamentoBtn').click(function (event) {
    
    event.preventDefault();
    toastr.options.positionClass = 'toast-top-center';
    toastr.success('El medicamento fue añadido correctamente a la cita.');

    setTimeout(function () {
        var form = $(this).closest('form');
        form.submit(); 
    }.bind(this), 3000); 
});

$('.CrearExamenBtn').click(function (event) {

    event.preventDefault();
    toastr.options.positionClass = 'toast-top-center';
    toastr.success('El Examen fue añadido correctamente a la cita.');

    setTimeout(function () {
        var form = $(this).closest('form');
        form.submit();
    }.bind(this), 3000);
});



