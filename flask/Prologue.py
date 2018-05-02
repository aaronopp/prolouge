import facebook
import requests

import os
import json
import urllib
import pprint

from flask import Flask, render_template, request, redirect, url_for, jsonify
from flask_cors import CORS
from forms import RemoteForm, TestForm
from utils_light import *
from utils_web import *

app = Flask(__name__)
CORS(app)
app.config.update(dict(
    SECRET_KEY="powerful secretkey",
    WTF_CSRF_SECRET_KEY="a csrf secret key"
))



#access_token = 'EAAFYJTPKNhIBAPPAhroH86ytks6SsZAJKar99fidKvZCcIv6dAR4uZCeRF2zACoDmm4aFbJPNobD5XdsmeZCtJGeikBZA2yQIRM4GyzPIyxDqOZBKM7vrKrSpqN3tloFpj7ZC1NUArs0lbYfdZAc6F8qZCNbymvbWZAsjFUQVSmEThOhZANL2ZChkdcKsUdkQKfJbCUNzxrkoh3adAZDZD'

access_token_backup = 'EAAFYJTPKNhIBAJOtMZA78wLHJ6oeZBoBC92ZB2oa1h70gt3alSfu0ZACBlCcc8Q5FOAJZAelt1pSLN54gZAynrRZCxAEXLZBPbCM31k4JVl39CRuRpPZAVz43ZAGpXXyZBanKsYam9SPw2qd1ASuJzFltFuve53ZBQUB28Ug3pXZB89eZASkWcKCZBIJM8iWGUyZAcJOaX0ZD'

@app.route('/postall', methods=['GET', 'POST'])
def post_all():
    access_token = request.args.get('access_token')
    if access_token is None:
        print('access token is none!')
        access_token = access_token_backup
    print("ACCESS TOKEN", access_token)

    info_init = inital_post(access_token=access_token)
    info_buy = buy_book(access_token=access_token)
    page_token = get_page_token(access_token=access_token)
    print('page token', page_token)
    info_speed = speed_poll(access_token=page_token)
    info_disc = discussion_type(access_token=page_token)
    info_q1 = question_1(access_token=page_token)
    info_q2 = question_2(access_token=page_token)
    info_q3 = question_3(access_token=page_token)   
 
    return info_init


@app.route('/getgroups', methods=['GET', 'POST'])
def get_groups(access_token=''):

    access_token = request.args.get('access_token')
    print('access token', access_token)
    host = "https://graph.facebook.com"
    path = "/me/groups"
    params = urllib.parse.urlencode({"access_token": access_token})
    url = "{host}{path}?{params}".format(host=host, path=path, params=params)

    print('getgroups url', url)
    resp = urllib.request.urlopen(url).read()
    facebook_groups = json.loads(resp)

    # display the result
    pprint.pprint(facebook_groups)
    
 
    return jsonify(facebook_groups)

@app.route('/getgroupid', methods=['GET', 'POST'])
def get_group_id(access_token='', group_name='Surgeons to Leader: A Sample Group for F8'):
    #Surgeons to Leader: A Sample Group for F8

    host = "https://graph.facebook.com"
    path = "/me/groups"
    params = urllib.parse.urlencode({"access_token": access_token})
    url = "{host}{path}?{params}".format(host=host, path=path, params=params)

    print(url)
    resp = urllib.request.urlopen(url).read()
    facebook_groups = json.loads(resp)

    # display the result
    pprint.pprint(facebook_groups)
    for name in facebook_groups["data"]:
        print (name["name"])
        if name["name"] == group_name:
            group_id = name["id"]
    return jsonify(group_id)

@app.route('/getgroupinfo', methods=['GET', 'POST'])
def get_group_info(access_token='', group_id='166712014014887', fields='feed'):
    # example is to set fields = feed and get all posts!
    
    host = "https://graph.facebook.com"
    path = "/me/groups"

    params = urllib.parse.urlencode({"access_token": access_token, "fields": fields})
    url = "{host}{path}?{params}".format(host=host, path=path, params=params)
    print(url)
    resp = urllib.request.urlopen(url).read()
    # convert the returned JSON string to a Python datatype 
    info = json.loads(resp)

    # display the result
    pprint.pprint(info)
    return jsonify(info)


# @app.route('/initalpostgroup', methods=['GET', 'POST'])
# def inital_post():
#     msg = '''
# Hey everyone!

# I’m using the Prolouge app to start a to start a Book Club in this group. 

# I’m very excited for us to discuss and explore a book together, and think that great opportunity for us to connect and learn. If you are interested in joining, please vote for the book you would like to read below:

# 1. Leadership in Surgery by Melina R. Kibbe
# 2. Hot Lights, Cold Steel: Life, Death and Sleepless Nights in a Surgeon's First Years by Dr. Michael J. Collins
# 3. The Checklist Manifesto by Atul Gawande
#             '''
#     info_json = post_in_group(message=msg)
#     return info_json

# @app.route('/buybookgroup', methods=['GET', 'POST'])
# def buy_book():
#     msg = '''
# Based on our inital book poll, we are going to be reading Leadership in Surgery by Melinda R. Kibbe! If you want to participate, please join the Facebook page here, where all book related discussions will be held:

# https://www.facebook.com/Leadership-in-Surgery-Book-Club-168457670492771/

# If you do not already own the book, please get a hold of a copy! Here is a link to buy:

# https://www.amazon.com/Leadership-Surgery-Success-Academic/dp/331911106X
#             '''
#     info_json = post_in_group(message=msg)
#     return info_json


@app.route('/getpagetoken', methods=['GET', 'POST'])
def get_page_token(access_token='', page_name='Leadership in Surgery Book Club'):

    post_access = ''
    host = "https://graph.facebook.com/v3.0"
    path = "/me/accounts"
    #params = urllib.urlencode({"access_token": access_token})
    params = urllib.parse.urlencode({"access_token": access_token})

    url = "{host}{path}?{params}".format(host=host, path=path, params=params)
    print('url', url)
    # open the URL and read the response
    #resp = urllib.urlopen(url).read()
    resp = urllib.request.urlopen(url).read()
    # convert the returned JSON string to a Python datatype 
    resp = json.loads(resp)

    # display the result
    pprint.pprint(resp)
    for name in resp["data"]:
        print (name["name"])
        if name["name"] == page_name:
            post_access = name["access_token"]
            post_id = name['id']
    print('\n\n\n post access:', post_access)
    return (post_access)#, jsonify(post_id)
# @app.route('/speedpollpage', methods=['GET', 'POST'])
# def speed_poll():
#     msg = '''
# We now have to decide how fast we are going to read Leadership in Surgery. It is 200 pages long, please select your preferred speed in the poll below:

# 1. Finish the book in 1 month (7 pages/day)
# 2. Finish the book in 2 weeks (14 pages/day)
# 3. Finish the book in 1 week (28 pages/day)

#             '''
#     info_json = post_in_posts(message=msg)
#     return info_json
# @app.route('/discussiontypepage', methods=['GET', 'POST'])
# def discussion_type():
#     msg = '''
# For book discussion, feel free to post any of your thoughts on this page at any time, and be as active as you want! We encourage meaningful and active discussion as we all read this book together. 

# In addition, I will be hosting one virtual meeting a week. What format would you like the meeting to be in?

# 1. Standard Facebook Post and Comment thread
# 2. Video Chat
# 3. Facebook live stream moderated by a page administrator
# 4. Facebook Spaces (VR - special equipment required)

#             '''
#     info_json = post_in_posts(message=msg)
#     return info_json

# @app.route('/discussionquestion1', methods=['GET', 'POST'])
# def question_1():
#     msg = '''
# Chapter 1: What is “Leadership” and how does it relate to “Emotional Intelligence.” Post your thoughts in the comments section below!
#             '''
#     info_json = post_in_posts(message=msg)
#     return info_json

# @app.route('/discussionquestion2', methods=['GET', 'POST'])
# def question_2():
#     msg = '''
# Chapter 2: Why is it important that surgeons become leaders in the medical community? 
#             '''
#     info_json = post_in_posts(message=msg)
#     return info_json

# @app.route('/discussionquestion3', methods=['GET', 'POST'])
# def question_3():
#     msg = '''
# Chapter 3: How does the experience of training residents prepare surgeons to take the next step into leadership positions?
#             '''
#     info_json = post_in_posts(message=msg)
#     return info_json


if __name__ == '__main__':

    app.run(debug=True)
