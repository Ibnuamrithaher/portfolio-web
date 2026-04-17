// data/projects.ts

export interface ProjectData {
  id: number;
  title: string;
  role?: { id: string; en: string };
  background: { id: string; en: string };
  jobDesk?: { id: string[]; en: string[] };
  achievements?: { id: string[]; en: string[] };
  metadata?: {
    year?: string;
    type?: { id: string; en: string };
    client?: string;
  };
  link?: string;
  github?: string;
  gitlab?: string;
  techStack: string[];
  image?: string;
  isPublic?: boolean;
  images?: string[];
}

export const projects: ProjectData[] = [
  {
    id: 9,
    title: "Game Top-Up & Subscription",
    role: { id: "Backend Software Engineer", en: "Backend Software Engineer" },
    background: {
      id: "Platform pasar digital skala besar yang memproses transaksi top-up game (Diamond, Cash) dan layanan aplikasi premium (Netflix, Vision+, Spotify, dll) secara real-time. Fokus utama proyek ini adalah pada keamanan transaksi, otomatisasi sistem, dan skalabilitas backend.",
      en: "A large-scale digital marketplace platform processing real-time game top-ups (Diamond, Cash) and premium app subscriptions (Netflix, Vision+, Spotify, etc.). The primary focus of this project was on transaction security, system automation, and backend scalability."
    },
    jobDesk: {
      id: [
        "Mengembangkan arsitektur microservices core backend menggunakan NestJS dan PostgreSQL untuk menangani volume transaksi tinggi.",
        "Mengintegrasikan payment gateway multi-channel (Uniplay, Tokopay) dengan implementasi webhook yang aman.",
        "Membangun logika otomatisasi pemrosesan pesanan menggunakan cekatAI untuk efisiensi operasional.",
        "Mengimplementasikan sistem autentikasi OAuth Google untuk keamanan dan kemudahan akses pengguna."
      ],
      en: [
        "Developed a core backend microservices architecture using NestJS and PostgreSQL to handle high transaction volumes.",
        "Integrated multi-channel payment gateways (Uniplay, Tokopay) with secure webhook implementation.",
        "Built order processing automation logic using cekatAI for operational efficiency.",
        "Implemented Google OAuth authentication system for user security and ease of access."
      ]
    },
    achievements: {
      id: [
        "Menjamin ketersediaan sistem (Uptime) 99.9% selama periode traffic puncak.",
        "Berhasil memproses ribuan transaksi per hari secara otomatis tanpa intervensi manual.",
        "Meningkatkan kepercayaan pengguna melalui sistem pemrosesan pembayaran yang aman dan transparan."
      ],
      en: [
        "Guaranteed 99.9% system uptime during peak traffic periods.",
        "Successfully processed thousands of transactions per day automatically without manual intervention.",
        "Increased user trust through a secure and transparent payment processing system."
      ]
    },
    metadata: {
      year: "2026",
      type: { id: "Fintech / E-Commerce", en: "Fintech / E-Commerce" },
      client: "PT Golden Digital"
    },
    github: "https://github.com/ibnuamrithaher/topup-nexus",
    link: "https://temansantaimu.com",
    techStack: ["NestJS", "PostgreSQL", "Vue.js", "Redis", "Uniplay API"],
    image: "/projects/image13.png",
    images: ["/projects/image13.png", "/projects/image14.png", "/projects/image15.png", "/projects/image16.png"]
  },
  {
    id: 12,
    title: "Mini Lemon Ice Cream & Tea",
    role: { id: "Full Stack Web Developer", en: "Full Stack Web Developer" },
    background: {
      id: "Platform korporat dan e-commerce dinamis yang dirancang untuk memperkuat identitas brand Mini Lemon di pasar F&B. Project ini mencakup solusi digital lengkap mulai dari katalog produk interaktif hingga sistem manajemen kemitraan yang terintegrasi untuk mendukung ekspansi bisnis skala nasional.",
      en: "A dynamic corporate and e-commerce platform designed to strengthen the Mini Lemon brand identity in the F&B market. This project encompasses a complete digital solution from interactive product catalogs to integrated partnership management systems to support national-scale business expansion."
    },
    jobDesk: {
      id: [
        "Membangun antarmuka pengguna yang responsif menggunakan Vue.js dan Tailwind CSS untuk menjamin pengalaman pengguna yang mulus di berbagai perangkat.",
        "Merancang arsitektur sistem yang mendukung manajemen konten produk secara dinamis dan efisien.",
        "Mengimplementasikan sistem formulir inquiry kemitraan yang aman untuk menangkap dan mengelola prospek bisnis baru.",
        "Melakukan optimasi performa menggunakan Vite untuk memastikan kecepatan pemuatan halaman yang optimal."
      ],
      en: [
        "Built a responsive user interface using Vue.js and Tailwind CSS to ensure a seamless user experience across various devices.",
        "Designed a system architecture that supports dynamic and efficient product content management.",
        "Implemented a secure partnership inquiry form system to capture and manage new business leads.",
        "Performed performance optimization using Vite to ensure optimal page loading speeds."
      ]
    },
    achievements: {
      id: [
        "Berhasil meningkatkan kehadiran digital brand dengan fitur katalog produk yang informatif dan menarik.",
        "Menyederhanakan proses pendaftaran mitra waralaba melalui sistem formulir yang terautomasi.",
        "Mencapai skor performa Lighthouse yang tinggi melalui praktik pengembangan web yang modern."
      ],
      en: [
        "Successfully increased digital brand presence with an informative and engaging product catalog feature.",
        "Simplified the franchise partner registration process through an automated form system.",
        "Achieved high Lighthouse performance scores through modern web development practices."
      ]
    },
    metadata: {
      year: "2025",
      type: { id: "E-Commerce / Korporat", en: "E-Commerce / Corporate" },
      client: "Mini Lemon Indonesia"
    },
    github: "https://github.com/ibnuamrithaher/mini-lemon",
    link: "https://minilemon.com",
    techStack: ["Vue.js", "Tailwind CSS", "Vite", "JavaScript"],
    image: "/projects/image1.png",
    images: ["/projects/image1.png", "/projects/image2.png", "/projects/image3.png", "/projects/image4.png"]
  },
  {
    id: 11,
    title: "Survive in the Crossfire",
    role: { id: "Lead Game Developer", en: "Lead Game Developer" },
    background: {
      id: "Proyek pengembangan game aksi multiplayer Free-For-All (FFA) yang kompetitif di platform Roblox. Game ini dirancang dengan fokus pada mekanik pertempuran yang intens, sinkronisasi data real-time, dan sistem retensi pemain yang kuat.",
      en: "A competitive multiplayer Free-For-All (FFA) action game development project on the Roblox platform. This game was designed with a focus on intense combat mechanics, real-time data synchronization, and strong player retention systems."
    },
    jobDesk: {
      id: [
        "Mengembangkan logika permainan kompleks menggunakan bahasa pemrograman Luau untuk mekanik tempur, sistem persenjataan, dan rule-set game.",
        "Merancang arsitektur Client-Server yang tangguh untuk meminimalisir latensi dan memastikan sinkronisasi data antar pemain secara real-time.",
        "Mengelola persistensi data pemain (XP, Kills, Inventory) menggunakan layanan Roblox DataStore API.",
        "Membangun sistem Leaderboard global dan regional untuk mendorong kompetisi antar pemain."
      ],
      en: [
        "Developed complex game logic using the Luau programming language for combat mechanics, weaponry systems, and game rule-sets.",
        "Designed a robust Client-Server architecture to minimize latency and ensure real-time data synchronization between players.",
        "Managed player data persistence (XP, Kills, Inventory) using the Roblox DataStore API services.",
        "Built global and regional leaderboard systems to foster competition among players."
      ]
    },
    achievements: {
      id: [
        "Membangun komunitas pemain yang aktif dengan mekanik permainan yang balance dan kompetitif.",
        "Mengoptimalkan performa game sehingga dapat berjalan lancar di berbagai perangkat mobile maupun desktop.",
        "Menyelesaikan tantangan teknis dalam sinkronisasi fisika peluru dan haptic feedback untuk pengalaman bermain yang imersif."
      ],
      en: [
        "Built an active player community with balanced and competitive game mechanics.",
        "Optimized game performance so that it runs smoothly on various mobile and desktop devices.",
        "Solved technical challenges in bullet physics synchronization and haptic feedback for an immersive gaming experience."
      ]
    },
    metadata: {
      year: "2025",
      type: { id: "Pengembangan Game", en: "Game Development" }
    },
    github: "https://github.com/ibnuamrithaher/roblox-survive",
    link: "https://www.roblox.com/share?code=779c99ac59e542499e3ea1b4f2ad4e6b&type=ExperienceDetails&stamp=1760891740252",
    techStack: ["Luau", "Roblox Studio", "3D Modeling", "DataStore API"],
    image: "/projects/image5.png",
    isPublic: true,
    images: ["/projects/image5.png", "/projects/image6.png", "/projects/image7.png", "/projects/image8.png"]
  },
  {
    id: 10,
    title: "Museum Profile & AR Hub",
    role: { id: "Frontend Engineer", en: "Frontend Engineer" },
    background: {
      id: "Sebuah hub informasi digital inovatif yang menjembatani pameran fisik museum dengan teknologi masa depan. Website ini berfungsi sebagai gerbang utama bagi wisatawan untuk mempelajari sejarah koleksi dan mengakses aplikasi Augmented Reality (AR) museum.",
      en: "An innovative digital information hub bridging physical museum exhibits with future technology. This website serves as the primary gateway for tourists to learn about collection history and access the museum's Augmented Reality (AR) application."
    },
    jobDesk: {
      id: [
        "Membangun antarmuka interaktif dengan React.js untuk menghadirkan visualisasi koleksi sejarah yang memukau.",
        "Merancang alur navigasi yang intuitif untuk mengarahkan pengunjung mengeksplorasi artefak melalui web ke aplikasi AR di Play Store.",
        "Melakukan optimasi aset visual (gambar dan ikon) agar website tetap cepat meskipun memuat banyak konten media.",
        "Mengimplementasikan desain responsif yang mendukung perangkat mobile sebagai panduan utama wisatawan di lokasi."
      ],
      en: [
        "Built an interactive interface with React.js to present stunning historical collection visualizations.",
        "Designed an intuitive navigation flow to guide visitors from exploring artifacts via the web to the AR app on the Play Store.",
        "Performed visual asset optimization (images and icons) to keep the website fast while loading a lot of media content.",
        "Implemented responsive design supporting mobile devices as the primary guide for tourists on-site."
      ]
    },
    achievements: {
      id: [
        "Mendukung transformasi digital museum melalui platform yang modern dan informatif.",
        "Meningkatkan minat wisatawan melalui integrasi informasi digital yang terstruktur rapi.",
        "Memastikan aksesibilitas informasi sejarah dapat dijangkau oleh pengunjung dari berbagai latar belakang."
      ],
      en: [
        "Supported the museum's digital transformation through a modern and informative platform.",
        "Increased tourist interest through the integration of neatly structured digital information.",
        "Ensured accessibility to historical information can be reached by visitors from various backgrounds."
      ]
    },
    metadata: {
      year: "2025",
      type: { id: "Web Interaktif / Edukasi", en: "Interactive / Educational Web" }
    },
    github: "https://github.com/ibnuamrithaher/museum-profile",
    link: "https://museum-bali.example.com",
    techStack: ["React.js", "Tailwind CSS", "Vite", "Framer Motion"],
    image: "/projects/image9.png",
    images: ["/projects/image9.png", "/projects/image10.png", "/projects/image11.png", "/projects/image12.png"]
  },
  {
    id: 6,
    title: "Point of Sales Pro (POS Pro)",
    role: { id: "Full Stack Developer", en: "Full Stack Developer" },
    background: {
      id: "Sistem aplikasi kasir (POS) komprehensif yang dirancang untuk menangani operasional bisnis menengah hingga besar dengan manajemen peran pengguna yang kompleks dari Owner hingga Staff operasional.",
      en: "A comprehensive point-of-sale (POS) application system designed to handle medium-to-large business operations with complex user role management from Owner to operational Staff."
    },
    jobDesk: {
      id: [
        "Merancang arsitektur basis data relasional untuk mengelola ribuan SKU gudang secara real-time.",
        "Mengembangkan antarmuka kasir yang cepat dan responsif untuk meminimalkan waktu transaksi.",
        "Membangun modul pelaporan keuangan otomatis yang mencakup laba kotor, arus kas, dan analitik penjualan.",
        "Mengimplementasikan sistem manajemen hak akses (RBAC) yang sangat ketat untuk keamanan data finansial."
      ],
      en: [
        "Designed a relational database architecture to manage thousands of warehouse SKUs in real-time.",
        "Developed a fast and responsive cashier interface to minimize transaction time.",
        "Built automated financial reporting modules including gross profit, cash flow, and sales analytics.",
        "Implemented a strict access rights management system (RBAC) for financial data security."
      ]
    },
    achievements: {
      id: [
        "Implementasi sistem yang berhasil merampingkan proses stok barang harian.",
        "Memudahkan pemilik bisnis dalam mengambil keputusan berbasis data melalui laporan analitik yang akurat.",
        "Membangun perangkat lunak yang stabil dengan penanganan masukan data secara massal yang efisien."
      ],
      en: [
        "Successful system implementation that streamlined daily inventory processes.",
        "Enabled business owners to make data-driven decisions through accurate analytical reports.",
        "Built stable software with efficient bulk data entry handling."
      ]
    },
    metadata: {
      year: "2023",
      type: { id: "Aplikasi Bisnis / POS", en: "Business / POS App" }
    },
    github: "https://github.com/ibnuamrithaher/pos-pro-enterprise",
    link: "https://pos-pro.example.com",
    techStack: ["Laravel", "SQL Server", "Bootstrap 5", "Chart.js"],
    image: "/projects/image28.png",
    images: ["/projects/image28.png", "/projects/image29.png", "/projects/image30.png", "/projects/image31.png"]
  },
  {
    id: 1,
    title: "DevCraft - Web Agency Landing Page",
    role: { id: "Frontend Developer", en: "Frontend Developer" },
    background: {
      id: "Proyek landing page yang dirancang khusus untuk mempresentasikan layanan agensi pengembangan web secara elegan. Proyek ini menitikberatkan pada aspek visual, performa, dan konversi pengunjung menjadi klien.",
      en: "A landing page project specifically designed to elegantly present web development agency services. This project emphasizes visual aspects, performance, and visitor-to-client conversion."
    },
    jobDesk: {
      id: [
        "Membangun komponen UI yang interaktif menggunakan React.js dan library animasi Wow.js.",
        "Merancang tata letak yang berfokus pada conversion rate optimization (CRO) untuk menarik minat calon klien.",
        "Mengoptimalkan performa pemuatan gambar dan skrip untuk pengalaman browsing yang instan.",
        "Memastikan kompatibilitas website di semua browser modern dan perangkat mobile."
      ],
      en: [
        "Built interactive UI components using React.js and the Wow.js animation library.",
        "Designed layouts focused on conversion rate optimization (CRO) to attract potential clients.",
        "Optimized image and script loading performance for an instant browsing experience.",
        "Ensured website compatibility across all modern browsers and mobile devices."
      ]
    },
    achievements: {
      id: [
        "Membangun identitas digital agensi dengan desain yang terlihat premium dan modern.",
        "Mencapai performa pemuatan halaman yang sangat cepat di bawah 1 detik.",
        "Meningkatkan engagement pengunjung melalui animasi mikro yang halus dan profesional."
      ],
      en: [
        "Built the agency's digital identity with a premium and modern design.",
        "Achieved blazing fast page load performance under 1 second.",
        "Increased visitor engagement through subtle and professional micro-animations."
      ]
    },
    metadata: {
      year: "2023",
      type: { id: "Landing Page", en: "Landing Page" }
    },
    github: "https://github.com/ibnuamrithaher/devcraft-landing",
    link: "https://devcraft.example.com",
    techStack: ["React.js", "Wow.js", "Tailwind CSS", "JavaScript"],
    image: "/projects/image17.png",
    images: ["/projects/image17.png", "/projects/image18.png", "/projects/image19.png"]
  },
  {
    id: 7,
    title: "Nafaya Skincare - E-Commerce & Reseller Hub",
    role: { id: "Full Stack Software Engineer", en: "Full Stack Software Engineer" },
    background: {
      id: "Platform perdagangan khusus untuk produk perawatan kulit premium yang mensinergikan sistem penjualan langsung dengan manajemen reseller. Dilengkapi sistem loyalitas pelanggan dan manajemen inventaris tingkat lanjut.",
      en: "A specialized trade platform for premium skincare products synergizing direct sales systems with reseller management. Equipped with customer loyalty systems and advanced inventory management."
    },
    jobDesk: {
      id: [
        "Mengembangkan platform E-commerce lengkap menggunakan Laravel dengan sistem katalog produk yang dinamis.",
        "Merancang dan mengimplementasikan modul manajemen reseller dengan Role-Based Access Control (RBAC).",
        "Membangun sistem reward point dan bonus untuk meningkatkan retensi dan loyalitas pelanggan.",
        "Mengintegrasikan dasbor analitik penjualan bagi pemilik bisnis untuk memantau performa inventaris."
      ],
      en: [
        "Developed a complete E-commerce platform using Laravel with a dynamic product catalog system.",
        "Designed and implemented a reseller management module with Role-Based Access Control (RBAC).",
        "Built reward point and bonus systems to increase customer retention and loyalty.",
        "Integrated sales analytics dashboards for business owners to monitor inventory performance."
      ]
    },
    achievements: {
      id: [
        "Berhasil mendigitalkan ekosistem jaringan reseller Nafaya yang sebelumnya dikelola secara manual.",
        "Meningkatkan efisiensi pemrosesan pesanan reseller hingga 60%.",
        "Menghasilkan sistem manajemen stok yang akurat dengan notifikasi ambang batas stok rendah."
      ],
      en: [
        "Successfully digitized the Nafaya reseller network ecosystem that was previously managed manually.",
        "Increased reseller order processing efficiency by up to 60%.",
        "Resulted in an accurate inventory management system with low-stock threshold notifications."
      ]
    },
    metadata: {
      year: "2023",
      type: { id: "E-Commerce / B2B2C", en: "E-Commerce / B2B2C" }
    },
    github: "https://github.com/ibnuamrithaher/nafaya-commerce",
    link: "https://nafaya.example.com",
    techStack: ["Laravel", "MySQL", "Bootstrap 4", "JavaScript"],
    image: "/projects/image24.png",
    images: ["/projects/image24.png", "/projects/image25.png", "/projects/image26.png", "/projects/image27.png"]
  },
  {
    id: 8,
    title: "Dropshipedia (SaaS) - SME Multi-Vendor Ecosystem",
    role: { id: "Leader Tim Web Developer", en: "Web Developer Team Lead" },
    background: {
      id: "Platform SaaS (Software as a Service) masif yang dirancang untuk mendigitalkan operasional UMKM Indonesia. Menghubungkan produsen langsung dengan ribuan profesional pemasaran dalam satu ekosistem yang terintegrasi.",
      en: "A massive SaaS (Software as a Service) platform designed to digitize Indonesian SME operations. It connects manufacturers directly with thousands of marketing professionals in one integrated ecosystem."
    },
    jobDesk: {
      id: [
        "Memimpin dan mengelola tim developer lintas fungsi (Frontend, Backend, SRE) menggunakan metodologi Agile/Scrum.",
        "Merancang arsitektur monolitik ke modular menggunakan Laravel dan React.js untuk skalabilitas jangka panjang.",
        "Mengintegrasikan API logistik kompleks (JNE API) dan payment gateway (Nicpay) untuk kelancaran ekosistem e-commerce.",
        "Membangun fitur Landing Page Builder yang memungkinkan produsen membuat toko online mandiri dalam hitungan menit."
      ],
      en: [
        "Led and managed cross-functional developer teams (Frontend, Backend, SRE) using Agile/Scrum methodologies.",
        "Designed monolithic to modular architecture using Laravel and React.js for long-term scalability.",
        "Integrated complex logistics APIs (JNE API) and payment gateways (Nicpay) for a smooth e-commerce ecosystem.",
        "Built a Landing Page Builder feature that allows manufacturers to create independent online stores in minutes."
      ]
    },
    achievements: {
      id: [
        "Sukses meluncurkan platform yang kini membantu operasional lebih dari 1,200+ pengguna UMKM.",
        "Mengurangi hambatan logistik melalui sistem tracking dan pick-up terintegrasi.",
        "Efisien dalam memimpin target sprint mingguan dengan tingkat penyelesaian fitur mencapai 95%."
      ],
      en: [
        "Successfully launched a platform that now supports operations for over 1,200+ SME users.",
        "Reduced logistics barriers through an integrated tracking and pick-up system.",
        "Efficiently led weekly sprint targets with a feature completion rate of 95%."
      ]
    },
    metadata: {
      year: "2022 - 2023",
      type: { id: "Platform SaaS / B2B", en: "SaaS / B2B Platform" },
      client: "PT DROPSHIPEDIA INTERCOM"
    },
    github: "https://github.com/ibnuamrithaher/dropshipedia",
    link: "https://dropshipedia.id",
    techStack: ["Laravel", "React.js", "Node.js", "MariaDB", "Nicpay API", "JNE API"],
    image: "/projects/image20.png",
    images: ["/projects/image20.png", "/projects/image21.jpeg", "/projects/image22.jpeg", "/projects/image23.png"]
  },
  {
    id: 5,
    title: "Point of Sales (SME Version)",
    role: { id: "Full Stack Developer", en: "Full Stack Developer" },
    background: {
      id: "Versi ringan dari sistem kasir yang dioptimalkan untuk UMKM. Berfokus pada kemudahan penggunaan, kecepatan transaksi, dan setup yang instan bagi pemilik usaha kecil.",
      en: "A lightweight version of the POS system optimized for SMEs. Focuses on ease of use, transaction speed, and instant setup for small business owners."
    },
    jobDesk: {
      id: [
        "Mengembangkan UI minimalis menggunakan Tailwind CSS untuk mempercepat proses on-boarding pengguna.",
        "Mengintegrasikan template DashLite untuk tampilan dasbor admin yang bersih dan fungsional.",
        "Mengoptimalkan performa sisi server agar aplikasi tetap ringan dijalankan pada spesifikasi server minimal.",
        "Merancang sistem manajemen diskon dan promo sederhana untuk menarik pelanggan."
      ],
      en: [
        "Developed a minimalist UI using Tailwind CSS to speed up the user on-boarding process.",
        "Integrated the DashLite template for a clean and functional admin dashboard view.",
        "Optimized server-side performance so the app remains lightweight on minimal server specifications.",
        "Designed a simple discount and promo management system to attract customers."
      ]
    },
    achievements: {
      id: [
        "Membantu usaha kecil beralih dari pencatatan manual ke sistem digital secara instan.",
        "Memberikan solusi teknologi yang terjangkau namun memiliki fungsionalitas inti yang kuat.",
        "Berhasil mengurangi waktu antrian kasir melalui alur transaksi yang disederhanakan."
      ],
      en: [
        "Helped small businesses switch from manual recording to a digital system instantly.",
        "Provided an affordable tech solution with powerful core functionality.",
        "Successfully reduced cashier queuing times through simplified transaction flows."
      ]
    },
    metadata: {
      year: "2022",
      type: { id: "Sistem Manajemen / POS", en: "Management / POS System" }
    },
    github: "https://github.com/ibnuamrithaher/pos-sme-lite",
    link: "https://pos-sme.example.com",
    techStack: ["Laravel", "MySQL", "Tailwind CSS", "DashLite"],
    image: "/projects/image32.png",
    images: ["/projects/image32.png", "/projects/image33.png", "/projects/image34.png", "/projects/image35.png"]
  },
  {
    id: 3,
    title: "EvaBPS - Employee Performance Analytics",
    role: { id: "Full Stack Developer", en: "Full Stack Developer" },
    background: {
      id: "Aplikasi evaluasi kinerja karyawan berbasis web yang dikembangkan untuk Badan Pusat Statistik (BPS) Kota Samarinda. Menggunakan algoritma Machine Learning (K-Means) untuk mengelompokkan kualitas kinerja karyawan berdasarkan metrik objektif.",
      en: "A web-based employee performance evaluation application developed for the Central Bureau of Statistics (BPS) Samarinda City. Uses the K-Means Machine Learning algorithm to cluster employee performance quality based on objective metrics."
    },
    jobDesk: {
      id: [
        "Mengintegrasikan logika algoritma K-Means Clustering ke dalam sistem backend Laravel.",
        "Membangun visualisasi data kinerja menggunakan chart interaktif untuk memudahkan analisis manajemen.",
        "Merancang alur pelaporan otomatis yang mengubah input data harian menjadi laporan evaluasi bulanan.",
        "Mengelola integritas data karyawan dengan sistem enkripsi dan kontrol akses yang ketat."
      ],
      en: [
        "Integrated K-Means Clustering algorithm logic into the Laravel backend system.",
        "Built performance data visualizations using interactive charts to facilitate management analysis.",
        "Designed automated reporting flows converting daily data inputs into monthly evaluation reports.",
        "Managed employee data integrity with encryption systems and strict access controls."
      ]
    },
    achievements: {
      id: [
        "Implementasi perdana sistem evaluasi berbasis AI di instansi terkait.",
        "Memberikan hasil pengelompokan kinerja yang objektif dan transparan bagi manajemen BPS.",
        "Efisiensi waktu dalam pembuatan laporan evaluasi tahunan sebesar 80%."
      ],
      en: [
        "Inaugural implementation of an AI-based evaluation system at the relevant agency.",
        "Provided objective and transparent performance clustering results for BPS management.",
        "Achieved 80% time efficiency in generating annual evaluation reports."
      ]
    },
    metadata: {
      year: "2022",
      type: { id: "Analisis Data / AI", en: "Data Analysis / AI" },
      client: "BPS Kota Samarinda"
    },
    github: "https://github.com/ibnuamrithaher/evabps-clustering",
    link: "https://evabps.example.com",
    techStack: ["Laravel", "MySQL", "K-Means Algorithm", "Bootstrap 4"],
    image: "/projects/image38.png",
    images: ["/projects/image38.png", "/projects/image39.png"]
  },
  {
    id: 2,
    title: "EmpRise - Salary DSS (SAW Method)",
    role: { id: "Software Engineer", en: "Software Engineer" },
    background: {
      id: "Sistem Pendukung Keputusan (SPK) khusus yang mengimplementasikan metode Simple Additive Weighting (SAW) untuk menentukan prioritas kenaikan gaji karyawan berdasarkan multi-kriteria.",
      en: "A specialized Decision Support System (DSS) implementing the Simple Additive Weighting (SAW) method to determine employee salary increase priorities based on multi-criteria."
    },
    jobDesk: {
      id: [
        "Membangun mesin kalkulasi matematis berbasis SAW untuk memproses pembobotan kriteria secara dinamis.",
        "Mengembangkan dasbor manajemen kriteria yang memungkinkan admin menyesuaikan bobot penilaian sesuai kebijakan perusahaan.",
        "Menghasilkan output berupa ranking kandidat kenaikan gaji yang akurat secara matematis.",
        "Merancang antarmuka admin yang bersih untuk pengelolaan data kriteria dan alternatif."
      ],
      en: [
        "Built a SAW-based mathematical calculation engine to process dynamic criteria weighting.",
        "Developed a criteria management dashboard allowing admins to adjust appraisal weights according to company policy.",
        "Generated output in the form of mathematically accurate salary increase candidate rankings.",
        "Designed a clean admin interface for managing criteria and alternative data."
      ]
    },
    achievements: {
      id: [
        "Menciptakan sistem pengambilan keputusan yang adil dan dapat dipertanggungjawabkan bagi departemen HR.",
        "Mengautomasi proses perhitungan manual yang rumit menjadi hasil instan sekali klik.",
        "Mengurangi subjektivitas dalam proses penilaian kenaikan gaji karyawan."
      ],
      en: [
        "Created a fair and accountable decision-making system for the HR department.",
        "Automated complicated manual calculation processes into instant one-click results.",
        "Reduced subjectivity in the employee salary increase appraisal process."
      ]
    },
    metadata: {
      year: "2022",
      type: { id: "Decision Support System", en: "Decision Support System" }
    },
    github: "https://github.com/Ibnuamrithaher/SIMPLE-ADDITIVE-WEIGHTING",
    gitlab: "https://gitlab.com/ibnuamtrithaher",
    link: "https://emprise.example.com",
    techStack: ["Laravel", "MySQL", "Bootstrap", "SAW Algorithm"],
    image: "/projects/image40.png",
    isPublic: true,
    images: ["/projects/image40.png"]
  },
  {
    id: 4,
    title: "Digiknown - Knowledge Management Portal",
    role: { id: "Backend Developer (MSIB Intern)", en: "Backend Developer (MSIB Intern)" },
    background: {
      id: "Sistem Manajemen Pengetahuan (KMS) internal ala Wikipedia yang dikembangkan khusus untuk Telkomsel Indonesia. Bertujuan untuk menjadi pusat berbagi dokumentasi, best-practices, dan edukasi bagi ribuan karyawan.",
      en: "An internal Wikipedia-style Knowledge Management System (KMS) developed specifically for Telkomsel Indonesia. Aimed at becoming the center for documentation, best-practices, and education sharing for thousands of employees."
    },
    jobDesk: {
      id: [
        "Merancang skema database untuk sistem artikel dinamis, forum tanya-jawab, dan kategori pengetahuan.",
        "Membangun API backend untuk fitur interaksi pengguna seperti komentar, vote, dan pencarian artikel.",
        "Mengimplementasikan fitur moderator panel untuk memfilter dan memvalidasi konten perusahaan yang sensitif.",
        "Berkolaborasi dalam tim lintas divisi untuk menyelaraskan fitur dengan kebutuhan operasional karyawan Telkomsel."
      ],
      en: [
        "Designed database schemas for dynamic article systems, Q&A forums, and knowledge categories.",
        "Built backend APIs for user interaction features such as comments, votes, and article search.",
        "Implemented a moderator panel feature to filter and validate sensitive corporate content.",
        "Collaborated within cross-divisional teams to align features with Telkomsel employee operational needs."
      ]
    },
    achievements: {
      id: [
        "Selesai tepat waktu sebagai bagian dari proyek akhir program Kampus Merdeka di perusahaan telekomunikasi terkemuka.",
        "Membangun sistem yang mampu menangani pengarsipan dokumen teknis secara terstruktur.",
        "Mendapatkan apresiasi positif dari mentor industri terkait arsitektur backend yang rapi."
      ],
      en: [
        "Completed on schedule as part of the final project for the Kampus Merdeka program at a leading telecommunications company.",
        "Built a system capable of handling structured technical document archiving.",
        "Received positive appreciation from industry mentors regarding the clean backend architecture."
      ]
    },
    metadata: {
      year: "2021",
      type: { id: "Sistem Internal / KMS", en: "Internal / KMS System" },
      client: "Telkomsel Indonesia"
    },
    github: "https://github.com/ibnuamrithaher/digiknown-kms",
    link: "https://digiknown.example.com",
    techStack: ["Laravel", "PostgreSQL", "Bootstrap", "jQuery"],
    image: "/projects/image36.png",
    images: ["/projects/image36.png", "/projects/image37.png"]
  }
];
