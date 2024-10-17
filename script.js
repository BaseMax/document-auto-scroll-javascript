document.addEventListener("DOMContentLoaded", function() {
    const toc = document.getElementById("toc");
    const headers = document.querySelectorAll("#content h1, #content h2, #content h3, #content h4, #content h5, #content h6");

    headers.forEach(header => {
        const li = document.createElement("li");
        li.textContent = header.textContent;
        li.dataset.target = header.id || header.textContent.replace(/\s+/g, '-').toLowerCase();
        header.id = li.dataset.target;

        li.addEventListener("click", function() {
            document.getElementById(header.id).scrollIntoView({ behavior: "smooth" });
        });

        const level = parseInt(header.tagName.charAt(1), 10);
        if (level === 1) {
            toc.appendChild(li);
        } else {
            let parentLi = toc.querySelector(`li[data-target="${header.parentElement.id}"]`);
            if (parentLi) {
                let ul = parentLi.querySelector("ul");
                if (!ul) {
                    ul = document.createElement("ul");
                    parentLi.appendChild(ul);
                }
                ul.appendChild(li);
            }
        }
    });

    const options = {
        root: null,
        threshold: 0.5,
    };

    const callback = (entries) => {
        entries.forEach(entry => {
            const id = entry.target.id;
            const li = toc.querySelector(`li[data-target="${id}"]`);
            if (entry.isIntersecting) {
                if (li) {
                    li.classList.add("active");
                }
            } else {
                if (li) {
                    li.classList.remove("active");
                }
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    headers.forEach(header => observer.observe(header));
});
