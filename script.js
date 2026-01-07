// ========= Data Produk SentimenLAB =========
const products = [
  {
    id: "p-youtube-korupsi-indobert",
    title: "Analisis Sentimen Komentar Youtube Terhadap Kasus Korupsi Mafia Migas Menggunakan Algoritma IndoBERT",
    subtitle: "Klasifikasi sentimen komentar YouTube tentang kasus korupsi mafia migas dengan IndoBERT",
    price: 100000,
    badge: "Deep Learning",
    badgeColor: "violet",
    mayarUrl: "https://sentimenlab.myr.id/catalog/sentimen-korupsi-mafia-migas-indobert",
    includes: [
      "Source Code Python (Google Colab)",
      "Dataset komentar YouTube kasus korupsi",
      "Model IndoBERT pre-trained",
      "Preprocessing & fine-tuning",
      "Output hasil analisis & visualisasi",
    ],
    specs: [
      "Input: CSV komentar YouTube",
      "Output: positif/negatif/netral",
      "Metode: IndoBERT (Transformer)",
      "Akurasi tinggi dengan deep learning",
    ],
  },
  {
    id: "p-film-oneforall-naivebayes",
    title: "Analisis Sentimen Film Animasi ONE FOR ALL Menggunakan Algoritma Naive Bayes",
    subtitle: "Klasifikasi sentimen komentar Youtube terkait film animasi ONE FOR ALL menggunakan Naive Bayes",
    price: 100000,
    badge: "Simple & Fast",
    badgeColor: "blue",
    mayarUrl: "https://sentimenlab.myr.id/catalog/sentimen-one-for-all-naive-bayes",
    includes: [
      "Source Code Python (Google Colab)",
      "Dataset ulasan film ONE FOR ALL",
      "Preprocessing teks",
      "Implementasi Naive Bayes",
      "Visualisasi hasil (chart & word cloud)",
    ],
    specs: [
      "Input: CSV kolom 'review'",
      "Output: sentimen positif/negatif",
      "Metode: Naive Bayes Classifier",
      "Cepat & akurat untuk text classification",
    ],
  },
  {
    id: "p-demo-dpr-svm-naivebayes",
    title: "Analisis Sentimen Demo DPR 2025 Menggunakan Algoritma SVM dan Naive Bayes",
    subtitle: "Perbandingan performa SVM vs Naive Bayes untuk analisis sentimen demo DPR",
    price: 100000,
    badge: "Comparison Study",
    badgeColor: "amber",
    mayarUrl: "https://sentimenlab.myr.id/catalog/sentimen-demo-dpr-svm-nb",
    includes: [
      "Source Code Python (Google Colab)",
      "Dataset sentimen demo DPR 2025",
      "Implementasi SVM & Naive Bayes",
      "Evaluasi perbandingan akurasi",
      "Confusion matrix & metrik lengkap",
    ],
    specs: [
      "Input: CSV komentar/tweet",
      "Output: positif/negatif/netral",
      "Metode: SVM vs Naive Bayes",
      "Analisis perbandingan performa",
    ],
  },
  {
    id: "p-kredivo-randomforest",
    title: "Analisis Sentimen Ulasan Aplikasi Kredivo Menggunakan Algoritma Random Forest",
    subtitle: "Klasifikasi sentimen ulasan pengguna aplikasi pinjaman Kredivo dengan Random Forest",
    price: 100000,
    badge: "Ensemble Learning",
    badgeColor: "rose",
    mayarUrl: "https://sentimenlab.myr.id/catalog/sentimen-kredivo-random-forest",
    includes: [
      "Source Code Python (Google Colab)",
      "Dataset ulasan Kredivo (Google Play/App Store)",
      "Preprocessing & feature extraction",
      "Implementasi Random Forest",
      "Visualisasi feature importance",
    ],
    specs: [
      "Input: CSV kolom 'review'",
      "Output: sentimen positif/negatif/netral",
      "Metode: Random Forest Classifier",
      "Feature importance analysis",
    ],
  },
  {
    id: "p-tiktok-mbg-svm",
    title: "Analisis Sentimen Komentar Tiktok Terkait MBG (Makan Bergizi Gratis) Menggunakan Algoritma SVM",
    subtitle: "Toolkit lengkap analisis sentimen komentar TikTok tentang program MBG dengan SVM + InSet Lexicon",
    price: 100000,
    badge: "Best Seller",
    badgeColor: "emerald",
    mayarUrl: "https://sentimenlab.myr.id/catalog/sentimen-mbg-svm",
    includes: [
      "Source Code Python (Google Colab)",
      "Dataset REAL 1000+ komentar TikTok MBG",
      "InSet Lexicon Dictionary",
      "Implementasi SVM",
      "Output Visualisasi (Chart, Word Cloud, Confusion Matrix)",
    ],
    specs: [
      "Preprocessing: cleaning, tokenizing, stemming",
      "Labeling: InSet Lexicon",
      "Algoritma: SVM (Support Vector Machine)",
      "Akurasi: 85-90%",
    ],
  },
]

// ========= Utilities =========
const rupiah = (n) => "Rp " + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
const byId = (id) => document.getElementById(id)

// Badge colors mapping
const badgeColors = {
  emerald: "bg-emerald-500/10 text-emerald-300 ring-emerald-500/20",
  blue: "bg-blue-500/10 text-blue-300 ring-blue-500/20",
  violet: "bg-violet-500/10 text-violet-300 ring-violet-500/20",
  amber: "bg-amber-500/10 text-amber-300 ring-amber-500/20",
  rose: "bg-rose-500/10 text-rose-300 ring-rose-500/20",
}

// ========= DOM refs =========
const grid = byId("productGrid")
const searchInput = byId("searchInput")

// Modal
const productModal = byId("productModal")
const closeModalBtn = byId("closeModalBtn")
const modalTitle = byId("modalTitle")
const modalSubtitle = byId("modalSubtitle")
const modalIncludes = byId("modalIncludes")
const modalSpecs = byId("modalSpecs")
const modalPrice = byId("modalPrice")
const modalBadge = byId("modalBadge")
const buyNowLink = byId("buyNowLink")

// Mobile menu
const mobileMenuBtn = byId("mobileMenuBtn")
const mobileMenu = byId("mobileMenu")

// ========= Mobile Menu Toggle =========
mobileMenuBtn?.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden")
})

// Close mobile menu when clicking a link
mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden")
  })
})

// ========= Render Products =========
function productCard(p) {
  const colorClass = badgeColors[p.badgeColor] || badgeColors.emerald

  return `
    <article class="card-hover group rounded-3xl bg-white/[0.02] p-6 ring-1 ring-white/5 hover:ring-emerald-500/30 flex flex-col">
      <div class="flex items-start justify-between gap-3 mb-4">
        <span class="shrink-0 rounded-full ${colorClass} px-3 py-1.5 text-xs font-semibold ring-1">
          ${p.badge}
        </span>
      </div>
      
      <h3 class="text-lg font-bold leading-snug text-white group-hover:text-emerald-300 transition-colors line-clamp-2">${p.title}</h3>
      <p class="mt-2 text-sm text-slate-400 line-clamp-2 flex-grow">${p.subtitle}</p>

      <div class="mt-6 pt-6 border-t border-white/5">
        <div class="flex items-end justify-between gap-4">
          <div>
            <div class="text-xs text-slate-500 uppercase tracking-wider">Harga</div>
            <div class="text-2xl font-bold text-white">${rupiah(p.price)}</div>
          </div>
          <button
            class="rounded-full bg-white/5 px-4 py-2.5 text-sm font-semibold ring-1 ring-white/10 hover:bg-white/10 transition-all"
            data-action="detail"
            data-id="${p.id}"
          >
            Detail
          </button>
        </div>

        <a
          class="mt-4 flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition-all hover:scale-[1.02]"
          href="${p.mayarUrl}"
          target="_blank"
          rel="noopener"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Beli Sekarang
        </a>
      </div>
    </article>
  `
}

function applySearch() {
  const q = (searchInput?.value || "").trim().toLowerCase()

  const filtered = products.filter((p) => {
    return (
      p.title.toLowerCase().includes(q) || p.subtitle.toLowerCase().includes(q) || p.badge.toLowerCase().includes(q)
    )
  })

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full rounded-3xl bg-white/[0.02] p-10 ring-1 ring-white/5 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-slate-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div class="text-lg font-semibold text-white">Tidak ada produk yang cocok</div>
        <div class="mt-2 text-sm text-slate-400">Coba ubah kata kunci pencarian Anda.</div>
      </div>
    `
    return
  }

  grid.innerHTML = filtered.map(productCard).join("")
}

searchInput?.addEventListener("input", applySearch)

// ========= Product Modal =========
function openProductModal(productId) {
  const p = products.find((x) => x.id === productId)
  if (!p) return

  const colorClass = badgeColors[p.badgeColor] || badgeColors.emerald

  modalBadge.textContent = p.badge
  modalBadge.className = `inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 mb-4 ${colorClass}`
  modalTitle.textContent = p.title
  modalSubtitle.textContent = p.subtitle
  modalPrice.textContent = rupiah(p.price)

  modalIncludes.innerHTML = p.includes
    .map(
      (i) =>
        `<li class="flex gap-3 items-start"><span class="mt-1.5 h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0"></span><span>${i}</span></li>`,
    )
    .join("")

  modalSpecs.innerHTML = p.specs
    .map(
      (s) =>
        `<li class="flex gap-3 items-start"><span class="mt-1.5 h-2 w-2 rounded-full bg-blue-400 flex-shrink-0"></span><span>${s}</span></li>`,
    )
    .join("")

  buyNowLink.href = p.mayarUrl

  productModal.classList.remove("hidden")
  document.body.classList.add("overflow-hidden")
}

function closeProductModal() {
  productModal.classList.add("hidden")
  document.body.classList.remove("overflow-hidden")
}

closeModalBtn?.addEventListener("click", closeProductModal)

productModal?.addEventListener("click", (e) => {
  if (e.target === productModal || e.target === productModal.firstElementChild) {
    closeProductModal()
  }
})

// Close modal on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !productModal.classList.contains("hidden")) {
    closeProductModal()
  }
})

// ========= Event Delegation =========
document.addEventListener("click", (e) => {
  const t = e.target
  if (t?.dataset?.action === "detail" || t?.closest("[data-action='detail']")) {
    const btn = t?.dataset?.action === "detail" ? t : t.closest("[data-action='detail']")
    openProductModal(btn.dataset.id)
  }
})

// ========= Smooth scroll for anchor links =========
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// ========= Init =========
byId("year").textContent = new Date().getFullYear()
applySearch()
