$('#formProduk').submit(function (e) {
    e.preventDefault();

    // Get the form data
    var formData = new FormData(this);
    console.log("FormData:", formData);


    // Additional validation: Check if required fields are not empty
    var requiredFields = ['kode_brg', 'nama_brg', 'harga_brg', 'nama_kategori', 'stok_brg', 'deskripsi_brg'];

    for (var i = 0; i < requiredFields.length; i++) {
        var fieldName = requiredFields[i];

        if (!formData.get(fieldName)) {
            alert('Please fill in all required fields.');
            return;
        }
    }

    // Perform the AJAX request
    $.ajax({
        type: 'POST',
        url: host + "produk/input_produk.php",
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (result) {
            console.log(result);
            window.location.replace("?page=produk_anda");
        },
        error: function (error) {
            console.error(error);
        }
    });
});