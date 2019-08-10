//=============================================================================
// edisonlee55Custom.js
//=============================================================================

/*:
 * @plugindesc edisonlee55 Custom Game Setup.
 * @author Edison Lee
 *
 * @help This plugin does not provide plugin commands.
 */

console.log(
  "%cTestの物語",
  "color: #F3BACA; font-size: 50px; font-family: 'Avenir', arial; text-shadow: 1px 1px #7b1e1e, 2px 2px #7b1e1e;"
);
console.log(
  "%cby MoeAngel",
  "color: #F3BACA; font-size: 45px; font-family: 'Avenir', arial; text-shadow: 1px 1px #7b1e1e, 2px 2px #7b1e1e;"
);
console.log(
  "%cAn edisonlee55 Company ~ ♥",
  "color: #F3BACA; font-size: 20px; font-family: 'Avenir', arial;"
);
console.log("Copyright (c) 2019 MoeAngel. All rights reserved.");
console.log("v0.0.1-alpha (RPGMV 1.6.2)");

Window_Base.prototype.standardFontFace = function() {
  if ($gameSystem.isChinese()) {
      return 'GameFont';
  } else if ($gameSystem.isKorean()) {
      return 'Dotum, AppleGothic, sans-serif';
  } else {
      return 'GameFont';
  }
};
