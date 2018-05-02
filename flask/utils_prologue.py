# get GROUPS
def get_user_groups():
    
    host = "https://graph.facebook.com"
    path = "/me/groups"
    params = urllib.parse.urlencode({"access_token": access_token})
    url = "{host}{path}?{params}".format(host=host, path=path, params=params)

    print(url)
    resp = urllib.request.urlopen(url).read()
    facebook_groups = json.loads(resp)

    # display the result
    pprint.pprint(facebook_groups)
    
 
    return facebook_groups

def get_group_id(group_name):
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
    return group_id
# get GROUPS
def get_info_from_group(group_id, fields):
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
    return info

def post_in_group(group_id, message):
    host = "https://graph.facebook.com/v2.12/"
    path = group_id + '/feed/'
    #params = urllib.urlencode({"access_token": access_token})
    params = urllib.parse.urlencode({"access_token": access_token, "message": message})

    url = "{host}{path}?{params}".format(host=host, path=path, params=params)
    print('url', url)

    post = requests.post(url)
    info = json.loads(post)

    # display the result
    pprint.pprint(info)
    return info

def get_page_access_token(access_token, page_name):
    post_access = ''
    host = "https://graph.facebook.com"
    path = "/me/accounts/"
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

    return post_access
   