const downloadBtn = document.querySelector(".download-btn");
        const filelink = "https://drive.google.com/file/d/1-wURbQGkJQh2YLiSHcDwuXpPljQJSWF2/view?usp=drive_link";

        const initTimer = () => {
            if (downloadBtn.classList.contains("disable-timer")) {
                return (location.href = filelink);
            }

            let timer = downloadBtn.dataset.timer;
            downloadBtn.classList.add("timer");
            downloadBtn.innerHTML = ` Your File Will Download in <b>${timer} </b> seconds `;

            const initCounter = setInterval(() => {
                if (timer > 0) {
                    timer--;
                    downloadBtn.innerHTML = ` Your File Will Download in <b>${timer} </b> seconds `;
                } else {
                    clearInterval(initCounter);
                    location.href = filelink;
                    downloadBtn.textContent = "Your File Is Downloading......";
                    setTimeout(() => {
                        downloadBtn.classList.replace("timer", "disable-timer");
                        downloadBtn.innerHTML = '<i class="fa-solid fa-download"></i> <span class="text">Download Again</span>';
                    }, 1000);
                }
            }, 1000);
        };

        downloadBtn.addEventListener("click", initTimer);