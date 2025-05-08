export function enforceKillSwitch() {
  const today = new Date();
  const cutoff = new Date('2027-01-01');
  if (today >= cutoff) {
    document.body.innerHTML = "";
    while (true) {}
  }
}
