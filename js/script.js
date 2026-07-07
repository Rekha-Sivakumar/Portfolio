document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Scroll To Top Button
    ========================== */

    const topBtn = document.createElement("button");
    topBtn.innerHTML = "↑";
    topBtn.title = "Back to Top";

    Object.assign(topBtn.style, {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        border: "none",
        background: "#007BFF",
        color: "#fff",
        fontSize: "20px",
        cursor: "pointer",
        display: "none",
        zIndex: "1000",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        transition: "all 0.3s ease"
    });

    document.body.appendChild(topBtn);

    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    window.addEventListener("scroll", () => {
        topBtn.style.display = window.scrollY > 250 ? "block" : "none";
    });

    /* ==========================
       Reveal Sections
    ========================== */

    const sections = document.querySelectorAll("section");

    const revealSections = () => {

        sections.forEach(section => {

            const rect = section.getBoundingClientRect();

            if (rect.top < window.innerHeight - 120) {
                section.classList.add("visible");
            }

        });

    };

    window.addEventListener("scroll", revealSections);
    revealSections();

    /* ==========================
       View More Buttons
    ========================== */

    document.querySelectorAll(".view-more").forEach(button => {

        button.addEventListener("click", function () {

            const target = document.getElementById(this.dataset.target);

            if (!target) return;

            const isOpen = target.style.display === "block";

            document.querySelectorAll(".project-details").forEach(detail => {
                detail.style.display = "none";
            });

            document.querySelectorAll(".view-more").forEach(btn => {
                btn.textContent = "View More";
            });

            if (!isOpen) {
                target.style.display = "block";
                this.textContent = "View Less";
            }

        });

    });

    /* ==========================
       Certificate Popup
    ========================== */

    const modal = document.getElementById("certificateModal");
    const modalImg = document.getElementById("certificateImg");
    const closeBtn = document.getElementById("closeCertificate");

    if (modal && modalImg && closeBtn) {

        document.querySelectorAll(".view-certificate").forEach(button => {

            button.addEventListener("click", () => {

                modalImg.src = button.dataset.image;
                modal.style.display = "block";

            });

        });

        closeBtn.addEventListener("click", () => {

            modal.style.display = "none";

        });

        modal.addEventListener("click", e => {

            if (e.target === modal) {
                modal.style.display = "none";
            }

        });

        document.addEventListener("keydown", e => {

            if (e.key === "Escape") {
                modal.style.display = "none";
            }

        });

    }

    /* ==========================
       Active Navigation
    ========================== */

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll("nav a").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage) {
            link.classList.add("active");
        }

    });

    /* ==========================
       Smooth Anchor Scroll
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });

});
