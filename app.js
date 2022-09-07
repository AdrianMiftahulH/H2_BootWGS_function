// ====== catatan ======
// npm audit fix --force ==> bila ada masalah saat install karena jaringan
// npm i validator  ==> untuk istall validator
// npm i -g nodemon ==> Untuk menginstal nodemen tapi tidak secara global

// ====== validator ======
// const validator = require('validator');

// Untuk ngevalidasi Email 
// console.log(validator.isEmail('adrian@gmail.com')); 

// Untuk ngevalidasi No telepon. 
// console.log(validator.isMobilePhone('18965656565', 'id-ID'));


// ===== Task 1 =======
const readline = require('readline');
const fs = require('fs');
const { resolve } = require('path');
const { rejects } = require('assert');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Jika tidak ada folder data
if (!fs.existsSync("./data")) {
    // maka buat folder tersebut
    fs.mkdirSync("./data");
}
// jika tidak ada file di dalam folde data
if (!fs.existsSync("./data/contacts.json")) {
    // maka buat file 
    fs.writeFileSync('./data/contacts.json', "[]");
}

//Buat variabel ask dan function dengan parameter nanya
const ask = (nanya) => {
    //Membuat Promise 
    return new Promise((resolve, reject) => {
        // Menambahkan pertanyaan dengan parameter nanya dan membuat f dengan parameter jawaban
        rl.question(nanya, (jawaban) => {
            // Bila Promisenya resolve akan mengambil parameter jawaban
            resolve(jawaban);
        });
    });
};

// Buat variabel main dengan f async
const main = async () => {
    // Menambahkan Variabel sesuai yang ingin di tanyakan
    const nama = await ask("Siapa nama kamu ? ");
    const noTlpn = await ask("No telepon ? ");
    const email = await ask("Akun email ? ");
    // Mengeluarkan Output
    console.log(`Hai ${nama}, dengan no telepon ${noTlpn}, dengan email ${email}`);

}

main();



// Membuat pertanyaan nama
// rl.question('what is your name ? ', (name) => {
//     // Membuat Pertanyaan no telepon
//     rl.question('no phone ? ', (noPhone) => {
//         // Membuat pertanyaan email
//         rl.question('email ? ', (email) => {
//             // Buat Variabel Contact
//             const contact = { name, noPhone, email };
//             // memanggil respone
//             const file = fs.readFileSync('data/contacts.json', 'utf8');
//             // mengambil string JSON dan mengubah menjadi objek js
//             const contacts = JSON.parse(file);
//             contacts.push(contact);
//             // Membuat data di file contacts.json
//             fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
//             // Output ke terminal sesuai jawaban di pertanyaan
//             console.log(`Thank You ${name}, no phone : ${noPhone}, email : ${email}`);
//             // Keluar dari rl
//             rl.close();
//         });
//     });
// });
