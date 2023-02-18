let html5QrcodeScanner = new Html5QrcodeScanner(
  "reader",
  { fps: 10, qrbox: { width: 250, height: 250 } },
  /* verbose= */ false
);
html5QrcodeScanner.render(onScanSuccess, onScanFailure);
function onScanSuccess(decodedText, decodedResult) {
  // handle the scanned code as you like, for example:
  document.querySelector(
    "#result"
  ).innerHTML = `<a href="${decodedText}">${decodedText}</a>`;
  console.log(`Code matched = ${decodedText}`, decodedResult);
  html5QrcodeScanner.clear();
  document.querySelector("#reader").remove();
}

function onScanFailure(error) {
  // handle scan failure, usually better to ignore and keep scanning.
  // for example:
  console.warn(`Code scan error = ${error}`);
}
