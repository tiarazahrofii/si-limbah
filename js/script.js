/* =========================================================
   SI-LIMBAH - FITUR WEBSITE
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const searchInput =
        document.getElementById("searchInput");

    const searchButton =
        document.getElementById("searchButton");

    const resultContainer =
        document.getElementById("resultContainer");

    const resultTitle =
        document.getElementById("resultTitle");

    const hasilSection =
        document.getElementById("hasil");

    const detailPage =
        document.getElementById("detailPage");

    const detailPageHeader =
        document.getElementById("detailPageHeader");

    const decisionSection =
        document.getElementById("decisionSection");

    const sortingPage =
        document.getElementById("sortingPage");

    const managementPage =
        document.getElementById("managementPage");

    const backToResults =
        document.getElementById("backToResults");

    const sortingChoice =
        document.getElementById("sortingChoice");

    const managementChoice =
        document.getElementById("managementChoice");


    let selectedWaste = null;


    /* =====================================================
       SCROLL KE ATAS
    ===================================================== */

    function scrollTopPage() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    /* =====================================================
       PENCARIAN
    ===================================================== */

    function showResults(keyword = "") {

        const searchKeyword =
            keyword.trim().toLowerCase();


        let results = wasteData;


        if (searchKeyword !== "") {

            results =
                wasteData.filter(function (item) {

                    return (

                        item.name
                            .toLowerCase()
                            .includes(searchKeyword)

                        ||

                        item.category
                            .toLowerCase()
                            .includes(searchKeyword)

                        ||

                        item.description
                            .toLowerCase()
                            .includes(searchKeyword)

                        ||

                        item.solutions.some(
                            function (solution) {

                                return solution
                                    .toLowerCase()
                                    .includes(searchKeyword);

                            }
                        )

                    );

                });

        }


        renderResults(
            results,
            keyword.trim()
        );


        hasilSection.scrollIntoView({
            behavior: "smooth"
        });

    }


    /* =====================================================
       MENAMPILKAN HASIL
    ===================================================== */

    function renderResults(
        results,
        keyword
    ) {

        if (results.length === 0) {

            resultTitle.textContent =
                `Tidak menemukan hasil untuk "${keyword}"`;


            resultContainer.innerHTML = `

                <div class="empty-result">

                    <div class="empty-icon">
                        🔎
                    </div>

                    <h3>
                        Limbah belum ditemukan
                    </h3>

                    <p>
                        Coba gunakan kata kunci seperti
                        botol plastik, kardus, bambu,
                        pampers, atau minyak jelantah.
                    </p>

                </div>

            `;

            return;

        }


        resultTitle.textContent =
            `Ditemukan ${results.length} informasi`;


        resultContainer.innerHTML =
            results.map(function (item) {

                return `

                    <article class="result-card">

                        <div class="result-card-icon">
                            ${item.icon}
                        </div>

                        <span class="category">
                            ${item.category}
                        </span>

                        <h3>
                            ${item.name}
                        </h3>

                        <p>
                            ${item.description}
                        </p>

                        <div class="solution-list">

                            <strong>
                                Kemungkinan pemanfaatan:
                            </strong>

                            <ul>

                                ${item.solutions
                                    .map(function (solution) {

                                        return `
                                            <li>
                                                ${solution}
                                            </li>
                                        `;

                                    })
                                    .join("")}

                            </ul>

                        </div>


                        <button
                            type="button"
                            class="detail-button"
                            onclick="openDetail('${item.id}')"
                        >

                            Lihat detail
                            <span>→</span>

                        </button>

                    </article>

                `;

            })
            .join("");


        /* AKTIFKAN SEMUA TOMBOL DETAIL */

        resultContainer
            .querySelectorAll(".detail-button")
            .forEach(function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const id =
                            button.dataset.detailId;

                        openDetail(id);

                    }
                );

            });

    }


    /* =====================================================
       MEMBUKA HALAMAN DETAIL
    ===================================================== */

    function openDetail(id) {

        const item =
            wasteData.find(
                function (waste) {

                    return waste.id === id;

                }
            );


        if (!item) {

            return;

        }


        selectedWaste = item;


        /* Sembunyikan hasil */

        if (hasilSection) {

            hasilSection.style.display =
                "none";

        }


        /* Tampilkan detail */

        detailPage.style.display =
            "block";


        /* Kembalikan tampilan pilihan */

        decisionSection.style.display =
            "block";

        sortingPage.style.display =
            "none";

        managementPage.style.display =
            "none";


        /* Header detail */

        detailPageHeader.innerHTML = `

            <div class="detail-hero-icon">
                ${item.icon}
            </div>

            <span>
                ${item.category}
            </span>

            <h1>
                ${item.name}
            </h1>

            <p>
                ${item.description}
            </p>

        `;


        scrollTopPage();

    }


    /* =====================================================
       HALAMAN PEMILAHAN
    ===================================================== */

    function openSortingPage() {

        if (!selectedWaste) {

            return;

        }


        decisionSection.style.display =
            "none";


        sortingPage.style.display =
            "block";


        managementPage.style.display =
            "none";


        sortingPage.innerHTML = `

            <button
                type="button"
                class="inner-back-button"
                id="backDecisionSorting"
            >
                ← Kembali
            </button>


            <div class="information-header">

                <span>
                    PEMILAHAN LIMBAH
                </span>

                <h2>
                    Cara memilah ${selectedWaste.name}
                </h2>

                <p>
                    Siapkan dan pisahkan limbah
                    sebelum masuk ke tahap pengelolaan.
                </p>

            </div>


            <div class="step-list">

                ${selectedWaste.preparation
                    .map(function (step, index) {

                        return `

                            <div class="step-card">

                                <div class="step-number">
                                    ${index + 1}
                                </div>

                                <div>

                                    <h3>
                                        Langkah ${index + 1}
                                    </h3>

                                    <p>
                                        ${step}
                                    </p>

                                </div>

                            </div>

                        `;

                    })
                    .join("")}

            </div>


            <div class="info-note">

                <strong>
                    Catatan penting
                </strong>

                <p>
                    Pastikan proses pemilahan dilakukan
                    dengan memperhatikan kondisi dan
                    karakteristik limbah.
                </p>

            </div>

        `;


        document
            .getElementById(
                "backDecisionSorting"
            )
            .addEventListener(
                "click",
                function () {

                    sortingPage.style.display =
                        "none";

                    decisionSection.style.display =
                        "block";

                    scrollTopPage();

                }
            );


        scrollTopPage();

    }


    /* =====================================================
       HALAMAN PENGELOLAAN
    ===================================================== */

    function openManagementPage() {

        if (!selectedWaste) {

            return;

        }


        decisionSection.style.display =
            "none";


        sortingPage.style.display =
            "none";


        managementPage.style.display =
            "block";


        managementPage.innerHTML = `

            <button
                type="button"
                class="inner-back-button"
                id="backDecisionManagement"
            >
                ← Kembali
            </button>


            <div class="information-header">

                <span>
                    PENGELOLAAN LIMBAH
                </span>

                <h2>
                    Apa yang bisa dilakukan
                    dengan ${selectedWaste.name}?
                </h2>

                <p>
                    Berikut beberapa kemungkinan
                    pengelolaan atau pemanfaatan
                    berdasarkan informasi yang tersedia.
                </p>

            </div>


            <div class="management-grid">

                ${selectedWaste.solutions
                    .map(function (solution, index) {

                        return `

                            <div class="management-card">

                                <div class="management-icon">

                                    ${
                                        index === 0
                                            ? "♻️"
                                            : index === 1
                                                ? "🌱"
                                                : "✨"
                                    }

                                </div>

                                <span>
                                    OPSI ${index + 1}
                                </span>

                                <h3>
                                    ${solution}
                                </h3>

                                <p>
                                    Pelajari dan sesuaikan
                                    pengelolaan dengan kondisi
                                    limbah serta kebutuhan.
                                </p>

                            </div>

                        `;

                    })
                    .join("")}

            </div>


            <div class="info-note">

                <strong>
                    Catatan
                </strong>

                <p>
                    ${selectedWaste.note}
                </p>

            </div>

        `;


        document
            .getElementById(
                "backDecisionManagement"
            )
            .addEventListener(
                "click",
                function () {

                    managementPage.style.display =
                        "none";

                    decisionSection.style.display =
                        "block";

                    scrollTopPage();

                }
            );


        scrollTopPage();

    }


    /* =====================================================
       KEMBALI KE HASIL
    ===================================================== */

    backToResults.addEventListener(
        "click",
        function () {

            detailPage.style.display =
                "none";


            if (hasilSection) {

                hasilSection.style.display =
                    "block";

            }


            scrollTopPage();

        }
    );


    /* =====================================================
       PILIH PEMILAHAN
    ===================================================== */

    sortingChoice.addEventListener(
        "click",
        function () {

            openSortingPage();

        }
    );


    /* =====================================================
       PILIH PENGELOLAAN
    ===================================================== */

    managementChoice.addEventListener(
        "click",
        function () {

            openManagementPage();

        }
    );


    /* =====================================================
       TOMBOL CARI
    ===================================================== */

    searchButton.addEventListener(
        "click",
        function () {

            showResults(
                searchInput.value
            );

        }
    );


    /* =====================================================
       ENTER
    ===================================================== */

    searchInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                showResults(
                    searchInput.value
                );

            }

        }
    );


    /* =====================================================
       QUICK SEARCH
    ===================================================== */

    document
        .querySelectorAll(".quick-search")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    const keyword =
                        button.dataset.keyword;

                    searchInput.value =
                        keyword;

                    showResults(
                        keyword
                    );

                }
            );

        });


    /* =====================================================
       POPULER
    ===================================================== */

    document
        .querySelectorAll(".popular-card")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    const keyword =
                        button.dataset.keyword;

                    searchInput.value =
                        keyword;

                    showResults(
                        keyword
                    );

                }
            );

        });


    /* =====================================================
       KATEGORI
    ===================================================== */

    document
        .querySelectorAll(".category-card")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    const category =
                        button.dataset.category;

                    searchInput.value =
                        category;

                    showResults(
                        category
                    );

                }
            );

        });

});
/* ========================================
   BUKA HALAMAN DETAIL
======================================== */

function openDetail(name) {

    window.location.href =
        "detail.html?waste=" + encodeURIComponent(name);

}