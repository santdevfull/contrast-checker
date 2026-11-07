export const metadata = {"slug": "contrast-checker", "title": "Contrast Checker", "description": "Calculate WCAG color contrast ratios."};
export const fields = [{"name": "foreground", "label": "Foreground", "value": "#ffffff"}, {"name": "background", "label": "Background", "value": "#000000"}];
export function compute(input){
  function luminance(hex){const h=hex.replace('#','');if(!/^[\da-f]{6}$/i.test(h))throw Error('Invalid color');const v=[0,2,4].map(i=>parseInt(h.slice(i,i+2),16)/255).map(c=>c<=.04045?c/12.92:((c+.055)/1.055)**2.4);return .2126*v[0]+.7152*v[1]+.0722*v[2]}const a=luminance(input.foreground),b=luminance(input.background),ratio=(Math.max(a,b)+.05)/(Math.min(a,b)+.05);return {ratio:Number(ratio.toFixed(2)),aaNormal:ratio>=4.5,aaaNormal:ratio>=7}
}
