chrome.storage.local.get("backgroundColor", (data) => {
    if (data.backgroundColor) {
      document.body.style.backgroundColor = data.backgroundColor;
    }
  });
