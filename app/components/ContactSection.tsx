/* eslint-disable react/no-unescaped-entities */
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

export default function ContactPage() {
    return (
        <section id='contact'>
            <div className="bg-white">
                <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
                    {/* Section Contact Form */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                        {/* Formulaire */}
                        <div className="order-2 lg:order-1">
                            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-amber-900 mb-6 sm:mb-8">Envoyez-nous un message</h1>

                            <form className="space-y-4 sm:space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-amber-800 mb-2 text-sm sm:text-base">Nom</label>
                                        <input
                                            type="text"
                                            placeholder="Votre nom"
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm sm:text-base"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-amber-800 mb-2 text-sm sm:text-base">Email</label>
                                        <input
                                            type="email"
                                            placeholder="Votre email"
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm sm:text-base"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-amber-800 mb-2 text-sm sm:text-base">Sujet</label>
                                    <input
                                        type="text"
                                        placeholder="Sujet de votre message"
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm sm:text-base"
                                    />
                                </div>

                                <div>
                                    <label className="block text-amber-800 mb-2 text-sm sm:text-base">Message</label>
                                    <textarea
                                        placeholder="Votre message"
                                        rows={4}
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm sm:text-base"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-colors"
                                >
                                    <Send className="w-5 h-5" />
                                    Envoyer le message
                                </button>
                            </form>
                        </div>

                        {/* Informations de contact */}
                        <div className="bg-amber-50 p-8 rounded-xl">
                            <h2 className="text-2xl font-bold font-serif text-amber-900 mb-6">Informations de contact</h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-amber-700 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-amber-900">Adresse</h3>
                                        <p className="text-amber-800">
                                            Agoè-Nyivé 1 <br />
                                            Agoè-Logope agbanyo kope
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Phone className="w-6 h-6 text-amber-700" />
                                    <div>
                                        <h3 className="font-semibold text-amber-900">Téléphone</h3>
                                        <p className="text-amber-800">+228 99 63 31 35</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Phone className="w-6 h-6 text-green-600" />
                                    <div>
                                        <h3 className="font-semibold text-amber-900">WhatsApp</h3>
                                        <p className="text-amber-800 mb-2">+228 71 33 23 45</p>
                                        <WhatsAppButton 
                                            phoneNumber="+22871332345"
                                            message="Bonjour ! Je souhaiterais obtenir des informations sur vos volailles et passer commande."
                                            className="text-sm px-4 py-2"
                                        >
                                            Contacter maintenant
                                        </WhatsAppButton>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Mail className="w-6 h-6 text-amber-700" />
                                    <div>
                                        <h3 className="font-semibold text-amber-900">Email</h3>
                                        <p className="text-amber-800">tidatoar@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Clock className="w-6 h-6 text-amber-700 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-amber-900">Horaires d'ouverture</h3>
                                        <p className="text-amber-800">
                                            Nous sommes a votre disposition 24h/24h & 7j/7j
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-amber-200">
                                <h3 className="font-semibold text-amber-900 mb-4">Suivez-nous</h3>
                                <div className="flex gap-4">
                                    {/* Ici vous pouvez ajouter vos icônes de réseaux sociaux */}
                                    <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center text-amber-700">
                                        <span className="text-lg">f</span>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center text-amber-700">
                                        <span className="text-lg">in</span>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center text-amber-700">
                                        <span className="text-lg">ig</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Carte de localisation */}
                    <div className="mt-16 rounded-xl overflow-hidden shadow-lg">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2182!2d1.2075!3d6.1858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s9XFP%2B2FG%20Badja!5e0!3m2!1sfr!2stg!4v1718000000000!5m2!1sfr!2stg"
                          width="100%"
                          height="450"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          title="Mon emplacement à Badja"
                        ></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
}