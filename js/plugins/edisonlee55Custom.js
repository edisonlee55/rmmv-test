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

Bitmap.prototype.drawText = function(text, x, y, maxWidth, lineHeight, align) {
  // Note: Firefox has a bug with textBaseline: Bug 737852
  //       So we use 'alphabetic' here.
  if (text !== undefined) {
      var tx = x;
      var ty = y + lineHeight - (lineHeight - this.fontSize * 0.7) / 2;
      var context = this._context;
      var alpha = context.globalAlpha;
      maxWidth = maxWidth || 0xffffffff;
      if (align === 'center') {
          tx += maxWidth / 2;
      }
      if (align === 'right') {
          tx += maxWidth;
      }
      context.save();
      context.font = this._makeFontNameText();
      context.textAlign = align;
      context.textBaseline = 'alphabetic';
      context.globalAlpha = 1;
      //this._drawTextOutline(text, tx, ty, maxWidth);
      context.globalAlpha = alpha;
      this._drawTextBody(text, tx, ty, maxWidth);
      context.restore();
      this._setDirty();
  }
};

Window.prototype._updateCursor = function() {
  //var blinkCount = this._animationCount % 40;
  var blinkCount = 1;
  var cursorOpacity = this.contentsOpacity;
  if (this.active) {
      if (blinkCount < 20) {
          //cursorOpacity -= blinkCount * 8;
          cursorOpacity -= blinkCount * 70;
      } else {
          cursorOpacity -= (40 - blinkCount) * 8;
      }
  }
  this._windowCursorSprite.alpha = cursorOpacity / 255;
  this._windowCursorSprite.visible = this.isOpen();
};
