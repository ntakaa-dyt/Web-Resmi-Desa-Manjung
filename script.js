let topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>200){
topBtn.style.display="block";
}else{
topBtn.style.display="none";
}

}

function topFunction(){
window.scrollTo({
top:0,
behavior:"smooth"
});
}

document.addEventListener("DOMContentLoaded", () => {
    
    // Efek saat halaman dibuka
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);

    // Efek saat pindah halaman
    document.querySelectorAll("a").forEach(link => {

        // Hanya link internal
        if (
            link.href &&
            link.hostname === window.location.hostname
        ) {
            link.addEventListener("click", function (e) {
                e.preventDefault();

                const tujuan = this.href;

                document.body.classList.add("fade-out");

                setTimeout(() => {
                    window.location.href = tujuan;
                }, 500);
            });
        }
    });

});
