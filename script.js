const TwitchAdblocker = {

  // Méthode pour bloquer les publicités vidéo
  blockVideoAds() {
    // Obtenez l'élément de la balise vidéo
    const videoElement = document.querySelector("video");

    // Obtenez l'élément de la balise d'annonce
    const adElement = document.querySelector(".ttv_ad");

    // Supprimez l'élément de la balise d'annonce
    if (adElement) {
      adElement.remove();
    }
  },

  // Méthode pour bloquer les publicités contextuelles
  blockContextAds() {
    // Obtenez la liste des éléments qui contiennent des publicités contextuelles
    const adElements = document.querySelectorAll(".ttv_ad_container");

    // Supprimez les éléments qui contiennent des publicités contextuelles
    for (const adElement of adElements) {
      adElement.remove();
    }
  },

  // Méthode pour bloquer les publicités qui sont chargées dynamiquement
  blockDynamicAds() {
    // Obtenez le gestionnaire d'événements "DOMContentLoaded" de la page Web
    document.addEventListener("DOMContentLoaded", () => {

      // Chargez la bibliothèque de filtrage de contenu
      const adblock = new AdBlockPlus();

      // Bloquez les publicités qui sont chargées de manière dynamique
      adblock.block("script[src*='twitch.tv/embed/']");
    });
  },

  // Méthode pour initialiser l'extension
  init() {
    // Activez les méthodes pour bloquer les publicités
    this.blockVideoAds();
    this.blockContextAds();
    this.blockDynamicAds();
  }
};

// Initialisation de l'extension
TwitchAdblocker.init();
