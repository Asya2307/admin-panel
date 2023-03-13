import axios from "axios";

const API_URL = "http://localhost:3004/settings";

const $color = document.querySelector(".js-color");
const $btnOpen = document.querySelector(".js-panel-open");
const $btnClose = document.querySelector(".js-panel-close");

const $settingForm = document.querySelector(".js-panel-form");


const choiseColor = value => {
  document.documentElement.style.setProperty("--prm", value);
  $color.value = value;
};

const openPanel = e => {
  e.currentTarget.classList.add("hide");
  e.currentTarget.closest(".js-panel").classList.add("active");
};

const closePanel = e => {
  const $this = e.currentTarget;

  setTimeout(() => {
    $this
      .closest(".js-panel")
      .querySelector(".js-panel-open")
      .classList.remove("hide");
  }, 200);

  $this.closest(".js-panel").classList.remove("active");
};

$color && $color.addEventListener("input", e => choiseColor(e.target.value));

$btnOpen && $btnOpen.addEventListener("click", e => openPanel(e));

$btnClose && $btnClose.addEventListener("click", e => closePanel(e));


const putRequest = data => {
  return axios({
    method: "put",
    url: API_URL,
    data: data
  });
};

const getRequest = () => {
  return axios({
    method: "get",
    url: API_URL
  });
};


const saveSettings = (e, set) => {
  const $this = e.currentTarget;

  putRequest(set)
    .then((response) => {
      $this.querySelector(".js-alert").classList.add("active");

      setTimeout(() => {
        $this.querySelector(".js-alert").classList.remove("active");
      }, 1000);
    })
    .catch((error) =>
      error.response.status === 404
        ? console.log("Resource could not be found!")
        : console.log(error.message)
    );
};

const setSettings = () => {
  getRequest()
    .then((response) => {
      console.log(response);
      document.querySelectorAll("[data-type]").forEach((item) => {
        const type = item.dataset.type;

        if (type == "colorScheme") {
          choiseColor(response.data[type]);
        } else {
          return (item.checked = response.data[type]);
        }
      });
    })
    .catch((error) =>
      error.response.status === 404
        ? console.log("Resource could not be found!")
        : console.log(error.message)
    );
};

if ($settingForm) {
  setSettings();

  $settingForm.addEventListener("submit", e => {
    
    let setting = {};

    e.preventDefault();

    e.currentTarget
      .closest(".js-panel")
      .querySelectorAll("[data-type]")
      .forEach(item => {
        if (item.getAttribute("type") == "color") {
          setting[item.dataset.type] = item.value;
        } else {
          setting[item.dataset.type] = item.checked;
        }
      });

    saveSettings(e, setting);
  });
}
