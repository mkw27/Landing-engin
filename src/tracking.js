export function initTracking(pixelId) {
  if (!pixelId) {
    console.warn("Missing Pixel ID");
    return;
  }

  // Prevent double-loading
  if (window.__PIXEL_LOADED__) return;
  window.__PIXEL_LOADED__ = true;

  !(function(f,b,e,v,n,t,s){
    if(f.fbq)return;
    n=f.fbq=function(){
      n.callMethod ?
      n.callMethod.apply(n,arguments) : n.queue.push(arguments)
    };

    if(!f._fbq)f._fbq=n;
    n.push=n;
    n.loaded=!0;
    n.version='2.0';
    n.queue=[];

    t=b.createElement(e);
    t.async=!0;
    t.src=v;

    s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)
  })(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');

  fbq('init', pixelId);
  fbq('track', 'PageView');
}

export function trackViewContent(product) {
  if (!window.fbq) return;

  fbq('track', 'ViewContent', {
    content_name: product?.name?.ar || "product",
  });
}

export function trackCTA() {
  if (!window.fbq) return;
  fbq('track', 'InitiateCheckout');
}
