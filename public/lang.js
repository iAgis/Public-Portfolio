document.addEventListener("DOMContentLoaded", function () {
  const supportedLangs = ["en", "es"];
  const defaultLang = "en";

  // Función para redirigir a la versión correcta del sitio
  function redirectToLanguageVersion(lang) {
    const currentUrl = window.location.href;
    if (lang === "en" && !currentUrl.endsWith("/")) {
      window.location.href = "https://www.agustinlemes.com";
    } else if (lang === "es" && !currentUrl.endsWith("/es")) {
      window.location.href = "https://www.agustinlemes.com/es";
    }
  }

  // Obtener el idioma preferido almacenado o detectar el idioma del navegador
  function getPreferredLanguage() {
    const storedLang = localStorage.getItem("preferredLanguage");
    if (storedLang && supportedLangs.includes(storedLang)) return storedLang;
    const browserLang = (navigator.language || navigator.userLanguage).split(
      "-"
    )[0];
    return supportedLangs.includes(browserLang) ? browserLang : defaultLang;
  }

  // Guardar el idioma preferido
  function setPreferredLanguage(lang) {
    if (supportedLangs.includes(lang)) {
      localStorage.setItem("preferredLanguage", lang);
    }
  }

  // Establecer el idioma preferido si se selecciona otro idioma
  window.setLanguage = function (lang, event) {
    event.preventDefault(); // Prevenir la acción predeterminada del enlace
    setPreferredLanguage(lang);
    redirectToLanguageVersion(lang);
  };

  // Redirigir según el idioma preferido
  const preferredLang = getPreferredLanguage();
  // redirectToLanguageVersion(preferredLang);
});
