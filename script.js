const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open))});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

const io=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

const form=document.getElementById('quote-form');
const status=document.getElementById('form-status');
form?.addEventListener('submit',async(e)=>{
  e.preventDefault();
  if(!form.checkValidity()){form.reportValidity();return}
  const data=Object.fromEntries(new FormData(form).entries());
  status.textContent=document.documentElement.lang==='es'
    ? 'Solicitud capturada. Conectaremos este formulario al correo de reservaciones antes del lanzamiento final.'
    : 'Quote request captured. Connect this form to the client booking email before launch.';
  status.style.color='#16744a';
  console.log('Quote request',data);
  form.reset();
});

const translations = new Map([
  ['Skip to content','Saltar al contenido'],
  ['Menu','Menú'],
  ['About','Nosotros'],
  ['Events','Eventos'],
  ['Gallery','Galería'],
  ['Reviews','Reseñas'],
  ['FAQ','Preguntas'],
  ['Travel Area','Área de Servicio'],
  ['Request a Quote','Solicitar Cotización'],
  ['LIVE MUSIC • PRIVATE EVENTS • CELEBRATIONS','MÚSICA EN VIVO • EVENTOS PRIVADOS • CELEBRACIONES'],
  ['Turn Your Event Into a ','Convierte Tu Evento En Una '],
  ['Night to Remember.','Noche Inolvidable.'],
  ['El Grupo La Migra De Miguel Chachora Cota brings live energy, crowd connection, and a full-event atmosphere to weddings, quinceañeras, birthdays, private parties, festivals, and more.','El Grupo La Migra De Miguel Chachora Cota lleva energía en vivo, conexión con el público y un ambiente completo a bodas, quinceañeras, cumpleaños, fiestas privadas, festivales y más.'],
  ['See the Experience','Vive la Experiencia'],
  ['✓ Live performance','✓ Música en vivo'],
  ['✓ Event-ready setup','✓ Equipo listo para eventos'],
  ['✓ Custom booking','✓ Reservación personalizada'],
  ['HERO PHOTO / BAND IMAGE','FOTO PRINCIPAL / GRUPO'],
  ['Replace with client photo','Reemplazar con foto del cliente'],
  ['NOW BOOKING','FECHAS DISPONIBLES'],
  ['Weddings','Bodas'],
  ['Live celebration music','Música en vivo para celebrar'],
  ['Quinceañeras','Quinceañeras'],
  ['Big moments, big energy','Grandes momentos, gran energía'],
  ['Birthdays','Cumpleaños'],
  ['Make the party memorable','Haz la fiesta inolvidable'],
  ['Private Events','Eventos Privados'],
  ['Custom entertainment','Entretenimiento personalizado'],
  ['PERFORMANCE PHOTO','FOTO DE PRESENTACIÓN'],
  ['GROUP PHOTO','FOTO DEL GRUPO'],
  ['THE GROUP','EL GRUPO'],
  ['Music That Brings People Together.','Música Que Une a la Gente.'],
  ['From the first song to the final encore, El Grupo La Migra De Miguel Chachora Cota is built around creating an authentic live experience. The goal is simple: give every crowd something they can feel, sing along with, and remember.','Desde la primera canción hasta el cierre, El Grupo La Migra De Miguel Chachora Cota crea una experiencia auténtica de música en vivo. La meta es sencilla: darle al público algo que pueda sentir, cantar y recordar.'],
  ['Whether the event is intimate or packed with guests, the performance can be tailored around the occasion, venue, schedule, and audience.','Ya sea un evento íntimo o una celebración llena de invitados, la presentación puede adaptarse a la ocasión, el lugar, el horario y el público.'],
  ['Professional event communication','Comunicación profesional'],
  ['Flexible event formats','Formatos flexibles'],
  ['Energetic live performance','Presentación llena de energía'],
  ['Custom quote based on event details','Cotización según los detalles del evento'],
  ['PERFECT FOR','IDEAL PARA'],
  ['Events We Perform','Eventos Que Amenizamos'],
  ['TRAVEL AREA','ÁREA DE SERVICIO'],
  ['Based in Stockton. Traveling Up to Approximately 60 Miles.','Con Base en Stockton. Viajamos Hasta Aproximadamente 60 Millas.'],
  ['El Grupo La Migra De Miguel Chachora Cota is available for events throughout Stockton and surrounding communities. If your venue is near the edge of the service area, send us the address and event date so we can confirm travel availability.','El Grupo La Migra De Miguel Chachora Cota está disponible para eventos en Stockton y comunidades cercanas. Si tu lugar está cerca del límite del área de servicio, envíanos la dirección y la fecha del evento para confirmar disponibilidad.'],
  ['MILE RADIUS','MILLAS DE RADIO'],
  ['FROM STOCKTON, CA','DESDE STOCKTON, CA'],
  ['Stockton, California — Home Base','Stockton, California — Base Principal'],
  ['Serving weddings, quinceañeras, birthdays, private parties, festivals, and special events across the surrounding region.','Atendemos bodas, quinceañeras, cumpleaños, fiestas privadas, festivales y eventos especiales en toda la región cercana.'],
  ['Don’t see your city?','¿No ves tu ciudad?'],
  ['Send us your venue address. Travel availability is based on the event date, route, venue location, and schedule.','Envíanos la dirección del lugar. La disponibilidad para viajar depende de la fecha, ruta, ubicación del evento y horario.'],
  ['Check Your Location','Consultar Tu Ubicación'],
  ['Built for celebrations where live music should feel like part of the experience—not background noise.','Para celebraciones donde la música en vivo debe ser parte de la experiencia, no solo música de fondo.'],
  ['Create a lively, memorable atmosphere for your reception and celebration.','Crea un ambiente animado e inolvidable para tu recepción y celebración.'],
  ['Music for one of the biggest milestones, with energy for family and friends.','Música para uno de los momentos más importantes, con energía para familia y amigos.'],
  ['Turn birthdays and milestone celebrations into a full live-music experience.','Convierte cumpleaños y celebraciones especiales en una experiencia completa de música en vivo.'],
  ['Private Parties','Fiestas Privadas'],
  ['Backyard events, anniversaries, family gatherings, company celebrations and more.','Fiestas en casa, aniversarios, reuniones familiares, eventos de empresa y más.'],
  ['Festivals','Festivales'],
  ['Live performance for community events, outdoor celebrations, and public gatherings.','Música en vivo para eventos comunitarios, celebraciones al aire libre y reuniones públicas.'],
  ['Custom Events','Eventos Personalizados'],
  ['Have a different event in mind? Send the details and request a custom quote.','¿Tienes otro tipo de evento? Envíanos los detalles y solicita una cotización personalizada.'],
  ['THE EXPERIENCE','LA EXPERIENCIA'],
  ['Gallery','Galería'],
  ['Replace these placeholders with real performance, crowd, and event photos.','Estos espacios se reemplazarán con fotos reales de presentaciones, público y eventos.'],
  ['LIVE PERFORMANCE','PRESENTACIÓN EN VIVO'],
  ['CROWD / EVENT','PÚBLICO / EVENTO'],
  ['BAND PHOTO','FOTO DEL GRUPO'],
  ['STAGE SETUP','MONTAJE DEL ESCENARIO'],
  ['CELEBRATION','CELEBRACIÓN'],
  ['BEHIND THE SCENES','DETRÁS DE ESCENA'],
  ['CLIENT LOVE','OPINIONES DE CLIENTES'],
  ['What People Say','Lo Que Dice La Gente'],
  ['Use real Google/Facebook/client reviews here once available.','Aquí se agregarán reseñas reales de Google, Facebook y clientes.'],
  ['“Add a real client testimonial here about the music, energy, professionalism, and experience.”','“Aquí agregaremos una reseña real sobre la música, energía, profesionalismo y experiencia.”'],
  ['“Add another verified review here. Short, specific testimonials work best.”','“Aquí agregaremos otra reseña verificada. Las opiniones breves y específicas funcionan mejor.”'],
  ['“Highlight why someone would confidently book the group again or recommend them.”','“Aquí destacaremos por qué un cliente volvería a contratar o recomendar al grupo.”'],
  ['— Client Name','— Nombre del Cliente'],
  ['QUESTIONS','PREGUNTAS'],
  ['Frequently Asked Questions','Preguntas Frecuentes'],
  ['What types of events do you perform?','¿En qué tipos de eventos se presentan?'],
  ['Weddings, quinceañeras, birthdays, private parties, family celebrations, festivals, community events, and custom bookings.','Bodas, quinceañeras, cumpleaños, fiestas privadas, celebraciones familiares, festivales, eventos comunitarios y reservaciones personalizadas.'],
  ['How much does it cost to book?','¿Cuánto cuesta contratar al grupo?'],
  ['Pricing depends on the event date, location, performance length, setup needs, and event details. Use the quote form below for custom pricing.','El precio depende de la fecha, ubicación, duración de la presentación, necesidades de montaje y detalles del evento. Usa el formulario para recibir una cotización personalizada.'],
  ['How far do you travel?','¿Hasta dónde viajan?'],
  ['We are based in Stockton, California and generally travel up to approximately 60 miles for events. Travel availability depends on the event date, venue address, route, and schedule. If your location is near the edge of the service area, send us the address and we will confirm availability.','Tenemos base en Stockton, California y generalmente viajamos hasta aproximadamente 60 millas para eventos. La disponibilidad depende de la fecha, dirección del lugar, ruta y horario. Si tu ubicación está cerca del límite del área de servicio, envíanos la dirección y confirmaremos disponibilidad.'],
  ['How early should we book?','¿Con cuánto tiempo debemos reservar?'],
  ['Popular weekends can fill quickly, so earlier is better. Send the date as soon as possible to check availability.','Los fines de semana populares pueden llenarse rápido, así que recomendamos reservar con anticipación. Envía tu fecha lo antes posible para verificar disponibilidad.'],
  ['Can we request specific songs or music?','¿Podemos solicitar canciones específicas?'],
  ['Song and performance requests can be discussed during booking. Final availability depends on the set list and event format.','Las solicitudes de canciones y presentación pueden hablarse durante la reservación. La disponibilidad final depende del repertorio y formato del evento.'],
  ['BOOK YOUR DATE','RESERVA TU FECHA'],
  ['Tell us about your event. We’ll use the details to confirm availability and provide a custom quote.','Cuéntanos sobre tu evento. Usaremos los detalles para confirmar disponibilidad y preparar una cotización personalizada.'],
  ['Booking Contact','Contacto para Reservaciones'],
  ['Phone: Add client number','Teléfono: Agregar número del cliente'],
  ['Email: Add booking email','Correo: Agregar correo de reservaciones'],
  ['Instagram: Add profile link','Instagram: Agregar enlace del perfil'],
  ['Your Contact Info','Tus Datos de Contacto'],
  ['Full Name','Nombre Completo'],
  ['Phone','Teléfono'],
  ['Email','Correo Electrónico'],
  ['Preferred Contact Method','Método de Contacto Preferido'],
  ['Choose one','Elige una opción'],
  ['Text Message','Mensaje de Texto'],
  ['Phone Call','Llamada Telefónica'],
  ['Event Details','Detalles del Evento'],
  ['Event Type','Tipo de Evento'],
  ['Select event','Selecciona un evento'],
  ['Wedding','Boda'],
  ['Quinceañera','Quinceañera'],
  ['Birthday','Cumpleaños'],
  ['Private Party','Fiesta Privada'],
  ['Festival / Community Event','Festival / Evento Comunitario'],
  ['Other','Otro'],
  ['Event Date','Fecha del Evento'],
  ['Event Start Time','Hora de Inicio'],
  ['Event End Time','Hora de Finalización'],
  ['Venue Name','Nombre del Lugar'],
  ['Event Location','Ubicación del Evento'],
  ['Event Setting','Tipo de Espacio'],
  ['Choose setting','Selecciona el espacio'],
  ['Indoor','Interior'],
  ['Outdoor','Exterior'],
  ['Indoor & Outdoor','Interior y Exterior'],
  ['Not Sure Yet','Aún No Estoy Seguro'],
  ['Estimated Guests','Número Aproximado de Invitados'],
  ['Performance Preferences','Preferencias de Presentación'],
  ['Estimated Performance Length','Duración Aproximada de la Presentación'],
  ['Select length','Selecciona la duración'],
  ['1–2 Hours','1–2 Horas'],
  ['3 Hours','3 Horas'],
  ['4 Hours','4 Horas'],
  ['5+ Hours','5+ Horas'],
  ['Budget Range','Rango de Presupuesto'],
  ['Optional','Opcional'],
  ['Select budget','Selecciona presupuesto'],
  ['Under $1,000','Menos de $1,000'],
  ['$1,000–$2,000','$1,000–$2,000'],
  ['$2,000–$3,000','$2,000–$3,000'],
  ['$3,000+','$3,000+'],
  ['Tell us about your event','Cuéntanos sobre tu evento'],
  ['The more details you provide, the easier it is for us to confirm availability and prepare an accurate quote.','Entre más detalles nos compartas, más fácil será confirmar disponibilidad y preparar una cotización precisa.'],
  ['Send Quote Request','Enviar Solicitud'],
  ['By submitting, you agree to be contacted about your event request. No spam.','Al enviar este formulario, aceptas que te contactemos sobre tu evento. Sin spam.'],
  ['MAKE IT LIVE','HAZLO EN VIVO'],
  ['Have a Date in Mind?','¿Ya Tienes Una Fecha?'],
  ['Check Availability','Ver Disponibilidad'],
  ['Live music for weddings, quinceañeras, birthdays, private events, festivals, and celebrations.','Música en vivo para bodas, quinceañeras, cumpleaños, eventos privados, festivales y celebraciones.'],
  ['Explore','Explorar'],
  ['Book','Reservar'],
  ['Contact','Contacto'],
  ['Add phone number','Agregar teléfono'],
  ['Add booking email','Agregar correo'],
  ['Add Instagram','Agregar Instagram'],
  ['All rights reserved.','Todos los derechos reservados.'],
  ['Website by OneTap Creative','Sitio web por OneTap Creative']
]);

const placeholderTranslations = new Map([
  ['City / venue','Ciudad / lugar del evento'],
  ['Venue or property name','Nombre del lugar o propiedad'],
  ['City or venue address','Ciudad o dirección del lugar'],
  ['Example: 150','Ejemplo: 150'],
  ['Performance time, venue, schedule, special requests, etc.','Horario de presentación, lugar, programa, solicitudes especiales, etc.'],
  ['Schedule, special requests, song requests, setup details, etc.','Horario, solicitudes especiales, canciones, detalles de montaje, etc.']
]);

const originalText = new WeakMap();
const originalPlaceholders = new WeakMap();

function translateTextNodes(root, toSpanish){
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  const nodes=[];
  while(walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node=>{
    const parent=node.parentElement;
    if(!parent || ['SCRIPT','STYLE','NOSCRIPT'].includes(parent.tagName)) return;
    if(!originalText.has(node)) originalText.set(node,node.nodeValue);
    const original=originalText.get(node);
    const trimmed=original.trim();
    if(!trimmed) return;
    const translated=translations.get(trimmed);
    if(toSpanish && translated){
      node.nodeValue=original.replace(trimmed,translated);
    }else if(!toSpanish){
      node.nodeValue=original;
    }
  });
}

function translatePlaceholders(toSpanish){
  document.querySelectorAll('[placeholder]').forEach(el=>{
    if(!originalPlaceholders.has(el)) originalPlaceholders.set(el,el.getAttribute('placeholder'));
    const original=originalPlaceholders.get(el);
    el.setAttribute('placeholder',toSpanish ? (placeholderTranslations.get(original)||original) : original);
  });
}

function applyLanguage(lang){
  const spanish=lang==='es';
  document.documentElement.lang=spanish?'es':'en';
  translateTextNodes(document.body,spanish);
  translatePlaceholders(spanish);
  document.title=spanish
    ? 'El Grupo La Migra De Miguel Chachora Cota | Música en Vivo para Eventos'
    : 'El Grupo La Migra De Miguel Chachora Cota | Live Music for Events';
  const meta=document.querySelector('meta[name="description"]');
  if(meta) meta.content=spanish
    ? 'Contrata a El Grupo La Migra De Miguel Chachora Cota para bodas, quinceañeras, cumpleaños, fiestas privadas, festivales y eventos especiales.'
    : 'Book El Grupo La Migra De Miguel Chachora Cota for weddings, quinceañeras, birthdays, private parties, festivals, and special events. Live music, professional performance, and an unforgettable atmosphere.';
  const langBtn=document.getElementById('language-toggle');
  if(langBtn){
    langBtn.innerHTML=spanish
      ? '<span>EN</span><span aria-hidden="true">/</span><span class="lang-active">ES</span>'
      : '<span class="lang-active">EN</span><span aria-hidden="true">/</span><span>ES</span>';
    langBtn.setAttribute('aria-label',spanish?'Change site to English':'Cambiar sitio a español');
    langBtn.title=spanish?'English':'Español';
  }
  localStorage.setItem('site-language',lang);
}

const langBtn=document.getElementById('language-toggle');
langBtn?.addEventListener('click',()=>{
  applyLanguage(document.documentElement.lang==='es'?'en':'es');
});

applyLanguage(localStorage.getItem('site-language')==='es'?'es':'en');
