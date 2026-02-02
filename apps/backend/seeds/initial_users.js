import { hmac, formatDateSystem } from "../routes/v1/components/tools/general.js";

export async function seed(knex) {
  // 1. Bersihkan semua tabel terkait untuk reset total
  await knex("user_navigation").del();
  await knex("user_credential").del();
  await knex("mst_navigation").del();

  const dNow = formatDateSystem();
  const cUserKey = process.env.USER_KEY;
  const cSecret = process.env.USER_SECRET;

  // MASTER NAVIGATION DATA 
  const vaMstNavigation = [
    { Role: 'master', Menu: '[{"label":"ADMIN PANEL","items":[{"label":"Data User","icon":"pi pi-users","to":"/setup/user-login"}]}]' },
    { Role: 'guru', Menu: '[{"label":"MENU GURU","items":[{"label":"E-Learning","icon":"pi pi-book","to":"/guru/materi"}]}]' },
    { Role: 'siswa', Menu: '[{"label":"MENU SISWA","items":[{"label":"Tugas Saya","icon":"pi pi-pencil","to":"/siswa/tugas"}]}]' },
    { Role: 'masyarakat', Menu: '[{"label":"LAYANAN PUBLIK","items":[{"label":"Pengaduan","icon":"pi pi-megaphone","to":"/public/report"}]}]' }
  ];

  await knex("mst_navigation").insert(vaMstNavigation.map((nav, index) => ({
    Id: index + 1,
    Role: nav.Role,
    Menu: nav.Menu,
    CreatedAt: dNow
  })));

  // USER CREDENTIAL DATA 
  const vaUsers = [
    { UniqueId: "USR000001", Username: "admin@isekai.go.id", Fullname: "Administrator Dinas", Telp: "081234567890", Role: "admin", PasswordRaw: "AdminIsekai123!", Menu: vaMstNavigation[0].Menu },
    { UniqueId: "USR000002", Username: "guru@isekai.sch.id", Fullname: "Budi Setiawan, S.Pd", Telp: "081299998888", Role: "guru", PasswordRaw: "GuruIsekai123!", Menu: vaMstNavigation[1].Menu },
    { UniqueId: "USR000003", Username: "siswa@isekai.sch.id", Fullname: "Andi Pratama", Telp: "085711112222", Role: "siswa", PasswordRaw: "SiswaIsekai123!", Menu: vaMstNavigation[2].Menu },
    { UniqueId: "USR000004", Username: "masyarakat@gmail.com", Fullname: "Siti Aminah", Telp: "089877776666", Role: "masyarakat", PasswordRaw: "WargaIsekai123!", Menu: vaMstNavigation[3].Menu }
  ];

  for (let i = 0; i < vaUsers.length; i++) {
    const user = vaUsers[i];
    const cRawPass = cUserKey + user.UniqueId + user.PasswordRaw;
    const cHashedPassword = hmac(cRawPass, cSecret, 'sha512');

    // Insert Credential
    await knex("user_credential").insert({
      Id: i + 1,
      UniqueId: user.UniqueId,
      Username: user.Username,
      Fullname: user.Fullname,
      Telp: user.Telp,
      Role: user.Role,
      Status: "1",
      Password: cHashedPassword,
      CreatedAt: dNow,
      UpdatedAt: dNow
    });

    // Insert Navigation matching with Credential
    await knex("user_navigation").insert({
      Id: i + 1,
      UniqueId: user.UniqueId,
      Menu: user.Menu,
      CreatedAt: dNow,
      UpdatedAt: dNow
    });
  }

  console.log("Full Database Seeding Successful!");
}