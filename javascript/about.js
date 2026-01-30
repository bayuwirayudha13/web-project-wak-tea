const navMenu = document.querySelector('.nav-menu');

// KETIKA HAMBURGER MENU DIKLIK
document.querySelector('#hamburger-menu').onclick = () => {
    navMenu.classList.toggle('active');
};

//KLIK DILUAR SIDEBAR UNTUK MENGHILANGKAN SIDEBAR
const hamburgerMenu = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (event) {
    if (!hamburgerMenu.contains(event.target) && !navMenu.contains(event.targer)) {
        navMenu.classList.remove('active');
    }
});

//menu 

const daftarMenu = [{
        nama: "Teh Tarik Original",
        harga: "Rp 15.000",
        img: "image/about image.jpg",
        desc: "Perpaduan teh pilihan dan susu kental manis."
    },
    {
        nama: "Green Tea Latte",
        harga: "Rp 18.000",
        img: "image/about image.jpg",
        desc: "Matcha kualitas premium dengan susu segar."
    },
    {
        nama: "Lemon Tea Ice",
        harga: "Rp 12.000",
        img: "image/about image.jpg",
        desc: "Kesegaran lemon asli untuk hari yang panas."
    },
];

const container = document.getElementById('menu-container');

daftarMenu.forEach(item => {
    container.innerHTML += `
        <div class="col-lg-4 col-md-6 d-flex justify-content-center">
            <div class="card custom-card">
                <div class="card-img-container">
                    <img src="${item.img}" class="card-img-top" alt="${item.nama}">
                </div>
                <div class="card-body text-center">
                    <h5 class="card-title">${item.nama}</h5>
                    <p class="card-text">${item.desc}</p>
                    <p class="fw-bold text-success">${item.harga}</p>
                    <a href="#" class="btn btn-primary">Pesan Sekarang</a>
                </div>
            </div>
        </div>
    `;
});

//lokasi

const daftarlokasi = [{
        nama: "Waktea - Sedati",
        alamat: "Jl. Raya Buncitan No 95, Dusun Buncitan, Buncitan, Kec. Sedati, Kabupaten Sidoarjo, Jawa Timur 61253",
        no_telp: "0812-3456-7890",
        img: "https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/ExtraLarge/20241130064950-beb268b7-1ed4-4636-9f9e-f479b7b10882.jpg",
        jam_buka: "10.00 - 22.00 WIB",
        lokasi: "https://maps.app.goo.gl/5FMyd8yrxQSFr4G77"
    },

    {
        nama: "Waktea - Sidoarjo",
        alamat: "Jl. Gajah Mada No.50, Rw3, Sidokumpul, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61212",
        no_telp: "0896-5432-1098",
        img: "https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/ExtraLarge/mild-steel-container-coffee-sh-20251215181308981.webp",
        jam_buka: "10.00 - 22.00 WIB",
        lokasi: "https://maps.app.goo.gl/4jnskvan5rNPLvC87"
    },
]

const locationContainer = document.getElementById('location-container');

daftarlokasi.forEach(item => {
    locationContainer.innerHTML += `
    <div class="col-lg-4 col-md-6 d-flex justify-content-center">
        <div class="card custom-card">
            <div class="card-img-container">
                <img src="${item.img}" class="card-img-top" alt="${item.nama}">
            </div>
            <div class="card-body text-center d-flex flex-column">
                <h5 class="card-title">${item.nama}</h5>
                <p class="card-text mb-2 small">${item.alamat}</p>
                <p class="fw-bold text-success mb-1">Jam buka: ${item.jam_buka}</p>
                <p class="fw-bold text-success mb-3">No Telp: ${item.no_telp}</p>
                
                <div class="mt-auto">
                    <a href="${item.lokasi}" target="_blank" class="btn btn-primary">Lihat Lokasi</a>
                </div>
            </div>
        </div>
    </div>`
});