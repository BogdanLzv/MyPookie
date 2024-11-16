
// MOUSE TRANSITIONS FOR THE NAV OF THE SITE OR "THE MENU" ˘˘˘˘˘˘˘˘

// Capturing elements in a first table row ˘˘˘˘˘˘

const profileTableRow = document.getElementById("profileTableRow");
const myProfileText = document.getElementById("myProfileText");

// Capturing elements in a second table row ˘˘˘˘˘˘

const inboxTableRow = document.getElementById("inboxTableRow");
const inboxText = document.getElementById("inboxText");

// Capturing elements in a third table row ˘˘˘˘˘˘

const notificationsTableRow = document.getElementById("notificationsTableRow");
const notificationsText = document.getElementById("notificationsText");

// Capturing elements in a fourth table row ˘˘˘˘˘˘

const reviewsTableRow = document.getElementById("reviewsTableRow");
const reviewsText = document.getElementById("reviewsText");

// Capturing elements in a fifth table row ˘˘˘˘˘˘

const savedAdsTableRow = document.getElementById("savedAdsTableRow");
const savedAdsText = document.getElementById("savedAdsText");

// Capturing elements in a sixth table row ˘˘˘˘˘˘

const settingsTableRow = document.getElementById("settingsTableRow");
const settingsText = document.getElementById("settingsText");

// Capturing elements in a final table row ˘˘˘˘˘˘

const logOutTableRow = document.getElementById("logOutTableRow");
const logOutText = document.getElementById("logOutText");

// Functions for changing table row text when table rows are being hovered over ("hover functions")˘˘˘˘˘˘

const tableRowHover = (eventTarget, changedTarget) => {
    eventTarget.addEventListener("mouseover", () => {
        changedTarget.style.fontSize = "24px";
        changedTarget.style.color = "black";
        changedTarget.style.transition = "0.3s"
    });
};

const tableRowMouseOut = (eventTarget, changedTarget) => {
    eventTarget.addEventListener("mouseleave", () => {
        changedTarget.style.fontSize = "23px"
        changedTarget.style.color = "darkmagenta";
    });
};

// Executing "hover functions" on all rows ˘˘˘˘˘˘

// First row ˘˘˘˘˘˘
tableRowHover(profileTableRow, myProfileText);
tableRowMouseOut(profileTableRow, myProfileText);

// Second row ˘˘˘˘˘˘
tableRowHover(inboxTableRow, inboxText);
tableRowMouseOut(inboxTableRow, inboxText);

// Third row ˘˘˘˘˘˘
tableRowHover(notificationsTableRow, notificationsText);
tableRowMouseOut(notificationsTableRow, notificationsText);

// Fourth row ˘˘˘˘˘˘
tableRowHover(reviewsTableRow, reviewsText);
tableRowMouseOut(reviewsTableRow, reviewsText);

// Fifth row ˘˘˘˘˘˘
tableRowHover(savedAdsTableRow, savedAdsText);
tableRowMouseOut(savedAdsTableRow, savedAdsText);

// Sixth row ˘˘˘˘˘˘
tableRowHover(settingsTableRow, settingsText);
tableRowMouseOut(settingsTableRow, settingsText);

// Final row ˘˘˘˘˘˘
tableRowHover(logOutTableRow, logOutText);
tableRowMouseOut(logOutTableRow, logOutText);


// Functions for changing table rows when they are being clicked ("click functions")˘˘˘˘˘˘

const tableRowClick = (eventTarget, changedTarget) => {
    eventTarget.addEventListener("mousedown", () => {
        changedTarget.style.fontSize = "22px"
        changedTarget.style.transition = "0s"
    });
};

const tableRowMouseUp = (eventTarget, changedTarget) => {
    eventTarget.addEventListener("mouseup", () => {
        changedTarget.style.fontSize = "24px"
    });
};

// Executing "click functions" on all rows ˘˘˘˘˘˘

// First row ˘˘˘˘˘˘
tableRowClick(profileTableRow, myProfileText);
tableRowMouseUp(profileTableRow, myProfileText);

// Second row ˘˘˘˘˘˘
tableRowClick(inboxTableRow, inboxText);
tableRowMouseUp(inboxTableRow, inboxText);

// Third row ˘˘˘˘˘˘
tableRowClick(notificationsTableRow, notificationsText);
tableRowMouseUp(notificationsTableRow, notificationsText);

// Fourth row ˘˘˘˘˘˘
tableRowClick(reviewsTableRow, reviewsText);
tableRowMouseUp(reviewsTableRow, reviewsText);

// Fifth row ˘˘˘˘˘˘
tableRowClick(savedAdsTableRow, savedAdsText);
tableRowMouseUp(savedAdsTableRow, savedAdsText);

// sixth row ˘˘˘˘˘˘
tableRowClick(settingsTableRow, settingsText);
tableRowMouseUp(settingsTableRow, settingsText);

// Final row ˘˘˘˘˘˘
tableRowClick(logOutTableRow, logOutText);
tableRowMouseUp(logOutTableRow, logOutText);


// TRANSITIONS FOR A "DETAIL SEARCH" SECTION ˘˘˘˘˘˘˘˘

// Capturing elements in detail search section ˘˘˘˘˘˘

const detailSearch = document.getElementById("detailSearch");
const detailSearchSection = document.getElementById("detailSearchSection");
const dsArrow = document.getElementById("dsArrow")
const animalKind = document.getElementById("animalKind-select");
const animalKindList = document.getElementById("animalKind-list");
const animalKindArrow = document.getElementById("animalKindArrow");
const animalKindText = document.getElementById("animalKind-text");
const bodyCover = document.getElementById("bodyCover")

// Function for opening detail search section ˘˘˘˘˘˘

detailSearch.onclick = function() {
    if (detailSearchSection.style.display === "none") {
        detailSearchSection.style.display = "flex";
        dsArrow.style.transform = "rotate(180deg)";
        bodyCover.style.display = "block";
    } else {
        detailSearchSection.style.display = "none";
        dsArrow.style.transform = "none";
        bodyCover.style.display = "none";
    };
};


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