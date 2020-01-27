import random
import json

#Fake_History_ActiveCalories.json
times = []
fairly = []
light = []
very = []
calorie = []
heart = []
A = 1525104000000
B = 1556640000000
c = 1
f = 50
l = 30
v = 20
COUNT = 300

times = random.sample(range(A,B+1),COUNT)
times.sort()
for x in range(300):
    fairly.append(random.randint(0,50))
    light.append(random.randint(0,30))
    very.append(random.randint(0,20))
    calorie.append(random.randint(1500,3200))
    heart.append(random.randint(60,130))

result_dic = {"Active_Light":[], "Active_Fairly":[], "Active_Very":[], "Calorie":[], "Heart":[], "BloodSugar":[], "SystolicBloodPressure":[], 
              "DiastolicBloodPressure":[], "Sleep_Deep":[], "Sleep_Light":[], "Sleep_Rem":[], "Sleep_Wake":[], "Cardi_rate":[], "Diebetes_rate":[],
              "box_Heart":[], "box_SystolicBloodPressure":[], "box_DiastolicBloodPressure":[], "box_BloodSugar":[],
              "box_Sleep":[], "box_Active":[], "box_Calorie":[], 
              "scatter_Heart":[], "scatter_SystolicBloodPressure":[], "scatter_DiastolicBloodPressure":[], "sactter_BloodSugar":[],
              "scatter_Sleep":[], "scatter_Active":[], "scatter_Calorie":[],
              "new_Heart":[], "new_SystolicBloodPressure":[], "new_DiastolicBloodPressure":[], "new_BloodSugar":[],
              "new_Sleep":[], "new_Active":[], "new_Calorie":[]}

for x in range(len(times)):
    result_dic["Active_Light"].append([times[x],light[x]])
    result_dic["Active_Fairly"].append([times[x],fairly[x]])
    result_dic["Active_Very"].append([times[x],very[x]])
    result_dic["Calorie"].append([times[x],calorie[x]])
    result_dic["Heart"].append([times[x],heart[x]])
	
#Fake_History_BloodSugarPressure.json
BloodSugar = []
SystolicBloodPressure = []
DiastolicBloodPressure = []

for x in range(300):
    BloodSugar.append(random.randint(60,120))
    SystolicBloodPressure.append(random.randint(110,140))
    DiastolicBloodPressure.append(random.randint(70,90))

for x in range(len(times)):
    result_dic["BloodSugar"].append([times[x],BloodSugar[x]])
    result_dic["SystolicBloodPressure"].append([times[x],SystolicBloodPressure[x]])
    result_dic["DiastolicBloodPressure"].append([times[x],DiastolicBloodPressure[x]])
	
#Fake_History_Sleep.json
Deep = []
Light = []
Rem = []
Wake = []

for x in range(300):
    Deep.append(random.randint(110,160))
    Light.append(random.randint(110,170))
    Rem.append(random.randint(110,165))
    Wake.append(random.randint(30,60))

for x in range(len(times)):
    result_dic["Sleep_Deep"].append([times[x],Deep[x]])
    result_dic["Sleep_Light"].append([times[x],Light[x]])
    result_dic["Sleep_Rem"].append([times[x],Rem[x]])
    result_dic["Sleep_Wake"].append([times[x],Wake[x]])
	
sample = [1,2,3]
sample2 = [1,2,3,4,5,6,7,8,9]
Cardi_rate = []
Diebetes_rate = []

for x in range(300):
    Cardi_rate.append(random.choice(sample))
    Diebetes_rate.append(random.choice(sample2))

for x in range(len(times)):
    result_dic["Cardi_rate"].append([times[x],Cardi_rate[x]])
    result_dic["Diebetes_rate"].append([times[x],Diebetes_rate[x]])
	
#scatter
total_sleep = []
total_active = []

for x in range(300):
    a = Deep[x] + Light[x] + Rem[x]
    b = fairly[x] + light[x] + very[x]
    total_sleep.append(a)
    total_active.append(b)

#平移、縮放
for x in range(len(times)):
    heart[x] = heart[x]*1.5 - 70
    SystolicBloodPressure[x] = SystolicBloodPressure[x]*6 - 640
    DiastolicBloodPressure[x] = DiastolicBloodPressure[x]*6 - 400
    BloodSugar[x] = BloodSugar[x]*3 - 220
    total_sleep[x] = total_sleep[x]*0.5 - 160
    total_active[x] = total_active[x]*2 - 40
    calorie[x] = calorie[x]*0.086 - 109.2

for x in range(len(times)):
    result_dic["scatter_Heart"].append([0,heart[x]])
    result_dic["scatter_SystolicBloodPressure"].append([1,SystolicBloodPressure[x]])
    result_dic["scatter_DiastolicBloodPressure"].append([2,DiastolicBloodPressure[x]])
    result_dic["sactter_BloodSugar"].append([3,BloodSugar[x]])
    result_dic["scatter_Sleep"].append([4,total_sleep[x]])
    result_dic["scatter_Active"].append([5,total_active[x]])
    result_dic["scatter_Calorie"].append([6,calorie[x]])
    
result_dic["new_Heart"].append([0,random.choice(heart)])
result_dic["new_SystolicBloodPressure"].append([1,random.choice(SystolicBloodPressure)])
result_dic["new_DiastolicBloodPressure"].append([2,random.choice(DiastolicBloodPressure)])
result_dic["new_BloodSugar"].append([3,random.choice(BloodSugar)])
result_dic["new_Sleep"].append([4,random.choice(total_sleep)])
result_dic["new_Active"].append([5,random.choice(total_active)])
result_dic["new_Calorie"].append([6,random.choice(calorie)])

#做box
def median(x):
    x = sorted(x)
    length = len(x)
    mid, rem = divmod(length, 2)    # divmod函数返回商和余数
    if rem:
        return x[:mid], x[mid+1:], x[mid]
    else:
        return x[:mid], x[mid:], (x[mid-1]+x[mid])/2

lHalf, rHalf, q2 = median(heart)
#print(median(lHalf)[2]) # 25
#print(q2)               # 50
#print(median(rHalf)[2]) # 75
result_dic["box_Heart"].append(min(heart))
result_dic["box_Heart"].append(median(lHalf)[2])
result_dic["box_Heart"].append(q2)
result_dic["box_Heart"].append(median(rHalf)[2])
result_dic["box_Heart"].append(max(heart))

lHalf, rHalf, q2 = median(SystolicBloodPressure)
#print(median(lHalf)[2]) # 25
#print(q2)               # 50
#print(median(rHalf)[2]) # 75
result_dic["box_SystolicBloodPressure"].append(min(SystolicBloodPressure))
result_dic["box_SystolicBloodPressure"].append(median(lHalf)[2])
result_dic["box_SystolicBloodPressure"].append(q2)
result_dic["box_SystolicBloodPressure"].append(median(rHalf)[2])
result_dic["box_SystolicBloodPressure"].append(max(SystolicBloodPressure))

lHalf, rHalf, q2 = median(DiastolicBloodPressure)
#print(median(lHalf)[2]) # 25
#print(q2)               # 50
#print(median(rHalf)[2]) # 75
result_dic["box_DiastolicBloodPressure"].append(min(DiastolicBloodPressure))
result_dic["box_DiastolicBloodPressure"].append(median(lHalf)[2])
result_dic["box_DiastolicBloodPressure"].append(q2)
result_dic["box_DiastolicBloodPressure"].append(median(rHalf)[2])
result_dic["box_DiastolicBloodPressure"].append(max(DiastolicBloodPressure))

lHalf, rHalf, q2 = median(BloodSugar)
#print(median(lHalf)[2]) # 25
#print(q2)               # 50
#print(median(rHalf)[2]) # 75
result_dic["box_BloodSugar"].append(min(BloodSugar))
result_dic["box_BloodSugar"].append(median(lHalf)[2])
result_dic["box_BloodSugar"].append(q2)
result_dic["box_BloodSugar"].append(median(rHalf)[2])
result_dic["box_BloodSugar"].append(max(BloodSugar))

lHalf, rHalf, q2 = median(total_sleep)
#print(median(lHalf)[2]) # 25
#print(q2)               # 50
#print(median(rHalf)[2]) # 75
result_dic["box_Sleep"].append(min(total_sleep))
result_dic["box_Sleep"].append(median(lHalf)[2])
result_dic["box_Sleep"].append(q2)
result_dic["box_Sleep"].append(median(rHalf)[2])
result_dic["box_Sleep"].append(max(total_sleep))

lHalf, rHalf, q2 = median(total_active)
#print(median(lHalf)[2]) # 25
#print(q2)               # 50
#print(median(rHalf)[2]) # 75
result_dic["box_Active"].append(min(total_active))
result_dic["box_Active"].append(median(lHalf)[2])
result_dic["box_Active"].append(q2)
result_dic["box_Active"].append(median(rHalf)[2])
result_dic["box_Active"].append(max(total_active))

lHalf, rHalf, q2 = median(calorie)
#print(median(lHalf)[2]) # 25
#print(q2)               # 50
#print(median(rHalf)[2]) # 75
result_dic["box_Calorie"].append(min(calorie))
result_dic["box_Calorie"].append(median(lHalf)[2])
result_dic["box_Calorie"].append(q2)
result_dic["box_Calorie"].append(median(rHalf)[2])
result_dic["box_Calorie"].append(max(calorie))

with open('fake_data4.json', "w",encoding='utf-8') as f:
    json.dump(result_dic,f,ensure_ascii=False,sort_keys=True, indent=4)