import requests
import re
API_KEY='AIzaSyC4tATsCOUCoxe9XxfgLkkWYqUlFYMY6M4'

# Utility for parsing video id from video url
# youtubeURL: string
def parseIDFromURL(youtubeURL):
    # thanks to https://stackoverflow.com/questions/34833232/get-youtube-video-id-from-url-with-python-and-regex
    x = re.findall(r'(?:https?:\/\/)?(?:[0-9A-Z-]+\.)?(?:youtube|youtu|youtube-nocookie)\.(?:com|be)\/(?:watch\?v=|watch\?.+&v=|embed\/|v\/|.+\?v=)?([^&=\n%\?]{11})',youtubeURL)
    if not x or len(x)!=1:
        return None
    return x[0]

# videoID: string
# return: (string, string)
def getTitleAndAuthorFromVideo(videoID):
    args = {
        'part':'snippet',
        'id':videoID,
        'key':API_KEY
    }
    r = requests.get('https://www.googleapis.com/youtube/v3/videos', params=args)

    if r.status_code!=200 and r.status_code!=202:
        #print(r.status_code)
        return None, None
    
    videoInfo = r.json().get('items')[0]
    return videoInfo.get('snippet').get('title'), videoInfo.get('snippet').get('channelTitle')
