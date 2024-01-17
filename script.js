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
      // Obtenez le gestionnaire d'événements "load" de la page Web
      const eventListener = document.addEventListener("load", () => {
  
        // Obtenez la liste des scripts qui sont chargés dynamiquement
        const scripts = document.querySelectorAll("script[src]");
  
        // Supprimez les scripts qui sont chargés dynamiquement et qui contiennent des publicités
        for (const script of scripts) {
          if (script.src.includes("twitch.tv/embed/")) {
            script.remove();
          }
        }
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