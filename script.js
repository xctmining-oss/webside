const form = document.querySelector(".quote-form");
const whatsappLink = document.querySelector("#whatsapp-rfq");
const copyButton = document.querySelector("#copy-rfq");
const formStatus = document.querySelector("#form-status");
const partSearch = document.querySelector("#part-search");
const finderResults = Array.from(document.querySelectorAll(".finder-result"));
const quickSearches = document.querySelectorAll("[data-search]");

function buildRfqText(data) {
  return (
    `Crusher model: ${data.get("Crusher model") || ""}\n` +
    `Part required: ${data.get("Part required") || ""}\n` +
    `Quantity: ${data.get("Quantity") || ""}\n` +
    `Destination country: ${data.get("Destination country") || ""}\n\n` +
    `${data.get("Message") || ""}\n\n` +
    "Please attach drawings, photos, OEM reference numbers or nameplate images when available."
  );
}

function updateRfqLinks() {
  if (!form) return "";
  const data = new FormData(form);
  const subject = encodeURIComponent(`RFQ - ${data.get("Part required") || "Crusher Parts"}`);
  const bodyText = buildRfqText(data);
  const body = encodeURIComponent(bodyText);

  form.action = `mailto:leon@xctmining.com?subject=${subject}&body=${body}`;
  if (whatsappLink) {
    whatsappLink.href = `https://wa.me/8613013110975?text=${body}`;
  }
  return bodyText;
}

if (form) {
  form.addEventListener("input", updateRfqLinks);
  form.addEventListener("submit", updateRfqLinks);
  updateRfqLinks();
}

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const text = updateRfqLinks();
    try {
      await navigator.clipboard.writeText(text);
      if (formStatus) formStatus.textContent = "RFQ text copied. Paste it into email, WhatsApp or your procurement system.";
    } catch {
      if (formStatus) formStatus.textContent = "Copy failed. Please select the form text manually or use Email RFQ.";
    }
  });
}

function filterParts(value) {
  const query = value.trim().toLowerCase();
  finderResults.forEach((result) => {
    const haystack = `${result.textContent} ${result.dataset.keywords || ""}`.toLowerCase();
    result.classList.toggle("is-hidden", query.length > 0 && !haystack.includes(query));
  });
}

if (partSearch) {
  partSearch.addEventListener("input", () => filterParts(partSearch.value));
}

quickSearches.forEach((button) => {
  button.addEventListener("click", () => {
    if (!partSearch) return;
    partSearch.value = button.dataset.search || "";
    filterParts(partSearch.value);
    partSearch.focus();
  });
});
