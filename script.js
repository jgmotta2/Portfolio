document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('.hero, .about, .experience, .projects, .skills, .contact');
    const cards = document.querySelectorAll('.card');
    const icons = document.querySelectorAll('.iconGrid');
    const footer = document.querySelector('.footer');

    const experienceTitle = document.querySelector('.experienceTitle');
    const experienceRole = document.querySelector('.experienceRole');
    const companyAndArea = document.querySelector('.companyAndArea');
    const experienceDescription = document.querySelector('.experienceDescription');

    const contactIcons = document.querySelectorAll('.contact .iconGrid');

    let allContactIconsRevealed = false;

    function isInViewport(element) {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight * 0.9) &&
            rect.bottom >= 0
        );
    }

    function checkAllContactIconsRevealed() {
        if (!contactIcons || contactIcons.length === 0) return true;

        for (let icon of contactIcons) {
            if (icon.style.opacity !== "1") {
                return false;
            }
        }
        return true;
    }

    function revealElements() {
        sections.forEach(section => {
            if (isInViewport(section) && section.style.opacity === "0") {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });

        if (experienceTitle && isInViewport(experienceTitle) && experienceTitle.style.opacity === "0") {
            experienceTitle.style.opacity = "1";
            experienceTitle.style.transform = "translateY(0)";

            setTimeout(() => {
                if (experienceRole && experienceRole.style.opacity === "0") {
                    experienceRole.style.opacity = "1";
                    experienceRole.style.transform = "translateY(0)";

                    setTimeout(() => {
                        if (companyAndArea && companyAndArea.style.opacity === "0") {
                            companyAndArea.style.opacity = "1";
                            companyAndArea.style.transform = "translateY(0)";

                            setTimeout(() => {
                                if (experienceDescription && experienceDescription.style.opacity === "0") {
                                    experienceDescription.style.opacity = "0.5";
                                    experienceDescription.style.transform = "translateY(0)";
                                }
                            }, 200);
                        }
                    }, 200);
                }
            }, 200);
        }

        cards.forEach((card, index) => {
            if (isInViewport(card) && card.style.opacity === "0") {
                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";
                    setTimeout(() => {
                        card.classList.add('revealed');
                    }, 800);
                }, index * 150);
            }
        });

        const nonContactIcons = Array.from(icons).filter(icon => {
            return !Array.from(contactIcons).includes(icon);
        });

        nonContactIcons.forEach((icon, index) => {
            if (isInViewport(icon) && icon.style.opacity === "0") {
                setTimeout(() => {
                    icon.style.opacity = "1";
                    icon.style.transform = "translateY(0)";
                    setTimeout(() => {
                        icon.classList.add('revealed');
                    }, 800);
                }, index * 100);
            }
        });

        let lastContactIconDelay = 0;
        contactIcons.forEach((icon, index) => {
            if (isInViewport(icon) && icon.style.opacity === "0") {
                const delay = index * 200;
                lastContactIconDelay = delay;

                setTimeout(() => {
                    icon.style.opacity = "1";
                    icon.style.transform = "translateY(0)";
                    setTimeout(() => {
                        icon.classList.add('revealed');

                        if (index === contactIcons.length - 1) {
                            allContactIconsRevealed = true;

                            setTimeout(() => {
                                if (footer && footer.style.opacity === "0") {
                                    footer.style.opacity = "1";
                                    footer.style.transform = "translateY(0)";
                                }
                            }, 50);
                        }
                    }, 800);
                }, delay);
            }
        });
    }

    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        header {
            opacity: 0;
            transform: translateY(-30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .iconGrid.revealed:hover {
            transform: scale(1.1) !important;
            filter: brightness(2) !important;
        }
        
        .card.revealed:hover {
            transform: scale(1.1) !important;
            filter: brightness(1.5) !important;
            cursor: pointer !important;
        }
    `;
    document.head.insertBefore(styleSheet, document.head.firstChild);

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    });

    cards.forEach(card => {
        card.setAttribute('data-original-transform', card.style.transform || '');
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });

    icons.forEach(icon => {
        icon.setAttribute('data-original-transform', icon.style.transform || '');
        icon.style.opacity = "0";
        icon.style.transform = "translateY(20px)";
        icon.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });

    if (footer) {
        footer.style.opacity = "0";
        footer.style.transform = "translateY(20px)";
        footer.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    }

    if (experienceTitle) {
        experienceTitle.style.opacity = "0";
        experienceTitle.style.transform = "translateY(30px)";
        experienceTitle.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    }

    if (experienceRole) {
        experienceRole.style.opacity = "0";
        experienceRole.style.transform = "translateY(30px)";
        experienceRole.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    }

    if (companyAndArea) {
        companyAndArea.style.opacity = "0";
        companyAndArea.style.transform = "translateY(30px)";
        companyAndArea.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    }

    if (experienceDescription) {
        experienceDescription.style.opacity = "0";
        experienceDescription.style.transform = "translateY(30px)";
        experienceDescription.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    }

    setTimeout(() => {
        if (header) {
            header.style.opacity = "1";
            header.style.transform = "translateY(0)";
        }
    }, 300);

    setTimeout(() => {
        const heroSection = document.querySelector('.hero');
        if (heroSection && heroSection.style.opacity === "0") {
            heroSection.style.opacity = "1";
            heroSection.style.transform = "translateY(0)";
        }
    }, 800);

    setTimeout(revealElements, 1200);

    window.addEventListener('scroll', revealElements);
});