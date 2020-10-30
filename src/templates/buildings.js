function importAll(r) {
    return r.keys().map(r);
}
  
const aso = importAll(require.context('../assets/images/Clusters/ASO ICONS/', false, /\.(png|jpe?g|svg)$/));
const asoPositions = [{x: 155, y: 300}, {x: 785, y: 195}, {x: 415, y: 225}, {x: 1050, y: 260}]
const aspire = importAll(require.context('../assets/images/Clusters/ASPIRE ICONS/', false, /\.(png|jpe?g|svg)$/));
const aspirePositions = []
const cap12 = importAll(require.context('../assets/images/Clusters/CAP12 ICONS/', false, /\.(png|jpe?g|svg)$/));
//                       amstud,           bss,            devint,           danum,          esa,              nkk,             pilosopo,         poliscy,          sdh,             sms,               teamcomm
const cap12Positions = [{x: 180, y: 300}, {x: 175, y: 0}, {x: 150, y: 125}, {x: 10, y: 50}, {x: 375, y: 290}, {x: 575, y: 55}, {x: 100, y: 200}, {x: 475, y: 175}, {x: 635, y: 285}, {x: 975, y: 100}, {x: -20, y: 135}]
const cso = importAll(require.context('../assets/images/Clusters/CSO ICON/', false, /\.(png|jpe?g|svg)$/));
const csoPositions = [{}]
const engage = importAll(require.context('../assets/images/Clusters/ENGAGE ICONS/', false, /\.(png|jpe?g|svg)$/));
//                        CES,             CHEN,            ECES,             IMES,            LSCS,             MES,             SME,            ACCESS   
const engagePositions = [{x: 20, y: 100}, {x:800, y: 30}, {x: 550, y: 375}, {x: 140, y: 375}, {x: 645, y: 200}, {x: 560, y: 5}, {x: 250, y: 165}, {x: 350, y: 400}];
const probe = importAll(require.context('../assets/images/Clusters/PROBE ICONS/', false, /\.(png|jpe?g|svg)$/));
const probePositions = [{}]

export { aso, asoPositions, aspire, aspirePositions, cap12, cap12Positions, cso, csoPositions, engage, engagePositions, probe, probePositions };