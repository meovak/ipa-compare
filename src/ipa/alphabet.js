const alphabet = {
  112: { name: 'voiceless bilabial plosive' },
  105: { name: 'close front unrounded vowel' },
  593: { name: 'open back unrounded' },
  592: { name: 'open-mid schwa' },
  594: { name: 'open back rounded' },
  230: { name: 'raised open front unrounded' },
  595: { name: 'vd bilabial implosive' },
  665: { name: 'vd bilabial trill' },
  946: { name: 'vd bilabial fricative' },
  596: { name: 'open-mid back rounded' },
  597: { name: 'vl alveolopalatal fricative' },
  231: { name: 'vl palatal fricative' },
  599: { name: 'vd alveolar implosive' },
  598: { name: 'vd retroflex plosive' },
  240: { name: 'vd dental fricative' },
  676: { name: 'vd postalveolar affricate' },
  601: { name: 'schwa' },
  600: { name: 'close-mid schwa' },
  602: { name: 'rhotacized schwa' },
  603: { name: 'open-mid front unrounded' },
  604: { name: 'open-mid central' },
  605: { name: 'rhotacized open-mid central' },
  606: { name: 'open-mid central rounded' },
  607: { name: 'vd palatal plosive' },
  644: { name: 'vd palatal implosive' },
  609: {
    name: 'vd velar plosive (but the IPA has ruled that an ordinary g is also acceptable)',
  },
  608: { name: 'vd velar implosive' },
  610: { name: 'vd uvular plosive' },
  667: { name: 'vd uvular implosive' },
  614: { name: 'vd glottal fricative' },
  615: { name: 'vl multiple-place fricative' },
  295: { name: 'vl pharyngeal fricative' },
  613: { name: 'labial-palatal approximant' },
  668: { name: 'vl epiglottal fricative' },
  616: { name: 'close central unrounded' },
  618: { name: 'lax close front unrounded' },
  669: { name: 'vd palatal fricative' },
  621: { name: 'vd retroflex lateral' },
  620: { name: 'vl alveolar lateral fricative' },
  619: {
    name: 'velarized vd alveolar lateral (ready-made combination, dark l)',
  },
  622: { name: 'vd alveolar lateral fricative' },
  671: { name: 'vd velar lateral' },
  625: { name: 'vd labiodental nasal' },
  623: { name: 'close back unrounded' },
  624: { name: 'velar approximant' },
  331: { name: 'vd velar nasal' },
  627: { name: 'vd retroflex nasal' },
  626: { name: 'vd palatal nasal' },
  628: { name: 'vd uvular nasal' },
  248: { name: 'front close-mid rounded' },
  629: { name: 'rounded schwa' },
  632: { name: 'vl bilabial fricative' },
  952: { name: 'vl dental fricative' },
  339: { name: 'front open-mid rounded' },
  630: { name: 'front open rounded' },
  664: { name: 'bilabial click' },
  633: { name: 'vd (post)alveolar approximant' },
  634: { name: 'vd alveolar lateral flap' },
  638: { name: 'vd alveolar tap' },
  635: { name: 'vd retroflex approximant' },
  640: { name: 'vd uvular trill' },
  641: { name: 'vd uvular fricative' },
  637: { name: 'vd retroflex flap' },
  642: { name: 'vl retroflex fricative' },
  643: { name: 'vl postalveolar fricative' },
  648: { name: 'vl retroflex plosive' },
  679: { name: 'vl postalveolar affricate' },
  649: { name: 'close central rounded' },
  650: { name: 'lax close back rounded' },
  651: { name: 'vd labiodental approximant' },
  11377: { name: 'voiced labiodental flap' },
  652: { name: 'open-mid back unrounded' },
  611: { name: 'vd velar fricative' },
  612: { name: 'close-mid back unrounded' },
  653: { name: 'vl labial-velar fricative' },
  967: { name: 'vl uvular fricative' },
  654: { name: 'vd palatal lateral' },
  655: { name: 'lax close front rounded' },
  657: { name: 'vd alveolopalatal fricative' },
  656: { name: 'vd retroflex fricative' },
  658: { name: 'vd postalveolar fricative' },
  660: { name: 'glottal plosive' },
  673: { name: 'vd epiglottal plosive' },
  661: { name: 'vd pharyngeal fricative' },
  674: { name: 'vd epiglottal fricative' },
  448: { name: 'dental click' },
  449: { name: 'alveolar lateral click' },
  450: { name: 'alveolar click' },
  451: { name: 'retroflex click' },
  712: { name: '(primary) stress mark' },
  716: { name: 'secondary stress' },
  720: {
    name: 'length mark NB: there is a bug in some versions of MS IExplorer that causes this character not to display. It is probably best to use a simple colon instead.',
  },
  721: { name: 'half-length' },
  700: { name: 'ejective' },
  692: { name: 'rhotacized' },
  688: { name: 'aspirated' },
  689: { name: 'breathy-voice-aspirated' },
  690: { name: 'palatalized' },
  695: { name: 'labialized' },
  736: { name: 'velarized' },
  740: { name: 'pharyngealized' },
  734: { name: 'rhotacized' },
  805: { name: 'voiceless' },
  778: { name: 'voiceless (use if character has descender)' },
  804: { name: 'breathy voiced' },
  810: { name: 'dental' },
  812: { name: 'voiced' },
  816: { name: 'creaky voiced' },
  826: { name: 'apical' },
  828: { name: 'linguolabial' },
  827: { name: 'laminal' },
  794: { name: 'not audibly released' },
  825: { name: 'more rounded' },
  771: { name: 'nasalized' },
  796: { name: 'less rounded' },
  799: { name: 'advanced' },
  800: { name: 'retracted' },
  776: { name: 'centralized' },
  820: { name: 'velarized or pharyngealized' },
  829: { name: 'mid-centralized' },
  797: { name: 'raised' },
  809: { name: 'syllabic' },
  798: { name: 'lowered' },
  815: { name: 'non-syllabic' },
  792: { name: 'advanced tongue root' },
  793: { name: 'retracted tongue root' },
  774: { name: 'extra-short' },
  779: { name: 'extra high tone' },
  769: { name: 'high tone' },
  772: { name: 'mid tone' },
  768: { name: 'low tone' },
  783: { name: 'extra low tone' },
  860: { name: 'tie bar below' },
  865: { name: 'tie bar above' },
};
export default alphabet;