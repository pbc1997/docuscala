window.DOCUSCALA_CONFIG = Object.freeze({
  whatsappE164: null,
  productionDomain: null,
  contactEmail: null
});

document.querySelectorAll('[data-whatsapp]').forEach((el) => {
  const phone = window.DOCUSCALA_CONFIG.whatsappE164;
  if (!phone) {
    el.setAttribute('aria-disabled', 'true');
    el.setAttribute('title', 'Pendiente de configurar un número empresarial verificado en formato E.164');
    el.addEventListener('click', (ev) => ev.preventDefault());
    return;
  }
  const digits = phone.replace(/\D/g, '');
  el.href = `https://wa.me/${digits}`;
  el.removeAttribute('aria-disabled');
});
