(function () {
  // mobile nav
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  document.querySelectorAll('.nav-parent').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var li = btn.parentElement;
      var open = !li.classList.contains('open');
      document.querySelectorAll('.has-sub.open').forEach(function (o) { if (o !== li) { o.classList.remove('open'); o.querySelector('.nav-parent').setAttribute('aria-expanded', 'false'); } });
      li.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.has-sub')) document.querySelectorAll('.has-sub.open').forEach(function (o) { o.classList.remove('open'); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') document.querySelectorAll('.has-sub.open').forEach(function (o) { o.classList.remove('open'); });
  });

  // reveal on scroll
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else { els.forEach(function (el) { el.classList.add('in'); }); }

  // lead forms (AJAX, falls back to normal POST)
  document.querySelectorAll('[data-lead-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      var note = form.querySelector('.form-note');
      var el = form.elements; var name = el['name'].value.trim(), phone = el['phone'].value.trim(), email = el['email'].value.trim();
      if (!name || (!phone && !email)) {
        e.preventDefault();
        note.className = 'form-note err';
        note.textContent = 'Please add your name and a phone number or email.';
        return;
      }
      if (!window.fetch) return;
      e.preventDefault();
      var btn = form.querySelector('button[type=submit]');
      btn.disabled = true; btn.textContent = 'Sending…';
      fetch(form.action, { method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(new FormData(form)).toString() })
        .then(function (r) { return r.json().then(function (j) { return { ok: r.ok && j.ok, j: j }; }); })
        .then(function (res) {
          if (res.ok) {
            if (window.dataLayer) window.dataLayer.push({ event: 'lead_submit', form_name: el['form'].value });
            if (window.fbq) window.fbq('track', 'Lead');
            form.reset();
            note.className = 'form-note ok';
            note.textContent = 'Thank you for contacting us. We will get back to you as soon as possible.';
            btn.textContent = 'Sent ✓';
          } else { throw new Error((res.j && res.j.error) || 'error'); }
        })
        .catch(function (err) {
          note.className = 'form-note err';
          note.textContent = (err && err.message && err.message !== 'error') ? err.message : 'Oops, there was an error sending your message. Please call (508) 888-9433.';
          btn.disabled = false; btn.textContent = 'Request Call Back';
        });
    });
  });

  // gallery lightbox
  var lb = document.querySelector('.lightbox');
  if (lb && lb.showModal) {
    var lbImg = lb.querySelector('img');
    document.querySelectorAll('[data-lightbox] a').forEach(function (a) {
      a.addEventListener('click', function (e) { e.preventDefault(); lbImg.src = a.href; lbImg.alt = a.querySelector('img').alt; lb.showModal(); });
    });
    lb.addEventListener('click', function (e) { if (e.target === lb || e.target.classList.contains('lb-close')) lb.close(); });
  }
})();
