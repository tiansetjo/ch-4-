//fungsi random komputer
function getPilihanComputer() {
  const computer = Math.random();
  if (computer < 0.34) return "gunting";
  if (computer >= 0.34 && computer < 0.67) return "batu";
  return "kertas";
}

// menentukan rules
function getHasil(computer, player) {
  if (player == computer) return "DRAW";
  if (player == "gunting") return computer == "batu" ? "PLAYER <br /> WIN" : "COMPUTER <br /> LOSE";
  if (player == "batu") return computer == "gunting" ? "PLAYER <br /> WIN" : "COMPUTER <br /> LOSE";
  if (player == "kertas") return computer == "batu" ? "PLAYER <br /> WIN" : "COMPUTER <br /> LOSE";
}

const pBatu = document.querySelector(".batu");
pBatu.addEventListener("click", function () {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pBatu.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);
  const imgComputer = document.querySelector(".img-komputer");
  const info = document.getElementById("info");
  info.classList.add("infostyle");
  info.innerHTML = hasil;
  console.log("computer:" + pilihanComputer);
  console.log("player:" + pilihanPlayer);
  console.log("hasil" + hasil);
});

const pKertas = document.querySelector(".kertas");
pKertas.addEventListener("click", function () {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pKertas.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);
  const imgComputer = document.querySelector(".img-komputer");
  const info = document.getElementById("info");
  info.classList.add("infostyle");
  info.innerHTML = hasil;
  console.log("comp:" + pilihanComputer);
  console.log("player:" + pilihanPlayer);
  console.log("hasil" + hasil);
});

const pGunting = document.querySelector(".gunting");
pGunting.addEventListener("click", function () {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pGunting.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);
  const imgComputer = document.querySelector(".img-komputer");
  const info = document.getElementById("info");
  info.classList.add("infostyle");
  info.innerHTML = hasil;
  console.log("comp:" + pilihanComputer);
  console.log("player:" + pilihanPlayer);
  console.log("hasil" + hasil);
});
