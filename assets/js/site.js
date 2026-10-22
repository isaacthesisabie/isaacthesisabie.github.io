/* Zero-dependency interactions: scroll-spy, filters, galleries, theme, mobile nav. */
(function () {
  'use strict';
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  // Theme: apply early from <head> script; button only updates preference.
  $('[data-theme-toggle]')?.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('isaac-theme', next); } catch (e) { /* private mode */ }
  });

  const toggle = $('[data-menu-toggle]');
  const nav = $('#main-nav');
  function setMenu(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  toggle?.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
  $$('#main-nav a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });

  // Active navbar link based on section nearest upper viewport checkpoint.
  const sections = $$('.scroll-section[id]');
  const navLinks = $$('[data-nav]');
  function updateActiveSection() {
    if (!sections.length) { // a separate case-study page
      navLinks.forEach(link => link.classList.toggle('active', link.dataset.nav === 'portfolio'));
      return;
    }
    const checkpoint = Math.min(window.innerHeight * .32, 260) + 75;
    let current = sections[0].id;
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= checkpoint) current = section.id;
    }
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5) current = sections[sections.length - 1].id;
    navLinks.forEach(link => {
      const active = link.dataset.nav === current;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  let scheduled = false;
  window.addEventListener('scroll', () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => { scheduled = false; updateActiveSection(); });
  }, { passive: true });
  window.addEventListener('resize', updateActiveSection, { passive: true });
  window.addEventListener('hashchange', updateActiveSection);
  updateActiveSection();

  // Portfolio: visually filter DOM cards by category and preserve aria state.
  const filterButtons = $$('[data-filter]');
  const cards = $$('.project-card[data-category]');
  filterButtons.forEach(button => button.addEventListener('click', () => {
    const value = button.dataset.filter;
    filterButtons.forEach(other => {
      const active = other === button;
      other.classList.toggle('active', active);
      other.setAttribute('aria-pressed', String(active));
    });
    let displayed = 0;
    cards.forEach(card => {
      const visible = value === 'all' || card.dataset.category === value;
      card.hidden = !visible;
      if (visible) displayed++;
    });
    const empty = $('#portfolio-empty');
    if (empty) empty.hidden = displayed > 0;
  }));

  // Gallery: HTML data-gallery attribute contains JSON list from Liquid | jsonify | escape.
  const overlay = $('#lightbox');
  const lightboxImage = $('#lightbox-image');
  const counter = $('#lightbox-counter');
  let gallery = [];
  let currentIndex = 0;
  let lastFocus = null;
  function setImage(index) {
    if (!gallery.length || !lightboxImage) return;
    currentIndex = (index + gallery.length) % gallery.length;
    lightboxImage.src = gallery[currentIndex];
    lightboxImage.alt = 'Project screenshot ' + (currentIndex + 1) + ' of ' + gallery.length;
    if (counter) counter.textContent = (currentIndex + 1) + ' / ' + gallery.length;
  }
  function closeGallery() {
    if (!overlay) return;
    overlay.hidden = true;
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (lightboxImage) lightboxImage.removeAttribute('src');
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  }
  $$('[data-gallery]').forEach(trigger => trigger.addEventListener('click', () => {
    if (!overlay) return;
    try {
      const values = JSON.parse(trigger.getAttribute('data-gallery') || '[]');
      gallery = Array.isArray(values) ? values.filter(v => typeof v === 'string' && v.trim()) : [];
      if (!gallery.length) return;
      lastFocus = trigger;
      overlay.hidden = false;
      overlay.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
      setImage(Number.parseInt(trigger.dataset.galleryStart || '0', 10) || 0);
      $('[data-gallery-close]', overlay)?.focus();
    } catch (error) { console.warn('Could not open gallery:', error); }
  }));
  $('[data-gallery-close]')?.addEventListener('click', closeGallery);
  $('[data-gallery-prev]')?.addEventListener('click', () => setImage(currentIndex - 1));
  $('[data-gallery-next]')?.addEventListener('click', () => setImage(currentIndex + 1));
  overlay?.addEventListener('click', event => { if (event.target === overlay) closeGallery(); });
  document.addEventListener('keydown', event => {
    if (!overlay || overlay.hidden) return;
    if (event.key === 'Escape') closeGallery();
    if (event.key === 'ArrowLeft') setImage(currentIndex - 1);
    if (event.key === 'ArrowRight') setImage(currentIndex + 1);
    if (event.key === 'Tab') { // Keep keyboard focus in dialog.
      const controls = $$('button', overlay).filter(b => !b.hidden);
      if (!controls.length) return;
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
})();
