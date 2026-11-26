#!/usr/bin/env python3
"""PNG Solutions post graphic (1080 x 1350) for Instagram and TikTok.

Usage:  python3 make_graphic.py spec.json out.png

spec.json keys
  eyebrow       short audience label, shown in capitals    e.g. "Home health"
  big           the headline. Up to 7 characters is drawn as a large statistic
                ("40%", "12", "1 in 3", "120"); anything longer is drawn as a
                headline sentence (keep it under about 75 characters)
  unit          optional word set beside a large statistic  e.g. "hours"
  sub           one line under the headline that says what the number or
                question means
  source        optional source line for a statistic         e.g. "Source: MGMA"
  list_head     heading over the numbered points
  items         3 or 4 short points (each under about 48 characters)
  url           footer left; default "pngsolutionsllc.com"
  footer_right  optional short label, footer right            e.g. "Survey readiness"

The logo is the real file logo08.png, placed unchanged apart from scaling.
The script stops with an error if the text does not fit; shorten it and rerun.
"""
import json
import os
import sys

from PIL import Image, ImageChops, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
NAVY = (0, 33, 71)
GREY = (74, 74, 74)
BLUE = (0, 86, 161)
LIGHT = (176, 179, 184)
SOURCE_GREY = (120, 124, 130)
WHITE = (255, 255, 255)
W, H, M = 1080, 1350, 84


def font(weight, size):
    return ImageFont.truetype(os.path.join(HERE, f"Roboto-{weight}.ttf"), size)


def trimmed_logo():
    im = Image.open(os.path.join(HERE, "logo08.png"))
    bg = Image.new("RGB", im.size, WHITE)
    box = ImageChops.difference(im.convert("RGB"), bg).getbbox()
    return im.crop(box)


def wrap(d, text, f, maxw):
    lines, cur = [], ""
    for word in text.split():
        trial = (cur + " " + word).strip()
        if d.textlength(trial, font=f) <= maxw:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    return lines


def spaced(d, xy, text, f, fill, gap=4):
    x, y = xy
    for ch in text:
        d.text((x, y), ch, font=f, fill=fill)
        x += d.textlength(ch, font=f) + gap


def make(spec, out):
    eyebrow = spec["eyebrow"].strip()
    big = spec["big"].strip()
    unit = spec.get("unit", "").strip()
    sub = spec.get("sub", "").strip()
    source = spec.get("source", "").strip()
    list_head = spec["list_head"].strip()
    items = [i.strip() for i in spec["items"]]
    url = spec.get("url", "pngsolutionsllc.com").strip()
    footer_right = spec.get("footer_right", "").strip()
    if not 3 <= len(items) <= 4:
        sys.exit("ERROR: items must hold 3 or 4 points")

    im = Image.new("RGB", (W, H), WHITE)
    d = ImageDraw.Draw(im)
    logo = trimmed_logo()
    lw = 290
    lg = logo.resize((lw, int(logo.height * lw / logo.width)), Image.LANCZOS)
    im.paste(lg, (M, 70))
    y = 70 + lg.height + 60
    spaced(d, (M, y), eyebrow.upper(), font("700", 26), BLUE)
    y += 58

    if len(big) <= 7:
        f = font("900", 230)
        d.text((M - 8, y - 30), big, font=f, fill=NAVY)
        if unit:
            fu = font("900", 130)
            ux = M - 8 + d.textlength(big, font=f) + 26
            if ux + d.textlength(unit, font=fu) > W - M:
                sys.exit("ERROR: big + unit is too wide; shorten the unit")
            d.text((ux, y + 60), unit, font=fu, fill=NAVY)
        y += 230
        f = font("500", 44)
        for ln in wrap(d, sub, f, W - 2 * M):
            d.text((M, y), ln, font=f, fill=GREY)
            y += 56
    else:
        f = font("900", 64)
        for ln in wrap(d, big, f, W - 2 * M):
            d.text((M, y), ln, font=f, fill=NAVY)
            y += 76
        y += 10
        f = font("500", 36)
        for ln in wrap(d, sub, f, W - 2 * M):
            d.text((M, y), ln, font=f, fill=GREY)
            y += 47
    if source:
        y += 8
        f = font("400", 26)
        if d.textlength(source, font=f) > W - 2 * M:
            sys.exit("ERROR: source line is too long")
        d.text((M, y), source, font=f, fill=SOURCE_GREY)
        y += 40
    y += 28
    d.rectangle((M, y, M + 120, y + 6), fill=BLUE)
    y += 44
    f = font("700", 42)
    if d.textlength(list_head, font=f) > W - 2 * M:
        sys.exit("ERROR: list_head is too long for one line")
    d.text((M, y), list_head, font=f, fill=NAVY)
    y += 74
    fi = font("400", 36)
    fn = font("700", 30)
    for i, item in enumerate(items, 1):
        d.ellipse((M, y, M + 54, y + 54), fill=NAVY)
        n = str(i)
        d.text((M + 27 - d.textlength(n, font=fn) / 2, y + 9), n, font=fn, fill=WHITE)
        yy = y + 5
        for ln in wrap(d, item, fi, W - 2 * M - 80):
            d.text((M + 80, yy), ln, font=fi, fill=GREY)
            yy += 46
        y = max(yy, y + 54) + 24
    if y >= H - 150:
        sys.exit(f"ERROR: text runs {y - (H - 150)} px past the space; shorten it")

    # footer: grey angled strip over a navy band, after the letterhead
    d.polygon([(W * 0.52, H - 112), (W, H - 112), (W, H - 84), (W * 0.52 - 28, H - 84)], fill=GREY)
    d.polygon([(W * 0.60, H - 112), (W * 0.52, H - 112), (W * 0.52 - 28, H - 84), (W * 0.60 - 28, H - 84)], fill=LIGHT)
    d.rectangle((0, H - 84, W, H), fill=NAVY)
    f = font("500", 30)
    d.text((M, H - 60), url, font=f, fill=WHITE)
    if footer_right:
        f2 = font("700", 30)
        rx = W - M - d.textlength(footer_right, font=f2)
        if rx < M + d.textlength(url, font=f) + 40:
            sys.exit("ERROR: url and footer_right collide; shorten one")
        d.text((rx, H - 60), footer_right, font=f2, fill=WHITE)
    im.save(out)
    print(f"OK {out} {im.size[0]}x{im.size[1]}")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    with open(sys.argv[1], encoding="utf-8") as fh:
        make(json.load(fh), sys.argv[2])
