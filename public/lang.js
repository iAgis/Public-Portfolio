document.addEventListener("DOMContentLoaded", function () {
  const supportedLangs = ["en", "es"];
  const defaultLang = "en";
  let redirectAttempted = false;

  // Función para redirigir a la versión correcta del sitio
  function redirectToLanguageVersion(lang) {
    if (redirectAttempted) return; // Evitar redirección múltiple
    redirectAttempted = true;

    const currentUrl = window.location.href;
    const baseUrl = "https://www.agustinlemes.com";
    const langPath = lang === "en" ? "" : `/${lang}`;
    const targetUrl = `${baseUrl}${langPath}`;

    if (currentUrl !== targetUrl) {
      window.location.href = targetUrl;
    }
  }

  // Obtener el idioma preferido almacenado o detectar el idioma del navegador
  function getPreferredLanguage() {
    const storedLang = localStorage.getItem("preferredLanguage");
    if (storedLang && supportedLangs.includes(storedLang)) {
      return storedLang;
    }
    const browserLang = (navigator.language || navigator.userLanguage).split(
      "-"
    )[0];
    // Si el idioma del navegador no está soportado, usar el idioma por defecto
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
  redirectToLanguageVersion(preferredLang);
});
