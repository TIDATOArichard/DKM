// Test d'intégration WhatsApp
// Pour tester : ouvrir la console du navigateur et exécuter ces fonctions

// Fonction pour tester l'URL WhatsApp générée
function testWhatsAppURL(phoneNumber = "+22871332345", message = "Test message") {
  const cleanedPhone = phoneNumber.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${cleanedPhone}?text=${encodedMessage}`;
  
  console.log("Numéro original:", phoneNumber);
  console.log("Numéro nettoyé:", cleanedPhone);
  console.log("Message encodé:", encodedMessage);
  console.log("URL WhatsApp:", whatsappUrl);
  
  return whatsappUrl;
}

// Test avec différents messages
function testProductMessages() {
  const products = [
    { name: "Pintade Local", price: "7000 FCFA" },
    { name: "Poule", price: "5000 FCFA" },
    { name: "Œufs Frais de Pintade", price: "200 FCFA l'unité" }
  ];
  
  products.forEach(product => {
    const message = `Bonjour ! Je souhaiterais commander : ${product.name} - ${product.price}. Pourriez-vous me donner plus d'informations ?`;
    console.log(`Message pour ${product.name}:`, message);
    console.log(`URL:`, testWhatsAppURL("+22871332345", message));
    console.log("---");
  });
}

// Exporter les fonctions pour les tests
if (typeof window !== 'undefined') {
  window.testWhatsAppURL = testWhatsAppURL;
  window.testProductMessages = testProductMessages;
}
