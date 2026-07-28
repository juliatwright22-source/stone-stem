const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

const NAV_LINKS = [
  ['services', 'Services'],
  ['work', 'Our work'],
  ['about', 'About'],
  ['contact', 'Contact'],
];

const FOOTER_COLS = {
  services: [
    ['services/design', 'Design'],
    ['services/build', 'Build'],
    ['services/stonework', 'Stonework'],
    ['services/plantings', 'Plantings'],
    ['services/outdoor-living', 'Outdoor living'],
    ['services/lighting', 'Lighting'],
    ['services/drainage', 'Drainage'],
  ],
  company: [
    ['work', 'Our work'],
    ['about', 'About'],
    ['process', 'Process'],
    ['careers', 'Careers'],
  ],
  serviceArea: [
    ['service-area/tulsa', 'Tulsa'],
    ['service-area/jenks', 'Jenks'],
    ['service-area/bixby', 'Bixby'],
    ['service-area/broken-arrow', 'Broken Arrow'],
    ['service-area/owasso', 'Owasso'],
  ],
};

const SERVICES = [
  { slug: 'design', icon: 'ruler', index: '01', title: 'Design', short: 'Measured site plans and planting drawings before anything is built.',
    intro: 'Every project starts with a site walk and a scale drawing, not a sketch on a napkin. We measure the grade, the drainage, the light and the sightlines before anything gets ordered.',
    includes: ['Site walk and measurements', 'Grading and drainage plan', 'Planting plan matched to sun and soil', 'Materials board — stone, wood and fixtures', 'Fixed-price proposal before we dig'],
    image: 'assets/design.png' },
  { slug: 'build', icon: 'hammer', index: '02', title: 'Build', short: 'One crew from first cut to final sweep — no subcontracted hand-offs.',
    intro: 'One crew breaks ground and the same crew finishes. The hands that measure the grade are the hands that set the stone and plant the beds.',
    includes: ['One crew, start to finish', 'Weekly progress walk-throughs', 'Protected turf and driveways during work', 'Daily site clean-up', 'Final walkthrough and punch list'],
    image: 'assets/build.png' },
  { slug: 'stonework', icon: 'mountain-snow', index: '03', title: 'Stonework', short: 'Dry-laid walls, cut-stone steps and flagstone terraces set to last.',
    intro: 'Dry-laid walls, cut-stone steps and flagstone terraces, set on a compacted base so they stay flat through freeze-thaw winters.',
    includes: ['Dry-laid retaining walls', 'Cut-stone steps and treads', 'Flagstone patios and terraces', 'Fire pits and seat walls', 'Polymeric-sand joint work'],
    image: 'assets/stonework.png' },
  { slug: 'plantings', icon: 'leaf', index: '04', title: 'Plantings', short: 'Beds chosen for the site\u2019s light, soil and water \u2014 not a catalogue.',
    intro: 'Beds chosen for the site\u2019s light, soil and water, not a catalogue plan. We plant for the microclimate a property actually has.',
    includes: ['Site-specific plant selection', 'Soil preparation and amendment', 'Shade and specimen trees', 'Seasonal colour beds', 'Mulch and steel edging'],
    image: 'assets/plantings.png' },
  { slug: 'outdoor-living', icon: 'flame', index: '05', title: 'Outdoor living', short: 'Kitchens, fire features and shade structures matched to the house.',
    intro: 'Kitchens, fire features and shade structures, sized and sited to match the house instead of dropped onto whatever flat ground is left.',
    includes: ['Outdoor kitchens and grills', 'Fire pits and fireplaces', 'Pergolas and shade structures', 'Seat walls and dining patios', 'Utility and gas line coordination'],
    image: 'assets/outdoorliving.png' },
  { slug: 'lighting', icon: 'lightbulb', index: '06', title: 'Lighting', short: 'Low-voltage paths, uplit specimens and warm 2700K fixtures.',
    intro: 'Low-voltage paths, uplit specimens and warm 2700K fixtures \u2014 light that shows the property at night instead of just marking the driveway.',
    includes: ['Low-voltage path lighting', 'Uplighting for trees and stonework', 'Warm 2700K fixtures throughout', 'Transformer and timer setup', 'Bulb and fixture service'],
    image: 'uploads/stockimage6.png' },
  { slug: 'drainage', icon: 'droplets', index: '07', title: 'Drainage', short: 'Grading, dry creeks and French drains that move water away quietly.',
    intro: 'Grading, dry creeks and French drains that move water away from the house and off the patio, quietly.',
    includes: ['Grading and regrading', 'French drains', 'Dry creek beds', 'Downspout tie-ins', 'Sump and catch-basin work'],
    image: 'assets/drainage.png' },
];

const PROJECTS = [
  { slug: 'terraced-bluestone-patio', category: 'Stonework', title: 'Terraced bluestone patio', location: 'Midtown Tulsa, OK', image: 'uploads/stockimage5.png',
    narrative: ['The grade dropped steeply from the back door, so we cut three shallow terraces in dry-laid stone and tied them together with a cut-bluestone patio set on a compacted base.', 'Steps and seat walls follow the same stone, so the run reads as one structure instead of a patio bolted onto a slope.'],
    includes: ['Dry-laid retaining walls, three terraces', 'Cut-bluestone patio, polymeric-sand joints', 'Regraded lawn panel above the walls', 'Low-voltage path lighting along the steps'] },
  { slug: 'oak-shade-garden', category: 'Plantings', title: 'Oak shade garden', location: 'Jenks, OK', image: 'uploads/stockimage3.png',
    narrative: ['A mature oak canopy kept most of the bed line in full shade, so the plant palette is built for shade and the dry soil that sits under a big tree.', 'A flagstone stepping path runs through the beds so the lawn never gets a worn foot-path across it.'],
    includes: ['Shade-tolerant understory planting', 'Soil amendment under the canopy', 'Flagstone stepping path', 'Steel bed edging'] },
  { slug: 'evening-walk-lighting', category: 'Lighting', title: 'Evening walk lighting', location: 'Bixby, OK', image: 'uploads/stockimage6.png',
    narrative: ['The walk from the driveway to the front door went dark after sunset. We ran low-voltage wiring along the bed line and lit the path itself, not just the porch.', 'Three specimen trees along the walk are uplit, so the property reads at night instead of disappearing into it.'],
    includes: ['Low-voltage transformer and wiring', 'Path lighting along the walk', 'Uplighting on three specimen trees', 'Timer programmed dusk to 11pm'] },
];

const TOWNS = [
  { slug: 'tulsa', name: 'Tulsa', blurb: 'We are based in Tulsa, and it is where most of our stonework and planting crews run every week. Midtown lots tend to have mature trees and older grading, which is usually where drainage work starts.', project: 'terraced-bluestone-patio' },
  { slug: 'jenks', name: 'Jenks', blurb: 'Jenks properties tend to run flatter than midtown Tulsa lots, with newer soil that compacts differently under stone. We adjust the base prep for it.', project: 'oak-shade-garden' },
  { slug: 'bixby', name: 'Bixby', blurb: 'Bixby has a mix of older acreage and newer build-out, so we see everything from full regrades to a single lighting run added after the fact.', project: 'evening-walk-lighting' },
  { slug: 'broken-arrow', name: 'Broken Arrow', blurb: 'Broken Arrow properties often have room to build out \u2014 kitchens, fire features and larger terraces are common requests here.', project: null },
  { slug: 'owasso', name: 'Owasso', blurb: 'Owasso lots skew newer, with turf and beds still settling in. We plant and grade with that first year of settling in mind.', project: null },
];

function up(depth) { return '../'.repeat(depth); }
function rel(depth, target) {
  if (!target) return depth === 0 ? './' : up(depth);
  return up(depth) + target + '/';
}
function asset(depth, target) { return up(depth) + target; }

function icon(name) {
  return `<i data-lucide="${name}"></i>`;
}

const CHECK_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
const BACK_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`;
const BURGER_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;

function renderHead(depth, title, description) {
  return `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<link rel="icon" href="${asset(depth, 'assets/logo-mark.png')}">
<link rel="stylesheet" href="${asset(depth, 'css/tokens.css')}">
<link rel="stylesheet" href="${asset(depth, 'css/styles.css')}">`;
}

function renderNavLight(depth, activeTop) {
  const links = NAV_LINKS.map(([slug, label]) =>
    `<li><a href="${rel(depth, slug)}"${slug === activeTop ? ' class="active"' : ''}>${label}</a></li>`
  ).join('\n          ');
  return `<header class="site-header site-header--light">
  <nav class="nav-bar container" aria-label="Primary">
    <a class="nav-logo" href="${rel(depth, '')}" aria-label="Stone &amp; Stem Landscape Co.">
      <img src="${asset(depth, 'assets/logo-lockup.png')}" alt="Stone &amp; Stem Landscape Co.">
    </a>
    <ul class="nav-links" id="nav-links">
          ${links}
    </ul>
    <div class="nav-right">
      <span class="nav-phone">918.555.2476</span>
      <a class="btn btn-primary btn-sm" href="${rel(depth, 'contact')}">Request an estimate</a>
      <button class="nav-toggle" id="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="nav-links">
        ${BURGER_SVG}
      </button>
    </div>
  </nav>
</header>`;
}

function renderFooter(depth) {
  function col(title, items) {
    const lis = items.map(([slug, label]) => `<li><a href="${rel(depth, slug)}">${label}</a></li>`).join('\n        ');
    return `<div class="footer-col">
      <div class="footer-col-title">${title}</div>
      <ul>
        ${lis}
      </ul>
    </div>`;
  }
  return `<footer class="site-footer">
  <div class="footer-grid">
    <div class="footer-brand">
      <img src="${asset(depth, 'assets/logo-mark.png')}" alt="Stone &amp; Stem mark">
      <div class="footer-brand-name">Stone &amp; Stem</div>
      <div class="footer-brand-tagline">Crafted Outdoor Living</div>
    </div>
    ${col('Services', FOOTER_COLS.services)}
    ${col('Company', FOOTER_COLS.company)}
    ${col('Service area', FOOTER_COLS.serviceArea)}
  </div>
  <div class="footer-bottom">
    <span>918.555.2476</span>
    <a href="mailto:jonathan@stoneandstem.com">jonathan@stoneandstem.com</a>
    <span>stoneandstem.com</span>
    <span class="footer-copyright">&copy; Stone &amp; Stem Landscape Co.</span>
  </div>
</footer>`;
}

function renderPageHeader(depth, { eyebrow, title, intro, backHref, backLabel }) {
  const back = backHref
    ? `<a class="back-link" href="${rel(depth, backHref)}">${BACK_SVG}${backLabel}</a>`
    : '';
  return `<section class="page-header">
  <div class="container">
    ${back}
    <div class="section-heading"${back ? ' style="margin-top:24px"' : ''}>
      <div class="eyebrow"><span class="eyebrow-rule"></span>${eyebrow}</div>
      <h1>${title}</h1>
      ${intro ? `<p class="intro">${intro}</p>` : ''}
    </div>
  </div>
</section>`;
}

function renderCtaSimple(depth) {
  return `<section class="cta-band">
  <div class="cta-simple-inner">
    <h2>Talk through your property</h2>
    <p>Estimates are free, scheduled within one business day, and walked with a designer &mdash; not a salesperson.</p>
    <a class="btn btn-inverse btn-md" href="${rel(depth, 'contact')}">Request an estimate</a>
  </div>
</section>`;
}

function renderFeatureList(items) {
  const lis = items.map(i => `<li>${CHECK_SVG}<span>${i}</span></li>`).join('\n        ');
  return `<ul class="feature-list">
        ${lis}
      </ul>`;
}

function renderServiceCardLink(depth, s) {
  return `<a class="service-card" href="${rel(depth, 'services/' + s.slug)}">
        <div class="service-card-top"><span class="service-card-icon">${icon(s.icon)}</span><span class="service-card-index">${s.index}</span></div>
        <h3>${s.title}</h3>
        <p>${s.short}</p>
      </a>`;
}

function renderProjectCardLink(depth, p) {
  return `<a class="project-card" href="${rel(depth, 'work/' + p.slug)}" data-category="${p.category}">
        <img src="${asset(depth, p.image)}" alt="${p.title}">
        <div class="project-card-scrim"></div>
        <div class="project-card-body">
          <span class="project-card-category">${p.category}</span>
          <span class="project-card-title">${p.title}</span>
          <span class="project-card-location">${p.location}</span>
        </div>
      </a>`;
}

function page(depth, activeTop, title, description, bodyHtml, extraScripts) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
${renderHead(depth, title, description)}
</head>
<body>

${renderNavLight(depth, activeTop)}

${bodyHtml}

${renderFooter(depth)}

<script src="https://unpkg.com/lucide@0.454.0/dist/umd/lucide.js"></script>
<script src="${asset(depth, 'js/main.js')}"></script>
${extraScripts || ''}
</body>
</html>
`;
}

function write(relDir, html) {
  const dir = path.join(ROOT, relDir);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
  console.log('wrote', relDir + '/index.html');
}

/* ---------------- /services/ ---------------- */
{
  const depth = 1;
  const body = `${renderPageHeader(depth, {
    eyebrow: 'What we do',
    title: 'Seven services, one standard',
    intro: 'We are a design\u2013build studio. The same crew that draws the plan sets the stone and plants the beds, seven ways.',
  })}
<section class="services">
  <div class="container">
    <div class="services-grid">
      ${SERVICES.map(s => renderServiceCardLink(depth, s)).join('\n      ')}
      <div class="service-card-cta">
        <p>Not sure where to start?</p>
        <a class="btn btn-inverse btn-sm" href="${rel(depth, 'contact')}">Book a site walk</a>
      </div>
    </div>
  </div>
</section>
${renderCtaSimple(depth)}`;
  write('services', page(depth, 'services', 'Services \u2014 Stone &amp; Stem Landscape Co.', 'Design, build, stonework, plantings, outdoor living, lighting and drainage \u2014 one crew, seven services.', body));
}

/* ---------------- /services/{slug}/ ---------------- */
for (const s of SERVICES) {
  const depth = 2;
  const others = SERVICES.filter(o => o.slug !== s.slug);
  const body = `${renderPageHeader(depth, {
    eyebrow: 'Services',
    title: s.title,
    intro: s.intro,
    backHref: 'services',
    backLabel: 'All services',
  })}
<section class="content-split">
  <div class="container">
    <div>
      <div class="eyebrow"><span class="eyebrow-rule"></span>What's included</div>
      ${renderFeatureList(s.includes)}
    </div>
    <figure class="image-frame-figure">
      <div class="image-frame ratio-4-5">
        <img src="${asset(depth, s.image)}" alt="${s.title}">
      </div>
    </figure>
  </div>
</section>
<div class="container">
  <div class="related-links">
    <div class="related-links-title">Other services</div>
    <div class="related-links-list">
      ${others.map(o => `<a href="${rel(depth, 'services/' + o.slug)}">${o.title}</a>`).join('\n      ')}
    </div>
  </div>
</div>
${renderCtaSimple(depth)}`;
  write('services/' + s.slug, page(depth, 'services', s.title + ' \u2014 Stone &amp; Stem Landscape Co.', s.short, body));
}

/* ---------------- /work/ ---------------- */
{
  const depth = 1;
  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];
  const body = `${renderPageHeader(depth, {
    eyebrow: 'Recent work',
    title: 'Properties we finished this season',
    intro: 'A season\u2019s worth of stonework, plantings and lighting across Tulsa, Jenks and Bixby.',
  })}
<section class="work">
  <div class="container">
    <div class="filter-row" id="work-filter">
      ${categories.map((c, i) => `<span class="tag-pill${i === 0 ? ' is-active' : ''}" data-filter="${c}">${c}</span>`).join('\n      ')}
    </div>
    <div class="work-grid" id="work-grid" style="margin-top:var(--space-7)">
      ${PROJECTS.map(p => renderProjectCardLink(depth, p)).join('\n      ')}
    </div>
  </div>
</section>
${renderCtaSimple(depth)}`;
  const script = `<script>
(function(){
  var row = document.getElementById('work-filter');
  var grid = document.getElementById('work-grid');
  if (!row || !grid) return;
  row.addEventListener('click', function(e){
    var pill = e.target.closest('.tag-pill');
    if (!pill) return;
    row.querySelectorAll('.tag-pill').forEach(function(p){ p.classList.remove('is-active'); });
    pill.classList.add('is-active');
    var filter = pill.getAttribute('data-filter');
    grid.querySelectorAll('.project-card').forEach(function(card){
      var show = filter === 'All' || card.getAttribute('data-category') === filter;
      card.style.display = show ? '' : 'none';
    });
  });
})();
</script>`;
  write('work', page(depth, 'work', 'Our work \u2014 Stone &amp; Stem Landscape Co.', 'Recent stonework, plantings and lighting projects in Tulsa, Jenks and Bixby.', body, script));
}

/* ---------------- /work/{slug}/ ---------------- */
for (const proj of PROJECTS) {
  const depth = 2;
  const others = PROJECTS.filter(o => o.slug !== proj.slug);
  const body = `<section class="page-header" style="padding-bottom:0">
  <div class="container">
    <a class="back-link" href="${rel(depth, 'work')}">${BACK_SVG}All projects</a>
  </div>
</section>
<div class="container" style="padding-top:var(--space-6)">
  <figure class="image-frame-figure">
    <div class="image-frame ratio-16-9">
      <img src="${asset(depth, proj.image)}" alt="${proj.title}">
    </div>
  </figure>
  <div style="max-width:66ch;margin-top:var(--space-6)">
    <div class="eyebrow"><span class="eyebrow-rule"></span>${proj.category}</div>
    <h1 style="margin-top:var(--space-3)">${proj.title}</h1>
    <p style="font-family:var(--font-sans);font-size:var(--size-caption);letter-spacing:.06em;color:var(--text-subtle);margin-top:var(--space-2)">${proj.location}</p>
    <div style="margin-top:var(--space-6)">
      ${proj.narrative.map(p => `<p class="intro" style="font-size:var(--size-body-lg)">${p}</p>`).join('\n      ')}
    </div>
    <div class="eyebrow" style="margin-top:var(--space-6)"><span class="eyebrow-rule"></span>What we did</div>
    ${renderFeatureList(proj.includes)}
  </div>
  <div class="related-links">
    <div class="related-links-title">Other projects</div>
    <div class="related-links-list">
      ${others.map(o => `<a href="${rel(depth, 'work/' + o.slug)}">${o.title}</a>`).join('\n      ')}
    </div>
  </div>
</div>
${renderCtaSimple(depth)}`;
  write('work/' + proj.slug, page(depth, 'work', proj.title + ' \u2014 Stone &amp; Stem Landscape Co.', proj.title + ', ' + proj.location + '.', body));
}

/* ---------------- /about/ ---------------- */
{
  const depth = 1;
  const body = `${renderPageHeader(depth, {
    eyebrow: 'About',
    title: 'A landscape company that draws first',
    intro: 'We are a design\u2013build studio: the person who measures your grade is the person who sets your stone. That is why our patios sit flat a decade later.',
  })}
<section class="content-split" style="padding-top:0">
  <div class="container">
    <div>
      <p>Jonathan Laboube started Stone &amp; Stem after years framing houses and grading lots for other builders. He kept seeing the same problem: the crew that measured a yard was rarely the crew that built it, and that gap is where patios go uneven and drainage gets ignored.</p>
      <p>Stone &amp; Stem closes that gap. One crew draws the plan, sets the stone and plants the beds \u2014 the same hands, start to finish.</p>
      <div class="stat-row" style="margin-top:var(--space-7)">
        <div class="stat"><span class="stat-value">18</span><span class="stat-label">Years in Tulsa</span></div>
        <div class="stat"><span class="stat-value">240+</span><span class="stat-label">Properties built</span></div>
        <div class="stat"><span class="stat-value">2</span><span class="stat-label">Crews, no subs</span></div>
      </div>
    </div>
    <figure class="image-frame-figure">
      <div class="image-frame ratio-4-5">
        <img src="${asset(depth, 'uploads/stockimage4.png')}" alt="Dry-laid stone wall and shade plantings">
      </div>
    </figure>
  </div>
</section>
<section style="padding:0 0 96px">
  <div class="container">
    <div class="section-heading">
      <div class="eyebrow"><span class="eyebrow-rule"></span>How we work</div>
      <h2 style="font-size:var(--size-display-3)">A four-step process</h2>
    </div>
    <div class="process-steps" style="margin-top:var(--space-6)">
      <div class="process-step"><div class="process-step-index">01</div><div><h3>Site walk</h3><p>We measure the grade, the drainage and the light before anything gets ordered.</p></div></div>
      <div class="process-step"><div class="process-step-index">02</div><div><h3>Design &amp; proposal</h3><p>A scale drawing, a materials board and a fixed price.</p></div></div>
      <div class="process-step"><div class="process-step-index">03</div><div><h3>Build</h3><p>One crew, start to finish, with a weekly walk-through.</p></div></div>
      <div class="process-step"><div class="process-step-index">04</div><div><h3>Walkthrough &amp; care</h3><p>A final punch list, a walk of the finished work and planting notes for the first season.</p></div></div>
    </div>
  </div>
</section>
${renderCtaSimple(depth)}`;
  write('about', page(depth, 'about', 'About \u2014 Stone &amp; Stem Landscape Co.', 'A design\u2013build landscaping studio in Tulsa, OK. One crew, from the first sketch to the last sweep.', body));
}

/* ---------------- /process/ ---------------- */
{
  const depth = 1;
  const steps = [
    ['Site walk', 'We walk the property with you, measure the grade and talk through how you actually use the space.'],
    ['Design &amp; proposal', 'A scale drawing, a materials board and a fixed price before anything is ordered.'],
    ['Build', 'One crew, start to finish, with a weekly walk-through so you always know what is next.'],
    ['Walkthrough &amp; care', 'A final punch list, a walk of the finished work and planting notes for the first season.'],
  ];
  const body = `${renderPageHeader(depth, {
    eyebrow: 'Process',
    title: 'How a project comes together',
    intro: 'Four steps, the same crew the whole way through.',
  })}
<section style="padding:0 0 96px">
  <div class="container">
    <div class="process-steps">
      ${steps.map((st, i) => `<div class="process-step"><div class="process-step-index">${String(i + 1).padStart(2, '0')}</div><div><h3>${st[0]}</h3><p>${st[1]}</p></div></div>`).join('\n      ')}
    </div>
  </div>
</section>
${renderCtaSimple(depth)}`;
  write('process', page(depth, 'about', 'Process \u2014 Stone &amp; Stem Landscape Co.', 'How a Stone &amp; Stem project comes together, from the first site walk to the final walkthrough.', body));
}

/* ---------------- /careers/ ---------------- */
{
  const depth = 1;
  const body = `${renderPageHeader(depth, {
    eyebrow: 'Careers',
    title: 'Join the crew',
    intro: 'Two crews, no subs. We hire for the long season, not the afternoon.',
  })}
<section style="padding:0 0 96px">
  <div class="container" style="max-width:66ch">
    <p>Both crews work year-round \u2014 stonework and drainage through the cooler months, plantings and outdoor living through the season. Nobody is subcontracted in and out.</p>
    <div class="eyebrow" style="margin-top:var(--space-6)"><span class="eyebrow-rule"></span>What we look for</div>
    ${renderFeatureList(['Steady, careful hands on stone', 'Comfortable outdoors in July and January', 'Shows up on time, every day', 'Wants to learn the whole trade, not one task'])}
    <div class="apply-block">
      <h3 style="font-size:var(--size-h2)">How to apply</h3>
      <p>We do not have openings posted right now. Send your resume to <a href="mailto:jonathan@stoneandstem.com">jonathan@stoneandstem.com</a> and we will reach out when a crew spot opens.</p>
      <a class="btn btn-primary btn-md" href="mailto:jonathan@stoneandstem.com?subject=Crew%20application">Email your resume</a>
    </div>
  </div>
</section>`;
  write('careers', page(depth, 'about', 'Careers \u2014 Stone &amp; Stem Landscape Co.', 'Crew openings at Stone &amp; Stem Landscape Co. in Tulsa, OK.', body));
}

/* ---------------- /contact/ ---------------- */
{
  const depth = 1;
  const body = `${renderPageHeader(depth, {
    eyebrow: 'Contact',
    title: 'Request an estimate',
    intro: 'Estimates are free, scheduled within one business day, and walked with a designer \u2014 not a salesperson.',
  })}
<section style="padding:0 0 128px">
  <div class="container contact-grid">
    <form id="estimate-form" novalidate>
      <div class="form-field">
        <label for="f-name">Name <span class="required">*</span></label>
        <input class="form-control" type="text" id="f-name" name="name" required>
      </div>
      <div class="form-field">
        <label for="f-email">Email <span class="required">*</span></label>
        <input class="form-control" type="email" id="f-email" name="email" required>
      </div>
      <div class="form-field">
        <label for="f-phone">Phone</label>
        <input class="form-control" type="tel" id="f-phone" name="phone">
      </div>
      <div class="form-field">
        <label for="f-location">Property location</label>
        <span class="select-wrap">
          <select class="form-control" id="f-location" name="location">
            <option value="">Select a town</option>
            <option>Tulsa</option>
            <option>Jenks</option>
            <option>Bixby</option>
            <option>Broken Arrow</option>
            <option>Owasso</option>
            <option>Other</option>
          </select>
        </span>
      </div>
      <div class="form-field">
        <label>Interested in</label>
        <div class="checkbox-grid">
          ${SERVICES.map(s => `<label class="checkbox-item"><span class="checkbox-control"><input class="checkbox-input" type="checkbox" name="interest" value="${s.title}"><span class="checkbox-box">${CHECK_SVG.replace('<svg ', '<svg class="check-icon" ')}</span></span><span>${s.title}</span></label>`).join('\n          ')}
        </div>
      </div>
      <div class="form-field">
        <label for="f-message">Tell us about your property</label>
        <textarea class="form-control" id="f-message" name="message" rows="5"></textarea>
      </div>
      <button class="btn btn-primary btn-lg" type="submit">Request an estimate</button>
      <p class="form-note">Opens your email client with these details filled in.</p>
      <p class="form-success" id="form-success">Your email client should now be open with your estimate request. If it did not, email us directly at <a href="mailto:jonathan@stoneandstem.com">jonathan@stoneandstem.com</a>.</p>
    </form>
    <aside class="contact-aside">
      <div class="contact-aside-block">
        <h4>Reach us directly</h4>
        <p><a href="tel:9185552476">918.555.2476</a></p>
        <p><a href="mailto:jonathan@stoneandstem.com">jonathan@stoneandstem.com</a></p>
        <p>stoneandstem.com</p>
      </div>
      <div class="contact-aside-block">
        <h4>Service area</h4>
        <p>Tulsa, Jenks, Bixby, Broken Arrow and Owasso.</p>
      </div>
      <div class="contact-aside-block">
        <span class="badge" style="background:var(--green-100);color:var(--green-800)">Fully licensed &amp; insured</span>
        <p style="margin-top:var(--space-3)">Estimates are scheduled within one business day.</p>
      </div>
    </aside>
  </div>
</section>`;
  const script = `<script>
(function(){
  var form = document.getElementById('estimate-form');
  var success = document.getElementById('form-success');
  if (!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    var data = new FormData(form);
    var interests = data.getAll('interest').join(', ') || 'Not specified';
    var lines = [
      'Name: ' + (data.get('name') || ''),
      'Email: ' + (data.get('email') || ''),
      'Phone: ' + (data.get('phone') || ''),
      'Property location: ' + (data.get('location') || ''),
      'Interested in: ' + interests,
      '',
      (data.get('message') || '')
    ];
    var subject = encodeURIComponent('Estimate request from ' + (data.get('name') || 'website'));
    var body = encodeURIComponent(lines.join('\\n'));
    window.location.href = 'mailto:jonathan@stoneandstem.com?subject=' + subject + '&body=' + body;
    success.classList.add('is-visible');
  });
})();
</script>`;
  write('contact', page(depth, 'contact', 'Contact \u2014 Stone &amp; Stem Landscape Co.', 'Request a free estimate from Stone &amp; Stem Landscape Co. in Tulsa, OK.', body, script));
}

/* ---------------- /service-area/{slug}/ ---------------- */
for (const town of TOWNS) {
  const depth = 2;
  const others = TOWNS.filter(t => t.slug !== town.slug);
  const project = town.project ? PROJECTS.find(p => p.slug === town.project) : null;
  const workSection = project
    ? `<section class="work">
  <div class="container">
    <div class="section-heading"><div class="eyebrow"><span class="eyebrow-rule"></span>Recent work in ${town.name}</div><h2 style="font-size:var(--size-display-3)">${project.title}</h2></div>
    <div class="work-grid" style="grid-template-columns:1fr;max-width:400px;margin-top:var(--space-7)">
      ${renderProjectCardLink(depth, project)}
    </div>
  </div>
</section>`
    : `<section class="work">
  <div class="container">
    <div class="section-heading"><div class="eyebrow"><span class="eyebrow-rule"></span>Featured work</div><h2 style="font-size:var(--size-display-3)">Recent projects</h2></div>
    <div class="work-grid" style="margin-top:var(--space-7)">
      ${PROJECTS.map(p => renderProjectCardLink(depth, p)).join('\n      ')}
    </div>
  </div>
</section>`;
  const body = `${renderPageHeader(depth, {
    eyebrow: 'Service area',
    title: `Landscaping in ${town.name}, OK`,
    intro: town.blurb,
  })}
${workSection}
<div class="container">
  <div class="related-links">
    <div class="related-links-title">Other service areas</div>
    <div class="related-links-list">
      ${others.map(o => `<a href="${rel(depth, 'service-area/' + o.slug)}">${o.name}</a>`).join('\n      ')}
    </div>
  </div>
</div>
${renderCtaSimple(depth)}`;
  write('service-area/' + town.slug, page(depth, null, `Landscaping in ${town.name}, OK \u2014 Stone &amp; Stem Landscape Co.`, `Design\u2013build landscaping, stonework and plantings in ${town.name}, OK.`, body));
}

console.log('done');
