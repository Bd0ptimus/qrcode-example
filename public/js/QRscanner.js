function success(result) {
  // handle the scanned code as you like, for example:
    location.href = result;
  console.log(result);
  scanner.clear();
}

function error(error) {
  // handle scan failure, usually better to ignore and keep scanning.
  // for example:
  scanner.stop();
  console.error(error);
}
const scanner = new Html5QrcodeScanner(
  "reader",
  { fps: 24, qrbox: { width: 250, height: 250 } },
  false
);
scanner.render(success, error);
console.log(Html5QrcodeScanner);
