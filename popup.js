// Apply Background Color
document.getElementById("apply-color").addEventListener("click", async () => {
    const color = document.getElementById("bg-color").value;
    
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.storage.local.set({ backgroundColor: color }); // Save color preference
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setBackgroundColor,
      args: [color]
    });
  });
  
  function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }
  
  // Highlight Text
  document.getElementById("highlight-btn").addEventListener("click", async () => {
    const text = document.getElementById("highlight-text").value;
    
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: highlightText,
      args: [text]
    });
  });
  
  function highlightText(text) {
    if (!text) return;
    const regex = new RegExp(text, "gi");
    document.body.innerHTML = document.body.innerHTML.replace(regex, `<mark>${text}</mark>`);
  }
  
  // Add Banner
  document.getElementById("add-banner").addEventListener("click", async () => {
    const bannerText = document.getElementById("banner-text").value;
    
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: addBanner,
      args: [bannerText]
    });
  });
  
  function addBanner(text) {
    if (!text) return;
    const banner = document.createElement("div");
    banner.textContent = text;
    banner.style.position = "fixed";
    banner.style.top = "0";
    banner.style.left = "0";
    banner.style.width = "100%";
    banner.style.backgroundColor = "#007bff";
    banner.style.color = "white";
    banner.style.textAlign = "center";
    banner.style.padding = "10px";
    banner.style.zIndex = "10000";
    document.body.prepend(banner);
  }
