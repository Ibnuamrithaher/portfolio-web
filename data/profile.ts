// data/profile.ts
export const experiences = [
  {
    company: "PT Golden Digital",
    role: {
      id: "Backend Developer",
      en: "Backend Developer"
    },
    period: "Feb 2026 - Present",
    desc: {
      id: "Merancang dan mengembangkan arsitektur backend yang tangguh untuk platform top-up game dan pemesanan aplikasi premium. Berkolaborasi erat dengan tim frontend dalam mendesain ekosistem transaksi digital yang cepat, responsif, dan terukur.",
      en: "Designing and developing robust backend architectures for game top-up platforms and premium application ordering. Collaborating closely with frontend teams to design fast, responsive, and scalable digital transaction ecosystems."
    },
    bullets: {
      id: [
        "Menghubungkan sistem dengan payment gateway untuk memastikan seluruh transaksi diproses secara otomatis, real-time, dan aman.",
        "Meningkatkan keamanan dan efisiensi sistem melalui implementasi autentikasi pihak ketiga dan otomatisasi pemrosesan pesanan berbasis AI."
      ],
      en: [
        "Connecting systems with payment gateways to ensure all transactions are processed automatically, real-time, and securely.",
        "Improving system security and efficiency through the implementation of third-party authentication and AI-based order processing automation."
      ]
    }
  },
  {
    company: "Independent Contractor (Freelance)",
    role: {
      id: "Full Stack Web Developer",
      en: "Full Stack Web Developer"
    },
    period: "Feb 2022 - Present",
    desc: {
      id: "Mengembangkan berbagai macam platform digital end-to-end. Memastikan kinerja server yang stabil, pengalaman pengguna yang lancar melalui pemeliharaan rutin, perbaikan bug, dan pengoptimalan kode.",
      en: "Developing various end-to-end digital platforms. Ensuring stable server performance and smooth user experience through routine maintenance, bug fixes, and code optimization."
    },
    bullets: {
      id: [
        "Platform E-Commerce B2C: Membangun toko daring dengan integrasi payment gateway, sistem loyalitas, filter produk dinamis, dan sistem RBAC.",
        "Sistem Point of Sale (POS): Mengembangkan kasir digital untuk manajemen inventaris real-time dan pencatatan laporan keuangan otomatis.",
        "Portal Manajemen Waralaba F&B: Merancang sistem berlangganan (subscription-based) untuk pemilihan dan pembelian paket kemitraan.",
        "Website Museum Bali: Membuat antarmuka interaktif menggunakan React untuk pengenalan dan perluasan kehadiran digital museum."
      ],
      en: [
        "B2C E-Commerce Platform: Building online stores with payment gateway integration, loyalty systems, dynamic product filters, and RBAC systems.",
        "Point of Sale (POS) System: Developing digital cashiers for real-time inventory management and automatic financial report recording.",
        "F&B Franchise Management Portal: Designing subscription-based systems for selection and purchase of partnership packages.",
        "Bali Museum Website: Creating interactive interfaces using React to introduce and expand the museum's digital presence."
      ]
    }
  },
  {
    company: "PT Sistem Teknologi Artificial",
    role: {
      id: "Leader Tim Web Developer",
      en: "Web Developer Team Lead"
    },
    period: "Aug 2022 - Jan 2024",
    desc: {
      id: "Memimpin tim developer dalam membangun dan meluncurkan platform SaaS terintegrasi (Freemium) yang mencakup solusi e-commerce, digital marketing, dan manajemen logistik secara komprehensif.",
      en: "Leading a developer team in building and launching an integrated SaaS platform (Freemium) covering comprehensive e-commerce, digital marketing, and logistics management solutions."
    },
    bullets: {
      id: [
        "Membangun fitur Form & Landing Page Builder spesifik kustom beserta integrasi API pihak ketiga (reseller domain).",
        "Mengembangkan arsitektur checkout multi-address dan menyelesaikan logika sistem keranjang belanja yang dinamis untuk voucher, poin, dan diskon.",
        "Mengimplementasikan modul manajemen logistik pengiriman lokal end-to-end serta sistem afiliasi dengan komisi otomatis.",
        "Mengelola task management harian dan memberikan eskalasi arahan teknis serta pelaporan strategis kepada pihak manajemen."
      ],
      en: [
        "Building specific custom Form & Landing Page Builder features along with third-party API integration (domain resellers).",
        "Developing multi-address checkout architecture and resolving dynamic shopping cart system logic for vouchers, points, and discounts.",
        "Implementing end-to-end local shipping logistics management modules and affiliate systems with automatic commissions.",
        "Managing daily task management and providing technical direction escalation and strategic reporting to management."
      ]
    }
  },
  {
    company: "PT Jasa Medika Samanta",
    role: {
      id: "Operator IT",
      en: "IT Operator"
    },
    period: "Feb 2022 - May 2022",
    desc: {
      id: "Bertindak sebagai garda terdepan (first-line support) IT untuk Sistem Informasi Manajemen Rumah Sakit (SIMRS) di fasilitas kesehatan, mengelola penggunaan lebih dari 32 modul yang berbeda.",
      en: "Acting as the first-line support for IT Hospital Management Information Systems (SIMRS) in healthcare facilities, managing the use of over 32 different modules."
    },
    bullets: {
      id: [
        "Memberikan panduan operasional (troubleshooting) bagi berbagai jenis pengguna: dokter, perawat, hingga staf finansial.",
        "Melakukan triase (pemilahan bug aplikasi vs user-error) dan memastikan dokumentasi eskalasi tepat kepada tim web programmer.",
        "Secara proaktif menyelesaikan gangguan kecil terkait infrastruktur komputer operasional ketika tim teknisi sedang berhalangan."
      ],
      en: [
        "Providing operational guidance (troubleshooting) for various types of users: doctors, nurses, and financial staff.",
        "Performing triage (distinguishing app bugs vs user errors) and ensuring accurate escalation documentation to the web programmer team.",
        "Proactively resolving minor operational computer infrastructure issues when technicians are unavailable."
      ]
    }
  },
  {
    company: "PT Telkomsel Indonesia",
    role: {
      id: "Backend Developer Intern",
      en: "Backend Developer Intern"
    },
    period: "Aug 2021 - Feb 2022",
    desc: {
      id: "Bertanggung jawab atas pengembangan infrastruktur backend pada proyek internal Knowledge Management System (KMS) guna memfasilitasi forum diskusi ala Quora lintas tim.",
      en: "Responsible for backend infrastructure development on an internal Knowledge Management System (KMS) project to facilitate Quora-style discussion forums across teams."
    },
    bullets: {
      id: [
        "Merancang basis data relasional serta membuat titik integrasi API (endpoints) untuk sistem interaksi, Q&A, dan kategori User-Generated Content.",
        "Membangun sistem panel administrasi pusat dengan kontrol akses (RBAC) untuk membantu moderasi konten platform yang lebih baik."
      ],
      en: [
        "Designing relational databases and creating API integration endpoints for interaction systems, Q&A, and User-Generated Content categories.",
        "Building a central administration panel system with access control (RBAC) to better assist platform content moderation."
      ]
    }
  }
];

export const certifications = {
  it: [
    { 
      title: { id: "Cloud Practitioner Essentials (AWS)", en: "Cloud Practitioner Essentials (AWS)" }, 
      issuer: { id: "AWS / Dicoding", en: "AWS / Dicoding" }, 
      year: "Tech", icon: "☁️", link: "/sertifikat/Sertivikat Kelulusan Kelas Cloud Practitioner Essentials (Belajar Dasar AWS Cloud).pdf" 
    },
    { 
      title: { id: "Sertifikat Web Server Hardening", en: "Web Server Hardening Certificate" }, 
      issuer: { id: "DTS Kominfo / Lembaga Pelatihan", en: "DTS Kominfo / Training Institute" }, 
      year: "Tech", icon: "🛡️", link: "/sertifikat/Ibnu Amri T_Sertifikat Web Server Hardening (1).pdf" 
    },
    { 
      title: { id: "Membuat Aplikasi Android Pemula", en: "Android App Development for Beginners" }, 
      issuer: { id: "Dicoding Indonesia", en: "Dicoding Indonesia" }, 
      year: "Course", icon: "📱", link: "/sertifikat/Sertivikat Belajar Membuat Aplikasi Android Untuk Pemula Dari Dicoding.pdf" 
    },
    { 
      title: { id: "Front-End Web Pemula (Landing Page)", en: "Front-End Web Development (Landing Page)" }, 
      issuer: { id: "Dicoding Indonesia", en: "Dicoding Indonesia" }, 
      year: "Course", icon: "🖥️", link: "/sertifikat/CERTIFICATE_LANDING_PAGE_ARXR82TJ2MZY.jpeg (1772×928).jpg" 
    },
    { 
      title: { id: "Digital Marketing", en: "Digital Marketing" }, 
      issuer: { id: "Lembaga Pelatihan", en: "Training Institute" }, 
      year: "Training", icon: "📈", link: "/sertifikat/Sertivikat Digital Marketing.pdf" 
    },
    { 
      title: { id: "Programming PHP", en: "PHP Programming" }, 
      issuer: { id: "Progate / Sololearn", en: "Progate / Sololearn" }, 
      year: "Course", icon: "🐘", link: "/sertifikat/PHP.pdf" 
    },
    { 
      title: { id: "Programming JavaScript", en: "JavaScript Programming" }, 
      issuer: { id: "Progate / Sololearn", en: "Progate / Sololearn" }, 
      year: "Course", icon: "🟨", link: "/sertifikat/JavaScript.pdf" 
    },
    { 
      title: { id: "HTML & CSS", en: "HTML & CSS" }, 
      issuer: { id: "Progate / Sololearn", en: "Progate / Sololearn" }, 
      year: "Course", icon: "🌐", link: "/sertifikat/HTML & CSS.pdf" 
    },
    { 
      title: { id: "Command Line Fundamentals", en: "Command Line Fundamentals" }, 
      issuer: { id: "Platform Course", en: "Online Course" }, 
      year: "Course", icon: "⌨️", link: "/sertifikat/Comand Line.pdf" 
    },
  ],
  academic: [
    { 
      title: { id: "TOEFL ITP", en: "TOEFL ITP" }, 
      issuer: { id: "Pusat Bahasa", en: "Language Center" }, 
      year: "English", icon: "🌎", link: "/sertifikat/TOFEL ITP.pdf" 
    },
    { 
      title: { id: "TPA BAPPENAS", en: "TPA BAPPENAS (Academic Potential Test)" }, 
      issuer: { id: "Bappenas RI", en: "National Development Planning Agency" }, 
      year: "Exam", icon: "🧠", link: "/sertifikat/TPA BAPPENAS.pdf" 
    },
    { 
      title: { id: "Asisten Praktikum", en: "Lab Teaching Assistant" }, 
      issuer: { id: "Universitas Mulawarman", en: "Mulawarman University" }, 
      year: "Academic", icon: "👨‍🏫", link: "/sertifikat/Asisten Praktikum.jpg" 
    },
    { 
      title: { id: "Penghargaan Fakultas Teknik", en: "Engineering Faculty Outstanding Student Award" }, 
      issuer: { id: "Universitas Mulawarman", en: "Mulawarman University" }, 
      year: "Award", icon: "🥇", link: "/sertifikat/sertiv_penghargaan_teknik.pdf" 
    },
  ],
  org: [
    { 
      title: { id: "Magang MSIB (Back End Developer)", en: "Certified Internship MSIB (Back End Developer)" }, 
      issuer: { id: "PT Telkomsel", en: "PT Telkomsel Indonesia" }, 
      year: "Internship", icon: "🏢", link: "/sertifikat/Magang Kampus Merdeka Back End Developer PT Telkomsel.pdf" 
    },
    { 
      title: { id: "Sertifikat GEMASTIK", en: "GEMASTIK National Competition Certificate" }, 
      issuer: { id: "Puspresnas / Kemdikbud", en: "Ministry of Education & Culture" }, 
      year: "National", icon: "🏆", link: "/sertifikat/E-Sertifikat Gemastik-Ibnu Amri T.pdf" 
    },
    { 
      title: { id: "Staff Biro Riset & Pengembangan", en: "Staff of R&D Bureau" }, 
      issuer: { id: "BEM KM Unmul", en: "University Student Executive Board" }, 
      year: "Organization", icon: "📋", link: "/sertifikat/Sertivikat Staff Biro Riset dan Pengembangan BEM KM Unmul.pdf" 
    },
    { 
      title: { id: "Pengurus KAMMI", en: "KAMMI Executive Member" }, 
      issuer: { id: "KAMMI", en: "KAMMI Organization" }, 
      year: "Organization", icon: "🤝", link: "/sertifikat/KAMII.png" 
    },
    { 
      title: { id: "Peserta Fighter Camp UKM PSHT", en: "Martial Arts Fighter Camp Participant" }, 
      issuer: { id: "UKM PSHT Unmul", en: "PSHT Martial Arts Club" }, 
      year: "Martial Arts", icon: "🥋", link: "/sertifikat/Peserta Fighter Camph UKM PSHT Unmul.pdf" 
    },
    { 
      title: { id: "Seminar: Melatih Mental Juara", en: "Webinar: Training a Champion Mindset" }, 
      issuer: { id: "Kepanitiaan Daring", en: "Online Committee" }, 
      year: "Webinar", icon: "🎙️", link: "/sertifikat/Partisipasi Seminar Daring dengan tema Melatih Mental Juara Di Masa Pandemi.jpeg" 
    },
  ]
};

export const research = [
  {
    title: {
      id: "Optimization Of Earthquake Prediction System: Comparative Analysis Of Conventional And Multiresolution grid with Artificial Intelligence",
      en: "Optimization Of Earthquake Prediction System: Comparative Analysis Of Conventional And Multiresolution grid with Artificial Intelligence"
    },
    year: "2026",
    link: "#",
    publisher: "Ongoing Research"
  },
  {
    title: {
      id: "Investigating Anomalies in Diabetes Time-Series Data Using Boosting Algorithms Family: A Comparative Study of Ensemble Approaches",
      en: "Investigating Anomalies in Diabetes Time-Series Data Using Boosting Algorithms Family: A Comparative Study of Ensemble Approaches"
    },
    year: "2024",
    link: "https://ieeexplore.ieee.org/abstract/document/10963471",
    publisher: "IEEE"
  },
  {
    title: {
      id: "Classification of Employee Performance Quality Using the K-Means Clustering Approach",
      en: "Classification of Employee Performance Quality Using the K-Means Clustering Approach"
    },
    year: "2022",
    link: "https://ojs.unikom.ac.id/index.php/komputika/article/download/5518/3164/24122",
    publisher: "Komputika"
  }
];