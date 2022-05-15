# Noto Manchu 的技术细节
## 前言
Noto Sans Mongolian是Android、iOS、OSX等系统默认的蒙古文-满文字体，并且提供了阿礼噶礼字母，而且几乎完全符合[Unicode](http://www.unicode.org/reports/tr54/)对满文字形的标准化。然而，一方面Unicode对满文字形的规定存在问题，另一方面Noto Sans Mongolian字体和大多数中国使用的满文字体（比如太清、Sunggar和索贝特锡满字体）不符。因此，我们开发了这个在线工具，可以把满文拉丁转写尽量正确地转化为在Noto Sans Mongolian下正确变形的满文-锡伯文。

# Unicode标准的归纳总结
我们现在对每个Unicode满文字母的适用情况进行总结。**本段包含满文文本。**

## 元音字母

### 字母a
字母a ᠠ U+1820默认的首、中、尾形分别是一个冠+一个字牙ᠠ‍、一个字牙‍ᠠ‍和一个右摆尾‍ᠠ。在b ᠪ, p ᡦ, 不分阴阳性的k' ᠺ, g' ᡬ, h' ᡭ后，是左摆尾‍ᠠ᠋