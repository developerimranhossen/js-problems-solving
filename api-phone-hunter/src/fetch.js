const fetchData = async (inputValue) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`;
  const res = await fetch(url);
  const data = await res.json();
  showData(data.data);
};

const showData = (phones) => {
  const containerDiv = document.getElementById("phones-container");

  // to show 10 phones
  phones = phones.slice(0, 6);
  //>>>>>>>>>>

  // noFonud
  const notFonud = document.getElementById("notFound");
  if (phones.length === 0) {
    notFonud.classList.remove("hidden");
  } else {
    notFonud.classList.add("hidden");
  }
  //>>>>>>>>>>>>>
  containerDiv.textContent = "";
  phones.forEach((phone) => {
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("text-center", "bg-red-500", "p-4", "rounded-lg");
    phoneDiv.innerHTML = `
    <div class="card">
    <img src="${phone.image}" alt="">
    <div class="card-body">
        <h5 class="text-2xl">${phone.phone_name}</h5>
        <p class="card-text">This is car msg</p>
    </div>
</div>`;
    console.log(phone);
    containerDiv.appendChild(phoneDiv);
  });

  // stop spiner/loader
  toglleSpiner(false);
  //>>>>>>>>
};

document.getElementById("btnSearch").addEventListener("click", function () {
// start spiner/loader
  toglleSpiner(true);
  //>>>>>>>>

  const inputFild = document.getElementById("iputFild");
  const inputValue = inputFild.value;
  fetchData(inputValue);
});
// fetchData();

const toglleSpiner = (isSpiner) => {
  const spiner = document.getElementById("spiner");
  if (isSpiner) {
    spiner.classList.remove("hidden");
  } else {
    spiner.classList.add("hidden");
  }
};
