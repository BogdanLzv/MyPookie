// ANIMATION FOR ANIMAL KIND SECTION ˘˘˘˘˘˘˘˘

// Capturing elements˘˘˘˘˘˘

const animalKind = document.getElementById("createAd-animalKind-select");
const animalKindList = document.getElementById("createAd-animalKind-list");
const animalKindArrow = document.getElementById("createAd-animalKindArrow");
const animalKindText = document.getElementById("createAd-animalKind-text");

// Functions for changing detail lists ˘˘˘˘˘˘

const detailListDisplay = (eventTarget, changedTarget_1, changedTarget_2, changedTarget_3) => {
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


// Executing detail lists display function on all lists ˘˘˘˘˘˘

// Animal kind ˘˘˘˘˘˘

detailListDisplay(animalKind, animalKindList, animalKindArrow, animalKindText);