(function ($) {
    //    "use strict";


    /*  Data Table
    -------------*/




    $('#bootstrap-data-table').DataTable({
        lengthMenu: [[10, 20, 50, -1], [10, 20, 50, "All"]],
	});
	
	$('#bootstrap-data-table-1').DataTable({
        lengthMenu: [[10, 20, 50, -1], [10, 20, 50, "All"]],
	});

	$('#bootstrap-data-table-2').DataTable({
        lengthMenu: [[10, 20, 50, -1], [10, 20, 50, "All"]],
	});

	$('#bootstrap-data-table-3').DataTable({
        lengthMenu: [[10, 20, 50, -1], [10, 20, 50, "All"]],
	});

	$('#bootstrap-data-table-4').DataTable({
        lengthMenu: [[10, 20, 50, -1], [10, 20, 50, "All"]],
	});

	$('#bootstrap-data-table-5').DataTable({
        lengthMenu: [[10, 20, 50, -1], [10, 20, 50, "All"]],
	});

	$('#bootstrap-data-table-6').DataTable({
        lengthMenu: [[10, 20, 50, -1], [10, 20, 50, "All"]],
	});

	$('#bootstrap-data-table-sys').DataTable({
        lengthMenu: [[10, 20, 50, -1], [10, 20, 50, "All"]],
    });


    $('#bootstrap-data-table-export').DataTable({
        dom: 'lBfrtip',
        lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });
	
	$('#row-select').DataTable( {
			initComplete: function () {
				this.api().columns().every( function () {
					var column = this;
					var select = $('<select class="form-control"><option value=""></option></select>')
						.appendTo( $(column.footer()).empty() )
						.on( 'change', function () {
							var val = $.fn.dataTable.util.escapeRegex(
								$(this).val()
							);
	 
							column
								.search( val ? '^'+val+'$' : '', true, false )
								.draw();
						} );
	 
					column.data().unique().sort().each( function ( d, j ) {
						select.append( '<option value="'+d+'">'+d+'</option>' )
					} );
				} );
			}
		} );






})(jQuery);