// ========= Data Produk SentimenLAB =========
const products = [
    {
      id: "p-youtube-korupsi-indobert",
      title: "Analisis Sentimen Komentar Youtube Terhadap Kasus Korupsi Mafia Migas Menggunakan Algoritma IndoBERT",
      subtitle: "Klasifikasi sentimen komentar YouTube tentang kasus korupsi mafia migas dengan IndoBERT",
      price: 100000,
      badge: "Deep Learning",
      mayarUrl: "https://sentimenlab.myr.id/catalog/sentimen-korupsi-mafia-migas-indobert",
      includes: [
        "Source Code Python (Google Colab)",
        "Dataset komentar YouTube kasus korupsi",
        "Model IndoBERT pre-trained",
        "Preprocessing & fine-tuning",
        "Output hasil analisis & visualisasi"
      ],
      specs: [
        "Input: CSV komentar YouTube",
        "Output: positif/negatif/netral",
        "Metode: IndoBERT (Transformer)",
        "Akurasi tinggi dengan deep learning"
      ],
    },
    {
      id: "p-film-oneforall-naivebayes",
      title: "Analisis Sentimen Film Animasi ONE FOR ALL Menggunakan Algoritma Naive Bayes",
      subtitle: "Klasifikasi sentimen komentar Youtube terkait film animasi ONE FOR ALL menggunakan Naive Bayes",
      price: 100000,
      badge: "Simple & Fast",
      mayarUrl: "https://sentimenlab.myr.id/catalog/sentimen-one-for-all-naive-bayes",
      includes: [
        "Source Code Python (Google Colab)",
        "Dataset ulasan film ONE FOR ALL",
        "Preprocessing teks",
        "Implementasi Naive Bayes",
        "Visualisasi hasil (chart & word cloud)"
      ],
      specs: [
        "Input: CSV kolom 'review'",
        "Output: sentimen positif/negatif",
        "Metode: Naive Bayes Classifier",
        "Cepat & akurat untuk text classification"
      ],
    },
    {
      id: "p-demo-dpr-svm-naivebayes",
      title: "Analisis Sentimen Demo DPR 2025 Menggunakan Algoritma SVM dan Naive Bayes",
      subtitle: "Perbandingan performa SVM vs Naive Bayes untuk analisis sentimen demo DPR",
      price: 100000,
      badge: "Comparison Study",
      mayarUrl: "https://sentimenlab.myr.id/catalog/sentimen-demo-dpr-svm-nb",
      includes: [
        "Source Code Python (Google Colab)",
        "Dataset sentimen demo DPR 2025",
        "Implementasi SVM & Naive Bayes",
        "Evaluasi perbandingan akurasi",
        "Confusion matrix & metrik lengkap"
      ],
      specs: [
        "Input: CSV komentar/tweet",
        "Output: positif/negatif/netral",
        "Metode: SVM vs Naive Bayes",
        "Analisis perbandingan performa"
      ],
    },
    {
      id: "p-kredivo-randomforest",
      title: "Analisis Sentimen Ulasan Aplikasi Kredivo Menggunakan Algoritma Random Forest",
      subtitle: "Klasifikasi sentimen ulasan pengguna aplikasi pinjaman Kredivo dengan Random Forest",
      price: 100000,
      badge: "Ensemble Learning",
      mayarUrl: "https://sentimenlab.myr.id/catalog/sentimen-kredivo-random-forest",
      includes: [
        "Source Code Python (Google Colab)",
        "Dataset ulasan Kredivo (Google Play/App Store)",
        "Preprocessing & feature extraction",
        "Implementasi Random Forest",
        "Visualisasi feature importance"
      ],
      specs: [
        "Input: CSV kolom 'review'",
        "Output: sentimen positif/negatif/netral",
        "Metode: Random Forest Classifier",
        "Feature importance analysis"
      ],
    },
    {
      id: "p-tiktok-mbg-svm",
      title: "Analisis Sentimen Komentar Tiktok Terkait MBG (Makan Bergizi Gratis) Menggunakan Algoritma SVM",
      subtitle: "Toolkit lengkap analisis sentimen komentar TikTok tentang program MBG dengan SVM + InSet Lexicon",
      price: 100000,
      badge: "Best Seller",
      mayarUrl: "https://sentimenlab.myr.id/catalog/sentimen-mbg-svm",
      includes: [
        "Source Code Python (Google Colab)",
        "Dataset REAL 1000+ komentar TikTok MBG",
        "InSet Lexicon Dictionary",
        "Implementasi SVM",
        "Output Visualisasi (Chart, Word Cloud, Confusion Matrix)"
      ],
      specs: [
        "Preprocessing: cleaning, tokenizing, stemming",
        "Labeling: InSet Lexicon",
        "Algoritma: SVM (Support Vector Machine)",
        "Akurasi: 85-90%"
      ],
    },
  ];
  
  // ========= Utilities =========
  const rupiah = (n) => "Rp " + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const byId = (id) => document.getElementById(id);
  
  // ========= DOM refs =========
  const grid = byId("productGrid");
  const searchInput = byId("searchInput");
  
  // Modal
  const productModal = byId("productModal");
  const closeModalBtn = byId("closeModalBtn");
  const modalTitle = byId("modalTitle");
  const modalSubtitle = byId("modalSubtitle");
  const modalIncludes = byId("modalIncludes");
  const modalSpecs = byId("modalSpecs");
  const modalPrice = byId("modalPrice");
  const buyNowLink = byId("buyNowLink");
  
  // ========= Render Products =========
  function productCard(p) {
    return `
      <article class="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 hover:ring-emerald-400/30 transition">
        <div class="flex items-start justify-between gap-3">
          <div>
            <h3 class="text-base font-bold leading-snug">${p.title}</h3>
            <p class="mt-1 text-sm text-slate-200/70">${p.subtitle}</p>
          </div>
          <span class="shrink-0 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-200 ring-1 ring-emerald-400/20">
            ${p.badge}
          </span>
        </div>
  
        <div class="mt-5 flex items-center justify-between">
          <div>
            <div class="text-xs text-slate-300/80">Harga</div>
            <div class="text-lg font-extrabold">${rupiah(p.price)}</div>
          </div>
          <button
            class="rounded-xl bg-white/5 px-3 py-2 text-sm font-semibold ring-1 ring-white/10 hover:bg-white/10"
            data-action="detail"
            data-id="${p.id}"
          >
            Detail
          </button>
        </div>
  
        <div class="mt-4">
          <a
            class="block rounded-xl bg-emerald-500 px-3 py-2.5 text-center text-sm font-semibold text-slate-950 hover:bg-emerald-400"
            href="${p.mayarUrl}"
            target="_blank"
            rel="noopener"
          >
            🛒 Beli Sekarang
          </a>
        </div>
      </article>
    `;
  }
  
  function applySearch() {
    const q = (searchInput.value || "").trim().toLowerCase();
  
    const filtered = products.filter((p) => {
      return (
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q)
      );
    });
  
    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
          <div class="text-sm font-semibold">Tidak ada produk yang cocok.</div>
          <div class="mt-1 text-sm text-slate-200/70">Coba ubah kata kunci pencarian.</div>
        </div>
      `;
      return;
    }
  
    grid.innerHTML = filtered.map(productCard).join("");
  }
  
  searchInput.addEventListener("input", applySearch);
  
  // ========= Product Modal =========
  function openProductModal(productId) {
    const p = products.find((x) => x.id === productId);
    if (!p) return;
  
    modalTitle.textContent = p.title;
    modalSubtitle.textContent = p.subtitle;
    modalPrice.textContent = rupiah(p.price);
  
    modalIncludes.innerHTML = p.includes
      .map((i) => `<li class="flex gap-2"><span class="mt-1 h-2 w-2 rounded-full bg-emerald-300"></span><span>${i}</span></li>`)
      .join("");
  
    modalSpecs.innerHTML = p.specs
      .map((s) => `<li class="flex gap-2"><span class="mt-1 h-2 w-2 rounded-full bg-indigo-300"></span><span>${s}</span></li>`)
      .join("");
  
    buyNowLink.href = p.mayarUrl;
  
    productModal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  }
  
  function closeProductModal() {
    productModal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
  
  closeModalBtn.addEventListener("click", closeProductModal);
  productModal.addEventListener("click", (e) => {
    if (e.target === productModal.firstElementChild) closeProductModal();
  });
  
  // ========= Event Delegation =========
  document.addEventListener("click", (e) => {
    const t = e.target;
    if (t?.dataset?.action === "detail") {
      openProductModal(t.dataset.id);
    }
  });
  
  // ========= Init =========
  byId("year").textContent = new Date().getFullYear();
  applySearch();