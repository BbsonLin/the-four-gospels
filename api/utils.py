import json
import requests


def getVerses(passage='Mark', to_chapter=None):
    """
    from api.utils import getVerses
    getVerses(to_chapter=1)
    """
    chapter = 1
    verses = ''
    while True:
        if to_chapter is not None and chapter > to_chapter:
            break

        resp = requests.get(f'http://getbible.net/json?p={passage}{chapter}&v=cnt')
        if resp.text == 'NULL':
            break
        else:
            resp_data = json.loads(resp.text[1:-2])
            chapter_contents = resp_data['chapter'].values()
            chapter_verses = ''
            for content in chapter_contents:
                chapter_verses += content['verse'].replace('\r\n', '')
        verses += chapter_verses
        chapter += 1

    return verses
