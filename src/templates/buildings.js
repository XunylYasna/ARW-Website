function importAll(r) {
    return r.keys().map(r);
}
  
const aso = importAll(require.context('../assets/images/Clusters/ASO ICONS/', false, /\.(png|jpe?g|svg)$/));
// 175
//                     chemsoc,          math,             physoc,           societas vitae
const asoPositions = [{x: 345, y: 320}, {x: 150, y: 360}, {x: 510, y: 195}, {x: 715, y: 245}]

const aspire = importAll(require.context('../assets/images/Clusters/ASPIRE ICONS/', false, /\.(png|jpe?g|svg)$/));
// 185
//                        aisec,           aja,           arcg,            unicef,         englicom,        eco,             gas,             gmc,             hfh,            hultprize,        investors,       oc,             prism,          rotaract,         united,          wg                                                                                      
const aspirePositions = [{x: 100, y: 160},{x: 0, y: 350},{x: 310, y: 160},{x: 400, y: 50},{x: 750, y: -10},{x: 600, y: 160}, {x: 325, y:350},{x: 765, y: 285},{x: 795, y: 435},{x: 150, y: 360},{x: 935, y: 445},{x: 550, y: 25},{x: 750, y: 140},{x: 925, y: 285},{x: 625, y: 410},{x: 900, y: 40}]

const cap12 = importAll(require.context('../assets/images/Clusters/CAP12 ICONS/', false, /\.(png|jpe?g|svg)$/));
// 175
//                       amstud,           bss,             cultura,         devint,           danum,           esa,              nkk,             pilosopo,         poliscy,          sdh,             sms,               teamcomm
const cap12Positions = [{x: 200, y: 385}, {x: 150, y: 25}, {x: 500, y: 30}, {x: 300, y: 100}, {x: 825, y: 255}, {x: 350, y: 350}, {x: 0, y: 150}, {x: 760, y: 25}, {x: 475, y: 175}, {x: 120, y: 250}, {x: 900, y: 100}, {x: 800, y: 370}]

const engage = importAll(require.context('../assets/images/Clusters/ENGAGE ICONS/', false, /\.(png|jpe?g|svg)$/));
// 200
//                        CES,             CHEN,            ECES,             IMES,            LSCS,             MES,             SME,            ACCESS   
const engagePositions = [{x: 20, y: 100}, {x:800, y: 30}, {x: 550, y: 375}, {x: 140, y: 375}, {x: 645, y: 200}, {x: 560, y: 5}, {x: 250, y: 165}, {x: 350, y: 400}];

const probe = importAll(require.context('../assets/images/Clusters/PROBE ICONS/', false, /\.(png|jpe?g|svg)$/));
// 225
//                       adcreate,        bms,             econorg,         jema,           jpia,           lls,            mafia,          yes
const probePositions = [{x: 100, y: 370},{x: 325, y: 190},{x: 860, y: 200},{x: 100, y: 90},{x: 650, y: 0},{x: 775, y: 390},{x: 265, y: 50},{x: 695, y: 175}]

export { aso, asoPositions, aspire, aspirePositions, cap12, cap12Positions, engage, engagePositions, probe, probePositions };