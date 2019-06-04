import threading
from queue import Queue
import time
import requests
import random
import hashlib

def sendReq(worker):
    time.sleep(0.5)
    # query length variation
    queries = ["shortquery", "regular length query",
            "longer query about five words",
            "Very Long Query Very Very Long Normally No one search like this",
            "Mission Impossible 1", "Mission Impossible 2",
            "Mission Impossible 3", "Jurassic Park 1",
            "shoquery", "regulaa length querry",
            "longer quury about fifth word", "Misson Possible 4"]
    query = random.choice(queries)
    requests.post('http://test.homelabdefense.com/search', json={"query": query})
    # write operation
    # sha = hashlib.sha256()
    # sha.update(str(worker).encode())
    # name = sha.hexdigest()
    #requests.post('http://test.homelabdefense.com/register', json={"name": name, "password": "d189hsanc1k-jczp{G"})
    # read operation
    #requests.post('http://test.homelabdefense.com/login', json={"name": name,"password": "qwertyuio123456"})


def threader():
    while True:
        worker = q.get()
        sendReq(worker)
        q.task_done()

q = Queue()

for x in range(20):
    t = threading.Thread(target = threader)
    t.daemon = True
    t.start()

start = time.time()

for worker in range(100000):
    q.put(worker)

q.join()

print('Entire job took: ', time.time()-start)
