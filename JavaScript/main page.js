
// Capturing elements in a first table row ˘˘˘˘˘˘

const profileTableRow = document.getElementById("firstTableRow");
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

// Capturing elements in a sixth table row ˘˘˘˘˘˘

const logOutTableRow = document.getElementById("logOutTableRow");
const logOutText = document.getElementById("logOutText");

// Functions for changing table row text when table rows are being hovered over ("hover functions")˘˘˘˘˘˘

const tableRowHover = (eventTarget, changedTarget) => {
    eventTarget.addEventListener("mouseover", () => {
        changedTarget.style.fontSize = "25px"
    });
};

const tableRowMouseOut = (eventTarget, changedTarget) => {
    eventTarget.addEventListener("mouseleave", () => {
        changedTarget.style.fontSize = "23px"
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

// Fifth row ˘˘˘˘˘˘
tableRowHover(settingsTableRow, settingsText);
tableRowMouseOut(settingsTableRow, settingsText);

// Final row ˘˘˘˘˘˘
tableRowHover(logOutTableRow, logOutText);
tableRowMouseOut(logOutTableRow, logOutText);