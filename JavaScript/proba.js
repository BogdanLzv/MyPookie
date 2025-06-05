const dugme = document.getElementById("sledecaSlika");

const velikaSlika = document.getElementById("probaSlika");

const prvaMalaSlika = document.getElementById("manjaSlika1");

const drugaMalaSlika = document.getElementById("manjaSlika2");


dugme.addEventListener("click", () => {
    
    const tempId2 = velikaSlika.src;

    velikaSlika.src = prvaMalaSlika.src;
    prvaMalaSlika.src = drugaMalaSlika.src;
    drugaMalaSlika.src = tempId2;
})

    document.getElementById("swapButton").addEventListener("click", function () {
    // Get current elements by ID
    const divA = document.getElementById("div1");
    const divB = document.getElementById("div2");

    // Swap their IDs
    const tempId = divA.id;
    divA.id = divB.id;
    divB.id = tempId;

    // Update visible text to show new IDs
    divA.textContent = `Div A (ID: ${divA.id})`;
    divB.textContent = `Div B (ID: ${divB.id})`;

    // Add visual feedback
    divA.classList.add("highlight");
    divB.classList.add("highlight");

    // Remove highlight after a short delay
    setTimeout(() => {
      divA.classList.remove("highlight");
      divB.classList.remove("highlight");
    }, 600);
  });

