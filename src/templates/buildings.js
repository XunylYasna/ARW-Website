function importAll(r) {
    return r.keys().map(r);
}
  
const aso = importAll(require.context('../assets/images/Clusters/ASO ICONS/', false, /\.(png|jpe?g|svg)$/));
const aspire = importAll(require.context('../assets/images/Clusters/ASPIRE ICONS/', false, /\.(png|jpe?g|svg)$/));
const cap12 = importAll(require.context('../assets/images/Clusters/CAP12 ICONS/', false, /\.(png|jpe?g|svg)$/));
const cso = importAll(require.context('../assets/images/Clusters/CSO ICON/', false, /\.(png|jpe?g|svg)$/));
const engage = importAll(require.context('../assets/images/Clusters/ENGAGE ICONS/', false, /\.(png|jpe?g|svg)$/));
const engagePositions = [{x: 10, y: 75}, {x: 175, y: 85}, {x: 600, y: 40}, {x: 620, y: 180}, {x: 835, y: 10}, {x: 790, y: 190}, {x:625, y: 325}, {x: 400, y: 300}];
const probe = importAll(require.context('../assets/images/Clusters/PROBE ICONS/', false, /\.(png|jpe?g|svg)$/));

export { aso, aspire, cap12, cso, engage, engagePositions, probe };