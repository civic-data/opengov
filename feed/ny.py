#!/usr/bin/env python
import requests
import datetime
import time

# curl "http://openleg-dev.nysenate.gov/api/3/updates/2015-03-17T00:00:00/2015-03-17T01:00:00?type=processed&content-type=AGENDA&content-type=BILL&content-type=CALENDAR&detail=true&fields=true&limit=1000&key=6E9qUekhHoo4gAyZc4God2tC6KhBHxvd" 
# 2015-08-16 23:12:53.941603
# now=datetime.datetime.now()

now=time.gmtime()
# print now
nowformat=time.strftime("%Y-%m-%dT%H:%M:%S", now)
# print nowformat

now=datetime.datetime.now()
#print datetime.datetime.strftime("%Y-%m-%dT%H:%M:%S",now)
time2=now.strftime("%Y-%m-%dT%H:%M:%S")

# print time.mktime(now.timetuple())
# while time.mktime(now.timetuple()) > 1000:
while now.year > 2014:
    now-=datetime.timedelta(hours=1)
    time1=now.strftime("%Y-%m-%dT%H:%M:%S")

    result=requests.get("http://openleg-dev.nysenate.gov/api/3/updates/%s/%s?type=processed&content-type=AGENDA&content-type=BILL&content-type=CALENDAR&detail=true&fields=true&limit=1000&key=YOUR-KEY-HERE" % (time1,time2 ))
    print vars(result)
    print result.text
    time2=time1
