import {
    tableRowHover,
    tableRowMouseOut,
    tableRowClick,
    tableRowMouseUp,
    detailListDisplay
} from './Modules/Modules.js';



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

detailSearchSection.style.display = "none";  // Sets initial state for the detail search section to "none"

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



// Executing detail lists display function on all lists ˘˘˘˘˘˘

// Animal kind ˘˘˘˘˘˘

detailListDisplay(animalKind, animalKindList, animalKindArrow, animalKindText);