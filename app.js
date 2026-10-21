/**
 * ÖSYM Aday İşlemleri Sistemi (AİS)
 * Aday: MİKAİL ORAK (T.C. 21425132954)
 */

// Official Exam Results Data with EXACT values from user's HMGS result sheets
const EXAM_RESULTS_DATA = [
  {
    id: "HMGS-2026-2",
    title: "2026/2 Adalet Bakanlığı Hukuk Mesleklerine Giriş Sınavı (HMGS) Sonuçları",
    examTitleClean: "2026/2 Adalet Bakanlığı Hukuk Mesleklerine Giriş Sınavı (HMGS)",
    examDate: "27 Eylül 2026",
    resultDate: "21 Ekim 2026",
    correctCount: "94",
    wrongCount: "22",
    score: "93,22013",
    status: "BAŞARILI",
    controlCode: "89BXM92K",
    legalText: "Bu belge, sınav tarihi itibarıyla HUKUK MESLEKLERİNE GİRİŞ SINAVI VE İDARİ YARGI ÖN SINAVI YÖNETMELİĞİ'nin 5 inci maddesinde öngörülen şartları sağlayan adaylar için geçerlidir."
  },
  {
    id: "HMGS-2026-1",
    title: "2026/1 Adalet Bakanlığı Hukuk Mesleklerine Giriş Sınavı (HMGS) Sonuçları",
    examTitleClean: "2026/1 Adalet Bakanlığı Hukuk Mesleklerine Giriş Sınavı (HMGS)",
    examDate: "26 Nisan 2026",
    resultDate: "11 Mayıs 2026",
    correctCount: "89",
    wrongCount: "31",
    score: "80,83333",
    status: "BAŞARISIZ",
    controlCode: "45ALCNZM",
    legalText: "Bu belge, sınav tarihi itibarıyla HUKUK MESLEKLERİNE GİRİŞ SINAVI VE İDARİ YARGI ÖN SINAVI YÖNETMELİĞİ'nin 5 inci maddesinde öngörülen şartları sağlayan adaylar için geçerlidir."
  },
  {
    id: "YDS-2026-1",
    title: "2026/1 Yabancı Dil Bilgisi Seviye Tespit Sınavı (YDS) Sonuçları",
    examTitleClean: "2026/1 Yabancı Dil Bilgisi Seviye Tespit Sınavı (YDS)",
    examDate: "12 Nisan 2026",
    resultDate: "28 Nisan 2026",
    correctCount: "69",
    wrongCount: "11",
    score: "86,25000",
    status: "B Düzeyi (BAŞARILI)",
    controlCode: "77D2Y91F",
    legalText: "Bu belge, Yabancı Dil Bilgisi Seviye Belirleme Usul ve Esasları Hakkında Yönetmelik uyarınca geçerlidir."
  },
  {
    id: "YOKDIL-2026-1",
    title: "2026/1 Yükseköğretim Kurumları Yabancı Dil Sınavı (YÖKDİL) Sonuçları",
    examTitleClean: "2026/1 Yükseköğretim Kurumları Yabancı Dil Sınavı (YÖKDİL)",
    examDate: "28 Şubat 2026",
    resultDate: "18 Mart 2026",
    correctCount: "73",
    wrongCount: "7",
    score: "91,25000",
    status: "A Düzeyi (BAŞARILI)",
    controlCode: "D44A21E6",
    legalText: "Bu belge, Yükseköğretim Kurumları Yabancı Dil Sınavı Kılavuzunda öngörülen şartlar için geçerlidir."
  },
  {
    id: "HMGS-2025-2-YENI",
    title: "2025/2 Hukuk Mesleklerine Giriş Sınavı (HMGS) Yeni Değerlendirme Sonuçları",
    examTitleClean: "2025/2 Hukuk Mesleklerine Giriş Sınavı (HMGS) Yeni Değerlendirme",
    examDate: "28 Eylül 2025",
    resultDate: "04 Şubat 2026",
    correctCount: "68",
    wrongCount: "30",
    score: "69,50000",
    status: "BAŞARISIZ",
    controlCode: "H7829901",
    legalText: "İptal edilen sorular değerlendirme dışı bırakılarak yeniden hesaplanan resmi sonuç belgesidir."
  },
  {
    id: "HMGS-2025-2",
    title: "2025/2 Hukuk Mesleklerine Giriş Sınavı (HMGS) Sonuçları",
    examTitleClean: "2025/2 Hukuk Mesleklerine Giriş Sınavı (HMGS)",
    examDate: "28 Eylül 2025",
    resultDate: "23 Ekim 2025",
    correctCount: "67",
    wrongCount: "33",
    score: "67,00000",
    status: "BAŞARISIZ",
    controlCode: "HM990012",
    legalText: "Bu belge, sınav tarihi itibarıyla ilgili yönetmelik hükümleri uyarınca geçerlidir."
  },
  {
    id: "YKS-2020-YERLESTIRME",
    title: "2020-YKS Yerleştirme Sonuçları",
    examTitleClean: "2020 Yükseköğretim Kurumları Sınavı (YKS) Yerleştirme",
    examDate: "27-28 Haziran 2020",
    resultDate: "26 Ağustos 2020",
    correctCount: "Yerleşti",
    wrongCount: "Kayıt Hakkı Kazandı",
    score: "462,45000",
    status: "ANKARA ÜNV. HUKUK FAKÜLTESİ",
    controlCode: "YER2020A1",
    legalText: "Aday bu sonuç ile ilgili yükseköğretim programına kayıt yaptırma hakkı kazanmıştır."
  },
  {
    id: "YKS-2020",
    title: "2020 YKS Sonuçları",
    examTitleClean: "2020 Yükseköğretim Kurumları Sınavı (YKS)",
    examDate: "27-28 Haziran 2020",
    resultDate: "27 Temmuz 2020",
    correctCount: "TYT: 100 / AYT: 69",
    wrongCount: "TYT: 13 / AYT: 7",
    score: "EA: 442,85000",
    status: "BAŞARILI (Tercih Yapabilir)",
    controlCode: "YKS2020C2",
    legalText: "YKS sonuç belgesi üniversite yerleştirme işlemleri için resmi belgedir."
  },
  {
    id: "MSU-2020",
    title: "2020-Milli Savunma Üniversitesi Askeri Öğrenci Aday Belirleme Sınavı Sonuçları",
    examTitleClean: "2020-Milli Savunma Üniversitesi Askeri Öğrenci Aday Belirleme Sınavı (MSÜ)",
    examDate: "14 Haziran 2020",
    resultDate: "02 Temmuz 2020",
    correctCount: "94",
    wrongCount: "19",
    score: "419,65000",
    status: "BAŞARILI (Çağrıya Hak Kazandı)",
    controlCode: "MSU2020D4",
    legalText: "Milli Savunma Üniversitesi 2. seçim aşamaları için geçerli sonuç belgesidir."
  }
];

// Document Ready Initialization
document.addEventListener("DOMContentLoaded", () => {
  setupAuthSystem();
  renderResultsTable();
  setupViewNavigation();
  setupInfiniteLoadingHandlers();
  setupResultModalHandlers();
  setupActionButtons();
});

/**
 * 1. Authentication System (Login & Logout)
 * Expected credentials:
 * T.C. Kimlik No: 21425132954
 * Şifre: M?Ork123
 */
function setupAuthSystem() {
  const loginForm = document.getElementById("loginForm");
  const inputTC = document.getElementById("inputTC");
  const inputPass = document.getElementById("inputPassword");
  const togglePassBtn = document.getElementById("togglePasswordBtn");
  const errorAlert = document.getElementById("loginErrorAlert");
  const errorText = document.getElementById("loginErrorText");
  const captchaBox = document.getElementById("captchaBox");
  const captchaText = document.getElementById("captchaText");

  const loginWrapper = document.getElementById("loginPageWrapper");
  const portalLayout = document.getElementById("portalAppLayout");
  const logoutBtn = document.getElementById("headerLogoutBtn");

  // Toggle Password Visibility
  if (togglePassBtn && inputPass) {
    togglePassBtn.addEventListener("click", () => {
      const isPassword = inputPass.type === "password";
      inputPass.type = isPassword ? "text" : "password";
      togglePassBtn.textContent = isPassword ? "🙈" : "👁️";
    });
  }

  // Refresh Captcha Simulation
  const sampleCaptchas = ["7 X 4 K", "3 M 9 P", "8 A 2 Y", "5 K 1 W"];
  let captchaIndex = 0;
  if (captchaBox && captchaText) {
    captchaBox.addEventListener("click", () => {
      captchaIndex = (captchaIndex + 1) % sampleCaptchas.length;
      captchaText.textContent = sampleCaptchas[captchaIndex];
      const captchaInput = document.getElementById("inputCaptcha");
      if (captchaInput) {
        captchaInput.value = sampleCaptchas[captchaIndex].replace(/\s+/g, "");
      }
    });
  }

  // Handle Login Form Submission
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const tcValue = inputTC.value.trim();
      const passValue = inputPass.value.trim();

      // Check against specified credentials
      if (tcValue === "21425132954" && passValue === "M?Ork123") {
        if (errorAlert) errorAlert.classList.add("hidden");

        // Transition from Login to Portal
        if (loginWrapper) loginWrapper.classList.add("hidden");
        if (portalLayout) portalLayout.classList.remove("hidden");

        // By default, activate "Sonuçlarım" view
        const menuSonuclarim = document.getElementById("menuBtnSonuclarim");
        if (menuSonuclarim) menuSonuclarim.click();

        window.scrollTo(0, 0);
      } else {
        // Show realistic error alert
        if (errorAlert) {
          errorAlert.classList.remove("hidden");
          if (tcValue.length !== 11) {
            errorText.textContent = "T.C. Kimlik Numarası 11 haneli olmalıdır.";
          } else {
            errorText.textContent = "T.C. Kimlik Numarası veya şifreniz hatalı. Lütfen kontrol ediniz.";
          }
        }
      }
    });
  }

  // Handle Header Logout
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();

      // If user is currently in portal, log out
      if (portalLayout && !portalLayout.classList.contains("hidden")) {
        portalLayout.classList.add("hidden");
        if (loginWrapper) loginWrapper.classList.remove("hidden");
        if (errorAlert) errorAlert.classList.add("hidden");
        window.scrollTo(0, 0);
      } else {
        // Already on login page, clicking Çıkış Yap triggers harmless infinite loader or notice
        const loader = document.getElementById("infiniteLoader");
        if (loader) loader.classList.remove("hidden");
      }
    });
  }
}

/**
 * 2. View Navigation between Sonuçlarım, Kimlik Bilgilerim, Fotoğraf Bilgilerim
 */
function setupViewNavigation() {
  const menuSonuclarim = document.getElementById("menuBtnSonuclarim");
  const menuKimlik = document.getElementById("menuBtnKimlik");
  const menuFotograf = document.getElementById("menuBtnFotograf");

  const viewSonuclarim = document.getElementById("view-sonuclarim");
  const viewKimlik = document.getElementById("view-kimlik");
  const viewFotograf = document.getElementById("view-fotograf");

  function switchActiveView(activeBtn, targetView) {
    document.querySelectorAll(".menu-box-link, .bullet-link").forEach((el) => {
      el.classList.remove("active-menu");
    });
    activeBtn.classList.add("active-menu");

    [viewSonuclarim, viewKimlik, viewFotograf].forEach((v) => {
      if (v) v.classList.add("hidden");
    });

    if (targetView) targetView.classList.remove("hidden");
  }

  if (menuSonuclarim) {
    menuSonuclarim.addEventListener("click", () => {
      switchActiveView(menuSonuclarim, viewSonuclarim);
    });
  }

  if (menuKimlik) {
    menuKimlik.addEventListener("click", () => {
      switchActiveView(menuKimlik, viewKimlik);
    });
  }

  if (menuFotograf) {
    menuFotograf.addEventListener("click", () => {
      switchActiveView(menuFotograf, viewFotograf);
    });
  }
}

/**
 * 3. Render Results Table
 */
function renderResultsTable() {
  const tbody = document.getElementById("resultsTableBody");
  if (!tbody) return;

  tbody.innerHTML = "";

  EXAM_RESULTS_DATA.forEach((exam) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td class="td-name">${exam.title}</td>
      <td class="td-date">${exam.resultDate}</td>
      <td class="td-action">
        <button type="button" class="view-result-btn" data-exam-id="${exam.id}">
          Görüntüle
        </button>
      </td>
    `;

    tbody.appendChild(tr);
  });

  const viewBtns = document.querySelectorAll(".view-result-btn");
  viewBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const examId = e.currentTarget.getAttribute("data-exam-id");
      openResultDocument(examId);
    });
  });

  const totalCountEl = document.getElementById("totalResultsCount");
  if (totalCountEl) {
    totalCountEl.textContent = EXAM_RESULTS_DATA.length;
  }
}

/**
 * 4. Setup Infinite Loading Behavior
 * When any link with class .fake-nav-trigger is clicked, show continuous spinning loader
 */
function setupInfiniteLoadingHandlers() {
  const loader = document.getElementById("infiniteLoader");
  const cancelBtn = document.getElementById("loaderCancelBtn");
  const fakeNavTriggers = document.querySelectorAll(".fake-nav-trigger");

  fakeNavTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      if (loader) {
        loader.classList.remove("hidden");
      }
    });
  });

  if (cancelBtn) {
    cancelBtn.addEventListener("click", () => {
      if (loader) loader.classList.add("hidden");
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (loader && !loader.classList.contains("hidden")) {
        loader.classList.add("hidden");
      }
      closeResultDocument();
    }
  });
}

/**
 * 5. Action Buttons (MERNIS & ID Card Photo update simulation)
 */
function setupActionButtons() {
  const btnMernis = document.getElementById("btnUpdateMernis");
  const btnPhoto = document.getElementById("btnUseIdCardPhoto");

  if (btnMernis) {
    btnMernis.addEventListener("click", () => {
      const originalText = btnMernis.textContent;
      btnMernis.textContent = "MERNİS Sorgulanıyor...";
      btnMernis.disabled = true;

      setTimeout(() => {
        btnMernis.textContent = "✓ Bilgiler MERNİS'ten Güncellendi";
        setTimeout(() => {
          btnMernis.textContent = originalText;
          btnMernis.disabled = false;
        }, 2200);
      }, 700);
    });
  }

  if (btnPhoto) {
    btnPhoto.addEventListener("click", () => {
      const originalText = btnPhoto.textContent;
      btnPhoto.textContent = "Fotoğraf Doğrulanıyor...";
      btnPhoto.disabled = true;

      setTimeout(() => {
        btnPhoto.textContent = "✓ T.C. Kimlik Kartı Fotoğrafı Güncellendi";
        setTimeout(() => {
          btnPhoto.textContent = originalText;
          btnPhoto.disabled = false;
        }, 2200);
      }, 700);
    });
  }
}

/**
 * 6. Setup Modal Handlers for Result Document
 */
function setupResultModalHandlers() {
  const modal = document.getElementById("resultDocModal");
  const closeBtn = document.getElementById("closeResultDocBtn");

  if (closeBtn) closeBtn.addEventListener("click", closeResultDocument);

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeResultDocument();
      }
    });
  }
}

/**
 * Open and render the official Result Document matching the user's uploaded official sheets
 */
function openResultDocument(examId) {
  const exam = EXAM_RESULTS_DATA.find((item) => item.id === examId);
  if (!exam) return;

  const modal = document.getElementById("resultDocModal");
  const titleEl = document.getElementById("modalExamTitle");
  const examDateEl = document.getElementById("modalExamDate");
  const resultDateEl = document.getElementById("modalResultDate");
  const correctEl = document.getElementById("modalCorrectCount");
  const wrongEl = document.getElementById("modalWrongCount");
  const scoreEl = document.getElementById("modalExamScore");
  const statusEl = document.getElementById("modalExamStatus");
  const legalEl = document.getElementById("modalLegalText");
  const controlCodeEl = document.getElementById("modalControlCode");

  if (titleEl) titleEl.textContent = exam.examTitleClean;
  if (examDateEl) examDateEl.textContent = exam.examDate;
  if (resultDateEl) resultDateEl.textContent = exam.resultDate;
  if (correctEl) correctEl.textContent = exam.correctCount;
  if (wrongEl) wrongEl.textContent = exam.wrongCount;
  if (scoreEl) scoreEl.textContent = exam.score;
  if (statusEl) statusEl.textContent = exam.status;
  if (legalEl) legalEl.textContent = exam.legalText;
  if (controlCodeEl) controlCodeEl.textContent = exam.controlCode;

  if (modal) {
    modal.classList.remove("hidden");
  }
}

function closeResultDocument() {
  const modal = document.getElementById("resultDocModal");
  if (modal) {
    modal.classList.add("hidden");
  }
}
