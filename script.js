const form = document.querySelector(".quote-form");
const whatsappLink = document.querySelector("#whatsapp-rfq");
const copyButton = document.querySelector("#copy-rfq");
const formStatus = document.querySelector("#form-status");
const partSearch = document.querySelector("#part-search");
const finderResults = Array.from(document.querySelectorAll(".finder-result"));
const quickSearches = document.querySelectorAll("[data-search]");

function getRfqEndpoint() {
  if (!form) return "";
  const endpoint = (window.XCT_RFQ_ENDPOINT || form.dataset.rfqEndpoint || "").trim();
  if (!endpoint || endpoint.includes("YOUR_PROJECT_REF")) return "";
  return endpoint;
}

function buildRfqText(data) {
  return (
    `Customer name: ${data.get("Customer name") || ""}\n` +
    `Customer contact: ${data.get("Customer contact") || ""}\n` +
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
  form.addEventListener("submit", async (event) => {
    updateRfqLinks();
    const endpoint = getRfqEndpoint();
    if (!endpoint) return;

    event.preventDefault();
    const data = new FormData(form);
    if (formStatus) formStatus.textContent = "Sending RFQ...";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: data.get("Customer name") || "",
          customerContact: data.get("Customer contact") || "",
          crusherModel: data.get("Crusher model") || "",
          partRequired: data.get("Part required") || "",
          quantity: data.get("Quantity") || "",
          destinationCountry: data.get("Destination country") || "",
          message: data.get("Message") || "",
          website: data.get("Website") || "",
          sourcePage: window.location.href,
          pageLanguage: document.documentElement.lang || "en",
        }),
      });

      if (!response.ok) throw new Error("RFQ request failed");

      form.reset();
      updateRfqLinks();
      if (formStatus) formStatus.textContent = "Thank you. Your RFQ has been sent to XCT Mining.";
    } catch {
      if (formStatus) formStatus.textContent = "Submission failed. Please use Email RFQ or WhatsApp RFQ.";
    }
  });
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
