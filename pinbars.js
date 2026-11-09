/* Breadcrumb + Tab-Leiste bleiben beim Scrollen unter der Kopfzeile angeheftet. */
(function(){
  function measure(){
    const root = document.documentElement, tb = document.querySelector(".topbar");
    const t = tb ? Math.round(tb.getBoundingClientRect().height) : 0;
    root.style.setProperty("--pin-top", t+"px");
    const cr = document.querySelector("#app .crumb, #app .crumbs");
    root.style.setProperty("--pin-crumb", (cr ? Math.round(cr.getBoundingClientRect().height) : 0)+"px");
    const bg = getComputedStyle(document.body).backgroundColor;
    root.style.setProperty("--pin-bg", (bg && bg!=="rgba(0, 0, 0, 0)") ? bg : "#0b0d14");
  }
  let raf = 0;
  function sched(){ cancelAnimationFrame(raf); raf = requestAnimationFrame(measure); }
  addEventListener("resize", sched);
  addEventListener("load", function(){
    measure();
    const app = document.getElementById("app");
    if(app) new MutationObserver(sched).observe(app, {childList:true});
  });
})();
