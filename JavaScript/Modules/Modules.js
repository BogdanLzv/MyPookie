// MOUSE TRANSITIONS FOR THE NAV OF THE SITE OR "THE MENU" ˘˘˘˘˘˘˘˘

// Functions for changing table row text when table rows are being hovered over ("hover functions")˘˘˘˘˘˘

export const tableRowHover = (eventTarget, changedTarget) => {
    eventTarget.addEventListener("mouseover", () => {
        changedTarget.style.fontSize = "24px";
        changedTarget.style.color = "black";
        changedTarget.style.transition = "0.3s"
    });
};

export const tableRowMouseOut = (eventTarget, changedTarget) => {
    eventTarget.addEventListener("mouseleave", () => {
        changedTarget.style.fontSize = "23px"
        changedTarget.style.color = "darkmagenta";
    });
};


// Functions for changing table rows when they are being clicked ("click functions")˘˘˘˘˘˘

export const tableRowClick = (eventTarget, changedTarget) => {
    eventTarget.addEventListener("mousedown", () => {
        changedTarget.style.fontSize = "22px"
        changedTarget.style.transition = "0s"
    });
};

export const tableRowMouseUp = (eventTarget, changedTarget) => {
    eventTarget.addEventListener("mouseup", () => {
        changedTarget.style.fontSize = "24px"
    });
};


// TRANSITIONS FOR A "DETAIL SEARCH" SECTION ˘˘˘˘˘˘˘˘

// Functionn for changing detail lists ˘˘˘˘˘˘

export const detailListDisplay = (eventTarget, changedTarget_1, changedTarget_2, changedTarget_3) => {
    eventTarget.addEventListener("click", () => {
        const targetDisplay = window.getComputedStyle(changedTarget_1).display;
        const targetTransform = window.getComputedStyle(changedTarget_2).transform;
        const targetColor = window.getComputedStyle(changedTarget_3).color;

        // Fix mismatch in a color value ˘˘˘˘˘˘
        const isColorDarkMagenta = (targetColor === "rgb(139, 0, 139)"); // darkmagenta in RGB

        if (targetDisplay === "none" && targetTransform === "none" && isColorDarkMagenta) {
            changedTarget_1.style.display = "flex";
            changedTarget_2.style.transform = "rotate(180deg)";
            changedTarget_3.style.color = "rgb(187, 143, 169)"; // purple-grayish color
        } else {
            changedTarget_1.style.display = "none";
            changedTarget_2.style.transform = "none";
            changedTarget_3.style.color = "darkmagenta";
        };
    });
};
