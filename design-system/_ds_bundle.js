/* @ds-bundle: {"format":4,"namespace":"StoneStemDesignSystem_50e91a","components":[{"name":"ImageFrame","sourcePath":"components/brand/ImageFrame.jsx"},{"name":"ProjectCard","sourcePath":"components/brand/ProjectCard.jsx"},{"name":"SectionHeading","sourcePath":"components/brand/SectionHeading.jsx"},{"name":"ServiceCard","sourcePath":"components/brand/ServiceCard.jsx"},{"name":"StatRow","sourcePath":"components/brand/StatRow.jsx"},{"name":"Testimonial","sourcePath":"components/brand/Testimonial.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"assets/image-slot.js":"fff26d081c8d","components/brand/ImageFrame.jsx":"809800500827","components/brand/ProjectCard.jsx":"151f92f40246","components/brand/SectionHeading.jsx":"587f30eae0be","components/brand/ServiceCard.jsx":"19fd24ce5664","components/brand/StatRow.jsx":"f5430308e924","components/brand/Testimonial.jsx":"4212ae3e07bf","components/core/Badge.jsx":"c953a6d0a126","components/core/Button.jsx":"58a2db6f853f","components/core/Card.jsx":"679d32b9d00b","components/core/IconButton.jsx":"d3b8ee284af1","components/core/Logo.jsx":"602c27aac43b","components/core/Tag.jsx":"d2a70b928ee0","components/feedback/Dialog.jsx":"63e91e58f5a0","components/feedback/Toast.jsx":"b5a4d00e2f6f","components/feedback/Tooltip.jsx":"6d9fc333ad1f","components/forms/Checkbox.jsx":"b1523fe50ecd","components/forms/Field.jsx":"4f0ce7aaa8eb","components/forms/Input.jsx":"b1c25858dc84","components/forms/Radio.jsx":"ef81a048bae0","components/forms/Select.jsx":"ecae69f977d0","components/forms/Switch.jsx":"3eda39e3d165","components/forms/Textarea.jsx":"b46082400fff","components/navigation/Footer.jsx":"d2e487782c27","components/navigation/NavBar.jsx":"2bd7ec278b84","components/navigation/Tabs.jsx":"8c62188ce2ef","ui_kits/website/App.jsx":"531a0b518f99","ui_kits/website/Contact.jsx":"288a3b047e64","ui_kits/website/Home.jsx":"408106102e68","ui_kits/website/ProjectDetail.jsx":"9a24e4f77100","ui_kits/website/Services.jsx":"ffb6c8a4faf7","ui_kits/website/Work.jsx":"b29633e83f22","ui_kits/website/shared.jsx":"725b3bc7d946"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.StoneStemDesignSystem_50e91a = window.StoneStemDesignSystem_50e91a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/image-slot.js", error: String((e && e.message) || e) }); }

// components/brand/ImageFrame.jsx
try { (() => {
function ImageFrame({
  slotId,
  src,
  alt = '',
  ratio = '3 / 2',
  caption,
  scrim = 'none',
  rounded = true,
  children,
  style,
  ...rest
}) {
  const s = Object.assign({
    position: 'relative',
    overflow: 'hidden',
    aspectRatio: ratio,
    background: 'var(--stone-300)',
    borderRadius: rounded ? 'var(--radius-card)' : '0'
  }, style);
  const scrims = {
    none: null,
    bottom: 'var(--scrim-bottom)',
    full: 'var(--scrim-full)'
  };
  return React.createElement('figure', {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, React.createElement('div', Object.assign({
    style: s
  }, rest), src ? React.createElement('img', {
    src: src,
    alt: alt,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : React.createElement('image-slot', {
    id: slotId || 'image-frame',
    placeholder: 'Drop a landscape photograph',
    style: {
      position: 'absolute',
      inset: 0
    }
  }), scrims[scrim] ? React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      background: scrims[scrim]
    }
  }) : null, children ? React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, children) : null), caption ? React.createElement('figcaption', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-caption)',
      letterSpacing: '0.04em',
      color: 'var(--text-subtle)'
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { ImageFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ImageFrame.jsx", error: String((e && e.message) || e) }); }

// components/brand/ProjectCard.jsx
try { (() => {
function ProjectCard({
  title,
  location,
  category,
  imageSlotId,
  imageSrc,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = Object.assign({
    position: 'relative',
    display: 'block',
    overflow: 'hidden',
    borderRadius: 'var(--radius-card)',
    background: 'var(--stone-300)',
    aspectRatio: '4 / 5',
    cursor: 'pointer'
  }, style);
  const media = imageSrc ? React.createElement('img', {
    src: imageSrc,
    alt: title,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform var(--duration-slow) var(--ease-out-soft)',
      transform: hover ? 'var(--image-zoom-hover)' : 'none'
    }
  }) : React.createElement('image-slot', {
    id: imageSlotId || 'project-' + String(title).toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    placeholder: 'Drop a project photograph',
    style: {
      position: 'absolute',
      inset: 0
    }
  });
  return React.createElement('div', Object.assign({
    style: s,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), media, React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)'
    }
  }), React.createElement('div', {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, category ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '10.5px',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--green-300)'
    }
  }, category) : null, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: '24px',
      fontWeight: 500,
      color: 'var(--ivory-100)',
      lineHeight: 1.15
    }
  }, title), location ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-caption)',
      letterSpacing: '0.08em',
      color: 'rgba(245,242,235,0.72)'
    }
  }, location) : null));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'light',
  size = 'md',
  style,
  ...rest
}) {
  const isDark = tone === 'dark';
  const sizes = {
    sm: 'var(--size-h1)',
    md: 'var(--size-display-3)',
    lg: 'var(--size-display-2)'
  };
  const s = Object.assign({
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-4)',
    textAlign: align,
    alignItems: align === 'center' ? 'center' : 'flex-start',
    maxWidth: align === 'center' ? 'var(--container-narrow)' : 'none',
    margin: align === 'center' ? '0 auto' : '0'
  }, style);
  return React.createElement('div', Object.assign({
    style: s
  }, rest), eyebrow ? React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-eyebrow)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: isDark ? 'var(--green-300)' : 'var(--text-brand)'
    }
  }, React.createElement('span', {
    style: {
      width: 28,
      height: 1,
      background: 'currentColor',
      opacity: 0.6
    }
  }), eyebrow) : null, React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontWeight: 500,
      fontSize: sizes[size],
      lineHeight: 'var(--leading-heading)',
      letterSpacing: 'var(--tracking-display)',
      color: isDark ? 'var(--text-on-dark)' : 'var(--text-heading)',
      margin: 0
    }
  }, title), intro ? React.createElement('p', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-body-lg)',
      lineHeight: 'var(--leading-body)',
      color: isDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
      maxWidth: '58ch',
      margin: 0
    }
  }, intro) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/brand/ServiceCard.jsx
try { (() => {
function ServiceCard({
  title,
  description,
  icon,
  index,
  href,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = Object.assign({
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-4)',
    padding: 'var(--space-6)',
    background: 'var(--surface-card)',
    border: '1px solid ' + (hover ? 'var(--green-300)' : 'var(--border-hairline)'),
    borderTop: '2px solid ' + (hover ? 'var(--forest-green)' : 'var(--stone-300)'),
    borderRadius: 'var(--radius-card)',
    textDecoration: 'none',
    transition: 'var(--transition-color), var(--transition-lift)',
    transform: hover ? 'var(--lift-hover)' : 'none',
    boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
    cursor: href ? 'pointer' : 'default'
  }, style);
  const Tag = href ? 'a' : 'div';
  return React.createElement(Tag, Object.assign({
    style: s,
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, icon ? React.createElement('span', {
    style: {
      color: 'var(--forest-green)',
      display: 'flex'
    }
  }, icon) : React.createElement('span', null), index ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: '20px',
      color: 'var(--stone-400)'
    }
  }, index) : null), React.createElement('h4', {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontWeight: 500,
      fontSize: 'var(--size-h3)',
      color: 'var(--text-heading)',
      margin: 0
    }
  }, title), React.createElement('p', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-body-sm)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, description));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/brand/StatRow.jsx
try { (() => {
function StatRow({
  items = [],
  tone = 'light',
  style,
  ...rest
}) {
  const isDark = tone === 'dark';
  const s = Object.assign({
    display: 'grid',
    gridTemplateColumns: 'repeat(' + Math.max(items.length, 1) + ',1fr)',
    gap: 'var(--space-7)'
  }, style);
  return React.createElement('div', Object.assign({
    style: s
  }, rest), items.map(function (it, i) {
    return React.createElement('div', {
      key: i,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-2)',
        paddingTop: 'var(--space-4)',
        borderTop: '1px solid ' + (isDark ? 'var(--border-on-dark)' : 'var(--border-default)')
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'var(--font-serif-display)',
        fontSize: '46px',
        fontWeight: 400,
        lineHeight: 1,
        color: isDark ? 'var(--text-on-dark)' : 'var(--text-heading)'
      }
    }, it.value), React.createElement('span', {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: '11px',
        fontWeight: 700,
        letterSpacing: 'var(--tracking-eyebrow)',
        textTransform: 'uppercase',
        color: isDark ? 'var(--stone-500)' : 'var(--text-subtle)'
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { StatRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StatRow.jsx", error: String((e && e.message) || e) }); }

// components/brand/Testimonial.jsx
try { (() => {
function Testimonial({
  quote,
  name,
  detail,
  tone = 'light',
  style,
  ...rest
}) {
  const isDark = tone === 'dark';
  const s = Object.assign({
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-5)',
    paddingLeft: 'var(--space-6)',
    borderLeft: '2px solid ' + (isDark ? 'var(--green-400)' : 'var(--forest-green)')
  }, style);
  return React.createElement('blockquote', Object.assign({
    style: s
  }, rest), React.createElement('p', {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontWeight: 300,
      fontStyle: 'italic',
      fontSize: '26px',
      lineHeight: 1.42,
      color: isDark ? 'var(--text-on-dark)' : 'var(--text-heading)',
      margin: 0,
      maxWidth: '46ch'
    }
  }, quote), React.createElement('footer', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '11px',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: isDark ? 'var(--green-300)' : 'var(--text-brand)'
    }
  }, name), detail ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-caption)',
      color: isDark ? 'var(--text-on-dark-muted)' : 'var(--text-subtle)'
    }
  }, detail) : null));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const tones = {
  neutral: {
    background: 'var(--stone-200)',
    color: 'var(--ink-700)'
  },
  brand: {
    background: 'var(--green-100)',
    color: 'var(--green-800)'
  },
  solid: {
    background: 'var(--forest-green)',
    color: 'var(--ivory-100)'
  },
  bronze: {
    background: 'var(--bronze-100)',
    color: 'var(--bronze-700)'
  },
  danger: {
    background: 'var(--status-danger-soft)',
    color: 'var(--status-danger)'
  },
  inverse: {
    background: 'rgba(245,242,235,0.14)',
    color: 'var(--text-on-dark)'
  }
};
function Badge({
  tone = 'neutral',
  children,
  style,
  ...rest
}) {
  const s = Object.assign({
    display: 'inline-block',
    fontFamily: 'var(--font-sans)',
    fontSize: '10.5px',
    fontWeight: 700,
    letterSpacing: 'var(--tracking-eyebrow)',
    textTransform: 'uppercase',
    padding: '5px 9px',
    borderRadius: 'var(--radius-xs)'
  }, tones[tone], style);
  return React.createElement('span', Object.assign({
    style: s
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-2)',
  fontFamily: 'var(--font-sans)',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: 'var(--tracking-button)',
  borderRadius: 'var(--radius-sm)',
  border: 'var(--border-width) solid transparent',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'var(--transition-color), var(--transition-lift)',
  whiteSpace: 'nowrap'
};
const sizes = {
  sm: {
    fontSize: '11px',
    padding: '8px 16px'
  },
  md: {
    fontSize: '12px',
    padding: '13px 26px'
  },
  lg: {
    fontSize: '13px',
    padding: '17px 34px'
  }
};
const variants = {
  primary: {
    background: 'var(--forest-green)',
    color: 'var(--text-on-brand)',
    borderColor: 'var(--forest-green)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--text-heading)',
    borderColor: 'var(--border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-brand)',
    borderColor: 'transparent',
    paddingLeft: 0,
    paddingRight: 0
  },
  bronze: {
    background: 'var(--bronze-600)',
    color: 'var(--ivory-100)',
    borderColor: 'var(--bronze-600)'
  },
  inverse: {
    background: 'var(--ivory-100)',
    color: 'var(--ink-900)',
    borderColor: 'var(--ivory-100)'
  },
  outlineInverse: {
    background: 'transparent',
    color: 'var(--text-on-dark)',
    borderColor: 'var(--border-on-dark)'
  }
};
const hovers = {
  primary: {
    background: 'var(--brand-hover)',
    borderColor: 'var(--brand-hover)'
  },
  secondary: {
    borderColor: 'var(--forest-green)',
    color: 'var(--text-brand)'
  },
  ghost: {
    color: 'var(--green-800)'
  },
  bronze: {
    background: 'var(--bronze-700)',
    borderColor: 'var(--bronze-700)'
  },
  inverse: {
    background: 'var(--ivory-200)',
    borderColor: 'var(--ivory-200)'
  },
  outlineInverse: {
    borderColor: 'var(--ivory-100)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  href,
  iconLeft,
  iconRight,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = Object.assign({}, base, sizes[size], variants[variant], hover && !disabled ? hovers[variant] : null, fullWidth ? {
    width: '100%'
  } : null, press && !disabled ? {
    transform: 'var(--press-scale)'
  } : null, disabled ? {
    opacity: 0.42,
    cursor: 'not-allowed'
  } : null, style);
  const Tag = href ? 'a' : 'button';
  return React.createElement(Tag, Object.assign({
    style: s,
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), iconLeft, React.createElement('span', null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  variant = 'raised',
  interactive = false,
  padding = 'var(--space-6)',
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const variants = {
    raised: {
      background: 'var(--surface-card)',
      border: 'var(--border-width) solid var(--border-hairline)',
      boxShadow: 'var(--shadow-sm)'
    },
    flat: {
      background: 'var(--surface-card)',
      border: 'var(--border-width) solid var(--border-default)',
      boxShadow: 'none'
    },
    stone: {
      background: 'var(--surface-stone)',
      border: 'var(--border-width) solid transparent',
      boxShadow: 'none'
    },
    inverse: {
      background: 'var(--surface-inverse)',
      border: 'var(--border-width) solid var(--border-on-dark)',
      boxShadow: 'none',
      color: 'var(--text-on-dark)'
    }
  };
  const s = Object.assign({
    borderRadius: 'var(--radius-card)',
    padding: padding,
    transition: 'var(--transition-lift)'
  }, variants[variant], interactive ? {
    cursor: 'pointer'
  } : null, interactive && hover ? {
    transform: 'var(--lift-hover)',
    boxShadow: 'var(--shadow-card-hover)'
  } : null, style);
  return React.createElement('div', Object.assign({
    style: s,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const sizes = {
  sm: 28,
  md: 38,
  lg: 46
};
function IconButton({
  variant = 'secondary',
  size = 'md',
  label,
  disabled = false,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const d = sizes[size];
  const tones = {
    secondary: {
      background: 'transparent',
      color: 'var(--text-heading)',
      border: 'var(--border-width) solid var(--border-default)'
    },
    solid: {
      background: 'var(--forest-green)',
      color: 'var(--ivory-100)',
      border: 'var(--border-width) solid var(--forest-green)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: 'var(--border-width) solid transparent'
    },
    inverse: {
      background: 'rgba(245,242,235,0.10)',
      color: 'var(--text-on-dark)',
      border: 'var(--border-width) solid var(--border-on-dark)'
    }
  };
  const hoverTones = {
    secondary: {
      borderColor: 'var(--forest-green)',
      color: 'var(--text-brand)'
    },
    solid: {
      background: 'var(--brand-hover)',
      borderColor: 'var(--brand-hover)'
    },
    ghost: {
      background: 'var(--surface-sunken)'
    },
    inverse: {
      background: 'rgba(245,242,235,0.18)'
    }
  };
  const s = Object.assign({
    width: d,
    height: d,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    padding: 0,
    transition: 'var(--transition-color)',
    opacity: disabled ? 0.42 : 1
  }, tones[variant], hover && !disabled ? hoverTones[variant] : null, style);
  return React.createElement('button', Object.assign({
    type: 'button',
    'aria-label': label,
    style: s,
    disabled,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function Logo({
  variant = 'full',
  tone = 'dark',
  height = 64,
  assetBase = '/assets',
  style,
  ...rest
}) {
  const src = assetBase + '/' + (variant === 'mark' ? 'logo-mark.png' : variant === 'wordmark' ? 'wordmark.png' : 'logo-lockup.png');
  const s = Object.assign({
    height: height,
    width: 'auto',
    display: 'block',
    filter: tone === 'light' && variant !== 'mark' ? 'brightness(0) invert(1) sepia(0.10) saturate(1.2)' : 'none'
  }, style);
  return React.createElement('img', Object.assign({
    src: src,
    alt: 'Stone & Stem Landscape Co.',
    style: s
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  selected = false,
  onClick,
  onRemove,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = Object.assign({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--space-2)',
    fontFamily: 'var(--font-sans)',
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    padding: '8px 16px',
    borderRadius: 'var(--radius-pill)',
    cursor: onClick ? 'pointer' : 'default',
    transition: 'var(--transition-color)',
    background: selected ? 'var(--forest-green)' : 'transparent',
    color: selected ? 'var(--ivory-100)' : hover ? 'var(--text-brand)' : 'var(--text-muted)',
    border: 'var(--border-width) solid ' + (selected ? 'var(--forest-green)' : hover ? 'var(--forest-green)' : 'var(--border-default)')
  }, style);
  return React.createElement('span', Object.assign({
    style: s,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children, onRemove ? React.createElement('span', {
    style: {
      cursor: 'pointer',
      opacity: 0.7,
      fontSize: '13px'
    },
    onClick: function (e) {
      e.stopPropagation();
      onRemove();
    }
  }, '\u00d7') : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = false,
  title,
  eyebrow,
  width = 520,
  onClose,
  footer,
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return React.createElement('div', {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-5)',
      background: 'var(--overlay-scrim)',
      backdropFilter: 'blur(3px)'
    },
    onClick: onClose
  }, React.createElement('div', Object.assign({
    style: Object.assign({
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-raised)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-lg)',
      padding: 'var(--space-7)'
    }, style),
    onClick: function (e) {
      e.stopPropagation();
    }
  }, rest), eyebrow ? React.createElement('div', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-eyebrow)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-brand)',
      marginBottom: 'var(--space-3)'
    }
  }, eyebrow) : null, title ? React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 'var(--size-h2)',
      fontWeight: 500,
      color: 'var(--text-heading)',
      margin: '0 0 var(--space-4)'
    }
  }, title) : null, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-body)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-body)'
    }
  }, children), footer ? React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      justifyContent: 'flex-end',
      marginTop: 'var(--space-6)',
      paddingTop: 'var(--space-5)',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  tone = 'brand',
  title,
  message,
  onDismiss,
  style,
  ...rest
}) {
  const tones = {
    brand: {
      borderLeft: '2px solid var(--forest-green)'
    },
    bronze: {
      borderLeft: '2px solid var(--bronze-600)'
    },
    danger: {
      borderLeft: '2px solid var(--status-danger)'
    }
  };
  const s = Object.assign({
    display: 'flex',
    alignItems: 'flex-start',
    gap: 'var(--space-4)',
    minWidth: 300,
    maxWidth: 420,
    background: 'var(--surface-inverse)',
    color: 'var(--text-on-dark)',
    borderRadius: 'var(--radius-sm)',
    padding: 'var(--space-4) var(--space-5)',
    boxShadow: 'var(--shadow-lg)',
    fontFamily: 'var(--font-sans)'
  }, tones[tone], style);
  return React.createElement('div', Object.assign({
    style: s
  }, rest), React.createElement('div', {
    style: {
      flex: 1
    }
  }, title ? React.createElement('div', {
    style: {
      fontSize: '11px',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      marginBottom: '4px'
    }
  }, title) : null, React.createElement('div', {
    style: {
      fontSize: 'var(--size-body-sm)',
      lineHeight: 1.5,
      color: 'var(--text-on-dark-muted)'
    }
  }, message)), onDismiss ? React.createElement('span', {
    onClick: onDismiss,
    style: {
      cursor: 'pointer',
      color: 'var(--text-on-dark-muted)',
      fontSize: '15px',
      lineHeight: 1
    }
  }, '\u00d7') : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  placement = 'top',
  children,
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 8px)'
  } : {
    bottom: 'calc(100% + 8px)'
  };
  const bubble = Object.assign({
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    whiteSpace: 'nowrap',
    background: 'var(--ink-900)',
    color: 'var(--ivory-100)',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--size-caption)',
    letterSpacing: '0.02em',
    padding: '6px 10px',
    borderRadius: 'var(--radius-xs)',
    boxShadow: 'var(--shadow-md)',
    opacity: show ? 1 : 0,
    transition: 'opacity var(--duration-fast) var(--ease-standard)',
    pointerEvents: 'none',
    zIndex: 40
  }, pos, style);
  return React.createElement('span', Object.assign({
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, rest), children, React.createElement('span', {
    style: bubble
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked,
  defaultChecked,
  label,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const isOn = checked === undefined ? inner : checked;
  function toggle() {
    if (disabled) return;
    if (checked === undefined) setInner(!isOn);
    if (onChange) onChange(!isOn);
  }
  const box = {
    width: 18,
    height: 18,
    flex: '0 0 auto',
    borderRadius: 'var(--radius-xs)',
    border: 'var(--border-width) solid ' + (isOn ? 'var(--forest-green)' : 'var(--border-strong)'),
    background: isOn ? 'var(--forest-green)' : 'var(--surface-raised)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'var(--transition-color)'
  };
  return React.createElement('label', Object.assign({
    style: Object.assign({
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-body)'
    }, style),
    onClick: toggle
  }, rest), React.createElement('span', {
    style: box
  }, isOn ? React.createElement('svg', {
    width: 11,
    height: 11,
    viewBox: '0 0 12 12',
    fill: 'none'
  }, React.createElement('path', {
    d: 'M2 6.2 4.6 8.8 10 3.4',
    stroke: '#F5F2EB',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  })) : null), label ? React.createElement('span', null, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function Field({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  children,
  style
}) {
  return React.createElement('div', {
    style: Object.assign({
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }, style)
  }, label ? React.createElement('label', {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '11px',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label, required ? React.createElement('span', {
    style: {
      color: 'var(--bronze-600)'
    }
  }, ' *') : null) : null, children, error ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-caption)',
      color: 'var(--status-danger)'
    }
  }, error) : hint ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-caption)',
      color: 'var(--text-subtle)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const controlStyle = function (focus, invalid, disabled) {
  return {
    width: '100%',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--size-body)',
    color: 'var(--text-body)',
    background: disabled ? 'var(--surface-sunken)' : 'var(--surface-raised)',
    border: 'var(--border-width) solid ' + (invalid ? 'var(--status-danger)' : focus ? 'var(--forest-green)' : 'var(--border-default)'),
    borderRadius: 'var(--radius-sm)',
    padding: '13px 14px',
    outline: 'none',
    transition: 'var(--transition-color)',
    boxShadow: focus ? '0 0 0 3px rgba(77,93,63,0.12)' : 'none',
    opacity: disabled ? 0.6 : 1
  };
};
function Input({
  type = 'text',
  value,
  defaultValue,
  placeholder,
  disabled = false,
  invalid = false,
  iconLeft,
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const s = Object.assign(controlStyle(focus, invalid, disabled), iconLeft ? {
    paddingLeft: '42px'
  } : null, style);
  const input = React.createElement('input', Object.assign({
    type,
    value,
    defaultValue,
    placeholder,
    disabled,
    onChange,
    style: s,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest));
  if (!iconLeft) return input;
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      left: '14px',
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      color: 'var(--text-subtle)',
      pointerEvents: 'none'
    }
  }, iconLeft), input);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  checked = false,
  label,
  name,
  value,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const ring = {
    width: 18,
    height: 18,
    flex: '0 0 auto',
    borderRadius: '999px',
    border: 'var(--border-width) solid ' + (checked ? 'var(--forest-green)' : 'var(--border-strong)'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--surface-raised)',
    transition: 'var(--transition-color)'
  };
  return React.createElement('label', Object.assign({
    style: Object.assign({
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-body)'
    }, style),
    onClick: function () {
      if (!disabled && onChange) onChange(value);
    }
  }, rest), React.createElement('span', {
    style: ring
  }, checked ? React.createElement('span', {
    style: {
      width: 8,
      height: 8,
      borderRadius: '999px',
      background: 'var(--forest-green)'
    }
  }) : null), label ? React.createElement('span', null, label) : null);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const controlStyle = function (focus, invalid, disabled) {
  return {
    width: '100%',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--size-body)',
    color: 'var(--text-body)',
    background: disabled ? 'var(--surface-sunken)' : 'var(--surface-raised)',
    border: 'var(--border-width) solid ' + (invalid ? 'var(--status-danger)' : focus ? 'var(--forest-green)' : 'var(--border-default)'),
    borderRadius: 'var(--radius-sm)',
    padding: '13px 14px',
    outline: 'none',
    transition: 'var(--transition-color)',
    boxShadow: focus ? '0 0 0 3px rgba(77,93,63,0.12)' : 'none',
    opacity: disabled ? 0.6 : 1
  };
};
function Select({
  value,
  defaultValue,
  options = [],
  placeholder,
  disabled = false,
  invalid = false,
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const s = Object.assign(controlStyle(focus, invalid, disabled), {
    appearance: 'none',
    paddingRight: '40px',
    cursor: 'pointer'
  }, style);
  const caret = React.createElement('span', {
    style: {
      position: 'absolute',
      right: '15px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-subtle)',
      fontSize: '10px'
    }
  }, '\u25be');
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, React.createElement('select', Object.assign({
    value,
    defaultValue,
    disabled,
    onChange,
    style: s,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest), placeholder ? React.createElement('option', {
    value: '',
    disabled: true
  }, placeholder) : null, options.map(function (o) {
    return React.createElement('option', {
      key: o.value,
      value: o.value
    }, o.label);
  })), caret);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  defaultChecked,
  label,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const isOn = checked === undefined ? inner : checked;
  function toggle() {
    if (disabled) return;
    if (checked === undefined) setInner(!isOn);
    if (onChange) onChange(!isOn);
  }
  const track = {
    width: 40,
    height: 22,
    borderRadius: '999px',
    flex: '0 0 auto',
    background: isOn ? 'var(--forest-green)' : 'var(--stone-400)',
    padding: '2px',
    display: 'flex',
    transition: 'background-color var(--duration-fast) var(--ease-standard)'
  };
  const knob = {
    width: 18,
    height: 18,
    borderRadius: '999px',
    background: 'var(--ivory-000)',
    boxShadow: 'var(--shadow-sm)',
    transform: isOn ? 'translateX(18px)' : 'translateX(0)',
    transition: 'transform var(--duration-fast) var(--ease-out-soft)'
  };
  return React.createElement('label', Object.assign({
    style: Object.assign({
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-body)'
    }, style),
    onClick: toggle
  }, rest), React.createElement('span', {
    style: track
  }, React.createElement('span', {
    style: knob
  })), label ? React.createElement('span', null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
const controlStyle = function (focus, invalid, disabled) {
  return {
    width: '100%',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--size-body)',
    color: 'var(--text-body)',
    background: disabled ? 'var(--surface-sunken)' : 'var(--surface-raised)',
    border: 'var(--border-width) solid ' + (invalid ? 'var(--status-danger)' : focus ? 'var(--forest-green)' : 'var(--border-default)'),
    borderRadius: 'var(--radius-sm)',
    padding: '13px 14px',
    outline: 'none',
    transition: 'var(--transition-color)',
    boxShadow: focus ? '0 0 0 3px rgba(77,93,63,0.12)' : 'none',
    opacity: disabled ? 0.6 : 1
  };
};
function Textarea({
  value,
  defaultValue,
  placeholder,
  rows = 5,
  disabled = false,
  invalid = false,
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const s = Object.assign(controlStyle(focus, invalid, disabled), {
    lineHeight: 'var(--leading-body)',
    resize: 'vertical'
  }, style);
  return React.createElement('textarea', Object.assign({
    value,
    defaultValue,
    placeholder,
    rows,
    disabled,
    onChange,
    style: s,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer({
  columns = [],
  phone,
  email,
  site,
  tagline = 'Crafted Outdoor Living',
  assetBase = '/assets',
  style,
  ...rest
}) {
  const s = Object.assign({
    background: 'var(--surface-inverse)',
    color: 'var(--text-on-dark)',
    padding: 'var(--space-9) var(--space-7) var(--space-6)'
  }, style);
  const label = {
    fontFamily: 'var(--font-sans)',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: 'var(--tracking-eyebrow)',
    textTransform: 'uppercase',
    color: 'var(--stone-500)',
    marginBottom: 'var(--space-4)'
  };
  return React.createElement('footer', Object.assign({
    style: s
  }, rest), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(' + Math.max(columns.length, 1) + ',1fr)',
      gap: 'var(--space-7)',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, React.createElement('div', null, React.createElement(__ds_scope.Logo, {
    variant: 'mark',
    height: 64,
    assetBase: assetBase
  }), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: '22px',
      letterSpacing: 'var(--tracking-wordmark)',
      marginTop: 'var(--space-4)'
    }
  }, 'Stone & Stem'), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '11px',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--green-300)',
      marginTop: 'var(--space-2)'
    }
  }, tagline)), columns.map(function (col, i) {
    return React.createElement('div', {
      key: i
    }, React.createElement('div', {
      style: label
    }, col.title), React.createElement('ul', {
      style: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)'
      }
    }, col.items.map(function (it, j) {
      return React.createElement('li', {
        key: j,
        style: {
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--size-body-sm)',
          color: 'var(--text-on-dark-muted)'
        }
      }, it);
    })));
  })), React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: 'var(--space-8) auto 0',
      paddingTop: 'var(--space-5)',
      borderTop: '1px solid var(--border-on-dark)',
      display: 'flex',
      gap: 'var(--space-5)',
      flexWrap: 'wrap',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-caption)',
      letterSpacing: '0.06em',
      color: 'var(--stone-500)'
    }
  }, phone ? React.createElement('span', null, phone) : null, email ? React.createElement('span', null, email) : null, site ? React.createElement('span', null, site) : null, React.createElement('span', {
    style: {
      marginLeft: 'auto'
    }
  }, '\u00a9 Stone & Stem Landscape Co.')));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  links = [],
  activeHref,
  tone = 'light',
  phone,
  ctaLabel = 'Request an estimate',
  onCta,
  assetBase = '/assets',
  style,
  ...rest
}) {
  const isDark = tone === 'dark';
  const bar = Object.assign({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 'var(--space-7)',
    padding: 'var(--space-4) var(--space-7)',
    background: isDark ? 'transparent' : 'var(--surface-raised)',
    borderBottom: '1px solid ' + (isDark ? 'var(--border-on-dark)' : 'var(--border-hairline)')
  }, style);
  return React.createElement('header', Object.assign({
    style: bar
  }, rest), React.createElement(__ds_scope.Logo, {
    variant: 'full',
    height: 46,
    tone: isDark ? 'light' : 'dark',
    assetBase: assetBase
  }), React.createElement('nav', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, links.map(function (l) {
    const active = l.href === activeHref;
    return React.createElement('a', {
      key: l.href,
      href: l.href,
      onClick: l.onClick,
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: '12px',
        fontWeight: 700,
        letterSpacing: 'var(--tracking-nav)',
        textTransform: 'uppercase',
        textDecoration: 'none',
        borderBottom: '1px solid ' + (active ? isDark ? 'var(--ivory-100)' : 'var(--forest-green)' : 'transparent'),
        paddingBottom: '3px',
        color: active ? isDark ? 'var(--text-on-dark)' : 'var(--text-brand)' : isDark ? 'var(--text-on-dark-muted)' : 'var(--text-body)'
      }
    }, l.label);
  })), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, phone ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-body-sm)',
      letterSpacing: '0.06em',
      color: isDark ? 'var(--text-on-dark)' : 'var(--text-heading)'
    }
  }, phone) : null, React.createElement(__ds_scope.Button, {
    variant: isDark ? 'outlineInverse' : 'primary',
    size: 'sm',
    onClick: onCta
  }, ctaLabel)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  tone = 'light',
  style,
  ...rest
}) {
  const isDark = tone === 'dark';
  const wrap = Object.assign({
    display: 'flex',
    gap: 'var(--space-6)',
    borderBottom: '1px solid ' + (isDark ? 'var(--border-on-dark)' : 'var(--border-default)')
  }, style);
  return React.createElement('div', Object.assign({
    style: wrap,
    role: 'tablist'
  }, rest), items.map(function (it) {
    const active = it.value === value;
    return React.createElement('button', {
      key: it.value,
      role: 'tab',
      'aria-selected': active,
      onClick: function () {
        if (onChange) onChange(it.value);
      },
      style: {
        background: 'none',
        border: 0,
        padding: '0 0 var(--space-3)',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: '12px',
        fontWeight: 700,
        letterSpacing: 'var(--tracking-nav)',
        textTransform: 'uppercase',
        color: active ? isDark ? 'var(--text-on-dark)' : 'var(--text-heading)' : isDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
        borderBottom: '2px solid ' + (active ? isDark ? 'var(--ivory-100)' : 'var(--forest-green)' : 'transparent'),
        marginBottom: '-1px',
        transition: 'var(--transition-color)'
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
const {
  Footer
} = DS;
const SCREENS = {
  home: 'Home',
  services: 'Services',
  work: 'Our work',
  project: 'Project',
  contact: 'Estimate'
};
function App() {
  const [screen, setScreen] = React.useState('home');
  const [project, setProject] = React.useState(null);
  function go(next, payload) {
    if (payload) setProject(payload);
    setScreen(next);
    window.scrollTo(0, 0);
  }
  const Screen = {
    home: window.Home,
    services: window.Services,
    work: window.Work,
    project: window.ProjectDetail,
    contact: window.Contact
  }[screen];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: '50%',
      transform: 'translateX(-50%)',
      bottom: 18,
      zIndex: 90,
      display: 'flex',
      gap: 4,
      background: 'var(--glass-dark)',
      backdropFilter: 'var(--blur-glass)',
      padding: 5,
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, Object.keys(SCREENS).map(k => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => go(k),
    style: {
      border: 0,
      cursor: 'pointer',
      borderRadius: 'var(--radius-pill)',
      padding: '8px 14px',
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      background: screen === k ? 'var(--ivory-100)' : 'transparent',
      color: screen === k ? 'var(--ink-900)' : 'rgba(245,242,235,0.75)'
    }
  }, SCREENS[k]))), /*#__PURE__*/React.createElement(Screen, {
    go: go,
    project: project
  }), /*#__PURE__*/React.createElement(Footer, {
    phone: "918.555.2476",
    email: "jonathan@stoneandstem.com",
    site: "stoneandstem.com",
    assetBase: ASSETS,
    columns: [{
      title: 'Services',
      items: ['Design & build', 'Stonework', 'Plantings', 'Outdoor living', 'Lighting', 'Drainage']
    }, {
      title: 'Company',
      items: ['About', 'Process', 'Our work', 'Careers']
    }, {
      title: 'Service area',
      items: ['Tulsa', 'Jenks', 'Bixby', 'Broken Arrow', 'Owasso']
    }]
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
const {
  NavBar,
  SectionHeading,
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Button,
  Card,
  Dialog,
  Toast
} = DS;
function Contact({
  go
}) {
  const [contact, setContact] = React.useState('phone');
  const [sent, setSent] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(NavBar, {
    links: NAV,
    activeHref: "/contact",
    phone: "918.555.2476",
    assetBase: ASSETS,
    onCta: () => {},
    style: {
      padding: 'var(--space-5) 0',
      borderBottom: '1px solid var(--border-hairline)'
    }
  })), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 0.85fr',
      gap: 'var(--space-9)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Request an estimate",
    title: "Tell us about the property",
    intro: "A designer calls within one business day to schedule the site walk. Estimates are free and fixed-price.",
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Full name",
    htmlFor: "c-name"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-name",
    placeholder: "First and last"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Phone",
    htmlFor: "c-phone"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-phone",
    type: "tel",
    placeholder: "918.555.2476"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    htmlFor: "c-email"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-email",
    type: "email",
    placeholder: "you@example.com"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Property address",
    htmlFor: "c-addr",
    hint: "Street and city is enough."
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-addr",
    placeholder: "Tulsa, OK"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Primary service",
    htmlFor: "c-svc",
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    id: "c-svc",
    placeholder: "Select a service",
    options: SERVICES.map(s => ({
      value: s.title,
      label: s.title
    }))
  })), /*#__PURE__*/React.createElement(Field, {
    label: "About the project",
    htmlFor: "c-note",
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "c-note",
    rows: 4,
    placeholder: "Back yard, roughly 40 by 60 feet, sloping toward the house\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Best way to reach you"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)'
    }
  }, [['phone', 'Call'], ['text', 'Text'], ['email', 'Email']].map(o => /*#__PURE__*/React.createElement(Radio, {
    key: o[0],
    name: "reach",
    value: o[0],
    label: o[1],
    checked: contact === o[0],
    onChange: setContact
  }))), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Also quote seasonal maintenance"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => setSent(true)
  }, "Send request"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setToast(true)
  }, "Save for later")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "inverse",
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--green-300)'
    }
  }, "Talk to us"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 30,
      color: 'var(--ivory-100)',
      margin: 'var(--space-3) 0'
    }
  }, "918.555.2476"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-on-dark-muted)',
      lineHeight: 1.7
    }
  }, "jonathan@stoneandstem.com", /*#__PURE__*/React.createElement("br", null), "Mon\u2013Fri, 7:00 am \u2013 5:00 pm")), /*#__PURE__*/React.createElement(Card, {
    variant: "stone",
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, "Service area"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-body)',
      marginTop: 'var(--space-3)',
      lineHeight: 1.8
    }
  }, "Tulsa \xB7 Midtown \xB7 Jenks", /*#__PURE__*/React.createElement("br", null), "Bixby \xB7 Broken Arrow \xB7 Owasso")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "contact-photo",
    shape: "rect",
    placeholder: "Drop a finished-project photograph",
    style: {
      position: 'absolute',
      inset: 0
    }
  })))))), /*#__PURE__*/React.createElement(Dialog, {
    open: sent,
    eyebrow: "Estimate",
    title: "Request received",
    onClose: () => setSent(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      onClick: () => setSent(false)
    }, "Close"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => {
        setSent(false);
        go('work');
      }
    }, "Browse our work"))
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Thank you \u2014 a designer will call you within one business day to schedule the site walk.")), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 24,
      bottom: 24,
      zIndex: 80
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    title: "Saved",
    message: "We kept your draft on this device.",
    onDismiss: () => setToast(false)
  })));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  NavBar,
  Button,
  SectionHeading,
  ServiceCard,
  ProjectCard,
  Testimonial,
  StatRow,
  Card,
  Badge
} = DS;
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 640,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "home-hero",
    shape: "rect",
    placeholder: "Drop the hero photograph (wide, warm evening light)",
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-full)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(NavBar, {
    tone: "dark",
    links: NAV,
    activeHref: "/",
    phone: "918.555.2476",
    assetBase: ASSETS,
    onCta: () => go('contact'),
    style: {
      padding: 'var(--space-5) 0',
      background: 'transparent'
    }
  })), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingTop: 120,
      paddingBottom: 110,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      color: 'var(--green-300)',
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 1,
      background: 'currentColor'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase'
    }
  }, "Tulsa & surrounding towns")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 'var(--size-display-1)',
      fontWeight: 500,
      lineHeight: 'var(--leading-display)',
      color: 'var(--ivory-100)',
      margin: 0,
      maxWidth: '16ch'
    }
  }, "Crafted outdoor living"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-body-lg)',
      lineHeight: 'var(--leading-body)',
      color: 'rgba(245,242,235,0.82)',
      maxWidth: '46ch',
      marginTop: 'var(--space-5)'
    }
  }, "Stone set by hand, plantings chosen for the site, and one crew that stays with your property from the first sketch to the last sweep."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    onClick: () => go('contact')
  }, "Request an estimate"), /*#__PURE__*/React.createElement(Button, {
    variant: "outlineInverse",
    size: "lg",
    onClick: () => go('work')
  }, "See our work"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-9)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Who we are",
    title: "A landscape company that draws first",
    intro: "We are a design\u2013build studio: the person who measures your grade is the person who sets your stone. That is why our patios sit flat a decade later."
  }), /*#__PURE__*/React.createElement(StatRow, {
    style: {
      marginTop: 'var(--space-7)'
    },
    items: [{
      value: '18',
      label: 'Years in Tulsa'
    }, {
      value: '240+',
      label: 'Properties built'
    }, {
      value: '2',
      label: 'Crews, no subs'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 5',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "home-about",
    shape: "rect",
    placeholder: "Drop a crew or craft-detail photograph",
    style: {
      position: 'absolute',
      inset: 0
    }
  }))))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What we do",
    title: "Seven services, one standard"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-7)'
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceCard, {
    key: s.index,
    index: s.index,
    title: s.title,
    description: s.description,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: s.icon
    })
  })), /*#__PURE__*/React.createElement(Card, {
    variant: "inverse",
    padding: "var(--space-6)",
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 24,
      color: 'var(--ivory-100)',
      lineHeight: 1.2
    }
  }, "Not sure where to start?"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "sm",
    onClick: () => go('contact')
  }, "Book a site walk"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Recent work",
    title: "Properties we finished this season"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('work')
  }, "All projects")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-7)'
    }
  }, PROJECTS.slice(0, 3).map(p => /*#__PURE__*/React.createElement("div", {
    key: p.slug,
    onClick: () => go('project', p)
  }, /*#__PURE__*/React.createElement(ProjectCard, {
    category: p.category,
    title: p.title,
    location: p.location,
    imageSlotId: 'home-' + p.slug
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-brand)'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 'var(--space-9)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Testimonial, {
    tone: "dark",
    quote: "They treated the back yard like it mattered \u2014 and the stonework still looks set, four winters on.",
    name: "The Harmons",
    detail: "Midtown Tulsa \u2014 terrace, plantings & lighting"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "inverse"
  }, "Fully licensed & insured"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-body)',
      lineHeight: 'var(--leading-body)',
      color: 'rgba(245,242,235,0.82)'
    }
  }, "Estimates are free, scheduled within one business day, and walked with a designer \u2014 not a salesperson."), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    onClick: () => go('contact')
  }, "Request an estimate"))))));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProjectDetail.jsx
try { (() => {
const {
  NavBar,
  Button,
  Badge,
  Testimonial,
  ImageFrame,
  IconButton,
  SectionHeading,
  ProjectCard
} = DS;
function ProjectDetail({
  go,
  project
}) {
  const p = project || PROJECTS[0];
  const others = PROJECTS.filter(x => x.slug !== p.slug).slice(0, 3);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(NavBar, {
    links: NAV,
    activeHref: "/work",
    phone: "918.555.2476",
    assetBase: ASSETS,
    onCta: () => go('contact'),
    style: {
      padding: 'var(--space-5) 0',
      borderBottom: '1px solid var(--border-hairline)'
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => go('work'),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 14
    })
  }, "All work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      marginBottom: 'var(--space-4)'
    }
  }, p.scope.map(s => /*#__PURE__*/React.createElement(Badge, {
    key: s,
    tone: "brand"
  }, s))), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 'var(--size-display-3)',
      fontWeight: 500,
      margin: 0
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-body-sm)',
      letterSpacing: '0.08em',
      color: 'var(--text-subtle)',
      marginTop: 'var(--space-3)'
    }
  }, p.location, " \xB7 Completed ", p.year)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Previous project",
    variant: "secondary"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 16
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Next project",
    variant: "secondary"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  })))))), /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(ImageFrame, {
    slotId: 'detail-hero-' + p.slug,
    ratio: "16 / 9"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    slotId: 'detail-a-' + p.slug,
    ratio: "4 / 3"
  }), /*#__PURE__*/React.createElement(ImageFrame, {
    slotId: 'detail-b-' + p.slug,
    ratio: "4 / 3"
  }))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The property",
    title: "What the site asked for",
    size: "sm"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-body)',
      marginTop: 'var(--space-5)'
    }
  }, "The back of the house fell nearly four feet toward a fence line, and water pooled against the foundation after every storm. We cut the slope into two terraces, set a dry-laid wall to hold the upper level, and moved the water into a planted swale along the property edge."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-body)'
    }
  }, "The terrace is cut bluestone on a compacted base, swept with polymeric sand. Beds are planted for dappled shade, and low-voltage fixtures wash the wall face after dark.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)',
      alignContent: 'start'
    }
  }, [['Scope', p.scope.join(', ')], ['Location', p.location], ['Completed', p.year], ['Materials', 'Cut bluestone, native limestone, polymeric sand'], ['Duration', '6 weeks']].map(row => /*#__PURE__*/React.createElement("div", {
    key: row[0],
    style: {
      paddingTop: 'var(--space-3)',
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, row[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-body)',
      marginTop: 4
    }
  }, row[1]))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Testimonial, {
    quote: "We use the terrace every evening now. It feels like part of the house.",
    name: "Owner",
    detail: p.location
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-8)'
    }
  }, others.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.slug,
    onClick: () => go('project', o)
  }, /*#__PURE__*/React.createElement(ProjectCard, {
    category: o.category,
    title: o.title,
    location: o.location,
    imageSlotId: 'more-' + o.slug
  })))))));
}
window.ProjectDetail = ProjectDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProjectDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
const {
  NavBar,
  SectionHeading,
  ServiceCard,
  Tabs,
  Button,
  Card,
  ImageFrame
} = DS;
const PHASES = {
  design: {
    title: 'Design',
    body: 'We walk the property, shoot grades, read the water, and draw a measured plan with planting schedules. You approve drawings before we price the build.',
    bullets: ['Site walk & measurement', 'Grade and drainage read', 'Measured plan + planting schedule', 'Fixed-price proposal']
  },
  build: {
    title: 'Build',
    body: 'One crew, start to finish. Stone is cut on site, base is compacted in lifts, and the foreman sends photos at the end of every working day.',
    bullets: ['Base prep in compacted lifts', 'Stone cut and set on site', 'Daily photo updates', 'Final grade and clean sweep']
  },
  care: {
    title: 'Care',
    body: 'Seasonal visits keep beds edged, joints swept and fixtures aimed. Most clients keep us on a spring and autumn rotation.',
    bullets: ['Spring bed reset & mulch', 'Joint sand and wall check', 'Lighting re-aim', 'Autumn cutback & leaf clear']
  }
};
function Services({
  go
}) {
  const [tab, setTab] = React.useState('design');
  const phase = PHASES[tab];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(NavBar, {
    links: NAV,
    activeHref: "/services",
    phone: "918.555.2476",
    assetBase: ASSETS,
    onCta: () => go('contact'),
    style: {
      padding: 'var(--space-5) 0',
      borderBottom: '1px solid var(--border-hairline)'
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Services",
    title: "Design, build and care for the whole property",
    intro: "Most projects combine three or four of these. We price them as one scope so nothing falls between trades.",
    size: "lg"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-4)'
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceCard, {
    key: s.index,
    index: s.index,
    title: s.title,
    description: s.description,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: s.icon
    })
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "How it goes",
    title: "Measured first, then built"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: 'design',
      label: 'Design'
    }, {
      value: 'build',
      label: 'Build'
    }, {
      value: 'care',
      label: 'Care'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)',
      marginTop: 'var(--space-7)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 'var(--size-h1)',
      fontWeight: 500,
      margin: '0 0 var(--space-4)'
    }
  }, phase.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-body)'
    }
  }, phase.body), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 'var(--space-5) 0 0',
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, phase.bullets.map(b => /*#__PURE__*/React.createElement("li", {
    key: b,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center',
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--forest-green)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16
  })), b))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    style: {
      marginTop: 'var(--space-6)'
    },
    onClick: () => go('contact')
  }, "Start with a site walk")), /*#__PURE__*/React.createElement(ImageFrame, {
    slotId: 'services-' + tab,
    ratio: "4 / 3",
    caption: 'Phase: ' + phase.title
  })))));
}
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Work.jsx
try { (() => {
const {
  NavBar,
  SectionHeading,
  ProjectCard,
  Tag,
  Button
} = DS;
const FILTERS = ['All work', 'Stonework', 'Plantings', 'Outdoor living', 'Drainage'];
function Work({
  go
}) {
  const [filter, setFilter] = React.useState('All work');
  const shown = filter === 'All work' ? PROJECTS : PROJECTS.filter(p => p.category === filter);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(NavBar, {
    links: NAV,
    activeHref: "/work",
    phone: "918.555.2476",
    assetBase: ASSETS,
    onCta: () => go('contact'),
    style: {
      padding: 'var(--space-5) 0',
      borderBottom: '1px solid var(--border-hairline)'
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Our work",
    title: "Every property, photographed as built",
    intro: "No renderings. Each project below was shot after the final sweep.",
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap',
      marginTop: 'var(--space-7)'
    }
  }, FILTERS.map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    selected: filter === f,
    onClick: () => setFilter(f)
  }, f))))), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-4)'
    }
  }, shown.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.slug,
    onClick: () => go('project', p)
  }, /*#__PURE__*/React.createElement(ProjectCard, {
    category: p.category,
    title: p.title,
    location: p.location,
    imageSlotId: 'work-' + p.slug
  })))), shown.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-subtle)'
    }
  }, "No projects in this category yet."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('contact')
  }, "Ask about a project like these")))));
}
window.Work = Work;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Work.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/shared.jsx
try { (() => {
const DS = window.StoneStemDesignSystem_50e91a;
const ASSETS = '../../assets';
const NAV = [{
  href: '/services',
  label: 'Services'
}, {
  href: '/work',
  label: 'Our work'
}, {
  href: '/about',
  label: 'About'
}, {
  href: '/contact',
  label: 'Contact'
}];
const SERVICES = [{
  index: '01',
  icon: 'ruler',
  title: 'Design',
  description: 'Measured site plans and planting drawings before anything is built.'
}, {
  index: '02',
  icon: 'hammer',
  title: 'Build',
  description: 'One crew from first cut to final sweep — no subcontracted hand-offs.'
}, {
  index: '03',
  icon: 'mountain-snow',
  title: 'Stonework',
  description: 'Dry-laid walls, cut-stone steps and flagstone terraces set to last.'
}, {
  index: '04',
  icon: 'leaf',
  title: 'Plantings',
  description: 'Beds chosen for the site\u2019s light, soil and water — not a catalogue.'
}, {
  index: '05',
  icon: 'flame',
  title: 'Outdoor living',
  description: 'Kitchens, fire features and shade structures matched to the house.'
}, {
  index: '06',
  icon: 'lightbulb',
  title: 'Lighting',
  description: 'Low-voltage paths, uplit specimens and warm 2700K fixtures.'
}, {
  index: '07',
  icon: 'droplets',
  title: 'Drainage',
  description: 'Grading, dry creeks and French drains that move water away quietly.'
}];
const PROJECTS = [{
  slug: 'terraced-bluestone',
  category: 'Stonework',
  title: 'Terraced bluestone patio',
  location: 'Midtown Tulsa, OK',
  year: '2025',
  scope: ['Stonework', 'Plantings', 'Lighting']
}, {
  slug: 'oak-shade-garden',
  category: 'Plantings',
  title: 'Oak shade garden',
  location: 'Jenks, OK',
  year: '2025',
  scope: ['Plantings', 'Drainage']
}, {
  slug: 'evening-fire-court',
  category: 'Outdoor living',
  title: 'Evening fire court',
  location: 'Bixby, OK',
  year: '2024',
  scope: ['Outdoor living', 'Stonework', 'Lighting']
}, {
  slug: 'creekside-drainage',
  category: 'Drainage',
  title: 'Creekside dry creek bed',
  location: 'Broken Arrow, OK',
  year: '2024',
  scope: ['Drainage', 'Plantings']
}, {
  slug: 'front-walk-limestone',
  category: 'Stonework',
  title: 'Limestone front walk',
  location: 'Tulsa, OK',
  year: '2024',
  scope: ['Stonework']
}, {
  slug: 'kitchen-pergola',
  category: 'Outdoor living',
  title: 'Kitchen &amp; pergola',
  location: 'Jenks, OK',
  year: '2023',
  scope: ['Outdoor living', 'Lighting']
}];
function Icon({
  name,
  size = 20
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = '';
      const i = document.createElement('i');
      i.setAttribute('data-lucide', name);
      ref.current.appendChild(i);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          'stroke-width': 1.5
        }
      });
    }
  }, [name, size]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'flex',
      lineHeight: 0
    }
  });
}
function Wrap({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: style
  }, children);
}
Object.assign(window, {
  DS,
  ASSETS,
  NAV,
  SERVICES,
  PROJECTS,
  Icon,
  Wrap
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ImageFrame = __ds_scope.ImageFrame;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StatRow = __ds_scope.StatRow;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
