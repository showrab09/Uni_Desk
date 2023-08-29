import os
import random

for i in range(90):
    d = str(i) + ' days ago'
    rand_month = random.randint(4, 8)  # Generate a random month between 1 and _
    rand_day = random.randint(1, 29)    # Generate a random day between 1 and _
    with open('test.txt', 'a') as file:
        file.write(d + '\n')
    os.system('git add test.txt')
    os.system('git commit --date="2023-' + str(rand_month) + '-' + str(rand_day) + '" -m 1')

os.system('git push -u origin main')