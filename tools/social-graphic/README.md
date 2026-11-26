# PNG Solutions post graphics

`make_graphic.py` builds the 1080 x 1350 graphic that goes with each PNG post on
Instagram and TikTok, in the layout approved on Nov 18, 2026.

    python3 tools/social-graphic/make_graphic.py spec.json assets/social/png_ig_YYYY-MM-DD_topic.png

- `logo08.png` is the real logo file from `05_Brand/Logo`, unchanged. Never edit or replace it with a redrawn copy.
- Roboto is the typeface named on the brand board (license in `Roboto-LICENSE.txt`).
- `example-spec.json` shows every field. The script stops with an error when text does not fit.
- Finished graphics live in `assets/social/` and are served at `https://pngsolutionsllc.com/assets/social/<file>`.

Needs Python 3 with Pillow (`pip install pillow`).
