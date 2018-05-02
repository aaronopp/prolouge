import facebook
import requests

import os
import json
import urllib
import pprint

from flask import Flask, render_template, request, redirect, url_for, jsonify
from flask_cors import CORS
from forms import RemoteForm, TestForm

#access_token = 'EAAFYJTPKNhIBAPPAhroH86ytks6SsZAJKar99fidKvZCcIv6dAR4uZCeRF2zACoDmm4aFbJPNobD5XdsmeZCtJGeikBZA2yQIRM4GyzPIyxDqOZBKM7vrKrSpqN3tloFpj7ZC1NUArs0lbYfdZAc6F8qZCNbymvbWZAsjFUQVSmEThOhZANL2ZChkdcKsUdkQKfJbCUNzxrkoh3adAZDZD'
#access_token = 'EAAFYJTPKNhIBAPPAhroH86ytks6SsZAJKar99fidKvZCcIv6dAR4uZCeRF2zACoDmm4aFbJPNobD5XdsmeZCtJGeikBZA2yQIRM4GyzPIyxDqOZBKM7vrKrSpqN3tloFpj7ZC1NUArs0lbYfdZAc6F8qZCNbymvbWZAsjFUQVSmEThOhZANL2ZChkdcKsUdkQKfJbCUNzxrkoh3adAZDZD'

access_token_backup = 'EAAFYJTPKNhIBAJOtMZA78wLHJ6oeZBoBC92ZB2oa1h70gt3alSfu0ZACBlCcc8Q5FOAJZAelt1pSLN54gZAynrRZCxAEXLZBPbCM31k4JVl39CRuRpPZAVz43ZAGpXXyZBanKsYam9SPw2qd1ASuJzFltFuve53ZBQUB28Ug3pXZB89eZASkWcKCZBIJM8iWGUyZAcJOaX0ZD'


def post_in_posts(access_token='', group_id='166712014014887',page_id ='168457670492771', message='test_16'):
    host = "https://graph.facebook.com/v2.12/"
    path = page_id + '/feed/'
    params = urllib.parse.urlencode({"access_token": access_token, "message": message})

    url = "{host}{path}?{params}".format(host=host, path=path, params=params)
    print('url', url)

    post = requests.post(url)
    info = json.loads(post.text)

    # display the result
    #pprint.pprint(info)
    return jsonify(info)

def post_in_group(access_token='', group_id='166712014014887', message='test_14'):

    host = "https://graph.facebook.com/v2.12/"
    path = group_id + '/feed/'
    #params = urllib.urlencode({"access_token": access_token})
    params = urllib.parse.urlencode({"access_token": access_token, "message": message})

    url = "{host}{path}?{params}".format(host=host, path=path, params=params)
    print('url', url)

    post = requests.post(url)
    info = json.loads(post.text)

    # display the result
    #pprint.pprint(info)
    return jsonify(info)


def inital_post(access_token=''):
    msg = '''
Hey everyone!

I’m using the Prolouge app to start a to start a Book Club in this group. 

I’m very excited for us to discuss and explore a book together, and think that great opportunity for us to connect and learn. If you are interested in joining, please vote for the book you would like to read below:

1. Leadership in Surgery by Melina R. Kibbe
2. Hot Lights, Cold Steel: Life, Death and Sleepless Nights in a Surgeon's First Years by Dr. Michael J. Collins
3. The Checklist Manifesto by Atul Gawande
            '''
    info_json = post_in_group(access_token=access_token, message=msg)
    return info_json

def buy_book(access_token=''):
    msg = '''
Based on our inital book poll, we are going to be reading Leadership in Surgery by Melinda R. Kibbe! If you want to participate, please join the Facebook page here, where all book related discussions will be held:

https://www.facebook.com/Leadership-in-Surgery-Book-Club-168457670492771/

If you do not already own the book, please get a hold of a copy! Here is a link to buy:

https://www.amazon.com/Leadership-Surgery-Success-Academic/dp/331911106X
            '''
    info_json = post_in_group(access_token=access_token, message=msg)
    return info_json

def speed_poll(access_token=''):
    msg = '''
We now have to decide how fast we are going to read Leadership in Surgery. It is 200 pages long, please select your preferred speed in the poll below:

1. Finish the book in 1 month (7 pages/day)
2. Finish the book in 2 weeks (14 pages/day)
3. Finish the book in 1 week (28 pages/day)

            '''
    info_json = post_in_posts(access_token=access_token, message=msg)

def discussion_type(access_token=''):
    msg = '''
For book discussion, feel free to post any of your thoughts on this page at any time, and be as active as you want! We encourage meaningful and active discussion as we all read this book together. 

In addition, I will be hosting one virtual meeting a week. What format would you like the meeting to be in?

1. Standard Facebook Post and Comment thread
2. Video Chat
3. Facebook live stream moderated by a page administrator
4. Facebook Spaces (VR - special equipment required)

            '''
    info_json = post_in_posts(access_token=access_token, message=msg)
    return info_json

def question_1(access_token=''):
    msg = '''
Chapter 1: What is “Leadership” and how does it relate to “Emotional Intelligence.” Post your thoughts in the comments section below!
            '''
    info_json = post_in_posts(access_token=access_token, message=msg)
    return info_json

def question_2(access_token=''):
    msg = '''
Chapter 2: Why is it important that surgeons become leaders in the medical community? 
            '''
    info_json = post_in_posts(access_token=access_token, message=msg)
    return info_json

def question_3(access_token=''):
    msg = '''
Chapter 3: How does the experience of training residents prepare surgeons to take the next step into leadership positions?
            '''
    info_json = post_in_posts(access_token=access_token, message=msg)
    return info_json
