// command dibawah merupakan fungsi Submit, dengan menggunakan library swal/sweetalert, nantinya akan menampilkan pesan success dan membuka halaman index1.html setelah mengonfirmasi pesan
function Submit() {
    Swal.fire({
        title: "Login Success",
        icon: "success"
    }).then((result) => {
        if (result.isConfirmed){
            window.location.href = "index1.html";
        }
    })
}
